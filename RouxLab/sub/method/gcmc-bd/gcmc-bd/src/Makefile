F77= f77
FC = -O2
LD = -O2

OBJS = misc.o charli.o simul.o gsbp.o cputime.o
FCMS = grand.fcm gsbp.fcm consta.fcm charli.fcm misc.fcm grand_io.fcm

gcmc.bd : $(OBJS)
	$(F77) $(LD) -o gcmc.bd $(OBJS)

misc.o : misc.f grand_io.fcm
	$(F77) -c $(FC) misc.f

charli.o : charli.f charli.fcm misc.fcm grand_io.fcm
	$(F77) -c $(FC) charli.f

simul.o : simul.f $(FCMS)
	$(F77) -c $(FC) simul.f

gsbp.o : gsbp.f gsbp.fcm consta.fcm
	$(F77) -c $(FC) gsbp.f

cputime.o : cputime.f
	$(F77) -c $(FC) cputime.f


