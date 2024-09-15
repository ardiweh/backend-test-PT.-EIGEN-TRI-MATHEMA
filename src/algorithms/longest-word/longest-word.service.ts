import { Injectable } from '@nestjs/common';

@Injectable()
export class LongestWordService {
  longest(sentence: string): string {
    const words = sentence.split(' ');
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
  }
}
