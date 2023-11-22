// Funciones para el cuadrado
function calcularCuadradoAP() {
    const side = parseInt(document.getElementById("cuadradoInput").value);
    document.getElementById("CuadradoP").innerText = "Perimetro: " + (side * 4) + " cm";
    document.getElementById("CuadradoA").innerText = "Area: " + (side * side) + " cm^2";
}

// Funciones para el círculo
function calcularCirculoAP() {
    const radius = parseInt(document.getElementById("circuloInput").value);
    document.getElementById("CirculoP").innerText = "Perimetro: " + (Math.PI * 2 * radius) + " cm";
    document.getElementById("CirculoA").innerText = "Area: " + (Math.PI * Math.pow(radius, 2)) + " cm^2";
}

// Funciones para el triángulo
function calcularTriangulo1234() {
    const side1 = parseInt(document.getElementById("trianguloInput1").value);
    const side2 = parseInt(document.getElementById("trianguloInput2").value);
    const base = parseInt(document.getElementById("trianguloInput3").value);
    const height = parseInt(document.getElementById("trianguloInput4").value);

    document.getElementById("TrianguloP").innerText = "Perimetro: " + (side1 + side2 + base) + " cm";
    document.getElementById("TrianguloA").innerText = "Area: " + ((base * height) / 2) + " cm^2";
}

// Funciones para limpiar
function limpiarElementos(elementId) {
    const cleanParagraph = document.getElementById(elementId);
    const display = document.getElementById(elementId.replace("Clean", ""));

    cleanParagraph.innerText = "";
    if (display) {
        display.value = "";
    }
}

function limpiarCuadrado() {
    cleanElement("CuadradoA");
    cleanElement("CuadradoP");
}

function limpiarCirculo() {
    cleanElement("CirculoA");
    cleanElement("CirculoP");
}

function limpiarTriangulo() {
    cleanElement("TrianguloA");
    cleanElement("TrianguloP");
    cleanElement("trianguloInput1");
    cleanElement("trianguloInput2");
    cleanElement("trianguloInput3");
    cleanElement("trianguloInput4");
}
