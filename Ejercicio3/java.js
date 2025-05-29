//1.1 Basandote en el array siguiente, crea una lista ul > li 
//dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement('ul');
for (let i = 0; i < countries.length; i++) {
    const li = document.createElement('li');
    li.textContent = countries[i];
    ul.appendChild(li);
}
document.body.appendChild(ul);
//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementToRemove = document.querySelector('.fn-remove-me');
removeEventListener(elementToRemove);
//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const imprime= document.querySelector('[data-function="printHere"]');
console.log(imprime);
const ul2 = document.createElement('ul');
for (let i = 0; i < cars.length; i++) {
    const li = document.createElement('li');
    li.textContent = cars[i];
    ul2.appendChild(li);
}
imprime.appendChild(ul2);
//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
//h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
for (let i = 0; i < countries.length; i++) {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');
    
    h4.textContent = countries[i].title;
    img.src = countries[i].imgUrl;
    
    div.appendChild(h4);
    div.appendChild(img);
    
    document.body.appendChild(div);
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//elemento de la serie de divs.
const btn= document.createElement('button');
btn.textContent = 'Eliminar último elemento';
const divsContainer = document.querySelectorAll('.country-div'); 
btn.addEventListener('click', () => {
    const eliminar = divsContainer[divsContainer.length - 1];
    eliminar.remove();
}
//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//divs que elimine ese mismo elemento del html.
  for (let i = 0; i < countries.length; i++) {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');
    const btn = document.createElement('button');
    
    h4.textContent = countries[i].title;
    img.src = countries[i].imgUrl;
    btn.textContent = 'Eliminar este elemento';
    
    btn.addEventListener('click', () => {
        div.remove();
    });
    
    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(btn);
    
    document.body.appendChild(div);
}
