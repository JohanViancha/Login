function mostrar_nombre() {
    nombre_usuario.innerHTML = localStorage.getItem('nombre');
}

nombre.addEventListener('click', function() {
    console.log(cerrar.style.display);
    if (cerrar.style.display == "none") {
        cerrar.style.display = "block";
    } else {
        cerrar.style.display = "none";
    }

}, false)

cerrar_sesion.addEventListener('click', function() {
    localStorage.removeItem('nombre');
    location.href = 'index.html';
}, false)

mostrar_nombre();