c========================================================================
C     CHARacter manipulation LIbrary (CHAR_LI)
C     need th:[roux]charli.fcm
c========================================================================

      subroutine getlin(c2,c1,inpu,outu)
c     This subroutine gives a prompt c2 and get a 
c     non-blank line of command in c1, if the line terminates with
c     a "-" then the next line is appended to it and so on, until
c     the maximum number of lines "nline" of len1gth "len1" is read.
c     
      character*(*) c1
      character*(*) c2
      character*350 line
      include 'charli.fcm'
      include 'misc.fcm'
      integer inpu,outu
      integer begin,endlin
      logical done
      
      c1=' '
      line=' '
      begin=1
      lenc1=len(c1)
      endlin=0
      done=.false.


 1000 read(inpu,100,end=2000) line
  100 format(a)
      call fend(line,endlin)
      if(outu.gt.0) write(outu,101) c2,line(1:endlin) !give the prompt
  101 format(1x,a,a)

      call clean(line)
      if(trim(line))then

      call fend(line,endlin)
      if(check(line(endlin:),'-'))then
      done=.false.
      else
      done=.true.
      endif

      c1(begin:)=line(1:endlin)
      begin=begin+endlin
      if(begin.gt.lenc1)then
      write(abs(outu),'(a)')
     ,' * GETLIN * error, command line truncated'
      done=.true.
      endif

      else
      done=.false.
      endif

      if(done)then
      call subst(c1,strg,outu)
      return !that was the last line
      else
      goto 1000 !append a new line
      endif
      

c     END-OF-FILE encountered
 2000 c1='*END*'
      write(abs(outu),'(a)')
     ,' * GETLIN * error, end of file encountered'
      return

      end

c========================================================================

      subroutine fend(c1,i1)
c     This subroutine finds the last non-blank character in a chain
      character*(*) c1
      lenc1=len(c1)
      do 1 i=lenc1-1,1,-1
      if(c1(i:i+1).ne.' ')then
      i1=i
      return
      endif
    1 continue
      i1=1
      return
      end

c========================================================================

      subroutine clean(c1)
c     This subroutine removes any comments placed after !
      character*(*) c1
      length=len(c1)
      i1=index(c1,'!')
      if(i1.ne.0) then
      c1(1:length)=c1(1:i1-1)
      endif
      return
      end

c========================================================================

      logical function trim(c1)
c     This subroutine removes the blanks on the left
      character*(*) c1
      length=len(c1)
      do 1 i=1,length
      trim=c1(i:i).ne.' '
      if(trim)then
      c1(1:length)=c1(i:length)
      return
      endif
    1 continue
      return
      end

c========================================================================

      logical function check(c1,c2)
c     This subroutine verifies if c2 is in c1 and remove it
      character*(*) c1,c2
      external trim
      logical junk,trim
      integer i1,i2,lenc1,lenc2
      i1=index(c1,c2)
      check=i1.ne.0
      if(check)then
      lenc1=len(c1)
      lenc2=len(c2)
      i2=index(c1(i1+lenc2:lenc1),' ')+i1+lenc2-1
      c1(i1:lenc1)=c1(i2:lenc1) !remove the word until the next ' '
      junk=trim(c1)
      endif
      return
      end
      
c========================================================================
 
      subroutine getchr(c1,c2,c3,c4)
c     Look in the chain c1 for the chain placed
c     just between c2  and c3 and put it in c4.
      character*(*) c1,c2,c3,c4
      integer lenc1,lenc2
      lenc1=len(c1)
      lenc2=len(c2)
      c4=' '
      i2=index(c1,c2)
      i3=index(c1(i2+lenc2:lenc1),c3)+i2+lenc2-1
      if((i3.eq.0).or.(i2.eq.0)) return ! c2 or c3 are not in c1
      c4=c1(i2+lenc2:i3-1)
      c1(i2:lenc1)=c1(i3+1:lenc1)
      return
      end

c========================================================================

      subroutine getwrd(c1,c2,c3)
