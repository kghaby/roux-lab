c==============================================================================
                        PROGRAM SIMUL0
c==============================================================================

      include 'grand.fcm'
      include 'gsbp.fcm'
      include 'consta.fcm'
      include 'grand_io.fcm'
      data inpu,outu/5,6/

c     Command parser and file name
      character com*350,fnam*80,wrd5*5
      include 'charli.fcm'   !command parser
      include 'misc.fcm'     !command parser
      character*4 wrd4,ionname
      real*8 dener
      real*8 battery
      real*8 r1,r2,r6,r12,z1,v1,v2
      real*8 sigij,epsij,is1,u,u1,u2,u11,u12,u111,u112,u3,u5

c for time
      real*8       start,finish,cputime
      character*8  hour
      integer      is

c for short-ragne ion-ion interactions
      integer index
      index(itype,jtype) = MAX(itype,jtype)*(MAX(itype,jtype)-1)/2 + 
     $                     MIN(itype,jtype)

c     Default parameters and options
c     ------------------------------
      frmt = ' '
      Qenergy  = .true.
      Qforces  = .true.
      Qnonbond = .true.
      Qgr      = .false.
      Qmemb    = .false.
      Qmmij    = .false.
      Qphix    = .false.
      Qphiv    = .false.
      Qsrpmf   = .false.
      Qnmcden  = .false.
      Qdiffuse = .false.
      Qprofile = .false.
      nmaxz    = 0
      iseed    = 3141593
      nfix     = 0
       do is =1,1000
       xs(is)=0.0
       ys(is)=0.0
       b(is)=0.0
       c(is)=0.0
       d(is)=0.0
       enddo

      write(outu,'(6x,a)')
     $     'ELECTRODIFFUSION AND BROWNIAN DYNAMICS SIMULATION PROGRAM'
      write(outu,'(6x,a)')
     $     '========================================================='
      start = cputime(0.0D0)
      call time(hour)
      write(outu,107) 'started at: ',hour
      write(outu,*)
      write(outu,*)

      call RDTITL(inpu)

 1000 call getlin('CMD> ',com,inpu,outu)
      call nxtchn(com,' ',wrd5)
      call misc(com,strg,qstrg,wrd5)
      call upper(wrd5)

      if(wrd5.eq.'GOTO ')then
c        ---------------
         call gtlabel(com,wrd5)

      elseif(wrd5.eq.'LABEL')then
c            ---------------
         wrd5=' '

      elseif(wrd5.eq.'     ')then
c            ---------------
          goto 1000

      elseif(wrd5.eq.'OPEN ')then
c            ---------------
         call gtipar(com,'unit',iunit,-1)
         call getwrd(com,'name',fnam)
         call fend(fnam,lfnam)
         write(outu,105) fnam(1:lfnam),iunit
 105     format(6x,'open file ',a,' as unit ',i3)
         write(outu,*)
         if(check(com,'write'))then
            if(check(com,'file '))then
            open(unit=iunit,file=fnam,form='unformatted')
            else
            open(unit=iunit,file=fnam,form='formatted')
            endif
         elseif(check(com,'read'))then
            if(check(com,'file '))then
            open(unit=iunit,file=fnam,status='old',form='unformatted')
            rewind(unit=iunit)
            else
            open(unit=iunit,file=fnam,status='old',form='formatted')
            rewind(unit=iunit)
            endif
         endif

      elseif(wrd5.eq.'STREA')then
c            ---------------
         call gtipar(com,'unit',inpu,-1)
         if(inpu.eq.-1)then
         if(trim(com))then
         fnam=com
         inpu=99
         open(unit=inpu,file=fnam,status='old')
         call fend(fnam,lfnam)
         write(outu,105) fnam(1:lfnam),inpu
         else
         inpu=5
         endif
         endif
         write(outu,101) inpu
  101    format(6x,'Streaming unit ',i3,/)
  
      elseif(wrd5.eq.'EXIT ')then
c            ---------------
         close(unit=inpu)
         write(outu,102) inpu
  102    format(6x,'Closing stream unit ',i3,' back to unit   5',/)
         inpu=5 !end of streaming, back to unit 5

      elseif(wrd5.eq.'CLOSE')then
c            ---------------
         call gtipar(com,'unit',iunit,-1)
         close(unit=iunit)

      elseif(wrd5.eq.'PARTI')then
c            ---------------
         ntype = 0
 1001    call getlin('---> ',com,inpu,outu)
         call misc(com,strg,qstrg,wrd5)
         if(.not.  (check(com,'end').or.check(com,'END')) )then
         ntype = ntype + 1
         call nxtchn(com,' ',atnam(ntype))
         call gtdpar(com,'eps',eps(ntype),0.0d0)
         call gtdpar(com,'sigma',sigma(ntype),0.0d0)
         call gtdpar(com,'charge',cg(ntype),0.0d0)
         call gtdpar(com,'diffusion',diffusion(ntype),0.1d0)
         goto 1001
         endif

         write(outu,*)
         write(outu,'(6x,a,i3,a)') 'There are ',ntype,' atom types'
         do i=1,ntype
         write(outu,'(6x,i3,1x,a,4f8.3)') i,atnam(i),eps(i),sigma(i),
     ,        cg(i), diffusion(i)
         enddo
         write(outu,*)

      elseif(wrd5.eq.'BUFFE')then
c            ---------------

         Qsphere = check(com,'sphere')
         if(Qsphere)then
            call gtdpar(com,'radi',r1,0.0d0)
            LX=2*r1
            LY=2*r1
            LZ=2*r1
         else
            call gtdpar(com,'LX',LX,0.0d0)
            call gtdpar(com,'LY',LY,0.0d0)
            call gtdpar(com,'LZ',LZ,0.0d0)
         endif

         nbuffer = 0
 1002    call getlin('---> ',com,inpu,outu)
         call misc(com,strg,qstrg,wrd5)
         if(.not.  (check(com,'end').or.check(com,'END')) )then
         nbuffer = nbuffer + 1
c        call gtipar(com,'type',ibfftyp(nbuffer),1)
         call nxtchn(com,' ',wrd4)
         call fatnam(atnam,ntype,wrd4,itype)
         ibfftyp(nbuffer)=itype
         call gtdpar(com,'mu',mu(nbuffer),0.0d0)
         call gtdpar(com,'LZmin',LZmin(nbuffer),-LZ/2)
         call gtdpar(com,'LZmax',LZmax(nbuffer),LZ/2)
         Qbufferbias(nbuffer)=.false.
         Qbufferbias(nbuffer)= check(com,'bufferbias')
         call gtdpar(com,'kb',kb(nbuffer),0.0d0)

         if(Qsphere)then
            call gtdpar(com,'Rmin',Rmin(nbuffer),0.0d0)
            call gtdpar(com,'Rmax',Rmax(nbuffer),LZ/2)
            if(Rmax(nbuffer).gt.LZ/2)then
               write(outu,'(6x,a)')
     ,              '* warning, spherical region is too large *'
            endif
            r1=Rmin(nbuffer)
            r2=Rmax(nbuffer)
            if(LZmin(nbuffer).gt.0.0)  z1=LZmin(nbuffer)
            if(LZmax(nbuffer).lt.0.0)  z1=abs(LZmax(nbuffer))
            if(r1.gt.z1)then
               v1 = twopi*(r1**3/3.0-(z1*r1**2/2.0-z1**3/6.0))
               v2 = twopi*(r2**3/3.0-(z1*r2**2/2.0-z1**3/6.0))
            else
               v1 = 0.0d0
               v2 = twopi*(r2**3/3.0-(z1*r2**2/2.0-z1**3/6.0))
            endif
            volume(nbuffer) = v2-v1
            if((LZmin(nbuffer).eq.-LZ/2).and.
     $         ((LZmax(nbuffer).eq.LZ/2)))then
               v1=2*twopi*r1**3/3.0
               v2=2*twopi*r2**3/3.0
            endif
            volume(nbuffer) = v2-v1
         else
            volume(nbuffer) = (LX*LY*(LZmax(nbuffer)-LZmin(nbuffer)))
         endif
         call gtdpar(com,'conc',density(nbuffer),0.0d0) !concentration in Mol/Liter
         density(nbuffer)=
     $   density(nbuffer)*(avogadro/liter)*(angstrom**3)
         avnum(nbuffer)=density(nbuffer)*volume(nbuffer)
         call gtdpar(com,'aver',avnum(nbuffer),avnum(nbuffer))
         density(nbuffer)=avnum(nbuffer)/volume(nbuffer)
         call gtdpar(com,'batt',battery,0.0d0)
         call gtdpar(com,'volt',battery,0.0d0)
c        write(*,*) 'mu',mu(nbuffer),cg(itype)*battery*Coulomb/kcalmol
         mu(nbuffer)=mu(nbuffer)+cg(itype)*battery*Coulomb/kcalmol
         goto 1002
         endif
         write(outu,*)
         if(Qsphere)then
         write(outu,'(6x,3(a,f8.3))') 'Spherical system,  radius',LZ/2
         else
         write(outu,'(6x,3(a,f8.3))') 'Box,  LX',LX,' LY',LY,' LZ',LZ
         endif
         write(outu,*)
         write(outu,'(6x,a,i3,a)') 'There are ',nbuffer,' buffers'
         do ib=1,nbuffer
            nremove(ib)= 0
            ninsert(ib)= 0
            write(outu,'(6x,i4,1x,a,4f12.5,1x,2e12.4,f10.5)') 
     $           ib,atnam(ibfftyp(ib)),mu(ib),LZmin(ib),LZmax(ib),
     $           avnum(ib),density(ib),volume(ib),kb(ib)
         enddo
         write(outu,*)

      elseif(wrd5.eq.'SIMUL')then
c            ---------------
         call gtipar(com,'ncycl',ncycle,0)
         call gtipar(com,'ngran',ngrand,0)
         call gtipar(com,'nmove',nmove,0)
         call gtdpar(com,'dmov',dmove,1.00d0)
         call gtipar(com,'nstep',nstep,0)
         call gtipar(com,'iuntrj',iuntrj,-1)
         call gtipar(com,'nsave',nsave,ncycle)
         call gtipar(com,'iseed',iseed,iseed)
         call gtdpar(com,'dt',dt,0.05d0)
         call gtdpar(com,'zcont',zcont,0.0d0)
         call gtdpar(com,'temp',temp,300.0d0)
         call gtdpar(com,'cdie',cdie,80.0d0)
         call gtipar(com,'nprint',nprint,0)
         kBT      = kboltz*temp/kcalmol
         Qgr      = check(com,'g(r)')
         Qrho     = check(com,'rho')
         Qprob    = check(com,'prob')
         call gtipar(com,'nanal',nanal,1)
         Qionpair =.false.
         Qionpair = check(com,'ionpair')
         Qenerprofile=.false.
         Qenerprofile=check(com,'enerprofile')
         IF(Qprob) then
            call gtdpar(com,'czmax',czmax,0.0D0)     ! channel Z-max
            call gtdpar(com,'czmin',czmin,0.0D0)     ! channel Z-min
         endif
         IF(Qgr) then
            call gtdpar(com,'xgr',xgr,0.0d0)
            call gtdpar(com,'ygr',ygr,0.0d0)
            call gtdpar(com,'zgr',zgr,0.0d0)
         endif
         Qenergy  = .not.check(com,'noenergy')
         Qnonbond = .not.check(com,'nononbond')
         Qzperiodic = check(com,'Zperiodic')

         call SIMUL1(ncycle, ngrand, nmove, nstep, nsave)

      elseif(wrd5.eq.'ENERG')then
c            ---------------
         call gtdpar(com,'cdie',cdie,80.0d0)
         Qenergy  = .not.check(com,'noenergy')
         Qnonbond = .not.check(com,'nononbond')
         Qmemb    = .not.check(com,'nomembrane')
         Qmmij    = check(com,'mmij')
         Qphix    = check(com,'phix')
         Qphiv    = check(com,'phiv')
         Qsrpmf   = check(com,'srpmf')

         IF(Qnonbond) write(6,'(6x,a)') 'Nonbonding Energy Term'
         IF(Qmmij)    write(6,'(6x,a)') 'Reaction Field Energy Term'
         IF(Qphix)    write(6,'(6x,a)') 'External Field Energy Term'
         IF(Qphiv)    write(6,'(6x,a)') 'Repulsive Energy Term'
         IF(Qsrpmf)   write(6,'(6x,a)') 'Short-range Interaction Term'

         call ENERGY
         write(outu,'(6x,a,f12.6)') 'Total energy ',ener

      elseif(wrd5.eq.'INTER')then
c            ---------------
         call gtdpar(com,'cdie',cdie,80.0d0)
         call gtipar(com,'atom',iat,1)
         Qenergy  = .not.check(com,'noenergy')
         Qnonbond = .not.check(com,'nononbond')
         Qmemb    = .not.check(com,'nomembrane')
         Qmmij    = check(com,'mmij')
         Qphix    = check(com,'phix')
         Qphiv    = check(com,'phiv')
         Qsrpmf   = check(com,'srpmf')

         IF(Qnonbond) write(6,'(6x,a)') 'Nonbonding Energy Term'
         IF(Qmmij)    write(6,'(6x,a)') 'Reaction Field Energy Term'
         IF(Qphix)    write(6,'(6x,a)') 'External Field Energy Term'
         IF(Qphiv)    write(6,'(6x,a)') 'Repulsive Energy Term'
         IF(Qsrpmf)   write(6,'(6x,a)') 'Short-range Interaction Term'

         call INTERACT(dener,x(iat),y(iat),z(iat),abs(type(iat)),iat,
     $        .false.)
         write(outu,'(6x,a,f12.6)') 'Interaction of particle ',iat,dener

      elseif(wrd5.eq.'MEMBR')then
c            ---------------

         Qmemb = .true.
         call gtdpar(com,'thic',thick2,0.0d0)
         call gtdpar(com,'zmemb',zmemb,0.0d0)
         call gtdpar(com,'volt',voltage,0.0d0)
         thick2=thick2/2.0  !store half the membrane thickness

 1003    call getlin('---> ',com,inpu,outu)
         call misc(com,strg,qstrg,wrd5)
         if(.not.  (check(com,'end').or.check(com,'END')) )then
         call nxtchn(com,' ',wrd4)
         call fatnam(atnam,ntype,wrd4,itype)
         call gtdpar(com,'ampl1',ampl1(itype),0.0d0)
         call gtdpar(com,'ampl2',ampl2(itype),0.0d0)
         call gtdpar(com,'p1',p1(itype),1.0d0)
         call gtdpar(com,'p2',p2(itype),1.0d0)
         call gtdpar(com,'radi',rcylinder(itype),1.0d0)
         if(check(com,'read').or.check(com,'READ'))then
            call gtipar(com,'unit',iunit,5)
            write(outu,'(6x,a,i3)') 'Profile from unit ',iunit
            read(iunit,*) nmaxz,deltaz
            write(outu,*) nmaxz,deltaz
            write(outu,*) 
     ,      'profile ',-(nmaxz+1)*deltaz/2,(nmaxz+1)*deltaz/2
            do i =1,nmaxz
            read(iunit,*) w(i),w(i)
            write(*,*) -(nmaxz+1)*deltaz/2+i*deltaz,w(i)
            enddo
         endif
         goto 1003
         endif
         write(outu,*)
         write(outu,90) 'MEMBRANE parameters:'
         write(outu,90) 'Membrane thickness ',2*thick2,' [Angs]'
         write(outu,90) 'Membrane center    ',   zmemb,' [Angs]'
         write(outu,90) 'voltage            ', voltage,' [Volts]'
         voltage = voltage*Coulomb/kcalmol
         if(nmaxz.gt.0) then
         write(outu,'(6x,a)') 'there is a free energy profile '
         endif

         do i=1,ntype
            write(outu,'(6x,i3,3x,a,1x,5f8.3)') 
     ,      i,atnam(i),ampl1(i),p1(i),ampl2(i),p2(i),rcylinder(i)
         enddo
         write(outu,*)
 90      format(6x,a,f8.3,a)

      elseif(wrd5.eq.'ION-I')then
