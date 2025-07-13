export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad:
      'Herramientas tecnológicas para la producción de recursos digitales',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Plataformas de diseño de contenidos digitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Creación de videos educativos y <em>screencasts</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Recomendaciones generales para la creación de videos',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Herramientas para la gamificación y evaluación: Kahoot, Quizizz, Mentimeter',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Diseño de experiencias de aprendizaje inmersivas con realidad aumentada y virtual',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Martínez, M. D. (2015). Plataforma tecnológica construcción de contenidos digitales para un posgrado virtual. Ra Ximhai: revista científica de sociedad, cultura y desarrollo sostenible, 11(4), 369-379.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7915485',
    },
    {
      referencia:
        'López-Meneses, E. C.-S.-P.-G.-M. (s.f.). Aspectos teórico-prácticos del diseño de videos basado en capturas de pantalla. En E. C.-S.-P.-G. López-Meneses, Experiencias pedagógicas e innovación educativa. Aportaciones desde la praxis.',
      link:
        'https://www.researchgate.net/profile/Jose-Palazon-Herrera/publication/332171311_Aspectos_teorico-practicos_del_diseno_de_videos_basado_en_capturas_de_pantalla/links/5ca46067458515f7851fe911/Aspectos-teorico-practicos-del-diseno-de-videos-basado-en-capturas-de-pantalla.pdf',
    },
    {
      referencia:
        'Suelves, D. E. (2018). Gamificación en la evaluación del aprendizaje: valoración del uso de Kahoot. Innovative strategies for higher education in Spain.',
      link:
        'https://books.google.es/books?hl=es&lr=&id=TLdmDwAAQBAJ&oi=fnd&pg=PA88&dq=Herramientas+para+la+Gamificaci%C3%B3n+y+Evaluaci%C3%B3n&ots=kh-eW3lO0g&sig=NFM9rTBnCo-tm6KU3mb3KRmyt1I',
    },
    {
      referencia:
        'Rodríguez, D. V. (2019). Metodología innovadora basada en la gamificación educativa: evaluación tipo test con la herramienta Quizizz. Revista de Currículum y Formación del Profesorado, 363-387.',
      link:
        'https://revistaseug.ugr.es/index.php/profesorado/article/view/11232',
    },
    {
      referencia:
        'altamira. (18 de septiembre de 2024). ¿Qué importancia tiene la tecnología en la educación? Obtenido de Tecnología educativa:',
      link:
        'https://www.altamira.ai/blog/how-important-is-technology-in-education/',
    },
    {
      referencia:
        'Cáceres R. M.P. (Et al) (2024) Realidad virtual en educación superior. El uso de recursos tecnológicos inmersivos y aula invertida en la formación de futuros docentes. Editorial Dykinson.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/275711',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje Inmersivo',
      significado:
        'Experiencia educativa en la que el estudiante se sumerge en entornos digitales, como la realidad virtual o aumentada, para favorecer el aprendizaje activo y significativo.',
    },
    {
      termino: 'Camtasia',
      significado:
        'Software de edición y grabación de pantalla que permite crear videos educativos con narraciones, anotaciones y efectos visuales.',
    },
    {
      termino: 'Grabación de Pantalla',
      significado:
        'Técnica que permite capturar lo que sucede en la pantalla del computador, útil para crear tutoriales o demostraciones educativas.',
    },
    {
      termino: 'H5P',
      significado:
        'Herramienta digital que permite crear contenido interactivo y adaptable a distintos métodos y ritmos de aprendizaje.',
    },
    {
      termino: 'Interactividad',
      significado:
        'Participación activa del estudiante con el contenido digital, promoviendo un aprendizaje más dinámico y efectivo.',
    },
    {
      termino: 'Microlearning',
      significado:
        'Estrategia de aprendizaje basada en contenidos breves y específicos que se consumen en poco tiempo, facilitando la personalización y adaptación del contenido.',
    },
    {
      termino: 'Narrativa Digital',
      significado:
        'Estrategia educativa que utiliza recursos multimedia (texto, imágenes, audio y video) para contar historias y facilitar la comprensión de contenidos.',
    },
    {
      termino: 'OBS Studio',
      significado:
        'Software de código abierto utilizado para grabar y transmitir en vivo, ampliamente usado en educación para clases y presentaciones online.',
    },
    {
      termino: 'Powtoon',
      significado:
        'Plataforma en línea para crear videos animados y presentaciones educativas de forma visual y atractiva.',
    },
    {
      termino: 'Producción Multimedia',
      significado:
        'Integración de texto, audio, imágenes, video y animaciones en un recurso educativo digital.',
    },
    {
      termino: 'Storyboard',
      significado:
        'Herramienta visual que muestra la estructura y secuencia de contenidos o procesos, utilizada en la planificación de recursos educativos digitales.',
    },
  ],
}
