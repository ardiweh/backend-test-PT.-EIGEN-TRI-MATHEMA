import { ReverseAlphabetService } from './reverse-alphabet.service';
export declare class ReverseAlphabetController {
    private readonly reverseAlphabetService;
    constructor(reverseAlphabetService: ReverseAlphabetService);
    reverse(s: string): string;
}
