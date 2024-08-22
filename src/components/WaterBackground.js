import React, { useEffect, useRef } from "react";
import "./WaterBackground.css";

const WaterBackground = ({ density = 1 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const molecules = [];
    const container = containerRef.current;
    container.width = window.innerWidth;
    container.height = Math.max(window.innerHeight,window.innerWidth);
    const numWaters = Math.ceil(Math.sqrt(Math.floor((container.width * container.height)) / 10000) * density);
    console.log("numWaters:", numWaters);
    const maxScrollSpeed = 0.5;
    const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const offset = (20 * fontSize);

    function createMolecule() {
      const molecule = document.createElement("div");
      const oxygen = document.createElement("div");
      const hydrogen1 = document.createElement("div");
      const hydrogen2 = document.createElement("div");

      const baseAtomLength = (ZDist) => 1 + (1 - ZDist) * 4; // Length in rem
      const baseAtomOpacity = (ZDist) => 0.1 + (1 - ZDist) * 0.9;

      const oxygenZDist = Math.random();
      const oxygenLength = baseAtomLength(oxygenZDist);
      const oxygenOpacity = baseAtomOpacity(oxygenZDist);

      const bondLength = (oxygenLength * 0.96) / 1.5;
      const angle1 = Math.random() * 2 * Math.PI;
      const angle2 = angle1 + (Math.PI * 104.5) / 180; // 104.5 degrees for H-O-H angle

      const hydrogen1X = bondLength * Math.cos(angle1);
      const hydrogen1Y = bondLength * Math.sin(angle1);
      const hydrogen1Z = 0;

      const hydrogen2X = bondLength * Math.cos(angle2);
      const hydrogen2Y = bondLength * Math.sin(angle2);
      const hydrogen2Z = 0;

      // Rotation
      const maxRotationAngle = Math.PI / 2; // Limit rotation to +/-45 degrees
      const rotationX = (Math.random() - 0.5) * maxRotationAngle;
      const rotationY = (Math.random() - 0.5) * maxRotationAngle;
      const rotationZ = 0; // Already established Z rotation with angle1

      const rotate3D = (x, y, z, rx, ry, rz) => {
        const cosX = Math.cos(rx);
        const sinX = Math.sin(rx);
        const cosY = Math.cos(ry);
        const sinY = Math.sin(ry);
        const cosZ = Math.cos(rz);
        const sinZ = Math.sin(rz);

        // Z rotation
        let x1 = x * cosZ - y * sinZ;
        let y1 = x * sinZ + y * cosZ;

        // Y rotation
        let z1 = z * cosY - x1 * sinY;
        x1 = x1 * cosY + z * sinY;

        // X rotation
        let y2 = y1 * cosX - z1 * sinX;
        z1 = y1 * sinX + z1 * cosX;

        return [x1, y2, z1];
      };

      const [hydrogen1XRot, hydrogen1YRot, hydrogen1ZRot] = rotate3D(
        hydrogen1X,
        hydrogen1Y,
        hydrogen1Z,
        rotationX,
        rotationY,
        rotationZ
      );

      const [hydrogen2XRot, hydrogen2YRot, hydrogen2ZRot] = rotate3D(
        hydrogen2X,
        hydrogen2Y,
        hydrogen2Z,
        rotationX,
        rotationY,
        rotationZ
      );

      // H Depth
      const hydrogen1ZDist = oxygenZDist + hydrogen1ZRot * 0.05; 
      const hydrogen1Length = baseAtomLength(hydrogen1ZDist);
      const hydrogen1Opacity = baseAtomOpacity(hydrogen1ZDist);

      const hydrogen2ZDist = oxygenZDist + hydrogen2ZRot * 0.05; 
      const hydrogen2Length = baseAtomLength(hydrogen2ZDist);
      const hydrogen2Opacity = baseAtomOpacity(hydrogen2ZDist);

      // Set styles
      molecule.className = "molecule";
      oxygen.className = "atom oxygen";
      hydrogen1.className = "atom hydrogen";
      hydrogen2.className = "atom hydrogen";

      // Change colors to reflect opacity
      const backgroundColor = [255, 255, 255];
      const oxygenColor = [219, 0, 0];
      const hydrogenColor = [211, 211, 211];
      const blendedOxygenColor = oxygenColor.map(
        (c, i) => c * oxygenOpacity + backgroundColor[i] * (1 - oxygenOpacity)
      );
      const blendedHydrogen1Color = hydrogenColor.map(
        (c, i) => c * hydrogen1Opacity + backgroundColor[i] * (1 - hydrogen1Opacity)
      );
      const blendedHydrogen2Color = hydrogenColor.map(
        (c, i) => c * hydrogen2Opacity + backgroundColor[i] * (1 - hydrogen2Opacity)
      );

      oxygen.style.backgroundColor = `rgb(${blendedOxygenColor.join(",")})`;
      hydrogen1.style.backgroundColor = `rgb(${blendedHydrogen1Color.join(",")})`;
      hydrogen2.style.backgroundColor = `rgb(${blendedHydrogen2Color.join(",")})`;

      const scalingFactor = 0.75; // like CPK

      oxygen.style.width = `${oxygenLength * scalingFactor}rem`;
      oxygen.style.height = `${oxygenLength * scalingFactor}rem`;
      oxygen.style.transform = `translateZ(${-oxygenZDist * 10}rem)`;

      hydrogen1.style.width = `${hydrogen1Length * 1.2 / 1.5 * scalingFactor}rem`;
      hydrogen1.style.height = `${hydrogen1Length * 1.2 / 1.5 * scalingFactor}rem`;
      hydrogen1.style.transform = `translate3d(${hydrogen1XRot}rem, ${hydrogen1YRot}rem, ${-hydrogen1ZDist * 10}rem)`;

      hydrogen2.style.width = `${hydrogen2Length * 1.2 / 1.5 * scalingFactor}rem`;
      hydrogen2.style.height = `${hydrogen2Length * 1.2 / 1.5 * scalingFactor}rem`;
      hydrogen2.style.transform = `translate3d(${hydrogen2XRot}rem, ${hydrogen2YRot}rem, ${-hydrogen2ZDist * 10}rem)`;

      // Initial position
      const posX = Math.random() * 98 + 1//container.width; // vw
      const posY = Math.random() * (container.height + offset); // px 
    
      molecule.style.transform = `translate(${posX}vw, ${posY}px)`;
      molecule.appendChild(oxygen);
      molecule.appendChild(hydrogen1);
      molecule.appendChild(hydrogen2);
      const speed = maxScrollSpeed * (1 - oxygenZDist);
      molecules.push({ element: molecule, speed, posX, posY });
    }

    for (let i = 0; i < numWaters; i++) {
      createMolecule();
    }

    // Sort molecules so that the ones further away are rendered first
    molecules.sort((a, b) => a.speed - b.speed);
    molecules.forEach((molecule) => {
      container.appendChild(molecule.element);
    });

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      molecules.forEach((molecule) => {
        const { element, speed, posX, posY } = molecule;
        let newY = posY - (scrollTop * speed) % (container.height+offset);
        // console.log(
        //   "container.height",container.height,"\n",
        //   "posY",posY,"\n",
        //   "scrollTop",scrollTop,"\n",
        //   "speed",speed,"\n",
        //   "offset",offset,"\n",
        //   "mod", scrollTop%(container.height+offset),"\n",
        //   "mod-scaled", (scrollTop * speed)%(container.height+offset),"\n",
        //   "newY-prewrap",newY,"\n",
        // );
        if (newY > container.height + offset/2) newY = newY - (container.height + offset);
        if (newY < -offset/2) newY = newY + (container.height + offset);
        // console.log(
        //   "newY-postwrap",newY,"\n",
        // );

        element.style.transform = `translate(${posX}vw, ${newY}px)`;
      });
    };
 
    handleScroll();
    window.addEventListener("scroll", handleScroll);
 
    return () => {
      window.removeEventListener("scroll", handleScroll);
      molecules.forEach((molecule) => container.removeChild(molecule.element));
      molecules.length = 0; 
    }; 
  }, [density]);

  return <div ref={containerRef} className="waterBackground" />;
};

export default WaterBackground;
