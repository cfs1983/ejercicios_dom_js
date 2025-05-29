//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const botón = document.querySelector('.showme');
console.log(botón);
//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const titulo = document.querySelector('#pillado');
console.log(titulo);
//1.3 Usa querySelector para mostrar por consola todos los p
const ps= document.querySelectorAll('p');
console.log(ps);
//1.4 Usa querySelector para mostrar por consola todos los elementos con 
//	la clase.pokemon
const pokemon = document.querySelectorAll('.pokemon');
console.log(pokemon);
//1.5 Usa querySelector para mostrar por consola todos los elementos con 
//el atributo data-function="testMe".
const data= document.querySelectorAll('[data-function="testMe"]');
console.log(data);
//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".
const tercerPersonaje = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(tercerPersonaje);