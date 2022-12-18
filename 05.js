
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


module.exports = pluck