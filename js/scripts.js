"use strict"

const btnMenuNavegacion=document.querySelector("#btnNavDesplegable");

btnMenuNavegacion.addEventListener("click", mostrarMenuResposive)

function mostrarMenuResposive() {
    let listaNavegacion= document.querySelector("nav");
    listaNavegacion.classList.toggle("d-flex");
}










const formularioDeContacto = document.querySelector("#formularioContacto");
const btnEnviarForm= document.querySelector("#btnEnviarForm");


const btnGenerarCaptcha=document.querySelector("#btnGenerarCaptcha");
const alertaCaptcha= document.querySelector("#alertaCaptcha");
const inputCaptcha = document.querySelector("#inputCaptchaIngresado");

const valoresCaptcha= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
const cantidadCaracteresCaptcha=6; // (coincidir maxlength del input)
let valorCaptcha='';

formularioDeContacto.addEventListener("submit", enviarFormulario); //escucha el envio del formulario
btnGenerarCaptcha.addEventListener("click", mostrarCaptcha);    //esto hace que se muestre y genere un nuevo captcha al hacer click en el boton 🔄
inputCaptcha.addEventListener("input",verificarCaptchaIngresado); //se mantiene "escuchando" cuando el usuario cambia el valor del input donde debe ingresar el captcha
inputCaptcha.addEventListener("blur",verificarCaptchaIngresado); //se puede utilizar blur tambien para lo anterior(cambia detalles)

document.addEventListener("DOMContentLoaded", mostrarCaptcha); 
//esto hace que cada vez que cargue el DOM (refrescar pagina) ejecute la funcion mostrarCaptcha, generando un nuevo captcha aleatorio
//se podria agregar un setInterval y ejecutar mostrarCaptcha() para que el captcha "expire/cambie" cada X tiempo


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
    let layoutCaptcha = document.querySelector("#captcha");             
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