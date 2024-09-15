import { CountWordsService } from './count-words.service';
export declare class CountWordsController {
    private readonly countWordsService;
    constructor(countWordsService: CountWordsService);
    count(input: string[], query: string[]): number[];
}
