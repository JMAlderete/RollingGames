
// GLOBALES de Pagina Principal

const juegoDestacadoUI = document.getElementById("juegoDestacado")
const carruselDeportesUI = document.getElementById("juegoCarrusel")


// Pagina Principal

// Carrusel

let items = document.querySelectorAll('.carousel .carousel-item')

		items.forEach((el) => {
			const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


//  Juego Destacado

const mostrarDestacado = () =>{
    const juegos = JSON.parse(localStorage.getItem('juegos')) || [];
    const juego = juegos.find((juego) => juego.destacar === "solid");
    console.log(juego)
    let destacado = `
    
        <div class="col-12 col-md-12 col-sm-12 mt-4"><h2>Juego Destacado del día: ${juego.titulo}</h2>
            </div>
            <hr class="mt-2" />
            <div class="col-12 col-md-5 ">
                <h4>${juego.titulo}</h4>
                <ul>
                    <li>Categoría: ${juego.categoria}</li>
                    <li>Descripción: ${juego.descripcionCorta}</li>
                    <br>
                    <a href="pages/detalleJuego.html" onclick="redirigirDetalle('${juego.id}')" class="btn btn-primary"> VER MAS...</a>
                </ul>
                
            </div>

            <div class="col-12 col-md-7">
                <img class="img-fluid" src="${juego.urlImagen}" alt="${juego.titulo}">
        </div>`
        

    juegoDestacadoUI.innerHTML = destacado;


}


const mostrarCarruselDeportes = () => {
    const juegos = JSON.parse(localStorage.getItem('juegos')) || [];
    

    let acumulador1 = '';
    for (const juego of juegos) {
        acumulador1 +=  

        `<div class="col-md-3">
            <div class="card">
                <div class="card-img">
                    <img src="${juego.urlImagen}" class="img-fluid" alt="${juego.titulo}">
                </div>
            </div>
        </div>`
    }
    carruselDeportesUI.innerHTML = acumulador1;


}
 