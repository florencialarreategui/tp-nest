
export class EmpleadoModel {
    id: number;
    nombre: string;
    apellido: string;
    salario: number;


    constructor(id: number, nombre: string, apellido: string, salario: number) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.salario = salario;
      }
    }