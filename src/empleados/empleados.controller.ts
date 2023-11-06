import { Controller, Get, Param } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';

@Controller('empleados')
export class EmpleadosController {
    constructor(private readonly Servicio: EmpleadosService) {}
    @Get(':id')
    getEmpleado(@Param('id') identificador): string {
      return this.Servicio.getEmpleadoById (identificador);
    }
}
