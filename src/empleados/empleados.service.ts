import { Injectable } from '@nestjs/common';
import {EmpleadoModel} from './empleadoModel'

@Injectable()
export class EmpleadosService {
    empleados = [];
    constructor (){
    let emple = {
        "id": 1,
        "nombre": "Carlos",
        "apellido": "Gómez",
        "salario":250000
      }
      this.empleados.push(emple);
     emple = {
        "id": 2,
        "nombre": "Juana ",
        "apellido": "De la Cruz",
        "salario":350000
      }
      this.empleados.push(emple);
      emple = {
        "id": 3,
        "nombre": "Frida",
        "apellido": "Khalo",
        "salario":270000
      }
      this.empleados.push(emple);
       emple = {
        "id": 4,
        "nombre": "Roberto",
        "apellido": "Carlos",
        "salario":150000
      }
      this.empleados.push(emple);
      emple = {
        "id": 5,
        "nombre": "Susana",
        "apellido": "Giménez",
        "salario":350000
      }
      this.empleados.push(emple);
       emple = {
        "id": 6,
        "nombre": "Andrea",
        "apellido": "Refrigerio",
        "salario":650000
      }
      this.empleados.push(emple);
    }

//muestro todos los empleados
   public getEmpleado() {
        return this.empleados;
      }


      //quiero mostrar solo 1 empleado 
    public  getEmpleadoById (id:number){
      for(let i= 0; i < this.empleados.length; i++){
        if(this.empleados[i].id == id){
          return  this.empleados[i]
        }
      }
      
    }
    
       //Agrego empleado 
   public agregarEmpleado(modelo: EmpleadoModel) {

        let nuevoEmpleado = {
          "id": modelo.id,
          "nombre": modelo.nombre,
          "apellido": modelo.apellido,
          "salario": modelo.salario
        }
       
       this.empleados.push(nuevoEmpleado);
        return "Empleado agregado correctamente"
      }
      //Modificar salario empleado 
    public  modificarSalarioEmpleado(id: number, salarioModificado: number) {
    // let  empleSalarioModificado = []
        for(let i= 0; i < this.empleados.length; i++){
            if(this.empleados[i].id == id){
            salarioModificado =  this.empleados[i].salario
            return this.empleados[i].salarioModificado
            }
          }

      }
      //elimino empleado 
      
   public eliminarEmpleado(id:number){
    let nuevaListaEmpleados = []
    for(let i= 0; i < this.empleados.length; i++){
      if(this.empleados[i].id !== id){
        nuevaListaEmpleados.push(this.empleados[i])
      }
    }
        return nuevaListaEmpleados
      }

}
