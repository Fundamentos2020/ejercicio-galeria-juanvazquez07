document.querySelector('#genera-galeria').addEventListener('submit', cargarImagenes);
var cont=0, canPg, Url;

function cargarImagenes(e){
    e.preventDefault();
    

    const cantidad = document.getElementById('numero').value;
    const num = 100/cantidad;

    canPg=num;

    let url = '';

    url += 'https://picsum.photos/v2/list?page=';
    url += num;
    url += '&limit='
    url += 100;

    Url=url;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    console.log(url);
    xhr.onload = function(){
       if(this.status === 200){
           //console.log(this.responseText);
           const imagen = JSON.parse(this.responseText);

           let contenido = '';
           let nurl = '';
           for (var i=0; i<cantidad;i++){
               console.log(imagen[i]);
            nurl += 'https://picsum.photos/id/';
            nurl += `${imagen[i].id}`;
            nurl += '/3504/2336'
            contenido += `
            <div class="contenedor overflow-hidden" id"boton">
               <img src="${nurl}" alt="" class="img"></img>
            </div>`;
            nurl = '';
            }
         document.getElementById('resultado').innerHTML = contenido;
        
         let pag = '';
         for (var i=0; i<num;i++){
         pag += `
           <div class="contenedor c-pag ">
             <a href="" id="boton">${i+1}</a>
           </div>`;
         }
         //console.log(pag);
          document.getElementById('paginacio').innerHTML = pag;
       }
    }
    
    xhr.send();
    //

    //
}

var ant = document.getElementById('flecha1').addEventListener('click', moverI);
var sig = document.getElementById('flecha2').addEventListener('click', moverD);


function moverI(e){
    e.preventDefault();
    console.log(cont);
    /*const cantidad = document.getElementById('numero').value;
    const num = 100/cantidad;

    let url = '';

    url += 'https://picsum.photos/v2/list?page=';
    url += num;
    url += '&limit='
    url += cantidad;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    console.log(url);
    xhr.onload = function(){
       if(this.status === 200){
           //console.log(this.responseText);
           const imagen = JSON.parse(this.responseText);

           let contenido = '';
           let nurl = '';
           imagen.forEach(function(info) {
            nurl += 'https://picsum.photos/id/';
            nurl += `${info.id}`;
            nurl += '/3504/2336'
            contenido += `
            <div class="contenedor overflow-hidden" id"boton">
               <img src="${nurl}" alt="" class="img"></img>
            </div>`;
            nurl = '';
            //console.log(contenido);
           })
         document.getElementById('resultado').innerHTML = contenido;
        
         let pag = '';
         for (var i=0; i<num;i++){
         pag += `
           <div class="contenedor c-pag ">
             <a href="" id="boton">${i+1}</a>
           </div>`;
         }
         //console.log(pag);
          document.getElementById('paginacio').innerHTML = pag;
       }
    }
    
    xhr.send();*/
    
}

function moverD(e){
    e.preventDefault();
    console.log("clic flecha derecha");
    
    console.log(Url);

    const xhr = new XMLHttpRequest();

    xhr.open('GET', Url, true);
    xhr.onload = function(){
       if(this.status === 200){
           //console.log(this.responseText);
           const imagen = JSON.parse(this.responseText);

           let contenido = '';
           let nurl = '';

           for (var i=canPg; i<canPg+canPg;i++){
            console.log(imagen[i]);  
            nurl += 'https://picsum.photos/id/';
            nurl += `${imagen[i].id}`;
            nurl += '/3504/2336'
            contenido += `
            <div class="contenedor overflow-hidden" id"boton">
               <img src="${nurl}" alt="" class="img"></img>
            </div>`;
            nurl = '';
            }
            document.getElementById('resultado').innerHTML = contenido;
           /*
           imagen.forEach(function(info) {
            nurl += 'https://picsum.photos/id/';
            nurl += `${info.id}`;
            nurl += '/3504/2336'
            contenido += `
            <div class="contenedor overflow-hidden" id"boton">
               <img src="${nurl}" alt="" class="img"></img>
            </div>`;
            nurl = '';
            //console.log(contenido);
           })
           document.getElementById('resultado').innerHTML = contenido;*/
       }
    }
    
    xhr.send();
}