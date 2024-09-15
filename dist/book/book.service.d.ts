import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { Borrow } from '../borrow/borrow.entity';
export declare class BookService {
    private bookRepository;
    private borrowRepository;
    constructor(bookRepository: Repository<Book>, borrowRepository: Repository<Borrow>);
    findAll(): Promise<Book[]>;
    findAvailableBooks(): Promise<Book[]>;
}
