import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthEntity } from './auth.entity';
import { Repository } from 'typeorm';
import { IUseAuth } from './auth.enums';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthEntity)
    private authRepository: Repository<AuthEntity>,
  ) {}

  async create(auth: AuthEntity): Promise<any> {
    const newAuth = this.authRepository.create({ ...auth, use: IUseAuth.USED });
    await this.authRepository.save(newAuth);
    return 'ok';
  }

  async findAll(): Promise<AuthEntity[]> {
    return this.authRepository.find();
  }

  async remove(id: number): Promise<number> {
    await this.authRepository.delete(id);
    return id;
  }
}
