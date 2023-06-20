      program pmf
c
      real*8 dist,dist2,dist6,dist12
      real*8 eps(2),sigma(2),cg(2)
      real*8 celec,cdie,pi
      real*8 c0,c1,c2,c3

      read(*,*) itype,jtype

      eps(1)=0.087D0            ! POT
      eps(2)=0.1500D0           ! CLA
      sigma(1)=3.142645         ! POT
      sigma(2)=4.044680         ! CLA
      cg(1)=1.0D0
      cg(2)=-1.0D0

      celec=332.0716D0
      cdie=80.0D0
      pi=3.141592658979D0

      epsij = sqrt(eps(itype)*eps(jtype))
      sigij = 0.5*(sigma(itype)+sigma(jtype))

      if(itype.eq.1.and.jtype.eq.1)then ! K-K
         c0=-0.6d0
         c1=4.4d0
         c2=0.9d0
         c3=0.80d0
         c4=0.25d0
      elseif(itype.eq.2.and.jtype.eq.2)then ! Cl-Cl
         c0=-0.50d0
         c1=4.9d0
         c2=0.9d0
         c3=0.8d0
         c4=0.25d0
      else                      ! K-Cl
         c0=-3.7d0
         c1=2.9d0
         c2=0.9d0
         c3=0.75d0
         c4=-0.0d0
      endif

      do dist=2.0d0,8.0d0,0.05d0
         dist2=dist*dist
         ener=celec*cg(itype)*cg(jtype)/dist/cdie
         dist6 = (sigij**2/dist2)**3
         dist12= dist6**2
         ener  = ener + 4*epsij*(dist12-dist6)

         dW1=c0*exp((c1-dist)/c2)*cos(c3*pi*(c1-dist))
         dW2=c4*(c1/dist)**6
         dW=dW1+dW2
 
         write(6,'(6f13.5)') dist,ener,dW,ener+dW,dW1,dW2
      enddo

      stop
      end
