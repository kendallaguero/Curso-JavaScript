const promesa = new Promise((resolve, reject) => {
    // Accion que se ejecutara.
    setTimeout(() => {
        const exito = true;

        if(exito){
            resolve('La operacion tuvo exito');
        } else {
            reject('Hubo un error en la operación.');
        }
    }, 4000);
});

promesa.then((mensaje) => {
    alert(mensaje);
});

promesa.catch((mensaje) => {
    alert(mensaje);
});