c            ---------------

         Qmemb = .true.
 1004    call getlin('---> ',com,inpu,outu)
         call misc(com,strg,qstrg,wrd5)
         if(.not.  (check(com,'end').or.check(com,'END')) )then
         call nxtchn(com,' ',wrd4)
         call fatnam(atnam,ntype,wrd4,itype)
         call nxtchn(com,' ',wrd4)
         call fatnam(atnam,ntype,wrd4,jtype)
         call gtdpar(com,'ampl3',ampl3(itype,jtype),0.0d0)
         ampl3(itype,jtype) = ampl3(jtype,itype)
         goto 1004
         endif
         write(outu,*)
         write(outu,'(6x,a,)') 'Ion-Ion repulsion:'
         do i=1,ntype
            do j=i,ntype
            write(outu,'(6x,a,a,5f12.3)') atnam(i),atnam(j),ampl3(i,j)
            enddo
         enddo
         write(outu,*)

      elseif(wrd5.eq.'SRPMF')then ! Short-Range Ion-ion PMF
c            ---------------

         Qsrpmf    = .true.
         call gtdpar(com,'cdie',cdie,80.0d0)
 1009    call getlin('---> ',com,inpu,outu)
         itype=0
         jtype=0
         call misc(com,strg,qstrg,wrd5)
         if(.not.  (check(com,'end').or.check(com,'END')) )then
            call nxtchn(com,' ',wrd4)
            call fatnam(atnam,ntype,wrd4,itype)
            call nxtchn(com,' ',wrd4)
            call fatnam(atnam,ntype,wrd4,jtype)
            if(itype.eq.0.or.jtype.eq.0) then
               write(6,'(6x,a)') 'A ion pair is necessary'
               stop
            endif
            call gtdpar(com,'c0',c0(index(itype,jtype)),0.0d0)
            call gtdpar(com,'c1',c1(index(itype,jtype)),0.0d0)
            call gtdpar(com,'c2',c2(index(itype,jtype)),0.0d0)
            call gtdpar(com,'c3',c3(index(itype,jtype)),0.0d0)
            call gtdpar(com,'c4',c4(index(itype,jtype)),0.0d0)

            call gtipar(com,'unit',iunit,-1)
            if(iunit.gt.0) then
               fact  = celec*cg(jtype)/cdie
               do r1=0.1,8.0,0.05
                  epsij = sqrt(eps(itype)*eps(jtype))
                  sigij = 0.5*(sigma(itype)+sigma(jtype))
                  r2    = r1*r1
                  r6    = (sigij**2/r2)**3
                  r12   = r6**2
                  evdw  = 4.0*epsij*(r12-r6)

                  eelec = fact*cg(itype)/r1
            
                  cc0=c0(index(itype,jtype))
                  cc1=c1(index(itype,jtype))
                  cc2=c2(index(itype,jtype))
                  cc3=c3(index(itype,jtype))
                  cc4=c4(index(itype,jtype))
                  esrpmf=cc0*exp((cc1-r1)/cc2)*cos(cc3*pi*(cc1-r1))+
     $                   cc4*(cc1/r1)**6

                  if(evdw+eelec+esrpmf.le.50.0) then
                     write(iunit,'(4f12.5)') r1,evdw+eelec+esrpmf,
     $                                       evdw+eelec,esrpmf
                  endif
               enddo
            endif

            goto 1009
         endif

         if(Qsrpmf) then
            write(6,'(6x,a)') 
            write(6,'(6x,a)') 
     $           'Short-range ion-ion interactions are turn on'
         endif

         do jtype=1,ntype
            do itype=jtype,ntype
               write(outu,'(6x,6x,a,1x,a,5f8.3)') 
     $              atnam(itype),atnam(jtype),
     $              c0(index(itype,jtype)),
     $              c1(index(itype,jtype)),
     $              c2(index(itype,jtype)),
     $              c3(index(itype,jtype)),
     $              c4(index(itype,jtype))
            enddo
         enddo

       write(outu,*)
       elseif (wrd5 .eq. 'PROFI') then
       Qprofile = .true.
1115   call getlin('---> ',com,inpu,outu)
       call misc(com,strg,qstrg,wrd5)
       if(.not.  (check(com,'end').or.check(com,'END')) )then
       call gtipar(com,'difunit',iunit,-1)
       read(iunit,*) nspline
       do is =1, nspline
       read(iunit,*) xs(is),ys(is)
       enddo
       close (11)
       CALL SPLINE (nspline,xs,ys,b,c,d)
       do is1 = -80,80,1 
       u = is1 
       u1 = seval (nspline,u,xs,ys,b,c,d)
       u2 = seval1(nspline,u,xs,ys,b,c,d)
       write(14,*) is1,u1,u2
       enddo  
       goto 1115
       endif
      elseif(wrd5.eq.'DIFFU')then ! Diffusion_constant
c            ---------------

         Qdiffuse = .true.
         call gtdpar(com,'porelength',plength2,0.0d0)
         call gtdpar(com,'pcenter',pcenter,0.0d0)
         plength2=plength2/2.0  !store half the pore length

 1008    call getlin('---> ',com,inpu,outu)
         call misc(com,strg,qstrg,wrd5)
         if(.not.  (check(com,'end').or.check(com,'END')) )then
         call nxtchn(com,' ',wrd4)
         call fatnam(atnam,ntype,wrd4,itype)
         call gtdpar(com,'lowfraction',ampl4(itype),0.0d0)
         call gtdpar(com,'switchlength',p3(itype),1.0d0)
         call gtipar(com,'unit',iunit,-1)
         if(iunit.gt.0) then
            do z1=-45,45,0.5
               call switch3(r1,r2,z1,plength2,p3(itype),pcenter)
               write(iunit,'(2f13.5)') z1
     $           , diffusion(itype)*(ampl4(itype)+(1.0-ampl4(itype))*r1)
c     $           , diffusion(itype)*(1.0-ampl4(itype))*r2
            enddo
         endif
         goto 1008
         endif
         write(outu,*)
         write(outu,90) 'DIFFUSION parameters:'
         write(outu,90) 'pore length        ',2*plength2,' [Angs]'
         write(outu,90) 'membrane center    ',   pcenter,' [Angs]'

         do i=1,ntype
            write(outu,'(6x,i3,3x,a,1x,5f8.3)') 
     $           i,atnam(i),ampl4(i),p3(i)
         enddo
         write(outu,*)


      elseif(wrd5.eq.'PRINT')then
c            ---------------
         call gtipar(com,'unit',iunit,outu)

         if(check(com,'syst'))then
         write(outu,'(6x,a,i4)') 'Total number of atoms  ',ntot
         write(outu,'(6x,a,i4)') 'Number of fixed atoms  ',nfix
         write(outu,'(6x,a,i4)') 'Number of moving atoms ',natom
         do ib=1,nbuffer
         write(outu,'(6x,a,2i4)') '     buffer ',ib, nat(ib)
         enddo
         elseif(check(com,'coor'))then
            write(outu,'(6x,a)') 'Configuration: '
            if(check(com,'CHARMM'))then
               write(iunit,'(a)') '* BD configuration file'
               write(iunit,'(a)') '* '
               write(iunit,'(i5)') ntot
               do i=1,ntot
               write(iunit,'(2i5,x,a4,x,a4,3f10.5,x,i4)') i,i,
     ,         atnam(abs(type(i))),atnam(abs(type(i))),x(i),y(i),z(i),
     ,         ibuffer(i)
               enddo
            else
              write(iunit,'(i4)') ntot
              do i=1,ntot
              write(iunit,'(2i4,3f10.5,i4)') 
     ,        i,type(i),x(i),y(i),z(i),ibuffer(i)
              enddo
            endif
         elseif(check(com,'forc'))then
            write(outu,'(6x,a)') 'Forces: '
              do i=1,ntot
              write(iunit,'(2i4,3f10.5,i4)') 
     ,        i,type(i),fx(i),fy(i),fz(i),ibuffer(i)
              enddo

         elseif(check(com,'titl'))then
            call wrtitl(iunit)

         endif
         write(outu,*)

      elseif(wrd5.eq.'COUNT')then
c            ---------------
         call COUNT

      elseif(wrd5.eq.'COOR ')then
c            ---------------
         call gtipar(com,'nfix',nfix,nfix)
         if(check(com,'read').or.check(com,'READ'))then
            call gtipar(com,'unit',iunit,5)
            write(outu,'(6x,a,i3)') 
     $           'Reading coordinates from unit ',iunit
            if(check(com,'CHARMM')) then
 1005          read(iunit,'(a)') com
               if(com(1:1).eq.'*') goto 1005
               read(com,'(i5)') ntot
               write(outu,'(6x,a,i5)') 'ntot ',ntot
               natom = ntot - nfix
               do i=1,ntot
                  read(iunit,'(a)') com
                  read(com,'(2i5,1x,a4,1x,a4,3f10.5,1x,i4)') ii,ii,
     $                 ionname,ionname,x(i),y(i),z(i),ibuffer(i)
                  call fatnam(atnam,ntype,ionname,itype)
                  type(i)=itype
               enddo
            else
               read(iunit,*) ntot
               write(outu,'(6x,a,i5)') 'ntot ',ntot
               natom = ntot - nfix
               do i=1,ntot
                  read(iunit,'(a)') com
                  call subst(com,strg,outu)
                  read(com,'(2i4,3f10.5,i4)') 
     $                 ii,type(i),x(i),y(i),z(i),ibuffer(i)
               enddo
            endif
            write(outu,'(6x,a)') 'coordinates have been read'
            write(outu,*) 
c            do i=1,ntot
c               write(outu,'(2i4,3f10.5,i4)') 
c     $              i,type(i),x(i),y(i),z(i),ibuffer(i)
c            enddo
            call COUNT
c            do i=1,ntot
c               write(outu,'(2i4,3f10.5,i4)') 
c     $              i,type(i),x(i),y(i),z(i),ibuffer(i)
c            enddo

         elseif(check(com,'gener'))then
            call gtipar(com,'iseed',iseed,iseed)

            do ib=1,nbuffer
               nat(ib)  = avnum(ib)
            enddo
            natom = 0 
            ifirst = nfix+1
            ilast  = nfix+nat(1)
            do ib=1,nbuffer
               itype = ibfftyp(ib)
               natom = natom+nat(ib)
               do i=ifirst,ilast
                  type(i) = itype
                  ibuffer(i) = ib
                  call INSERT(ib,x(i),y(i),z(i))
                  if(z(i).lt.0.0) type(i) = -itype
               enddo
               ifirst = ifirst + nat(ib)
               ilast  = ilast  + nat(ib) + nat(ib+1)
            enddo
            write(outu,'(6x,a)') 'coordinates have been generated'
            write(outu,*) 
            ntot=natom+nfix
         endif

      elseif(wrd5.eq.'TEST ')then
c            ---------------
         call gtdpar(com,'cdie',cdie,80.0d0)
         Qenergy  = .not.check(com,'noenergy')
         Qnonbond = .not.check(com,'nononbond')
         Qmemb    = .not.check(com,'nomembrane')
         Qmmij    = check(com,'mmij')
         Qphix    = check(com,'phix')
         Qphiv    = check(com,'phiv')
         Qsrpmf   = check(com,'srpmf')

         IF(Qnonbond) write(6,'(6x,a)') 'Nonbonding Energy Term '
         IF(Qmmij)    write(6,'(6x,a)') 'Reaction Field Energy Term'
         IF(Qphix)    write(6,'(6x,a)') 'External Field Energy Term'
         IF(Qphiv)    write(6,'(6x,a)') 'Repulsive Energy Term'
         IF(Qsrpmf)   write(6,'(6x,a)') 'Short-range MD-PMF Term'

crftest         ntot=2
crftest         type(1)=1
crftest         type(2)=1
crftest         cg(1)=1.0
crftest         x(1)=0.0
crftest         y(1)=0.0
crftest         z(1)=0.0
crftest         do r1=0,24.5,0.5
crftest            x(2)=r1/sqrt(3.0)
crftest            y(2)=r1/sqrt(3.0)
crftest            z(2)=r1/sqrt(3.0)
crftest            call ENERGY
crftest            call INTERACT(dener,x(1),y(1),z(1),abs(type(1)),1,.false.)
crftest            write(*,*) r1,ener,dener,ener-dener
crftest         enddo
crftest         stop

         call ENERGY
         write(outu,'(6x,a,f12.6)') 
     $        'Total energy (from ENERGY)     ',ener
         ener = 0.0d0
         do iat=nfix+1,ntot
            call INTERACT(dener,x(iat),y(iat),z(iat),abs(type(iat)),iat,
     $           .false.)
            ener = ener + dener
         enddo
         write(outu,'(6x,a,f12.6)') 
     $        'Total energy (from INTERACTION)',ener
         call testfirst         ! return Qforces=.false.

      elseif(wrd5.eq.'GSBP ')then
c            ---------------

c phiv scaling
         call gtdpar(com,'svdw',svdw,0.0d0)
         call gtdpar(com,'vzmax',vzmax, LZ/2.0D0)
         call gtdpar(com,'vzmin',vzmin,-LZ/2.0D0)
         Qtrln    = check(com,'trilinear')
         if(Qtrln)then
            write(outu,'(6x,a)') 
     $         'Trilinear function will be used for repulsive potential'
         else
            write(outu,'(6x,a)') 
     $          'B-spline function will be used for repulsive potential'
         endif
         write(outu,'(6x,A,F7.2,A,F7.2,A,F7.2)') 
     $        'Uniformed repusive potential will be scaled by',svdw,
     $        ' kcal/mol between ',vzmin,' and ',vzmax 

c RECTBOX
         call gtdpar(com,'xmax',rbxmax,0.0d0)
         call gtdpar(com,'xmin',rbxmin,0.0d0)
         call gtdpar(com,'ymax',rbymax,0.0d0)
         call gtdpar(com,'ymin',rbymin,0.0d0)
         call gtdpar(com,'zmax',rbzmax,0.0d0)
         call gtdpar(com,'zmin',rbzmin,0.0d0)
         if(rbxmax.ne.0.0d0) then
            xscal=2.0d0/(rbxmax-rbxmin)
            yscal=2.0d0/(rbymax-rbymin)
            zscal=2.0d0/(rbzmax-rbzmin)
            write(outu,'(6x,a)') 
     $           'Reaction field will be calculated following region;'
            write(outu,'(6x,2(a,f10.5))')
     $           'X from ',rbxmin,' to ',rbxmax
            write(outu,'(6x,2(a,f10.5))')
     $           'Y from ',rbymin,' to ',rbymax
            write(outu,'(6x,2(a,f10.5))')
     $           'Z from ',rbzmin,' to ',rbzmax
         endif

