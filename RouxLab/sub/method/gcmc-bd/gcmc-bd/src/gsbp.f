      SUBROUTINE READPHI(UNIT,OUTU,WRD4)
C-----------------------------------------------------------------------
C read INPUT static external field PHIX or grid-based repulsion potential PHIV
c            and miscelaneous parameters
c
      implicit none
      include 'gsbp.fcm'   
      include 'grand.fcm'   
C
      INTEGER UNIT,OUTU

      INTEGER I,NCEL3
      INTEGER NCLx,NCLy,NCLz
      InTEGER IFIR,ILAS,ITYPE
      REAL*8  DCEL,TRANX,TRANY,TRANZ,XBCEN,YBCEN,ZBCEN
      REAL*8  EPSW,EPSP,CONC,TMEMB,ZMEMB1,EPSM
      CHARACTER*4   WRD4

      IF(UNIT.LE.0) GOTO 400
c
      READ(UNIT) NCLX,NCLY,NCLZ,DCEL,XBCEN,YBCEN,ZBCEN
      READ(UNIT) EPSW,EPSP,CONC,TMEMB,ZMEMB1,EPSM
      WRITE(OUTU,101)
      WRITE(OUTU,101) 'Number of grid point in X   (NCLX) = ',NCLX 
      WRITE(OUTU,101) 'Number of grid point in Y   (NCLY) = ',NCLY 
      WRITE(OUTU,101) 'Number of grid point in Z   (NCLZ) = ',NCLZ 
      WRITE(OUTU,102) 'Grid spacing                (DCEL) = ',DCEL
      WRITE(OUTU,102) 'Center of box in X          (XBCEN)= ',XBCEN
      WRITE(OUTU,102) 'Center of box in Y          (YBCEN)= ',YBCEN
      WRITE(OUTU,102) 'Center of box in Z          (ZBCEN)= ',ZBCEN
      WRITE(OUTU,102) 
      WRITE(OUTU,102) 'Solvent dielectric constant (EPSW) = ',EPSW
c     WRITE(OUTU,102) 'Protein dielectric constant (EPSP) = ',EPSP
      WRITE(OUTU,102) 'Salt concentration          (CONC) = ',CONC
      IF(TMEMB.GT.0.D0)THEN
         WRITE(OUTU,102)
         WRITE(OUTU,102)
     $        'Membrane thickness along Z  (TMEMB)= ',TMEMB
         WRITE(OUTU,102)
     $        'Membrane position along Z   (ZMEMB)= ',ZMEMB1
         WRITE(OUTU,102)
     $        'Membrane dielectric constant(EPSM) = ',EPSM
      ENDIF
      TRANX = 0.5D0*(NCLX-1)*DCEL
      TRANY = 0.5D0*(NCLY-1)*DCEL
      TRANZ = 0.5D0*(NCLZ-1)*DCEL
      WRITE(OUTU,102)
      WRITE(OUTU,102)
     $     'Box in X from ',XBCEN-TRANX,' to ',XBCEN+TRANX
      WRITE(OUTU,102)
     $     'Box in Y from ',YBCEN-TRANY,' to ',YBCEN+TRANY
      WRITE(OUTU,102)
     $     'Box in Z from ',ZBCEN-TRANZ,' to ',ZBCEN+TRANZ
      NCEL3  = NCLX*NCLY*NCLZ
      IF(WRD4.eq.'PHIX') then
         READ(UNIT) (PHIX(I),I=1,NCEL3)
         NCLx1=NCLx
         NCLy1=NCLy
         NCLz1=NCLz
         DCEL1=DCEL
         TRANX1=TRANX
         TRANY1=TRANY
         TRANZ1=TRANZ
         XBCEN1=XBCEN
         YBCEN1=YBCEN
         ZBCEN1=ZBCEN
         IF(LX/2.D0.gt.abs(XBCEN-TRANX).or.LX/2.D0.gt.XBCEN+TRANX)then
            write(outu,'(6x,a)') 
     $        'BD system is greater than a grid for potential in X-axis'
            stop
         ENDIF
         IF(LY/2.D0.gt.abs(YBCEN-TRANY).or.LY/2.D0.gt.YBCEN+TRANY)then
            write(outu,'(6x,a)') 
     $        'BD system is greater than a grid for potential in Y-axis'
            stop
         ENDIF
         IF(LZ/2.D0.gt.abs(ZBCEN-TRANZ).or.LZ/2.D0.gt.ZBCEN+TRANZ)then
            write(outu,'(6x,a)') 
     $        'BD system is greater than a grid for potential in Z-axis'
            stop
         ENDIF
      ENDIF

      IF(WRD4.eq.'PHIV') then
         IF(Qnmcden)THEN
            DO itype=1,ntype
               IFIR=(itype-1)*NCEL3+1
               ILAS=(itype-1)*NCEL3+NCEL3
               UNIT=(itype-1)+UNIT
               IF(itype.eq.1) THEN
                  READ(UNIT) (PHIV(I),I=IFIR,ILAS)
               ELSE
                  READ(UNIT) NCLX,NCLY,NCLZ,DCEL,XBCEN,YBCEN,ZBCEN
                  READ(UNIT) EPSW,EPSP,CONC,TMEMB,ZMEMB1,EPSM
                  READ(UNIT) (PHIV(I),I=IFIR,ILAS)
               ENDIF
               DO I=IFIR,ILAS
                  IF(PHIV(I).NE.0.E0) THEN
                     PHIV(I)=0.E0
                  ELSE
                     PHIV(I)=1.E0
                  ENDIF
               ENDDO
            ENDDO
         ELSE
            IFIR=1
            ILAS=NCEL3
            READ(UNIT) (PHIV(I),I=IFIR,ILAS)
            DO I=IFIR,ILAS
               IF(PHIV(I).NE.0.E0) THEN
                  PHIV(I)=0.E0
               ELSE
                  PHIV(I)=1.E0
               ENDIF
            ENDDO
         ENDIF
         NCLx2=NCLx
         NCLy2=NCLy
         NCLz2=NCLz
         DCEL2=DCEL
         TRANX2=TRANX
         TRANY2=TRANY
         TRANZ2=TRANZ
         XBCEN2=XBCEN
         YBCEN2=YBCEN
         ZBCEN2=ZBCEN
      ENDIF
c
 101  FORMAT(6X,A,I6,A)
 102  FORMAT(6X,A,F8.3,A,F8.3)
c
 400  CONTINUE
      RETURN
      END


      SUBROUTINE READMMIJ(UNIT,OUTU)
C-----------------------------------------------------------------------
C read INPUT matrix M* MMIJ for a spherical inner region
c
      implicit none
      include 'gsbp.fcm'   
C
      INTEGER UNIT,OUTU
      INTEGER I,J,IJ,JI,NTPOL2

      IF(UNIT.LE.0) GOTO 400
c
      READ(UNIT) SHAPE

      IF(SHAPE.EQ.'RECTBOX ') THEN
         READ(UNIT) XNPOL,YNPOL,ZNPOL
         WRITE(OUTU,101) 
     $        'Number of Legendre Polynomials in X  (XNPOL) = ',XNPOL
         WRITE(OUTU,101) 
     $        'Number of Legendre Polynomials in Y  (YNPOL) = ',YNPOL
         WRITE(OUTU,101)
     $        'Number of Legendre Polynomials in Z  (ZNPOL) = ',ZNPOL
         NTPOL =XNPOL*YNPOL*ZNPOL
         NTPOL2=NTPOL*NTPOL
         READ(UNIT) (LSTPX(I),I=1,NTPOL)
         READ(UNIT) (LSTPY(I),I=1,NTPOL)
         READ(UNIT) (LSTPZ(I),I=1,NTPOL)
         READ(UNIT) (MMIJ(I), I=1,NTPOL2)
         DO I=1,NTPOL
            DO J=1,NTPOL
               IF(I.GT.J) THEN
                  IJ=(I-1)*NTPOL+J
                  JI=(J-1)*NTPOL+I
                  MMIJ(IJ)=MMIJ(JI)
               ENDIF
            ENDDO
         ENDDO

      ELSEIF(SHAPE.EQ.'SPHERE  '.OR.SHAPE.EQ.'NSPHERE ') THEN
         SHAPE='SPHERE  '
         READ(UNIT) NMPOL
         WRITE(OUTU,101) 
     $        'Number of Multipoles                 (NMPOL) = ',NMPOL
         NTPOL = NMPOL*NMPOL
         NTPOL2= NTPOL*NTPOL
         READ(UNIT) (MMIJ(I),I=1,NTPOL2)
         CALL SPHE_SVPOL(NMPOL,LSTPL,LSTPM)
         DO I=1,NTPOL
            DO J=1,NTPOL
               IF(I.GT.J) THEN
                  IJ=(I-1)*NTPOL+J
                  JI=(J-1)*NTPOL+I
                  MMIJ(IJ)=MMIJ(JI)
               ENDIF
            ENDDO
         ENDDO

      ENDIF
c
 101  FORMAT(6X,A,I6,A)
c
 400  CONTINUE
      RETURN
      END


      SUBROUTINE VDWGD0TRLN(X,Y,Z,jtype,SVDW,NCLX,NCLY,NCLZ,DCEL,
     $           PHI1,TRANX,TRANY,TRANZ,XBCEN,YBCEN,ZBCEN,
     $           VZMIN,VZMAX,EVDWGD,Qbuffer,Qnmcden)
c-----------------------------------------------------------------------
c     This subroutine computes only the repulsive potental energey
c     for one particle used in subroutine INTERACT in simul.f
c
c     Repulsive forces - VDWF
c
      implicit none
      include 'consta.fcm'
      integer nclx,ncly,nclz,jtype
      real*4  phi1(*)
      real*8  x,y,z
      real*8  dcel,tranx,trany,tranz,xbcen,ybcen,zbcen
      real*8  vzmin,vzmax,svdw,evdwgd
      logical Qbuffer,Qnmcden
c   local
      INTEGER ncyz,ix,iy,iz,n1,in1,n2,in2,n3,in3,IFIR
      REAL*8  xi,yi,zi,ai,bi,ci,fi,savesvdw
      real*4  phisum,phiv
c
      ncyz=ncly*nclz
      EVDWGD=0.d0
      IFIR=0
      savesvdw=svdw
      if(Qbuffer) svdw=1.0D10
      if(Qnmcden) IFIR=(jtype-1)*nclx*ncyz
c
      if(z.lt.vzmin.or.z.gt.vzmax) goto 101
      xi=x+tranx-xbcen
      yi=y+trany-ybcen
      zi=z+tranz-zbcen
      if(x.le.0.0D0.or.x.gt.2.0D0*tranx) goto 101
      if(y.le.0.0D0.or.y.gt.2.0D0*trany) goto 101
      if(z.le.0.0D0.or.z.gt.2.0D0*tranz) goto 101
      ix=int(xi/dcel)+1
      iy=int(yi/dcel)+1
      iz=int(zi/dcel)+1

