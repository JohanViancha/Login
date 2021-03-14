function iniciar() {

    let us = '';
    let pass = '';
    let nombre = '';

    Swal.fire({
        title: 'Establezca las credenciales de acceso',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Usuario">
       <input type="password" id="password_con" class="swal2-input" placeholder="Contraseña">
       
       <input type="text" id="nombre" class="swal2-input" placeholder="Nombre completo">`,
        confirmButtonText: 'Registrar',
        focusConfirm: false,
        preConfirm: () => {
            const login = Swal.getPopup().querySelector('#login').value
            const password_con = Swal.getPopup().querySelector('#password_con').value
            const nombre = Swal.getPopup().querySelector('#nombre').value
            if (!login || !password || !nombre) {
                Swal.showValidationMessage(`Por favor ingrese el usuario, la contraseña y su nombre`)
            }
            return { login, password_con, nombre }
        }
    }).then((result) => {
        us = result.value.login;
        pass = result.value.password_con;
        nombre = result.value.nombre;
    })

    usuario.addEventListener('keypress', function(ev) {
        usuario_mostrar.innerHTML = usuario_mostrar.innerHTML + ev.key;
    }, false)


    password.addEventListener('keypress', function(ev) {
        password_mostrar.innerHTML = password_mostrar.innerHTML + ev.key;
    }, false)

    ingresar.addEventListener('click', function(ev) {


        ev.preventDefault();
        console.log();
        if (usuario.value != "" && password.value != "") {

            if (usuario.value != us || password.value != pass) {
                Swal.fire({
                    title: 'Usuario y/o contaseña incorrectos',
                    text: 'Por favor intente de nuevo',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                })
            } else {
                localStorage.setItem('nombre', nombre);
                usuario.value = "";
                password.value = "";
                Swal.fire({
                    title: '¡Bienvenido!',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    location.href = "home.html";
                })

            }

        } else {
            Swal.fire({
                text: 'El usuario y la contraseña son obligatorios',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            })
        }

    }, false)
}

iniciar();