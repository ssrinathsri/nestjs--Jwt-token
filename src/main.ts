import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as expressListRoutes from 'express-list-routes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(9000);

  // Count list of APIs
  const server = app.getHttpServer();
  const router = server._events.request._router;
  console.log(expressListRoutes({}, 'API:', router));
}
bootstrap();