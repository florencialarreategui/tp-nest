import { Controller } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';

@Controller('empleados')
export class EmpleadosController {
    constructor(private readonly Servicio: EmpleadosService) {}
    @Get()
    getEmpleado(): string {
      return this.Servicio.getEmpleado ();
    }
}
