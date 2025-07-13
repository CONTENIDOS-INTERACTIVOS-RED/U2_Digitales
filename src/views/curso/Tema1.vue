<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Plataformas de diseño de contenidos digitales'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-3.mb-3.mb-lg-0.order-lg-2
          figure
            img(src="@/assets/curso/tema3/1.svg", data-aos="zoom-in")
        .col-lg-9.order-lg-1
          p(data-aos="fade-left") En el contexto de la educación virtual, el diseño de contenidos digitales es una competencia clave para docentes, diseñadores instruccionales y creadores de recursos educativos. Las plataformas de autoría permiten crear materiales más atractivos, interactivos y eficaces, para el aprendizaje autónomo (Martínez, 2015). A continuación, se verán cuatro herramientas ampliamente utilizadas en entornos educativos: H5P, Genially, Articulate y Canva. Cada una responde a diferentes necesidades pedagógicas, técnicas y visuales, como se presenta a continuación:
      
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema3/2.svg")
              .col-lg-7
                h5 H5P
                p H5P (HTML5 Package) es una plataforma de código abierto, que permite crear objetos de aprendizaje dinámicos, directamente desde el navegador. Entre sus tipos de contenido se encuentran: vídeos interactivos, cuestionarios, líneas de tiempo, presentaciones interactivas y juegos educativos. Uno de sus grandes beneficios es su integración con sistemas de gestión del aprendizaje (LMS) como Moodle, Canvas o WordPress, lo cual facilita la evaluación y seguimiento del estudiante.
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Ventajas</b>. Gratuito, personalizable, con fuerte enfoque en la interactividad pedagógica. Alineado con metodologías activas.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Desventajas</b>. Requiere conocimientos básicos para su implementación técnica en un LMS y su apariencia puede ser más básica, en comparación con otras herramientas.
      
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema3/3.png")
              .col-lg-7
                h5 Genially
                p Genially es una plataforma web que permite crear recursos visuales interactivos, como presentaciones, infografías, líneas de tiempo, mapas, juegos y experiencias de gamificación. No requiere conocimientos de programación y se destaca por sus plantillas visuales y opciones de animación.
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Ventajas</b>. Interfaz amigable, variedad de plantillas, permite trabajar en equipo y facilita la incorporación de elementos interactivos con pocos clics. 
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Desventajas</b>. Algunas funciones están restringidas a cuentas de pago y su interactividad es más visual que funcional (por ejemplo, no permite capturar respuestas del estudiante fácilmente).
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema3/4.png")
              .col-lg-7
                h5 Articulate (Storyline 360 y Rise 360)
                p Articulate es un conjunto de herramientas profesionales para el diseño instruccional. Storyline 360 permite crear cursos e-learning altamente personalizados, con navegación no lineal, evaluaciones complejas y escenarios ramificados. Rise 360, por su parte, es una herramienta en línea para el desarrollo de cursos responsivos con diseño moderno y adaptativo.
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Ventajas</b>. Potente en términos de interactividad y evaluación, ideal para formación corporativa o institucional con altos estándares de calidad.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Desventajas</b>. Requiere licencia, es más complejo de manejar y demanda tiempo para dominar sus funciones.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema3/5.png")
              .col-lg-7
                h5 Canva
                p Canva es una herramienta de diseño gráfico basada en la web, que facilita la creación de materiales visuales, como: presentaciones, carteles, infografías, publicaciones para redes sociales y documentos. Aunque no fue concebida como una plataforma educativa, se ha convertido en una opción popular para docentes que desean producir materiales atractivos sin necesidad de conocimientos de diseño.
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Ventajas</b>. Interfaz muy intuitiva, biblioteca de plantillas y recursos visuales, opciones de trabajo colaborativo.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Desventajas</b>. Limitada en funciones interactivas y sin opciones avanzadas de seguimiento del aprendizaje.
      
      .row.mb-5
        .col-lg-4.order-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          .bg-color-2.p-4.mb-5(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/7.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Estas plataformas presentan un equilibrio entre la facilidad de uso y la profundidad de la funcionalidad. Canva es increíblemente intuitivo, pero carece de interactividad avanzada, mientras que Articulate ofrece funciones potentes, pero requiere más capacitación. Los educadores deben considerar sus habilidades técnicas y la complejidad del contenido deseado, al elegir una plataforma. 
          p(data-aos="fade-left") Al comparar las descripciones, se revela un espectro donde la facilidad de uso, frecuentemente tiene un costo en términos de funciones avanzadas, y viceversa. Esto destaca un factor clave en la toma de decisiones para los educadores. H5P y Genially están explícitamente enfocados en la creación de contenido interactivo, lo que se alinea con la investigación que destaca la participación como un elemento crucial del aprendizaje digital efectivo. Esto refuerza el valor pedagógico de incorporar elementos interactivos en los recursos educativos. 
          p El énfasis en la "interactividad" en las descripciones de H5P y Genially, se conecta directamente con la investigación más amplia sobre los beneficios de la participación en el aprendizaje. Esto sugiere una fuerte alineación entre las características de estas herramientas y los principios pedagógicos establecidos. 
      
      .row.mb-5
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-3.p-4.mb-5(data-aos="fade-left")
            p.mb-0 La perfecta integración de H5P con las plataformas LMS (mencionada en su descripción) es significativa, dado que los LMS normalmente son fundamentales para la entrega y gestión del aprendizaje en línea. Esto resalta la importancia de considerar la infraestructura tecnológica existente al seleccionar herramientas para la producción de recursos digitales. La mención explícita de la integración con LMS para H5P, señala una consideración práctica para los educadores que probablemente ya estén utilizando un LMS. Esta función agiliza la implementación y gestión del contenido de H5P.
          p(data-aos="fade-left") Observe en la siguiente tabla, las diferentes características como: facilidad de uso, enfoque, tipos de contenido, opciones interactivas, evaluación, integración LMS y precio. Además, las ventajas y desventajas.
      
      .titulo-figura.mb-4
        h5 Tabla 1.
        span Comparativa de plataformas de diseño de contenidos digitales
      .tabla-a.color-acento-botones.mb-5
        table
          thead
            tr
              th.bg-color-4.text-center.text-white Característica
              th.bg-color-4.text-center.text-white H5P
              th.bg-color-4.text-center.text-white Genially
              th.bg-color-4.text-center.text-white Articulate (Storyline 360 & Rise 360)
              th.bg-color-4.text-center.text-white Canva
          tbody.bg-color-6
            tr
              th Facilidad de uso.
              td Moderada.
              td Fácil.
              td Moderada a difícil.
              td Muy fácil.
            tr
              th Enfoque.
              td Interactividad.
              td Diseño visual e interactividad.
              td Aprendizaje electrónico avanzado.
              td Diseño gráfico y presentaciones simples.
            tr
              th Tipos de contenido.
              td Quizzes, videos interactivos, presentaciones, juegos, etc.
              td Presentaciones, infografías, juegos, videos, etc.
              td Cursos interactivos, escenarios ramificados, evaluaciones.
              td Presentaciones, infografías, gráficos para redes sociales.
            tr
              th Opciones interactivas.
              td Amplias (drag and drop, rellenar huecos, etc.).
              td Variadas (ventanas, tooltips, botones interactivos, etc.).
              td Extensas (activadores, capas, variables, etc.).
              td Limitadas (enlaces, animaciones básicas).
            tr
              th Evaluación.
              td Sí (variedad de tipos de preguntas).
              td Limitada (principalmente a través de elementos interactivos).
              td Sólida (múltiples tipos de preguntas, seguimiento detallado).
              td No.
            tr
              th Integración LMS.
              td Sí (LTI).
              td Sí (incrustación).
              td Sí (Scorm, Aicc, Xapi).
              td Sí (incrustación).
            tr
              th Precio.
              td Gratuito y de código abierto.
              td Freemium (versión gratuita limitada).
              td Basado en suscripción (relativamente costoso).
              td Freemium (versión gratuita limitada).
            tr
              th Ventajas.
              td Gratuito, código abierto, fuerte en interactividad, integración LMS.
              td Interfaz intuitiva, plantillas atractivas, fácil de compartir.
              td Amplias opciones de interactividad, funciones profesionales, sólida evaluación.
              td Muy intuitivo, vasta biblioteca de plantillas, colaborativo, asequible.
            tr
              th Desventajas.
              td Interfaz menos pulida, requiere LMS/web para alojamiento.
              td Versión gratuita limitada, menos interacciones complejas.
              td Curva de aprendizaje, costoso, Storyline es de escritorio.
              td Menos enfocado en interactividad compleja, evaluación limitada.
  
      .bg-full-width.bg-color-2.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Reflexione. La selección de una plataforma debe basarse en el equilibrio entre la complejidad del contenido, el grado de interactividad deseado y las competencias tecnológicas del docente. Mientras Canva facilita la creación rápida de recursos visuales, herramientas como H5P o Articulate, permiten desarrollar experiencias de aprendizaje más profundas e interactivas. La integración con LMS también es un factor clave para asegurar la trazabilidad del proceso formativo.
  

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://dialnet.unirioja.es/servlet/articulo?codigo=6046927" target="_blank" rel="noopener noreferrer") Campión, R. S., Esparza, V. M. M., & Celaya, L. A. A. (2017). Los contenidos digitales en los centros educativos: Situación actual y prospectiva. RELATEC: Revista Latinoamericana de Tecnología Educativa, 16(1), 51-66.  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://repositorio.une.edu.pe/items/784998b0-fb13-48d9-9701-4b9549aa5024" target="_blank" rel="noopener noreferrer") Arias Pittman, J. A. (2019). Uso del exelearning, aplicación de contenidos digitales y su relación con el proceso de aprendizaje en la Universidad Nacional José Faustino Sánchez Carrión 2017. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=r9iL36XUFB0&ab_channel=GAMIFIKT" target="_blank" rel="noopener noreferrer") GAMIFIKT. (2020, 22 de mayo). Crear recursos con Canva y Genially [Video] YouTube 
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
