<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Control de versiones y desarrollo colaborativo
    
    .row
      .col-md-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/1.svg")
      .col-md(style="place-self:center;" data-aos="fade-left")
        p.mb-0 El control de versiones es una parte fundamental del desarrollo de #[em software] moderno, permitiendo a los equipos trabajar de manera eficiente y coordinada en proyectos complejos. Este capítulo explora las herramientas y prácticas que hacen posible el desarrollo colaborativo, con especial énfasis en Git, el sistema de control de versiones más utilizado en la actualidad.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_1 3.1 Fundamentos de Git
    
    .row
      .col-lg(data-aos="fade-right")
        p Git es un sistema de control de versiones distribuido que permite realizar un seguimiento de los cambios en el código fuente durante el desarrollo de #[em software]. A diferencia de los sistemas centralizados anteriores, Git proporciona a cada desarrollador una copia completa del repositorio, lo que permite trabajar de manera offline y realizar operaciones de manera más eficiente.
        .p-4.mt-4(style="background-color:#E6F0FC;border-radius:7px;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/2.svg")
            .col-md(style="place-self:center;")
              p.mb-0 Los conceptos fundamentales de Git incluyen el área de trabajo (#[em working directory]), el área de preparación (#[em staging area]) y el repositorio local. Cada uno de estos espacios cumple un papel específico en el flujo de trabajo de Git:
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/3.png")
    
    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-down")
        h5 Tabla 2.
        span Espacios de trabajo en Git y sus características principales
      .tabla-a.color-acento-contenido(data-aos="fade-up")
        table
          caption.mt-3.fw-normal #[strong Fuente:] OIT, 2024.
          thead(style="border:0;")
            tr.text-center(style="background-color:#13DE61;")
              th(style="border:0;border-right:1px #AFAFAF solid;") Espacio
              th(style="border:0;border-right:1px #AFAFAF solid;") Descripción	
              th(style="border:0;border-right:1px #AFAFAF solid;") Comandos principales
              th(style="border:0;") Uso típico
          tbody.text-center
            tr(style="background-color:#F6F6F6;")
              td(style="border:0;border-right:1px #AFAFAF solid;") #[em Working Directory]
              td(style="border:0;border-right:1px #AFAFAF solid;") Directorio actual donde se realizan los cambios
              td(style="border:0;border-right:1px #AFAFAF solid;") git status, git add
              td(style="border:0;") Desarrollo activo
            tr(style="background-color:#FFF;")
              td(style="border:0;border-right:1px #AFAFAF solid;") #[em Staging Area]
              td(style="border:0;border-right:1px #AFAFAF solid;") Área intermedia donde se preparan los cambios
              td(style="border:0;border-right:1px #AFAFAF solid;") git add, git reset
              td(style="border:0;") #[em Revisión pre-commit]
            tr(style="background-color:#F6F6F6;")
              td(style="border:0;border-right:1px #AFAFAF solid;") #[em Local Repository]
              td(style="border:0;border-right:1px #AFAFAF solid;") Almacén de todos los #[em commits] realizados
              td(style="border:0;border-right:1px #AFAFAF solid;") git commit, git log
              td(style="border:0;") Historial de cambios
            tr(style="background-color:#FFF;")
              td(style="border:0;border-right:1px #AFAFAF solid;") #[em Remote Repository]
              td(style="border:0;border-right:1px #AFAFAF solid;") Copia compartida en un servidor
              td(style="border:0;border-right:1px #AFAFAF solid;") git push, git pull
              td(style="border:0;") Colaboración
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_2 3.2 Flujos de trabajo con repositorios
    
    .row
      .col-lg(data-aos="fade-right")
        p Los flujos de trabajo en Git definen cómo los equipos organizan sus procesos de desarrollo y colaboración. El flujo de trabajo más común es Git Flow, que establece una estructura clara para el manejo de características, correcciones y releases. Sin embargo, existen otros modelos como GitHub Flow o GitLab Flow, cada uno adaptado a diferentes necesidades y contextos de desarrollo.
        .p-4.mt-4(style="background-color:#E6F0FC;border-radius:7px;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/4.svg")
            .col-md(style="place-self:center;")
              p Un flujo de trabajo típico involucra los siguientes pasos:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span #[strong Crear] una rama para una nueva característica.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span #[strong Realizar] cambios y commits locales.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span #[strong Publicar] la rama en el repositorio remoto.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span #[strong Crear] un #[em pull request] para revisión.
                li.d-flex.mb-0
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span #[strong Fusionar] los cambios aprobados en la rama principal.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/5.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_3 3.3 #[em Branching] y #[em merging]
    
    .row
      .col-lg(data-aos="fade-right")
        p El #[em branching] (ramificación) es una de las características más poderosas de Git, permitiendo a los desarrolladores trabajar en diferentes características o correcciones de manera aislada. Cada rama representa una línea independiente de desarrollo que puede evolucionar sin afectar a las demás.
        .d-none.d-lg-block
          figure
            img(src="@/assets/curso/tema3/6.png")
      .col-lg.col-md-10.m-auto(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/7.svg")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_4 3.4 Herramientas colaborativas y gestión de proyectos
    
    .row
      .col-lg(data-aos="fade-right")
        p El desarrollo moderno de #[em software] requiere más que solo control de versiones. Las herramientas colaborativas complementan a Git proporcionando capacidades adicionales para la gestión de proyectos, revisión de código y comunicación del equipo. Algunas herramientas populares incluyen:
        .p-4.mt-4(style="background-color:#E6F0FC;border-radius:7px;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/8.svg")
            .col-md(style="place-self:center;")
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span Sistemas de gestión de issues (Jira, GitHub Issues).
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span Herramientas de revisión de código (GitHub Pull Requests, GitLab Merge Requests).
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span Plataformas de documentación colaborativa (Confluence, Wiki).
                li.d-flex.mb-0
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span Herramientas de comunicación en tiempo real (Slack, Microsoft Teams).
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/9.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_5 3.5 Integración continua básica
    
    .row
      .col-lg(data-aos="fade-right")
        p La integración continua (CI) es una práctica de desarrollo que requiere que los desarrolladores integren su código en un repositorio compartido varias veces al día. Cada integración se verifica mediante una construcción automatizada que incluye pruebas, lo que permite detectar errores rápidamente.
        .p-4.mt-4.mb-4(style="background-color:#E6F0FC;border-radius:7px;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/10.svg")
            .col-md(style="place-self:center;")
              p Los elementos clave de un sistema de CI incluyen:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span.fw-bold Un repositorio de código centralizado.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span.fw-bold Automatización de la construcción.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span.fw-bold Pruebas automatizadas.
                li.d-flex
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span.fw-bold Un servidor de integración continua.
                li.d-flex.mb-0
                  i.fas.fa-check-circle(style="color:#1169E3;")
                  span.fw-bold Convenciones de trabajo acordadas.
        .d-none.d-lg-block
          figure
            img(src="@/assets/curso/tema3/11.png")
      .col-lg-auto.col-md-7.m-auto(data-aos="fade-left")
        .tarjeta.overflow-hidden(style="background-color: #110628 ")
          .p-3.mb-5(style="background-color: #3A1D71")
            img(src='@/assets/curso/iconos.svg', alt='' style='width: 80px;')
          pre.p-5.text-white.py-2.mb-4
            code # Ejemplo de pipeline CI básico
              |pipeline:
              |  stages:
              |    - build
              |    - test
              |    - deploy

              |  build:
              |    script:
              |      - npm install
              |      - npm run build

              |  test:
              |    script:
              |      - npm run test

              |  deploy:
              |    script:
              |      - if [ "$BRANCH" = "main" ]; then
              |        npm run deploy
              |        fi
        //- figure
        //-   img(src="@/assets/curso/tema3/12.svg")
    
    p.mt-4(data-aos="fade-up") El desarrollo colaborativo exitoso requiere una combinación de herramientas técnicas y prácticas organizacionales efectivas. La adopción de Git y las prácticas modernas de desarrollo colaborativo no solo mejora la calidad del código, sino que también facilita la escalabilidad de los equipos y proyectos.

    .row.mt-4
      .col-lg(data-aos="fade-right")
        p En el próximo capítulo, exploraremos las herramientas y entornos de desarrollo que complementan estas prácticas colaborativas y nos ayudan a ser más productivos en nuestro trabajo diario como desarrolladores.
        .p-4.p-md-3.mt-4(style="background-color:#E6F0FC;border-radius:7px;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/13.svg")
            .col-md(style="place-self:center;")
              p.mb-0 La clave para el éxito en el desarrollo colaborativo no solo radica en el dominio de las herramientas, sino también en la adopción de buenas prácticas de comunicación y coordinación entre los miembros del equipo. La documentación clara, las convenciones de código consistentes y los procesos bien definidos son tan importantes como las herramientas técnicas que utilizamos.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/14.png")




</template>

<script>
export default {
  name: 'Tema3',
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
