const usuario = {
    nombre: 'Carlos',
    pais: 'españa',
};

//if(usuario.pais === 'españa'){
//    console.log('El usuario es español');
//} else if(usuario.pais === 'argentina'){
//    console.log('El usuario es argentino');
//} else if(usuario.pais === 'Costa Rica'){
 //   console.log('El usuario es Tico');
//} else {
 //   console.log('El usuario es de otro pais');
//}

switch(usuario.pais){
    case 'españa':
        console.log('El usuario es español');
        break;
    case 'argentina':
        console.log('El usuario es argentino');
        break;
    default:
        console.log('El usuario es de otro pais');
}
