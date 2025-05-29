//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click
const btnToClick = document.createElement('button');
btnToClick.id = 'btnToClick';
btnToClick.textContent = 'Click me';
document.body.appendChild(btnToClick);
let btnClickCount = 0;
const input= document.querySelector('input');
input.value = 'Contador de Pulsaciones: ' ;
btnToClick.addEventListener('click', (event) => {
    btnClickCount++;
    console.log(`Botón pulsado ${btnClickCount} veces. Evento:`, event);
});
//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const input = document.querySelector('input');
let contValue = 0;
input.value = 'Contador de Pulsaciones: ';
const pulsacion= document.createElement('p');
document.body.appendChild(pulsacion);
input.addEventListener('focus', (event) => {
    contValue++;
    pulsacion.textContent = `Contador de Pulsaciones: ${contValue}`;
    console.log(`Input enfocado. Valor actual: ${input.value}`);
});
//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const input = document.querySelector('input');
let contValue = 0;
input.value = 'Contador de Pulsaciones: ';
const pulsacion = document.createElement('p');
document.body.appendChild(pulsacion);
input.addEventListener('input', (event) => {
    contValue++;
    pulsacion.textContent = `Contador de Pulsaciones: ${contValue}`;
    console.log(`Input modificado. Valor actual: ${input.value}`);
})

//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
//que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ulAlbums = document.createElement('ul');
for (let i = 0; i < albums.length; i++) {
    const li = document.createElement('li');
    li.textContent = albums[i];
    ulAlbums.appendChild(li);
}
document.body.appendChild(ulAlbums);