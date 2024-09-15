import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Member } from '../member/member.entity';
import { Book } from '../book/book.entity';

@Entity()
export class Borrow {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Member, member => member.borrows)
  member: Member;

  @ManyToOne(() => Book, book => book.borrows)
  book: Book;

  @Column()
  borrowedDate: Date;
}
