import { LongestWordService } from './longest-word.service';
export declare class LongestWordController {
    private readonly longestWordService;
    constructor(longestWordService: LongestWordService);
    getLongest(sentence: string): string;
}