c SPHERE
         call gtdpar(com,'srdist',srdist,0.0d0)
         if(srdist.ne.0.0d0) then
            write(6,'(6x,a)') 
     $           'Reaction field will be calculated following region;'
            write(outu,'(6x,a,f10.5)')
     $           'A sphere of raidus ',srdist
         endif

c PHIV
         Qnmcden     = check(com,'nmcden')
         if(Qnmcden) then
            write(outu,*) 
            write(outu,'(6x,a)') 
     $       'Different ion-accessible space is used for different ions'
         endif

         call gtipar(com,'phivunit',iunit,-1)
         if(iunit.gt.0)then
            if(Qnmcden) then
               write(outu,'(6x,a,10i3)') 
     $              'Reading grid-based repulsive potential from unit ',
     $              (I,I=iunit,iunit+(ntype-1))
            else
               write(outu,*) 
               write(outu,'(6x,a,i3)') 
     $              'Reading grid-based repulsive potential from unit ',
     $              iunit
            endif
            call READPHI(iunit,outu,'PHIV')
            Qphiv=.true.
         endif

c PHIX
         call gtipar(com,'phixunit',iunit,-1)
         if(iunit.gt.0)then
            write(outu,*) 
            write(outu,'(6x,a,i3)') 
     $           'Reading static external field from unit ',iunit
            call READPHI(iunit,outu,'PHIX')
            Qphix=.true.
         endif

c MMIJ
         call gtipar(com,'mmijunit',iunit,-1)
         if(iunit.gt.0)then
            write(outu,*) 
            write(outu,'(6x,a,i3)') 
     $           'Reading MMIJ matrix from unit ',iunit
            call READMMIJ(iunit,outu)
            if(shape.EQ.'RECTBOX ') then
               call RECT_NORM(ntpol,xscal,yscal,zscal,
     $                        lstpx,lstpy,lstpz,bnorm)
            else
               call SPHE_NORM(nmpol,bnorm,srdist)
            endif
            Qmmij=.true.
         endif

c etc..
         call gtdpar(com,'rfscal',rfscal,1.0d0)
         if(rfscal.ne.1.0)then
            write(6,'(6x,f4.2,a)') rfscal,
     $           ' scaling factor will be applied for rxnfld energy'
         endif

         write(outu,*)

      elseif(wrd5.eq.'STOP ')then
c            ---------------
         write(outu,*)
         finish = cputime(start)
         IF(finish.le.60.0) THEN
            write(outu,106) 'cpu time   :',finish,' seconds'
         ELSEIF(finish.gt.3600.0) THEN
            finish=finish/3600.0
            write(outu,106) 'cpu time   :',finish,' hours'
         ELSE
            finish=finish/60.0
            write(outu,106) 'cpu time   :',finish,' minutes'
         ENDIF
         call time(hour)
         write(outu,107)    'finished at: ',hour
         stop

 106     format(6x,a,f9.2,a)
 107     format(6x,2a)

      elseif(wrd5.eq.'*END*')then
c            ---------------
         write(outu,103)
  103    format(6x,'*ERROR*  END-OF-FILE ENCOUNTERED IN UNIT',i3)
         goto 2000
      else
         write(outu,104)
  104    format(6x,'*ERROR*  Unrecognized command')

      endif

      goto 1000

 2000 stop

      end

c------------------------------------------------------------------------------

      SUBROUTINE GRAND(ngrand,prob,icycle)
      include 'grand.fcm'
      include 'consta.fcm'
      include 'grand_io.fcm'
      integer prob(dtype,0:datom),icycle
      real*8  rate, dener, xnew, ynew, znew
      integer ngrand

      DO IGRAND=1,NGRAND

c         write(*,*) 'GRAND: initial energy: ',ener
c         write(*,*)
c         call ENERGY
c         write(*,*) 'GRAND: initial energy: ',ener

      if(random(iseed).le.0.5)then
c        Try to insert a particle into one of the buffers
c         write(*,*) 'Try to insert a particle into one of the buffers'
         ib = int(nbuffer*random(iseed))+1
Cim.. skip INSERT     
         if(avnum(ib).eq.0.0) goto 101
         itype = ibfftyp(ib)
         call INSERT(ib,xnew,ynew,znew)
         call INTERACT(dener,xnew,ynew,znew,itype,ntot+1,.true.)

         if(Qbufferbias(ib)) then
            rate=(avnum(ib)+kb(ib)*(avnum(ib)-1.0*ntotat(ib)/icycle))
            rate=rate*exp(-(dener-mu(ib))/kBT)/(nat(ib)+1)
         else
            rate=(avnum(ib)/(nat(ib)+1))*exp(-(dener-mu(ib))/kBT)
         endif
         rate=rate/(1.0+rate)
c         write(*,*) 'insert? dener ',dener,ntot+1,znew
         if(random(iseed).le.rate)then
c            write(*,*) 'insert    ', ntot+1,itype,dener
            ener = ener + dener
            nat(ib)=nat(ib)+1
            ntot=ntot+1
            natom=natom+1
            x(ntot) = xnew
            y(ntot) = ynew
            z(ntot) = znew
            type(ntot) = itype
            if(znew.lt.0.0) type(ntot) = -itype
            ibuffer(ntot) = ib
            ninsert(ib) = ninsert(ib) + 1
         endif
      else
c        Try to remove a particle
c         write(*,*) 'Try to remove a particle from a buffer'
         ib    = int(nbuffer*random(iseed))+1
         ip    = int(nat(ib)*random(iseed))+1
         itype = ibfftyp(ib)
Cim.. skip REMOVE
         if(nat(ib).eq.0) goto 101
         call FIND(ibuffer,ib,nfix,ntot,ip,iat)
         call INTERACT(dener,x(iat),y(iat),z(iat),itype,iat,.true.)

         if(Qbufferbias(ib)) then
            rate=(avnum(ib)+kb(ib)*(avnum(ib)-1.0*ntotat(ib)/icycle))
            rate=rate*exp(-(dener-mu(ib))/kBT)/nat(ib)
         else
            rate=(avnum(ib)/nat(ib))*exp(-(dener-mu(ib))/kBT)
         endif
         rate=1.0/(1.0+rate)
c         write(*,*) 'remove? dener ',dener,iat,z(iat)
         if(random(iseed).le.rate)then
c            write(*,*) 'remove ', iat, type(iat),dener
            ener = ener - dener
            nremove(ib) = nremove(ib) + 1
            x(iat) = x(ntot)  !copy coordinates of last particle
            y(iat) = y(ntot)
            z(iat) = z(ntot)
            type(iat) = type(ntot)
            ibuffer(iat) = ibuffer(ntot)
            nat(ib)=nat(ib)-1
            natom=natom-1
            ntot=ntot-1
         endif
 101     continue

      endif

      do ib=1,nbuffer
         prob(ib,nat(ib)) = prob(ib,nat(ib)) + 1
      enddo

c     do itype=1,ntype
c     write(*,'(a,i3,a,i3)') 'type ',itype, ' nat ',nat(itype)
c     enddo
c     do i=1,ntot
c     write(*,*) 'type ',i,type(i),z(i)
c     enddo

c      write(*,*) 'GRAND: final energy: ',ener
c      call ENERGY
c      write(*,*) 'GRAND: last  energy: ',ener
c      write(*,*)

      ENDDO

      RETURN
      END

c------------------------------------------------------------------------------

      SUBROUTINE RANDOMPUT(ngrand,prob)
      include 'grand.fcm'
      include 'consta.fcm'
      include 'grand_io.fcm'
      integer prob(dtype,0:datom)
      real*8  dener, xnew, ynew, znew, rate
      integer ngrand

      do i=nfix+1,ntot

         if(z(i).lt.-LZ/2)then  ! type(i) is always negative 
c            write(*,*) 'before :',z(i),type(i),ibuffer(i)
            itype=abs(type(i))
            z(i)=z(i)+LZ
            do ib = 1, nbuffer
               if(ibfftyp(ib).eq.itype)then
               if((z(i).gt.LZmin(ib)).and.(z(i).le.LZmax(ib))) goto 101
               endif
            enddo
 101        continue
            do igrand=1,ngrand
               call INSERT(ib,xnew,ynew,znew)
               call INTERACT(dener,xnew,ynew,znew,itype,i,.true.)
c               write(*,*) igrand,dener
               rate=exp(-(dener-mu(ib))/kBT)
               if(random(iseed).le.rate)then
                  nat(ib)=nat(ib)+1       ! ibuffer(i)=0 initially
                  x(i) = xnew
                  y(i) = ynew
                  z(i) = znew
                  type(i) = itype
                  ibuffer(i) = ib
c                  write(*,*) 'after :',z(i),type(i),ibuffer(i)
                  goto 103
               endif
            enddo
            write(outu,'(6x,a)') 
     $           'NGRAND is not sufficient to put an atom randomly'
            stop

         elseif(z(i).gt.LZ/2)then ! type(i) is always positive
c            write(*,*) 'before :',z(i),type(i),ibuffer(i)
            itype=abs(type(i))
            z(i)=z(i)-LZ
            do ib = 1, nbuffer
               if(ibfftyp(ib).eq.itype)then
               if((z(i).gt.LZmin(ib)).and.(z(i).le.LZmax(ib))) goto 102
               endif
            enddo
 102        continue
            do igrand=1,ngrand
               call INSERT(ib,xnew,ynew,znew)
               call INTERACT(dener,xnew,ynew,znew,itype,i,.true.)
c               write(*,*) igrand,dener
               rate=exp(-(dener-mu(ib))/kBT)
               if(random(iseed).le.rate)then
c               if(dener.le.kBT) then
                  nat(ib)=nat(ib)+1
                  x(i) = xnew
                  y(i) = ynew
                  z(i) = znew
                  type(i) = -itype
                  ibuffer(i) = ib
c                  write(*,*) 'after :',z(i),type(i),ibuffer(i)
                  goto 103
               endif
            enddo
            write(outu,'(6x,a)') 
     $           'NGRAND is not sufficient to put an atom randomly'
            stop
         endif

 103     continue
      enddo

      do ib=1,nbuffer
         prob(ib,nat(ib)) = prob(ib,nat(ib)) + 1
      enddo

      RETURN
      END

c------------------------------------------------------------------------------

      SUBROUTINE COUNT
C     Count all the particles and assign them to their appropriate buffer

c     nbuffer: the number of buffers in the system
c     ntot: number of particles in the system
c     buffer number ib concerns particles of type ibfftyp(ib)
c     particle i belongs to the buffer number ibuffer(i) 
c     (note that if ibuffer(i) is zero, then particle does not belong to any buffer)

      include 'grand.fcm'
      include 'consta.fcm'
      include 'grand_io.fcm'
      integer ib
c     write(*,*) 'Number of moving atoms in COUNT ',natom

      do ib = 1, nbuffer
         nat(ib) = 0
      enddo
      do i=nfix+1,ntot
c        write(*,*) 'before'
c        write(*,'(2i4,3f10.5,i4)') i,type(i),x(i),y(i),z(i),ibuffer(i)
c To which buffer does a particle of type (i) at this location belongs?
         itype = abs(type(i))
         ibuffer(i) = 0
         do ib = 1, nbuffer
c           write(*,*) 'buffer ',ib,ibfftyp(ib)
            if(itype.eq.ibfftyp(ib))then
c              write(*,*) 'type ',itype
               if((z(i).gt.LZmin(ib)).and.(z(i).le.LZmax(ib)))then
                  if(Qsphere)then
                     radius = sqrt(x(i)**2+y(i)**2+z(i)**2)
                     if(radius.gt.LZ/2)then
                        write(outu,'(6x,a)') 
     $                    '* warning, particles outside main system *'
                     endif
                     if((radius.gt.Rmin(ib)).and.
     $                  (radius.lt.Rmax(ib)))then
c        write(*,*) 'COUNT radius ',radius
                        ibuffer(i) = ib
                        nat(ib) = nat(ib) + 1
                        if(z(i).lt.0.0)then
                           type(i) = -abs(type(i))
                        else
                           type(i) =  abs(type(i))
                        endif
                        goto 1000
                     endif
                  else
                     ibuffer(i) = ib
                     nat(ib) = nat(ib) + 1
                     if(z(i).lt.0.0)then
                        type(i) = -abs(type(i))
c                 write(*,*) '-zzz ',z(i),LZmin(ib),LZmax(ib),type(i)
                     else
                        type(i) =  abs(type(i))
c                 write(*,*) '+zzz ',z(i),LZmin(ib),LZmax(ib),type(i)
                     endif
c                 write(*,*) ib,nat(1),nat(2)
                     goto 1000
                  endif
               endif
            endif
         enddo
 1000    continue
c        write(*,*) 'after '
c        write(*,'(2i4,3f10.5,i4)') i,type(i),x(i),y(i),z(i),ibuffer(i)
      enddo

      do ib = 1, nbuffer
         ntotat(ib)=ntotat(ib)+nat(ib)
      enddo

c     do ib = 1, nbuffer
c     write(*,*) 'number of atoms in buffer ',ib,nat(ib) 
c     enddo
c     write(*,*) 'Total number of atoms in count ',ntot, nfix
c     write(*,*) 'Number of moving atoms in COUNT ',natom

      if(ntot.ge.datom)then
      write(outu,'(6x,a,i5)') '* Number of atoms exceeds limit *',ntot
      stop
      endif

      return
      end

c------------------------------------------------------------------------------

      SUBROUTINE INSERT(ib,xnew,ynew,znew)
C     Create cartesian coordinates for a particle from buffer ib
      include 'consta.fcm'
      include 'grand.fcm'
      integer ib
      real*8 xnew,ynew,znew
      real*8 radius

 1000 xnew = LX*(random(iseed)-0.5)
      ynew = LY*(random(iseed)-0.5)
      znew = LZmin(ib)+(LZmax(ib)-LZmin(ib))*random(iseed)

      if(Qsphere)then
         radius = sqrt(xnew**2+ynew**2+znew**2)
         if(radius.lt.Rmin(ib)) goto 1000
         if(radius.gt.Rmax(ib)) goto 1000
c        write(*,*) 'radius ',radius
      endif

      return
      end

      SUBROUTINE INSERT2(ib,xnew,ynew,znew)
C     Create cartesian coordinates for a particle from buffer ib
      include 'consta.fcm'
      include 'grand.fcm'
      integer ib
      real*8 xnew,ynew,znew
      real*8 dr,radius,phi,costheta,sintheta,radius2

      if(Qsphere)then
         dr=Rmax(ib)-Rmin(ib)
 1000    znew=LZmin(ib)+(LZmax(ib)-LZmin(ib))*random(iseed)
         radius=(dr*random(iseed)+Rmin(ib))
         if(radius.le.abs(znew)) goto 1000
         costheta=znew/radius
         sintheta=sqrt(1.0-costheta*costheta)
         phi     =twopi*random(iseed)
         radius2 =radius*sintheta
         xnew=radius2*cos(phi)
         ynew=radius2*sin(phi)
