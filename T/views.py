# Django
from django.shortcuts import render
import datetime
# Models
from T.models import *

from .forms import *

# Consultas
def get_projects():
  proyecto = Proyecto.objects.all()
  print(proyecto)
  return proyecto

def get_project(codProject):
  project = Proyecto.objects.get(codPyto=codProject)
  return project

def get_rutas_project(codProject):
  rutas = Ruta.objects.filter(codPyto=codProject)
  return rutas

def get_caja(codPyto):
  caja = Caja.objects.filter(codPyto=codPyto)
  return caja

def get_caja2(codCaja):
  caja = Caja.objects.get(codCaja=codCaja)
  return caja

def get_tipo(codTipo):
  tipo = Tipo.objects.get(codTipo=codTipo)
  return tipo

def get_ingresos(codCaja):
  ingresos = Ingreso.objects.filter(codCaja=codCaja)
  return ingresos

def get_egresos(codCaja):
  egresos = Egreso.objects.filter(codCaja=codCaja)
  return egresos

def get_ruta(codRuta):
  ruta = Ruta.objects.filter(codRutaPy=codRuta).values()
  return ruta[0]

def get_tramos_ruta(codRuta):
  tramos = Tramo.objects.filter(codRutaPy=codRuta)
  return tramos

def get_tramo(codTramo):
  tramo = Tramo.objects.get(codTramoPy=codTramo)
  return tramo

def get_cajas_tipo(tipo):
  caja  = Caja.objects.filter(tipo)
  return caja


# Controller
def proyectos(request):
  projects = get_projects()
  return render(request, 'proyecto.html', {'projects': projects})

def rutas_by_project(request, cod_project):
  project = get_project(cod_project)
  tipocaja = Tipo.objects.all()    #reemplazando
  cajas = get_caja(tipocaja)
  form=CajaForm()
  return render(request, 'rutas.html', {'project': project, 'tipo': tipocaja, 'form':form})

#reemplazando
def flujos(request, cod_project):
  project = get_project(cod_project)
  tipocaja = Tipo.objects.all()   
  caja = get_caja(cod_project); 
  form=CajaForm()
   #Caja
  return render(request, 'prueba_caja.html', {'project': project, 'tipo': tipocaja,'caja':caja , 'form':form})

def flujotipo(request,cod_project,cod_caja,cod_tipo):
  caja = get_caja2(cod_caja)
  ingresos= get_ingresos(cod_caja)
  totalV=0
  totalC=0
  totalA=0
  egresos= get_egresos(cod_caja)
  totalMe=0
  totalIm=0
  totalMa=0
  totalPu=0

  for ingreso in ingresos:
    if ingreso.detalleIng=="Ventas en Efectivo":
      totalV+=ingreso.monto
    if ingreso.detalleIng=="Cobros a crédito":
      totalC+=ingreso.monto
    if ingreso.detalleIng=="cobros de activos":
      totalA+=ingreso.monto
    
    print(ingreso.fechaIng)


  for egreso in egresos:
    if egreso.detalleEgr=="CompraMercancia":
      totalMe+=egreso.monto
    if egreso.detalleEgr=="PagosImpuestos":
      totalIm+=egreso.monto
    if egreso.detalleEgr=="PagoMantenimiento":
      totalMa+=egreso.monto
    if egreso.detalleEgr=="PagoPublicidad":
      totalPu+=egreso.monto

    print(egreso.fechaEgr)


  tipo = get_tipo(cod_tipo)
  project = get_project(cod_project)
  return render(request, 'prueba_tipo.html', {'project': project, 'caja': caja,'tipo':tipo, 'ingresos':ingresos,'totalV':totalV,'totalC':totalC,'totalA':totalA,'egresos':egresos,'totalMe':totalMe,'totalIm':totalIm,'totalMa':totalMa,'totalPu':totalPu})

def crearRuta(request):
  form=Rutaform()
  contexto={
    'form':form
  }
  return render(request,'rutas.html',contexto)
 

def tramos_by_ruta(request, cod_ruta):
  tramos = get_tramos_ruta(cod_ruta)
  ruta = get_ruta(cod_ruta)
  form = TramoForm()
  project = get_project(ruta['codPyto_id'])
  return render(request, 'tramos.html', {'tramos': tramos, 'ruta': ruta, 'project': project, 'form': form })
