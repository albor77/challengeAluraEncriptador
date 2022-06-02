
/*   orden correcto para evitar errores:  e--enter,  o--ober,  i--imes,  a--ai,  u--ufat     */


function encriptar() {      /* getElementById permite seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado  */
    
    var texto = document.getElementById ("textoInput").value.toLowerCase();   /* textoInput es el id que le puse al input donde el usuario va a tipear el texto a encriptar  */

    var textoCifrado = texto.replace (/e/igm,"enter");    /* pongo /e/ por que eso hace que busque e en toda la palabra sino solo va a agarrar la 1er e de la palabra y si hay otra mas no le va a dar bola */
        /*  i es para que afecte tanto minusculas como mayusculas.   g es para toda la linea u oracion.   m  es para que afecte a multiples lineas o parrafo   */
    var textoCifrado = textoCifrado.replace (/o/igm,"ober");  /*aca ya cambio a textoCifrado asi tengo el cambio anterior */
    var textoCifrado = textoCifrado.replace (/i/igm,"imes"); 
    var textoCifrado = textoCifrado.replace (/a/igm,"ai"); 
    var textoCifrado = textoCifrado.replace (/u/igm,"ufat"); 

    document.getElementById("imagen").style.display = "none";
    document.getElementById("ningun-mensaje").style.display = "none";
    document.getElementById("mensajeInferior").innerHTML = textoCifrado;  /*  InnerHTML  es una propiedad que nos permite leer un dato o asignarlo al contenido de un div o bien, del mismo control. Nos facilita la asignación de valores a controles  */
    document.getElementById("copiar").style.display = "show";  /* en el CSS le voy a poner none asi no se muestra cuando inicia la pagina  */
    document.getElementById("copiar").style.display = "inherit"; 

    textoInput.value="";     /*  para que me deje en blanco el input luego de encriptar */
    textoInput.focus();      /*  para que me deje el cursor ya posicionado en el area donde ingreso el texto a encriptar/desencriptar */ 
}



function desencriptar() {      /* getElementById permite seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado  */
    
    var texto = document.getElementById ("textoInput").value.toLowerCase();   /* textoInput es el id que le puse al input donde el usuario va a tipear el texto a encriptar  */

    var textoCifrado = texto.replace (/enter/igm,"e");    /* pongo /e/ por que eso hace que busque e en toda la palabra sino solo va a agarrar la 1er e de la palabra y si hay otra mas no le va a dar bola */
        /*  i es para que afecte tanto minusculas como mayusculas.   g es para toda la linea u oracion.   m  es para que afecte a multiples lineas o parrafo   */
    var textoCifrado = textoCifrado.replace (/ober/igm,"o");  /*aca ya cambio a textoCifrado asi tengo el cambio anterior */
    var textoCifrado = textoCifrado.replace (/imes/igm,"i"); 
    var textoCifrado = textoCifrado.replace (/ai/igm,"a"); 
    var textoCifrado = textoCifrado.replace (/ufat/igm,"u"); 

    document.getElementById("imagen");
    document.getElementById("ningun-mensaje");
    document.getElementById("mensajeInferior").innerHTML = textoCifrado;  /*  InnerHTML  es una propiedad que nos permite leer un dato o asignarlo al contenido de un div o bien, del mismo control. Nos facilita la asignación de valores a controles  */
    document.getElementById("copiar").style.display = "show";  /* en el CSS le voy a poner none asi no se muestra cuando inicia la pagina  */
    document.getElementById("copiar").style.display = "inherit"; 

    textoInput.value="";
    textoInput.focus();
}


function copiar() {
    var contenido = document.querySelector ("#mensajeInferior");
    contenido.select();
    document.execCommand("copy");
    alert("Texto Copiado");

  /*  mensajeInferior.value="";  */
    textoInput.focus();
}