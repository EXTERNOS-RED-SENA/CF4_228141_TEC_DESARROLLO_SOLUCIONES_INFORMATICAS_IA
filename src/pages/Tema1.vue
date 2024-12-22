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
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/3.png")
    
    p.mt-4(data-aos="fade-right") Los lenguajes de programación se pueden clasificar según diferentes criterios, siendo uno de los más comunes el nivel de abstracción que ofrecen. A continuación, se presenta una tabla comparativa de los principales tipos de lenguajes según su nivel de abstracción:
    
    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-down")
        h5 Tabla 1.
        span Clasificación de lenguajes de programación
      .tabla-a.color-acento-contenido(data-aos="fade-up")
        table
          caption.mt-3.fw-normal #[strong Fuente:] OIT, 2024.
          thead(style="border:0;")
            tr.text-center(style="background-color:#13DE61;")
              th(style="border:0;border-right:1px #AFAFAF solid;") Nivel
              th(style="border:0;border-right:1px #AFAFAF solid;") Tipo de lenguaje	
              th(style="border:0;border-right:1px #AFAFAF solid;") Características
              th(style="border:0;border-right:1px #AFAFAF solid;") Ejemplos
              th(style="border:0;") Casos de uso típicos
          tbody.text-center
            tr(style="background-color:#F6F6F6;")
              td(style="border:0;border-right:1px #AFAFAF solid;") Bajo nivel
              td(style="border:0;border-right:1px #AFAFAF solid;") Lenguaje de máquina
              td(style="border:0;border-right:1px #AFAFAF solid;") Instrucciones binarias directas
              td(style="border:0;border-right:1px #AFAFAF solid;") Código binario (0s y 1s)
              td(style="border:0;") Programación de microprocesadores
            tr(style="background-color:#FFF;")
              td(style="border:0;border-right:1px #AFAFAF solid;") Bajo nivel
              td(style="border:0;border-right:1px #AFAFAF solid;") Ensamblador
              td(style="border:0;border-right:1px #AFAFAF solid;") Representación simbólica del lenguaje máquina
              td(style="border:0;border-right:1px #AFAFAF solid;") #[em Assembly] x86, ARM
              td(style="border:0;") #[em Drivers], sistemas embebidos
            tr(style="background-color:#F6F6F6;")
              td(style="border:0;border-right:1px #AFAFAF solid;") Medio nivel
              td(style="border:0;border-right:1px #AFAFAF solid;") Lenguajes estructurados
              td(style="border:0;border-right:1px #AFAFAF solid;") Balance entre abstracción y control del #[em hardware]
              td(style="border:0;border-right:1px #AFAFAF solid;") C
              td(style="border:0;") Sistemas operativos, aplicaciones de sistema
            tr(style="background-color:#FFF;")
              td(style="border:0;border-right:1px #AFAFAF solid;") Alto nivel
              td(style="border:0;border-right:1px #AFAFAF solid;") Lenguajes modernos
              td(style="border:0;border-right:1px #AFAFAF solid;") Mayor abstracción, más cercana al lenguaje natural
              td(style="border:0;border-right:1px #AFAFAF solid;") Python, JavaScript
              td(style="border:0;") Desarrollo #[em web], aplicaciones empresariales

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_2 1.2 Sintaxis y semántica básica
    
    .cont_1_1
      .row
        .col-lg(data-aos="fade-right")
          p La sintaxis de un lenguaje de programación define las reglas que determinan cómo se deben combinar los diferentes símbolos y palabras para formar expresiones y sentencias válidas. Al igual que en los idiomas naturales, cada lenguaje de programación tiene su propia sintaxis que debe ser respetada para que el código pueda ser interpretado correctamente.
          .p-4.mt-4(style="background-color:#CFE1FA;border-radius:7px;")
            .row
              .col-md-auto.d-none.d-md-block(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/5.svg")
              .col-md(style="place-self:center;")
                p.mb-0 La semántica, por otro lado, se refiere al significado de estas construcciones sintácticas. Una expresión sintácticamente correcta debe también tener sentido semántico para que el programa funcione como se espera. Por ejemplo, la expresión "5 + 3" es tanto sintáctica como semánticamente correcta, mientras que "5 + /" sería sintácticamente incorrecta, aunque los símbolos individuales sean válidos.
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/6.svg")
      
      .col-xl-10.m-auto.mt-4
        .p-4(style="background-color:#E6FBEE;border-radius:7px;" data-aos="fade-up")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/7.svg")
            .col-md(style="place-self:center;")
              p.mb-0.fw-bold Es importante entender que la sintaxis puede variar significativamente entre diferentes lenguajes de programación, pero los conceptos semánticos suelen ser transferibles. Por ejemplo, un bucle #[em while] puede escribirse de manera diferente en Python que en JavaScript, pero el concepto fundamental de repetición condicional es el mismo en ambos lenguajes.
    
      Separador

      .titulo-segundo(data-aos="flip-up")
        h2#t_1_3 1.3 Variables, tipos de datos y estructuras de control

      .row
        .col-lg(data-aos="fade-right")
          p Las variables son espacios de memoria que nos permiten almacenar datos temporalmente durante la ejecución de un programa. Cada variable tiene un nombre que la identifica y un tipo de dato que determina qué clase de información puede almacenar. Los tipos de datos básicos incluyen números enteros, números decimales, caracteres y valores #[em booleanos].
          .p-4.mt-4(style="background-color:#E6F0FC;border-radius:7px;")
            .row
              .col-md-auto.d-none.d-md-block(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/8.svg")
              .col-md(style="place-self:center;")
                p.mb-0 El manejo adecuado de las variables y sus tipos de datos es necesario para escribir programas eficientes y libres de errores. En algunos lenguajes, los tipos de datos deben declararse explícitamente (tipado estático), mientras que en otros se infieren automáticamente (tipado dinámico). Cada enfoque tiene sus ventajas y desventajas en términos de seguridad y flexibilidad.
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/9.png")
    
    p.mt-4(data-aos="fade-up") Las estructuras de control son construcciones del lenguaje que nos permiten alterar el flujo de ejecución de un programa. Las más fundamentales son las estructuras condicionales (#[em if-else]) y los bucles (#[em while, for]). Estas estructuras nos permiten tomar decisiones y repetir acciones según sea necesario, dotando a nuestros programas de la capacidad de responder de manera diferente según las circunstancias.

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_4 1.4 #[em Arrays] y estructuras de datos fundamentales
    
    .row.p-relative
      .col-xl-4.d-none.d-xl-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/10.png")
      .col-xl-8(data-aos="fade-left")
        p Los #[em arrays], también conocidos como arreglos o vectores, son estructuras de datos que nos permiten almacenar múltiples valores del mismo tipo en una única variable. Representan una de las estructuras de datos más básicas y fundamentales en programación, sirviendo como base para estructuras más complejas.
        .row
          .col-xl
            .p-4.p-lg-3(style="background-color:#E6F0FC;border-radius:7px;")
              .row
                .col-md-auto.d-none.d-md-block
                  figure
                    img(src="@/assets/curso/tema1/11.svg")
                .col-md
                  p.mb-0 Una característica importante de los #[em arrays] es que permiten el acceso aleatorio a sus elementos mediante índices, lo que los hace muy eficientes para ciertas operaciones. Sin embargo, también tienen limitaciones, como su tamaño fijo en muchos lenguajes y la necesidad de mover elementos cuando se realizan inserciones o eliminaciones en posiciones intermedias.
          .col-xl-auto.d-none.d-xl-block
            figure
              img(src="@/assets/curso/tema1/12.svg")
    
      .cont_parrafo_absolute.mt-4.mt-xl-0(style="position:absolute;width:75%;bottom:-15px;")
        p.mb-0.w-100(data-aos="fade-right") En el desarrollo de #[em software], la elección adecuada de las estructuras de datos es determinante para la eficiencia de nuestros programas. Además de los #[em arrays], existen otras estructuras fundamentales como las listas enlazadas, pilas y colas, cada una con sus propias características y casos de uso óptimos. La comprensión de las ventajas y desventajas de cada estructura es esencial para escribir programas eficientes.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_5 1.5 Funciones y modularidad básica
    
    p(data-aos="fade-right") La modularidad es un principio fundamental en la programación que nos permite dividir un programa en partes más pequeñas y manejables llamadas funciones. Una función es un bloque de código que realiza una tarea específica y puede ser reutilizado en diferentes partes del programa.

    .row.mt-4
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/13.png")
      .col-lg(data-aos="fade-left")
        .row
          .col-lg
            .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#E6F0FC;")
              p.mb-0 Las funciones nos ayudan a organizar mejor nuestro código, evitar la repetición y hacer nuestros programas más mantenibles. Cada función debe tener un propósito claro y bien definido, siguiendo el principio de responsabilidad única. Esto significa que una función debe hacer una sola cosa y hacerla bien.
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema1/14.svg")
        p.mt-4.mb-0 El concepto de alcance (#[em scope]) es fundamental en el trabajo con funciones. Las variables pueden tener alcance global o local, y entender estas diferencias es importante para escribir código mantenible y evitar efectos secundarios no deseados. Las buenas prácticas generalmente favorecen el uso de variables locales y la minimización del alcance global.
    
    .row.mt-4
      .col-lg(data-aos="fade-right")
        .p-4.p-lg-3(style="background-color:#EDE9EC;border-radius:16px;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/15.svg")
            .col-md(style="place-self:center;")
              p.mb-0 El uso efectivo de funciones también facilita la depuración de errores, ya que podemos probar y verificar cada función de manera independiente. Además, las funciones bien diseñadas pueden ser reutilizadas en diferentes proyectos, lo que aumenta nuestra productividad como desarrolladores. La capacidad de escribir funciones claras, concisas y reutilizables es una habilidad esencial que todo programador debe desarrollar.
        p.mb-0.mt-4 La comprensión profunda de estos conceptos fundamentales es esencial para cualquier desarrollador de #[em software], ya que constituyen la base sobre la cual se construyen aplicaciones más complejas. En los siguientes capítulos, exploraremos cómo estos conceptos se aplican en el contexto de la arquitectura de #[em software] y el desarrollo de aplicaciones modernas.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/16.png")

      
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
