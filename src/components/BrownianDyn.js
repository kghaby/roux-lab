import React, { useEffect, useRef, useState } from 'react';
import "../components/layout.css"; // global styles

//TODO: weird edge issue. particles are getting stuck on the edge of the screen like they cant wrap but want to if the mouse is up againt the opp edge. 
//TODO: potential function needs tweaking

const BrownianDyn = ({ D, F, T, dt, particleDensity }) => {
  const canvasRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1, y: -1 });
  const [particles, setParticles] = useState([]);
  const animationFrameIdRef = useRef(null);

  // Ensure canvas dimensions are set before initializing particles
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const numParticles = Math.ceil(Math.sqrt(Math.floor((canvas.width * canvas.height)) / 10000) * particleDensity);
    console.log("numParticles:", numParticles);
    const initParticles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      opacity: Math.random() * 0.2 + 0.3,
    }));

    setParticles(initParticles);
  }, [particleDensity]);

  const applyPeriodicBoundaryConditions = (dx, dy, canvasWidth, canvasHeight) => {
    if (dx > canvasWidth / 2) dx -= canvasWidth;
    if (dx < -canvasWidth / 2) dx += canvasWidth;
    if (dy > canvasHeight / 2) dy -= canvasHeight;
    if (dy < -canvasHeight / 2) dy += canvasHeight;
    return { dx, dy };
  };

  const potentialFunction = (distanceSquared) => {
    return Math.exp(-distanceSquared / 20000); // Example of a Gaussian-like potential
  };

  // Main animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const offset = (0.5 * fontSize) ** 2; // biggest particle

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        if (!isPaused) {
          let forceX = 0;
          let forceY = 0;

          if (mousePos.x >= 0 && mousePos.y >= 0) {
            const { dx, dy } = applyPeriodicBoundaryConditions(
              mousePos.x - particle.x,
              mousePos.y - particle.y,
              canvas.width,
              canvas.height
            );

            const distanceSquared = dx * dx + dy * dy;
            const forceMagnitude = potentialFunction(distanceSquared) * F;

            forceX = (dx / Math.sqrt(distanceSquared)) * forceMagnitude;
            forceY = (dy / Math.sqrt(distanceSquared)) * forceMagnitude;
          }

          particle.x += (Math.random() - 0.5) * 2 * Math.sqrt(2 * D * dt) + forceX * dt;
          particle.y += (Math.random() - 0.5) * 2 * Math.sqrt(2 * D * dt) + forceY * dt;

          // Smooth edge wrapping
          if (particle.x > canvas.width + offset) particle.x = -offset;
          if (particle.x < -offset) particle.x = canvas.width + offset;
          if (particle.y > canvas.height + offset) particle.y = -offset;
          if (particle.y < -offset) particle.y = canvas.height + offset;
        }

        // Draw the particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, (particle.opacity * fontSize) ** 2, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(118, 30, 30, ${particle.opacity})`;
        ctx.fill();
      });

      animationFrameIdRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, [isPaused, D, F, T, dt, particles, mousePos]);

  // Handle mouse movement with throttling
  useEffect(() => {
    const canvas = canvasRef.current;

    let lastMoveTime = 0;
    const throttleDelay = 50; // Throttle mouse move events to 20 FPS

    const handleMouseMove = (event) => {
      const now = Date.now();
      if (now - lastMoveTime > throttleDelay) {
        lastMoveTime = now;

        const rect = canvas.getBoundingClientRect();
        setMousePos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -1, y: -1 }); // Reset to out of bounds
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Handle canvas resizing without reinitializing particles
  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <canvas
      ref={canvasRef}
      onClick={handlePause}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0.1,
        width: '100%',
        height: '100%',
        opacity: 0,
      }}
      className="brownian"
    />
  );
};

export default BrownianDyn;
