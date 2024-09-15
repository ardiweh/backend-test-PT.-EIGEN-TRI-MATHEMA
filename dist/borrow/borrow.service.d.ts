import { Repository } from 'typeorm';
import { Borrow } from './borrow.entity';
import { Member } from '../member/member.entity';
import { Book } from '../book/book.entity';
export declare class BorrowService {
    private borrowRepository;
    private memberRepository;
    private bookRepository;
    constructor(borrowRepository: Repository<Borrow>, memberRepository: Repository<Member>, bookRepository: Repository<Book>);
    borrowBook(memberCode: string, bookCode: string): Promise<void>;
    returnBook(memberCode: string, bookCode: string): Promise<void>;
}
