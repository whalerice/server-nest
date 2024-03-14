import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://server-nest-khaki.vercel.app',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
    // exposedHeaders: ['Authorization'], // * 사용할 헤더 추가.
  });
  await app.listen(3300);
}
bootstrap();
