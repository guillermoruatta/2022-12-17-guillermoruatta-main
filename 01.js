
function menorMayor(numeros) {

 
  let mayor = -Infinity
  let menor = Infinity

 for (let i = 0; i < numeros.length; i++) {
    let valorActual = numeros[i]
    
    if (valorActual > mayor) {
      mayor = valorActual
    }
    if (valorActual < menor) {
        menor = valorActual
    }
 }
 return [menor, mayor]
}
console.log(menorMayor([9, 17, 6, 2, 4]))


module.exports = menorMayor
