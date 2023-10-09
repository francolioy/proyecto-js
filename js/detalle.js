//Guardar lo que trae del query strings
let codigo = location.search;
console.log(codigo);
let codigoProducto = new URLSearchParams(codigo);
console.log(codigoProducto);
let codigoSeleccionado = codigoProducto.get('codigo');
console.log(codigoSeleccionado);


//Capturo los datos de la página de detalle 
let codigoFinal = document.getElementById('codigo');
let nombre = document.getElementById('nombre');
let imagen = document.getElementById('imagen');
let detalles = document.getElementById('detalles');


//Agarro los datos del localStorage
let detalleProducto = JSON.parse(localStorage.getItem('detallesProducto'))
let arrayDetalle = JSON.parse(detalleProducto[0]);
console.log(arrayDetalle);


//Muestro los detalles del producto que tengo en el localStorage
codigoFinal.innerHTML = `Código del Producto: ${codigoSeleccionado}`;
nombre.innerHTML = `Nombre del producto : ${arrayDetalle.nombre}`;
detalles.innerHTML = `Detalles del producto : ${arrayDetalle.detalles}`;
imagen.innerHTML = `<img class="w-100" src="${arrayDetalle.imagen}" alt="${arrayDetalle.nombre}"/>`


//Agarro el botón para regresar y borrar lo que tengo en mi localStorage
let botonRegresar = document.getElementById('botonRegresar');
botonRegresar.addEventListener('click', function(){
    localStorage.clear()
    //Aca vuelvo a la pág principal
    location.href = 'index.html'
})