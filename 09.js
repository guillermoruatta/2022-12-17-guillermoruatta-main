
function filtrar(funcion) {
 
  
  Array.prototype.filtrar = function(funcion) {
    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
      if (funcion(this[i])) {
        filteredArray.push(this[i]);
      }
    }
    return filteredArray;
  };
  

};



module.exports = filtrar