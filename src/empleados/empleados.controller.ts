import { Body, Controller, Get, Param, Post, Put  } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import {EmpleadoModel} from './empleadoModel'

@Controller('empleados')
export class EmpleadosController {
    constructor(private readonly Servicio: EmpleadosService) {}
    // traigo empleados
    @Get()
    getEmpleado(){
      return this.Servicio.getEmpleado;
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
}
