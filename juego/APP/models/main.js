const guerreros = [
    {
        nombre: 'Loki',
        raza: 'Asgardiano',
        tipo: 'Mago',
        salud: 100,
        ataque: 80,
        defensa: 70,
        poderes: [
            'Ilusión: Engaña a los oponentes con imágenes falsas.',
            'Magia: Usa hechizos para atacar o defender.',
            'Engaño: Manipula la percepción para confundir al enemigo.'
        ]
    },
    {
        nombre: 'Thor',
        raza: 'Asgardiano',
        tipo: 'Guerrero',
        salud: 120,
        ataque: 90,
        defensa: 80,
        poderes: [
            'Rayo: Lanza rayos de energía eléctrica que impactan al enemigo.',
            'Trueno: Causa estruendos que aturden a los oponentes.',
            'Martillo: Usa su martillo para ataques devastadores y para convocar rayos.'
        ]
    },
    {
        nombre: 'Odin',
        raza: 'Asgardiano',
        tipo: 'Guerrero y jefe',
        salud: 100,
        ataque: 190,
        defensa: 180,
        poderes: [
            'Realidad: Manipula la realidad a su favor.',
            'Azar: Controla el destino de los eventos a través del azar.',
            'Lanza: Usa su lanza para ataques precisos y letales.'
        ]
    },
    {
        nombre: 'Revali',
        raza: 'Orni',
        tipo: 'Arquero y elegido',
        salud: 100,
        ataque: 190,
        defensa: 180,
        poderes: [
            'Vah Medoh: Invoca la ayuda de la bestia divina Vah Medoh para ataques aéreos.',
            'Elevación: Utiliza su habilidad para elevarse y ganar ventaja en el combate.',
            'Tiro certero: Realiza disparos precisos que siempre encuentran su objetivo.'
        ]
    },
    {
        nombre: 'Mipha',
        raza: 'Zora',
        tipo: 'Soporte y elegida',
        salud: 100,
        ataque: 190,
        defensa: 180,
        poderes: [
            'Vah Ruta: Invoca la ayuda de la bestia divina Vah Ruta para curar y proteger.',
            'Curación: Usa su habilidad para sanar a sí misma y a sus aliados.',
            'Lanza: Maneja su lanza con destreza para atacar con fuerza.'
        ]
    },
    {
        nombre: 'Urbosa',
        raza: 'Gerudo',
        tipo: 'Guerrero y elegida',
        salud: 100,
        ataque: 190,
        defensa: 180,
        poderes: [
            'Vah Naboris: Convoca la ayuda de la bestia divina Vah Naboris para ataques eléctricos.',
            'Rayo: Desata rayos que impactan a múltiples enemigos.',
            'Danza espada: Realiza una danza con su espada que ataca a los enemigos cercanos.'
        ]
    },
    {
        nombre: 'Daruk',
        raza: 'Goron',
        tipo: 'Escudero y elegido',
        salud: 100,
        ataque: 190,
        defensa: 180,
        poderes: [
            'Vah Rudania: Invoca la ayuda de la bestia divina Vah Rudania para ataques de fuego.',
            'Emboscada: Se oculta y ataca por sorpresa a sus enemigos.',
            'Escudo: Usa su escudo para bloquear ataques y proteger a sus aliados.'
        ]
    },
    {
        nombre: 'Linked',
        raza: 'Hyliana',
        tipo: 'Espadachin y portadora',
        salud: 109,
        ataque: 199,
        defensa: 189,
        poderes: [
            'Master Cycle Zero: Invoca una moto mágica para moverse rápidamente.',
            'Rayo de luz: Lanza rayos de luz que dañan a los enemigos.',
            'T.Sheik: Usa el poder de T.Sheik para obtener habilidades adicionales.'
        ]
    },
    {
        nombre: 'Paulin',
        raza: 'Humano',
        tipo: 'Jefe',
        salud: 100,
        ataque: 190,
        defensa: 10,
        poderes: [
            'Decreto: Emite un decreto que obliga a los enemigos a obedecer.',
            'Chipote: Usa un chipote para atacar con fuerza contundente.',
            'Debate: Utiliza su habilidad para desorientar y distraer a los oponentes.'
        ]
    },
    {
        nombre: 'Cronos',
        raza: 'Dios',
        tipo: 'Soporte',
        salud: 100,
        ataque: 10,
        defensa: 180,
        poderes: [
            'Realidad: Manipula la realidad para ayudar o proteger a sus aliados.',
            'Tiempo: Controla el flujo del tiempo para alterar eventos.',
            'Otra oportunidad: Da una segunda oportunidad a sus aliados en batalla.'
        ]
    },
    {
        nombre: 'Zeus',
        raza: 'Dios',
        tipo: 'Mago',
        salud: 500,
        ataque: 200,
        defensa: 180,
        poderes: [
            'Transformación: Cambia de forma para adaptarse a diferentes situaciones.',
            'Rayo: Desata rayos de gran poder que destruyen a sus enemigos.',
            'Hijos: Invoca a sus hijos para que le ayuden en combate.'
        ]
    },
    {
        nombre: 'Ares',
        raza: 'Dios',
        tipo: 'Destructor',
        salud: 100,
        ataque: 190,
        defensa: 180,
        poderes: [
            'Cervero: Invoca al Cervero para atacar con su furia.',
            'Caronte: Usa el poder del Caronte para someter a sus enemigos.',
            'Casco de la realidad: Usa un casco que altera la percepción de la realidad.'
        ]
    },
    {
        nombre: 'Daira',
        raza: 'Ángel',
        tipo: 'Escudero y soporte',
        salud: 100,
        ataque: 190,
        defensa: 180,
        poderes: [
            'Halo: Crea un halo que proporciona protección y sanación.',
            'Escudo: Utiliza su escudo para defender y proteger a sus aliados.',
            'Revivir: Tiene la habilidad de traer de vuelta a los aliados caídos.'
        ]
    },
    {
        nombre: 'Tureli',
        raza: 'Orni',
        tipo: 'Arquero',
        salud: 100,
        ataque: 140,
        defensa: 190,
        poderes: [
            'Avance: Se mueve rápidamente para ganar posición en el combate.',
            'Disparo certero: Realiza disparos que siempre encuentran su objetivo.',
            'Encanto: Usa su encanto para distraer y desorientar a los enemigos.'
        ]
    },
    {
        nombre: 'Sidon',
        raza: 'Zora',
        tipo: 'Guerrero',
        salud: 10,
        ataque: 90,
        defensa: 80,
        poderes: [
            'Escudo de agua: Se cubre a él o a sus aliados con un escudo hecho con agua que repela cualquier poder por 30 segundos.',
            'Simpatía: Desconcentra a sus oponentes con su sonrisa seductora.',
            'Lanza: Dispara la lanza de su hermano con tal poder que puede destruir rocas con este poder.'
        ]
    },
    {
        nombre: 'Riyu',
        raza: 'Gerudo',
        tipo: 'Guerrera, arquero y jefe',
        salud: 220,
        ataque: 190,
        defensa: 100,
        poderes: [
            'Disparo recargado: Lanza flechas con gran potencia que atraviesan a los enemigos.',
            'Morselia: Usa un ataque especial que causa gran daño.',
            'Team: Coordina ataques con su equipo para maximizar el daño.'
        ]
    },
    {
        nombre: 'Master',
        raza: 'Desconocida',
        tipo: 'Desconocido',
        salud: '???',
        ataque: '???',
        defensa: '???',
        poderes: [
            'Realidad: Manipula la realidad de formas desconocidas.',
            'Azar: Controla el destino con un grado de incertidumbre.',
            'Eliminar: Tiene el poder de eliminar cualquier cosa a su voluntad.'
        ]
    }
];
    // Agrega más guerreros según sea necesario es auto

