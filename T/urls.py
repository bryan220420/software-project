from django.urls import path
from . import views

urlpatterns = [
    path('', views.proyectos),
    path('rutas/<int:cod_project>', views.rutas_by_project),
    path('tramos/<int:cod_ruta>', views.tramos_by_ruta),
    path('flujos/<int:cod_project>', views.flujos,name="flujos"),
    path('flujotipo/<int:cod_project>/<int:cod_caja>/<int:cod_tipo>', views.flujotipo,name="flujotipo"),
]