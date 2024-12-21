export default {
  global: {
    componenteFormativo:
      'Desarrollo de <em>software</em>: programación, arquitectura y herramientas',
    descripcionCurso:
      'Este componente formativo aborda los fundamentos del desarrollo de <em>software</em>, explorando desde los conceptos básicos de programación hasta las herramientas y entornos de desarrollo modernos. Cubre arquitectura de <em>software</em>, control de versiones y prácticas colaborativas, proporcionando una base sólida para el desarrollo de aplicaciones robustas y mantenibles, sin adentrarse en programación orientada a objeto.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de lenguajes de programación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Introducción a los lenguajes de programación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Sintaxis y semántica básica',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Variables, tipos de datos y estructuras de control',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: '<em>Arrays</em> y estructuras de datos fundamentales',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Funciones y modularidad básica',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Arquitectura y diseño de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Fundamentos de arquitectura de <em>software</em>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Patrones de diseño estructurales básicos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Arquitecturas web modernas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'APIs y servicios web RESTful',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Principios SOLID y buenas prácticas',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Control de versiones y desarrollo colaborativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Fundamentos de Git',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Flujos de trabajo con repositorios',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Branching y merging',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Herramientas colaborativas y gestión de proyectos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Integración continua básica',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas y entornos de desarrollo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'IDEs y editores de código',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: '<em>Debugging</em> y <em>testing</em> básico',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Gestión de dependencias y paquetes',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: '<em>Deployment</em> y entornos de producción',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Seguridad básica en el desarrollo',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
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
  ],
  glosario: [
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
      referencia: 'Chacon, S., & Straub, B. (2024). Pro Git (3rd ed.). Apress.',
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
}
