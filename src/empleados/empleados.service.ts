import { Injectable } from '@nestjs/common';

@Injectable()
export class EmpleadosService {
    getEmpleado(): string {
        return 'Cosme Fulanito';
      }
      getEmpleadoById (identificador): string{
        return 'Cosme Fulanito : ' + identificador ;
      }
}