c     Look in the chain c1 for the word coming 
c     just after c2 and put it in the c3.  The word
c     is then removed form c1.  This subroutine is used
c     to get the name of files to open.
      character*(*) c1,c2,c3
      include 'charli.fcm'
      integer lenc1,lenc2,i1,i2
      c3=' '
      lenc1=len(c1)
      lenc2=len(c2)
      i1=index(c1,c2)
      if(i1.gt.0)then
      i2=index(c1(i1+lenc2:lenc1),' ')+i1+lenc2-1
      c1(i1:lenc1)=c1(i2:lenc1) !remove the word until the next ' '
      call nxtchn(c1(i1:lenc1),' ',c3)
      endif
      return
      end

c========================================================================

      subroutine nxtchn(c1,c2,c3)
c     Look in the chain c1 for the next chain coming  before the 
c     chain c2 (possibly a blank) and put it in the chain c3.  
c     The chain c2 and c3 are then then removed form c1.
      character*(*) c1,c2,c3
      include 'charli.fcm'
      if(trim(c1))then
      c3=' '
      i2=index(c1,c2)
      if(i2.eq.0) return ! c2 is not in c1
      c3=c1(1:i2-1) !save the word c3
      c1=c1(i2+len(c2):len(c1)) !remove it from the chain c1
      endif
      return
      end

c========================================================================

      function fcnvrt(c1)
      real fcnvrt
      character*(*) c1
      include 'charli.fcm'
      include 'grand_io.fcm'
      character fmt*7
      integer lenc1
      call fend(c1,lenc1)
      if(lenc1.eq.0)then
      write(outu,*) '*FCNVRT* zero length string'
      fcnvrt=0.0
      return
      endif
      write(fmt,100) '(f',lenc1,'.0)'
  100 format(a,i2,a)
      read(c1(1:lenc1),fmt,err=1000) fcnvrt
      return
 1000 write(outu,*)'*ERROR IN CONVERSION*  c1=',c1(1:lenc1)
      fcnvrt=0.0
      return
      end

c========================================================================

      function dcnvrt(c1)
c     double precision conversion
      real*8 dcnvrt
      character*(*) c1
      include 'grand_io.fcm'
      include 'charli.fcm'
      character fmt*7
      integer lenc1
      call fend(c1,lenc1)
      if(lenc1.eq.0)then
      write(outu,*) '*FCNVRT* zero length string'
      dcnvrt=0.0d0
      return
      endif
      write(fmt,100) '(f',lenc1,'.0)'
  100 format(a,i2,a)
      read(c1(1:lenc1),fmt,err=1000) dcnvrt
      return
 1000 write(outu,*)'*ERROR IN CONVERSION*  c1=',c1(1:lenc1)
      dcnvrt=0.0d0
      return
      end

c========================================================================

      function icnvrt(c1,error)
      integer icnvrt
      character*(*) c1
      include 'grand_io.fcm'
      include 'charli.fcm'
      character fmt*5
      integer lenc1
      logical error
c
      error=.false.
      call fend(c1,lenc1)
      if(lenc1.eq.0)then
      write(outu,*) '*ICNVRT* zero length string'
      icnvrt=0
      return
      endif
      write(fmt,100) '(i',lenc1,')'
  100 format(a,i2,a)
      read(c1(1:lenc1),fmt,err=1000) icnvrt
      return
 1000 error=.true.
      write(outu,*)'*ERROR IN CONVERSION*  c1=',c1(1:lenc1)
      icnvrt=0
      return
      end

c========================================================================

      subroutine gtipar(c1,c2,ipar,idef)
c     This subroutine get the integer parameter "ipar"
c     coming just after the word c2 in the chain c1.
c     At the end the word and the parameter are removed
c     from the c1.  If nothing was there, the default "idef"
c     is used.
      character*(*) c1,c2
      character*25 junk
      integer ipar
      include 'charli.fcm'
      external icnvrt
      logical error      
      call getwrd(c1,c2,junk)
      if(trim(junk))then
      ipar=icnvrt(junk,error)
      if(error) ipar=idef
      else
      ipar=idef
      endif
      return
      end

c========================================================================

      subroutine gtfpar(c1,c2,par,def)
c     This subroutine get the real parameter "par"
c     coming just after the word c2 in the chain c1.
c     At the end the word and the parameter are removed
c     from the c1.  If nothing was there, the default "def"
c     is used.
      character*(*) c1,c2
      character*25 junk
      real par,def
      include 'charli.fcm'
      external fcnvrt
      call getwrd(c1,c2,junk)
      if(trim(junk))then
      par=fcnvrt(junk)
      else
      par=def
      endif
      return
      end

