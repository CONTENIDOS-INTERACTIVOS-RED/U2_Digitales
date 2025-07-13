<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Diseño de experiencias de aprendizaje inmersivas con realidad aumentada y virtual'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/10.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El avance de las tecnologías inmersivas ha abierto nuevas posibilidades para transformar los entornos educativos, permitiendo experiencias de aprendizaje más significativas, interactivas y personalizadas. La #[b Realidad Aumentada (RA)] y la #[b Realidad Virtual (RV)] se destacan como herramientas claves para diseñar entornos donde los estudiantes no solo acceden a la información, sino que interactúan con ella de manera activa y sensorial. 
    
        .bg-color-2.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estas tecnologías facilitan la visualización de conceptos abstractos, la simulación de escenarios complejos y la exploración de contextos inaccesibles en el aula tradicional.
        p Incorporar RA y RV en el diseño instruccional de los Recursos Educativos Digitales (RED), implica un cambio de paradigma hacia metodologías centradas en la experiencia, donde el estudiante asume un rol más activo y comprometido en su proceso formativo. Desde viajes virtuales por el cuerpo humano hasta recorridos históricos o simulaciones de laboratorios científicos, estas herramientas potencian la comprensión, la retención del conocimiento y el aprendizaje significativo.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/jLTHclJkY1g?si=NhHnOMi6n6wNyIvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left")
                h2 Beneficios educativos de la RA y la RV
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Favorecen la comprensión de conceptos complejos y abstractos.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Aumentan la motivación y el compromiso del estudiante.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Permiten aprender mediante la práctica, incluso en contextos imposibles de replicar en la realidad.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Estimulan la memoria visual y la capacidad de análisis.
                h2 Desafíos y limitaciones
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Costo del <em>hardware</em> y <em>software</em>, especialmente en RV.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Requiere habilidades técnicas para el desarrollo de contenidos.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Accesibilidad: no todos los estudiantes cuentan con los dispositivos adecuados.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Curva de aprendizaje en el uso de herramientas y plataformas.
              .col-lg-4(data-aos="zoom-in").mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema4/12.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-5 A manera de repaso, sobre este tema, lo invitamos a consultar la siguiente tabla, en donde se exponen las ventajas, desventajas y aplicaciones de la RA y RV.

    .titulo-figura.mb-4
      h5 Tabla 4.
      span Comparativa de ventajas y desventajas de la Realidad Aumentada y Virtual en la educación
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-4.text-center.text-white Característica
            th.bg-color-4.text-center.text-white Realidad Aumentada (RA)
            th.bg-color-4.text-center.text-white Realidad Virtual (RV)
        tbody.bg-color-6
          tr
            td Ventajas.
            td Mejora la percepción del mundo real, costo relativamente menor, accesible a través de dispositivos comunes (smartphones, tabletas), mayor facilidad de integración en el aula.
            td Inmersión total, simulación de entornos complejos, experiencias que de otro modo serían imposibles o peligrosas, mayor potencial para el aprendizaje experiencial.
          tr
            td Desventajas.
            td Inmersión limitada, interacción con el mundo real puede ser una distracción, desarrollo de contenido puede ser complejo.
            td Costo del equipo (visores, controladores), puede causar mareos o desorientación en algunos usuarios, requiere un entorno controlado, desarrollo de contenido puede ser muy especializado.
          tr
            td Aplicaciones.
            td Visualización de modelos 3D, exhibiciones interactivas, juegos educativos en el mundo real, superposición de información contextual.
            td Viajes de campo virtuales, simulaciones de entrenamiento (medicina, ingeniería), exploración de entornos históricos o fantásticos, aprendizaje basado en escenarios.


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://technologyrain.com.ar/index.php/trj/article/view/6" target="_blank" rel="noopener noreferrer") Barroso, K. (2022). La realidad aumentada en el proceso de enseñanza-aprendizaje. Technology Rain Journal, 1(2), e6-e6. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=fvy58ljHOug&ab_channel=aCanelma" target="_blank" rel="noopener noreferrer") aCanelma. (2016, 4 de noviembre). Potencialidades educativas de la Realidad Virtual (VR) inmersiva [Video] YouTube



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema6',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes herramientas permite crear actividades interactivas como arrastrar y soltar, líneas de tiempo y presentaciones interactivas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Canva', esCorrecta: false },
              { id: 'b', texto: 'Powtoon', esCorrecta: false },
              { id: 'c', texto: 'H5P', esCorrecta: true },
              { id: 'd', texto: 'Kahoot', esCorrecta: false },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es una ventaja del uso de screencasts en la educación virtual?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Permite crear evaluaciones automáticas',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilita el aprendizaje autónomo',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Ofrece realidad aumentada',
                esCorrecta: false,
              },
              { id: 'd', texto: 'Integra gamificación', esCorrecta: false },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'En OBS Studio, ¿cuál es una buena práctica para lograr una transmisión estable?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Grabar sin conexión a internet',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Usar muchos filtros visuales',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Configurar correctamente la resolución y el bitrate',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Evitar usar escenas personalizadas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué función destaca en Mentimeter como herramienta educativa?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Crear animaciones complejas',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Generar mapas conceptuales',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Recoger respuestas en vivo mediante nubes de palabras, escalas o encuestas',
                esCorrecta: true,
              },
              { id: 'd', texto: 'Grabar screencasts', esCorrecta: false },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es una ventaja educativa clave de la realidad virtual (RV)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Su bajo costo de implementación',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La posibilidad de simular escenarios difíciles o peligrosos de forma segura',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Solo se puede usar con animaciones 2D',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'No requiere dispositivos especializados',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
