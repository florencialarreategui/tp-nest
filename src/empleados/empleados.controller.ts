import { Body, Controller, Get, Param, Post  } from '@nestjs/common';
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
//modifico empleados
    @Post ()
    agregarEmpleado(@Body() modelo: EmpleadoModel) {
        return this.Servicio.agregarEmpleado(modelo);

    }
}