c         radius2 = sqrt(xnew**2+ynew**2+znew**2)
c         write(*,*) 'radius ',radius,radius2,xnew,ynew,znew
c         write(*,*) 'trigon ',costheta,sintheta,cos(phi),sin(phi)
      endif
c
      return
      end


c------------------------------------------------------------------------------
      SUBROUTINE METROPOLIS(nmove)
C     Perform nmove of metropolis monte carlo with constant number of particle
c
      include 'grand.fcm'
      include 'consta.fcm'
      integer nmove
      real*8 eold, enew
      real*8  xnew, ynew, znew
      real*8 avx, avx2
      avx  = 0.0
      avx2 = 0.0

      naccept = 0

      DO IMOVE=1,NMOVE

c         write(*,*) 'METRO: initial energy: ',ener
c         call ENERGY
c         write(*,*) 'METRO: initial energy: ',ener

c pick one atom and move it 
         call MOVE(iat,xnew, ynew, znew)

c calculate new energy
         call INTERACT(eold,x(iat),y(iat),z(iat),abs(type(iat)),iat,
     $        .false.)
         call INTERACT(enew,xnew,ynew,znew,abs(type(iat)),iat,.false.)

         IF(enew.LT.eold) THEN    
            x(iat) = xnew       !accept the move
            y(iat) = ynew
            z(iat) = znew
            ener=ener+(enew-eold)
            naccept=naccept+1
         ELSE                            
            bltz=EXP(-(enew-eold)/kBT)
            IF(random(iseed).LT.bltz) THEN
               x(iat) = xnew    !accept the move
               y(iat) = ynew
               z(iat) = znew
               ener=ener+(enew-eold)
               naccept=naccept+1
            ENDIF
         ENDIF 

c     avx = avx + x(1)
c     avx2 = avx2 + x(1)**2

c         write(*,*) 'METRO: changed energy: ',ener
c         call ENERGY
c         write(*,*) 'METRO: final energy: ',ener

      ENDDO
c     write(*,*) 'avx  ',avx/nmove
c     write(*,*) 'avx2 ',sqrt(avx2/nmove)

c     do i = 1,ntot
c     write(*,*) i,type(i),x(i)
c     enddo

      RETURN
      END

c-------------------------------------------------------------------------------

      SUBROUTINE FIND(ibuffer,ib,nfix,ntot,ip,iat)
c     Find particle number ip from buffer number ib
c
      integer ibuffer(*),ib,natom,nfix,ip,iat,ntot
      ipx = 0 
c     write(*,*) 'find particle number ',ip,' from buffer ',ib
      do iat=nfix+1,ntot
c        write(*,*) 'ATOM',iat,ibuffer(iat)
         if(ibuffer(iat).eq.ib) then
            ipx = ipx + 1
            if(ip.eq.ipx) RETURN
            if(ip.eq.ipx)then   !RETURN
c              write(*,*) 'found ipx,iat',ipx,iat
               return
            endif
         endif
      enddo
      END

c-------------------------------------------------------------------------------

      FUNCTION POISSON(av,n)
      integer n
      real*8 av,poisson
      poisson = exp(-av)
      do i=1,n
      poisson = poisson*(av/i)
      enddo
      RETURN
      END
      
c-------------------------------------------------------------------------------

      SUBROUTINE MOVE(iat,xnew,ynew,znew)
      include 'grand.fcm'
      include 'consta.fcm'
      integer iat
      real*8 xnew, ynew, znew
      real*8 radius

c     Pick one atom randomly and move it (if it moves outside the limits, pick a different atom)
 1000 iat = nfix + int(natom*random(iseed))+1

      xnew = x(iat)+dmove*(random(iseed)-0.5)
      if((xnew.lt.-LX/2).or.(xnew.gt.LX/2)) goto 1000

      ynew = y(iat)+dmove*(random(iseed)-0.5)
      if((ynew.lt.-LY/2).or.(ynew.gt.LY/2)) goto 1000

      znew = z(iat)+dmove*(random(iseed)-0.5)
      if((znew.lt.-LZ/2).or.(znew.gt.LZ/2)) goto 1000
c      if(znew.lt.LZmin(ibuffer(iat)).or.
c     $   znew.gt.LZmax(ibuffer(iat))) goto 1000

      if(Qsphere)then
         radius = sqrt(xnew**2+ynew**2+znew**2)
         if(radius.gt.(LZ/2))  goto 1000
c        write(*,*) 'radius ',radius
      endif

      RETURN
      END

c-------------------------------------------------------------------------------

      SUBROUTINE INTERACT(dener,xj,yj,zj,jtype,j,Qbuffer)
c calculate the interaction of particle "j" with the rest of the system
      include 'grand.fcm'
      include 'gsbp.fcm'
      include 'consta.fcm'
      real*8 dener, xj, yj, zj
      integer jtype, j
      real*8 fact, dist, dist2, dist6, dist12
      real*8 sigij, epsij
      real*8 DEmemb, sw1, dsw1, sw2, dsw2
      real*8 sw3, dsw3, sw4, dsw4
      real*8 r,rj,ampij
      real*8 kappa, kappa2
      logical Qbuffer

      real*8 cc0,cc1,cc2,cc3,cc4
      integer index
      index(itype,jtype) = MAX(itype,jtype)*(MAX(itype,jtype)-1)/2 + 
     $                     MIN(itype,jtype)


      Dener = 0.0d0

      if(Qenergy)then

         if(Qmemb)then
            Ememb  = 0.0D0

c Nernst transmembrane potential
c            IF(zj.le.-thick2)then
c               Ememb  = 0.0d0
c            elseif((zj.ge.-thick2).and.(zj.le.thick2))then
c               delz = (zj+thick2)
c               Ememb  = cg(jtype)*voltage*delz/(2*thick2)
c            elseif(zj.ge.thick2)then
c               Ememb = cg(jtype)*voltage
c            endif
c         endif

            if(voltage.ne.0.0)then
               epsm=2.0
               kappa2=2530.362733*0.150/300.0 !conc/temp
               kappa=sqrt(kappa2/cdie)
               zmemb1 = -thick2+zmemb
               zmemb2 =  thick2+zmemb
               tmemb  = 2*thick2
               afact = voltage/(2.0+(cdie/epsm)*kappa*tmemb)
 
               if(zj.lt.zmemb1)then
                  Ememb = Ememb + cg(jtype)*afact*exp(kappa*(zj-zmemb1))
               elseif((zj.ge.zmemb1).and.(zj.le.zmemb2))then
                  Ememb = Ememb + 
     $               cg(jtype)*afact*((cdie/epsm)*kappa*(zj-zmemb1)+1.0)
               elseif(zj.gt.zmemb2)then
                  Ememb = Ememb + 
     $               cg(jtype)*(voltage-afact*exp(-kappa*(zj-zmemb2)))
               endif
            endif

c Membrane boundary
            if(AMPL1(jtype).ne.0.0)then
               call switch1(sw1,dsw1,zj,thick2,p1(jtype),zmemb)
               Ememb  = Ememb + AMPL1(jtype)*sw1
            endif

c Cylindrical channel 
            if(AMPL2(jtype).ne.0.0)then
               call switch1(sw1,dsw1,zj,thick2,p1(jtype),zmemb)
               r = sqrt(xj**2+yj**2)
               call switch2(sw2,dsw2, r,rcylinder(jtype), p2(jtype))
               Ememb  = Ememb + AMPL2(jtype)*sw1*sw2
            endif

c Ion-ion interactions in the pore region

            call switch1(sw1,dsw1,zj,thick2,p1(jtype),zmemb)
            ri = sqrt(xj**2+yj**2)
            call switch2(sw2,dsw2,r,rcylinder(jtype), p2(jtype))
c            write(*,'(i,8f8.3)') j,zj,r,sw1,sw2

            do iat=nfix+1,ntot
               if(j.ne.iat)then
                  itype = abs(type(iat))
                  ampij = AMPL3(itype,jtype)
                  call switch1(sw3,dsw3,z(iat),thick2,p1(itype),zmemb)
                  rj = sqrt(x(iat)**2+y(iat)**2)
                  call switch2(sw4,dsw4,rj,rcylinder(itype), p2(itype))
c                  write(*,'(i,8f8.3)') iat,z(iat),rj,sw3,sw4
c                  write(*,*) 'i j ',j,iat,'Ememb =',sw1*sw2*sw3*sw4
                  Ememb = Ememb + ampij*sw1*sw2*sw3*sw4
c                  write(*,*) 'EMEMB',Ememb
               endif
            enddo      

            Dener = Ememb
         endif                  !Qmemb

c reaction field contribution
         if(Qmmij) then
            if(shape.EQ.'RECTBOX ') then
               if(j.eq.ntot+1) then             ! in case of insert-try
                  call RECT_RF0(ntot+1,nfix,j,x,y,z,xj,yj,zj,cg,type,
     $                 jtype,ntpol,xnpol,ynpol,znpol,
     $                 xscal,yscal,zscal,rfscal,mmij,coef,
     $                 lstpx,lstpy,lstpz,bnorm,egsbpb)
c                  write(6,*) 'ntot+1',egsbpb
               else
                  call RECT_RF0(ntot,nfix,j,x,y,z,xj,yj,zj,cg,type,
     $                 jtype,ntpol,xnpol,ynpol,znpol,
     $                 xscal,yscal,zscal,rfscal,mmij,coef,
     $                 lstpx,lstpy,lstpz,bnorm,egsbpb)
c                  write(6,*) 'ntot',egsbpb
               endif
            elseif(shape.eq.'SPHERE  ') then
               if(j.eq.ntot+1) then             ! in case of insert-try
                  call SPHE_RF0(ntot+1,nfix,j,x,y,z,xj,yj,zj,cg,type,
     $                 jtype,ntpol,srdist,mmij,coef,
     $                 lstpl,lstpm,bnorm,egsbpb)
c                  write(6,*) 'ntot+1',egsbpb
               else
                  call SPHE_RF0(ntot,nfix,j,x,y,z,xj,yj,zj,cg,type,
     $                 jtype,ntpol,srdist,mmij,coef,
     $                 lstpl,lstpm,bnorm,egsbpb)
c                  write(6,*) 'ntot',egsbpb
               endif
            endif
            dener = dener + egsbpb
         endif

c static external field contribution
         if(Qphix) then
            call staticf0(xj,yj,zj,cg,jtype,nclx1,ncly1,nclz1,dcel1,
     $           phix,tranx1,trany1,tranz1,xbcen1,ybcen1,zbcen1,egsbpa)
            dener = dener + egsbpa
         endif

c grid-based repulsive potential
         if(Qphiv) then
            if(Qtrln) then
               call vdwgd0trln(xj,yj,zj,jtype,svdw,
     $              nclx2,ncly2,nclz2,dcel2,
     $              phiv,tranx2,trany2,tranz2,xbcen2,ybcen2,zbcen2,
     $              vzmin,vzmax,evdwgd,Qbuffer,Qnmcden)
            else
               call vdwgd0spln(xj,yj,zj,jtype,svdw,
     $              nclx2,ncly2,nclz2,dcel2,
     $              phiv,tranx2,trany2,tranz2,xbcen2,ybcen2,zbcen2,
     $              vzmin,vzmax,evdwgd,Qbuffer,Qnmcden)
            endif
            dener = dener + evdwgd
         endif


c nonbonded interaction
         if(Qnonbond)then
            fact = celec*cg(jtype)/cdie

            DO 10 i=1,ntot

               IF(i.eq.j) GOTO 10
               itype = abs(type(i))
               epsij = sqrt(eps(itype)*eps(jtype))
               IF(epsij.eq.0.0) GOTO 10
               sigij = 0.5*(sigma(itype)+sigma(jtype))
               IF(sigij.eq.0.0) GOTO 10

               dist2 = (x(i)-xj)**2+(y(i)-yj)**2+(z(i)-zj)**2

               if(sigij.gt.0.0)then
                  if(fact.ne.0.0)then
                     dist  = sqrt(dist2)
                     dener = dener + fact*cg(itype)/dist
                  endif
                  dist6 = (sigij**2/dist2)**3
                  dist12= dist6**2
                  dener  = dener + 4*epsij*(dist12-dist6)
               else 
                  if(dist2.lt.sigij**2)then
                     dener=dener+eps(itype)*eps(jtype)
                  else
                     if(fact.ne.0.0)then
                        dist  = sqrt(dist2)
                        dener = dener + fact*cg(itype)/dist
                     endif
                  endif
               endif

               if(Qsrpmf.and.dist.le.8.0d0) then
                  cc0=c0(index(itype,jtype))
                  cc1=c1(index(itype,jtype))
                  cc2=c2(index(itype,jtype))
                  cc3=c3(index(itype,jtype))
                  cc4=c4(index(itype,jtype))
                  esrpmf=cc0*exp((cc1-dist)/cc2)*cos(cc3*pi*(cc1-dist))+
     $                   cc4*(cc1/dist)**6
                  dener=dener+esrpmf
               endif

c               write(*,'(2i3,8f8.2)') i,j,sqrt(dist2),sigij,epsij,dener
 10         CONTINUE  

         endif                  !Qnonbond
      endif                     !Qenergy

Cim..      write(*,'(a,5f10.5)') 'INTERACT',zj,
Cim..     $     egsbpa,egsbpb,evdwgd,dener-egsbpa-egsbpb-evdwgd


      RETURN
      END

      SUBROUTINE ENERGY
      include 'grand.fcm'
      include 'gsbp.fcm'
      include 'consta.fcm'
      real*8 fact, dist, dist2, dist6, dist12
      real*8 sigij, epsij, de

      real*8  cc0,cc1,cc2,cc3,cc4,esrpmf0,esrpmf1,esrpmf2,esrpmf3
      integer index
      index(itype,jtype) = MAX(itype,jtype)*(MAX(itype,jtype)-1)/2 + 
     $                     MIN(itype,jtype)


      ener  = 0.0d0
      eelec = 0.0d0
      evdw  = 0.0d0
      esrpmf= 0.0d0
      Ememb = 0.0d0

      egsbpa= 0.0d0
      egsbpb= 0.0d0
      evdwgd= 0.0d0

      if(Qenergy) then
         
         if(Qforces)then
            do i=1,ntot
               fx(i)=0.0d0
               fy(i)=0.0d0
               fz(i)=0.0d0
            enddo
         endif


c membrane contribution
         if(Qmemb) call membrane
         ener = Ememb


c reaction field contribution
         if(Qmmij) then
            if(shape.EQ.'RECTBOX ') then
               call rect_rf1(ntot,nfix,x,y,z,cg,type,ntpol,
     $              xnpol,ynpol,znpol,
     $              xscal,yscal,zscal,rfscal,mmij,coef,fx,fy,fz,
     $              lstpx,lstpy,lstpz,bnorm,egsbpb)
c               write(6,*) 'rf1',egsbpb
            elseif(shape.eq.'SPHERE  ') then
               call sphe_rf1(ntot,nfix,x,y,z,cg,type,ntpol,
     $              srdist,mmij,coef,fx,fy,fz,
     $              lstpl,lstpm,bnorm,egsbpb)
c               write(6,*) 'rf1',egsbpb
            endif
            ener = ener + egsbpb
         endif


