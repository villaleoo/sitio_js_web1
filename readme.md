HTML'S

    todos los archivos html poseen una etiqueta NAV, MAIN Y FOOTER. Todos los archivos html tienen un elemento(div) padre con clase contenedor, en esta entrega el FOOTER quedo fuera del div que actua como contenedor solamente por cuestiones de estetica y que el FOOTER no herede un padding que queda atractivo en todo el sitio(veran que al pasar el footer al div contenedor no se buguea, solamente cambian los margenes).

    index.html: 
        en su contenido contiene una lista con 3 imagenes que eventualmente al clikearlas se dirige a la receta de esa comida (proximos avances). Luego lo sigue un form de contacto que en esta entrega actua como simulador de envio de mensajes.

        form:
            Al ingresar correctamente el captcha "aparece" el boton de enviar el formulario, se utilizaron 2 eventos sobre el input del captcha para hacerlo mas reactivo. El archivo JS contiene comentarios explicativos de cada funcion utilizada.

    favoritos.html:
        en su contenido contiene una tabla estática por el momento que muestra las recetas que el usuario agrega como sus favoritas. La idea es que con la introduccion de mayor dinamismo a traves de javascript el usuario pueda agregar o eliminar sus recetas favoritas de la tabla y al hacerles click a una receta de la tabla ver la receta completa (en suspenso de acuerdo a consignas de las proximas entregas.)

    cocktails.html y recetas.html
        En estas secciones se podrian haber agregado listas simulando listas de recetas de comidas o listas de recetas de cocktails pero como lo dice el mensaje de las secciones la idea era hacer un sitio con los requisitos que se piden para esta entrega y para las proximas quizas estas secciones mismo no se llamen de esta manera y en efecto el contenido sea totalmente distinto a la idea original.

JavaScript
    scrips.js:
        este archivo esta compuesto por constantes que son los nodos traídos de los html y funciones/metodos que le brindan dinamismo a ciertas partes del sitio.
        Cada funcion esta comentada para una mejor comprension por eso en este archivo no se explicara detenidamente su contenido.

CSS
    style.css:
        el archivo de estilos esta linkeado a cada archivo html del sitio. En las priemras lineas del archivo se le dió estilo a las etiquetas que abarcan todo el sitio (todos los html) y luego se continuó por selectores propios de cada seccion/html. Se implemento una clase "d-flex-center" porque el display es una propiedad que es utilizada en muchos contenedores y elementos entonces para evitar repeticion de codigo directamente agregamos esa clase a cada etiqueta que necesita de un display flex centrado (similar a Bootstrap). 