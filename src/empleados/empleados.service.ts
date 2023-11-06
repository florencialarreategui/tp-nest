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


    getEmpleado() {
        return this.empleados;
      }
    //   getEmpleadoById (id){
    //     return this.empleados.id ;
    //   }
    agregarEmpleado(modelo: EmpleadoModel) {
        let emple = {
          "id": modelo.id,
          "nombre": modelo.nombre,
          "apellido": modelo.apellido,
          "salario": modelo.salario
        }
        //Agrego el producto a la lista
        this.empleados.push(emple);
        return "Empleado agregado exitosamente";
      }
      modificarEmpleado(id: number, modelo: EmpleadoModel) {
        return "Empleado modificado correctamente"
      }
}
