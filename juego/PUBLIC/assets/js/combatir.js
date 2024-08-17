const aliasJugador1 = localStorage.getItem('aliasJugador1');
const aliasJugador2 = localStorage.getItem('aliasJugador2');
document.getElementById('aliasJugador1').textContent = aliasJugador1;
document.getElementById('aliasJugador2').textContent = aliasJugador2;

function mostrarGuerreros(jugador, guerreros) {
    const container = document.getElementById(`guerreros${jugador}`);
    guerreros.forEach(guerrero => {
        const div = document.createElement('div');
        div.className = 'col';
// insercion de datos e imagenes en la zona de combate
        div.innerHTML = `
            <div class="card">
                <img src="../../PUBLIC/assets/img/${guerrero}.jpg" class="card-img-top" alt="${guerrero}" >
                <div class="card-body">
                    <h5 class="card-title">${guerrero}</h5>
                    <button class="btn btn-info" onclick="window.location.href='detalles_guerrero.html?nombre=${guerrero}'">Detalles</button>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}
// traer los guerreros selecionados por el j1 y j2
mostrarGuerreros('Jugador1', JSON.parse(localStorage.getItem('guerrerosJugador1')));
mostrarGuerreros('Jugador2', JSON.parse(localStorage.getItem('guerrerosJugador2')));

function reiniciarJuego() {
    localStorage.clear();
    window.location.href = 'inicio_jugador1.html';
}