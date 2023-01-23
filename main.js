document.addEventListener('DOMContentLoaded', function(e) {
    const parrafos = document.querySelectorAll('.descripcion')
    let altura =  [];
    let alturaMaxima = 0;

    const aplicarAltura = (function aplicarAltura(){
        parrafos.forEach(parrafos =>{
            if (alturaMaxima) {
                alturas.push(parrafo.clientHeight);
            } else{
                parrafo.style.height = alturaMaxima + px;
          }
        });
        return aplicarAltura;
    })();
    alturaMaxima =Math.max.apply(Math, alturas);
    aplicarAltura();
})