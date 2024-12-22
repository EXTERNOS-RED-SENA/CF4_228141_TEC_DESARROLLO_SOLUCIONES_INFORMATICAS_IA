<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .cont_sintesis
      .row.p-relative
        .col-lg(data-aos="zoom-in")
          .row
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/sintesis2.svg")
            .col-lg
              .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#E6F0FC;")
                p.mb-0 El diagrama representa la estructura integral del componente sobre desarrollo de #[em software], centrado en los fundamentos, arquitectura, control de versiones y entornos de desarrollo. Partiendo del concepto central del desarrollo de #[em software], se ramifica en cuatro áreas esenciales: fundamentos de lenguajes de programación, arquitectura de #[em software], control de versiones y entornos de desarrollo. Cada una de estas áreas incorpora subtemas específicos que conforman los elementos fundamentales para comprender y aplicar eficazmente las prácticas modernas de desarrollo de #[em software].
          p.mt-4.mb-0 Esta organización ilustra el flujo lógico del proceso de desarrollo de #[em software]. Comienza con la comprensión de los fundamentos de programación, proporcionando una base sólida en sintaxis, control de flujo y estructuras de datos. Luego, profundiza en la arquitectura de #[em software], abordando patrones de diseño y principios fundamentales que son esenciales para construir aplicaciones robustas y escalables. A continuación, se enfoca en el control de versiones con Git y las prácticas de desarrollo colaborativo, herramientas estratégicas para el trabajo en equipo y la gestión eficiente del código. Finalmente, aborda los entornos de desarrollo y las herramientas modernas, destacando la importancia del testing, debugging y las consideraciones de seguridad en el despliegue de aplicaciones.
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/sintesis3.png")
      
      .row.mt-4.p-relative(data-aos="fade-up" data-aos-duration="750")
        .col-lg.d-none.d-lg-block
          .row
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/sintesis4.png")
            .col-lg
              .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#fff;border-radius:11px;border:3px #1169E3 solid;")
                p.mb-0 El diagrama funciona como una hoja de ruta visual para comprender la estructura y el alcance del componente, permitiendo al estudiante visualizar rápidamente la progresión del aprendizaje y las conexiones entre los diferentes temas. Los elementos transversales (desarrollo colaborativo, buenas prácticas y herramientas modernas) se entrelazan con todas las áreas, enfatizando su importancia en todo el proceso de desarrollo. Se sugiere utilizarlo como referencia para organizar el estudio y entender cómo se integran los diversos aspectos en el desarrollo de #[em software] moderno, garantizando la creación de aplicaciones mantenibles y escalables en entornos profesionales.

      .row.justify-content-center.mt-5
        .col-lg-10.mb-5.p-relative
          figure(data-aos="fade-up" data-aos-duration="850")
            img(src="@/assets/curso/sintesis.svg", alt='Se denomina «Síntesis temática del componente», es un mapa mental con el tema central “Desarrollo de software: programación, arquitectura y herramientas", del cual se desprenden cuatro ramas principales —fundamentos lenguajes, arquitectura software, control versiones y entornos desarrollo— cada una detallada con sus subtemas específicos.')
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
