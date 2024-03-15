import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  MBR_SEQ: number;

  @Column({ type: 'varchar' })
  MBR_ID: string;

  @Column({ type: 'varchar' })
  MBR_PWD: string;

  @Column({ type: 'datetime' })
  REG_DTM: Date;
}
