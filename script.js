const form = document.querySelector (".form-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function mostrarForm() {

    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"

}

function esconderForm (){

    form.style.left = "-235px"
    form.style.transform = "translatex(0%)"
    mascara.style.visibility = "hidden"


}