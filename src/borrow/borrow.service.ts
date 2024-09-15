import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Borrow } from './borrow.entity';
import { Member } from '../member/member.entity';
import { Book } from '../book/book.entity';

@Injectable()
export class BorrowService {
  constructor(
    @InjectRepository(Borrow)
    private borrowRepository: Repository<Borrow>,
    @InjectRepository(Member)
    private memberRepository: Repository<Member>,
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async borrowBook(memberCode: string, bookCode: string): Promise<void> {
    // Implementasikan logika peminjaman
  }

  async returnBook(memberCode: string, bookCode: string): Promise<void> {
    // Implementasikan logika pengembalian dan perhitungan denda
  }
}
