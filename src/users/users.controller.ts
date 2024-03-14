import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { User } from 'src/entities/users.entity';
import { UsersService } from './users.service';
import { LoginDto } from 'src/dto/login.dto';

@Controller('api/v1/user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): User[] {
    return this.usersService.getAll();
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() loginDto: LoginDto) {
    return this.usersService.findOne(loginDto);
  }
}
