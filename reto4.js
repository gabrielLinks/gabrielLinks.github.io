let pantalla1 = document.getElementById('pantalla1')
let jugador1 = document.getElementById('jugador1')
let jugador2 = document.getElementById('jugador2')
let mezclador= document.getElementById('mezclador')
let pantalla2 = document.getElementById('pantalla2')
let pantalla3 = document.getElementById('pantalla3')
let hederloco = document.getElementById('hederloco')
let carrousel =document.getElementById('carouselExampleCaptions')
let jugadoresCuenta = document.getElementById('jugadores')
let resultado= document.getElementById('resultado')
let elem = 0;
let player1=[]
let player2 =[]
let cartas= []


pantalla2.style.display='none'
pantalla3.style.display='none'

mezclador.addEventListener('click',()=>{
    if(jugador2.value.length >0 && jugador1.value.length>0){
    pantalla1.style.display='none'
    hederloco.style.display='none'
    pantalla2.style.display = 'block'
    setTimeout(tiempoCarga,3000)
    iniciarJuego()
    }else{
        const lbl = document.getElementById('IblPlayers')
        lbl.innerHTML = 'Ingrese los nombres de los jugadores'
        mezclador.classList.add('but')
    }
});


function tiempoCarga(){
    pantalla1.style.display='none';
    pantalla2.style.display='none';
    pantalla3.style.display='block'
}

function reset(){
    jugador2.value =''
    jugador1.value = ''
}

function volver(){
pantalla3.style.display='none';
pantalla1.style.display='block';
hederloco.style.display='flex'
    reset()
}



const iniciarJuego = ()=>{
    const cartasJuego=[]

    while(cartasJuego.length < 6){
        random = Math.floor(Math.random()*miMazo.length);
        if(cartasJuego.indexOf(miMazo[random])== -1){
            cartasJuego.push(miMazo[random])
        }
    }
    

    let active =' '
cartasJuego.forEach((miMazo, index) => { 
        if(index == 0){
            active= 'active'
        }else{active = ''
    }
    carrousel.innerHTML += `<div class="carousel-item ${active}" class="org" data-id=${index + 1}>
    <img src=${miMazo.imagen} class="img-carta" class="d-block w-100" alt="...">          
    <h5 class="nombreCarta ${miMazo.tipo}">${miMazo.nombre}</h5>
    <p class="descriPersonaje">${miMazo.descrip}</p>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
    </button>`

})
    jugadoresCuenta.innerHTML= `<h3 class="colorpj1">Estas cartas son de  <strong>${jugador1.value}</strong></h3>`

while (player1.length < 3){
    player1.push(cartasJuego.slice(0,3))
}
    console.log(player1)

while(player2.length <3){
    player2.push(cartasJuego.slice(3,6))
}
    console.log(player2)

    const myCarousel = document.getElementById('carouselExampleCaptions')

    myCarousel.addEventListener('slide.bs.carousel',event =>{

    let elem = event.relatedTarget.getAttribute('data-id');
    if (elem < 4){
        jugadoresCuenta.innerHTML = `<h3 class="colorpj1">Estas cartas son de <strong>${jugador1.value}</strong></h3>`
    } else {
        jugadoresCuenta.innerHTML = `<h3 class="colorpj2">Estas cartas son de <strong>${jugador2.value}</strong></h3>`
    }


    })
}

const resultade = ()=> {
    resultado.addEventListener('click',()=>{
    pantalla3.style.display= 'none'
    pantalla4.style.display='block'
    })
    function resultadox(){
        if(cuenta % 2 == 0){
            resultadox = true
        }else{
            resultadox = false
        }
    }
}

const playSound = function() {
    let element = document.createElement('div');
    element.setAttribute('style', 'display: none');
    element.innerHTML = `
        <audio autoplay loop>
        <source src="audio/y2mate.com - Call It Fate Call It Karma.ogg" type="audio/ogg">
        <source src="audio/y2mate.com - Call It Fate Call It Karma.mp3" type="audio/mp3">
        <source src="audio/y2mate.com - Call It Fate Call It Karma.m4a" type="audio/m4a">
        </audio>
    `;
    document.body.appendChild(element);
    document.removeEventListener('click', playSound);
}

document.addEventListener('click', playSound);
