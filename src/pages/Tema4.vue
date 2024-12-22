<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Herramientas y entornos de desarrollo

    .row
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/1.svg")
      .col-lg(data-aos="zoom-in")
        .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#E6FBEE;")
          p.mb-0 El entorno de desarrollo es el espacio donde los programadores pasan la mayor parte de su tiempo, por lo que contar con las herramientas adecuadas y saber utilizarlas eficientemente es indispensable para la productividad. Este capítulo explora los componentes esenciales que conforman un entorno de desarrollo moderno y productivo.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/2.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_4_1 4.1 IDEs y editores de código
    
    .row
      .col-md-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/3.svg")
      .col-md(style="place-self:center;" data-aos="fade-left")
        p.mb-0 Los Entornos de Desarrollo Integrado (IDEs) y los editores de código son las herramientas fundamentales para escribir y modificar código. Mientras que los editores de código son más ligeros y versátiles, los IDEs ofrecen un conjunto más completo de funcionalidades integradas.
    
    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-down")
        h5 Figura 2.
        span Estructura general de un IDE moderno
      figure(data-aos="zoom-in")
        img(src="@/assets/curso/tema4/4.svg" alt="La Figura 2 se denomina «Estructura general de un IDE moderno». Infografía que representa la interfaz típica de un IDE moderno. Muestra una ventana principal dividida en tres paneles: un explorador de archivos a la izquierda, el editor de código en el centro, y un panel de herramientas a la derecha. Se destacan cuatro características principales: resaltado de sintaxis, autocompletado, depurador integrado y control de versiones.")
      figcaption.mt-3.fw-normal #[strong Fuente:] OIT, 2024.

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_4_2 4.2 #[em Debugging] y #[em testing] básico
    
    .row
      .col-lg-7(data-aos="fade-right")
        p El #[em debugging] (depuración) es una habilidad esencial que todo desarrollador debe dominar. Las herramientas modernas de depuración proporcionan capacidades avanzadas para identificar y resolver problemas en el código. El proceso de #[em debugging] efectivo incluye:
        .p-4.mt-4.mb-4(style="background-color:#E6FBEE;border-radius:7px;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema4/5.svg")
            .col-md(style="place-self:center;")
              p El proceso de #[em debugging] efectivo incluye:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span Identificación del problema.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span Reproducción consistente.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span Localización de la causa raíz.
                li.d-flex.mb-0
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span Implementación y verificación de la solución.
        .d-none.d-lg-block
          figure
            img(src="@/assets/curso/tema4/6.png")
      .col-lg-5(data-aos="fade-left")
        .p-4.h-100(style="background-color:#E6F0FC;border-radius:9px;")
          p Las pruebas, por otro lado, ayudan a prevenir errores antes de que ocurran. Un conjunto básico de pruebas debe incluir:
          .col-md-9.col-lg-12.col-12.m-auto
            .tarjeta.overflow-hidden(style="background-color: #110628 ")
              .p-3.mb-5(style="background-color: #3A1D71")
                img(src='@/assets/curso/iconos.svg', alt='' style='width: 80px;')
              pre.p-5.text-white.py-2.mb-4
                code # Ejemplo de pruebas unitarias básicas
                  |import unittest

                  |class CalculadoraTest(unittest.TestCase):
                  |    def setUp(self):
                  |        self.calc = Calculadora()

                  |    def test_suma(self):
                  |        self.assertEqual(self.calc.suma(2, 3), 5)
                  |        self.assertEqual(self.calc.suma(-1, 1), 0)

                  |    def test_division(self):
                  |        with self.assertRaises(ValueError):
                  |            self.calc.division(5, 0)
            //- figure
            //-   img(src="@/assets/curso/tema4/7.svg")
  
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_4_3 4.3 Gestión de dependencias y paquetes
    
    .row
      .col-lg(data-aos="fade-right")
        p La gestión eficiente de dependencias es determinante para mantener proyectos de #[em software] saludables y actualizados. Las herramientas de gestión de paquetes como npm, pip o Maven nos permiten:
        .p-4.mt-4.mb-4(style="background-color:#CFE1FA;border-radius:7px;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema4/8.svg")
            .col-md(style="place-self:center;")
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span Instalar y actualizar dependencias de manera consistente.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span Mantener un registro de las versiones utilizadas.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span Resolver conflictos entre dependencias.
                li.d-flex.mb-0
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span Compartir configuraciones entre equipos.
      .col-lg-auto(data-aos="fade-left")
        .col-md-9.col-lg-12.col-12.m-auto
          figure
            img(src="@/assets/curso/tema4/9.svg")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_4_4 4.4 #[em Deployment] y entornos de producción
    
    p(data-aos="fade-right") La gestión eficiente de dependencias..”  por el siguiente texto “El despliegue de aplicaciones requiere una comprensión clara de los diferentes entornos y sus requisitos específicos. Los entornos típicos incluyen:

    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-down")
        h5 Tabla 3.
        span Características y propósitos de los entornos de desarrollo
      .tabla-a.color-acento-contenido(data-aos="fade-up")
        table
          caption.mt-3.fw-normal #[strong Fuente:] OIT, 2024.
          thead(style="border:0;")
            tr.text-center(style="background-color:#13DE61;")
              th(style="border:0;border-right:1px #AFAFAF solid;") Entorno
              th(style="border:0;border-right:1px #AFAFAF solid;") Propósito	
              th(style="border:0;border-right:1px #AFAFAF solid;") Características
              th(style="border:0;") Consideraciones
          tbody.text-center
            tr(style="background-color:#F6F6F6;")
              td(style="border:0;border-right:1px #AFAFAF solid;") Desarrollo
              td(style="border:0;border-right:1px #AFAFAF solid;") Trabajo local
              td(style="border:0;border-right:1px #AFAFAF solid;") #[em Debugging] habilitado, #[em hot reload]
              td(style="border:0;") Performance no crítica
            tr(style="background-color:#FFF;")
              td(style="border:0;border-right:1px #AFAFAF solid;") Pruebas
              td(style="border:0;border-right:1px #AFAFAF solid;") Verificación QA
              td(style="border:0;border-right:1px #AFAFAF solid;") Datos de prueba, monitoreo
              td(style="border:0;") Similar a producción
            tr(style="background-color:#F6F6F6;")
              td(style="border:0;border-right:1px #AFAFAF solid;") #[em Staging]
              td(style="border:0;border-right:1px #AFAFAF solid;") Pre-producción
              td(style="border:0;border-right:1px #AFAFAF solid;") Configuración idéntica a producción
              td(style="border:0;") Validación final
            tr(style="background-color:#FFF;")
              td(style="border:0;border-right:1px #AFAFAF solid;") Producción
              td(style="border:0;border-right:1px #AFAFAF solid;") Uso real
              td(style="border:0;border-right:1px #AFAFAF solid;") Optimizado, seguro
              td(style="border:0;") Alta disponibilidad
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_4_5 4.5 Seguridad básica en el desarrollo
    
    .row
      .col-lg(data-aos="fade-right")
        p La seguridad debe ser una consideración desde el inicio del desarrollo. Algunas prácticas básicas de seguridad incluyen:
        .p-4.mt-4.mb-4(style="background-color:#CFE1FA;border-radius:7px;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema4/10.svg")
            .col-md(style="place-self:center;")
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span Validación de entradas.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span Sanitización de datos.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span Uso de HTTPS.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span Gestión segura de secretos.
                li.d-flex.mb-0
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span Actualizaciones regulares de dependencias.
        .d-none.d-lg-block
          figure
            img(src="@/assets/curso/tema4/11.png")
      .col-lg-auto(data-aos="fade-left")
        .col-md-9.col-lg-12.col-12.m-auto
          figure
            img(src="@/assets/curso/tema4/12.svg")
    
    p.mt-4(data-aos="fade-right") La configuración y mantenimiento adecuados del entorno de desarrollo es fundamental para la productividad y la calidad del #[em software]. Aunque las herramientas específicas pueden variar según el proyecto o la organización, los principios básicos de desarrollo seguro, #[em testing] y gestión de dependencias son universales.

    .row.mt-4
      .col-lg(data-aos="fade-right")
        .p-4.d-flex.align-content-center.h-100(style="background-color:#CFE1FA;border-radius:7px;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema4/13.svg")
            .col-md(style="place-self:center;")
              p.mb-0 El dominio de estas herramientas y prácticas mejora nuestra eficiencia como desarrolladores y contribuye a la creación de #[em software] más robusto y mantenible. A medida que la tecnología evoluciona, es importante mantenerse actualizado con las nuevas herramientas y mejores prácticas que emergen en la comunidad de desarrollo.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/14.png")



</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
