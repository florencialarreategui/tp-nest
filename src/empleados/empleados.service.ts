import { Injectable } from '@nestjs/common';
import {EmpleadoModel} from './empleadoModel'

@Injectable()
export class EmpleadosService {
    empleados = [];
    constructor (){
      this.empleados = new Array<EmpleadoModel>
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
    getEmpleado() {
        return this.empleados;
      }
      //quiero mostrar solo 1 empleado 
      getEmpleadoById (id:number){
        let empleadoId = []
        for(let i= 0; i > this.empleados.length; i++){
          if(this.empleados[i].id == id){
            empleadoId =this.empleados[i]
          }
        }
        return empleadoId
      }

       //Agrego empleado 
    agregarEmpleado(modelo: EmpleadoModel) {

        let nuevoEmpleado = {
          "id": modelo.id,
          "nombre": modelo.nombre,
          "apellido": modelo.apellido,
          "salario": modelo.salario
        }
       
        this.empleados.push(nuevoEmpleado);
        return "Empleado agregado exitosamente";
      }
      //Modificar salario empleado 
      modificarSalarioEmpleado(id: number, modelo: EmpleadoModel) {
          for(let i= 0; i > this.empleados.length; i++){
            if(this.empleados[i].id == id){
              this.empleados[i]= modelo.salario
            }
          }
        return "Salario modificado correctamente"
      }
      //elimino empleado 
      
      eliminarEmpleado(id:number){
    // recorrer array de empleados buscando el id 
        return "Empleado eliminado exitosamente"
      }

}