c     
c     Atom charge distribution by 8 adjacent grid points
c
      phisum=0.E0
      do n1=1,2
         in1=ix+n1-1
         ai=xi-(in1-1)*dcel
         ai=1.-abs(ai)/dcel
         in1=(in1-1)*ncyz
            
         do n2=1,2
            in2=iy+n2-1
            bi=yi-(in2-1)*dcel
            bi=1. - abs(bi)/dcel
            in2=(in2-1)*nclz
                  
            do n3=1,2
               in3=iz+n3-1
               ci=zi-(in3-1)*dcel
               ci=1. - abs(ci)/dcel
               fi=ai*bi*ci
               in3=in1+in2+in3

               phiv=phi1(in3+IFIR)
               phisum=phisum+phiv
               EVDWGD=EVDWGD+fi*svdw*phiv
                     
            enddo
         enddo
      enddo
      svdw=savesvdw
 101  continue
c
      RETURN
      END


      SUBROUTINE VDWGD1TRLN(NTOT,NFIX,X,Y,Z,type,SVDW,NCLX,NCLY,NCLZ,
     $           DCEL,PHI1,TRANX,TRANY,TRANZ,XBCEN,YBCEN,ZBCEN,
     $           VZMIN,VZMAX,FX,FY,FZ,EVDWGD,Qnmcden)
c-----------------------------------------------------------------------
c     This subroutine computes the repulsive potental energey and forces
c     based on the grid
c
c     Repulsive forces - VDWF
c
      implicit none
      include 'consta.fcm'
      integer NTOT,NFIX
      integer nclx,ncly,nclz,type(*)
      real*4  phi1(*)
      real*8  x(*),y(*),z(*),fx(*),fy(*),fz(*)
      real*8  dcel,tranx,trany,tranz,xbcen,ybcen,zbcen
      real*8  SVDW,EVDWGD,VZMIN,VZMAX
      logical Qnmcden
c   local
      INTEGER ncyz,i,ix,iy,iz,n1,in1,n2,in2,n3,in3,ifir
      real*8  vdwfx,vdwfy,vdwfz
      REAL*8  xi,yi,zi,ai,bi,ci,fi
      REAL*8  aisign,bisign,cisign,prefac
      real*4  phisum,phiv
c
      ncyz=ncly*nclz
      EVDWGD=0.d0
      IFIR=0
c
c     Main loop by atoms
c     
      do 101 i=NFIX+1,NTOT
         xi=x(i)
         yi=y(i)
         zi=z(i)
         if(zi.lt.vzmin.or.zi.gt.vzmax) goto 101
         xi=xi+tranx-xbcen
         yi=yi+trany-ybcen
         zi=zi+tranz-zbcen
         if(xi.le.0.0D0.or.xi.gt.2.0D0*tranx) goto 101
         if(yi.le.0.0D0.or.yi.gt.2.0D0*trany) goto 101
         if(zi.le.0.0D0.or.zi.gt.2.0D0*tranz) goto 101
         if(Qnmcden) IFIR=(abs(type(i))-1)*nclx*ncyz
         vdwfx=0.d0
         vdwfy=0.d0
         vdwfz=0.d0
         ix=int(xi/dcel)+1
         iy=int(yi/dcel)+1
         iz=int(zi/dcel)+1
c     
c     Atom charge distribution by 8 adjacent grid points
c
         phisum=0.E0
         do n1=1,2
            in1=ix+n1-1
            ai=xi-(in1-1)*dcel
            aisign=sign(1.d0,ai)
            ai=1.-abs(ai)/dcel
            in1=(in1-1)*ncyz
            
            do n2=1,2
               in2=iy+n2-1
               bi=yi-(in2-1)*dcel
               bisign=sign(1.d0,bi)
               bi=1. - abs(bi)/dcel
               in2=(in2-1)*nclz
                  
               do n3=1,2
                  in3=iz+n3-1
                  ci=zi-(in3-1)*dcel
                  cisign=sign(1.d0,ci)
                  ci=1. - abs(ci)/dcel
                  fi=ai*bi*ci
                  in3=in1+in2+in3

                  phiv=phi1(in3+IFIR)
                  phisum=phisum+phiv
                  prefac=phiv*svdw/dcel

                  if((ai.lt.(1.d0-rsmall)).and.(ai.gt.rsmall)) then
                     VDWFx=VDWFx+aisign*bi*ci*prefac
                  endif
                  if((bi.lt.(1.d0-rsmall)).and.(bi.gt.rsmall)) then
                     VDWFy=VDWFy+bisign*ai*ci*prefac
                  endif
                  if((ci.lt.(1.d0-rsmall)).and.(ci.gt.rsmall)) then
                     VDWFz=VDWFz+cisign*ai*bi*prefac
                  endif
c     
c     Electrostatic Energy 
c     
                  EVDWGD=EVDWGD+fi*svdw*phiv
                     
               enddo
            enddo
         enddo
         if(phisum.eq.8.E0) then
            write(6,'(a,i5,3f10.5)') 
     $       'Warning :: a ion is inside membrane or protein - ',
     $        i,x(i),y(i),z(i)
cim..            stop
         endif
         fx(i)=fx(i)+vdwfx
         fy(i)=fy(i)+vdwfy
         fz(i)=fz(i)+vdwfz
 101  enddo
c
      RETURN
      END


      SUBROUTINE VDWGD0SPLN(X,Y,Z,jtype,SVDW,NCLX,NCLY,NCLZ,DCEL,
     $           PHI1,TRANX,TRANY,TRANZ,XBCEN,YBCEN,ZBCEN,
     $           VZMIN,VZMAX,EVDWGD,Qbuffer,Qnmcden)
c-----------------------------------------------------------------------
c     This subroutine computes only the repulsive potental energey
c     for one particle used in subroutine INTERACT in simul.f
c
      implicit none
      include 'consta.fcm'
      integer nclx,ncly,nclz,jtype
      real*4  phi1(*)
      real*8  x,y,z
      real*8  dcel,tranx,trany,tranz,xbcen,ybcen,zbcen
      real*8  vzmin,vzmax,svdw,evdwgd
      logical Qbuffer,Qnmcden
c   local
      INTEGER ncyz,ix,iy,iz,ifir
      integer jx1,jx2,jy1,jy2,jz1,jz2,k,l,m,ipx,ipy,ipz
      REAL*8  xi,yi,zi,ai,bi,ci,fi,savesvdw
      real*8  xc,yc,zc,M3
      real*4  phiv
c
      if(jtype.eq.3.or.jtype.eq.4) return

      ncyz=ncly*nclz
      EVDWGD=0.d0
      IFIR=0
      savesvdw=svdw
      if(Qbuffer) svdw=1.0D10
      if(Qnmcden) IFIR=(jtype-1)*nclx*ncyz
c
      if(z.lt.vzmin.or.z.gt.vzmax) goto 101
      xi=x+tranx-xbcen
      yi=y+trany-ybcen
      zi=z+tranz-zbcen
      if(x.le.0.0D0.or.x.gt.2.0D0*tranx) goto 101
      if(y.le.0.0D0.or.y.gt.2.0D0*trany) goto 101
      if(z.le.0.0D0.or.z.gt.2.0D0*tranz) goto 101
      ix=int(xi/dcel)+1
      iy=int(yi/dcel)+1
      iz=int(zi/dcel)+1

      jx1=ix-1
      if(jx1.lt.1)jx1=1
      jx2=ix+2
      if(jx2.gt.nclx)jx2=nclx 
      jy1=iy-1
      if(jy1.lt.1)jy1=1
      jy2=iy+2
      if(jy2.gt.ncly)jy2=ncly
      jz1=iz-1
      if(jz1.lt.1)jz1=1
      jz2=iz+2
      if(jz2.gt.nclz)jz2=nclz

      do k=jx1,jx2
         ipx=(k-1)*ncyz
         xc=(k-1)*dcel
         ai=1.5d0-(xi-xc)/dcel
         ai=M3(ai)
         if(ai.eq.0.0) goto 90
         do l=jy1,jy2
            ipy=(l-1)*nclz+ipx
            yc=(l-1)*dcel
            bi=1.5d0-(yi-yc)/dcel
            bi=M3(bi)
            if(bi.eq.0.0) goto 89
            do m=jz1,jz2
               ipz=m+ipy
               zc=(m-1)*dcel
               ci=1.5d0-(zi-zc)/dcel
               fi=ai*bi*M3(ci)
               if(fi.eq.0.0) goto 88

               EVDWGD=EVDWGD+fi*svdw*phi1(ipz+IFIR)

 88         enddo
 89      enddo
 90   enddo
 101  continue
      svdw=savesvdw
c
      RETURN
      END

      SUBROUTINE VDWGD1SPLN(NTOT,NFIX,X,Y,Z,TYPE,SVDW,NCLX,NCLY,NCLZ,
     $           DCEL,PHI1,TRANX,TRANY,TRANZ,XBCEN,YBCEN,ZBCEN,
     $           VZMIN,VZMAX,FX,FY,FZ,EVDWGD,Qnmcden)
c-----------------------------------------------------------------------
c     This subroutine computes the repulsive potental energey and forces
c     based on the grid
c
c     Repulsive forces - VDWF
c
      implicit none
      include 'consta.fcm'
      integer NTOT,NFIX
      integer nclx,ncly,nclz,type(*)
      real*4  phi1(*)
      real*8  x(*),y(*),z(*),fx(*),fy(*),fz(*)
      real*8  dcel,tranx,trany,tranz,xbcen,ybcen,zbcen
      real*8  SVDW,EVDWGD,VZMIN,VZMAX
      logical Qnmcden
c   local
      INTEGER ncyz,i,ix,iy,iz,IFIR
      integer jx1,jx2,jy1,jy2,jz1,jz2,k,l,m,ipx,ipy,ipz
      real*8  vdwfx,vdwfy,vdwfz
      real*8  xi,yi,zi,ai,bi,ci,fi,dai,dbi,dci,prefac
      real*8  xc,yc,zc,M3,DM3
      real*4  phisum,phiv
c
      ncyz=ncly*nclz
      EVDWGD=0.d0
      IFIR=0