c static external field contribution
         if(Qphix) then
            call staticf1(ntot,nfix,x,y,z,cg,type,nclx1,ncly1,nclz1,
     $           dcel1,phix,tranx1,trany1,tranz1,xbcen1,ybcen1,zbcen1,
     $           fx,fy,fz,egsbpa)
            ener = ener + egsbpa
         endif


c grid-based repulsive potential
         if(Qphiv) then
            if(Qtrln)then
               call vdwgd1trln(ntot,nfix,x,y,z,type,svdw,
     $              nclx2,ncly2,nclz2,dcel2,phiv,
     $              tranx2,trany2,tranz2,xbcen2,ybcen2,zbcen2,
     $              vzmin,vzmax,fx,fy,fz,evdwgd,Qnmcden)
            else
               call vdwgd1spln(ntot,nfix,x,y,z,type,svdw,
     $              nclx2,ncly2,nclz2,dcel2,phiv,
     $              tranx2,trany2,tranz2,xbcen2,ybcen2,zbcen2,
     $              vzmin,vzmax,fx,fy,fz,evdwgd,Qnmcden)
            endif
            ener = ener + evdwgd
         endif

c nonbonded interaction
         if(Qnonbond)then
            DO 10 j=nfix+1,ntot
               jtype = abs(type(j))
               fact = celec*cg(jtype)/cdie
               DO 10 i=1,j-1
                  itype = abs(type(i))
                  epsij = sqrt(eps(itype)*eps(jtype))
                  IF(epsij.eq.0.0) GOTO 10
                  sigij = 0.5*(sigma(itype)+sigma(jtype))
                  IF(sigij.eq.0.0) GOTO 10
                  dist2 = (x(i)-x(j))**2+(y(i)-y(j))**2+(z(i)-z(j))**2

                  if(sigij.gt.0.0)then
                     if(fact.ne.0.0)then
                        dist  = sqrt(dist2)
                        eelec = eelec + fact*cg(itype)/dist
                     endif
                     dist6 = (sigij*sigij/dist2)**3
                     dist12= dist6*dist6
                     evdw  = evdw + 4*epsij*(dist12-dist6)
                  else 
                     if(dist2.lt.sigij**2)then
                        evdw=evdw+eps(itype)*eps(jtype)
                     else
                        if(fact.ne.0.0)then
                           dist  = sqrt(dist2)
                           eelec = eelec + fact*cg(itype)/dist
                        endif
                     endif
                  endif

                  if(Qforces)then
c              write(*,*) fact,cg(itype),dist,dist2
                     if(fact.ne.0.0)then
                        de = (fact*cg(itype)/dist)/dist2
                        de = de + 4*epsij*(12*dist12-6*dist6)/dist2
                     else
                        de = 4*epsij*(12*dist12-6*dist6)/dist2
                     endif
                     fx(i) = fx(i) + de*(x(i)-x(j))
                     fy(i) = fy(i) + de*(y(i)-y(j))
                     fz(i) = fz(i) + de*(z(i)-z(j))
                     fx(j) = fx(j) - de*(x(i)-x(j))
                     fy(j) = fy(j) - de*(y(i)-y(j))
                     fz(j) = fz(j) - de*(z(i)-z(j))
                  endif

                  if(fact.eq.0.0.or.cg(itype).eq.0.0) GOTO 10
                  if(Qsrpmf.and.dist.le.8.0d0) then
                     cc0=c0(index(itype,jtype))
                     cc1=c1(index(itype,jtype))
                     cc2=c2(index(itype,jtype))
                     cc3=c3(index(itype,jtype))
                     cc4=c4(index(itype,jtype))
                     esrpmf1=exp((cc1-dist)/cc2)
                     esrpmf2=cos(cc3*pi*(cc1-dist))
                     esrpmf3=(cc1/dist)**6

                     esrpmf0=cc0*esrpmf1*esrpmf2+cc4*esrpmf3 
                     esrpmf=esrpmf+esrpmf0

                     de=-cc0/cc2*esrpmf1*esrpmf2
     $                  +cc0*cc3*pi*esrpmf1*sin(cc3*pi*(cc1-dist))
     $                  -6.d0*cc4*esrpmf3/dist 
                     de=-de/dist
                     fx(i) = fx(i) + de*(x(i)-x(j))
                     fy(i) = fy(i) + de*(y(i)-y(j))
                     fz(i) = fz(i) + de*(z(i)-z(j))
                     fx(j) = fx(j) - de*(x(i)-x(j))
                     fy(j) = fy(j) - de*(y(i)-y(j))
                     fz(j) = fz(j) - de*(z(i)-z(j))
                  endif         ! PMF

c      write(*,*) i,j,itype,jtype
c      write(*,*) 'sig',sigma(itype),sigma(jtype),sigij
c      write(*,*) 'eps',eps(itype),eps(jtype),epsij
c      write(*,*) 'dist,    de ',sqrt(dist2),de
c      write(*,*)  (12*dist12-6*dist6)/dist2
c      write(*,*)  dist12,dist6,dist2
c      write(*,*)  ((sigij**2/dist2)**3)**2
c      write(*,*)  (sigij**2/dist2)**3
 10         CONTINUE
         endif                  !Qnonbond
         ener = ener + eelec
         ener = ener + evdw
         ener = ener + esrpmf
      endif                     !Qenergy

c     if(Qforces)then
c     do i=1,ntot
c     write(*,'(i3,3f8.3)') i,fx(i),fy(i),fz(i)
c     enddo
c     endif

cim..      write(*,'(a,4f12.5)') 'ENERGY ',
cim..     $     egsbpa,egsbpb,evdwgd,ener-egsbpa-egsbpb-evdwgd

      RETURN
      END

      SUBROUTINE TESTFIRST
      include 'grand.fcm'
      include 'consta.fcm'
      include 'grand_io.fcm'
      real*8 fx2(datom), fy2(datom), fz2(datom)
      real*8 x1,y1,z1
      real*8 delta , tol

      delta = 0.0005d0
      tol = 0.001d0

      Qforces = .false.

      do 10 i=1,ntot
      x1=x(i)
      x(i)=x1-delta
      call energy
      fx2(i)=ener
      x(i)=x1+delta
      call energy
      fx2(i)=-(ener-fx2(i))/(2*delta)
      x(i)=x1


      y1=y(i)
      y(i)=y1-delta
      call energy
      fy2(i)=ener
      y(i)=y1+delta
      call energy
      fy2(i)=-(ener-fy2(i))/(2*delta)
      y(i)=y1

      z1=z(i)
      z(i)=z1-delta
      call energy
      fz2(i)=ener
      z(i)=z1+delta
      call energy
      fz2(i)=-(ener-fz2(i))/(2*delta)
      z(i)=z1

   10 continue

      Qforces = .true.
      call energy

      do 20 i=1,ntot
c         write(*,'(i3,3(2f8.3,2x))')
c     $        i,fx(i),fx2(i),fy(i),fy2(i),fz(i),fz2(i)

      if(abs(fx(i)-fx2(i)).gt.tol)then
         write(outu,*) '**bad x-force**    atom',i
         write(outu,*) fx(i),fx2(i)
      endif

      if(abs(fy(i)-fy2(i)).gt.tol)then
         write(outu,*) '**bad y-force**    atom',i
         write(outu,*) fy(i),fy2(i)
      endif

      if(abs(fz(i)-fz2(i)).gt.tol)then
         write(outu,*) '**bad z-force**    atom',i
         write(outu,*) fz(i),fz2(i)
      endif

   20 continue

      Qforces = .false.
      write(outu,'(6x,a)') 
     ,      'Forces test: first derivatives ok within tolerance'
      write(outu,*)

      return
      end
c-------------------------------------------------------------------------------

      FUNCTION RANDOM(ISEED)
      REAL*8 RANDOM
C     RANDOM NUMBER GENERATOR: UNIFORM DISTRIBUTION (0,1)
C     ISEED: SEED FOR GENERATOR. ON THE FIRST CALL THIS HAS TO
C     HAVE A VALUE IN THE EXCLUSIVE RANGE (1, 2147483647)
C     AND WILL BE REPLACED BY A NEW VALUE TO BE USED IN
C     FOLLOWING CALL.
C
C     REF: Lewis, P.A.W., Goodman, A.S. & Miller, J.M. (1969)
C     "Pseudo-random number generator for the System/360", IBM
C     Systems Journal 8, 136.
C
C     This is a "high-quality" machine independent generator.
C     INTEGERS are supposed to be 32 bits or more.
C     The same algorithm is used as the basic IMSL generator.
C
C     Author: Lennart Nilsson
C
      INTEGER ISEED
      REAL*8 DSEED,DIVIS,DENOM,MULTIP
      DATA  DIVIS/2147483647.D0/
      DATA  DENOM /2147483711.D0/
      DATA  MULTIP/16807.D0/
C
      IF(ISEED.LE.1) ISEED=314159
      DSEED=MULTIP*ISEED
      DSEED=MOD(DSEED,DIVIS)
      RANDOM=DSEED/DENOM
      ISEED=DSEED
C
      RETURN
      END

      SUBROUTINE DYNAMICS0(nstep)
      include 'grand.fcm'
      include 'consta.fcm'
      include 'grand_io.fcm'
      integer nstep, itype
      real*8 fact1,fact2
      real*8 rgauss
      external rgauss
      real*8 xyzmax
      real*8 delx,dely,delz
      real*8 zold

      xyzmax = 1.00d0
      Qforces = .true.
c     write(*,*) 'DYNAMICS'
      do istep=1,nstep
         call ENERGY
c        do i=1,ntot
c        write(*,'(i3,5f8.3)') i,fx(i),fy(i),fz(i)
c        enddo

c        write(*,'(a,i3)') 'step:  ',istep
         do i=nfix+1,ntot
            itype=abs(type(i))
            fact1 = diffusion(itype)*dt/kBT
            delx = fx(i)*fact1
            dely = fy(i)*fact1
            delz = fz(i)*fact1
            fact2 = sqrt(2*diffusion(itype)*dt)

c           write(*,*) 'diff ',type(i),diffusion(itype),dt,kbt
c           write(*,*) 'fact ',fact1,fact2
c           write(*,'(a,i3,3f8.3)') 'forces',i,fx(i),fy(i),fz(i)
c           write(*,'(a,i3,3f8.3)') 'del forces',i,delx,dely,delz
c           write(*,'(a,i3,3f8.3)') ' rgauss',i,rgauss(iseed)

            if(abs(delx).gt.xyzmax)then
               write(outu,'(a,i5,3f12.3)') 'warning X',i,delx
               delx = sign(1.0d0,delx)*xyzmax
               write(*,'(a,i5,3f12.3)') 'delmax  X',i,delx
            endif
            if(abs(dely).gt.xyzmax)then
               write(outu,'(a,i5,3f12.3)') 'warning Y',i,dely
               dely = sign(1.0d0,dely)*xyzmax
               write(outu,'(a,i5,3f12.3)') 'delmax  Y',i,dely
            endif
            if(abs(delz).gt.xyzmax)then
               write(outu,'(a,i5,3f12.3)') 'warning Z',i,delz
               delz = sign(1.0d0,delz)*xyzmax
               write(outu,'(a,i5,3f12.3)') 'delmax  Z',i,delz
            endif

            x(i) = x(i) + delx + fact2*rgauss(iseed)
            y(i) = y(i) + dely + fact2*rgauss(iseed)
            zold = z(i)
            z(i) = z(i) + delz + fact2*rgauss(iseed)

c Keep track of the net flux of particle
            if((zold.lt.zcont).and.(z(i).gt.zcont))then
c              write(10,*) i,zold,z(i)
               nforward(type(i)) = nforward(type(i))+1
c              write(*,*) 'nforward ',itype,nforward(itype)
            elseif((zold.gt.zcont).and.(z(i).lt.zcont))then
c              write(11,*) i,zold,z(i)
               nbackward(type(i)) = nbackward(type(i))+1
c              write(*,*) 'nbackward ',itype,nbackward(itype)
            endif

            call FIXCOOR(x(i),y(i),z(i))

         enddo
      enddo
      Qforces = .false.
c     write(*,*) 'forward, backward ',nforward(1),nbackward(1)

      RETURN
      END


      SUBROUTINE DYNAMICS1(nstep)
      include 'grand.fcm'
      include 'consta.fcm'
      include 'grand_io.fcm'
      integer nstep, itype
      real*8 fact1,fact2
      real*8 rgauss
      external rgauss
      real*8 xyzmax
      real*8 delx,dely,delz,delDz
      real*8 zold
      real*8 sw,dsw,idiffusion,didiffusion
      real*8 zz,pp3,pore1,pore2

      xyzmax = 1.00d0
      Qforces = .true.
c      write(*,*) 'DYNAMICS'

      do istep=1,nstep
         call ENERGY
c        do i=1,ntot
c        write(*,'(i3,5f8.3)') i,fx(i),fy(i),fz(i)
c        enddo

c        write(*,'(a,i3)') 'step:  ',istep
         do i=nfix+1,ntot
            itype=abs(type(i))
c space-dependent diffusion constant
            zz=z(i)
            pp3=p3(itype)
            pore1=-plength2+pcenter
            pore2= plength2+pcenter
            if(zz.gt.pore1-pp3.and.zz.lt.pore2+pp3)then
               IF(zz.gt.pore1.and.zz.lt.pore2)then
                  sw  = 0.0d0
                  dsw = 0.0d0
               else
                  if(zz.gt.pcenter)then
                     delz = (zz-pore2)
                     sw = 2*(delz/pp3)**3-3*(delz/pp3)**2
                     dsw = (6*(delz/pp3)**2-6*(delz/pp3))/pp3
                  elseif(zz.lt.pcenter)then
                     delz = (zz-pore1)
                     sw = -2*(delz/pp3)**3-3*(delz/pp3)**2
                     dsw = (-6*(delz/pp3)**2-6*(delz/pp3))/pp3
                  endif
                  sw=-sw
                  dsw=-dsw
               endif
            else
               sw = 1.0d0
               dsw = 0.0d0
            endif
            idiffusion=diffusion(itype)*
     $                 (ampl4(itype)+(1.0d0-ampl4(itype))*sw)
            didiffusion=diffusion(itype)*(1.0d0-ampl4(itype))*dsw

            fact1 = idiffusion*dt/kBT
            delx  = fx(i)*fact1
            dely  = fy(i)*fact1
            delz  = fz(i)*fact1
            fact2 = sqrt(2*idiffusion*dt)
            delDz = didiffusion*dt

c            if(sw.lt.1.0.and.sw.gt.0.0) 
c     $           write(*,*) i,type(i),z(i),diffusion(itype),idiffusion
c           write(*,*) 'diff ',i,type(i),z(i),diffusion(itype),idiffusion !,dt,kbt
c           write(*,*) 'fact ',fact1,fact2
c           write(*,'(a,i3,3f8.3)') 'forces',i,fx(i),fy(i),fz(i)
c           write(*,'(a,i3,3f8.3)') 'del forces',i,delx,dely,delz
c           write(*,'(a,i3,3f8.3)') ' rgauss',i,rgauss(iseed)

            if(abs(delx).gt.xyzmax)then
               write(outu,'(a,i5,3f12.3)') 'warning X',i,delx
               delx = sign(1.0d0,delx)*xyzmax
               write(*,'(a,i5,3f12.3)') 'delmax  X',i,delx
            endif
            if(abs(dely).gt.xyzmax)then
               write(outu,'(a,i5,3f12.3)') 'warning Y',i,dely
               dely = sign(1.0d0,dely)*xyzmax
               write(outu,'(a,i5,3f12.3)') 'delmax  Y',i,dely
            endif
            if(abs(delz).gt.xyzmax)then
               write(outu,'(a,i5,3f12.3)') 'warning Z',i,delz
               delz = sign(1.0d0,delz)*xyzmax
               write(outu,'(a,i5,3f12.3)') 'delmax  Z',i,delz
            endif

            x(i) = x(i) + delx + fact2*rgauss(iseed)
            y(i) = y(i) + dely + fact2*rgauss(iseed)
            zold = z(i)
            z(i) = z(i) + delz + fact2*rgauss(iseed) + delDz

