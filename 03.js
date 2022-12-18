
 {
 

  function buscarAmigo(amigos, nombre) {
    
    for (let i = 0; i < amigos.length; i++) {
      if (amigos[i].nombre === nombre) {
       
        return amigos[i];
      }
    }
    
    return null;
  }
  
  
  
}



module.exports = buscarAmigo