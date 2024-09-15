import { Borrow } from '../borrow/borrow.entity';
export declare class Book {
    id: number;
    code: string;
    title: string;
    author: string;
    stock: number;
    borrows: Borrow[];
}
