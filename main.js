"use strict";

const input = document.getElementById("operacion");
const form = document.querySelector("form");
const btnElim = document.querySelector(".elim-1");
const btnElimAll = document.querySelector(".elim-all");
const btns = document.querySelectorAll(".icono");

const crearCadenaFuncional = (cadena)=>{
    let cadenaNueva = cadena.replace("^", "**");
    return cadenaNueva
}

btns.forEach(btn => {
    btn.addEventListener("click", e=>{
        e.preventDefault();
        if (input.value == "Error") input.value = ""
        input.value += btn.textContent
    })
});

form.addEventListener("submit", e=>{
    e.preventDefault()
    let resultado;
    let cadena = input.value;
    let cadenaFuncional = crearCadenaFuncional(cadena)
    resultado = eval(cadenaFuncional)
    input.value = resultado
    if (resultado == undefined || resultado == "Infinity") input.value = "Error"
})

const elimUltimaCifra = ()=>{
    let nuevaOperacion = input.value.substring(0,input.value.length -1)
    input.value = nuevaOperacion                                                                                                                                                                                                                                                                                  
}

btnElim.addEventListener("click", e=>{
    e.preventDefault();
    elimUltimaCifra();
})

btnElimAll.addEventListener("click", e=>{
    e.preventDefault();
    input.value = ""
})