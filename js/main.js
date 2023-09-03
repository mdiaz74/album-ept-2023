//Referencia: https://www.youtube.com/watch?v=KJoma0NFIVs

const btnDepartamentos = document.getElementById('btn-departamentos'),
    btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
    grid = document.getElementById('grid'),
    contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
    contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
/*Una funcion*/
esDispositivoMovil = () => window.innerWidth<=800; //Calcula si el usuario esta en un dispositivo movil

btnDepartamentos.addEventListener('mouseover',()=> {
if(!esDispositivoMovil()){
    grid.classList.add('activo');
}
});

/*Funcion cuando saquemos el puntero del menu grid*/
grid.addEventListener('mouseleave', () => {
    if(!esDispositivoMovil()){
        grid.classList.remove('activo');
    }
});

/*Filtrado del menu para ver c/u de las sub categorias*/
/*Compara el valor de categoria(data-categoria) con el subcategoria*/

document.querySelectorAll('#menu .categorias a').forEach((elemento) => { /*este codigo accede  a todos los enlaces de la categoria por cada elemento se ejecuta el codigo posterior*/
    elemento.addEventListener('mouseenter', (e) => { /*este evento es cuando pases el cursor por cada elemento*/
        if(!esDispositivoMovil()){
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
                categoria.classList.remove('activo');
                if(categoria.dataset.categoria == e.target.dataset.categoria){
                    categoria.classList.add('activo');
                }
            });
        };
        
    });
});

//EventListener para dispositivos moviles

document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
    e.preventDefault();
    if(contenedorEnlacesNav.classList.contains('activo')){
        contenedorEnlacesNav.classList.remove('activo');
        document.querySelector('body').style.overflow = 'visible';
    }else{
        contenedorEnlacesNav.classList.add('activo');
        document.querySelector('body').style.overflow = 'hidden';
    }
});

//Clic en boton de todos los departamentos se despliega el grid (para version movil)

btnDepartamentos.addEventListener('click', (e) =>{
    e.preventDefault();
    grid.classList.add('activo');
    btnCerrarMenu.classList.add('activo');
});

//Boton de regresar en el menu de categorias
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
    e.preventDefault();
    grid.classList.remove('activo');
    btnCerrarMenu.classList.remove('activo');
});

//

document.querySelectorAll('#menu .categorias a').forEach((elemento) =>{
    elemento.addEventListener('click', (e) => {
        if(esDispositivoMovil()){
            contenedorSubCategorias.classList.add('activo');
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
                categoria.classList.remove('activo');
                if(categoria.dataset.categoria == e.target.dataset.categoria){
                    categoria.classList.add('activo');
                }

            });
        }
    });
});


//Boton de regresar en el menu de subcategorias
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();
        contenedorSubCategorias.classList.remove('activo');
    });
});

//Boton de cerrar menu

btnCerrarMenu.addEventListener('click', (e) =>{
    e.preventDefault();
    document.querySelectorAll('#menu .activo').forEach((elemento) => {
        elemento.classList.remove('activo');
    });
    document.querySelector('body').style.overflow = 'visible';

});