c Keep track of the net flux of particle
            if((zold.lt.zcont).and.(z(i).gt.zcont))then
c              write(10,*) i,zold,z(i)
               nforward(type(i)) = nforward(type(i))+1
c              write(*,*) 'nforward ',itype,nforward(itype)
            elseif((zold.gt.zcont).and.(z(i).lt.zcont))then
c              write(11,*) i,zold,z(i)
               nbackward(type(i)) = nbackward(type(i))+1
c              write(*,*) 'nbackward ',itype,nbackward(itype)
            endif

            call FIXCOOR(x(i),y(i),z(i))

         enddo
      enddo
      Qforces = .false.
c     write(*,*) 'forward, backward ',nforward(1),nbackward(1)

      RETURN
      END

      SUBROUTINE DYNAMICS2(nstep)
      include 'grand.fcm'
      include 'consta.fcm'
      include 'grand_io.fcm'
      integer nstep, itype
      real*8 fact1,fact2
      real*8 rgauss
      external rgauss
      real*8 xyzmax
      real*8 delx,dely,delz,delDz
      real*8 zold,is1,u,u1,u2
      real*8 sw,dsw,idiffusion,didiffusion
      real*8 zz

      xyzmax = 1.00d0
      Qforces = .true.
      do istep=1,nstep
         call ENERGY
c        do i=1,ntot
c        write(*,'(i3,5f8.3)') i,fx(i),fy(i),fz(i)
c        enddo

c        write(*,'(a,i3)') 'step:  ',istep
         do i=nfix+1,ntot
            itype=abs(type(i))
c space-dependent diffusion constant
            zz=z(i)
            sw  = seval (nspline,zz,xs,ys,b,c,d)
            dsw = seval1(nspline,zz,xs,ys,b,c,d)
            idiffusion=diffusion(itype)*sw
            didiffusion=diffusion(itype)*dsw
            fact1 = idiffusion*dt/kBT
            delx  = fx(i)*fact1
            dely  = fy(i)*fact1
            delz  = fz(i)*fact1
            fact2 = sqrt(2*idiffusion*dt)
            delDz = didiffusion*dt
            if(abs(delx).gt.xyzmax)then
               write(outu,'(a,i5,3f12.3)') 'warning X',i,delx
               delx = sign(1.0d0,delx)*xyzmax
               write(*,'(a,i5,3f12.3)') 'delmax  X',i,delx
            endif
            if(abs(dely).gt.xyzmax)then
               write(outu,'(a,i5,3f12.3)') 'warning Y',i,dely
               dely = sign(1.0d0,dely)*xyzmax
               write(outu,'(a,i5,3f12.3)') 'delmax  Y',i,dely
            endif
            if(abs(delz).gt.xyzmax)then
               write(outu,'(a,i5,3f12.3)') 'warning Z',i,delz
               delz = sign(1.0d0,delz)*xyzmax
               write(outu,'(a,i5,3f12.3)') 'delmax  Z',i,delz
            endif

            x(i) = x(i) + delx + fact2*rgauss(iseed)
            y(i) = y(i) + dely + fact2*rgauss(iseed)
            zold = z(i)
            z(i) = z(i) + delz + fact2*rgauss(iseed) + delDz

c Keep track of the net flux of particle
            if((zold.lt.zcont).and.(z(i).gt.zcont))then
c              write(10,*) i,zold,z(i)
               nforward(type(i)) = nforward(type(i))+1
c              write(*,*) 'nforward ',itype,nforward(itype)
            elseif((zold.gt.zcont).and.(z(i).lt.zcont))then
c              write(11,*) i,zold,z(i)
               nbackward(type(i)) = nbackward(type(i))+1
c              write(*,*) 'nbackward ',itype,nbackward(itype)
            endif

            call FIXCOOR(x(i),y(i),z(i))

         enddo
      enddo
      Qforces = .false.
c     write(*,*) 'forward, backward ',nforward(1),nbackward(1)

      RETURN
      END



      FUNCTION RGAUSS(ISEED)
c     random gaussian numbers
      real*8     twopi
      parameter (twopi=2*3.141592658979D0)
      real*8 rgauss, random
      integer iseed
      external random
      rgauss = cos(random(iseed)*twopi)*SQRT(-2*LOG(random(iseed)))
      return
      end

c-------------------------------------------------------------------------------

      SUBROUTINE SIMUL1(ncycle, ngrand, nmove, nstep, nsave)
      include  'grand.fcm'
      include  'grand_io.fcm'
      include  'consta.fcm'
      include  'gsbp.fcm'
      integer   ncycle, ngrand, nmove, nstep, nsave
      integer   icycle, nframe
      real*8    naver, poisson, dener, avener
      integer   ncount(dtype)
      integer   prob(dtype,0:datom)      ! datom=500
      integer   prob2(dtype,0:500)
      integer   prob3(dtype,0:datom)     ! datom=500
      integer   prob4(-500:500)
      integer   irmax
      real*8    gr(dtype,10000),rho(dtype,10000),sgr(dtype)
      real*8    sw1,dsw1
      real*8    r 
      real*8    sw2,dsw2

      integer   ncrossing,ncrossup,ncrossdown

c ion pairing S frequency
      integer   nion1(dtype,10000),sp1p2(dtype,100,100)
      integer   npair1(dtype,10000),npair2(dtype,10000)
      integer   npair3(dtype,10000),npair4(dtype,10000)
      real*8    s1,s2

c energy profiles
      integer  nion2(dtype,10000)
      real*8   etmp,etot(dtype,10000),eion(dtype,10000)
      real*8   erf(dtype,10000),
     > esf(dtype,10000),egvdw(dtype,10000)
      real*8   e2tot(dtype,10000),e2ion(dtype,10000)
      real*8   e2rf(dtype,10000),e2sf(dtype,10000),
     >e2gvdw(dtype,10000)



c OUTPUT
      write(outu,*)

      if(.not.Qenergy)then
         write(outu,'(6x,a)') 'Energy and forces will be skipped'
         Qforces = .false.
      endif

      if(Qzperiodic) then
         write(outu,'(6x,a)')
     $     'Periodic boundary condition along Z-axis: No GCMC'
         write(outu,*)
      endif

      write(outu,131) 'NCYCLE = ',ncycle,'NGRAND = ',ngrand
      write(outu,131) 'NMOVE  = ',nmove ,'NSTEP  = ',nstep
      write(outu,131) 'NPRINT = ',nprint,'NSAVE  = ',nsave
      write(outu,131) 'SEED   = ',iseed ,'NANAL  = ',nanal
 131  format(6x,2(a,i12,5x))

      write(outu,*)
      write(outu,132) 'TEMPERATURE         = ',temp
      write(outu,132) 'DIELECTRIC CONSTANT = ',cdie
 132  format(6x,a,f10.3)

      if(ncycle*nstep.ne.0)then
         write(outu,133) 'TIME STEP   = ',dt*psec,'[s]'
         write(outu,133) 'Brownian dynamics simulation of ',
     $        ncycle*nstep*dt*psec,' [s]'
 133     format(6x,a,e8.3,a)
      else
            Qforces = .false.
      endif

      if(ncycle.eq.0) return

c INITIALIZE some statistical variables

c i. number probability in the system and buffer
      do iat = 0,datom
         do ib= 1,nbuffer
            prob(ib,iat)  = 0   ! for buffer
         enddo
      enddo

      do iat = 0,datom
         do itype= 1,ntype
            prob3(itype,iat)  = 0   ! for system
         enddo
      enddo

c ii. number probability in the channel
      do n = 0,50
         do itype= 1,ntype
            prob2(itype,n)  = 0
         enddo
      enddo

      do n = -50,50
         prob4(n)  = 0
      enddo

c iii. number of ion crossing
      do i=-ntype,ntype 
         nforward(i)  = 0
         nbackward(i) = 0 
      enddo

c iv. g(r) and number density rho(z)
      irmax=0
      dr  =0.10                 ! for g(r)
      delz=0.50                 ! for rho(z)
      zmin = -0.5*LZ
      zmax = +0.5*LZ
      nzmax = int((zmax-zmin)/delz)
      do i= 1,ntype
         sgr(i)    = 0.0
         do iz = 1,10000
            rho(i,iz) = 0.0
            gr(i,iz)  = 0.0
         enddo
      enddo
      avener = 0.0d0

c v. trajectory
      if(iuntrj.gt.0)then
         if(mod(ncycle,nsave).ne.0) then
            write(outu,'(a)') 'nsave is not correct.'
            stop
         endif
         nframe=ncycle/nsave
         runtime = 0.0
         call wrttraj(nframe)
      endif

c vi. ion pairing S frequency
      s1=4.0
      s2=6.45
      do i=1,ntype
         do iz = 1, 1000
            nion1(i,iz) = 0
            npair1(i,iz) = 0
            npair2(i,iz) = 0
            npair3(i,iz) = 0
            npair4(i,iz) = 0
         enddo
         do ii=1,10
            do jj=1,10
               sp1p2(i,ii,jj)=0
            enddo
         enddo
      enddo

c vii. energy profiles
      do i=1,ntype
         do iz = 1, 1000
            nion2(i,iz) = 0
            etot(i,iz) = 0.0
            eion(i,iz) = 0.0
            erf(i,iz)  = 0.0
            esf(i,iz)  = 0.0
            egvdw(i,iz) = 0.0
            e2tot(i,iz) = 0.0
            e2ion(i,iz) = 0.0
            e2rf(i,iz)  = 0.0
            e2sf(i,iz)  = 0.0
            e2gvdw(i,iz) = 0.0
         enddo
      enddo

c OUTPUT 
      if(Qenergy)then
         write(outu,*)
         call ENERGY
         write(outu,'(2a)')
     $        '          CYCLE   Total-PMF   Nonbonded       ',
     $        'PHIsf       PHIrf      PHIvdW'
         if(ncycle*nstep.ne.0)then
            write(outu,'(2a)')
     $           'IONS  :               # ION  # Crossing ',
     $           'Int.-> Ext. Ext.-> Int.     Current'
         endif
         write(outu,'(2a)')
     $        '----------------------------------------------',
     $        '-----------------------------'
         icycle=0
         write(outu,134) 'PMF >',icycle,ener,
     $        eelec+evdw+esrpmf,egsbpa,egsbpb,evdwgd
 134     format(a5,i10,5f12.4)
         if(ncycle*nstep.ne.0)then
            ncrossup  = 0
            ncrossdown= 0
            ncrossing = 0
            flux      = 0.0D0
            do iat=1,ntype
               ncount(iat)=0
            enddo
            do iat=1,ntot
               itype=abs(type(iat))
               ncount(itype)=ncount(itype)+1
            enddo
            do itype=1,ntype
             write(outu,135) atnam(itype),'>',ncount(itype),ncrossing,
     $       ncrossup,ncrossdown,cg(itype)*(flux*coulomb/psec)/pico
            enddo
 135        format(a4,a1,10x,4i12,f12.4)
         write(outu,'(2a)')
     $        '----------------------------------------------',
     $        '-----------------------------'
         endif
      endif

c     do i=1,ntot
c     write(*,'(i3,3f8.3)') i,fx(i),fy(i),fz(i)
c     enddo
      do i=1,ntot
         fx(i)=0.0d0
         fy(i)=0.0d0
         fz(i)=0.0d0
      enddo


c..........................................................................
c     Main loop
c..........................................................................

      do ib=1,nbuffer
         ntotat(ib) = avnum(ib)
      enddo

      DO 10 icycle=1,ncycle
c        write(*,*) 'icycle ',icycle

         if(Qzperiodic) THEN
            call RANDOMPUT(ngrand,prob)
         ELSE
            call GRAND(ngrand,prob,icycle)
         ENDIF

         call METROPOLIS(nmove)

         if(Qdiffuse) then
         if (Qprofile) stop 'Error in Diffusion constant definiton'
         call DYNAMICS1(nstep)     ! using non-uniform diffusion constant
         endif
         if (Qprofile) then
         call DYNAMICS2(nstep)
         endif
         if ((.NOT. Qdiffuse) .and. (.NOT. Qprofile)) then
         call DYNAMICS0(nstep)
         endif

c write a trajectory if required
         if((iuntrj.gt.0).and.(mod(icycle,nsave).eq.0))then
            runtime = icycle*nstep*dt*psec/1.0E-9
            call wrttraj(nframe)
         endif

         call COUNT

c         write(*,*) icycle,(ntotat(ib)*1.0/icycle,ib=1,nbuffer)

         if(Qrho)then
            do iat=nfix+1,ntot
               itype=abs(type(iat))
               iz=int((z(iat)-zmin)/delz)+1
               if(iz.lt.10000)then
                  rho(itype,iz) = rho(itype,iz)+1.0
               endif
            enddo
         endif

         if(Qgr)then
            do iat=nfix+1,ntot
               itype=abs(type(iat))
               dist = (x(iat)-xgr)**2+(y(iat)-ygr)**2+(z(iat)-zgr)**2
               dist = sqrt(dist)
               ir=int(dist/dr)+1
               if(ir.gt.irmax) irmax=ir
               if(ir.lt.1000)then
                  gr(itype,ir) = gr(itype,ir)+1.0
               endif
            enddo
         endif


         if(Qprob)then

c channel
            do itype = 1,ntype
               ncount(itype) = 0 
            enddo
            do iat=nfix+1,ntot
               itype=abs(type(iat))
               if(czmin.eq.0.0.and.czmax.eq.0.0) then
                  call switch1(sw1,dsw1,z(iat),thick2,0.0d0,zmemb)
                  r = sqrt(x(iat)**2+y(iat)**2)
                  call switch2(sw2,dsw2, r,rcylinder(itype), 0.0d0 )
                  if(sw1*sw2.ne.0.0)then
                     ncount(itype) = ncount(itype) + 1
                  endif
               else
                  if(z(iat).le.czmax.and.z(iat).gt.czmin) then
                     ncount(itype) = ncount(itype) + 1
                  endif
               endif
            enddo

            do itype = 1,ntype
            prob2(itype,ncount(itype)) = prob2(itype,ncount(itype)) + 1
            enddo

c system
            do itype = 1,ntype
               ncount(itype) = 0 
            enddo      
            do iat=nfix+1,ntot
               itype=abs(type(iat))
               ncount(itype) = ncount(itype) + 1
            enddo
            do itype = 1,ntype
            prob3(itype,ncount(itype)) = prob3(itype,ncount(itype)) + 1
            enddo

            prob4(ncount(1)-ncount(2))=prob4(ncount(1)-ncount(2))+1

         endif

