import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './auth.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
  ) {}

  async create(auth: Auth): Promise<Auth> {
    console.log(auth);

    const newAuth = this.authRepository.create(auth);
    return await this.authRepository.save(newAuth);
  }

  async findAll(): Promise<Auth[]> {
    return this.authRepository.find();
  }

  async remove(id: number): Promise<number> {
    await this.authRepository.delete(id);
    return id;
  }
}
