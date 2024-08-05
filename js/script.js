// JS

var content = document.querySelector('h1').textContent;
var text = document.querySelector('h2');

var speed = 50;
var cont = 0;

function typeWriter() {
    
  if (cont < content.length) {
    text.textContent += content.charAt(cont);
    cont++;
    
  } else {
    text.textContent = '';
    cont = 0;
    
  }
}


 typeWriter();
 


// const titulo = document.querySelector('h1');

// function typeWriter(elemento) {
//     const textoArray = elemento.innerHTML.split('');
//     elemento.innerHTML = '';
//     elemento2 =  document.querySelector('h2');
//     textoArray.forEach((letra, i) => {
//       setTimeout(() => elemento.innerHTML += letra, 75 * i);
//     });
//   }

//   // Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
//   // function typeWriter(elemento) {
//   //   const textoArray = elemento.innerHTML.split('');
//   //   elemento.innerHTML = '';
//   //   for(let i = 0; i < textoArray.length; i++) {
//   //     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
//   //   }
//   // }


//   typeWriter(titulo);


  