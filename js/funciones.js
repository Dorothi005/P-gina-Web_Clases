function cambiarImagen() {
    var img = document.getElementById("ImgGato1");
    if (img.src.match("cat1.png")) {
        img.src = "../img/cat2.png";
    } else {
        img.src = "../img/cat1.png";
    }
}

document.getElementById("ImgGato1").src = "../img/cat1.png";

document.getElementById("ImgGato1").addEventListener("click", function() {
    alert("hello,im a cat. Please dont click me.");
});

function mostrarMensaje() {
    alert("an iq to high?");
    var img = document.querySelector('img[alt="Imagen apagada"]');
}
