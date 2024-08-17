document.getElementById('formJugador1').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombreJugador1').value;
    const alias = document.getElementById('aliasJugador1').value;

// validacion de llenado

    if (nombre === '' || alias === '') {
        alert('Debes ingresar un nombre y un alias');
    } else {
        localStorage.setItem('nombreJugador1', nombre);
        localStorage.setItem('aliasJugador1', alias);
        window.location.href = 'inicio_jugador2.html';
    }
});