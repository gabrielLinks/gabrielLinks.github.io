
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




let padre= document.getElementById('contenedor')

creatarea.addEventListener('click',(e)=>{
    const texto1 = document.getElementById('dato1').value;
    const texto2 =document.getElementById('dato2').value;
    let texto3  = document.getElementById('tipoTarea').value;
    let texto4 = document.getElementById('prioridad').value;
    const li = document.createElement('li');
    li.className="soyli"
    const h2 = document.createElement('h2');
    h2.textContent = texto1;
    h2.className="soyh";
    const h3 = document.createElement('h3');
    h3.textContent = texto2;
    h3.className="soyh";
    const h4 = document.createElement('h4');
    h4.textContent = texto3;
    h4.className="soyh";
    const h5 = document.createElement('h5');
    h5.textContent = texto4;
    h5.className="soyh";

    li.appendChild(h2);
    li.appendChild(h3);
    li.appendChild(h4);
    li.appendChild(h5)
    li.appendChild(botonBorrar());
    padre.appendChild(li);

    
    
});

function botonBorrar(){
    const botonX = document.createElement("button")
    botonX.textContent="X";
    botonX.className ="botonX";
    botonX.addEventListener('click',(e)=>{
        const item = e.target.parentElement;
        padre.removeChild(item);
        const items = document.querySelectorAll('li');
        if(items.length === 0){
            cajagato.classList.remove('desactivar')
            ficha.classList.remove('activar')
        }
    });
    return botonX;
    }







//remove.('activar')


