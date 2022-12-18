/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
 {
  // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
  // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
  // recibe un string llamado 'nombre'.
  // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
  // Ej:
  //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
  //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };

  // Tu código aca:
  function buscarAmigo(amigos, nombre) {
    // Iterate through the array of objects and find the one with a matching name
    for (let i = 0; i < amigos.length; i++) {
      if (amigos[i].nombre === nombre) {
        // Return the object if a match is found
        return amigos[i];
      }
    }
    // Return null if no match is found
    return null;
  }
  
  
  
}

// No modifiques nada debajo de esta linea //

module.exports = buscarAmigo