c ion pairing analysis (S frequency)
         IF(Qionpair) THEN         
         if(mod(icycle,nanal).eq.0) then
            do itype = 1,ntype
               do iat=nfix+1,ntot
                  if(abs(type(iat)).ne.itype) goto 202
                  iz=int((z(iat)-zmin)/delz)+1
                  nion1(itype,iz)=nion1(itype,iz)+1
                  np1=0
                  np2=0
                  do jat=nfix+1,ntot
                     if(abs(type(jat)).eq.itype) goto 201
                     if(abs(x(iat)-x(jat)).gt.S2) goto 201
                     if(abs(y(iat)-y(jat)).gt.S2) goto 201
                     if(abs(z(iat)-z(jat)).gt.S2) goto 201
                     r = sqrt((x(iat)-x(jat))**2+
     $                    (y(iat)-y(jat))**2+(z(iat)-z(jat))**2)
                     if(r.le.S1)then
                        np1=np1+1
                     elseif(r.gt.S1.and.r.le.S2)then
                        np2=np2+1
                     endif
 201              enddo
c                  write(*,*) np1,np2
                  sp1p2(itype,np1,np2)=sp1p2(itype,np1,np2)+1
                  if(np1.eq.0.and.np2.eq.0) then
                     npair1(itype,iz)=npair1(itype,iz)+1
                  elseif(np1.eq.1.and.np2.eq.0) then
                     npair2(itype,iz)=npair2(itype,iz)+1
                  elseif(np1.eq.0.and.np2.eq.1) then
                     npair3(itype,iz)=npair3(itype,iz)+1
                  elseif(np1.eq.1.and.np2.eq.1) then
                     npair4(itype,iz)=npair4(itype,iz)+1
                  endif
 202           enddo
            enddo
         endif
         ENDIF

c OUTPUT
         IF(nprint.gt.0.and.mod(icycle,nprint).eq.0) THEN
            if(ncycle*nstep.eq.0) call energy
            write(outu,134) 'PMF >',icycle,ener,
     $           eelec+evdw+esrpmf,egsbpa,egsbpb,evdwgd
            if(ncycle*nstep.ne.0)then
               do iat=1,ntype
                  ncount(iat)=0
               enddo
               do iat=1,ntot
                  itype=abs(type(iat))
                  ncount(itype)=ncount(itype)+1
               enddo
               do itype=1,ntype
                  ncrossup  = nforward(-itype) - nbackward(-itype)
                  ncrossdown= nbackward(itype) - nforward(itype)
                  ncrossing = ncrossup - ncrossdown
                  flux      = ncrossing*1.0D0/(dt*nstep*icycle)
               write(outu,135) atnam(itype),'>',ncount(itype),ncrossing,
     $         ncrossup,ncrossdown,cg(itype)*(flux*coulomb/psec)/pico
               enddo
               write(outu,'(2a)')
     $              '----------------------------------------------',
     $              '-----------------------------'
            endif
         ENDIF

c        call INTERACT(dener,x(1),y(1),z(1),1,.false.)
c        avener=avener+dener

c enegy profiles along Z-axis
         IF(Qenerprofile) THEN
         if(mod(icycle,nanal).eq.0) then
            do itype = 1,ntype
               do iat=nfix+1,ntot
                  if(abs(type(iat)).ne.itype) goto 301
                  iz=int((z(iat)-zmin)/delz)+1
                  nion2(itype,iz)=nion2(itype,iz)+1

                  call INTERACT(dener,x(iat),y(iat),z(iat),itype,iat,
     $                 .false.)

c                  write(*,'(a,i10,5f10.5)') 'EPROFILE',icycle,
c     $            egsbpa,egsbpb,evdwgd,dener-egsbpa-egsbpb-evdwgd

                  etmp=dener-egsbpa-egsbpb-evdwgd
                  etot(itype,iz)=etot(itype,iz)+dener    ! total interaction energy
                  eion(itype,iz)=eion(itype,iz)+etmp     ! ion-ion interaction energy
                  esf(itype,iz) =esf(itype,iz) +egsbpa   ! reaction field energy
                  erf(itype,iz) =erf(itype,iz) +egsbpb   ! static field energy
                  egvdw(itype,iz)=egvdw(itype,iz)+evdwgd ! repulsive energy

                  e2tot(itype,iz)=e2tot(itype,iz)+dener**2
                  e2ion(itype,iz)=e2ion(itype,iz)+etmp**2
                  e2sf(itype,iz) =e2sf(itype,iz) +egsbpa**2
                  e2rf(itype,iz) =e2rf(itype,iz) +egsbpb**2
                  e2gvdw(itype,iz)=e2gvdw(itype,iz)+evdwgd**2

 301           enddo
            enddo
         endif
         ENDIF

   10 CONTINUE
c..........................................................................

      call ENERGY
      IF(nprint.eq.0) THEN
         write(outu,134) 'PMF >',icycle-1,ener,
     $        eelec+evdw+esrpmf,egsbpa,egsbpb,evdwgd
         write(outu,'(2a)')
     $        '----------------------------------------------',
     $        '-----------------------------'
      ENDIF
c     write(*,*) 'Average interaction: ',avener/ncycle

      write(outu,*)
      write(outu,'(6x,a)') 'Results from the simulation: '

      call COUNT
      write(outu,'(6x,a,i4)') 'Total number of atoms ',ntot
      do ib=1,nbuffer
         write(outu,'(6x,a,2i4)') '     buffer ',ib, nat(ib)
      enddo

      write(outu,*) 
      write(outu,'(6x,a)') 'Statistics: '
      write(outu,*) 
      current = 0.0d0

      if(ngrand.gt.0)then

         do itype=1,ntype
            write(outu,'(6x,a,i4)') 'Particle type ',itype
            write(outu,'(6x,2(a,2i7))') 
     ,                 'forward   ',nforward(-itype),nforward(itype),
     ,               '   backward ',nbackward(-itype),nbackward(itype)
            write(outu,'(6x,a)') 'Number of particle which entered:'
            write(outu,'(6x,a,i4)') 
     ,                   '     from the left and exited to the right:',
     ,                   (nforward(-itype)-nbackward(-itype))
            write(outu,'(6x,a,i4)') 
     ,                   '     from the right and exited to the left:',
     ,                   (nforward(itype)-nbackward(itype))

            if(nstep.ne.0)then
            write(outu,*) 
            flux = (nforward(itype)+nforward(-itype)-
     ,              nbackward(itype)-nbackward(-itype))
     ,              /(dt*nstep*ncycle)
            write(outu,'(6x,a,e10.4)') 
     ,            'Flux in [particle/ps]   ',flux
            write(outu,'(6x,a,e10.4)') 
     ,            'Current [in pA]         ',
     ,             cg(itype)*(flux*coulomb/psec)/pico
                   current=current+cg(itype)*(flux*coulomb/psec)/pico
            write(outu,*) 
            endif
         enddo
         if(dt*nstep.ne.0)then
            write(outu,'(6x,a,e10.4)') 
     ,           'Total Current [in pA]               ',current
            write(outu,*) 
         endif

         do ib=1,nbuffer
            write(outu,'(6x,a,i3,4x,2(a,i12))') 
     ,           'buffer ',ib,' nremove   ',nremove(ib),
     ,                        ' ninsert   ',ninsert(ib)
            naver = 0.0
            do n=0,datom
               naver = naver+n*prob(ib,n)
               if(prob(ib,n).ne.0)then
                  if(Qzperiodic)then 
                     write(outu,'(i4,2f12.3)') n,
     $                    prob(ib,n)*1.0/ncycle,
     $                    poisson(avnum(ib),n)
                  else
                     write(outu,'(i4,2f12.3)') n,
     $                    prob(ib,n)*1.0/(ncycle*ngrand),
     $                    poisson(avnum(ib),n)
                  endif
                        

               endif
            enddo
            write(outu,'(6x,a,2f12.3)') 'Average number: ',
     ,                  naver/(ncycle*ngrand),avnum(ib)
            write(outu,*)
         enddo
      endif

      if(Qprob)then         
         write(outu,*) 'Distribution of particles in the channel: '
         if(czmin.ne.0.0.and.czmax.ne.0.0) then
            write(outu,'(3x,a,f7.2,a,f7.2,A)') 
     $           'The channel is defined between ',czmin,
     $           ' and ',czmax,' along Z-axis' 
         endif
         do itype=1,ntype
            write(outu,*) 'type ',itype
            ncount(itype) = 0
            do n=0,50
               ncount(itype) = ncount(itype)+n*prob2(itype,n)
               if(prob2(itype,n).ne.0)then
                  write(outu,'(i4,2f12.3)') n,prob2(itype,n)*1.0/ncycle
               endif
            enddo
            write(outu,*) 'Average number in the channel: ',
     $           ncount(itype)*1.0/ncycle
            write(outu,*)
         enddo

         write(outu,*) 'Distribution of particles in the system: '
         do itype=1,ntype
            write(outu,*) 'type ',itype
            ncount(itype) = 0
            do n=0,datom
               if(prob3(itype,n).ne.0) then
                  ncount(itype) = ncount(itype)+n*prob3(itype,n)
                  write(outu,'(i4,2f12.3)') n,prob3(itype,n)*1.0/ncycle
               endif
            enddo
            write(outu,*) 'Average number in the system: ',
     $                     ncount(itype)*1.0/ncycle
            write(outu,*)
         enddo

         write(outu,*) 'Distribution of particle difference : '
         do n=-50,50
            if(prob4(n).ne.0) then
               write(outu,'(i4,2f12.3)') n,prob4(n)*1.0/ncycle
            endif
         enddo
         write(outu,*)
      endif

      if(Qrho)then
         write(outu,*) ntype,delz,zmin 
         write(outu,*)
         write(outu,*) 'Average density profile: '
         do iz=1,nzmax
            zz = zmin+(iz-0.5)*delz
            do itype=1,ntype
               if(Qsphere)then
                  area = (twopi/2)*(Rmax(itype)**2-zz**2)
               else
                  area = LX*LY
               endif
c               rho(itype,iz)=rho(itype,iz)/ncycle
               write(16,*)  iz,rho(itype,iz),ncycle,delz,area
               rho(itype,iz)=rho(itype,iz)/(ncycle*delz*area)
            enddo
            write(outu,'(2f10.3,2x,8(e10.4,2x))') 
     $           zz,area,(rho(i,iz),i=1,ntype)
         enddo
      endif


      if(Qgr)then
         write(outu,*)
         write(outu,*) 'Integration number : '
         do ir=1,irmax
            do itype=1,ntype
               sgr(itype)=sgr(itype)+gr(itype,ir)/ncycle
            enddo
            write(outu,'(f12.3,8e15.5)') (ir-0.5)*dr,(sgr(i),i=1,ntype)
         enddo

         write(outu,*)
         write(outu,*) 'Radial distribution function : '
         do ir=1,1000
            do itype=1,ntype
               gr(itype,ir)=gr(itype,ir)/ncycle
               vol1 = 4.*pi/3.*((ir-1)*dr)**3
               vol2 = 4.*pi/3.*(ir*dr)**3
               gr(itype,ir)=gr(itype,ir)/((vol2-vol1)*density(1)) !ibfftyp(ib)))
            enddo
         enddo
         do ir=1,irmax
            write(outu,'(f12.3,8e15.5)') 
     $           (ir-0.5)*dr,(gr(i,ir),i=1,ntype)
         enddo
      endif

      if(Qionpair)then
         write(outu,*)
         write(outu,*) 'Ion Pairing Analysis: '
         do itype=1,ntype
            write(*,*) atnam(itype)
            do iz=1,nzmax
               zz = zmin+(iz-0.5)*delz
               write(6,'(f12.3,5f10.5)') zz,
     $              nion1(itype,iz)*1.0/ncycle*nanal,
     $              npair1(itype,iz)*1.0/nion1(itype,iz),
     $              npair2(itype,iz)*1.0/nion1(itype,iz),
     $              npair3(itype,iz)*1.0/nion1(itype,iz),
     $              npair4(itype,iz)*1.0/nion1(itype,iz)
            enddo
            write(*,*)
         enddo
      endif

      if(Qenerprofile)then
         write(outu,*)
         write(outu,*) 'Energy profile along the Z-axis: '
         do itype=1,ntype
            write(*,*) atnam(itype)
            do iz=1,nzmax
               zz = zmin+(iz-0.5)*delz
               etot(itype,iz) =etot(itype,iz)/nion2(itype,iz)
               eion(itype,iz) =eion(itype,iz)/nion2(itype,iz)
               esf(itype,iz)  =esf(itype,iz)/nion2(itype,iz)
               erf(itype,iz)  =erf(itype,iz)/nion2(itype,iz)
               egvdw(itype,iz)=egvdw(itype,iz)/nion2(itype,iz)
               e2tot(itype,iz) =e2tot(itype,iz)/nion2(itype,iz)
               e2ion(itype,iz) =e2ion(itype,iz)/nion2(itype,iz)
               e2sf(itype,iz)  =e2sf(itype,iz)/nion2(itype,iz)
               e2rf(itype,iz)  =e2rf(itype,iz)/nion2(itype,iz)
               e2gvdw(itype,iz)=e2gvdw(itype,iz)/nion2(itype,iz)
               write(6,'(f12.3,11f10.5)') zz,
     $              nion2(itype,iz)*1.0/ncycle*nanal,
     $              etot(itype,iz),e2tot(itype,iz)-etot(itype,iz)**2,
     $              eion(itype,iz),e2ion(itype,iz)-eion(itype,iz)**2,
     $              esf(itype,iz),e2sf(itype,iz)-esf(itype,iz)**2,
     $              erf(itype,iz),e2rf(itype,iz)-erf(itype,iz)**2,
     $              egvdw(itype,iz),e2gvdw(itype,iz)-egvdw(itype,iz)**2
            enddo
            write(*,*)
         enddo
      endif

      RETURN
      END



      SUBROUTINE MEMBRANE
      include 'grand.fcm'
      include 'grand_io.fcm'
      include 'consta.fcm'
      real*8 DEmemb, sw1, dsw1, sw2, dsw2, sw3, dsw3, sw4, dsw4
      real*8 r, ri, rj, ampij, kappa, kappa2
      integer itype, jtype

      Ememb = 0.0D0

      do iat=nfix+1,ntot
         itype = abs(type(iat))

c Nernst transmembrane potential
         if(voltage.ne.0.0)then

