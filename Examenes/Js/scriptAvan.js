let correctas = [3,2,1,2,2,3,1,1,3,2,3,2,1,1,2,1,2,1,1,3,2,2,2,1];
let opcion_elegida = [];
let cantidad_correctas = 0;

function respuesta(num_pregunta, seleccionada){
    opcion_elegida[num_pregunta] = seleccionada.value;

    let id = "p" + num_pregunta;

    let labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";

    seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}

function corregir(){
    cantidad_correctas = 0;
    for (let i = 0; i < correctas.length; i++) {
        if (correctas[i] == opcion_elegida[i]) {
            cantidad_correctas++;
        }
    }
    document.getElementById("resultado").innerHTML = cantidad_correctas;

    if (cantidad_correctas === 24) {
        window.location.href = 'FELICITACIONES3.html';
    } else {
        window.location.href = 'LLAMADA FINAL.html';
    }
}