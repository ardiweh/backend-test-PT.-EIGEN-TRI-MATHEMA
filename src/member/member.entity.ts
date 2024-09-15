import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Borrow } from '../borrow/borrow.entity';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @OneToMany(() => Borrow, borrow => borrow.member)
  borrows: Borrow[];

  @Column({ default: 0 })
  penalty: number;
}