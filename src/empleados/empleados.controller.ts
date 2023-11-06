import { Body, Controller, Get, Param, Post, Put, Delete  } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import {EmpleadoModel} from './empleadoModel'

@Controller('empleados')
export class EmpleadosController {
    constructor(private readonly Servicio: EmpleadosService) {}
    // traigo todos los empleados
    @Get()
    getEmpleado(){
      return this.Servicio.getEmpleado;
    }
    // traigo solo 1 
    @Get('id')
    getEmpleadoById(@Param('id') id: number) {
        return this.Servicio.getEmpleadoById(id);
    }
//agrego empleados
    @Post ()
    agregarEmpleado(@Body() modelo: EmpleadoModel) {
        return this.Servicio.agregarEmpleado(modelo);

    }
    // modificar empleado 
    @Put ()
    modificarEmpleado (@Body() modelo: EmpleadoModel, @Param('id') id: number){
        return this.Servicio.modificarEmpleado(id, modelo);
    }
    //elimino empleado 
    @Delete('id')
    eliminarEmpleado(@Param('id') id: number) {
        return this.Servicio.eliminarEmpleado(id);
    }
}
