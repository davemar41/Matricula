    
class Estudiante{
    
    constructor(nombre, correo){
        this._nombre=nombre;
        this._correo=correo;
        this._asignaturas = [];
    }
    get correoElectronico(){
        return this._correo + "@ilernaonline.com";
    }
    get nombrecompleto(){
        return this._nombre;
    }
    get asignaturas(){
        return this._asignaturas;
    }
    set correoElectronico(correo){
       
           return this._correo=correo;
        
    }
    set nombrecompleto(nombre){
        this._nombre=nombre;

    }
    
    matricular(asignatura){
        this._asignaturas.push(asignatura);
        return "Lista de asignaturas :" +this._asignaturas;    }

    aprobar(asignatura){
        var posicion=this.asignaturas.indexOf(asignatura);
        this.asignaturas.splice(posicion,1);
        return "Lista de asignturas: " + this._asignaturas;
    }
    limpiarAsignaturas() {
		this.asignaturas = [];
		return "Se han vaciado las asignaturas";
	}
        
   
}
    
    
    /*nombre=nombre.toString();
    correo=correo.toString();
    asignatura=asignatura.toString();
    console.log(nombre);
    console.log(correo);
    console.log(asignatura);*/
    
    function crearPerfil(){
       
        var nombre=document.getElementById('nombre').value; 
        var correo=document.getElementById('correo').value;
        var estudiante=new Estudiante(nombre,correo,asignatura);
        console.log(estudiante.nombrecompleto);
        console.log(estudiante.correoElectronico);
        
        console.log(estudiante.muestraAsignaturas);
        document.getElementById('resultadonombre').innerHTML=nombre;
        document.getElementById('correo2').innerHTML=estudiante.correoElectronico;
        
        
    }
        var estudiante2=new Estudiante(asignatura);
    function agregarAsignatura(estudiante){
            var asignatura=document.getElementById('asignatura').value;
            document.getElementById('asignatura').innerHTML="";
            console.log(estudiante2.matricular(asignatura));
            console.log(estudiante2.asignaturas);
            document.getElementById('asignatura').value="";
            document.getElementById('listaasignaturas').innerHTML=estudiante2.asignaturas;
        
       
    }//modificacion
    
    
    


    