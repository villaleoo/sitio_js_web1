document.addEventListener("DOMContentLoaded", main);    //(1) cuando carga el sitio se llama la funcion main
window.addEventListener("popstate", e=>{ 
    console.log(e);       //esto maneja el evento de ir hacia adelante y atras en el sitio
    
    // let estadoAnterior= e.state.idSeccion;     // al hacer click en adelante o atras, captura el id del elemento donde estabamos parados anteriormente
    // console.log("estado id="+ estadoAnterior);
    if(e.state != null){
        checkearSeccionEnNav(e.state.idSeccion);   //selecciona la seccion en nav con el id capturado
        renderContenidoDeSeccion(e.state.idSeccion);//renderiza el contenido acorde al id capturado
        
    }else{
        checkearSeccionEnNav("inicio");
        renderContenidoDeSeccion("inicio");
        
    }
})

function main() {
    const btnMenuNavegacion=document.querySelector("#btnNavDesplegable");
    checkearSeccionEnNav("inicio");
    renderContenidoDeSeccion("inicio");
    renderNav();
    generarMenuResponsive();
    
    function generarMenuResponsive() {
        btnMenuNavegacion.addEventListener("click", mostrarMenuResposive);
        
        function mostrarMenuResposive() {
            let listaNavegacion= document.querySelector("nav");
            listaNavegacion.classList.toggle("d-flex");
        }
        
    }
    
}

function renderNav() {
    let seccionesNav= document.querySelectorAll(".navegacion");     //toma del DOM los items de navegacion
    seccionesNav.forEach(e => {
        e.addEventListener("click", evento=> renderElementosDeSeccion(evento)); //se asigna evento click a cada uno de los items de la nav, llamando a la funcion renderElementosSeccion
    })
}

//se encarga de renderizar en el document los elementos propios de cada seccion: url, titulo y contenido;
function renderElementosDeSeccion(e) {
    let idSeccion= e.target.id; //se captura el id del elemento de navegacion donde se hizo click
    window.history.pushState({idSeccion}, `${idSeccion}`, `/${idSeccion}`);    //modifica la url
    
    checkearSeccionEnNav(idSeccion);    //checkea el item nav de acuerdo al id
    
    if(idSeccion === "tabla"){
        document.title=`${capitalizarTexto(idSeccion)} Magica / BooM`;
    }else{                                    //actualiza el titulo del sitio de acuerdo al id
        document.title=`${capitalizarTexto(idSeccion)} / BooM`;
    }
    
    renderContenidoDeSeccion(idSeccion);    // muestra el contenido de acuerdo al id/seccion q se selecciona
    
}

//checkea visualmente el item de la nav donde se hizo click (donde se está parado)
function checkearSeccionEnNav(idSeccionSeleccionada) {
    document.querySelectorAll(".navegacion").forEach((item)=> item.classList.remove("seccion-selec"));
    document.querySelectorAll(`#${idSeccionSeleccionada}`).forEach((item)=>item.classList.add("seccion-selec"));
}

///////////funcion controladora de secciones
function renderContenidoDeSeccion(idSeccionSeleccionada) {
    let contenedor= document.querySelector("#main");
    contenedor.innerHTML=' ';
    contenedor.innerHTML+=`<div class="contenedor-spinner">
    <p>Cargando...</p>
    </div>`;
    
    
    if(idSeccionSeleccionada == "inicio"){
        inicializarInicio();
    }else if(idSeccionSeleccionada == "cocktails" || idSeccionSeleccionada == "comidas"){
        let paginacionDeInicio=1;
        inicializarSeccionListas(idSeccionSeleccionada, paginacionDeInicio);
    }else if(idSeccionSeleccionada == "tabla"){
        inicializarSeccionTabla();
    }else{
        console.log("render error");
        inicializarError();
    }
}