c
c     Main loop by atoms
c
      do 101 i=NFIX+1,NTOT

         xi=x(i)
         yi=y(i)
         zi=z(i)
         if(zi.lt.vzmin.or.zi.gt.vzmax) goto 101
         xi=xi+tranx-xbcen
         yi=yi+trany-ybcen
         zi=zi+tranz-zbcen
         if(xi.le.0.0D0.or.xi.gt.2.0D0*tranx) goto 101
         if(yi.le.0.0D0.or.yi.gt.2.0D0*trany) goto 101
         if(zi.le.0.0D0.or.zi.gt.2.0D0*tranz) goto 101
         if(Qnmcden) IFIR=(abs(type(i))-1)*nclx*ncyz

         vdwfx=0.d0
         vdwfy=0.d0
         vdwfz=0.d0
         xi=x(i)+tranx-xbcen
         yi=y(i)+trany-ybcen
         zi=z(i)+tranz-zbcen
         ix=int(xi/dcel)+1
         iy=int(yi/dcel)+1
         iz=int(zi/dcel)+1

         jx1=ix-1
         if(jx1.lt.1)jx1=1
         jx2=ix+2
         if(jx2.gt.nclx)jx2=nclx 
         jy1=iy-1
         if(jy1.lt.1)jy1=1
         jy2=iy+2
         if(jy2.gt.ncly)jy2=ncly
         jz1=iz-1
         if(jz1.lt.1)jz1=1
         jz2=iz+2
         if(jz2.gt.nclz)jz2=nclz

         phisum=0.E0
         do k=jx1,jx2
            ipx=(k-1)*ncyz
            xc=(k-1)*dcel
            ai=1.5d0-(xi-xc)/dcel
            dai=DM3(ai)
            ai=M3(ai)
            if(ai.eq.0.0.and.dai.eq.0.0) goto 90
            do l=jy1,jy2
               ipy=(l-1)*nclz+ipx
               yc=(l-1)*dcel
               bi=1.5d0-(yi-yc)/dcel
               dbi=DM3(bi)
               bi=M3(bi)
               if(bi.eq.0.0.and.dbi.eq.0.0) goto 89
               do m=jz1,jz2
                  ipz=m+ipy
                  zc=(m-1)*dcel
                  ci=1.5d0-(zi-zc)/dcel
                  dci=DM3(ci)
                  ci=M3(ci)
                  if(ci.eq.0.0.and.dci.eq.0.0) goto 88

                  fi=ai*bi*ci
                  phiv=phi1(ipz+IFIR)
                  phisum=phisum+phiv

c     Repulsive Forces
                  prefac=phiv*svdw/dcel
                  vdwfx=vdwfx+dai*bi*ci*prefac
                  vdwfy=vdwfy+ai*dbi*ci*prefac
                  vdwfz=vdwfz+ai*bi*dci*prefac

c     Repulsive Energy 
                  EVDWGD=EVDWGD+fi*svdw*phiv
                     
 88            enddo
 89         enddo
 90      enddo
         if(phisum.eq.27.E0) then
            write(6,'(a,i5,4f10.5)') 
     $       'Warning :: a ion is inside membrane or protein - ',
     $        i,x(i),y(i),z(i),phisum
cim..            stop
         endif
         fx(i)=fx(i)+vdwfx
         fy(i)=fy(i)+vdwfy
         fz(i)=fz(i)+vdwfz
 101  enddo
c
      RETURN
      END

      REAL*8 Function M3(x)
c------------------------------------------------------------------------
c
      implicit none
      real*8   M2m,M2,X
c
c     N=2
      if((x.ge.0.0d0).and.(x.le.2.0d0)) then
         M2m = 1.0d0 - abs(x - 1.0d0)
      else
         M2m = 0.0d0
      endif
      if((x.ge.1.0d0).and.(x.le.3.0d0)) then
         M2  = 1.0d0 - abs(x - 2.0d0)
      else
         M2  = 0.0d0
      endif
c
c     N=3
      if((x.ge.0.0d0).and.(x.le.3.0d0)) then
         M3 = x/2.0d0*M2m + (3.0d0-x)/2.0d0*M2
      else
         M3 = 0.0d0
      endif
c
      return
      end


      REAL*8 Function DM3(x)
c------------------------------------------------------------------------
c
      implicit none
      real*8   M2m,M2,X
c
c     N=2
      if((x.ge.0.0d0).and.(x.le.2.0d0)) then
         M2m = 1.0d0 - abs(x - 1.0d0)
      else
         M2m = 0.0d0
      endif
      if((x.ge.1.0d0).and.(x.le.3.0d0)) then
         M2  = 1.0d0 - abs(x - 2.0d0)
      else
         M2  = 0.0d0
      endif
c
      DM3=M2m-M2
c
      return
      end   

      SUBROUTINE STATICF0(X,Y,Z,CG,TYPE,NCLX,NCLY,NCLZ,DCEL,
     $           PHI1,TRANX,TRANY,TRANZ,XBCEN,YBCEN,ZBCEN,EGSBPA)
c-----------------------------------------------------------------------
c     This subroutine computes only the external static field energy
c     for one particle used in subroutine INTERACT in simul.f   
c
      implicit none
      include 'consta.fcm'
      integer nclx,ncly,nclz,type
      real*4  phi1(*)
      real*8  x,y,z,cg(*)
      real*8  dcel,tranx,trany,tranz,xbcen,ybcen,zbcen
      real*8  EGSBPA
c   local
      integer ncyz,ix,iy,iz,n1,in1,n2,in2,n3,in3
      real*8  chi,xi,yi,zi,ai,bi,ci,fi
c
      ncyz=ncly*nclz
      EGSBPA=0.d0
c
      chi=cg(type)
      xi=x+tranx-xbcen
      yi=y+trany-ybcen
      zi=z+tranz-zbcen
      ix=int(xi/dcel)+1
      iy=int(yi/dcel)+1
      iz=int(zi/dcel)+1
c     
c     Atom charge distribution by 8 adjacent grid points
c     
      do n1=1,2
         in1=ix+n1-1
         ai=xi-(in1-1)*dcel
         ai=1.-abs(ai)/dcel
         in1=(in1-1)*ncyz
            
         do n2=1,2
            in2=iy+n2-1
            bi=yi-(in2-1)*dcel
            bi=1. - abs(bi)/dcel
            in2=(in2-1)*nclz
                  
            do n3=1,2
               in3=iz+n3-1
               ci=zi-(in3-1)*dcel
               ci=1. - abs(ci)/dcel
               fi=ai*bi*ci
               in3=in1+in2+in3

c     Electrostatic Energy 
               EGSBPA=EGSBPA+(fi*chi*phi1(in3)*CELEC)
                     
            enddo
         enddo
      enddo
c
      RETURN
      END

      SUBROUTINE STATICF1(NTOT,NFIX,X,Y,Z,CG,TYPE,NCLX,NCLY,NCLZ,DCEL,
     $           PHI1,TRANX,TRANY,TRANZ,XBCEN,YBCEN,ZBCEN,
     $           FX,FY,FZ,EGSBPA)
c-----------------------------------------------------------------------
c     This subroutine computes the electrostatic force resulting from the 
c     reaction field generated by the solvent at each atom.
c
c     Reaction field forces - RXNF
c
      implicit none
      include 'consta.fcm'
      integer NTOT,NFIX,nclx,ncly,nclz,type(*)
      real*4  phi1(*)
      real*8  x(*),y(*),z(*),cg(*),fx(*),fy(*),fz(*)
      real*8  dcel,tranx,trany,tranz,xbcen,ybcen,zbcen
      real*8  EGSBPA
c   local
      integer ncyz,i,ix,iy,iz,n1,in1,n2,in2,n3,in3,itype
      real*8  rxnfx,rxnfy,rxnfz
      real*8  chi,xi,yi,zi,ai,bi,ci,fi
      REAL*8  aisign,bisign,cisign,prefac
c
      ncyz=ncly*nclz
      EGSBPA=0.d0
c
c     Main loop by atoms
c     

      do i=NFIX+1,NTOT
         itype = abs(type(i))
         chi=cg(itype)
         rxnfx=0.d0
         rxnfy=0.d0
         rxnfz=0.d0
         xi=x(i)+tranx-xbcen
         yi=y(i)+trany-ybcen
         zi=z(i)+tranz-zbcen
         ix=int(xi/dcel)+1
         iy=int(yi/dcel)+1
         iz=int(zi/dcel)+1
c     
c     Atom charge distribution by 8 adjacent grid points
c     
         do n1=1,2
            in1=ix+n1-1
            ai=xi-(in1-1)*dcel
            aisign=sign(1.d0,ai)
            ai=1.-abs(ai)/dcel
            in1=(in1-1)*ncyz
            
            do n2=1,2
               in2=iy+n2-1
               bi=yi-(in2-1)*dcel
               bisign=sign(1.d0,bi)
               bi=1. - abs(bi)/dcel
               in2=(in2-1)*nclz
                  
               do n3=1,2
                  in3=iz+n3-1
                  ci=zi-(in3-1)*dcel
                  cisign=sign(1.d0,ci)
                  ci=1. - abs(ci)/dcel
                  fi=ai*bi*ci
                  in3=in1+in2+in3

                  prefac=phi1(in3)*CELEC*chi/dcel

                  if((ai.lt.(1.d0-rsmall)).and.(ai.gt.rsmall)) then
                     RXNFx=RXNFx+aisign*bi*ci*prefac
                  endif
                  if((bi.lt.(1.d0-rsmall)).and.(bi.gt.rsmall)) then
                     RXNFy=RXNFy+bisign*ai*ci*prefac
                  endif
                  if((ci.lt.(1.d0-rsmall)).and.(ci.gt.rsmall)) then
                     RXNFz=RXNFz+cisign*ai*bi*prefac
                  endif
c     
c     Electrostatic Energy 
c     
                  EGSBPA=EGSBPA+(fi*chi*phi1(in3)*CELEC)
                     
               enddo
            enddo
         enddo
         fx(i)=fx(i)+rxnfx
         fy(i)=fy(i)+rxnfy
         fz(i)=fz(i)+rxnfz
      enddo
c
      RETURN
      END


      SUBROUTINE RECT_RF0(NTOT,NFIX,J,X,Y,Z,XJ,YJ,ZJ,CG,TYPE,JTYPE,
     $           NTPOL,XNPOL,YNPOL,ZNPOL,
     $           XSCAL,YSCAL,ZSCAL,RFSCAL,MIJ,COEF,
     $           LSTPX,LSTPY,LSTPZ,BNORM,EGSBPB)
c-----------------------------------------------------------------------
c     This subroutine computes only the reaction field energy difference
c     due to jth ion in subroutine INTERACT in simul.f
c
      implicit none
      include 'consta.fcm'
      REAL*8  X(*),Y(*),Z(*),XJ,YJ,ZJ
      REAL*8  CG(*),COEF(*),MIJ(*),BNORM(*)
      REAL*8  XSCAL,YSCAL,ZSCAL,RFSCAL,EGSBPB
      INTEGER NTOT,NFIX,NTPOL,XNPOL,YNPOL,ZNPOL,J
      INTEGER LSTPX(*),LSTPY(*),LSTPZ(*),TYPE(*),JTYPE
c local
      real*8  xmin,xmax,ymin,ymax,zmin,zmax
      REAL*8  NORM,COEFI,COEFJ,COEF2(500)
      REAL*8  XG,YG,ZG,XS,YS,ZS
      REAL*8  LPOLX(500,15),LPOLY(500,15),LPOLZ(500,15)
      INTEGER I,II,JJ,IJ,N
      INTEGER XPOL,YPOL,ZPOL,ITYPE

      XMIN=-1.0d0/XSCAL
      XMAX= 1.0d0/XSCAL
      YMIN=-1.0d0/YSCAL
      YMAX= 1.0d0/YSCAL
      ZMIN=-1.0d0/ZSCAL
      ZMAX= 1.0d0/ZSCAL

