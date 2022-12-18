
  {
  function stringMasLarga(strings) {
  
    let masLarga = ''
  
   
    for (let i = 0; i < strings.length; i++) {
     
      let stringActual = strings[i]
  
    
      if (stringActual.length > masLarga.length) {
       
        masLarga = stringActual
      }
    }
  
   
    return masLarga
  }
  
 
  console.log(stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']))  
  
}



module.exports = stringMasLarga