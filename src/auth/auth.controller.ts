import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  HttpCode,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthEntity } from './auth.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async findAll(): Promise<AuthEntity[]> {
    return this.authService.findAll();
  }

  @Post('/create')
  @HttpCode(200)
  async create(@Body() user: AuthEntity): Promise<AuthEntity> {
    return await this.authService.create(user);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<number> {
    return this.authService.remove(+id);
  }
}
