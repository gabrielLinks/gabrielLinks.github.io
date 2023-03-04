
let cajagato = document.getElementById('cajagato')
let ficha = document.getElementById('ficha')
let lista = document.getElementById('lista')
let btn = document.getElementById('btn')


let creatarea = document.getElementById('creaTarea')
let cancelartarea = document.getElementById('cancelarTarea')





ficha.classList.add('desactivar')

btn.addEventListener('click',function(){
cajagato.classList.add('desactivar')
lista.classList.add('activar')
btn.classList.add('desactivar')
ficha.classList.remove('activar')
})  

creatarea.addEventListener('click', function(){

    ficha.classList.add('activar')

    if(ficha=='activar'){
    }else{
        lista.classList.remove('activar')
        btn.classList.remove('desactivar')
    }
    })

cancelartarea.addEventListener('click', function(){
    ficha.classList.add('activar')
    if(ficha=='activar'){
    }else{
        cajagato.classList.remove('desactivar')
        lista.classList.remove('activar')
        btn.classList.remove('desactivar')
        ficha.classList.remove('activar')
    }
})   




let padre = document.getElementById('contenedor')


creatarea.addEventListener('click',function(){
    
    padre.innerHTML=''

    let txt = document.getElementById('dato1').value;
    let txt2 = document.getElementById('dato2').value;
    let txt3  = document.getElementById('tipoTarea').value;
    let txt4 = document.getElementById('prioridad').value;
    let modelo =`<li class="soyli" id="soyli">
    <h2 class="soyh2">${txt}</h2>
    <h4 class="soyh4">${txt3}</h4>
    <h6 class="soyh6">${txt2}</h6>
    <h6 class="soy6">${txt4}</h6>
    <button class="btn" id="button">x</button>
    </li> 
    `
    padre.innerHTML+= modelo
    
    let button = document.getElementById('button').addEventListener('click',function(){
        let soyli = document.getElementById('soyli')
        soyli.remove()
        if(padre== -1){
        cajagato.classList.add('activar')
    }

        
    })
    
    
})





