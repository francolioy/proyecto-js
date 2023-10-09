//Capturo los elementos
let productosHTML = document.querySelector('.productos');
//Para ver el elemento capturado
console.log(productosHTML);

fetch('../datos/productos.json')
.then((respuesta)=>{
    return respuesta.json()
})
.then((productos)=>{
    //console.log(productos) //Ver lo que trae la respuesta
    productos.forEach(producto => {
    
        productosHTML.innerHTML += `
        <article class="producto col-12 col-md-6 col-lg-4">
            <img class="w-100" src="${producto.imagen}" alt="${producto.nombre}">
            <h2 class="text-center" >Nombre: ${producto.nombre}</h2>
            <h3 class="text-center" >Precio: $${producto.precio}</h3>
            
            
            
            <a   id='${JSON.stringify(producto)}' href= '#' class='btn btn-outline-primary btn-dark text-white d-block botonDetalle' >Ver detalle </a>
        </article>
        
        `
       
    })
    //Agregar al localStorage 
    let botonDetalle = document.querySelectorAll('.botonDetalle')
    let arrayMiListaDeProductos
    let miObjeto
    let codigo


    botonDetalle.forEach(productoSeleccion => {
         productoSeleccion.addEventListener('click', function(e){
             e.preventDefault()
             //Traigo los datos del localStorage 
             let miListaDeProductos = localStorage.getItem('detallesProducto')
             if(miListaDeProductos == null){
                 arrayMiListaDeProductos = [];
             }else{
                 arrayMiListaDeProductos = JSON.parse(miListaDeProductos)
                 //console.log(arrayMiListaDeProductos);
             }
             
            arrayMiListaDeProductos.push(this.id)
           
            miObjeto = JSON.parse(arrayMiListaDeProductos[0])
            
            codigo = miObjeto.codigo
           
            localStorage.setItem('detallesProducto', JSON.stringify(arrayMiListaDeProductos))
            //Query strings
            location.href = `detalle.html?codigo=${codigo}`
             
         })    
     } )
    

    
})
//Para ver si hay error cuando llamo el fetch
.catch((error)=>{
    console.log('Ufff ha ocurrido un error '+error )
})



