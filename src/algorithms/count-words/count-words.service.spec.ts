import { Test, TestingModule } from '@nestjs/testing';
import { CountWordsService } from './count-words.service';

describe('CountWordsService', () => {
  let service: CountWordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountWordsService],
    }).compile();

    service = module.get<CountWordsService>(CountWordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should count word occurrences correctly', () => {
    const inputList = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
    const queryList = ['apple', 'banana', 'grape'];

    expect(service.countWords(inputList, queryList)).toEqual([2, 3, 0]);
  });

  it('should handle empty inputList and queryList', () => {
    expect(service.countWords([], [])).toEqual([]);
  });

  it('should handle empty inputList with non-empty queryList', () => {
    expect(service.countWords([], ['apple', 'banana'])).toEqual([0, 0]);
  });

  it('should handle non-empty inputList with empty queryList', () => {
    expect(service.countWords(['apple', 'banana'], [])).toEqual([]);
  });

  it('should handle null or undefined input gracefully', () => {
    expect(() => service.countWords(null as unknown as string[], ['apple'])).toThrowError('inputList should be an array of strings.');
    expect(() => service.countWords(['apple'], null as unknown as string[])).toThrowError('queryList should be an array of strings.');
    expect(() => service.countWords(null as unknown as string[], null as unknown as string[])).toThrowError('inputList should be an array of strings.');
    expect(() => service.countWords(undefined as unknown as string[], ['apple'])).toThrowError('inputList should be an array of strings.');
    expect(() => service.countWords(['apple'], undefined as unknown as string[])).toThrowError('queryList should be an array of strings.');
    expect(() => service.countWords(undefined as unknown as string[], undefined as unknown as string[])).toThrowError('inputList should be an array of strings.');
  });
});
