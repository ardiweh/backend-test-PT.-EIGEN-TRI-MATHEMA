import { Member } from '../member/member.entity';
import { Book } from '../book/book.entity';
export declare class Borrow {
    id: number;
    member: Member;
    book: Book;
    borrowedDate: Date;
}
