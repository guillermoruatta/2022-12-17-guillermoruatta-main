/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/ 
  // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
  // propiedad.
  // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
  // Ej:
  // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
  // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
  // Pista: es una buena oportunidad para usar map.

  // Tu código acá:
 {
  function pluck(array, propiedad) {
return array.map(function(obj) {
return obj[propiedad];
});
}

var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }];
var names = pluck(productos, 'name'); // ['TV LCD', 'Computadora']
var prices = pluck(productos, 'price'); // [100, 500]

console.log(names);
console.log(prices);

}
// No modifiques nada debajo de esta linea //

module.exports = pluck