import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  home(): string {
    return '서버 샘플 시작';
  }
  @Get('api/app/health')
  @HttpCode(200)
  health() {
    return { result: 'OK' };
  }
}
