var x=160, y=447;//coordenadas iniciales de la imagen

function lienzo(){

var c=document.getElementById("imagen");
var ctx=c.getContext("2d");
var img=document.getElementById("ima");
ctx.clearRect(0,0,600,530);//limpia todo el canvas 
ctx.drawImage(img,x,y);//dibuja la imagen

}

//cuando presiona una tecla
function whichButton(event){

if(event.keyCode=='39'){//si la tecla presionada es direccional derecho

x=x+5;//mueve el vehiculo 5 pixeles a la derecha
lienzo();

}

if(event.keyCode=='37'){//si la tecla presionada es direccional izquierdo

x=x-5;//mueve el vehiculo 5 pixeles a la izquierda
lienzo();

}

if(event.keyCode=='38'){//si la tecla presionada es direccional arriba

y=y-5;//sube el vehiculo
lienzo();

}

if(event.keyCode=='40'){// si la tecla presionada es direccional abajo

y=y+5;//baja el vehiculo
lienzo();

}

}