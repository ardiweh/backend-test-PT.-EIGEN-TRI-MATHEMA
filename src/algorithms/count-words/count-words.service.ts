import { Injectable } from '@nestjs/common';

@Injectable()
export class CountWordsService {
  countWords(inputList: string[] = [], queryList: string[] = []): number[] {
    // Menangani null dan undefined
    if (!Array.isArray(inputList)) {
      throw new Error('inputList should be an array of strings.');
    }
    if (!Array.isArray(queryList)) {
      throw new Error('queryList should be an array of strings.');
    }

    const inputCount = inputList.reduce((countMap, word) => {
      if (typeof word === 'string') {
        countMap[word] = (countMap[word] || 0) + 1;
      }
      return countMap;
    }, {} as Record<string, number>);

    return queryList.map(word => (typeof word === 'string' ? inputCount[word] || 0 : 0));
  }
}
