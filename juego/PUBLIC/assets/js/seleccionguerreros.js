const listaGuerreros = document.getElementById('listaGuerreros');
const jugador1Alias = localStorage.getItem('aliasJugador1');
const jugador2Alias = localStorage.getItem('aliasJugador2');
const jugador1 = document.getElementById('jugador1');
const jugador2 = document.getElementById('jugador2');
let guerrerosJugador1 = [];
let guerrerosJugador2 = [];
let jugadorActual = 1;

// Traer nombres de los jugadores

jugador1.innerHTML = `Alias Jugador 1: <strong>${jugador1Alias}</strong>`;
jugador2.innerHTML = `Alias Jugador 2: <strong>${jugador2Alias}</strong>`;

// ciclo para alertas de seleccion

function seleccionarGuerrero(guerrero) {
    if (jugadorActual === 1) {
        if (guerrerosJugador1.length < 3) {
            guerrerosJugador1.push(guerrero);
            alert(`Jugador 1 seleccionó: ${guerrero}`);
        }
        if (guerrerosJugador1.length === 3) {
            alert('Jugador 1 ha elegido sus 3 guerreros');
            jugadorActual = 2;
            alert('Ahora el Jugador 2 está eligiendo guerreros');
        }
    } else {
        if (guerrerosJugador2.length < 3) {
            guerrerosJugador2.push(guerrero);
            alert(`Jugador 2 seleccionó: ${guerrero}`);
        }
        if (guerrerosJugador2.length === 3) {
            alert('Jugador 2 ha elegido sus 3 guerreros');
            document.getElementById('botonIniciarJuego').classList.remove('d-none');
            localStorage.setItem('guerrerosJugador1', JSON.stringify(guerrerosJugador1));
            localStorage.setItem('guerrerosJugador2', JSON.stringify(guerrerosJugador2));
        }
    }
}

// Funcion para mostrar nombre del guerrero en la lista

function mostrarGuerreros() {
    guerreros.forEach(guerrero => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${guerrero.nombre}
            <div>
                <button class="btn btn-primary" onclick="seleccionarGuerrero('${guerrero.nombre}')">Seleccionar</button>
            </div>
        `;
        listaGuerreros.appendChild(li);
    });
}

mostrarGuerreros();

// boton de iniciar juego y redireccion a zona de combate

document.getElementById('iniciarJuegoBtn').addEventListener('click', function() {
    window.location.href = 'combatir.html';
});