import { Body, Controller, Get, Param, Post, Put, Delete, ParseIntPipe  } from '@nestjs/common';
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
    getEmpleadoById(@Param('id', ParseIntPipe ) id: number) {
        return this.servicio.getEmpleadoById(id);
    }
//agrego empleados
    @Post ()
    agregarEmpleado(@Body() modelo: EmpleadoModel) {
        return this.servicio.agregarEmpleado(modelo);

    }
    // modificar empleado 
    @Put (':id/salario')
    modificarSalarioEmpleado (@Body('salario') salario: number, @Param('id', ParseIntPipe ) id: number){
        return this.servicio.modificarSalarioEmpleado(id, salario);
    }
    //elimino empleado 
    @Delete(':id')
    eliminarEmpleado(@Param('id', ParseIntPipe) id: number) {
        return this.servicio.eliminarEmpleado(id);
    }
}