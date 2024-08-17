const urlParams = new URLSearchParams(window.location.search);
const nombreGuerrero = urlParams.get('nombre');
const detallesGuerrero = document.getElementById('detallesGuerrero');
const guerrero = guerreros.find(g => g.nombre === nombreGuerrero);

//traer informcacion organizada en forma de lista y traer los podere en otra tabla insertada

detallesGuerrero.innerHTML = `
    <div class="col-md-4 text-center">
        <img src="../../PUBLIC/assets/img/${guerrero.nombre}.jpg" class="img-fluid" alt="${guerrero.nombre}">
        </div>
    <div class="col-md-8 color2">
        <h2 class="color3">${guerrero.nombre}</h2>
        <p><strong>Raza:</strong> ${guerrero.raza}</p>
        <p><strong>Tipo de Guerrero:</strong> ${guerrero.tipo}</p>
        <p><strong>Salud:</strong> ${guerrero.salud}</p>
        <p><strong>Ataque:</strong> ${guerrero.ataque}</p>
        <p><strong>Defensa:</strong> ${guerrero.defensa}</p>
        <table class="table mt-3">
            <thead>
                <tr>
                    <th>Poder</th>
                </tr>
            </thead>
            <tbody>
                ${guerrero.poderes.map(poder => `<tr><td>${poder}</td></tr>`).join('')}
            </tbody>
        </table>
    </div>
`;

// Funcion para retroceder a zona de combate

document.getElementById('seleccionarGuerrero').addEventListener('click', function() {
    window.history.back();
    seleccionarGuerrero(guerrero.nombre);
});