// =============== FUNCIONES =============== 
function validarInput(eventoBlur){
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
                eventoBlur.parentElement.querySelector(".input__messageError").innerHTML = "El campo EMAIL no es válido o está incompleto.<br> El formato es: email@dominio.com";
                break;
            case "contraseña":
                eventoBlur.parentElement.querySelector(".input__messageError").innerHTML = "El campo CONTRASEÑA no es válido o está incompleto.<br> Debe tener entre 8 y 15 caracteres, debe tener mínimo una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.";
                break;
            case "nombre":
                eventoBlur.parentElement.querySelector(".input__messageError").innerHTML = "El campo NOMBRE no es válido o está incompleto.<br> Debe contener mínimo 3 caracteres.";
                break;
            case "mensaje":
                eventoBlur.parentElement.querySelector(".input__messageError").innerHTML = "El campo MENSAJE no es válido o está incompleto.<br> Debe contener mínimo 1 caracter y máximo 120.";
                break;
            case "precio":
                eventoBlur.parentElement.querySelector(".input__messageError").innerHTML = "El campo PRECIO está incompleto.<br> Debe contener mínimo 3 números.";
                break;
            case "descripción":
                eventoBlur.parentElement.querySelector(".input__messageError").innerHTML = "El campo DESCRIPCION no es válido o está incompleto.<br> Debe contener mínimo 3 caracteres y máximo 150.";
                break;
            case "categoria":
                eventoBlur.parentElement.querySelector(".input__messageError").innerHTML = "El campo CATEGORIA no es válido o está incompleto.<br> Debe contener mínimo 3 caracteres y máximo 20.";
                break;
        };
    };
};


//  =============== CUERPO ALGORITMO =============== 
const inputs = document.querySelectorAll("[data-tipoinput]");   // con querySelectorAll se selecciona todos los inputs data-tipoInput
console.log(inputs);

//   Validación de inputs
inputs.forEach( (cadaInput) => {                                // Ahora se reccorre cada input y se escucha el evento BLUR de cada uno
    cadaInput.addEventListener("blur", (eventoBlur) => {
        validarInput(eventoBlur.target);                        // Se envia el evento como parámetro a la función validar
        console.log(cadaInput);                                 // En la consola se muestra la lista con la cantidad de elementos Input encontrados
    });
});

// =============== Autenticación de usuario ===============

const botonValidUser = document.querySelector("[data-botonValidarUsuario]");
console.log(botonValidUser);

botonValidUser.addEventListener("click", (evento) => {
    evento.preventDefault();
    const usuarioAsignado = "adrianapao1118@hotmail.com";
    const passwordAsignada = "Laveterinaria1";
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;
    
    if (usuarioAsignado == user && passwordAsignada == password){
        window.location.href = "../links/03_menuAdministrador.html";
    }else{
        alert("EL usuario o contraseña está errado.");
        //window.location.href = "pagina html con mensaje de error (falta diseñar)";
    }
});

// =============== Arrastrar y soltar imagen ===============