c calculate Q_{m} coefficients for ntot
      DO II=1,NTPOL
         COEF(II)=0.d0
      ENDDO
      DO 101 I=NFIX+1,NTOT
         IF(I.EQ.J) THEN
            itype=jtype
            XG=XJ               !-RRXCEN
            YG=YJ               !-RRYCEN
            ZG=ZJ               !-RRZCEN
         ELSE
            itype = abs(type(I))
            XG=X(I)             !-RRXCEN
            YG=Y(I)             !-RRYCEN
            ZG=Z(I)             !-RRZCEN
         ENDIF
         IF(ZG.LT.ZMIN.OR.ZG.GT.ZMAX) GOTO 101
         IF(XG.LT.XMIN.OR.XG.GT.XMAX) GOTO 101
         IF(YG.LT.YMIN.OR.YG.GT.YMAX) GOTO 101
         XS=XSCAL*XG
         YS=YSCAL*YG
         ZS=ZSCAL*ZG
         LPOLX(I,1)= 1.0D0
         LPOLY(I,1)= 1.0D0
         LPOLZ(I,1)= 1.0D0
         LPOLX(I,2)= XS
         LPOLY(I,2)= YS
         LPOLZ(I,2)= ZS
         LPOLX(I,3)= 0.5D0*(3.0D0*XS*XS-1.0D0)
         LPOLY(I,3)= 0.5D0*(3.0D0*YS*YS-1.0D0)
         LPOLZ(I,3)= 0.5D0*(3.0D0*ZS*ZS-1.0D0)
         DO N=3,XNPOL-1
            LPOLX(I,N+1)=((2.*N-1)*XS*LPOLX(I,N)-(N-1.)*LPOLX(I,N-1))/N
         ENDDO
         DO N=3,YNPOL-1
            LPOLY(I,N+1)=((2.*N-1)*YS*LPOLY(I,N)-(N-1.)*LPOLY(I,N-1))/N
         ENDDO
         DO N=3,ZNPOL-1
            LPOLZ(I,N+1)=((2.*N-1)*ZS*LPOLZ(I,N)-(N-1.)*LPOLZ(I,N-1))/N
         ENDDO
         DO II=1,NTPOL
            XPOL=LSTPX(II)
            YPOL=LSTPY(II)
            ZPOL=LSTPZ(II)
            NORM=BNORM(II)
            COEF(II)=COEF(II)+
     $               CG(itype)*NORM*
     $               LPOLX(I,XPOL+1)*LPOLY(I,YPOL+1)*LPOLZ(I,ZPOL+1)
         ENDDO
 101  ENDDO

c calculate Q_{m} coefficients for ntot- (jth ion)
      DO II=1,NTPOL
         XPOL=LSTPX(II)
         YPOL=LSTPY(II)
         ZPOL=LSTPZ(II)
         NORM=BNORM(II)
         COEF2(II)=COEF(II)-
     $        CG(jtype)*NORM*
     $        LPOLX(J,XPOL+1)*LPOLY(J,YPOL+1)*LPOLZ(J,ZPOL+1)
      ENDDO

c reaction field energy calculation G(ntot)-G(ntot-1)
      EGSBPB=0.D0
      DO II=1,NTPOL
         IJ=(II-1)*NTPOL+II
         COEFI=COEF(II)
         COEFJ=COEF2(II)
         EGSBPB=EGSBPB+0.5d0*(COEFI*COEFI-COEFJ*COEFJ)*MIJ(IJ)
         DO JJ=II+1,NTPOL
            IJ=(II-1)*NTPOL+JJ
            EGSBPB=EGSBPB+(COEFI*COEF(JJ)-COEFJ*COEF2(JJ))*MIJ(IJ)
         ENDDO
      ENDDO
      EGSBPB=EGSBPB*CELEC*RFSCAL
c
      RETURN
      END


      SUBROUTINE RECT_RF1(NTOT,NFIX,X,Y,Z,CG,TYPE,NTPOL,
     $           XNPOL,YNPOL,ZNPOL,
     $           XSCAL,YSCAL,ZSCAL,RFSCAL,MIJ,COEF,FX,FY,FZ,
     $           LSTPX,LSTPY,LSTPZ,BNORM,EGSBPB)
c-----------------------------------------------------------------------
c     calculate the reaction field energy and forces on each ions
c
      implicit none
      include 'consta.fcm'
      REAL*8  X(*),Y(*),Z(*),CG(*),COEF(*),MIJ(*),BNORM(*)
      REAL*8  FX(*),FY(*),FZ(*),EGSBPB
      REAL*8  XSCAL,YSCAL,ZSCAL,RFSCAL
      INTEGER NTOT,NFIX,NTPOL,XNPOL,YNPOL,ZNPOL
      INTEGER LSTPX(*),LSTPY(*),LSTPZ(*),TYPE(*)
c local
      REAL*8  RXNBFX,RXNBFY,RXNBFZ
      REAL*8  xmin,xmax,ymin,ymax,zmin,zmax
      REAL*8  XG,YG,ZG,DX,DY,DZ,NORM
      REAL*8  CMIJ,CCC
      REAL*8  XLPOL,YLPOL,ZLPOL,XS,YS,ZS
      REAL*8  LPOLX(500,15),LPOLY(500,15),LPOLZ(500,15)
      REAL*8  DLPOLX(15),DLPOLY(15),DLPOLZ(15)
      REAL*8  MQ(1000)
      INTEGER I,II,JJ,IJ,MM,N
      INTEGER XPOL,YPOL,ZPOL,ITYPE


      XMIN=-1.0d0/XSCAL
      XMAX= 1.0d0/XSCAL
      YMIN=-1.0d0/YSCAL
      YMAX= 1.0d0/YSCAL
      ZMIN=-1.0d0/ZSCAL
      ZMAX= 1.0d0/ZSCAL

c calculate Q_{lm} coefficients
      DO II=1,NTPOL
         COEF(II)=0.d0
      ENDDO
      DO 101 I=NFIX+1,NTOT
         itype = abs(type(I))
         XG=X(I)   !-RRXCEN
         YG=Y(I)   !-RRYCEN
         ZG=Z(I)   !-RRZCEN
         IF(XG.LT.XMIN.OR.XG.GT.XMAX) GOTO 101
         IF(YG.LT.YMIN.OR.YG.GT.YMAX) GOTO 101
         IF(ZG.LT.ZMIN.OR.ZG.GT.ZMAX) GOTO 101
         XS=XSCAL*XG
         YS=YSCAL*YG
         ZS=ZSCAL*ZG

         LPOLX(I,1)= 1.0D0
         LPOLY(I,1)= 1.0D0
         LPOLZ(I,1)= 1.0D0
         LPOLX(I,2)= XS
         LPOLY(I,2)= YS
         LPOLZ(I,2)= ZS
         LPOLX(I,3)= 0.5D0*(3.0D0*XS*XS-1.0D0)
         LPOLY(I,3)= 0.5D0*(3.0D0*YS*YS-1.0D0)
         LPOLZ(I,3)= 0.5D0*(3.0D0*ZS*ZS-1.0D0)
         DO N=3,XNPOL-1
            LPOLX(I,N+1)=((2.*N-1)*XS*LPOLX(I,N)-(N-1.)*LPOLX(I,N-1))/N
         ENDDO
         DO N=3,YNPOL-1
            LPOLY(I,N+1)=((2.*N-1)*YS*LPOLY(I,N)-(N-1.)*LPOLY(I,N-1))/N
         ENDDO
         DO N=3,ZNPOL-1
            LPOLZ(I,N+1)=((2.*N-1)*ZS*LPOLZ(I,N)-(N-1.)*LPOLZ(I,N-1))/N
         ENDDO

         DO II=1,NTPOL
            XPOL=LSTPX(II)
            YPOL=LSTPY(II)
            ZPOL=LSTPZ(II)
            NORM=BNORM(II)
            COEF(II)=COEF(II)+
     $           CG(itype)*NORM*
     $           LPOLX(I,XPOL+1)*LPOLY(I,YPOL+1)*LPOLZ(I,ZPOL+1)
         ENDDO
 101  ENDDO

c construct MQ array to speed up the calculations
      DO II=1,NTPOL
         MQ(II)=0.D0
         DO JJ=1,NTPOL
            IJ=(II-1)*NTPOL+JJ
            MQ(II)=MQ(II)+MIJ(IJ)*COEF(JJ)*RFSCAL
         ENDDO
      ENDDO

c reaction field energy calculation    
      EGSBPB=0.D0
      DO II=1,NTPOL
         EGSBPB=EGSBPB+0.5d0*COEF(II)*MQ(II)
      ENDDO
      EGSBPB=EGSBPB*CELEC

c reaction field force calculations     
      DO 102 MM=NFIX+1,NTOT
         itype = abs(type(MM))
         XG=X(MM)  !-RRXCEN
         YG=Y(MM)  !-RRYCEN
         ZG=Z(MM)  !-RRZCEN
         IF(XG.LT.XMIN.OR.XG.GT.XMAX) GOTO 102
         IF(YG.LT.YMIN.OR.YG.GT.YMAX) GOTO 102
         IF(ZG.LT.ZMIN.OR.ZG.GT.ZMAX) GOTO 102
         RXNBFX=0.D0
         RXNBFY=0.D0
         RXNBFZ=0.D0
         CCC=CG(itype)*CELEC

         XS=XSCAL*XG
         YS=YSCAL*YG
         ZS=ZSCAL*ZG

         DLPOLX(1)=0.0D0
         DLPOLY(1)=0.0D0
         DLPOLZ(1)=0.0D0
         DLPOLX(2)=1.0D0
         DLPOLY(2)=1.0D0
         DLPOLZ(2)=1.0D0
         DLPOLX(3)=3.0D0*XS
         DLPOLY(3)=3.0D0*YS
         DLPOLZ(3)=3.0D0*ZS
         DO N=3,XNPOL-1
            DLPOLX(N+1)=XS*DLPOLX(N)+N*LPOLX(MM,N)
         ENDDO
         DO N=3,YNPOL-1
            DLPOLY(N+1)=YS*DLPOLY(N)+N*LPOLY(MM,N)
         ENDDO
         DO N=3,ZNPOL-1
            DLPOLZ(N+1)=ZS*DLPOLZ(N)+N*LPOLZ(MM,N)
         ENDDO
         DO N=1,XNPOL
            DLPOLX(N)=DLPOLX(N)*XSCAL
         ENDDO
         DO N=1,YNPOL
            DLPOLY(N)=DLPOLY(N)*YSCAL
         ENDDO
         DO N=1,ZNPOL
            DLPOLZ(N)=DLPOLZ(N)*ZSCAL
         ENDDO

         DO II=1,NTPOL
            XPOL=LSTPX(II)
            YPOL=LSTPY(II)
            ZPOL=LSTPZ(II)
            NORM=BNORM(II)
            XLPOL=LPOLX(MM,XPOL+1)
            YLPOL=LPOLY(MM,YPOL+1)
            ZLPOL=LPOLZ(MM,ZPOL+1)
            DX=NORM*DLPOLX(XPOL+1)*YLPOL*ZLPOL
            DY=NORM*XLPOL*DLPOLY(YPOL+1)*ZLPOL
            DZ=NORM*XLPOL*YLPOL*DLPOLZ(ZPOL+1)
            RXNBFX=RXNBFX-DX*MQ(II)
            RXNBFY=RXNBFY-DY*MQ(II)
            RXNBFZ=RXNBFZ-DZ*MQ(II)
         ENDDO
         FX(MM)=FX(MM)+RXNBFX*CCC
         FY(MM)=FY(MM)+RXNBFY*CCC
         FZ(MM)=FZ(MM)+RXNBFZ*CCC
 102  ENDDO
