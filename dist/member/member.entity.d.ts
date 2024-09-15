import { Borrow } from '../borrow/borrow.entity';
export declare class Member {
    id: number;
    code: string;
    name: string;
    borrows: Borrow[];
    penalty: number;
}
