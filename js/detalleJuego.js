// GLOBALES de Pag Detalle Juego

const detalleJuegoUI = document.getElementById("detalleJuego")



// Detalle de Juego

const redirigirDetalle = (id) =>{

    const juegos = JSON.parse(localStorage.getItem('juegos')) || [];
    const juego = juegos.find((juego) => juego.id === id);
    
    let detalle = `
        <div class="col-12 col-md-12 col-sm-12 mt-4">
            <h2>Detalle de Juego: ${juego.titulo}</h2>
        </div>
            <hr class="mt-2" />

            <div class="col-12 col-md-8">
                <img class="img-fluid" src="${juego.urlImagen}" alt="${juego.titulo}">
            </div>

            <div class="col-12 col-md-4 ">
                <h4>${juego.titulo}</h4>
                <ul>
                    <li>Categoría: ${juego.categoria}</li>
                    <li>${juego.descripcionLarga}</li>
                    <br>
                    <button class="btn btn-success">COMPRAR</button>
                </ul>
                
        </div>`

    detalleJuegoUI.innerHTML = detalle;
}

