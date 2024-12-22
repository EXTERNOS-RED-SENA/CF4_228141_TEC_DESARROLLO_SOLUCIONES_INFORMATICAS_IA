<template>
  <div class="curso-main-container complementario">
    <BannerInterno
      icono="far fa-folder-open"
      titulo="Material complementario"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th colspan="3" scope="col">Tema</th>
              <th colspan="5" scope="col">Referencia APA del material</th>
              <th colspan="2" scope="col">Tipo</th>
              <th colspan="2" scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in computedData"
              :key="'complementario-' + index"
            >
              <td
                class="text-start"
                colspan="3"
                scope="row"
                v-html="item.tema"
              ></td>
              <td
                class="text-start"
                colspan="5"
                scope="row"
                v-html="item.referencia"
              ></td>
              <td colspan="2" v-html="item.tipo"></td>
              <td colspan="2">
                <div class="complementario__enlaces">
                  <a
                    v-for="(link, linkIndex) of item.link"
                    :key="linkIndex"
                    class="complementario__btn"
                    :href="link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i
                  ></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: '1. Fundamentos de lenguajes de programación',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2022b, octubre 5). <em>Lenguajes de programación</em>. ',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=QpaLtzMsIFw',
        },
        {
          tema: '1. Fundamentos de lenguajes de programación',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2021a, mayo 4). <em>Introducción a la programación de aplicaciones</em>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=7bu6jnb5q8s',
        },
        {
          tema: '2 .Arquitectura y diseño de software',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2021c, noviembre 26). <em>Diseño de patrones de software: introducción</em>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=sQHRHhsRUoA',
        },
        {
          tema: '2. Arquitectura y diseño de software',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023c, marzo 25). <em>Introducción - Análisis, diseño y arquitectura de software</em>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=gomlgvATlPU',
        },
        {
          tema: '2. Arquitectura y diseño de software',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2022a, agosto 8). <em>Introducción a la arquitectura de software</em>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=plwzcGedFpM',
        },
        {
          tema: '2. Arquitectura y diseño de software',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2021b, julio 1). <em>Componentes de una arquitectura de software</em>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=XrjY2iOVR8o',
        },
        {
          tema: '2. Arquitectura y diseño de software',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2021d, diciembre 10). <em>Patrones de diseño de software</em>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=ZufBcrlUqak',
        },
        {
          tema: '3. Control de versiones y desarrollo colaborativo',
          referencia:
            'Platzi. (2024, 17 agosto). <em>La historia del control de versiones en el código</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=KiZRXFJbG98',
        },
        {
          tema: '4. Herramientas y entornos de desarrollo',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023b, marzo 24). <em>Entornos de desarrollo</em>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=mZo3seNUNFU',
        },
        {
          tema: '4. Herramientas y entornos de desarrollo',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023a, marzo 23). <em>Construcción de algoritmos en un entorno de desarrollo (IDE)</em>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=U0CPktQHSYw',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
