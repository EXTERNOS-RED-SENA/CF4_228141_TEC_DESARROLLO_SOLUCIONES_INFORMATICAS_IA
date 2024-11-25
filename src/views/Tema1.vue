<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de lenguajes de programación
    
    .row
      .col-md-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/1.svg")
      .col-md(style="place-self:center;" data-aos="fade-left")
        p.mb-0 Los lenguajes de programación son la base fundamental para el desarrollo de #[em software] y constituyen el medio a través del cual los programadores pueden comunicar instrucciones precisas a las computadoras. #[strong En este capítulo exploraremos los conceptos esenciales que todo desarrollador debe comprender para iniciar su camino en la programación], independientemente del lenguaje específico que decida utilizar en el futuro. La comprensión sólida de estos fundamentos facilita el aprendizaje de cualquier lenguaje de programación y sienta las bases para el desarrollo de #[em software] robusto y mantenible.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1 Introducción a los lenguajes de programación
    
    .row
      .col-lg(data-aos="fade-right")
        .p-4(style="background-color:#DFE9EA;border-radius:7px;")
          p.mb-0 Un lenguaje de programación es un sistema estructurado de comunicación que permite dar instrucciones a una computadora mediante un conjunto de reglas sintácticas y semánticas. Estos lenguajes han evolucionado significativamente desde sus inicios, pasando de ser muy cercanos al lenguaje de máquina a convertirse en herramientas más intuitivas y cercanas al lenguaje humano.
        .row.mt-4
          .col-md-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/2.svg")
          .col-md(style="place-self:center;")
            p.mb-0 La historia de los lenguajes de programación es fascinante y refleja la evolución de la computación misma. Desde el código máquina puro hasta los modernos lenguajes de alto nivel, cada evolución ha buscado hacer la programación más accesible y productiva. Esta evolución continúa hoy en día, con nuevos lenguajes y paradigmas que emergen para satisfacer las necesidades cambiantes de la industria del #[em software].
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/3.png")



      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
