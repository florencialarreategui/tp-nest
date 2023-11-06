import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//app.listen(3000) es el puerto en donde voy  aver mi codigo
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
