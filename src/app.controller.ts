import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  home(): string {
    return '서버 샘플 시작';
  }
}
