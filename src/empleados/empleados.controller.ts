import { Body, Controller, Get, Param, Post, Put, Delete  } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import {EmpleadoModel} from './empleadoModel'

@Controller('empleados')
export class EmpleadosController {
    constructor(private readonly servicio: EmpleadosService) {}

    // private users = [
    //     { id: 1, name: 'Usuario 1' },
    //     { id: 2, name: 'Usuario 2' },
    //   ];

   
    // @Get()
    // getEmpleado(){
    //   return this.users;
    // }
     
    // traigo todos los empleados
    @Get()
    getEmpleado(){
      return this.servicio.getEmpleado();
    }
    // traigo solo 1 
    @Get(':id')
    getEmpleadoById(@Param('id') id: number) {
        return this.servicio.getEmpleadoById(id);
    }
//agrego empleados
    @Post ()
    agregarEmpleado(@Body() modelo: EmpleadoModel) {
        return this.servicio.agregarEmpleado(modelo);

    }
    // modificar empleado 
    @Put (':id')
    modificarSalarioEmpleado (@Body() modelo: EmpleadoModel, @Param('id') id: number){
        return this.servicio.modificarSalarioEmpleado(id, modelo);
    }
    //elimino empleado 
    @Delete(':id')
    eliminarEmpleado(@Param('id') id: number) {
        return this.servicio.eliminarEmpleado(id);
    }
}
