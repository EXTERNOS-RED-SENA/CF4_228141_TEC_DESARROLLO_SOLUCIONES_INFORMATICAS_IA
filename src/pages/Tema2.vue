<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Arquitectura y diseño de #[em software]
    
    .row
      .col-md-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/1.svg")
      .col-md(style="place-self:center;" data-aos="fade-left")
        p.mb-0 La arquitectura de #[em software] constituye la columna vertebral de cualquier sistema informático exitoso. Este capítulo explora los principios fundamentales, patrones y prácticas que guían el diseño de sistemas robustos y escalables. La arquitectura no solo se trata de diagramas y estructuras, sino de decisiones que impactan directamente en la calidad, mantenibilidad y evolución del #[em software].
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_1 2.1 Fundamentos de arquitectura de #[em software]
    
    .row
      .col-lg(data-aos="fade-right")
        .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#E6F0FC;border-radius:7px;")
          p.mb-0 La arquitectura de #[em software] es el conjunto de decisiones fundamentales sobre la organización de un sistema, incluyendo la selección de elementos estructurales, sus interfaces, comportamientos y la composición de estos elementos en subsistemas más grandes. Una buena arquitectura debe equilibrar múltiples aspectos como el rendimiento, la seguridad, la usabilidad y la mantenibilidad.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/2.png")

    .cont_2_1.mt-5
      .col-xl-11.ms-auto
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          h5 Figura 1.
          span Componentes clave de la arquitectura de #[em software]
        .row
          .col-lg-6.mb-4.mb-lg-0(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/tema2/4.svg" alt='La Figura 1 se denomina «Componentes clave de la arquitectura de software». Es una infografía circular donde en el centro se encuentra el título "Arquitectura de Software" rodeado por cinco círculos interconectados que representan: escalabilidad, mantenibilidad, confiabilidad, seguridad y rendimiento. Los círculos se superponen en parte sobre el círculo central simbolizando la interrelación entre estos componentes.')
            figcaption.mt-3.fw-normal #[strong Fuente:] OIT, 2024.
          .col-lg-6(data-aos="fade-left")
            .h-100.p-4(style="background-color:#DED5DB;border-radius:5px;")
              p Los atributos de calidad fundamentales que toda arquitectura debe considerar son:
              ul.lista-ul.mb-0
                li.d-flex.bg-white.p-2(style="border-radius:5px;")
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span #[strong Escalabilidad:] capacidad de manejar crecimiento en carga y usuarios.
                li.d-flex.bg-white.p-2(style="border-radius:5px;")
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span #[strong Mantenibilidad:] facilidad para realizar cambios y correcciones.
                li.d-flex.bg-white.p-2(style="border-radius:5px;")
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span #[strong Confiabilidad:] consistencia en el funcionamiento bajo condiciones diversas.
                li.d-flex.bg-white.p-2(style="border-radius:5px;")
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span #[strong Seguridad:] protección contra vulnerabilidades y amenazas.
                li.d-flex.bg-white.p-2.mb-0(style="border-radius:5px;")
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span #[strong Rendimiento:] eficiencia en el uso de recursos y tiempo de respuesta.

      
      Separador

      .titulo-segundo(data-aos="flip-up")
        h2#t_2_2 2.2 Patrones de diseño estructurales básicos
      
      .col-xl-8.m-auto.col-lg-11
        .row
          .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
            p.mb-0  Los patrones de diseño estructurales son soluciones probadas a problemas comunes en el diseño de #[em software]. #[strong Estos patrones nos proporcionan plantillas para resolver problemas que pueden reutilizarse en muchas situaciones diferentes]. Por ejemplo, consideremos el patrón Fachada (#[em Facade]), que simplifica una interfaz compleja:
            .d-none.d-lg-block.mt-4
              figure
                img(src="@/assets/curso/tema2/5.svg")
          .col-lg.m-auto.col-11.col-md-7(data-aos="fade-up")
            .tarjeta.overflow-hidden(style="background-color: #110628 ")
              .p-3.mb-5(style="background-color: #3A1D71")
                img(src='@/assets/curso/iconos.svg', alt='' style='width: 80px;')
              pre.p-5.text-white.py-2.mb-4
                code # Ejemplo de patrón Fachada
                  |class SubsistemaA:
                  | def operacion_a(self):
                  |   return "Operación A"

                  |class SubsistemaB:
                  |   def operacion_b(self):
                  |       return "Operación B"

                  |class Fachada:
                  |   def __init__(self):
                  |       self.subsistema_a = SubsistemaA()
                  |       self.subsistema_b = SubsistemaB()

                  |   def operacion_simple(self):
                  |       resultado = []
                  |       resultado.append(self.subsistema_a.operacion_a())
                  |       resultado.append(self.subsistema_b.operacion_b())
                  |       return " + ".join(resultado)


            //- figure
            //-   img(src="@/assets/curso/tema2/6.svg")

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_3 2.3 Arquitecturas #[em web] modernas
    
    .row
      .col-lg(data-aos="fade-right")
        .p-4(style="background-color:#EDE9EC;border-radius:7px;")
          p.mb-0 Las arquitecturas #[em web] modernas han evolucionado significativamente con la adopción de microservicios, contenedores y computación en la nube. La arquitectura monolítica tradicional ha dado paso a sistemas distribuidos más flexibles y escalables. Un aspecto medular es la separación de responsabilidades entre el #[em frontend] y el #[em backend], permitiendo que cada componente evolucione de manera independiente.
        .row.mt-4
          .col-md-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/7.svg")
          .col-md(style="place-self:center;")
            p.mb-0 La arquitectura de microservicios, por ejemplo, descompone una aplicación en servicios pequeños e independientes que se comunican a través de APIs bien definidas. Esto permite una mayor flexibilidad en el desarrollo, despliegue y escalamiento de componentes individuales. Sin embargo, también introduce complejidad en términos de coordinación, monitoreo y gestión de datos distribuidos.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/8.svg")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_4 2.4 APIs y servicios #[em web] RESTful
    
    .row
      .col-lg(data-aos="fade-right")
        p Las APIs (Interfaces de Programación de Aplicaciones) RESTful se han convertido en el estándar de facto para la comunicación entre sistemas distribuidos. REST (Representational State Transfer) proporciona un conjunto de principios arquitectónicos que enfatizan la escalabilidad, la independencia entre componentes y la uniformidad de interfaces. 
        p.mb-0 Los principios fundamentales de una API RESTful incluyen:
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/9.png")
    
    .row.mt-4
      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .cont_2_2.h-100.p-4
          figure.mb-2
            img(src="@/assets/curso/tema2/10.svg")
          p.fw-bold Interfaz uniforme
          p Uso consistente de URIs y métodos HTTP.
      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .cont_2_2.h-100.p-4
          figure.mb-2
            img(src="@/assets/curso/tema2/11.svg")
          p.fw-bold Sin estado
          p Cada solicitud contiene toda la información necesaria.
      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .cont_2_2.h-100.p-4
          figure.mb-2
            img(src="@/assets/curso/tema2/12.svg")
          p.fw-bold Cacheable
          p Las respuestas deben indicar si pueden ser cacheadas.
      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .cont_2_2.h-100.p-4
          figure.mb-2
            img(src="@/assets/curso/tema2/13.svg")
          p.fw-bold Sistema en capas
          p El cliente no necesita saber la complejidad detrás de cada solicitud.

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_5 2.5 Principios SOLID y buenas prácticas
    
    .col-xl-10.m-auto
      p(data-aos="fade-up") Los principios SOLID son fundamentales para crear #[em software] mantenible y adaptable al cambio. Estos principios, introducidos por Robert C. Martin, proporcionan pautas para estructurar funciones y clases de manera efectiva. Aunque originalmente se concibieron para la programación orientada a objetos, sus conceptos subyacentes son valiosos para cualquier paradigma de programación.
      p(data-aos="fade-up") Un ejemplo práctico de aplicación del Principio de Responsabilidad Única sería separar la lógica de negocio de la lógica de acceso a datos:

      .row.mt-4
        .col-lg.mb-4.mb-lg-0.m-auto.col-md-7(data-aos="fade-right")
          figure  
            img(src="@/assets/curso/tema2/14.svg")
        .col-lg(data-aos="fade-left")
          .d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema2/15.svg")
          .p-4.mt-lg-4(style="background-color:#CFE1FA;border-radius:10px;")
            p.mb-0 La arquitectura y el diseño de #[em software] son disciplinas en constante evolución que requieren un equilibrio entre principios teóricos sólidos y consideraciones prácticas. En el siguiente capítulo, exploraremos cómo estos conceptos se aplican en el contexto del control de versiones y el desarrollo colaborativo.


        

</template>

<script>
export default {
  name: 'Tema2',
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
