"use strict"

const arregloComidas=[
    {
        nombre: "Asado",
        ingredientes: ["Carne de res", "Sal", "Parrilla", "Chimichurri"],
        descripcion: "El asado argentino es un plato típico que se prepara asando carne de res a la parrilla. Para su preparación, se sazona la carne con sal y se la cocina a fuego lento hasta obtener una textura jugosa y sabrosa. Se puede acompañar con chimichurri, una salsa a base de aceite, vinagre, ajo y condimentos.",
        vegano: false
    },
    {
        nombre: "Milanesa de Soja",
        ingredientes: ["Soja texturizada", "Pan rallado", "Huevos", "Condimentos", "Aceite"],
        descripcion: "La milanesa de soja es una opción vegana popular en Argentina. Se prepara utilizando soja texturizada empanada en pan rallado con huevos y condimentos. Luego, se fríe en aceite hasta que esté dorada y crujiente. Es una alternativa sabrosa y libre de carne.",
        vegano: true
    },
    {
        nombre: "Locro",
        ingredientes: ["Maíz blanco", "Porotos", "Calabaza", "Panceta", "Cebolla"],
        descripcion: "El locro es un plato tradicional argentino que se prepara con maíz blanco, porotos, calabaza, panceta y cebolla. Para su elaboración, se cocinan los ingredientes a fuego lento hasta que adquieran una consistencia espesa y sabrosa. Es ideal para los días fríos y se suele disfrutar en festividades patrias.",
        vegano: false
    },
    {
        nombre: "Pizza Especial",
        ingredientes: ["Masa de pizza", "Salsa de tomate", "Queso", "Jamón", "Morrones"],
        descripcion: "La pizza es un plato muy popular en Argentina. Para hacer una pizza clásica, se necesita masa de pizza, salsa de tomate, queso, jamón y morrones. La masa se extiende, se cubre con salsa de tomate, se agregan los ingredientes y se hornea hasta que esté lista. ¡Es una deliciosa opción para compartir en familia o con amigos!",
        vegano: false
    },
    {
        nombre: "Empanada",
        ingredientes: ["Carne picada", "Cebolla", "Huevo", "Aceitunas", "Especias"],
        descripcion: "Las empanadas son un clásico de la gastronomía argentina. Para hacerlas, se prepara un relleno con carne picada, cebolla, huevo, aceitunas y especias. Luego, se rellenan discos de masa, se cierran y se hornean o fríen hasta que estén doradas. Son ideales como entrada o para disfrutar en cualquier ocasión.",
        vegano: false
    },
    {
        nombre: "Guiso de Lentejas",
        ingredientes: ["Lentejas", "Cebolla", "Zanahoria", "Papa", "Condimentos"],
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
        ingredientes: ["Harina de garbanzo", "Agua", "Aceite de oliva", "Sal"],
        descripcion: "La fainá es una especie de pan plano o torta hecha a base de harina de garbanzo. Se prepara mezclando harina de garbanzo, agua, aceite de oliva y sal, y se hornea hasta que esté dorada y firme. Se puede disfrutar como acompañamiento de pizzas o como plato principal.",
        vegano: true
    },
    {
        nombre: "Ravioles",
        ingredientes: ["Masa para ravioles", "Relleno de elección", "Salsa a elección", "Queso rallado"],
        descripcion: "Los ravioles son una pasta rellena muy popular en Argentina. Se hace una masa con harina y huevo, se rellena con ingredientes como carne, pollo, verduras o queso, y se cocina en agua hirviendo. Se sirven con salsa a elección y queso rallado. Son una delicia para disfrutar en cualquier ocasión.",
        vegano: false
    },
    {
        nombre: "Hamburguesa completa",
        ingredientes: ["Pan de hamburguesa", "Hamburguesa", "Queso", "Lechuga", "Tomate"],
        descripcion: "una deliciosa combinación de ingredientes clásicos que resulta en una experiencia culinaria irresistible. Para prepararla, asa una jugosa hamburguesa y colócala sobre un suave pan de hamburguesa.Añade queso derretido,lechuga fresca y rodajas de tomate.¡Disfruta de una hamburguesa completa y sumérgete en su irresistible sabor!",
        vegano: false
    },
    {
        nombre: "Ñoquis",
        ingredientes: ["Papa", "Harina", "Huevo", "Salsa a elección", "Queso rallado"],
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
        ingredientes: ["Masa para tarta", "Verduras de elección", "Queso", "Huevos", "Crema"],
        descripcion: "La tarta de verduras es un plato versátil y nutritivo. Se prepara con masa para tarta, verduras de elección (como espinacas, zanahorias, cebolla), queso, huevos y crema. Se hornea hasta que la masa esté dorada y el relleno esté cocido. Es una opción saludable y deliciosa.",
        vegano: false
    },
    {
        nombre: "Matambre a la Pizza",
        ingredientes: ["Matambre", "Masa de pizza", "Salsa de tomate", "Queso", "Morrones"],
        descripcion: "El matambre a la pizza es un plato típico de la cocina argentina. Consiste en un matambre relleno, cubierto con salsa de tomate, queso y morrones, y cocido al horno. Se sirve caliente y cortado en porciones. Es una opción sabrosa y muy popular en reuniones y asados.",
        vegano: false
    },
    {
        nombre: "Pastel de Papa",
        ingredientes: ["Papas", "Carne picada", "Cebolla", "Huevo", "Condimentos"],
        descripcion: "El pastel de papa es un plato reconfortante y sabroso. Se prepara con una capa de puré de papa en la base y carne picada con cebolla y condimentos en el relleno. Se hornea hasta que esté dorado y se sirve caliente. Es una opción popular en las mesas argentinas.",
        vegano: false
    },
    {
        nombre: "Choripán",
        ingredientes: ["Chorizo", "Pan", "Chimichurri", "Salsa criolla"],
        descripcion: "El choripán es un clásico argentino. Consiste en un chorizo a la parrilla servido en un pan y acompañado de chimichurri y salsa criolla. Es una opción fácil y rápida para disfrutar en una reunión o como comida callejera. El choripán es muy popular en los asados argentinos.",
        vegano: false
    },
    {
        nombre: "Sorrentinos",
        ingredientes: ["Masa para sorrentinos", "Relleno de elección", "Salsa a elección", "Queso rallado"],
        descripcion: "Los sorrentinos son una pasta rellena similar a los ravioles, pero de mayor tamaño. Se preparan con una masa especial, se rellenan con ingredientes como carne, pollo, verduras o queso, y se cocinan en agua hirviendo. Se sirven con salsa a elección y queso rallado. Son una opción deliciosa y contundente.",
        vegano: false
    },
    {
        nombre: "Chipá",
        ingredientes: ["Almidón de mandioca", "Queso", "Huevos", "Leche", "Manteca"],
        descripcion: "El chipá es un pan de queso tradicional de la gastronomía guaraní que también es popular en Argentina. Se elabora con almidón de mandioca, queso, huevos, leche y manteca. Se mezclan los ingredientes, se hornean y se obtiene un pan tierno y sabroso. Es ideal para acompañar el mate o el café.",
        vegano: false
    },
    {
        nombre: "Pastelitos",
        ingredientes: ["Masa para pastelitos", "Dulce de membrillo o batata", "Azúcar impalpable"],
        descripcion: "Los pastelitos son una tradición argentina, especialmente en épocas de carnaval. Se preparan con masa para pastelitos, se rellenan con dulce de membrillo o batata, se cierran y se fríen hasta que estén dorados. Luego se espolvorean con azúcar impalpable. Son una delicia dulce y crujiente.",
        vegano: true
    },
    {
        nombre: "Sopa Paraguaya",
        ingredientes: ["Harina de maíz", "Queso", "Cebolla", "Leche", "Manteca"],
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
const contenedorTablaMagica= document.querySelector("#contenedorTablaMagica");
let matrizDeRecetas=[]

function crearFormularioDeTabla() {
    let cantidadDeSelects=2;
    let formularioDeTabla= document.createElement("form");
    formularioDeTabla.id="formularioDeTablaMagica";
    formularioDeTabla.addEventListener("submit", editarTabla);

    for(let i = 1; i <= cantidadDeSelects; i++){
        formularioDeTabla.appendChild(crearLabelDeIngredientes(i));
        agregarSelectsIngredientes(formularioDeTabla);
    }

    formularioDeTabla.appendChild(crearBoton("Mostrar recetas", "mostrarRecetas"));
    formularioDeTabla.appendChild(crearBoton("Generar aleatorio", "generarAleatorio"));
    formularioDeTabla.appendChild(crearBoton("Vaciar tabla", "vaciarTabla", vaciarTabla));

    
    contenedorTablaMagica.appendChild(formularioDeTabla);
}

crearFormularioDeTabla()


function vaciarTabla() {
    console.log("panchito");
}

function editarTabla(e) {
    e.preventDefault()
    let formData = new FormData(document.querySelector("#formularioDeTablaMagica"));
    console.log(formData);
    let ingredientesIngresados=[];
    if(e.submitter.id == "mostrarRecetas"){
        console.log("pablito lescano");
    }

}

function crearBoton(nombre, id, funcionEvento) {
    let boton = document.createElement("button");
    boton.textContent=`${nombre}`;
    boton.id=`${id}`;
    boton.addEventListener("click", funcionEvento)
    return boton;
}

function crearLabelDeIngredientes(nombre) {
    let label= document.createElement("label");
    label.textContent=`Ingrediente ${nombre}`;

    return label; 
}

function agregarSelectsIngredientes(formularioContenedor) {
    let select= document.createElement("select");
    let arregloIngredientes=[];

    obtenerIngredientesPosibles(arregloIngredientes);

    arregloIngredientes.forEach(e=>{
        let option = document.createElement("option");
        option.value=`${e}`;
        option.textContent=`${e}`;
        select.appendChild(option);
    });

    formularioContenedor.appendChild(select);
}

function obtenerIngredientesPosibles(arregloIngredientes) {
    for(let i =0 ; i < arregloComidas.length;i++){
        arregloComidas[i].ingredientes.forEach(e => {         //recorre cada elemento del arregloComidas y se enfoca en los arreglos de ingredientes, por cada elemento del arreglo de ingredientes, lo pushea al arreglo de ingredientes 
         arregloIngredientes.push(e);
        });
     }

     eliminarElementosDuplicados(arregloIngredientes);
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








// btnMenuNavegacion.addEventListener("click", mostrarMenuResposive);

// function mostrarMenuResposive() {
//     let listaNavegacion= document.querySelector("nav");
//     listaNavegacion.classList.toggle("d-flex");
// }










// const formularioDeContacto = document.querySelector("#formularioContacto");
// const btnEnviarForm= document.querySelector("#btnEnviarForm");


// const btnGenerarCaptcha=document.querySelector("#btnGenerarCaptcha");
// const alertaCaptcha= document.querySelector("#alertaCaptcha");
// const inputCaptcha = document.querySelector("#inputCaptchaIngresado");

// const valoresCaptcha= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
// const cantidadCaracteresCaptcha=6; // (coincidir maxlength del input)
// let valorCaptcha='';

// formularioDeContacto.addEventListener("submit", enviarFormulario); //escucha el envio del formulario
// btnGenerarCaptcha.addEventListener("click", mostrarCaptcha);    //esto hace que se muestre y genere un nuevo captcha al hacer click en el boton 🔄
// inputCaptcha.addEventListener("input",verificarCaptchaIngresado); //se mantiene "escuchando" cuando el usuario cambia el valor del input donde debe ingresar el captcha
// inputCaptcha.addEventListener("blur",verificarCaptchaIngresado); //se puede utilizar blur tambien para lo anterior(cambia detalles)

// document.addEventListener("DOMContentLoaded", mostrarCaptcha); 
// //esto hace que cada vez que cargue el DOM (refrescar pagina) ejecute la funcion mostrarCaptcha, generando un nuevo captcha aleatorio
// //se podria agregar un setInterval y ejecutar mostrarCaptcha() para que el captcha "expire/cambie" cada X tiempo


// function enviarFormulario(e){   //se ejecuta cuando se hace click en el boton ENVIAR del formulario
//     e.preventDefault();
    
//     let formData= new FormData(formularioDeContacto);   /*Captura/genera entre otros: "entries" obj {[nameDelInput:"valor"], ...} */
//     let valoresEnInputs=[];
//     let conjuntosClaveValor=[];
//     for (let claveValorInput of formData.entries()) { 
//         /* for of itera cualquier dato(string,obj,array) */
//         /*claveValorInput en cada iteracion vale un array de 2 elementos ["name del input", "valor"] */
//         conjuntosClaveValor.push(claveValorInput); /*   SE PUEDEN USAR LOS DATOS COMO MATRIZ CLAVE-VALOR*/
//         valoresEnInputs.push(claveValorInput[1]); /*utilizando el metodo push guardo cada valor de cada input(name,valor) iterado */
//     }  /*claveValorInput[1] valdra en cada iteracion el valor que toma del input. En su posicion [0] el name que toma ese input*/
    
//     console.log(conjuntosClaveValor);
//     console.log(valoresEnInputs);  //OBTIENE LOS DATOS
//     vaciarFormulario(e);       //VACIA EL FORMULARIO
    
// }

// //esto crea nodo donde ira el captcha y cada vez que es llamado, llama a un metodo que genera un nuevo captcha
// function mostrarCaptcha() { 
//     let layoutCaptcha = document.querySelector("#captcha");             
//     valorCaptcha=obtenerCaptcha();          //esto permite que siempre valorCaptcha sea aleatorio
    
//     layoutCaptcha.innerHTML='';
//     layoutCaptcha.innerHTML+=`${valorCaptcha}`;     //escribe en el parrafo layoutCaptcha el captcha aleatorio
    
// };

// //crea y retorna un string de X(cantidadCaracteresCaptcha) cantidad de caracteres a partir del array de caracteres.tomando caracteres de ese array aleatoriamente
// function obtenerCaptcha() {
//     let captcha='';
//     for(let i=0; i < cantidadCaracteresCaptcha; i++){  
//         captcha+=valoresCaptcha[Math.floor(Math.random()*valoresCaptcha.length)];
//     }
//     return captcha;
// }

// function verificarCaptchaIngresado(e) {
//     let valorInputCaptcha=e.target.value; //obtiene el valor del input del captcha cuando se ejecuta evento input/blur 
//     alertaCaptcha.innerHTML='';
    
//     //compara el valor del input con la variable GLOBAL valorCaptcha y responde mediante el parrafo alertaCaptcha(NODO CAPTURADO GLOBAL)
//     if(valorInputCaptcha == valorCaptcha){
//         mostrarElemento(btnEnviarForm);
//         alertaCaptcha.innerHTML="Captcha ingresado valido ✅";
        
//     }else{
//         ocultarElemento(btnEnviarForm);
//         alertaCaptcha.innerHTML="Captcha invalido ❌";
//     }
    
// }

// function vaciarFormulario(data) {
//     for(let i=0 ; i < data.target.length; i++){
//         if(data.target[i].tagName == "INPUT" || data.target[i].tagName == "TEXTAREA"){  //vacia cada input ó textarea q encuentra del form
//             data.target[i].value='';
//         }      
//     }
//     mostrarCaptcha();                                            //muestra y genera otro captcha aleatorio                                                   
//     ocultarElemento(btnEnviarForm);                              //oculta el boton de enviar
//     alertaCaptcha.innerHTML='';                                  //vacia la alerta del captcha
// }

// function ocultarElemento(nodoDelElemento) {
//     nodoDelElemento.classList.remove("d-activo");
//     nodoDelElemento.classList.add("d-none");
// }                                                                //se le pasa un nodo capturado con querySelector y le cambia la clase hecha en css
// function mostrarElemento(nodoDelElemento) {
//     nodoDelElemento.classList.remove("d-none");
//     nodoDelElemento.classList.add("d-activo");
// }