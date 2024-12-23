export default {
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
        download: 'downloads/228141_CF04_DU.pdf',
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
  global: {
    Name:
      'Desarrollo de <em>software</em>: programación, arquitectura y herramientas',
    Description:
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
}
