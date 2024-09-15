// src/book/book.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { Borrow } from '../borrow/borrow.entity'; // Pastikan path ini benar

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
    @InjectRepository(Borrow)
    private borrowRepository: Repository<Borrow>,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  async findAvailableBooks(): Promise<Book[]> {
    // Ambil semua buku
    const allBooks = await this.bookRepository.find();

    // Ambil semua buku yang sedang dipinjam
    const borrowedBooks = await this.borrowRepository.find({
      relations: ['book'],
    });

    // Buat daftar buku yang dipinjam
    const borrowedBookCodes = borrowedBooks.map(borrow => borrow.book.code);

    // Filter buku yang tidak dipinjam
    return allBooks.filter(book => !borrowedBookCodes.includes(book.code));
  }
}
