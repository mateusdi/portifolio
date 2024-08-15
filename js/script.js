// JS

// JS

var GetTexto =  document.getElementById("tagAlvo").textContent;
var TagAlvoParaEscrita = document.getElementById("tagAlvo");


var speed = 10;
var cont = 0;


function typeWriter() {
  if(cont == 0) {
    TagAlvoParaEscrita.textContent = '';
  }
  if (cont < GetTexto.length) {
    TagAlvoParaEscrita.textContent += GetTexto.charAt(cont);
    cont++;
    setTimeout(typeWriter, speed);
  } else {
    cont = 0;
  }
}

typeWriter();
setInterval(typeWriter, 90000);
 