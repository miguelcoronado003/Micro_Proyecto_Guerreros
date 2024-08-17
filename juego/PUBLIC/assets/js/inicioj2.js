document.getElementById('formJugador2').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombreJugador2').value;
    const alias = document.getElementById('aliasJugador2').value;

// validacion de llenado

    if (nombre === '' || alias === '') {
        alert('Debes ingresar un nombre y un alias');
    } else {
        localStorage.setItem('nombreJugador2', nombre);
        localStorage.setItem('aliasJugador2', alias);
        window.location.href = 'seleccion_guerreros.html';
    }
});