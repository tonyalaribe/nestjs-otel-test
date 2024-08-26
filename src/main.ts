import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  require('./tracing.js')
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