c
      RETURN
      END


      SUBROUTINE SPHE_RF0(NTOT,NFIX,J,X,Y,Z,XJ,YJ,ZJ,CG,TYPE,JTYPE,
     $           NTPOL,SRDIST,MIJ,COEF,
     $           LSTPL,LSTPM,BNORM,EGSBPB)
c-----------------------------------------------------------------------
c     This subroutine computes only the reaction field energy difference
c     due to jth ion in subroutine INTERACT in simul.f
c
      implicit none
      include 'consta.fcm'
      INTEGER NTOT,NFIX,NTPOL,J
      INTEGER LSTPL(*),LSTPM(*),TYPE(*),JTYPE
      REAL*8  X(*),Y(*),Z(*),XJ,YJ,ZJ
      REAL*8  CG(*),COEF(*),MIJ(*),BNORM(*)
      REAL*8  EGSBPB,SRDIST
c local
      INTEGER I,II,JJ,IJ,L,M,MM,ITYPE,LMAX,MMAX
      REAL*8  NORM,COEFI,COEFJ,COEF2(500)
      REAL*8  SP,CP,ST,CT,R,R2,XDIFF,YDIFF,ZDIFF,SRDIST2
      REAL*8  AR(500,0:24),AC(500,0:24),AS(500,0:24),AP(500,0:24,0:24)
      REAL*8  EGSBPB1,EGSBPB2

      LMAX=LSTPL(NTPOL)
      MMAX=abs(LSTPM(NTPOL))
      SRDIST2=SRDIST*SRDIST

c calculate Q_{lm} coefficients for ntot
      DO II=1,NTPOL
         COEF(II)=0.D0
      ENDDO
      DO 101 I=NFIX+1,NTOT
         IF(I.EQ.J) THEN
            itype=jtype
            XDIFF=XJ            !-RRXCEN
            YDIFF=YJ            !-RRYCEN
            ZDIFF=ZJ            !-RRZCEN
         ELSE
            itype = abs(type(I))
            XDIFF=X(I)          !-RRXCEN
            YDIFF=Y(I)          !-RRYCEN
            ZDIFF=Z(I)          !-RRZCEN
         ENDIF
         R2=XDIFF*XDIFF+YDIFF*YDIFF+ZDIFF*ZDIFF
         IF(R2.GT.SRDIST2) GOTO 101
         R=SQRT(R2)
         CT=ZDIFF/R
         ST=SQRT(1.D0-(ZDIFF*ZDIFF)/(R2))
         CP=XDIFF/R/ST
         SP=YDIFF/R/ST
         IF(R2.LT.RSMALL) THEN                               ! in the origin
            CT=0.D0
            ST=0.D0
            CP=0.D0
            SP=0.D0
         ELSEIF(XDIFF.GT.-RSMALL.AND.XDIFF.LT.RSMALL.AND.    ! in the Z-axis
     $          YDIFF.GT.-RSMALL.AND.YDIFF.LT.RSMALL) THEN
            CT=1.D0
            IF(ZDIFF.LT.0.D0) CT=-1.D0
            CP=0.D0
            SP=0.D0
         ELSEIF(ZDIFF.GT.-RSMALL.AND.ZDIFF.LT.RSMALL) THEN   ! in the XY plane
            CT=0.D0
            CP=XDIFF/R
            SP=YDIFF/R
         ENDIF

         call RPOWERL2(I,LMAX,R,AR)           !  fill AR  (r^l   ) array
         call COSMPHI2(I,MMAX,CP,AC)          !  fill AC  (cos.. ) array
         call SINMPHI2(I,MMAX,CP,SP,AS)       !  fill AS  (sin.. ) array
         call ALPOL2(I,LMAX,MMAX,CT,AP)       !  fill AP  (P(lm) ) array

         DO II=1,NTPOL
            L=LSTPL(II)
            M=LSTPM(II)
            NORM=BNORM(II)
            IF(L.GE.0.AND.M.EQ.0) THEN
               COEF(II)=COEF(II)+
     $                  CG(itype)*NORM*AR(I,L)*AP(I,L,M)
            ELSEIF(L.GT.0.AND.M.GT.0) THEN
               COEF(II)=COEF(II)+
     $                  CG(itype)*NORM*AR(I,L)*AC(I,M)*AP(I,L,M)
            ELSEIF(L.GT.0.AND.M.LT.0) THEN
               M=-M
               COEF(II)=COEF(II)+
     $                  CG(itype)*NORM*AR(I,L)*AS(I,M)*AP(I,L,M)
            ENDIF
         ENDDO
 101  ENDDO

c calculate Q_{m} coefficients for ntot- (jth ion)
      DO II=1,NTPOL
         L=LSTPL(II)
         M=LSTPM(II)
         NORM=BNORM(II)
         IF(L.GE.0.AND.M.EQ.0) THEN
            COEF2(II)=COEF(II)-
     $                CG(jtype)*NORM*AR(J,L)*AP(J,L,M)
         ELSEIF(L.GT.0.AND.M.GT.0) THEN
            COEF2(II)=COEF(II)-
     $                CG(jtype)*NORM*AR(J,L)*AC(J,M)*AP(J,L,M)
         ELSEIF(L.GT.0.AND.M.LT.0) THEN
            M=-M
            COEF2(II)=COEF(II)-
     $                CG(jtype)*NORM*AR(J,L)*AS(J,M)*AP(J,L,M)
         ENDIF
      ENDDO

c reaction field energy calculation G(ntot)-G(ntot-1)
      EGSBPB=0.D0
      DO II=1,NTPOL
         IJ=(II-1)*NTPOL+II
         COEFI=COEF(II)
         COEFJ=COEF2(II)
         EGSBPB=EGSBPB+0.5d0*(COEFI*COEFI-COEFJ*COEFJ)*MIJ(IJ)
         DO JJ=II+1,NTPOL
            IJ=(II-1)*NTPOL+JJ
            EGSBPB=EGSBPB+(COEFI*COEF(JJ)-COEFJ*COEF2(JJ))*MIJ(IJ)
         ENDDO
      ENDDO
      EGSBPB=EGSBPB*CELEC
c
      RETURN
      END


      SUBROUTINE SPHE_RF1(NTOT,NFIX,X,Y,Z,CG,TYPE,NTPOL,
     $           SRDIST,MIJ,COEF,FX,FY,FZ,
     $           LSTPL,LSTPM,BNORM,EGSBPB)
c-----------------------------------------------------------------------
c     calculate the reaction field energy and forces on each ions
c
      implicit none
      include 'consta.fcm'
      INTEGER NTOT,NFIX,NTPOL
      INTEGER LSTPL(*),LSTPM(*),TYPE(*)
      REAL*8  X(*),Y(*),Z(*),CG(*),COEF(*),MIJ(*),BNORM(*)
      REAL*8  FX(*),FY(*),FZ(*),EGSBPB,SRDIST
c local
      INTEGER I,II,JJ,IJ,L,M,MM,ITYPE,LMAX,MMAX
      REAL*8  RXNBFX,RXNBFY,RXNBFZ
      REAL*8  NORM
      REAL*8  CCC,RPL,CMP,SMP,APL
      REAL*8  SP,CP,ST,CT,R,R2,XDIFF,YDIFF,ZDIFF,SRDIST2
      REAL*8  AR(500,0:24),AC(500,0:24),AS(500,0:24)
      REAL*8  AP(500,0:24,0:24),ADP(500,0:24,0:24)
      REAL*8  MQ(1000)
      REAL*8  SPJ(500),CPJ(500),STJ(500),CTJ(500)
      REAL*8  DX,DY,DZ,DR,DT,DP

      LMAX=LSTPL(NTPOL)
      MMAX=abs(LSTPM(NTPOL))
      SRDIST2=SRDIST*SRDIST

c calculate Q_{lm} coefficients
      DO II=1,NTPOL
         COEF(II)=0.D0
      ENDDO
      DO 101 I=NFIX+1,NTOT
         itype = abs(type(I))
         XDIFF=X(I) !-RRXCEN
         YDIFF=Y(I) !-RRYCEN
         ZDIFF=Z(I) !-RRZCEN
         R2=XDIFF*XDIFF+YDIFF*YDIFF+ZDIFF*ZDIFF
         IF(R2.GT.SRDIST2) GOTO 101
         R=SQRT(R2)
         CT=ZDIFF/R
         ST=SQRT(1.D0-(ZDIFF*ZDIFF)/(R2))
         CP=XDIFF/R/ST
         SP=YDIFF/R/ST
         IF(R2.LT.RSMALL) THEN                               ! in the origin
            CT=0.D0
            ST=0.D0
            CP=0.D0
            SP=0.D0
         ELSEIF(XDIFF.GT.-RSMALL.AND.XDIFF.LT.RSMALL.AND.    ! in the Z-axis
     $          YDIFF.GT.-RSMALL.AND.YDIFF.LT.RSMALL) THEN
            CT=1.D0
            IF(ZDIFF.LT.0.D0) CT=-1.D0
            CP=0.D0
            SP=0.D0
         ELSEIF(ZDIFF.GT.-RSMALL.AND.ZDIFF.LT.RSMALL) THEN   ! in the XY plane
            CT=0.D0
            CP=XDIFF/R
            SP=YDIFF/R
         ENDIF
         call RPOWERL2(I,LMAX,R,AR)           !  fill AR  (r^l   ) array
         call COSMPHI2(I,MMAX,CP,AC)          !  fill AC  (cos.. ) array
         call SINMPHI2(I,MMAX,CP,SP,AS)       !  fill AS  (sin.. ) array
         call ALPOL2(I,LMAX,MMAX,CT,AP)       !  fill AP  (P(lm) ) array
         call DALPOL2(I,LMAX,MMAX,CT,AP,ADP)  !  fill ADP (DP(lm)) array
         SPJ(I)=SP
         CPJ(I)=CP
         STJ(I)=ST
         CTJ(I)=CT

         DO II=1,NTPOL
            L=LSTPL(II)
            M=LSTPM(II)
            NORM=BNORM(II)
            IF(L.GE.0.AND.M.EQ.0) THEN
               COEF(II)=COEF(II)+
     $                  CG(itype)*NORM*AR(I,L)*AP(I,L,M)
            ELSEIF(L.GT.0.AND.M.GT.0) THEN
               COEF(II)=COEF(II)+
     $                  CG(itype)*NORM*AR(I,L)*AC(I,M)*AP(I,L,M)
            ELSEIF(L.GT.0.AND.M.LT.0) THEN
               M=-M
               COEF(II)=COEF(II)+
     $                  CG(itype)*NORM*AR(I,L)*AS(I,M)*AP(I,L,M)
            ENDIF
         ENDDO
 101  ENDDO

