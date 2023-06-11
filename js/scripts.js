document.addEventListener("DOMContentLoaded", main)

function main() {
    "use strict"
    
    const arregloComidas=[
        {
            nombre: "Asado",
            ingredientes: ["Carne de res", "Sal" , "Chimichurri"],
            descripcion: "El asado argentino es un plato típico que se prepara asando carne de res a la parrilla. Para su preparación, se sazona la carne con sal y se la cocina a fuego lento hasta obtener una textura jugosa y sabrosa. Se puede acompañar con chimichurri, una salsa a base de aceite, vinagre, ajo y condimentos.",
            vegano: false
        },
        {
            nombre: "Milanesa de Soja",
            ingredientes: ["Soja texturizada", "Pan rallado", "Huevos", "Condimentos"],
            descripcion: "La milanesa de soja es una opción vegana popular en Argentina. Se prepara utilizando soja texturizada empanada en pan rallado con huevos y condimentos. Luego, se fríe en aceite hasta que esté dorada y crujiente. Es una alternativa sabrosa y libre de carne.",
            vegano: true
        },
        {
            nombre: "Locro",
            ingredientes: ["Maíz blanco", "Poroto", "Calabaza", "Panceta", "Cebolla"],
            descripcion: "El locro es un plato tradicional argentino que se prepara con maíz blanco, porotos, calabaza, panceta y cebolla. Para su elaboración, se cocinan los ingredientes a fuego lento hasta que adquieran una consistencia espesa y sabrosa. Es ideal para los días fríos y se suele disfrutar en festividades patrias.",
            vegano: false
        },
        {
            nombre: "Pizza Especial",
            ingredientes: ["Harina","Levadura", "Salsa de tomate", "Queso", "Jamón", "Morrones"],
            descripcion: "La pizza es un plato muy popular en Argentina. Para hacer una pizza clásica, se necesita masa de pizza (harina y levadura), salsa de tomate, queso, jamón y morrones. La masa se extiende, se cubre con salsa de tomate, se agregan los ingredientes y se hornea hasta que esté lista. ¡Es una deliciosa opción para compartir en familia o con amigos!",
            vegano: false
        },
        {
            nombre: "Empanada de carne",
            ingredientes: ["Carne picada", "Cebolla", "Huevos", "Aceitunas", "Condimentos"],
            descripcion: "Las empanadas son un clásico de la gastronomía argentina. Para hacerlas, se prepara un relleno con carne picada, cebolla, huevo, aceitunas y especias. Luego, se rellenan discos de masa, se cierran y se hornean o fríen hasta que estén doradas. Son ideales como entrada o para disfrutar en cualquier ocasión.",
            vegano: false
        },
        {
            nombre: "Guiso de Lentejas",
            ingredientes: ["Lenteja", "Cebolla", "Zanahoria", "Papa", "Condimentos"],
            descripcion: "El guiso de lentejas es un plato reconfortante y nutritivo. Se prepara con lentejas, cebolla, zanahoria, papa y condimentos. Todos los ingredientes se cocinan juntos hasta que las lentejas estén tiernas y se forme un caldo sabroso. Es una opción vegetariana y se puede servir con arroz o pan.",
            vegano: true
        },
        {
            nombre: "Provoleta",
            ingredientes: ["Queso provolone", "Orégano", "Aceite de oliva"],
            descripcion: "La provoleta es un plato típico de la cocina argentina que consiste en queso provolone a la parrilla. Se condimenta con orégano y se rocía con aceite de oliva. Se cocina hasta que el queso esté derretido y se sirve caliente. Es una opción deliciosa como entrada o para compartir en una reunión.",
            vegano: false
        },
        {
            nombre: "Fainá",
            ingredientes: ["Harina", "Agua", "Aceite de oliva", "Sal"],
            descripcion: "La fainá es una especie de pan plano o torta hecha a base de harina de garbanzo. Se prepara mezclando harina de garbanzo, agua, aceite de oliva y sal, y se hornea hasta que esté dorada y firme. Se puede disfrutar como acompañamiento de pizzas o como plato principal.",
            vegano: true
        },
        {
            nombre: "Ravioles",
            ingredientes: ["Harina","Huevos", "Acelga", "Salsa"],
            descripcion: "Los ravioles son una pasta rellena muy popular en Argentina. Se hace una masa con harina y huevo, se rellena con ingredientes como carne, pollo, verduras o queso, y se cocina en agua hirviendo. Se sirven con salsa a elección y queso rallado. Son una delicia para disfrutar en cualquier ocasión.",
            vegano: false
        },
        {
            nombre: "Hamburguesa completa",
            ingredientes: ["Pan", "Hamburguesa", "Queso", "Lechuga", "Tomate"],
            descripcion: "una deliciosa combinación de ingredientes clásicos que resulta en una experiencia culinaria irresistible. Para prepararla, asa una jugosa hamburguesa y colócala sobre un suave pan de hamburguesa.Añade queso derretido,lechuga fresca y rodajas de tomate.¡Disfruta de una hamburguesa completa y sumérgete en su irresistible sabor!",
            vegano: false
        },
        {
            nombre: "Ñoquis",
            ingredientes: ["Papa", "Harina", "Huevos", "Salsa de tomate"],
            descripcion: "Los ñoquis son una pasta de origen italiano muy popular en Argentina. Se preparan mezclando puré de papa con harina y huevo, se forman pequeñas bolitas y se cocinan en agua hirviendo. Se sirven con salsa a elección y queso rallado. Son una opción deliciosa y versátil.",
            vegano: false
        },
        {
            nombre: "Carbonada",
            ingredientes: ["Carne de res", "Panceta", "Zanahoria", "Batata", "Choclo"],
            descripcion: "La carbonada es un guiso típico argentino que se prepara con carne de res, panceta, zanahoria, batata y choclo. Se cocina a fuego lento hasta que todos los ingredientes estén tiernos y se haya formado un caldo sabroso. Es un plato reconfortante ideal para los días fríos.",
            vegano: false
        },
        {
            nombre: "Tarta de Verduras",
            ingredientes: ["Harina", "Verdura","Manteca", "Queso", "Huevos", "Crema"],
            descripcion: "La tarta de verduras es un plato versátil y nutritivo. Se prepara con masa para tarta(harina,manteca y agua), verduras de elección (como espinacas, zanahorias, cebolla), queso, huevos y crema. Se hornea hasta que la masa esté dorada y el relleno esté cocido. Es una opción saludable y deliciosa.",
            vegano: false
        },
        {
            nombre: "Matambre a la Pizza",
            ingredientes: ["Matambre", "Salsa de tomate", "Queso", "Morrones"],
            descripcion: "El matambre a la pizza es un plato típico de la cocina argentina. Consiste en un matambre relleno, cubierto con salsa de tomate, queso y morrones, y cocido al horno. Se sirve caliente y cortado en porciones. Es una opción sabrosa y muy popular en reuniones y asados.",
            vegano: false
        },
        {
            nombre: "Pastel de Papa",
            ingredientes: ["Papa", "Carne picada", "Cebolla", "Huevos", "Condimentos"],
            descripcion: "El pastel de papa es un plato reconfortante y sabroso. Se prepara con una capa de puré de papa en la base y carne picada con cebolla y condimentos en el relleno. Se hornea hasta que esté dorado y se sirve caliente. Es una opción popular en las mesas argentinas.",
            vegano: false
        },
        {
            nombre: "Choripán",
            ingredientes: ["Chorizo", "Pan", "Chimichurri"],
            descripcion: "El choripán es un clásico argentino. Consiste en un chorizo a la parrilla servido en un pan y acompañado de chimichurri y salsa criolla. Es una opción fácil y rápida para disfrutar en una reunión o como comida callejera. El choripán es muy popular en los asados argentinos.",
            vegano: false
        },
        {
            nombre: "Sorrentinos",
            ingredientes: ["Harina", "Huevos", "Salsa de tomate", "Queso rallado"],
            descripcion: "Los sorrentinos son una pasta rellena similar a los ravioles, pero de mayor tamaño. Se preparan con una masa especial(harina y huevos), se rellenan con ingredientes como carne, pollo, verduras o queso, y se cocinan en agua hirviendo. Se sirven con salsa a elección y queso rallado. Son una opción deliciosa y contundente.",
            vegano: false
        },
        {
            nombre: "Chipá",
            ingredientes: ["Almidón", "Queso", "Huevos", "Leche", "Manteca"],
            descripcion: "El chipá es un pan de queso tradicional de la gastronomía guaraní que también es popular en Argentina. Se elabora con almidón de mandioca, queso, huevos, leche y manteca. Se mezclan los ingredientes, se hornean y se obtiene un pan tierno y sabroso. Es ideal para acompañar el mate o el café.",
            vegano: false
        },
        {
            nombre: "Pastelitos",
            ingredientes: ["Harina","Agua", "Membrillo", "Azúcar impalpable"],
            descripcion: "Los pastelitos son una tradición argentina, especialmente en épocas de carnaval. Se preparan con masa para pastelitos(harina y agua), se rellenan con dulce de membrillo o batata, se cierran y se fríen hasta que estén dorados. Luego se espolvorean con azúcar impalpable. Son una delicia dulce y crujiente.",
            vegano: true
        },
        {
            nombre: "Sopa Paraguaya",
            ingredientes: ["Harina", "Queso", "Cebolla", "Leche", "Manteca"],
            descripcion: "La sopa paraguaya es una especie de pan de maíz cuajado que se consume en Argentina y Paraguay. Se prepara mezclando harina de maíz, queso rallado, cebolla, leche y manteca. La mezcla se hornea hasta que esté dorada y firme. Se puede disfrutar como acompañamiento o plato principal.",
            vegano: false
        },
        {
            nombre: "Alfajores",
            ingredientes: ["Harina", "Maicena", "Dulce de leche", "Coco rallado", "Azúcar impalpable"],
            descripcion: "Los alfajores son una delicia dulce muy popular en Argentina. Se preparan con una masa de harina y maicena, se rellenan con dulce de leche y se espolvorean con coco rallado o azúcar impalpable. Hay diferentes variedades y marcas de alfajores, pero todos son irresistibles.",
            vegano: false
        }
    ];

    const btnMenuNavegacion=document.querySelector("#btnNavDesplegable");
    
    const formularioDeContacto = document.querySelector("#formularioContacto");
    const btnEnviarForm= document.querySelector("#btnEnviarForm");
    
    
    const btnGenerarCaptcha=document.querySelector("#btnGenerarCaptcha");
    const alertaCaptcha= document.querySelector("#alertaCaptcha");
    const inputCaptcha = document.querySelector("#inputCaptchaIngresado");
    const layoutCaptcha = document.querySelector("#captcha");  
    
    const valoresCaptcha= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
    const cantidadCaracteresCaptcha=6; // (coincidir maxlength del input)
    let valorCaptcha='';
    
    
    const contenedorFormTabla= document.querySelector("#contenedorFormTabla");
    const contenedorTabla=document.querySelector("#contenedorTabla");
    const maximoRecetasAgregadas= 5;
    let arregloRecetasUsuario= [];
    let arregloIngredientes=obtenerIngredientesPosibles();
    
    
    
    function crearFormularioDeTabla(contenedorForm) {
        if(contenedorForm){
            let cantidadDeSelects=2;
            let formularioDeTabla= document.createElement("form");
            let contenedorBotones= document.createElement("div");
            
            contenedorBotones.classList='contenedor-botones-form-tabla';
            formularioDeTabla.id="formularioDeTabla";
            formularioDeTabla.addEventListener("submit", editarTabla);
            
            for(let i = 1; i <= cantidadDeSelects; i++){
                formularioDeTabla.appendChild(crearLabelDeIngredientes(i));
                agregarSelectsIngredientes(formularioDeTabla);
            }
            
            contenedorBotones.appendChild(crearBoton("Mostrar recetas", "mostrarRecetas"));
            contenedorBotones.appendChild(crearBoton("Generar aleatorio", "generarAleatorio"));
            contenedorBotones.appendChild(crearBoton("Vaciar tabla", "vaciarTabla"));
            
            formularioDeTabla.appendChild(contenedorBotones);
            contenedorForm.appendChild(formularioDeTabla);
            
        }
    }
    
    
    function editarTabla(e) {
        e.preventDefault()
        
        let ingredientesIngresados=obtenerIngredientesIngresados(e.target); //obtiene los ingredientes que agrega el usuario mediante selects
        console.log(e.submitter.id);
        if(e.submitter.id == "mostrarRecetas"){
            eliminarElementosDuplicados(ingredientesIngresados);
            agregarRecetasUsuario(ingredientesIngresados);
        }else if(e.submitter.id == "vaciarTabla"){
            vaciarTabla();
        }else{
            generarRecetasAleatorias();
        }
        
    }

    function generarRecetasAleatorias() {
        const cantidad= 3;

        for(let i=0 ; i < cantidad; i++){
            let ingrediente= arregloIngredientes[Math.floor(Math.random()*arregloIngredientes.length)];
            agregarRecetasUsuario([ingrediente]);
        }
    }
    
    function vaciarTabla() {
        contenedorTabla.innerHTML='';
        arregloRecetasUsuario=[];
        document.querySelector("#contenedorRecetasUsuario").innerHTML='';
    }

    /*esto guarda la cantidad de ingredientes que ingresa el usuario(por si se agregan mas selects) y se empieza a recorrer las recetas que hay con foco al arreglo de ingredientes, si se encuentran todos los ingredientes que ingreso el usuario en alguna de las recetas, se guarda en la matriz que formara la tabla*/ 
    function agregarRecetasUsuario(ingredientesIngresados) {
        let cantidadIngredientesAIngresar= ingredientesIngresados.length;
        let recetasEncontradas=[]
        
        for(let i= 0; i < arregloComidas.length; i++){
            let ingredientesEncontrados=0;              
            
            for(let j = 0; j < ingredientesIngresados.length; j++){
                if(arregloComidas[i].ingredientes.includes(ingredientesIngresados[j])){
                    ingredientesEncontrados++;
                }
            }
            if(cantidadIngredientesAIngresar == ingredientesEncontrados){
                recetasEncontradas.push(arregloComidas[i]);
            }
        }
        if(recetasEncontradas.length > 0){
            if(arregloRecetasUsuario.length <= maximoRecetasAgregadas){
                arregloRecetasUsuario.unshift([recetasEncontradas, ingredientesIngresados]);
            }else{
                arregloRecetasUsuario=agregarAlComienzoArr(arregloRecetasUsuario,[recetasEncontradas,ingredientesIngresados]);
                console.log(arregloRecetasUsuario);
            }
            mostrarTabla(arregloRecetasUsuario);
        }else{
            mostrarAlertaSinResultados();
        }
        
    }
    
    function mostrarTabla(arregloRecetas) {
        let encabezados=["Resultados", "Ingredientes"];
        let tabla=document.createElement("table");
        
        contenedorTabla.innerHTML=''
        tabla.innerHTML+=`<thead><tr><th>${encabezados[0]}</th><th>${encabezados[1]}</th></tr></thead>`;
        contenedorTabla.appendChild(tabla);
        
        for (let i = 0; i < arregloRecetas.length; i++) {
            let body=document.createElement("tbody");
            let fila = document.createElement("tr");
            if(i == 0){
                fila.innerHTML+=`<td><span class="estilo-primer-fila">new</span><button class="estilos-btn-tabla" value="${i}" id="btnTabla${i}">${arregloRecetas[i][0].length} resultados</button></td> <td>${arregloRecetas[i][1]}</td>`;
            }else{
                fila.innerHTML+=`<td><button class="estilos-btn-tabla" value="${i}" id="btnTabla${i}">${arregloRecetas[i][0].length} resultados</button></td> <td>${arregloRecetas[i][1]}</td>`;
            }
            body.appendChild(fila);
            tabla.appendChild(body);
            document.querySelector(`#btnTabla${i}`).addEventListener("click", mostrarRecetas);
        }
        
        
    }
    
    function mostrarRecetas(e) {
        const contenedorRecetas=document.querySelector("#contenedorRecetasUsuario");
        let valueBotonClickeado=parseInt(e.target.value);
        let resultadosDeRecetasSeleccionados=arregloRecetasUsuario[valueBotonClickeado][0]; //en [valueBotonBlickeado][1] estaria los ingredientes que ingreso
        
        contenedorRecetas.innerHTML='';
        
        resultadosDeRecetasSeleccionados.forEach(receta =>{
            let nuevoArticulo=document.createElement("article");
            nuevoArticulo.innerHTML+=`<h2>${receta.nombre}</h2>
            <h5>Ingredientes: ${receta.ingredientes}.</h5>
            <p>${receta.descripcion}</p>`
            contenedorRecetas.appendChild(nuevoArticulo)
        })
        
    }
    
    function mostrarAlertaSinResultados() {
        let alerta= document.createElement("p");
        alerta.id='alertaSinResultados'             //crea un alerta formato P
        alerta.textContent="No hay resultados para la combinacion de ingredientes.";    //con este texto por defecto
        
        if(document.querySelector("#alertaSinResultados") == null){ //si no esta en el arbol de nodos, la agrega
            contenedorFormTabla.appendChild(alerta);
        }else{
            document.querySelector("#alertaSinResultados").textContent="No hay resultados para la combinacion de ingredientes."; //si ya fue agregada, vuelve a mostrar el texto default
            
        }
        //luego de la alerta ser agregada con texto default o modificado su contenido, se vacia
        setTimeout(() => {
            document.querySelector("#alertaSinResultados").textContent='';
        }, 2800);  
    }
    
    function agregarAlComienzoArr(arreglo, elemento) {
        for(let i= arreglo.length-1; i>=0 ;i--){
            if(i != 0){
                arreglo[i]= arreglo[i-1];
            }else{
                arreglo[i]= elemento;
            }
        }
        return arreglo
    }
    
    function obtenerIngredientesIngresados(targetFormulario) {
        let arregloValores=[];
        for (const contenidoForm of targetFormulario) {          //esto recorre cada elemento que contiene el form y si encuentra un select guarda su valor en un arreglo, una vez que encuentra los valores de todos los select retorna el arreglo
            if(contenidoForm.tagName == "SELECT"){
                arregloValores.push(contenidoForm.value)
            }
        }
        
        return arregloValores;
    }
    
    function crearBoton(nombre, id) {
        let boton = document.createElement("button");
        boton.textContent=`${nombre}`;
        boton.id=`${id}`;
      
        return boton;
    }
    
    function crearLabelDeIngredientes(nombre) {
        let label= document.createElement("label");
        label.textContent=`Ingrediente ${nombre}`;
        
        return label; 
    }
    
    function agregarSelectsIngredientes(formularioContenedor) {
        let select= document.createElement("select");
        
        
        arregloIngredientes.forEach(e=>{
            let option = document.createElement("option");
            option.value=`${e}`;
            option.textContent=`${e}`;
            select.appendChild(option);
        });
        
        formularioContenedor.appendChild(select);
    }
    
    function obtenerIngredientesPosibles() {
        let arregloIngredientes=[]
        for(let i =0 ; i < arregloComidas.length;i++){
            arregloComidas[i].ingredientes.forEach(e => {         //recorre cada elemento del arregloComidas y se enfoca en los arreglos de ingredientes, por cada elemento del arreglo de ingredientes, lo pushea al arreglo de ingredientes 
                arregloIngredientes.push(e);
            });
        }
        
        eliminarElementosDuplicados(arregloIngredientes);
        
        return arregloIngredientes;
    }
    
    
    function eliminarElementosDuplicados(arreglo) {
        for(let i = 0; i < arreglo.length; i++){       //recorre todo el arreglo de ingredientes y compara cada ingrediente(i) con todos los demas(j), si encuentra q el ingrediente (i) es igual al ingrediente (j), remueve son splice "1" elemento a partir de la posicion j
            for(let j = i+1; j < arreglo.length;j++){
                if(arreglo[i] == arreglo[j]){
                    arreglo.splice(j,1);
                }
            }
        }
    }
    
    
    /*//////////////////////////////////////////FUNCIONES DE LA SECCION INICIO///////////////////////////////////////////////////////////////////////// */
    
    function eventosSeccionInicio(formularioContacto) {
        if(formularioContacto){
            formularioContacto.addEventListener("submit", enviarFormulario); //escucha el envio del formulario
            btnGenerarCaptcha.addEventListener("click", mostrarCaptcha);    //esto hace que se muestre y genere un nuevo captcha al hacer click en el boton 🔄
            inputCaptcha.addEventListener("input",verificarCaptchaIngresado); //se mantiene "escuchando" cuando el usuario cambia el valor del input donde debe ingresar el captcha
            inputCaptcha.addEventListener("blur",verificarCaptchaIngresado); //se puede utilizar blur tambien para lo anterior(cambia detalles)
            document.addEventListener("DOMContentLoaded", mostrarCaptcha)
        }
        
    }
    
    
    function enviarFormulario(e){   //se ejecuta cuando se hace click en el boton ENVIAR del formulario
        e.preventDefault();
        
        let formData= new FormData(formularioDeContacto);   /*Captura/genera entre otros: "entries" obj {[nameDelInput:"valor"], ...} */
        let valoresEnInputs=[];
        let conjuntosClaveValor=[];
        for (let claveValorInput of formData.entries()) { 
            /* for of itera cualquier dato(string,obj,array) */
            /*claveValorInput en cada iteracion vale un array de 2 elementos ["name del input", "valor"] */
            conjuntosClaveValor.push(claveValorInput); /*   SE PUEDEN USAR LOS DATOS COMO MATRIZ CLAVE-VALOR*/
            valoresEnInputs.push(claveValorInput[1]); /*utilizando el metodo push guardo cada valor de cada input(name,valor) iterado */
        }  /*claveValorInput[1] valdra en cada iteracion el valor que toma del input. En su posicion [0] el name que toma ese input*/
        
        console.log(conjuntosClaveValor);
        console.log(valoresEnInputs);  //OBTIENE LOS DATOS
        vaciarFormulario(e);       //VACIA EL FORMULARIO
        
    }
    
    //esto crea nodo donde ira el captcha y cada vez que es llamado, llama a un metodo que genera un nuevo captcha
    function mostrarCaptcha() { 
        
        valorCaptcha=obtenerCaptcha();          //esto permite que siempre valorCaptcha sea aleatorio
        
        layoutCaptcha.innerHTML='';
        layoutCaptcha.innerHTML+=`${valorCaptcha}`;     //escribe en el parrafo layoutCaptcha el captcha aleatorio
        
    };
    
    //crea y retorna un string de X(cantidadCaracteresCaptcha) cantidad de caracteres a partir del array de caracteres.tomando caracteres de ese array aleatoriamente
    function obtenerCaptcha() {
        let captcha='';
        for(let i=0; i < cantidadCaracteresCaptcha; i++){  
            captcha+=valoresCaptcha[Math.floor(Math.random()*valoresCaptcha.length)];
        }
        
        return captcha;
    }
    
    function verificarCaptchaIngresado(e) {
        let valorInputCaptcha=e.target.value; //obtiene el valor del input del captcha cuando se ejecuta evento input/blur 
        alertaCaptcha.innerHTML='';
        
        //compara el valor del input con la variable GLOBAL valorCaptcha y responde mediante el parrafo alertaCaptcha(NODO CAPTURADO GLOBAL)
        if(valorInputCaptcha == valorCaptcha){
            mostrarElemento(btnEnviarForm);
            alertaCaptcha.innerHTML="Captcha ingresado valido ✅";
            
        }else{
            ocultarElemento(btnEnviarForm);
            alertaCaptcha.innerHTML="Captcha invalido ❌";
        }
        
    }
    
    function vaciarFormulario(data) {
        for(let i=0 ; i < data.target.length; i++){
            if(data.target[i].tagName == "INPUT" || data.target[i].tagName == "TEXTAREA"){  //vacia cada input ó textarea q encuentra del form
                data.target[i].value='';
            }      
        }
        mostrarCaptcha();                                            //muestra y genera otro captcha aleatorio                                                   
        ocultarElemento(btnEnviarForm);                              //oculta el boton de enviar
        alertaCaptcha.innerHTML='';                                  //vacia la alerta del captcha
    }
    
    function ocultarElemento(nodoDelElemento) {
        nodoDelElemento.classList.remove("d-activo");
        nodoDelElemento.classList.add("d-none");
    }                                                                //se le pasa un nodo capturado con querySelector y le cambia la clase hecha en css
    function mostrarElemento(nodoDelElemento) {
        nodoDelElemento.classList.remove("d-none");
        nodoDelElemento.classList.add("d-activo");
    }
    
    /*////////////////////////////////////////////FUNCION MENU RESPONSIVE///////////////////////////////////////////////////////////////// */
    function generarMenuResponsive() {
        btnMenuNavegacion.addEventListener("click", mostrarMenuResposive);
        
        function mostrarMenuResposive() {
            let listaNavegacion= document.querySelector("nav");
            listaNavegacion.classList.toggle("d-flex");
        }
        
    }
    
    generarMenuResponsive()
    crearFormularioDeTabla(contenedorFormTabla);
    eventosSeccionInicio(formularioDeContacto);
    mostrarCaptcha();
}