/////funcion controladora seccion coctails y recetas
async function inicializarSeccionListas(seccionSeleccionada, paginacionDeInicio) {  
    const cantidadItemsPagina=8;
    const contenedor=document.querySelector("#main");
    let arregloRecetasFiltrado= await obtenerListaParcialRecetasApi(paginacionDeInicio,cantidadItemsPagina,seccionSeleccionada);
    let arregloBusqueda= await obtenerRecetasPorSeccionApi(seccionSeleccionada);
    contenedor.innerHTML=``;
    
    if(arregloRecetasFiltrado && arregloBusqueda){
        const minPaginas=1;  
        let contenedorPaginacion=document.createElement("div");      
        let btnBusqueda= document.createElement("button");
        let btnSiguiente= document.createElement("button");
        let btnAnterior=document.createElement("button");
        let txtPaginacion=document.createElement("p");
        let inputBusqueda= iniciarInputDeBusqueda("text", 30, `Busca tus ${seccionSeleccionada}/ingredientes`, "inputBusqueda");
        
        contenedorPaginacion.classList.add("contenedor-paginacion");
        btnSiguiente.textContent="Siguiente🔜";
        btnAnterior.textContent="Anterior🔙";
        btnBusqueda.textContent="🔍";
        btnBusqueda.classList.add("btn-busqueda-recetas");
        txtPaginacion.textContent=`- ${paginacionDeInicio} -`;
        btnBusqueda.addEventListener("click", ()=>{
            buscarRecetas(seccionSeleccionada,arregloBusqueda);
        });
        inputBusqueda.addEventListener("keypress", (e)=>{
            busquedaPorInput(e, seccionSeleccionada, arregloBusqueda);
        })
        contenedor.innerHTML+=`<h2>${capitalizarTexto(seccionSeleccionada)}</h2>`;
        contenedor.appendChild(inputBusqueda);
        contenedor.appendChild(btnBusqueda);
        
        contenedorPaginacion.appendChild(btnAnterior)
        contenedorPaginacion.appendChild(txtPaginacion);
        contenedorPaginacion.appendChild(btnSiguiente)
        contenedor.appendChild(contenedorPaginacion);
        
        
        if(arregloRecetasFiltrado.length == cantidadItemsPagina){ /*SI LA API ESTA TRAYENDO DE A 8 (cantidadItemsPagina),segui habilitando el evento para q traiga mas paginas */
        
        btnSiguiente.addEventListener("click", ()=>{
            avanzarSeccion(seccionSeleccionada, paginacionDeInicio);
        })
    }else{
        desaparecerBoton(btnSiguiente);
        
    }   
    if(paginacionDeInicio != minPaginas){ /*el minPaginas sirve para eventualmente no mostrar la pagina 1 y comenzar con minPaginas en 2 (tambien modificar variable "padre" paginacionDeInicio)*/
    btnAnterior.addEventListener("click", ()=>{         
        retrocederSeccion(seccionSeleccionada, paginacionDeInicio);
    })
}else{
    desaparecerBoton(btnAnterior);
    
} 

renderizarLista(arregloRecetasFiltrado);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function iniciarInputDeBusqueda(tipo, maxlen, pholder,id ) {
    let input = document.createElement("input");
    
    input.type=tipo;
    input.maxLength=maxlen;
    input.placeholder=pholder;
    input.id=id;
    
    return input;
}
function avanzarSeccion(seccion,pagina) {
    pagina=pagina+1;
    inicializarSeccionListas(seccion,pagina);
    
}
function retrocederSeccion(seccion,pagina) {
    pagina= pagina-1;
    inicializarSeccionListas(seccion,pagina);
}
function desaparecerBoton(btn) {
    btn.style.color="gray";
    btn.style.cursor="auto";
    btn.style.textDecoration="none";
}
function busquedaPorInput(e,seccion,arregloBusqueda ) {
    if(e.code === "Enter"){
        e.preventDefault();
        buscarRecetas(seccion,arregloBusqueda);
    }
}
function buscarRecetas(seccion, arregloDeBusqueda) {
    let valorInputBusqueda= document.querySelector("#inputBusqueda").value.toLowerCase().trim();
    let recetasEncontradas=[];
    
    if(valorInputBusqueda != ''){
        arregloDeBusqueda.forEach(receta => {
            if(receta.nombre.toLowerCase().includes(valorInputBusqueda)){
                recetasEncontradas.push(receta);
            }
            receta.ingredientes.forEach(ingrediente => {
                if(ingrediente.toLowerCase().includes(valorInputBusqueda) && !recetasEncontradas.includes(receta)){     /*esto por si el algun ingrediente tambien esta en el nombre principal */
                recetasEncontradas.push(receta);
            }
        })
        
    })
    renderizarLista(recetasEncontradas);
}else{
    inicializarSeccionListas(seccion,1)
}   

}
}else{
    inicializarError();
}   
}

