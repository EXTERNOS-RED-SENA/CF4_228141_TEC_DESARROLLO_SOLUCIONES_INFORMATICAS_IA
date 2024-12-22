<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'API (<em>Application Programming Interface</em>)',
          significado:
            'Conjunto de reglas y protocolos que permiten la comunicación entre diferentes componentes de <em>software</em>.',
        },
        {
          termino: 'Branch (Rama)',
          significado:
            'En control de versiones, una línea independiente de desarrollo que permite trabajar en características o correcciones sin afectar el código principal.',
        },
        {
          termino: '<em>Commit</em>',
          significado:
            'Instantánea del código en un momento específico que registra cambios en el repositorio de control de versiones.',
        },
        {
          termino: '<em>Debugging</em>',
          significado:
            'Proceso de identificación y corrección de errores en el código fuente.',
        },
        {
          termino: '<em>Deploy</em> (Despliegue)',
          significado:
            'Proceso de poner una aplicación en producción o hacerla disponible para su uso.',
        },
        {
          termino: 'Git',
          significado:
            'Sistema de control de versiones distribuido diseñado para manejar proyectos de cualquier tamaño con velocidad y eficiencia.',
        },
        {
          termino: 'IDE (<em>Integrated Development Environment</em>)',
          significado:
            'Entorno de desarrollo integrado que proporciona herramientas comprensivas para la programación.',
        },
        {
          termino: '<em>Merge</em> (Fusión)',
          significado:
            'Proceso de combinar cambios de diferentes ramas en el control de versiones.',
        },
        {
          termino: 'Microservicios',
          significado:
            'Arquitectura que estructura una aplicación como un conjunto de servicios pequeños e independientes.',
        },
        {
          termino: '<em>Pipeline</em>',
          significado:
            'Secuencia automatizada de procesos para llevar el código desde el desarrollo hasta la producción.',
        },
        {
          termino: 'Pull Request',
          significado:
            'Solicitud para integrar cambios de una rama a otra, típicamente utilizada para revisión de código.',
        },
        {
          termino: 'REST',
          significado:
            'Estilo de arquitectura de <em>software</em> para sistemas distribuidos, especialmente usado en APIs web.',
        },
        {
          termino: 'Staging Area',
          significado:
            'En Git, área intermedia donde se preparan los cambios antes de confirmarlos.',
        },
        {
          termino: '<em>Testing</em>',
          significado:
            'Proceso de evaluar un sistema o componente para verificar que cumple con los requisitos especificados.',
        },
        {
          termino: 'Versionamiento',
          significado:
            'Sistema para registrar cambios en archivos de código fuente a lo largo del tiempo.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
