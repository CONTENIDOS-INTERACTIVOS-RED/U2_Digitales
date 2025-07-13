<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Creación de videos educativos y <em>screencasts</em>'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-5
        .col-lg-3.mb-3.mb-lg-0.order-lg-2
          figure
            img(src="@/assets/curso/tema3/10.svg", data-aos="zoom-in")
        .col-lg-9.order-lg-1
          p(data-aos="fade-left") La creación de contenido audiovisual, es una habilidad esencial para educadores y estudiantes de los entornos virtuales. Las herramientas como Camtasia, OBS Studio y Powtoon, permiten generar recursos dinámicos y atractivos que facilitan el aprendizaje. Conocer sus características permite seleccionar la herramienta más adecuada, según el objetivo educativo, la audiencia y los recursos disponibles. 
      
      .bg-full-width.bg-fondo-2.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema3/11.svg', alt='', style="max-width: 1106px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="4%" y="27.5%" numero="+")
                  h5 Camtasia
                  p Permite producir contenidos educativos con aspecto profesional. 
                  
      
                .bg-color-white.box-shadow.p-3(x="93%" y="20%" numero="+")
                  h5 Powtoon
                  p Permite crear vídeos animados y presentaciones visuales.
      
                .bg-color-white.box-shadow.p-3(x="96%" y="64%" numero="+")
                  h5 OBS Studio
                  p Permite la grabación de video y transmisión en vivo.
      
      p.mb-5 Analice cada una de las herramientas, en cuanto a su funcionalidad y uso: 
  
      TabsC.color-primario.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Camtasia" :icon="require('@/assets/bullets/1.svg')")
          .row.justify-content-center
            .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Camtasia
              p Es un <em>software</em> comercial de grabación de pantalla y edición de video que permite producir contenidos educativos con aspecto profesional.
              h5 Uso y funcionalidades:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Grabación de pantalla y cámara web.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Edición avanzada (línea de tiempo, efectos visuales, anotaciones, transiciones).
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Integración de cuestionarios interactivos.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Biblioteca de música y gráficos libres de derechos.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Exportación en múltiples formatos.
  
              p Enlace a la herramienta <a href="https://www.techsmith.es/camtasia/" target="_blank">Camtasia</a>
      
            .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/12.svg', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="OBS Studio (Open Broadcaster <em>software</em>)." :icon="require('@/assets/bullets/1.svg')")
          .row.justify-content-center
            .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 OBS Studio (Open Broadcaster <em>software</em>).
              p Es un <em>software</em> gratuito y de código abierto, para grabación de video y transmisión en vivo, ampliamente utilizado por creadores de contenido y educadores.
              h5 Uso y funcionalidades:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Captura y mezcla en tiempo real, de vídeo/audio desde múltiples fuentes.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Creación de escenas con transiciones personalizadas.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Grabación local y transmisión a plataformas como YouTube o Twitch.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Configuración avanzada sin coste.
  
              p Enlace a la herramienta <a href="https://obsproject.com/" target="_blank">Open Broadcaster <em>software</em></a>
      
            .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/13.svg', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Powtoon" :icon="require('@/assets/bullets/1.svg')")
          .row.justify-content-center
            .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Powtoon
              p Es una herramienta basada en la web, para crear videos animados y presentaciones visuales.
              h5 Uso y funcionalidades:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Interfaz de arrastrar y soltar.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Biblioteca de plantillas, personajes y objetos animados.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Integración de narración y música.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Exportación a video o presentación interactiva.
  
              p Enlace a la herramienta <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjc0qio7oCNAxVynFoFHey4DVIYABAAGgJ2dQ&co=1&gclid=Cj0KCQjwlMfABhCWARIsADGXdy_hFcCRc0sLBg_ulDinTt4yTiskygkYZ6b2QA2tXHqoo3aTlSCmZl4aAkagEALw_wcB&ei=vasSaPzlENKPwbkPkaWqkQ8&ohost=www.google.com&cid=CAESVuD2NUQbf-FL9lpBEVsuIzeWWLh2H3ne8ryYn3Kxuohhx8PIdPPlxgSwoiCFpumN3w2bDHSlakW4HFqD5leI4Cx59_nyrIInCtGJxfoOaGB7wX3VjuCH&sig=AOD64_3F8w5UeR8lu-bM25T0adSo0GJC0w&q&sqi=2&adurl&ved=2ahUKEwi8uKOo7oCNAxXSRzABHZGSKvIQ0Qx6BAgKEAE" target="_blank">Powtoon</a>
      
            .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/14.png', alt='', style="width: 100%;")
      
      .row.mb-5
        .col-lg-4.order-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/15.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          p.mb-5(data-aos="fade-left") Las anteriores herramientas satisfacen diferentes necesidades de creación de video. Powtoon es ideal para explicaciones animadas, Camtasia para grabaciones de pantalla y ediciones pulidas, y OBS Studio, para producciones más complejas con múltiples fuentes y transmisión en vivo. Comprender estos matices, permite a los educadores elegir la herramienta adecuada para sus objetivos específicos (López-Meneses).
      
          .bg-color-1.p-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/9.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Al analizar el enfoque principal y las características de cada herramienta, se revela su idoneidad para diferentes tipos de contenido de video. Esto ayuda a los educadores a alinear su elección de herramienta con sus objetivos de producción de video. 
      
      .bg-full-width.bg-color-7
        .p-4.p-md-5
          div.row.justify-content-center.align-items-stretch.mb-5
            div.col-lg-6.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/16.svg" alt="" style="width: 90px")
                p.mb-0.text-center Destaca como una opción gratuita y de código abierto, lo que hace que la creación de video sea más accesible.
          
            div.col-lg-6.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/17.svg" alt="" style="width: 90px")
                p.mb-0.text-center Ofrece una experiencia más optimizada y fácil de usar con activos integrados y funciones de edición avanzadas, lo que podría ser preferible para aquellos que buscan un aspecto más profesional con menos configuración técnica.
          
      .row.mb-5
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/18.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left") Al comparar los precios y las funciones, se destaca el equilibrio entre accesibilidad (costo y complejidad) y capacidades profesionales. Este es un factor crucial para los educadores con diferentes presupuestos y habilidades técnicas. 
      
          .bg-color-2.p-5(data-aos="fade-left")
            p.mb-0 En la creación de video se enfatiza la efectividad de la multimedia para mejorar el aprendizaje y la retención de conocimientos. Esto subraya la importancia del video como medio para entregar contenido educativo. La prominencia de las herramientas de creación de video apoya directamente los beneficios del aprendizaje visual y la participación multimedia. Esto refuerza el valor pedagógico de incorporar video en los recursos digitales.
          
      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Recomendaciones generales para la creación de videos
  
      p.mb-5 Recomendaciones generales para Camtasia:
  
      .bg-full-width.bg-color-8
        .p-4.p-md-5
          .bg-full-width.bg-fondo-5
            .px-4.px-md-5.pb-md-3
              .row.justify-content-center.mb-5.align-items-center
                .col-lg-8.mb-3.mb-lg-0.order-lg-2
                  SlyderF(columnas="col-12 col-lg-6")
                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/tema3/20.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h4.text-center.mb-4 Planifique su guion antes de grabar
                      p.text-center Definir claramente la estructura del video (introducción, desarrollo, cierre).
                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/tema3/21.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h4.text-center.mb-4 Utilice las herramientas de anotación
                      p.text-center Agregar flechas, resaltados y textos, para reforzar ideas claves.
                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/tema3/22.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h4.text-center.mb-4 Aproveche la edición por capas
                      p.text-center Usar la línea de tiempo para sincronizar narración, video y efectos visuales.
                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/tema3/23.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h4.text-center.mb-4 Cuide la calidad del audio
                      p.text-center Usar un micrófono externo si es posible y elimine ruidos de fondo, en la edición.
                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/tema3/24.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h4.text-center.mb-4 Mantenga la duración del video entre 3 y 7 minutos
                      p.text-center Para conservar la atención del estudiante.
          
                .col-lg-4.order-lg-1
                  figure
                    img(src='@/assets/curso/tema3/19.png', alt='')
  
          p.mb-5 Recomendaciones generales para OBS Studio:
  
      .row.align-items-start.mb-5
        .col-lg-4.mb-3.mb-lg-0.order-lg-2
          figure
            img(src="@/assets/curso/tema3/25.png", alt="").mb-4.mb-lg-0
        .col-lg-8.order-lg-1
          AcordionA(tipo="b")
            .div(titulo="Prepare sus escenas y fuentes antes de grabar")
              p Configure todo lo que va a mostrar (pantalla, cámara, audio)
            .div(titulo="Haga pruebas de grabación, previas")
              p Verifique calidad de imagen, nivel de audio y fluidez.
            .div(titulo="Utilice atajos de teclado")
              p Para iniciar y detener la grabación sin mostrar el panel de control.
            .div(titulo="Configure la resolución adecuada")
              p Se recomienda grabar en 1080p a 30 fps para videos educativos.
            .div(titulo="Evite sobrecargar la escena")
              p Use solo los elementos necesarios para no distraer al espectador.
      
      p.mb-5 Recomendaciones generales para Powtoon:
  
      .bg-full-width.bg-color-8
        .p-4.p-md-5
          .bg-full-width.bg-fondo-5
            .px-4.px-md-5.pb-md-3
              .row.justify-content-center.mb-5.align-items-center
                .col-lg-8.mb-3.mb-lg-0
                  SlyderF(columnas="col-12 col-lg-6")
                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/tema3/27.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h4.text-center.mb-4 Elija plantillas acordes con el tono del mensaje
                      p.text-center Asegure que el estilo visual sea apropiado para el tema.
                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/tema3/28.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h4.text-center.mb-4 Simplifique el contenido
                      p.text-center Evite recargar con demasiados textos o animaciones; priorice lo visual.
                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/tema3/29.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h4.text-center.mb-4 Sincronice bien la narración y las animaciones
                      p.text-center Use la línea de tiempo para ajustar tiempos y transiciones.
                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/tema3/30.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h4.text-center.mb-4 Incluya música de fondo, con volumen moderado
                      p.text-center Ayuda a mantener el ritmo, sin distraer.
                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/tema3/31.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h4.text-center.mb-4 Añada voz en <em>off</em> si es posible
                      p.text-center Le da un toque más personal y facilita la comprensión.
          
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/26.png', alt='')
  
      .bg-full-width.bg-color-6.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-lg-8(data-aos="fade-left").order-2
                  p Consejos comunes para todas las herramientas:
                  ul.lista-ul--color
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Mantenga una buena iluminación, si graba su rostro (en OBS o Camtasia).
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Revise la ortografía en títulos, etiquetas y textos en pantalla.
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Sea claro y conciso en sus explicaciones.
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Cuide el ritmo del video: ni demasiado rápido ni muy lento.
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Exporte el video en un formato estándar como .mp4 para asegurar compatibilidad.
                .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                  img.img-fluid(src='@/assets/curso/tema3/32.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
      
      p.mb-5 Observe en la siguiente tabla las principales características de cada herramienta: 
  
      .titulo-figura.mb-4
        h5 Tabla 2.
        span Características de herramientas de creación de videos educativos y <em>screencasts</em>
      .tabla-a.color-acento-botones.mb-5
        table
          thead
            tr
              th.bg-color-4.text-center.text-white Característica
              th.bg-color-4.text-center.text-white Camtasia
              th.bg-color-4.text-center.text-white OBS Studio (Open Broadcaster <em>software</em>)
              th.bg-color-4.text-center.text-white Powtoon
          tbody.bg-color-6
            tr
              th Uso principal.
              td Screencasting y edición profesional.
              td Grabación y transmisión en vivo.
              td Videos explicativos animados.
            tr
              th Grabación.
              td Pantalla, webcam, múltiples fuentes.
              td Pantalla, webcam, múltiples fuentes.
              td Limitado a la animación y elementos de la plataforma.
            tr
              th Edición.
              td Amplia (línea de tiempo, transiciones, efectos, anotaciones).
              td Básica (escenas, fuentes, transiciones).
              td Intuitiva (arrastrar y soltar, línea de tiempo).
            tr
              th Animación.
              td Limitada (transiciones y algunos efectos).
              td No.
              td Amplia (personajes, objetos, plantillas).
            tr
              th Edición de audio.
              td Sí (básica).
              td Sí (mezclador de audio).
              td Sí (integración de música y voz en off).
            tr
              th Formatos de exportación.
              td mp4, avi, wmv, mov, gif, m4a, etc.
              td mp4, flv, mkv, mov, ts, m3u8.
              td mp4, ppt, pdf, compartir en redes sociales.
            tr
              th Curva de aprendizaje.
              td Moderada.
              td Moderada a empinada.
              td Fácil.
            tr
              th Precio.
              td Licencia de pago único.
              td Gratuito y de código abierto.
              td Freemium (versión gratuita limitada).
  
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://dialnet.unirioja.es/servlet/articulo?codigo=6880842" target="_blank" rel="noopener noreferrer") López-Meneses, E., Cobos-Sanchiz, D., Martín-Padilla, A. H., Molina-García, L., & Jaén-Martínez, A. Aspectos teórico-prácticos del diseño de vídeos basado en capturas de pantalla.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=pgLm92fzzj0&ab_channel=MartinGerlero" target="_blank" rel="noopener noreferrer") Martin Gerlero.(2021, 22 de julio). Cómo grabar video clases y tutoriales con OBS studio [Video] YouTube 
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  </template>