/////funcion controladora seccion tabla magica
async function inicializarSeccionTabla() {
    const contenedor=document.querySelector("#main");
    const maximoConsultasRecetas= 7;
    let arregloRecetasUsuario= [];
    let arregloIngredientes= await obtenerIngredientesPosiblesApi();
    
    contenedor.innerHTML='';
    contenedor.innerHTML+=`
    <h2>Tabla Magica</h2>
    <h4>¡Ingresa 2 ingredientes que tengas en tu casa y te recomendamos recetas!</h4>`;
    crearFormularioSeccionTabla();
    
    ///////////////////////////////////////////////////////////////////////////////////////////////
    function crearFormularioSeccionTabla() {
        const cantidadDeSelects=2;
        let formulario= document.createElement("form");
        let contenedorBotones= document.createElement("div");
        
        contenedorBotones.classList='contenedor-botones-form-tabla';
        formulario.id="formularioDeTabla";
        formulario.addEventListener("submit", inicializarTabla);
        
        for(let i = 1; i <= cantidadDeSelects; i++){
            formulario.appendChild(crearLabelDeIngredientes(i));
            agregarSelectsIngredientes(formulario);
        }
        
        contenedorBotones.appendChild(crearBoton("Mostrar recetas", "mostrarRecetas"));
        contenedorBotones.appendChild(crearBoton("Generar aleatorio", "generarAleatorio"));
        contenedorBotones.appendChild(crearBoton("Vaciar tabla", "vaciarTabla"));
        
        formulario.appendChild(contenedorBotones);
        contenedor.appendChild(formulario);
        /////////////////////////////////////////////////////
        
        function agregarSelectsIngredientes(form) {
            let select= document.createElement("select");
            
            arregloIngredientes.forEach(e=>{
                let option = document.createElement("option");
                option.value=`${e}`;
                option.textContent=`${e}`;
                select.appendChild(option);
            });
            
            form.appendChild(select);
        }
        
        function crearLabelDeIngredientes(nombre) {
            let label= document.createElement("label");
            label.textContent=`Ingrediente ${nombre}`;
            
            return label; 
        }
        
        function crearBoton(nombre, id) {
            let boton = document.createElement("button");
            boton.textContent=`${nombre}`;
            boton.id=`${id}`;
            
            return boton;
        }
    }
    
    function inicializarTabla(e) {
        e.preventDefault()
        let ingredientesIngresados=obtenerIngredientesIngresados(e.target); //obtiene los ingredientes que agrega el usuario mediante selects
        
        if(e.submitter.id == "mostrarRecetas"){
            eliminarElementosDuplicados(ingredientesIngresados);
            obtenerRecetasRecomendadasUsuario(ingredientesIngresados);
        }else if(e.submitter.id == "vaciarTabla"){
            vaciarTabla();
        }else{
            generarRecetasAleatorias();
        }
        
        /////////////////////////////////////////////////////////////////
        function obtenerIngredientesIngresados(targetFormulario) {
            let arregloValores=[];
            for (const contenidoForm of targetFormulario) {          //esto recorre cada elemento que contiene el form y si encuentra un select guarda su valor en un arreglo, una vez que encuentra los valores de todos los select retorna el arreglo
                if(contenidoForm.tagName == "SELECT"){
                    arregloValores.push(contenidoForm.value)
                }
            }
            
            return arregloValores;
        }
        
        async function obtenerRecetasRecomendadasUsuario(ingredientesUsuario) {
            let url = new URL('https://649cbbcd048075719238782f.mockapi.io/api/recetas');
            let recetasEncontradas=[];
            try {
                let promesa= await fetch(url);
                let data=await promesa.json();
                if(promesa.ok){
                    data.forEach(receta=>{
                        receta.ingredientes.forEach(ingrediente=>{
                            ingredientesUsuario.forEach(ingredienteUsuario=>{
                                if(ingrediente.toLowerCase() == ingredienteUsuario.toLowerCase() && !recetasEncontradas.includes(receta)){
                                    recetasEncontradas.push(receta);
                                }
                            })
                        })
                    })
                    if(arregloRecetasUsuario.length < maximoConsultasRecetas){
                        arregloRecetasUsuario.unshift({"recetas":recetasEncontradas, "ingredientes":ingredientesUsuario});
                    }else{
                        arregloRecetasUsuario=agregarAlComienzoArr(arregloRecetasUsuario, {"recetas": recetasEncontradas, "ingredientes": ingredientesUsuario});
                    }
                    renderizarTabla(arregloRecetasUsuario);
                }else{
                    console.log("error de sintaxis");
                }
                
            } catch (error) {
                console.log("error fetch");
            }
            return null;  
            
        }
        
        async function renderizarTabla(arregloRecetasUsuario) {
            let encabezados=["Resultados", "Ingredientes"];
            let tabla='';
            let cuerpoTabla=document.createElement("tbody");  
            let tablaEnDom=document.querySelector("#tablaRecetas");
            let arregloRecetas= await arregloRecetasUsuario;
            
            if(tablaEnDom){
                tabla= document.querySelector("#tablaRecetas");
                tabla.innerHTML='';
                
            }else{
                tabla=document.createElement("table");
                tabla.id="tablaRecetas";
            }
            if(arregloRecetas.length > 0){
                tabla.innerHTML+=`<thead><tr><th>${encabezados[0]}</th><th>${encabezados[1]}</th></tr></thead>`;
            }
            
            for (let i = 0; i < arregloRecetas.length; i++) {
                let fila= document.createElement("tr");
                let columnaResultados=document.createElement("td");
                let columnaIngredientes=document.createElement("td");
                let botonEliminar=document.createElement("button");
                let botonResultados= document.createElement("button");
                
                botonEliminar.textContent="❌";
                botonResultados.textContent=`${arregloRecetas[i]["recetas"].length} resultados`;
                botonResultados.classList.add("btn-tabla");
                botonResultados.addEventListener("click", ()=>{
                    renderizarLista(arregloRecetas[i]["recetas"]);
                });
                botonEliminar.addEventListener("click",()=>{
                    arregloRecetasUsuario.splice(i, 1);
                    renderizarTabla(arregloRecetasUsuario);
                    if(document.querySelector("#listaRecetas")){
                        document.querySelector("#listaRecetas").innerHTML='';
                    };
                })
                if(i === 0){
                    let spanPrimerFila=document.createElement("span");
                    spanPrimerFila.textContent="new";
                    spanPrimerFila.classList.add("estilo-primer-fila");
                    columnaResultados.appendChild(spanPrimerFila);
                }
                if(arregloRecetas[i]["ingredientes"].length == 1){
                    columnaIngredientes.innerHTML+=`${arregloRecetas[i]["ingredientes"][0]}.`;
                }else{
                    columnaIngredientes.innerHTML+=`${arregloRecetas[i]["ingredientes"][0]}, ${arregloRecetas[i]["ingredientes"][1].toLowerCase()}.`
                }
                
                columnaResultados.appendChild(botonResultados);
                
                fila.appendChild(columnaResultados);
                fila.appendChild(columnaIngredientes);
                fila.appendChild(botonEliminar);
                
                cuerpoTabla.appendChild(fila);
            }
            
            tabla.appendChild(cuerpoTabla);
            if(tablaEnDom){
                tabla.appendChild(cuerpoTabla);
            }else{
                contenedor.appendChild(tabla);
            }  
            
        }
        
        function generarRecetasAleatorias() {
            const cantidad= 3;
            
            for(let i=0 ; i < cantidad; i++){
                let ingrediente= arregloIngredientes[Math.floor(Math.random()*arregloIngredientes.length)];
                obtenerRecetasRecomendadasUsuario([ingrediente]);
            }
        }
        
        function vaciarTabla() {
            if(document.querySelector("#tablaRecetas")){
                document.querySelector("#tablaRecetas").innerHTML='';
            }
            if(document.querySelector("#listaRecetas")){
                document.querySelector("#listaRecetas").innerHTML=''
            }
            arregloRecetasUsuario=[];
        }
        
    }
    
    async function obtenerIngredientesPosiblesApi(){
        let url = new URL('https://649cbbcd048075719238782f.mockapi.io/api/recetas');
        let arregloIngredientes=[];
        try {
            let promesa= await fetch(url);
            let data= await promesa.json();
            if(promesa.ok){
                data.forEach(receta=>{
                    receta.ingredientes.forEach(ingrediente =>{
                        if(!arregloIngredientes.includes(ingrediente)){
                            arregloIngredientes.push(ingrediente);
                        }
                    })
                })
                return arregloIngredientes;
            }else{
                console.log("error sintaxis");
            }
            
        } catch (error) {
            console.log("error fetch");
        }
        return null;  
    }
}

