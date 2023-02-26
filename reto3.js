let botonplus = document.getElementById('btnplus')
let  modal = document.getElementById('lista')
let sintarea = document.getElementById('foto')




botonplus.addEventListener('click', function(){

    modal.classList.add('active')
})

botonplus.addEventListener('click',function(){
    sintarea.classList.add('ninguno')
})