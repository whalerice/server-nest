import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({
  //   origin: 'https://sooni-r.vercel.app',
  //   // credentials: true,
  //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
  //   // exposedHeaders: ['Authorization'], // * 사용할 헤더 추가.
  // });
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.header('Origin'));
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS',
    );
    next();
  });
  await app.listen(3300);
}
bootstrap();
