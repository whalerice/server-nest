import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IUseAuth, IUserType } from './auth.enums';

@Entity({ name: 'users' })
export class AuthEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { comment: '유저 UUID' })
  id: string;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
    nullable: false,
    comment: '로그인 이메일 아이디',
  })
  loginId!: string;

  @Column({ type: 'varchar', length: 100, comment: '비밀번호' })
  password!: string;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
    nullable: false,
    comment: '사용자 이름',
  })
  name!: string;

  @Column({
    type: 'enum',
    comment: '사용여부',
    enum: IUseAuth,
    nullable: false,
  })
  use: IUseAuth;

  @Column({
    type: 'enum',
    comment: '유저 유형',
    enum: IUserType,
    nullable: false,
  })
  type: IUserType;

  @CreateDateColumn({ type: 'timestamp', comment: '등록시간' })
  createdAt: Date | undefined;

  @DeleteDateColumn({ type: 'timestamp', comment: '삭제시간' })
  deletedAt: Date | undefined;
}
