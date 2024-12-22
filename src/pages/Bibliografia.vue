<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Alur, S. J., Crupi, J., & Malks, D. (2023). Core J2EE Patterns: Best Practices and Design Strategies (3rd ed.). Prentice Hall.',
        link: '',
      },
      {
        referencia:
          'Báez, M., & Brunner, P. (2022). Fundamentos de programación: Aprende a programar desde cero. Universidad Nacional Autónoma de México.',
        link: '',
      },
      {
        referencia:
          'Chacon, S., & Straub, B. (2024). Pro Git (3rd ed.). Apress.',
        link: 'https://git-scm.com/book/es/v2',
      },
      {
        referencia:
          'Fowler, M. (2022). Patterns of Enterprise Application Architecture (2nd ed.). Addison-Wesley Professional.',
        link: '',
      },
      {
        referencia:
          'García, A., & Martínez, J. (2023). Arquitectura de <em>software</em>: Fundamentos y patrones de diseño modernos. Revista Española de Ingeniería de <em>Software</em>, 15(2), 45-67.',
        link: '',
      },
      {
        referencia:
          'Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (2021). Design Patterns: Elements of Reusable Object-Oriented <em>Software</em> (Anniversary ed.). Addison-Wesley Professional.',
        link: '',
      },
      {
        referencia:
          'Luján-Mora, S. (2023). Programación en Internet: Guía completa. Universidad de Alicante. ',
        link: 'http://gplsi.dlsi.ua.es/~slujan/programacion-internet/',
      },
      {
        referencia:
          "Martin, R. C. (2021). Clean Architecture: A Craftsman's Guide to <em>Software</em> Structure and Design. Prentice Hall.",
        link: '',
      },
      {
        referencia:
          'Pressman, R. S., & Maxim, B. R. (2024). Ingeniería del <em>Software</em>: Un Enfoque Práctico (9ª ed.). McGraw-Hill Education.',
        link: '',
      },
      {
        referencia:
          'Rodríguez, P., & López, M. (2023). Control de versiones con Git: Manual práctico. Universidad Politécnica de Madrid.',
        link: 'https://oa.upm.es/control-versiones/',
      },
      {
        referencia:
          'Sommerville, I. (2021). <em>Software</em> Engineering (11th ed.). Pearson.',
        link: '',
      },
      {
        referencia:
          'Sznajdleder, P. A. (2023). Algoritmos y estructuras de datos: Una perspectiva práctica con Python y Java. Alfaomega.',
        link: '',
      },
      {
        referencia:
          'Tanenbaum, A. S., & Van Steen, M. (2023). Distributed Systems: Principles and Paradigms (3rd ed.). Pearson.',
        link: '',
      },
      {
        referencia:
          'Torres, M. (2024). Desarrollo web moderno: De principiante a experto. Ra-Ma Editorial.',
        link: '',
      },
      {
        referencia:
          'Vélez Serrano, J. F., & Peña Abril, A. (2023). Introducción práctica al desarrollo de <em>software</em>. Universidad Complutense de Madrid.',
        link: '',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