c        IF(z(iat).le.-thick2)then
c           Ememb  = Ememb + 0.0d0
c        elseif((z(iat).ge.-thick2).and.(z(iat).le.thick2))then
c           delz = (z(iat)+thick2)
c           Ememb  = Ememb + cg(itype)*voltage*delz/(2*thick2)
c           if(Qforces)then
c              fz(IAT)=fz(iat)-cg(itype)*voltage/(2*thick2)
c           endif
c        elseif(z(iat).ge.thick2)then
c           Ememb = Ememb + voltage
c        endif

            epsm=2.0
            kappa2=2530.362733*0.150/300.0 !conc/temp
            kappa=sqrt(kappa2/cdie)
            zmemb1 = -thick2+zmemb
            zmemb2 =  thick2+zmemb
            tmemb  = 2*thick2
            afact = voltage/(2.0+(cdie/epsm)*kappa*tmemb)
 
            if(z(iat).lt.zmemb1)then
               Ememb = Ememb + 
     $              cg(itype)*afact*exp(kappa*(z(iat)-zmemb1))
               if(Qforces)then
                  fz(IAT)=fz(iat)-
     $                 cg(itype)*afact*kappa*exp(kappa*(z(iat)-zmemb1))
               endif
            elseif((z(iat).ge.zmemb1).and.(z(iat).le.zmemb2))then
               Ememb = Ememb + 
     $          cg(itype)*afact*((cdie/epsm)*kappa*(z(iat)-zmemb1)+1.0)
               if(Qforces)then
                  fz(IAT)=fz(iat)-cg(itype)*afact*(cdie/epsm)*kappa
               endif
            elseif(z(iat).gt.zmemb2)then
               Ememb = Ememb + 
     $            cg(itype)*(voltage-afact*exp(-kappa*(z(iat)-zmemb2)))
               if(Qforces)then
                  fz(IAT)=fz(iat)-
     $               cg(itype)*afact*kappa*exp(-kappa*(z(iat)-zmemb2))
               endif
            endif
            
         endif


c Membrane boundary
         if(AMPL1(itype).ne.0.0)then
            call switch1(sw1,dsw1,z(iat),thick2,p1(itype),zmemb)
            Ememb  = Ememb + AMPL1(itype)*sw1
            if(Qforces)then
               fz(iat) = fz(iat) - AMPL1(itype)*dsw1
            endif
         endif

c Cylindrical channel 
         if(AMPL2(itype).ne.0.0)then
            call switch1(sw1,dsw1,z(iat),thick2,p1(itype),zmemb)
            r = sqrt(x(iat)**2+y(iat)**2)
            call switch2(sw2,dsw2, r,rcylinder(itype), p2(itype))
            if(nmaxz.ne.0)then
               zmin = -(nmaxz+1/2)*deltaz
               iz = int((z(iat)-zmin)/deltaz)+1
               ziz = zmin + iz*deltaz
               w2 = w(iz)+(w(iz+1)-w(iz))*(z(iat)-ziz)/deltaz
               write(outu,'(i4,f10.4)') iz,w2
            endif
            Ememb  = Ememb + AMPL2(itype)*sw1*sw2
c            write(*,*) 'Ememb ',Ememb,sw1,sw2

            if(Qforces)then
               if(r.gt.1.0D-10)then
                  fx(iat) = fx(iat) - AMPL2(itype)*sw1*dsw2*x(iat)/r 
                  fy(iat) = fy(iat) - AMPL2(itype)*sw1*dsw2*y(iat)/r 
               endif
               fz(iat) = fz(iat) - AMPL2(itype)*sw2*dsw1
            endif
         endif

c Ion-ion interactions in the pore region

         call switch1(sw1,dsw1,z(iat),thick2,p1(itype),zmemb)
         ri = sqrt(x(iat)**2+y(iat)**2)
         call switch2(sw2,dsw2,ri,rcylinder(itype), p2(itype))
c         write(*,'(i,8f8.3)') iat,z(iat),ri,sw1,sw2

         do jat=iat+1,ntot
            jtype = type(jat)
            ampij = AMPL3(itype,jtype)
            call switch1(sw3,dsw3,z(jat),thick2,p1(jtype),zmemb)
            rj = sqrt(x(jat)**2+y(jat)**2)
            call switch2(sw4,dsw4,rj,rcylinder(jtype), p2(jtype))
c            write(*,'(i,8f8.3)') jat,z(jat),rj,sw3,sw4
c            write(*,*) 'iat jat ',iat,jat,'Ememb =',sw1*sw2*sw3*sw4
            Ememb = Ememb + ampij*sw1*sw2*sw3*sw4

            if(Qforces)then
               if(ri.gt.1.0D-10)then
                  fx(iat) = fx(iat) - sw3*sw4*ampij*sw1*dsw2*x(iat)/ri 
                  fy(iat) = fy(iat) - sw3*sw4*ampij*sw1*dsw2*y(iat)/ri 
               endif
               fz(iat) = fz(iat) - sw3*sw4*ampij*sw2*dsw1
               if(rj.gt.1.0D-10)then
                  fx(jat) = fx(jat) - sw1*sw2*ampij*sw3*dsw4*x(jat)/rj 
                  fy(jat) = fy(jat) - sw1*sw2*ampij*sw3*dsw4*y(jat)/rj 
               endif
               fz(jat) = fz(jat) - sw1*sw2*ampij*sw4*dsw3
c               write(*,'(a,i,3f8.3,5x,3f8.3)') 
c     $       'forces ',jat,x(jat),y(jat),z(jat),fx(jat),fy(jat),fz(jat)
            endif
         enddo      

c     write(*,'(a,3f8.3,3x,f8.3,3x,3f8.3)') 
c    ,  'memb forces ',x(1),y(1),z(1),Ememb,fz(1),fx(1),fy(1)

c
c     free energy profile in channel

c     iz = int((zzz-zmin)/delta)+1
c     w2 = w(iz)+(w(iz+1)-w(iz))*(zzz-z(iz))/delta


      enddo
      return
      end

      subroutine switch1(sw,dsw,z,thick2,p1,zmemb)
      real*8 sw, dsw, z,thick2, p1, zmemb
      real*8 zmemb1,zmemb2

      zmemb1=-thick2+zmemb
      zmemb2= thick2+zmemb

      IF(z.gt.zmemb1-p1.and.z.lt.zmemb2+p1)then
         IF(z.gt.zmemb1.and.z.lt.zmemb2)then
            sw  = 1.0d0
            dsw = 0.0d0
         else
            if(z.gt.zmemb)then
              delz = (z-zmemb2)
              sw = 1.0d0+2*(delz/P1)**3-3*(delz/P1)**2
              dsw = (6*(delz/P1)**2-6*(delz/P1))/P1
            elseif(z.lt.zmemb)then
              delz = (z-zmemb1)
              sw = 1.0d0-2*(delz/P1)**3-3*(delz/P1)**2
              dsw = (-6*(delz/P1)**2-6*(delz/P1))/P1
            endif
         endif
      else
         sw = 0.0d0
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

      subroutine switch3(sw,dsw,z,plength2,p3,pcenter)
      implicit none
      real*8 sw,dsw,z,plength2,p3,pcenter
      real*8 delz,pcenter1,pcenter2

      pcenter1=-plength2+pcenter
      pcenter2= plength2+pcenter

      if(z.gt.pcenter1-p3.and.z.lt.pcenter2+p3)then
         IF(z.gt.pcenter1.and.z.lt.pcenter2)then
            sw  = 0.0d0
            dsw = 0.0d0
         else
            if(z.gt.pcenter)then
              delz = (z-pcenter2)
              sw = 2*(delz/p3)**3-3*(delz/p3)**2
              dsw = (6*(delz/p3)**2-6*(delz/p3))/p3
            elseif(z.lt.pcenter)then
              delz = (z-pcenter1)
              sw = -2*(delz/p3)**3-3*(delz/p3)**2
              dsw = (-6*(delz/p3)**2-6*(delz/p3))/p3
            endif
            sw=-sw
            dsw=-dsw
         endif
      else
         sw = 1.0d0
         dsw = 0.0d0
      endif
c      write(*,*) sw,dsw,z,plength2,p3,pcenter
c      write(*,*) pcenter1,pcenter2
c
      return
      end

      subroutine FIXCOOR(xi,yi,zi)
      include 'grand.fcm'
      include 'consta.fcm'
      real*8  xi,yi,zi
      
c spherical system
      if(Qsphere)then
        radius = sqrt(xi**2+yi**2+zi**2)
        if(radius.gt.(LZ/2))then
c          write(*,*) 'radius before ',radius,xi,yi,zi
           xi=-(radius-LZ)*(xi/radius)
           yi=-(radius-LZ)*(yi/radius)
           zi=-(radius-LZ)*(zi/radius)
           radius = sqrt(xi**2+yi**2+zi**2)
c          write(*,*) 'radius after ',radius,xi,yi,zi
        endif

C rectangular system
      else
 
         if(xi.lt.-LX/2)then
            xi = -LX/2 - (LX/2+xi)
         elseif(xi.gt.LX/2)then
            xi =  LX/2 - (xi-LX/2)
         endif

         if(yi.lt.-LY/2)then
            yi = -LY/2 - (LY/2+yi)
         elseif(yi.gt.LY/2)then
            yi =  LY/2 - (yi-LY/2)
         endif

         IF(.not.Qzperiodic)THEN
            if(zi.lt.-LZ/2)then
               zi = -LZ/2 - (LZ/2+zi)
            elseif(zi.gt.LZ/2)then
               zi =  LZ/2 - (zi-LZ/2)
            endif
         ENDIF

      endif

      return
      end

      subroutine wrttraj(nframe)
      include 'grand.fcm'
      include 'consta.fcm'
      include 'grand_io.fcm'

      integer nframe

cim      real*8 ztraj(100)
cim      do i=1,ntot
cim            ztraj(i)= z(i)
cim      enddo
cim      do i=ntot+1,100
cim            ztraj(i)= -99 !z(i)
cim      enddo
cim      nunit=int(ntot/15)+1
cim      do iunit=iuntrj,iuntrj+nunit
cim         i1=1+16*(iunit-iuntrj)
cim         write(iunit,'(17f8.3)') runtime, (ztraj(i),i=i1,i1+15)
cim      enddo

      if(runtime.eq.0.0) then
         write(iuntrj) nframe                   ! number of frames
         write(iuntrj) ntype                    ! number of different ions
         write(iuntrj) (atnam(i),i=1,ntype)     ! ion types in character*4
      else
         nmoveion=ntot-nfix
         write(iuntrj) runtime                      ! simulation time in nano-second
         write(iuntrj) nmoveion                     ! total number of ions in motion
         write(iuntrj) (abs(type(i)),i=nfix+1,ntot) ! atom types
         write(iuntrj) (sngl(x(i)),i=nfix+1,ntot)   ! x coordinates
         write(iuntrj) (sngl(y(i)),i=nfix+1,ntot)   ! y coordinates
         write(iuntrj) (sngl(z(i)),i=nfix+1,ntot)   ! z coordinates 
      endif

      return
      end
 
      subroutine spline (n, x, y, b, c, d)
      integer n
      real*8 x(n), y(n), b(n), c(n), d(n)
c
c  the coefficients b(i), c(i), and d(i), i=1,2,...,n are computed
c  for a cubic interpolating spline
c
c    s(x) = y(i) + b(i)*(x-x(i)) + c(i)*(x-x(i))**2 + d(i)*(x-x(i))**3
c
c    for  x(i) .le. x .le. x(i+1)
c
c  input..
c
c    n = the number of data points or knots (n.ge.2)
c    x = the abscissas of the knots in strictly increasing order
c    y = the ordinates of the knots
c
c  output..
c
c    b, c, d  = arrays of spline coefficients as defined above.
c
c  using  p  to denote differentiation,
c
c    y(i) = s(x(i))
c    b(i) = sp(x(i))
c    c(i) = spp(x(i))/2
c    d(i) = sppp(x(i))/6  (derivative from the right)
c
c  the accompanying function subprogram  seval  can be used
c  to evaluate the spline.
c
c
      integer nm1, ib, i
      double precision t
c
      nm1 = n-1
      if ( n .lt. 2 ) return
      if ( n .lt. 3 ) go to 50
c
c  set up tridiagonal system
c
c  b = diagonal, d = offdiagonal, c = right hand side.
c
      d(1) = x(2) - x(1)
      c(2) = (y(2) - y(1))/d(1)
      do 10 i = 2, nm1
         d(i) = x(i+1) - x(i)
         b(i) = 2.*(d(i-1) + d(i))
         c(i+1) = (y(i+1) - y(i))/d(i)
         c(i) = c(i+1) - c(i)
   10 continue
c
c  end conditions.  third derivatives at  x(1)  and  x(n)
c  obtained from divided differences
c
      b(1) = -d(1)
      b(n) = -d(n-1)
      c(1) = 0.
      c(n) = 0.
      if ( n .eq. 3 ) go to 15
      c(1) = c(3)/(x(4)-x(2)) - c(2)/(x(3)-x(1))
      c(n) = c(n-1)/(x(n)-x(n-2)) - c(n-2)/(x(n-1)-x(n-3))
      c(1) = c(1)*d(1)**2/(x(4)-x(1))
      c(n) = -c(n)*d(n-1)**2/(x(n)-x(n-3))
c
c  forward elimination
c
   15 do 20 i = 2, n
         t = d(i-1)/b(i-1)
         b(i) = b(i) - t*d(i-1)
         c(i) = c(i) - t*c(i-1)
   20 continue
c
c  back substitution
c
      c(n) = c(n)/b(n)
      do 30 ib = 1, nm1
         i = n-ib
         c(i) = (c(i) - d(i)*c(i+1))/b(i)
   30 continue
c
c  c(i) is now the sigma(i) of the text
c
c  compute polynomial coefficients
c
      b(n) = (y(n) - y(nm1))/d(nm1) + d(nm1)*(c(nm1) + 2.*c(n))
      do 40 i = 1, nm1
         b(i) = (y(i+1) - y(i))/d(i) - d(i)*(c(i+1) + 2.*c(i))
         d(i) = (c(i+1) - c(i))/d(i)
         c(i) = 3.*c(i)
   40 continue
      c(n) = 3.*c(n)
      d(n) = d(n-1)
      return
c
   50 b(1) = (y(2)-y(1))/(x(2)-x(1))
      c(1) = 0.
      d(1) = 0.
      b(2) = b(1)
      c(2) = 0.
      d(2) = 0.
      return
      end

!     THIS FUNCTION EVALUATES CUBIC SPLINE

      function seval(n, u, x, y, b, c, d)
      integer n
      real*8 u, x(n), y(n), b(n), c(n), d(n)
      integer i, j, k
      real*8 dx
      data i/1/
      if ( i .ge. n ) i = 1
      if ( u .lt. x(i) ) go to 10
      if ( u .le. x(i+1) ) go to 30
   10 i = 1
      j = n+1
   20 k = (i+j)/2
      if ( u .lt. x(k) ) j = k
      if ( u .ge. x(k) ) i = k
      if ( j .gt. i+1 ) go to 20
   30 dx = u - x(i)
      seval = y(i) + dx*(b(i) + dx*(c(i) + dx*d(i)))
      return
      end

!     THIS FUNCTION EVALUATES 1-ST DERIVATIVE
      function seval1 (n,u,x,y,b,c,d)
      integer n
      real*8 u, x(n), y(n), b(n), c(n), d(n)
      integer i, j, k
      real*8 dx
      data i/1/
      if ( i .ge. n ) i = 1
      if ( u .lt. x(i) ) go to 10
      if ( u .le. x(i+1) ) go to 30
   10 i = 1
      j = n+1
   20 k = (i+j)/2
      if ( u .lt. x(k) ) j = k
      if ( u .ge. x(k) ) i = k
      if ( j .gt. i+1 ) go to 20
   30 dx = u - x(i)
      seval1 = b(i) + dx*c(i) + dx*dx*d(i)
      return
      end

C23456789012345678901234567890123456789012345678901234567890123456789012