c construct MQ array to speed up the calcaulations
      DO II=1,NTPOL
         MQ(II)=0.D0
         DO JJ=1,NTPOL
            IJ=(II-1)*NTPOL+JJ
            MQ(II)=MQ(II)+MIJ(IJ)*COEF(JJ)
         ENDDO
      ENDDO

c reaction field energy calculation    
      EGSBPB=0.D0
      DO II=1,NTPOL
         EGSBPB=EGSBPB+0.5d0*COEF(II)*MQ(II)
      ENDDO
      EGSBPB=EGSBPB*CELEC

c reaction field force calculations     
      DO 102 MM=NFIX+1,NTOT
         XDIFF=X(MM) !-RRXCEN
         YDIFF=Y(MM) !-RRYCEN
         ZDIFF=Z(MM) !-RRZCEN
         R2=XDIFF*XDIFF+YDIFF*YDIFF+ZDIFF*ZDIFF
         IF(R2.GT.SRDIST2) GOTO 102
         itype = abs(type(MM))
         RXNBFX=0.D0
         RXNBFY=0.D0
         RXNBFZ=0.D0
         CCC=CG(itype)*CELEC
         SP=SPJ(MM)
         CP=CPJ(MM)
         ST=STJ(MM)
         CT=CTJ(MM)
         DO II=1,NTPOL
            L=LSTPL(II)
            M=LSTPM(II)
            NORM=BNORM(II)
            IF(M.EQ.0) THEN
               IF(L.EQ.0) THEN
                  DR=0.D0
                  DT=0.D0
                  DP=0.D0
               ELSE
                  RPL=AR(MM,L-1)
                  DR= L*RPL*AP(MM,L,M)
                  DT=-RPL*ADP(MM,L,M)*ST
                  DP=0.D0
               ENDIF
            ELSEIF(M.GT.0) THEN
               RPL=AR(MM,L-1)
               CMP=AC(MM,M)
               APL=AP(MM,L,M)
               DR= L*RPL*CMP*APL
               DT=-RPL*CMP*ADP(MM,L,M)*ST
               DP=-RPL*M*AS(MM,M)*APL/ST
               IF(ST.EQ.0.D0) DP=0.D0
            ELSEIF(M.LT.0) THEN
               M=-M
               RPL=AR(MM,L-1)
               SMP=AS(MM,M)
               APL=AP(MM,L,M)
               DR= L*RPL*SMP*APL
               DT=-RPL*SMP*ADP(MM,L,M)*ST
               DP= RPL*M*AC(MM,M)*APL/ST
               IF(ST.EQ.0.D0) DP=0.D0
            ENDIF
            DX=NORM*(DR*ST*CP+DT*CT*CP-DP*SP)
            DY=NORM*(DR*ST*SP+DT*CT*SP+DP*CP)
            DZ=NORM*(DR*CT   -DT*ST         )
            RXNBFX=RXNBFX-DX*MQ(II)
            RXNBFY=RXNBFY-DY*MQ(II)
            RXNBFZ=RXNBFZ-DZ*MQ(II)
         ENDDO
         FX(MM)=FX(MM)+RXNBFX*CCC
         FY(MM)=FY(MM)+RXNBFY*CCC
         FZ(MM)=FZ(MM)+RXNBFZ*CCC
 102  ENDDO
c
      RETURN
      END

      SUBROUTINE SPHE_SVPOL(NMPOL,LSTPL,LSTPM)
c-----------------------------------------------------------------------
c     store the basis-set number 
c     in LSTPL and LSTPM array for Spherical Harmonics
c
      implicit none
      INTEGER NMPOL,LSTPL(*),LSTPM(*)
c local
      INTEGER L,M,NORDER

c always the same order in spherical harmonics
      NORDER=0
      DO L=0,NMPOL-1
         NORDER=NORDER+1 
         LSTPL(NORDER) =L
         LSTPM(NORDER) =0
         DO M=1,L
            NORDER=NORDER+1 
            LSTPL(NORDER) =L
            LSTPM(NORDER) =M
            NORDER=NORDER+1 
            LSTPL(NORDER) =L
            LSTPM(NORDER) =-M
         ENDDO
      ENDDO
c
      RETURN
      END

      SUBROUTINE RECT_NORM(NTPOL,XSCAL,YSCAL,ZSCAL,
     $           LSTPX,LSTPY,LSTPZ,BNORM)
c-----------------------------------------------------------------------
c     calculate the normalization constants of the basis functions
c
      implicit none
      INTEGER NTPOL,LSTPX(*),LSTPY(*),LSTPZ(*)
      REAL*8  BNORM(*),XSCAL,YSCAL,ZSCAL
c local
      REAL*8  ILXYZ
      INTEGER N,LPOL,MPOL,NPOL

      ILXYZ=XSCAL*YSCAL*ZSCAL/8.0      ! inverse Lxyz
      DO N=1,NTPOL
         LPOL=LSTPX(N)
         MPOL=LSTPY(N)
         NPOL=LSTPZ(N)
         BNORM(N)=SQRT((2.*LPOL+1.)*(2.*MPOL+1.)*(2.*NPOL+1.)*ILXYZ)
      ENDDO
c
      RETURN
      END


      SUBROUTINE SPHE_NORM(NMPOL,BNORM,SRDIST)
c-----------------------------------------------------------------------
c     calculate the normalization constants of the spherical harmonics basis functions
c
      implicit none
      include 'consta.fcm'
      INTEGER NMPOL
      REAL*8  BNORM(*),SRDIST
c local
      INTEGER L,M,NORDER
      REAL*8  SR2,SR3,LPART,RPART,UPFACTO,DNFACTO,FACTORI

c always the same order in spherical harmonics
      NORDER=1
      SR2=SRDIST*SRDIST
      SR3=SR2*SRDIST
      RPART=SR3
      LPART=3.D0/2.D0/TWOPI
      BNORM(NORDER)=SQRT(LPART/RPART)
      DO L=1,NMPOL-1
         LPART=(2.D0*L+1.D0)*(2.D0*L+3.D0)/(2.D0*TWOPI)
         RPART=RPART*SR2
         NORDER=NORDER+1
         BNORM(NORDER)=SQRT(LPART/RPART)
         LPART=(2.D0*L+1.D0)*(2.D0*L+3.D0)/TWOPI       ! change for m > 0
         DO M=1,L
            NORDER=NORDER+1 
            UPFACTO=FACTORI(L-M)
            DNFACTO=FACTORI(L+M)
            BNORM(NORDER)=SQRT(LPART*UPFACTO/(RPART*DNFACTO))
            NORDER=NORDER+1 
            BNORM(NORDER)=BNORM(NORDER-1)
         ENDDO
      ENDDO
c
      RETURN
      END

      REAL*8 FUNCTION LPOL(NPOL,COOR,SCAL)
c------------------------------------------------------------------------
c     Legnedre Polynomials
c
      implicit none
      INTEGER   NPOL,N
      REAL*8    X,COOR,SCAL
      REAL*8    LPOLNP,LPOLNPP
      REAL*8    X2,X3,X4,X5,X6,X7
c
      X=SCAL*COOR
c
      IF(NPOL.LE.4) THEN
         IF(NPOL.EQ.0) THEN
            LPOL = 1.D0
         ELSEIF(NPOL.EQ.1) THEN
            LPOL = X
         ELSEIF(NPOL.EQ.2) THEN
            LPOL = 0.5D0*(3.D0*X*X-1.D0)
         ELSEIF(NPOL.EQ.3) THEN
            LPOL = 0.5D0*(5.D0*X*X*X-3.D0*X)
         ELSEIF(NPOL.EQ.4) THEN
            X2=X*X
            LPOL = 0.125d0*(35.d0*X2*X2-30.d0*X2+3.d0)
         ENDIF
      ELSEIF(NPOL.GT.9) THEN
         X2=X*X
         X3=X2*X
         X4=X2*X2
         X5=X3*X2
         X6=X4*X2
         X7=X5*X2
         LPOLNPP= (1.d0/128.d0)*(6435.d0*X6*X2-12012.d0*X6+6930.d0*X4-
     $                       1260.d0*X2+35.d0)
         LPOLNP = (1.d0/128.d0)*(12155.d0*X7*X2-25740.d0*X7+18018.d0*X5-
     $                       4620.d0*X3+315.d0*X)
         DO N=10,NPOL
            LPOL=((2.d0*n-1)*X*LPOLNP-(N-1.d0)*LPOLNPP)/N
            LPOLNPP=LPOLNP
            LPOLNP=LPOL
         ENDDO
      ELSE
         IF(NPOL.EQ.5) THEN
            X2=X*X
            X3=X2*X
            LPOL = 0.125d0*(63.d0*X3*X2-70.d0*X3+15.d0*X)
         ELSEIF(NPOL.EQ.6) THEN
            X2=X*X
            X4=X2*X2
            LPOL = (1.d0/16.d0)*(231.d0*X4*X2-315.d0*X4+105.d0*X2-5.d0)
         ELSEIF(NPOL.EQ.7) THEN
            X2=X*X
            X3=X2*X
            X5=X3*X2
            LPOL = (1.d0/16.d0)*
     $             (429.d0*X5*X2-693.d0*X5+315.d0*X3-35.d0*X)
         ELSEIF(NPOL.EQ.8) THEN
            X2=X*X
            X4=X2*X2
            X6=X4*X2
            LPOL = (1.d0/128.d0)*(6435.d0*X6*X2-12012.d0*X6+6930.d0*X4-
     $                        1260.d0*X2+35.d0)
         ELSEIF(NPOL.EQ.9) THEN
            X2=X*X
            X3=X2*X
            X5=X3*X2
            X7=X5*X2
            LPOL = (1.d0/128.d0)*(12155.d0*X7*X2-25740.d0*X7+
     $                            18018.d0*X5-4620.d0*X3+315.d0*X)
         ENDIF
      ENDIF
c
      RETURN
      END

      REAL*8 FUNCTION DLPOL(NPOL,COOR,SCAL)
c------------------------------------------------------------------------
c     Derivatives of Legendre Polymonials
c
      implicit none
      INTEGER   NPOL,N
      REAL*8    X,COOR,SCAL,DLPOLNP,LPOL
      REAL*8    X2,X3,X4,X5,X6
c
      X=SCAL*COOR