////////funcion controladora seccion inicio
async function inicializarInicio() {
    const cantidadImgsInicio=3;
    let contenedor= document.querySelector("#main");
    let captcha=obtenerCaptchaAleatorio();
    let arregloImgsRecetas= await obtenerElementosApi(cantidadImgsInicio);
    
    if(arregloImgsRecetas){  /*por principio de falsy, si devuelve null esto sera falso */
        contenedor.innerHTML='';
        crearTarjetasImgs(arregloImgsRecetas, contenedor);
        crearFormularioContacto(contenedor);
        ////////////////////////////////////////////////////////////////////////////////////////
    
        function crearTarjetasImgs(arrInformacion, contenedor) {
            let seccion= document.createElement("section");
            seccion.classList.add("tarjetas-inicio");
            for (let i = 0; i < arrInformacion.length; i++) {
                let contenedorTarjeta= document.createElement("article");
                if(i == 0){
                    contenedorTarjeta.style.backgroundImage= `url('../imgs/sorrentinos-tricolor.jpg')`;
                }else if(i == 1){
                    contenedorTarjeta.style.backgroundImage= `url('../imgs/real-burger.jpg')`;
                }else{
                    contenedorTarjeta.style.backgroundImage= `url('../imgs/cocktail-red.jpg')`;
                }

                contenedorTarjeta.innerHTML+=`<div class="texto-articulo">
                <h2>${arrInformacion[i].nombre}</h2>
                </div>`;
                contenedorTarjeta.addEventListener("click", ()=>{
                    mostrarReceta(arrInformacion[i]);
                });
                seccion.appendChild(contenedorTarjeta);
            }
            contenedor.appendChild(seccion);
        }
    
        function crearFormularioContacto(contenedor) {
            const inputsForm=["nombre", "email", "descripcion","captcha"];
            const idCampos="contacto";
            let formulario= document.createElement("form");
            let parrafoCaptcha=document.createElement("p");
            let alertaCaptcha=document.createElement("p");
            let tituloContacto=document.createElement("h2");
            let subtituloContacto=document.createElement("h4");
            tituloContacto.innerHTML="Contacta con nosotros";
            subtituloContacto.innerHTML="Envianos tu receta o danos tu opinion de nuestro servicio.";

            formulario.classList.add("formulario-contacto");
            formulario.id="formContacto";
            formulario.addEventListener("submit",enviarFormulario);
            alertaCaptcha.id='alertaCaptcha';
            parrafoCaptcha.id="layoutCaptcha";
            parrafoCaptcha.innerHTML=`Captcha: ${captcha}`;
            formulario.appendChild(tituloContacto);
            formulario.appendChild(subtituloContacto);

            inputsForm.forEach(elemento =>{

                if(elemento != 'descripcion'){
                    let input = crearInput(elemento,idCampos);
                    formulario.appendChild(input);

                }else{
                    let txtArea=document.createElement("textarea");
                    txtArea.placeholder="Escribinos tu consulta.";
                    txtArea.required=true;
                    txtArea.rows=10;
                    txtArea.maxLength=250;
                    formulario.appendChild(txtArea);
                }
            })
            formulario.appendChild(parrafoCaptcha);
            formulario.appendChild(alertaCaptcha);
            contenedor.appendChild(formulario);

            ///////////////////////////////////////////////

            function crearInput(tipoInput,identificador) {
                let input = document.createElement("input");
                input.classList.add(`input-${identificador}`);
                input.name=tipoInput;
                input.required=true;

                if(tipoInput == "nombre"){
                    input.type="text";
                    input.maxLength=20;
                    input.placeholder="Ingrese su nombre";
                }
                if(tipoInput == "email"){
                    input.type="email";
                    input.maxLength=30;
                    input.placeholder="Ingrese su e-mail";
                }
                if(tipoInput == "captcha"){
                    input.type="text";
                    input.id="captchaContacto"
                    input.maxLength=6;
                    input.placeholder="Ingrese captcha";
                    input.addEventListener("input",verificarCaptcha); //se mantiene "escuchando" cuando el usuario cambia el valor del input donde debe ingresar el captcha
                    input.addEventListener("blur",verificarCaptcha); //se puede utilizar blur tambien para lo anterior(cambia detalles)

                }
                return input;
            }
        }

        function verificarCaptcha() {
            let captchaIngresado=document.querySelector("#captchaContacto").value;
            let formulario=document.querySelector("#formContacto");
            let alertaCaptcha=document.querySelector("#alertaCaptcha");
            let btnEnvioForm=document.querySelector(".btn-form-contacto");
            alertaCaptcha.innerHTML='';

            if(captchaIngresado === captcha){
                alertaCaptcha.innerHTML="Captcha ingresado correctamente.";

                if(!btnEnvioForm){
                    let btnEnviar=document.createElement("button");
                    btnEnviar.classList.add("btn-form-contacto");
                    btnEnviar.textContent="Enviar";
                    btnEnviar.type="submit";
                    formulario.appendChild(btnEnviar);
                }else{
                    btnEnvioForm.classList.remove("d-none");
                    btnEnvioForm.classList.add("d-flex");
                }
            }else{
                alertaCaptcha.innerHTML="Captcha ingresado invalido.";
                if(btnEnvioForm){
                    btnEnvioForm.classList.remove("d-flex");
                    btnEnvioForm.classList.add("d-none");
                }
            }
        }
    
        function enviarFormulario(e) {
            e.preventDefault();
            let formulario=document.querySelector("#formContacto");
            let alertaCaptcha=document.querySelector("#alertaCaptcha");

            alertaCaptcha.innerHTML="Consulta enviada correctamente!";
            setTimeout(() => {
                alertaCaptcha.innerHTML='';
            }, 2000);
            document.querySelector(".btn-form-contacto").classList.add("d-none");
            formulario.reset();
            captcha=obtenerCaptchaAleatorio();
            document.querySelector("#layoutCaptcha").innerHTML=`Captcha: ${captcha}`;
        }  
    }else{
        inicializarError();
    }

    function obtenerCaptchaAleatorio() {
        const valoresCaptcha= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
        const cantidadCaracteresCaptcha=6; // (coincidir maxlength del input)
        let captcha='';
        for(let i=0; i < cantidadCaracteresCaptcha; i++){  
            captcha+=valoresCaptcha[Math.floor(Math.random()*valoresCaptcha.length)];
        }
        return captcha;  
    }
}
///////////////////////////////////////////////////////////FUNCIONES PARA TODO EL SITIO////////////////////////////////////////////////////////////////////////////////////////
function inicializarError() {
    let contenedor = document.querySelector("#main");
    contenedor.innerHTML='';
    contenedor.innerHTML+=`<p>ups...</p>
    <h1>404 not found 😡</h1>`;
    
}

