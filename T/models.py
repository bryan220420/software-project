from django.db import models

class Persona(models.Model):
  codPersona = models.AutoField(primary_key=True)
  tipPersona = models.CharField(max_length=1)
  desCorto = models.CharField(max_length=30)
  desPersona = models.CharField(max_length=100)

class Cliente(models.Model):
  codCliente = models.AutoField(primary_key=True)
  nroRuc = models.CharField(max_length=20)
  vigente = models.CharField(max_length=1, default="1")
  codPersona = models.OneToOneField(Persona, on_delete=models.CASCADE, db_column="codPersona")


class Empleado(models.Model):
  codEmple = models.AutoField(primary_key=True)
  direcc = models.CharField(max_length=100)
  hobby = models.CharField(max_length=2000)
  fecNac = models.DateField()
  dni = models.CharField(max_length=20)
  nroCIP = models.CharField(max_length=10)
  fecCIPVig = models.DateField()
  licCond = models.CharField(max_length=1, default="1")
  observac = models.CharField(max_length=300)
  vigente = models.CharField(max_length=1, default="1")
  codPersona = models.OneToOneField(Persona, on_delete=models.CASCADE, db_column="codPersona")


class Proyecto(models.Model):
  codPyto = models.AutoField(primary_key=True)
  codSNIP = models.CharField(max_length=10)
  fecReg = models.DateField()
  codFase = models.IntegerField()
  codNivel = models.IntegerField()
  codFuncion = models.CharField(max_length=4)
  codSituacion = models.IntegerField()
  numInfor = models.IntegerField()
  numInforEntrg = models.IntegerField()
  estPyto = models.IntegerField()
  fecEstado = models.DateField()
  nomPyto = models.CharField(max_length=1000)
  valRefer = models.DecimalField(max_digits=14, decimal_places=12)
  costoTotal = models.DecimalField(max_digits=14, decimal_places=12)
  costDirecto = models.DecimalField(max_digits=14, decimal_places=12)
  costGGen = models.DecimalField(max_digits=14, decimal_places=12)
  costImp = models.DecimalField(max_digits=14, decimal_places=12)
  costPenalid = models.DecimalField(max_digits=14, decimal_places=12)
  codDpto = models.CharField(max_length=2)
  codProv = models.CharField(max_length=2)
  codDist = models.CharField(max_length=2)
  fechViab = models.DateField()
  observac = models.CharField(max_length=500)
  rutaDoc = models.CharField(max_length=300)
  codObjc = models.IntegerField()
  vigente = models.CharField(max_length=1)
  codCliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, db_column="codCliente")
  emplJefeProj = models.ForeignKey(Empleado, on_delete=models.CASCADE, db_column="emplJefeProj")

  def _str_(self):
   return str(self.nomPyto)




class Ruta(models.Model):
  codRutaPy = models.AutoField(primary_key=True)
  nroVersion = models.IntegerField(default=1)
  codRuta = models.CharField(max_length=20)
  fechaRegistro = models.DateField()
  denominacionRuta = models.CharField(max_length=100)
  denominacionCortoRuta = models.CharField(max_length=100)
  nroKms = models.DecimalField(max_digits=18, decimal_places=13)
  zonaGPS = models.CharField(max_length=25)
  progInicio = models.CharField(max_length=25)
  progFinal = models.CharField(max_length=25)
  latitudInicioRuta = models.CharField(max_length=25)
  latitudFinalRuta = models.CharField(max_length=25)
  longitudInicioRuta = models.CharField(max_length=25)
  longitudFinalRuta = models.CharField(max_length=25)
  altitudInicioRuta = models.CharField(max_length=25)
  altitudFinalRuta = models.CharField(max_length=25)
  observacionRuta = models.CharField(max_length=500)
  vigencia = models.CharField(max_length=1)
  codPyto = models.ForeignKey(Proyecto, on_delete=models.CASCADE, db_column="codPyto")
  elaboradorPor = models.ForeignKey(Empleado, on_delete=models.CASCADE, db_column="elaboradorPor")

  class Meta:
    unique_together = [['codPyto', 'codRutaPy', 'nroVersion']]


class Tramo(models.Model):
  codTramoPy = models.AutoField(primary_key=True)
  nroVersion = models.IntegerField(default=1)
  codTramo = models.CharField(max_length=20)
  fechaRegistro = models.DateField()
  denominacionTramo = models.CharField(max_length=100)
  denominacionCortoTramo = models.CharField(max_length=100)
  nroKmsTramo = models.DecimalField(max_digits=18, decimal_places=13)
  zonaGPS = models.CharField(max_length=25)
  progInicio = models.CharField(max_length=25)
  progFin = models.CharField(max_length=25)
  latitudInicioTramo = models.CharField(max_length=25)
  latitudFinalTramo = models.CharField(max_length=25)
  longitudInicioTramo = models.CharField(max_length=25)
  longitudFinalTramo = models.CharField(max_length=25)
  altitudInicioTramo = models.CharField(max_length=25)
  altitudFinalTramo = models.CharField(max_length=25)
  observacionTramo = models.CharField(max_length=500)
  vigencia = models.CharField(max_length=1)
  codPyto = models.ForeignKey(Proyecto, on_delete=models.CASCADE, db_column="codPyto")
  codRutaPy = models.ForeignKey(Ruta, on_delete=models.CASCADE, db_column="codRutaPy")

  class Meta:
    unique_together = [['codPyto', 'codRutaPy', 'codTramoPy', 'nroVersion']]

class Tipo(models.Model):
  codTipo=models.IntegerField(primary_key=True)
  detalleTipo = models.CharField(max_length=100)
  def _str_(self):
   return str(self.detalleTipo)

class Caja(models.Model):
  codCaja = models.IntegerField(primary_key=True)
  codPyto = models.ForeignKey(Proyecto, on_delete=models.CASCADE,db_column="codPyto")
  codTipo = models.ForeignKey(Tipo, on_delete=models.CASCADE, db_column="codTipo")
  fechaCaja = models.DateField()

class Ingreso(models.Model):
	codIng = models.IntegerField(primary_key=True)
	codCaja = models.ForeignKey(Caja, on_delete=models.CASCADE, db_column="codCaja")
	detalleIng = models.CharField(max_length=100)
	fechaIng = models.DateField()
	monto = models.DecimalField(max_digits=6, decimal_places=2)


class Egreso(models.Model):
	codEgr = models.IntegerField(primary_key=True)
	codCaja = models.ForeignKey(Caja, on_delete=models.CASCADE, db_column="codCaja")
	detalleEgr = models.CharField(max_length=100)
	fechaEgr = models.DateField()
	monto = models.DecimalField(max_digits=6, decimal_places=2)