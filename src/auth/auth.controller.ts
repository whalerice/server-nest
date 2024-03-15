import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './auth.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async findAll(): Promise<Auth[]> {
    return this.authService.findAll();
  }

  @Post('/create')
  async create(@Body() user: Auth): Promise<Auth> {
    return await this.authService.create(user);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<number> {
    return this.authService.remove(+id);
  }
}
