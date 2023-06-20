      program test
c
      real*8 p1,thick2,ampl1,ememb1,ememb,zj,sw1,dsw1
      real*8 r,radius,p2,sw2,dsw2
      real*8 xj,yj
c
      p1=2.0
      p2=2.0
      xj=0.0
      yj=0.0
      radius=5.0
      thick2=10.0
      ampl1= 10.0
      ampl2=-10.0
      do zj=-15.0,15.0,0.1
         call switch1(sw1,dsw1, zj,thick2, p1)
         Ememb1  = AMPL1*sw1
         call switch1(sw1,dsw1, zj,thick2, p1)
         r = sqrt(xj**2+yj**2)
         call switch2(sw2,dsw2, r,radius, p2)
         Ememb2  = AMPL2*sw1*sw2
c         write(6,'(4f10.5)') zj,ememb1,ememb2,ememb1+ememb2
         write(6,'(4f10.5)') zj,sw1,sw2

      enddo


c
      stop
      end


      subroutine switch1(sw,dsw, z,thick2, p1)
      real*8 sw, dsw, z,thick2, p1
      IF(abs(z).lt.thick2+p1)then
         IF(abs(z).lt.thick2)then
            sw  = 1.0d0
            dsw = 0.0d0
         else
            if(z.gt.0.0)then
              delz = (z-thick2)
              sw = 1.0d0+2*(delz/P1)**3-3*(delz/P1)**2
c              sw = -(2*(delz/P1)**3-3*(delz/P1)**2)
              dsw = (6*(delz/P1)**2-6*(delz/P1))/P1
            elseif(z.lt.0.0)then
              delz = (z+thick2)
              sw = 1.0d0-2*(delz/P1)**3-3*(delz/P1)**2
c              sw = -(-2*(delz/P1)**3-3*(delz/P1)**2)
              dsw = (-6*(delz/P1)**2-6*(delz/P1))/P1
            endif
         endif
      else
         sw  = 0.0d0
         dsw = 0.0d0
      endif
      return
      end

      subroutine switch2(sw,dsw, r,radius, p2)
      real*8 sw, dsw, r, radius, p2

      IF(r.lt.radius+p2)then
         IF(r.lt.radius)then
           sw  = 1.0d0
           dsw = 0.0d0
         else
           delr = (r-radius)
           sw = 1.0d0+2*(delr/p2)**3-3*(delr/p2)**2
           dsw = (6*(delr/p2)**2-6*(delr/p2))/p2
         endif
      else
         sw = 0.0d0
         dsw = 0.0d0
      endif

      return
      end
