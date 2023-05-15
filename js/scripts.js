"use strict"

const formulario = document.querySelector("#formulario");
const btnEnviarForm= document.querySelector("#btn-enviar-form");

const contenedorCaptcha = document.querySelector("#contenedor-captcha");
const btnGenerarCaptcha=document.querySelector("#btn-generar-captcha");
const alertaCaptcha= document.querySelector("#alerta-captcha");

const valoresCaptcha= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
const cantidadCaracteresCaptcha=6;
let valorCaptcha='';

formulario.addEventListener("submit", enviarFormulario);
btnGenerarCaptcha.addEventListener("click", mostrarCaptcha);    //esto hace que se muestre un nuevo captcha al hacer click
btnGenerarCaptcha.addEventListener("click", verificarCaptchaIngresado); //ejecutar esta funcion permite que verifique cada vez que se genera un nuevo captcha

function enviarFormulario(e){
    e.preventDefault();

    let formData= new FormData(formulario);   /*Captura "entries" obj {[nameDelInput:"valor"], ...} */
    let valoresEnInputs=[];
    let conjuntosClaveValor=[]

     for (let claveValorInput of formData.entries()) { 
        /* for of itera cualquier tipo de dato(string,obj,array) */
        /*claveValorInput en cada iteracion vale un array de 2 elementos ["name del input", "valor"] */
         conjuntosClaveValor.push(claveValorInput); /*   SE PUEDEN USAR LOS DATOS COMO MATRIZ CLAVE-VALOR*/
         valoresEnInputs.push(claveValorInput[1]); /*utilizando el metodo push guardo cada valor de cada input(name,valor) iterado */
     }  /*claveValorInput[1] valdra en cada iteracion el valor que toma del input y en su posicion [0], el name que toma ese input*/

     console.log(conjuntosClaveValor);
     console.log(valoresEnInputs);  //OBTIENE LOS DATOS
     vaciarFormulario(e);       //VACIA EL FORMULARIO
    
}

function mostrarCaptcha() {
    let layoutCaptcha = document.querySelector("#captcha");             
    let inputCaptcha = document.querySelector("#inputCaptchaIngresado");
    valorCaptcha=obtenerCaptcha();          //esto permite que siempre valorCaptcha sea aleatorio

    layoutCaptcha.innerHTML='';
    layoutCaptcha.innerHTML+=`${valorCaptcha}`;     //escribe en el parrafo layoutCaptcha el captcha aleatorio

    //se mantiene "escuchando" cuando el usuario sale del input donde debe ingresar el captcha
    inputCaptcha.addEventListener("blur",verificarCaptchaIngresado);    
    
};
mostrarCaptcha(); //SE EJECUTA SIEMPRE ESTA FUNCION PARA QUE SIEMPRE ESCUCHE EL EVENTO Y SIEMPRE SE CREE UN CAPTCHA ALEATORIO AL REFRESCAR LA PAG

 //crea y retorna un string de X(cantidadCaracteresCaptcha) cantidad de caracteres a partir del array de caracteres.tomando caracteres de ese array aleatoriamente
function obtenerCaptcha() {
    let captcha='';
    for(let i=0; i < cantidadCaracteresCaptcha; i++){  
        captcha+=valoresCaptcha[Math.floor(Math.random()*valoresCaptcha.length)];
    }
    return captcha;
}

function verificarCaptchaIngresado(e) {
    let valorInputCaptcha=e.target.value;      //obtiene el valor del input del captcha
    alertaCaptcha.innerHTML='';

    //compara el valor del input con la variable GLOBAL valorCaptcha y responde mediante el parrafo alertaCaptcha
    if(valorInputCaptcha == valorCaptcha){
        mostrarBoton(btnEnviarForm);
        alertaCaptcha.innerHTML="Captcha ingresado valido ✔";
         
    }else{
        ocultarBoton(btnEnviarForm);
        alertaCaptcha.innerHTML="Captcha invalido ❌";
    }
   
}

function vaciarFormulario(data) {
    for(let i=0 ; i < data.target.length; i++){
        if(data.target[i].tagName == "INPUT" || data.target[i].tagName == "TEXTAREA"){      //vacia cada input/textarea del form
         data.target[i].value='';
        }      
    }
    mostrarCaptcha();                                            //muestra y genera otro captcha aleatorio                                                   
    ocultarBoton(btnEnviarForm);                                 //oculta el boton de enviar
    alertaCaptcha.innerHTML='';                                  //vacia la alerta del captcha
}

function ocultarBoton(nodoBoton) {
    nodoBoton.classList.remove("d-activo");
    nodoBoton.classList.add("d-none");
}                                                                   //se le pasa un nodo traido con querySelector y le cambia la clase hecha en css
function mostrarBoton(nodoBoton) {
    nodoBoton.classList.remove("d-none");
    nodoBoton.classList.add("d-activo");
}
