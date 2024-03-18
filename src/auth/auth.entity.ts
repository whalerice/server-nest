import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IUseAuth } from './auth.enums';

@Entity({ name: 'users' })
export class AuthEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { comment: '유저 UUID' })
  key: string;

  @Column({
    type: 'enum',
    comment: '사용여부',
    enum: IUseAuth,
    nullable: false,
  })
  use: IUseAuth;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
    nullable: false,
    comment: '로그인 이메일 아이디',
  })
  email!: string;

  @Column({ type: 'varchar', length: 100, comment: '비밀번호' })
  password!: string;

  @CreateDateColumn({ type: 'timestamp', comment: '등록시간' })
  createdAt: Date | undefined;

  @DeleteDateColumn({ type: 'timestamp', comment: '삭제시간' })
  deletedAt: Date | undefined;
}
