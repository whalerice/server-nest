import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { User } from './users.entity';
import { UsersService } from './users.service';
import { LoginDto } from '../dto/login.dto';

@Controller('api/v1')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/user')
  getAll(): User[] {
    return this.usersService.getAll();
  }

  @Post('/user/login')
  @HttpCode(200)
  async login(@Body() loginDto: LoginDto) {
    return this.usersService.findOne(loginDto);
  }

  @Post('/company/list')
  @HttpCode(200)
  getCompany(@Body() data: any) {
    return this.usersService.getCompany(data);
  }

  @Post('/team/list')
  @HttpCode(200)
  getTeam(@Body() data: any) {
    return this.usersService.getTeam(data);
  }
}
