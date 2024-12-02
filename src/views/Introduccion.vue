<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      .col-lg(data-aos="zoom-in")
        .row
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src="@/assets/curso/intro1.png")
          .col-lg
            .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#E6F0FC;")
              p.mb-0 El desarrollo de #[em software] moderno requiere una comprensión profunda de principios fundamentales, arquitecturas robustas y herramientas colaborativas que permitan crear aplicaciones escalables y mantenibles. La capacidad de escribir código eficiente y trabajar en equipo son habilidades esenciales en el panorama tecnológico actual.
        p.mt-4.mb-0 Este componente aborda de manera integral los fundamentos del desarrollo de #[em software], partiendo desde los conceptos básicos de programación y estructuras de datos, hasta las arquitecturas modernas y entornos de desarrollo. Se exploran patrones de diseño estructurales, prácticas de control de versiones con Git, y herramientas esenciales para el desarrollo colaborativo, excluyendo intencionalmente la programación orientada a objetos, que se trata en otro componente.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro2.png")
    
    .row.mt-4(data-aos="fade-up" data-aos-duration="750")
      .col-lg.d-none.d-lg-block
        .row
          .col-lg-auto.d-none.d-lg-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/intro3.png")
          .col-lg
            .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#fff;border-radius:11px;border:3px #1169E3 solid;")
              p.mb-0 A lo largo del material, se combina la teoría con ejemplos prácticos y visuales, proporcionando una base inicial para que los estudiantes desarrollen aplicaciones robustas y escalables. Se enfatiza la importancia de las buenas prácticas de desarrollo, la colaboración efectiva y el uso adecuado de herramientas modernas, elementos clave para el éxito en proyectos de #[em software] reales.
    
    .row.mt-4
      .col-lg(data-aos="zoom-in")
        .p-4.p-md-3.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#EDE9EC;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/intro4.svg")
            .col-md(style="place-self:center;")
              p.mb-0 El desarrollo de #[em software] moderno requiere una comprensión profunda de principios fundamentales, arquitecturas robustas y herramientas colaborativas que permitan crear aplicaciones escalables y mantenibles. La capacidad de escribir código eficiente y trabajar en equipo son habilidades esenciales en el panorama tecnológico actual.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro5.svg")
    
    p.mt-4(data-aos="fade-right") ¡Te invitamos a explorar los fundamentos, arquitecturas y herramientas que te permitirán desarrollar #[em software] de calidad, trabajando colaborativamente y aplicando las mejores prácticas de la industria!

    figure.mt-4(data-aos="zoom-in-up" data-aos-duration="700")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/SCDLNYtY6ZA" title="Desarrollo de software programación, arquitectura y herramientas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
