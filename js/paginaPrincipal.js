
// GLOBALES de Pagina Principal

const juegoDestacadoUI = document.getElementById("juegoDestacado")
const cardsDeportesUI = document.getElementById("cardsDeportes")


// Pagina Principal


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


const cargarTarjetasDeportes = () => {
    const juegos = JSON.parse(localStorage.getItem('juegos')) || [];
        
    
    let acumulador = ""
    for (const juego of juegos){
        acumulador +=    
            `<div class="col-12 col-md-3">
                <div class="card p-1" style="width: 18rem;">
                <a href="./pages/detalleJuego.html" onclick="redirigirDetalle('${juego.id}')">
                    <img src="${juego.urlImagen}" class="card-img-top" alt="${juego.titulo}">
                </a>
                
                </div>
            </div>`
    }
    cardsDeportesUI.innerHTML = acumulador;



    



}
 