function mostrarReceta(receta) {
    let id= receta.id;
    let contenedor=document.querySelector("#main");
    let articulo=document.createElement("article");
    let contenedorDetalles= crearDiv("contenedor-detalles-receta");
    let contenedorTexto= crearDiv("texto-detalles-receta");
    let seccionCheck=document.querySelector(".seccion-selec");
    let parrafoImagen=document.createElement("p");
    let parrafoIngredientes=document.createElement("p");
    let parrafoDescripcion=document.createElement("p");
    
    seccionCheck.classList.remove("seccion-selec");
    contenedor.innerHTML='';
    window.history.pushState({id}, `${id}`, `/receta/${id}`); 
    document.title=`${receta.nombre} / BooM`;
    articulo.classList.add("vista-receta");
    articulo.innerHTML+=`<h2>${receta.nombre}</h2>`;
    parrafoImagen.innerHTML="imagenReceta🍕";
    
    for (let i = 0; i < receta.ingredientes.length; i++) {
        if(i == 0){
            parrafoIngredientes.innerHTML+=`${receta.ingredientes[i]}, `
        }else if(i == receta.ingredientes.length-1){
            parrafoIngredientes.innerHTML+=`${receta.ingredientes[i].toLowerCase()}. `
            
        }else{
            parrafoIngredientes.innerHTML+=`${receta.ingredientes[i].toLowerCase()}, `
        }
    }
    parrafoDescripcion.innerHTML+=`${receta.descripcion}`;
    contenedorTexto.appendChild(parrafoIngredientes);
    contenedorTexto.appendChild(parrafoDescripcion);
    contenedorDetalles.appendChild(parrafoImagen);
    contenedorDetalles.appendChild(contenedorTexto);
    articulo.appendChild(contenedorDetalles)
    contenedor.appendChild(articulo);
}
function crearDiv(clase) {
    let nuevoDiv=document.createElement("div");
    nuevoDiv.classList.add(clase);
    
    return nuevoDiv;
}

