/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
 {
  // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

  // Tu código aca
  function stringMasLarga(strings) {
    // Initialize a variable to store the longest string
    let masLarga = ''
  
    // Loop through the array of strings
    for (let i = 0; i < strings.length; i++) {
      // Get the current string
      let stringActual = strings[i]
  
      // Check if the current string is longer than the current longest string
      if (stringActual.length > masLarga.length) {
        // If it is, update the longest string
        masLarga = stringActual
      }
    }
  
    // Return the longest string
    return masLarga
  }
  
  // Test the function with some example arrays of strings
  console.log(stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']))  // should return 'guten
  
}

// No modifiques nada debajo de esta linea //

module.exports = stringMasLarga