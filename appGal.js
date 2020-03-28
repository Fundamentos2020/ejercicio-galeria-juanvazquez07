document.querySelector('#genera-galeria').addEventListener('submit', cargarImagenes);
var cont, canPg, Url;


function cargarImagenes(e){
    e.preventDefault();
    

    const cantidad = document.getElementById('numero').value;
    const num = 100/cantidad;

    canPg=cantidad;
    cont = cantidad;
    let url = '';

    url += 'https://picsum.photos/v2/list?';
   // url += num;
    url += 'limit='
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
    console.log("clic flecha izquierda");
    
    console.log(Url);
    var p = parseInt(cont, 10);
    if(p > 0){
         //console.log(cont);
    var s = parseInt(canPg, 10);
    let n = p-s;
    var i= n-s;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', Url, true);
    xhr.onload = function(){
       if(this.status === 200){
           //console.log(this.responseText);
           const imagen = JSON.parse(this.responseText);

           let contenido = '';
           let nurl = '';
           console.log('limite'+n);
           console.log('inicio'+p);
           for ( i; i<n;i++){
            //console.log(imagen[i]); 
            console.log(i); 
            nurl += 'https://picsum.photos/id/';
            nurl += `${imagen[i].id}`;
            nurl += '/3504/2336'
            contenido += `
            <div class="contenedor overflow-hidden" id"boton">
               <img src="${nurl}" alt="" class="img"></img>
            </div>`;
            nurl = '';
            }
            cont = i;
            console.log('indicef'+i);
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
    
}

function moverD(e){
    e.preventDefault();
    console.log("clic flecha derecha");
    
    console.log(Url);
    var p = parseInt(cont, 10);
    if(p < 100){
         //console.log(cont);
    var s = parseInt(canPg, 10);
    let n = p+s;
    var i= p;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', Url, true);
    xhr.onload = function(){
       if(this.status === 200){
           //console.log(this.responseText);
           const imagen = JSON.parse(this.responseText);

           let contenido = '';
           let nurl = '';
           console.log('limite'+n);
           console.log('inicio'+p);
           for ( i; i<n;i++){
            //console.log(imagen[i]); 
            console.log(i); 
            nurl += 'https://picsum.photos/id/';
            nurl += `${imagen[i].id}`;
            nurl += '/3504/2336'
            contenido += `
            <div class="contenedor overflow-hidden" id"boton">
               <img src="${nurl}" alt="" class="img"></img>
            </div>`;
            nurl = '';
            }
            cont = i;
            console.log('indicef'+i);
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
   
}