c
      IF(NPOL.LE.4) THEN
         IF(NPOL.EQ.0) THEN
            DLPOL = 0.D0
         ELSEIF(NPOL.EQ.1) THEN
            DLPOL = 1.D0
         ELSEIF(NPOL.EQ.2) THEN
            DLPOL = 3.D0*X
         ELSEIF(NPOL.EQ.3) THEN
            DLPOL = 0.5D0*3.D0*(5.D0*X*X-1.D0)
         ELSEIF(NPOL.EQ.4) THEN
            DLPOL = 0.5D0*5.D0*(7.d0*X*X*X-3.D0*X)
         ENDIF
      ELSEIF(NPOL.GT.9) THEN
         X2=X*X
         X4=X2*X2
         X6=X4*X2
         DLPOLNP=(45.d0/128.d0)*(2431.d0*X6*X2-4004.d0*X6+2002.d0*X4-
     $                       308.d0*X2+7.d0)
         DO N=10,NPOL
             DLPOL=X*DLPOLNP+N*LPOL(N-1,COOR,SCAL)
            DLPOLNP=DLPOL
         ENDDO
      ELSE
         IF(NPOL.EQ.5) THEN
            X2=X*X
            DLPOL = 0.125*15.d0*(21.d0*X2*X2-14.d0*X2+1.D0)
         ELSEIF(NPOL.EQ.6) THEN
            X2=X*X
            X3=X2*X
            DLPOL = 0.125*21.d0*(33.d0*X3*X2-30.d0*X3+5.d0*X)
         ELSEIF(NPOL.EQ.7) THEN
            X2=X*X
            X4=X2*X2
            DLPOL = (7.d0/16.d0)*(429.d0*X4*X2-495.d0*X4+135.d0*X2-5.d0)
         ELSEIF(NPOL.EQ.8) THEN
            X2=X*X
            X3=X2*X
            X5=X3*X2
            DLPOL = (9.d0/16.d0)*
     $              (715.d0*X5*X2-1001.d0*X5+385.d0*X3-35.d0*X)
         ELSEIF(NPOL.EQ.9) THEN
            X2=X*X
            X4=X2*X2
            X6=X4*X2
            DLPOL = (45.d0/128.d0)*(2431.d0*X6*X2-4004.d0*X6+2002.d0*X4-
     $                          308.d0*X2+7.d0)
         ENDIF
      ENDIF
c
      DLPOL=SCAL*DLPOL
c
      RETURN
      END


      REAL*8 FUNCTION RPOWERL(L,R)
c------------------------------------------------------------------------
c     R^L calculation (L >= 0)
c
      implicit none
      INTEGER   L,I
      REAL*8    R
c
      RPOWERL=1.D0
      DO I=1,L
         RPOWERL=RPOWERL*R
      ENDDO
c      
      RETURN
      END


      SUBROUTINE RPOWERL2(J,L,R,AR)
c------------------------------------------------------------------------
c     R^L calculation (L >= 0)
c
      implicit none
      INTEGER   L,I,J
      REAL*8    R,AR(500,0:24)
c
      AR(J,0)=1.D0
      DO I=1,L
         AR(J,I)=AR(J,I-1)*R
      ENDDO
c      
      RETURN
      END

      REAL*8 FUNCTION FACTORI(N)
c------------------------------------------------------------------------
c     N! calculation
c
      implicit none
      INTEGER   N,I
c
      IF(N.EQ.0.or.N.EQ.1) THEN
         FACTORI=1.D0
      ELSE
         FACTORI=1.D0
         DO I=2,N
            FACTORI=FACTORI*I
         ENDDO
      ENDIF
c      
      RETURN
      END


      REAL*8 FUNCTION ALPOL(L,M,X)
c------------------------------------------------------------------------
c     The Associate Legendre Polynomials 
c     (Numerical recipes in Fortran 77: 6.8. Spherical Harmonics) 
c
      implicit none
      integer l,m
      real*8  x
c local
      integer i,ll
      real*8  fact,pll,pmm,pmmp1,somx2
c
      if(m.gt.l) then
         alpol=0.d0
         return
      elseif(m.lt.0.or.x.lt.-1.d0) then
         pause 'BAD ARGUMENTS IN ALPOL'
      endif

c compute pmm
      pmm=1.d0
      if(m.gt.0) then
         if(x.gt.1.d0) then
            somx2=sqrt((x-1.d0)*(x+1.d0))
         else
            somx2=sqrt((1.d0-x)*(1.d0+x))
         endif
         fact=1.d0
         do i=1,m
cwp            pmm=-pmm*fact*somx2   ! to remove (-1)^m in P(l,m)
            pmm=pmm*fact*somx2
            fact=fact+2.d0
         enddo
      endif

c compute pmmp1
      if(l.eq.m) then
         alpol=pmm
      else
         pmmp1=x*(2*m+1)*pmm
         if(l.eq.m+1) then
            alpol=pmmp1
         else
            do ll=m+2,l
               pll=(x*(2.d0*ll-1)*pmmp1-(ll+m-1)*pmm)/(ll-m)
               pmm=pmmp1
               pmmp1=pll
            enddo
            alpol=pll
         endif
      endif
c      
      RETURN
      END


      SUBROUTINE ALPOL2(J,LMAX,MMAX,X,AP)
c------------------------------------------------------------------------
c     The Associate Legendre Polynomials 
c     (Numerical recipes in Fortran 77: 6.8. Spherical Harmonics) 
c     This is different from FUNCTION ALPOL because we don't consider x > 1 here.
c
      implicit none
      integer lmax,mmax,J
      real*8  x,ap(500,0:24,0:24)
c local
      integer i,ll,l,m
      real*8  fact,pll,pmm,pmmp1,somx2
c
      if(mmax.gt.lmax) then
         pause 'MMAX .GT. LMAX'
         pause 'BAD ARGUMENTS IN ALPOL'
      elseif(mmax.lt.0) then
         pause 'BAD ARGUMENTS IN ALPOL'
      endif

c compute p(m,m)
      AP(J,0,0)=1.0
      somx2=sqrt((1.0-x)*(1.0+x))
      fact=1.0
      do m=1,mmax
         AP(J,m,m)=AP(J,m-1,m-1)*fact*somx2
         fact=fact+2.0
      enddo

c compute p(m+1,m)
      do m=0,mmax
         AP(J,m+1,m)=x*(2*m+1)*AP(J,m,m)
      enddo

c compute p(l,m)
      do l=2,lmax
         do m=0,l-2
            AP(J,l,m)=(x*(2.0*l-1)*AP(J,l-1,m)-
     $                (l+m-1)*AP(J,l-2,m))/(l-m)
         enddo
      enddo
c      
      RETURN
      END

      REAL*8 FUNCTION DALPOL(L,M,X)