c========================================================================

      subroutine gtdpar(c1,c2,par,def)
c     This subroutine get the real*8 parameter "par"
c     coming just after the word c2 in the chain c1.
c     At the end the word and the parameter are removed
c     from the c1.  If nothing was there, the default "def"
c     is used.
      character*(*) c1,c2
      character*25 junk
      real*8 par,def,dcnvrt
      include 'charli.fcm'
      external dcnvrt
      call getwrd(c1,c2,junk)
      if(trim(junk))then
      par=dcnvrt(junk)
      else
      par=def
      endif
      return
      end


c========================================================================

      subroutine rdtitl(iunit)
      include 'charli.fcm'
      include 'grand_io.fcm'
      include 'misc.fcm'
      character title*80

c     write(outu,99) iunit
c  99 format(' reading title from unit ',i3)
 1000 read(iunit,100) title
  100 format(a)

      if(title(1:1).eq.'*')then
      call fend(title,ititl)
      write(outu,101) title(1:ititl)
  101 format(' title: ',a)
         if(trim(title(2:70)))then
         goto 1000 !more to read
         else
         goto 1001 !last line of title; return
         endif
      else
      write(outu,102)
  102 format(' *ERROR*  no title read')
      backspace(unit=iunit,err=1001)
      endif
 1001 write(outu,*)
      return
      end

c========================================================================

      subroutine wrtitl(iunit)
      include 'charli.fcm'
      character title*80
      include 'grand_io.fcm'
      include 'misc.fcm'
      lent=len(title)

      write(outu,99) iunit
   99 format(' writing title to unit ',i3)
 1000 read(inpu,101) title
  101 format(a)
      call subst(title,strg,-outu)
      call fend(title,lenc)
      write(outu,102) title(1:lenc)
  102 format(' title: ',a)
 1001 if(title(1:1).eq.'*')then
      write(iunit,103) title(1:lenc)
  103 format(a)
         if(trim(title(2:lent)))then
         goto 1000 !more to write
         else 
         goto 1002 !last line of title; return
         endif
      else
      write(outu,104)
  104 format(' *ERROR*  no title read')
      backspace(unit=inpu,err=1002)
      endif
 1002 write(outu,*)
      return
      end
c-----------------------------------------------------------------
      subroutine upper(c1)
c     UPPER CASE CONVERSION
c     The fortran function ICHAR(a) returns the asci number corresponding to 
c     the character (a).  The function CHAR(i) returns the character 
c     corresponding to the asci number i.
c     For alphabetic characters:
c     A = 65, B = 66, ..., Z = 90
c     a = 97, b = 98, ..., z = 122
      character*(*) c1
      integer lenc1,ic1

      lenc1=len(c1)
      do 1 i=1,lenc1
      ic1=ichar(c1(i:i))
      if((ic1.ge.97).and.(ic1.le.122))then
      c1(i:i)=char(ic1-32)
      endif
    1 continue
      return
      end
c------------------------------------------------------------------------------
      subroutine lower(c1)
c     Lower case substitutions.
c     The fortran function ICHAR(a) returns the asci number corresponding to 
c     the character (a).  The function CHAR(i) returns the character 
c     corresponding to the asci number i.
c     For alphabetic characters:
c     A = 65, B = 66, ..., Z = 90
c     a = 97, b = 98, ..., z = 122
      character*(*) c1
      integer lenc1,ic1

      lenc1=len(c1)
      do 1 i=1,lenc1
      ic1=ichar(c1(i:i))
      if((ic1.ge.65).and.(ic1.le.90))then
      c1(i:i)=char(ic1+32)
      endif
    1 continue
      return
      end

c=========================================================================

      subroutine fatnam(atnam,ntype,wrd4,itype)
      include 'grand_io.fcm'
      character*4 atnam(*),wrd4
      integer itype,i
      do 1 itype=1,ntype
      if(wrd4.eq.atnam(itype))then 
      return
      endif
    1 continue
      write(outu,100) wrd4
  100 format(' * error atom ',a4,' not found')
      stop
      return
      end


