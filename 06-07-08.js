
      {
      constructor(nombre, edad, hobbies, amigos) 
        this.nombre = nombre;
        this.edad = edad;
        this.hobbies = hobbies;
        this.amigos = amigos;
}
  
 
     {
      addFriend(nombre, edad) 
        this.amigos.push({ nombre: nombre, edad: edad });
      }
      

  
      {
        addHobby(hobby)
        this.hobbies.push(hobby);
      }
    
    
       {
        return this.amigos.map(amigo => amigo.nombre);
      }
      
      
      
        
      
      
  

    
      {
            getHobbies() 
        return this.hobbies;
      }
      
    

  

      {
      getPromedioEdad() 
        let sumaEdades = 0;
        for (let i = 0; i < this.amigos.length; i++) {
          sumaEdades += this.amigos[i].edad;
        }
        return sumaEdades / this.amigos.length;
      }
      
  


module.exports = crearClasePersona