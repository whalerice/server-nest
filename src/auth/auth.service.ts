import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from '../entities/auth.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private usersRepository: Repository<Auth>,
    private dataSource: DataSource,
  ) {
    this.dataSource = dataSource;
  }

  async create(auth: Auth): Promise<Auth> {
    console.log(auth);

    const newAuth = this.usersRepository.create(auth);
    return await this.usersRepository.save(newAuth);
  }

  async findAll(): Promise<Auth[]> {
    return this.usersRepository.find();
  }

  async remove(id: number): Promise<number> {
    await this.usersRepository.delete(id);
    return id;
  }
}
