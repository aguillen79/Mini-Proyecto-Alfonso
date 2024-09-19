/* const input = document.querySelector(".form-control")
const boton = document.querySelector(".btn") */

const formulario = document.querySelector("#formulario")
const modal = document.querySelector("#modal_suscriber")
const spanAlerta= document.querySelector(".Error_Message")
const inputAlerta=document.querySelector(".form-control")

formulario.addEventListener("submit", correo)


function correo(e) {
    e.preventDefault()
    let formulario1 = new FormData(formulario)
    const email = formulario1.get("email")
    let arrayemail = email.split("@")

    if (email.includes("@") && arrayemail[1].includes(".") && arrayemail.length<=2) {
        /* alert("correo valido"); */
        abrircerrarmodal()


         }
    else {
            /* alert("correo no valido") */
            inputAlerta.classList.add("inputInvalid")
            spanAlerta.classList.remove("hidden")
        }



    }

function abrircerrarmodal(){
const mymodal = new bootstrap.Modal(modal)
mymodal.show()
}
    