function renderizarLista(arregloRecetas) {
    
    if(arregloRecetas.length > 0){
        let existeListaEnDom=document.querySelector("#listaRecetas");  /*si no la encuentra valdra null*/
        let contenedorMain='';
        let listaRecetas='';
        
        if(existeListaEnDom){
            listaRecetas= document.querySelector("#listaRecetas");
            listaRecetas.innerHTML='';
        }else{
            contenedorMain=document.querySelector("#main");
            listaRecetas= document.createElement("section");
            listaRecetas.id="listaRecetas"; 
        }
        
        arregloRecetas.forEach(receta => {
            let itemLista=document.createElement("article");
            let parrafoIngrediente= document.createElement("p");
            itemLista.classList.add("item-lista-recetas");
            itemLista.id=`receta${receta.id}`;
            itemLista.innerHTML+=`
            <h3>${receta.nombre}</h3> `;
            
            for (let i = 0; i < receta.ingredientes.length; i++) {
                if(i == 0){
                    parrafoIngrediente.innerHTML+=`${receta.ingredientes[i]}, `
                }else if(i == receta.ingredientes.length-1){
                    parrafoIngrediente.innerHTML+=`${receta.ingredientes[i].toLowerCase()}. `
                    
                }else{
                    parrafoIngrediente.innerHTML+=`${receta.ingredientes[i].toLowerCase()}, `
                }
            }
            itemLista.appendChild(parrafoIngrediente);
            itemLista.addEventListener("click", ()=>{ mostrarReceta(receta)});
            listaRecetas.appendChild(itemLista); 
        })
        if(!existeListaEnDom){
            contenedorMain.appendChild(listaRecetas);
        }
        
    }
    
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

function agregarAlComienzoArr(arreglo, elemento) {
    for(let i= arreglo.length-1; i>=0 ;i--){
        if(i != 0){
            arreglo[i]= arreglo[i-1];
        }else{
            arreglo[i]= elemento;
        }
    }
    return arreglo;
}

function capitalizarTexto(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

async function obtenerRecetasPorSeccionApi(seccion) {
    let url = new URL('https://649cbbcd048075719238782f.mockapi.io/api/recetas');
    url.searchParams.append("receta", seccion);
    
    try {
        let promesa= await fetch(url);
        let data= await promesa.json();
        if(promesa.ok){
            return data;
        }else{
            console.log("error sintaxis");
        }
        
    } catch (error) {
        console.log("error fetch");
    }
    
    return null;
    
}

async function obtenerListaParcialRecetasApi(numeroDePagina, cantidadItemsPagina,seccionSeleccionada){
    let url = new URL('https://649cbbcd048075719238782f.mockapi.io/api/recetas');
    url.searchParams.append("page", numeroDePagina);
    url.searchParams.append("limit",cantidadItemsPagina);
    url.searchParams.append("receta", seccionSeleccionada);
    
    try {
        let promesa= await fetch(url);
        let data= await promesa.json();
        if(promesa.ok){
            return data;
        }else{
            console.log("error sintaxis");
        }
        
    } catch (error) {
        console.log("error fetch");
    }
    
    return null;
}

async function obtenerElementosApi(cantidadElementos) {
    let URL= `https://649cbbcd048075719238782f.mockapi.io/api/recetas`;
    let elementosNecesarios=null; /*elementos necesarios se presume null para retornar null en caso de que no se encuentren resultados */
    
    try {
        let promesa = await fetch(URL);
        let data= await promesa.json();
        if (promesa.ok) {
            if(cantidadElementos != '*'){
                elementosNecesarios= data.filter(recetas => recetas.id <= cantidadElementos )
            }else{
                elementosNecesarios=data;
            }  
            console.log("ok");
        }else{
            console.log("error sintaxis en la url 404");
        }
        
    } catch (error) {
        console.log(error);
        console.log("error no se puede conectar con url fetch");
        
    }
    return elementosNecesarios   
}