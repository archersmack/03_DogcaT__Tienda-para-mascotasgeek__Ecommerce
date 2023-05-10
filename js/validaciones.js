
// FUNCIONES
function validar(eventoBlur){
    const tipoDeInputValidacion = eventoBlur.dataset.tipoinput;

    if (eventoBlur.validity.valid) {
        eventoBlur.parentElement.classList.remove("input__container--invalid");
        eventoBlur.classList.remove("input--validity");
        eventoBlur.parentElement.querySelector(".input__messageError").innerHTML = "";
    } else {
        eventoBlur.parentElement.classList.add("input__container--invalid");
        eventoBlur.classList.add("input--validity");

        switch (tipoDeInputValidacion) {
            case "email":
                eventoBlur.parentElement.querySelector(".input__messageError").innerHTML = "El campo  EMAIL no es válido o está incompleto. <br> El formato es: email@dominio.com";
                break;
            case "contraseña":
                eventoBlur.parentElement.querySelector(".input__messageError").innerHTML = "El campo  CONTRASEÑA no es válido o está incompleto. <br> Debe tener entre 8 y 12 caracteres, debe tener mínimo una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.";
                break;
            case "nombre":
                eventoBlur.parentElement.querySelector(".input__messageError").innerHTML = "El campo  NOMBRE no es válido o está incompleto. <br> Debe contener mínimo 3 caracteres.";
                break;
            case "mensaje":
                eventoBlur.parentElement.querySelector(".input__messageError").innerHTML = "El campo  MENSAJE no es válido o está incompleto. <br> Debe contener mínimo 1 caracter.";
                break;
        }
    }
}


//  CUERPO ALGORITMO
const inputs = document.querySelectorAll("[data-tipoinput]");   // con querySelectorAll se selecciona todos los inputs data-tipoInput
console.log(inputs);

inputs.forEach( (cadaInput) => {                                // Ahora se reccorre cada input y se escucha el evento BLUR de cada uno
    cadaInput.addEventListener("blur", (eventoBlur) => {
        validar(eventoBlur.target);                             // Se envia el evento como parámetro a la función validar
        console.log(cadaInput);                                 // En la consola se muestra la lista con la cantidad de elementos Input encontrados
    })
})
/*
emailCliente[0].addEventListener("blur", (eventoBlur) => {          //Se busca el valor cero porque lo considera una listA (nodeList)
    validar(eventoBlur.target);
})

const passwordCliente = document.querySelectorAll("[data-tipo]");  //passwordcliente se crea como un NodeList
passwordCliente[0].addEventListener("blur", (eventoBlur) => {          //Se busca el valor cero porque lo considera una listA (nodeList)
    validar(eventoBlur.target);
})*/