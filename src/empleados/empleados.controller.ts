import { Body, Controller, Get, Param, Post, Put, Delete  } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import {EmpleadoModel} from './empleadoModel'

@Controller('empleados')
export class EmpleadosController {
    constructor(private readonly servicio: EmpleadosService) {}

    // traigo todos los empleados
    @Get()
    getEmpleado(){
      return this.servicio.getEmpleado();
    }
    // traigo solo 1 
    @Get(':id')
    getEmpleadoById(@Param('id') id: number, modelo: EmpleadoModel) {
        return this.servicio.getEmpleadoById(id, modelo);
    }
//agrego empleados
    @Post ()
    agregarEmpleado(@Body() modelo: EmpleadoModel) {
        return this.servicio.agregarEmpleado(modelo);

    }
    // modificar empleado 
    @Put (':id')
    modificarSalarioEmpleado (@Body('salario') salario: number, @Param('id') id: number){
        return this.servicio.modificarSalarioEmpleado(id, salario);
    }
    //elimino empleado 
    @Delete(':id')
    eliminarEmpleado(@Param('id') id: number) {
        return this.servicio.eliminarEmpleado(id);
    }
}