c------------------------------------------------------------------------
c     Derivatives of Associate Legendre Polynomials (From Smythe's BOOK)
c
      implicit none
      integer l,m
      real*8  x
c local
      real*8  alpol,fact
c
      IF(X.EQ.1.d0.OR.X.EQ.-1.d0) THEN
         IF(M.EQ.0) THEN
            IF(X.EQ. 1.D0) DALPOL=L*(L+1.D0)/2.d0
            IF(X.EQ.-1.D0) DALPOL=(-1.D0)**(L+1)*L*(L+1.D0)/2.d0
         ELSE
            DALPOL=0.d0
         ENDIF
         RETURN
      ENDIF

      IF(X.GT.1.D0) THEN
         FACT=1.D0/SQRT(X*X-1.D0)
         DALPOL=FACT*(ALPOL(L,M+1,X)+FACT*M*X*ALPOL(L,M,X))
      ELSE
         FACT=1.D0/SQRT(1.D0-X*X)
         DALPOL=FACT*(ALPOL(L,M+1,X)-FACT*M*X*ALPOL(L,M,X))
      ENDIF
c      
      RETURN
      END


      SUBROUTINE DALPOL2(J,LMAX,MMAX,X,AP,ADP)
c------------------------------------------------------------------------
c     Derivatives of Associate Legendre Polynomials (From Smythe's BOOK)
c     This is different from FUNCTION DALPOL because we don't consider x > 1 here.
c
      implicit none
      integer lmax,mmax,j
      real*8  x,ap(500,0:24,0:24),adp(500,0:24,0:24)
c local
      integer l,m
      real*8  alpol,fact
c
      IF(X.EQ.1.d0.OR.X.EQ.-1.d0) THEN
         DO L=0,LMAX
            ADP(J,L,0)=0.0
            IF(X.EQ. 1.D0) ADP(J,L,0)=L*(L+1.D0)/2.d0
            IF(X.EQ.-1.D0) ADP(J,L,0)=(-1.0)**(L+1)*L*(L+1.0)/2.0
            DO M=1,MMAX
               ADP(J,L,M)=0.0
            ENDDO
         ENDDO
         RETURN
      ENDIF

      DO L=0,LMAX
         DO M=0,MMAX
            FACT=1.0/SQRT(1.0-X*X)
            ADP(J,L,M)=FACT*(AP(J,L,M+1)-FACT*M*X*AP(J,L,M))
         ENDDO
      ENDDO
c      
      RETURN
      END

      REAL*8 FUNCTION COSMPHI(M,C0)
c------------------------------------------------------------------------
c     cos(M*phi) calculation (M > 0)
c
      implicit none
      INTEGER   M,I
      REAL*8    C0,C2,C3
c
      IF(M.EQ.0) THEN
         COSMPHI=1.D0
      ELSEIF(M.EQ.1) THEN
         COSMPHI=C0
      ELSEIF(M.EQ.2) THEN
         COSMPHI=2.D0*C0*C0-1.D0
      ELSEIF(M.EQ.3) THEN
         C2=2.D0*C0*C0-1.D0
         COSMPHI=2.D0*C0*C2-C0
      ELSEIF(M.GE.4) THEN
         C2=2.D0*C0*C0-1.D0
         C3=2.D0*C0*C2-C0
         DO I=4,M
            COSMPHI=2.D0*C0*C3-C2
            C2=C3
            C3=COSMPHI
         ENDDO
      ENDIF
c      
      RETURN
      END


      SUBROUTINE COSMPHI2(J,M,C0,AC)
c------------------------------------------------------------------------
c     cos(M*phi) calculation (M > 0)
c
      implicit none
      INTEGER   M,I,J
      REAL*8    C0,C2,C3,AC(500,0:24)
c
      AC(J,0)=1.0
      AC(J,1)=C0
      AC(J,2)=2.0*C0*C0-1.D0
      AC(J,3)=(2.0*AC(J,2)-1.0)*C0
      DO I=4,M
         AC(J,I)=2.D0*C0*AC(J,I-1)-AC(J,I-2)
      ENDDO
c      
      RETURN
      END

      REAL*8 FUNCTION SINMPHI(M,C0,S0)
c------------------------------------------------------------------------
c     sin(M*phi) calculation (M > 0)
c
      implicit none
      INTEGER   M,I
      REAL*8    C0,S0,S2,S3
c
      IF(M.EQ.0) THEN
         SINMPHI=0.D0
      ELSEIF(M.EQ.1) THEN
         SINMPHI=S0
      ELSEIF(M.EQ.2) THEN
         SINMPHI=2.D0*C0*S0
      ELSEIF(M.EQ.3) THEN
         S2=2.D0*C0*S0
         SINMPHI=2.D0*C0*S2-S0
      ELSEIF(M.GE.4) THEN
         S2=2.D0*C0*S0
         S3=2.D0*C0*S2-S0
         DO I=4,M
            SINMPHI=2.D0*C0*S3-S2
            S2=S3
            S3=SINMPHI
         ENDDO
      ENDIF
c      
      RETURN
      END


      SUBROUTINE SINMPHI2(J,M,C0,S0,AS)
c------------------------------------------------------------------------
c     sin(M*phi) calculation (M > 0)
c
      implicit none
      INTEGER   M,I,J
      REAL*8    C0,S0,S2,S3,AS(500,0:24)
c
      AS(J,0)=0.0
      AS(J,1)=S0
      AS(J,2)=2.0*C0*S0
      AS(J,3)=2.0*C0*AS(J,2)-S0
      DO I=4,M
         AS(J,I)=2.0*C0*AS(J,I-1)-AS(J,I-2)
      ENDDO
c      
      RETURN
      END

c      SUBROUTINE RECT_STPOL(NTOT,X,Y,Z,CG,NTPOL,
c     $           XSCAL,YSCAL,ZSCAL,REXCL,MIJ,COEF,LSTPX,LSTPY,LSTPZ,
c     $           BNORM,LSTPOL)
cc-----------------------------------------------------------------------
cc     calculate the coefficients of the basis functions and
cc     make a list of the basis functions according to their contribution
cc     to the reaction field energy
cc
c      implicit none
c      include 'consta.fcm'
c      REAL*8  X(*),Y(*),Z(*),CG(*),COEF(*),MIJ(*),BNORM(*)
c      REAL*8  XSCAL,YSCAL,ZSCAL,REXCL
c      INTEGER NTOT,NTPOL
c      INTEGER LSTPX(*),LSTPY(*),LSTPZ(*),LSTPOL(*)
cc local
c      real*8  EMN(2000)
c      real*8  xmin,xmax,ymin,ymax,zmin,zmax
c      REAL*8  TMPEMN,TMPENN,EMIN,TMPCOEF
c      REAL*8  LPOL,XG,YG,ZG,NORM
c      INTEGER I,J,IJ,II,JJ,NORDER
c      INTEGER XPOL,YPOL,ZPOL,POLMIN
c      INTEGER TMPIPX,TMPIPY,TMPIPZ,TMPPOL
c
cc calculate the coefficients of the basis functions
c      XMIN=-1.0d0/XSCAL+REXCL
c      XMAX= 1.0d0/XSCAL-REXCL
c      YMIN=-1.0d0/YSCAL+REXCL
c      YMAX= 1.0d0/YSCAL-REXCL
c      ZMIN=-1.0d0/ZSCAL+REXCL
c      ZMAX= 1.0d0/ZSCAL-REXCL
c      DO II=1,NTPOL
c         COEF(II)=0.d0
c      ENDDO
c      DO 101 J=1,NTOT
c         XG=X(J)   !-RRXCEN
c         YG=Y(J)   !-RRYCEN
c         ZG=Z(J)   !-RRZCEN
c         IF(ZG.LT.ZMIN.OR.ZG.GT.ZMAX) GOTO 101
c         IF(XG.LT.XMIN.OR.XG.GT.XMAX) GOTO 101
c         IF(YG.LT.YMIN.OR.YG.GT.YMAX) GOTO 101
c         DO II=1,NTPOL
c            XPOL=LSTPX(II)
c            YPOL=LSTPY(II)
c            ZPOL=LSTPZ(II)
c            NORM=BNORM(II)
c            COEF(II)=COEF(II)+CG(J)*NORM*LPOL(XPOL,XG,XSCAL)*
c     $                        LPOL(YPOL,YG,YSCAL)*LPOL(ZPOL,ZG,ZSCAL)
c         ENDDO
c 101  ENDDO
c
c calculate the energy contribution of each basis function and
c find the smallest one and remove the function
c repeat it again
c      DO II=1,NTPOL
c         LSTPOL(II)=II
c      ENDDO
c      DO NORDER=NTPOL,1,-1
c         DO I=1,NORDER
c            II=LSTPOL(I)
c            IJ=(II-1)*NTPOL+II
c            EMN(I)=0.5d0*COEF(II)*COEF(II)*MIJ(IJ)*CELEC
c            DO J=1,I-1
c               JJ=LSTPOL(J)
c               IJ=(JJ-1)*NTPOL+II
c               EMN(I)=EMN(I)+COEF(II)*COEF(JJ)*MIJ(IJ)*CELEC
c            ENDDO
c            DO J=I+1,NORDER
c               JJ=LSTPOL(J)
c               IJ=(II-1)*NTPOL+JJ
c               EMN(I)=EMN(I)+COEF(II)*COEF(JJ)*MIJ(IJ)*CELEC
c            ENDDO
c         ENDDO
c         EMIN=1.0d10
c         DO I=1,NORDER
c            IF(abs(EMN(I)).lt.EMIN) THEN
c               EMIN=abs(EMN(I))
c               POLMIN=I
c            ENDIF
c         ENDDO
c         TMPPOL=LSTPOL(POLMIN)
c         DO I=POLMIN+1,NORDER
c            LSTPOL(I-1)=LSTPOL(I)
c         ENDDO
c         LSTPOL(NORDER)=TMPPOL
c      ENDDO
c
c      RETURN
c      END

c      SUBROUTINE SPHE_STPOL(NTOT,X,Y,Z,CG,NTPOL,SRDIST,REXCL,MIJ,COEF,
c     $           LSTPL,LSTPM,BNORM,LSTPOL)
cc-----------------------------------------------------------------------
cc     calculate the coefficients of the basis-set functions and
cc     make a list of the basis functions according to their contribution
cc     to the reaction field energy
cc
c      implicit none
c      include 'consta.fcm'
c      REAL*8  X(*),Y(*),Z(*),CG(*),COEF(*),MIJ(*),BNORM(*)
c      REAL*8  SRDIST,REXCL
c      INTEGER NTOT,NTPOL
c      INTEGER LSTPL(*),LSTPM(*),LSTPOL(*)
cc local
c      real*8  EMN(2000)
c      REAL*8  TMPEMN,TMPENN,EMIN,TMPCOEF
c      REAL*8  NORM,CT,ST,R,CP,SP,RPOWERL,COSMPHI,SINMPHI,ALPOL
c      REAL*8  XDIFF,YDIFF,ZDIFF,R2,SRDIST2
c      INTEGER I,J,L,M,IJ,II,JJ,NORDER,POLMIN
c      INTEGER TMPIPX,TMPIPY,TMPIPZ,TMPPOL
c
cc calculate the coefficients of the basis-set functions
c      SRDIST2=(SRDIST-REXCL)*(SRDIST-REXCL)
c      DO II=1,NTPOL
c         COEF(II)=0.D0
c      ENDDO
c      DO 99 J=1,NTOT
c         XDIFF=X(J) !-RRXCEN
c         YDIFF=Y(J) !-RRYCEN
c         ZDIFF=Z(J) !-RRZCEN
c         R2=XDIFF*XDIFF+YDIFF*YDIFF+ZDIFF*ZDIFF
c         IF(R2.GT.SRDIST2) GOTO 99
c         R=SQRT(R2)
c         CT=ZDIFF/R
c         ST=SQRT(1.D0-(ZDIFF*ZDIFF)/(R2))
c         CP=XDIFF/R/ST
c         SP=YDIFF/R/ST
c         IF(R2.LT.RSMALL) THEN                               ! in the origin
c            CT=0.D0
c            CP=0.D0
c            SP=0.D0
c         ELSEIF(XDIFF.GT.-RSMALL.AND.XDIFF.LT.RSMALL.AND.    ! in the Z-axis
c     $          YDIFF.GT.-RSMALL.AND.YDIFF.LT.RSMALL) THEN
c            CT=1.D0
c            IF(ZDIFF.LT.0.D0) CT=-1.D0
c            CP=0.D0
c            SP=0.D0
c         ELSEIF(ZDIFF.GT.-RSMALL.AND.ZDIFF.LT.RSMALL) THEN   ! in the XY plane
c            CT=0.D0
c            CP=XDIFF/R
c            SP=YDIFF/R
c         ENDIF
c         DO II=1,NTPOL
c            L=LSTPL(II)
c            M=LSTPM(II)
c            NORM=BNORM(II)
c            IF(L.GE.0.AND.M.EQ.0) THEN
c               COEF(II)=COEF(II)+CG(J)*
c     $                  NORM*RPOWERL(L,R)*ALPOL(L,M,CT)
c            ELSEIF(L.GT.0.AND.M.GT.0) THEN
c               COEF(II)=COEF(II)+CG(J)*
c     $                  NORM*RPOWERL(L,R)*COSMPHI(M,CP)*ALPOL(L,M,CT)
c            ELSEIF(L.GT.0.AND.M.LT.0) THEN
c               M=-M
c               COEF(II)=COEF(II)+CG(J)*
c     $                  NORM*RPOWERL(L,R)*SINMPHI(M,CP,SP)*ALPOL(L,M,CT)
c            ENDIF
c         ENDDO
c 99   ENDDO
c
c calculate the energy contribution of each basis function and
c find the smallest one and remove the function
c repeat it again
c      DO II=1,NTPOL
c         LSTPOL(II)=II
c      ENDDO
c      DO NORDER=NTPOL,1,-1
c         DO I=1,NORDER
c            II=LSTPOL(I)
c            IJ=(II-1)*NTPOL+II
c            EMN(I)=0.5d0*COEF(II)*COEF(II)*MIJ(IJ)*CELEC
c            DO J=1,I-1
c               JJ=LSTPOL(J)
c               IJ=(JJ-1)*NTPOL+II
c               EMN(I)=EMN(I)+COEF(II)*COEF(JJ)*MIJ(IJ)*CELEC
c            ENDDO
c            DO J=I+1,NORDER
c               JJ=LSTPOL(J)
c               IJ=(II-1)*NTPOL+JJ
c               EMN(I)=EMN(I)+COEF(II)*COEF(JJ)*MIJ(IJ)*CELEC
c            ENDDO
c         ENDDO
c         EMIN=1.0d10
c         DO I=1,NORDER
c            IF(abs(EMN(I)).lt.EMIN) THEN
c               EMIN=abs(EMN(I))
c               POLMIN=I
c            ENDIF
c         ENDDO
c         TMPPOL=LSTPOL(POLMIN)
c         DO I=POLMIN+1,NORDER
c            LSTPOL(I-1)=LSTPOL(I)
c         ENDDO
c         LSTPOL(NORDER)=TMPPOL
c      ENDDO
c
c      RETURN
c      END
