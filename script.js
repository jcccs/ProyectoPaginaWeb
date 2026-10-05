const boton = document.getElementById("miBoton");
boton.addEventListener("click", ()=> {
    alert("Hola has hecho  clic en el boton");
});

function reproducirAudio(miSonido) {
    const sonido = document.getElementById(miSonido);
         
   if (sonido.paused) {
            sonido.currentTime = 0;
            sonido.play();
        } else {
            sonido.pause();
            sonido.currentTime = 0;
        }
    }
