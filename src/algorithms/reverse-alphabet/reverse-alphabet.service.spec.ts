import { Test, TestingModule } from '@nestjs/testing';
import { ReverseAlphabetService } from './reverse-alphabet.service';

describe('ReverseAlphabetService', () => {
  let service: ReverseAlphabetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReverseAlphabetService],
    }).compile();

    service = module.get<ReverseAlphabetService>(ReverseAlphabetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should reverse alphabet correctly', () => {
    expect(service.reverseAlphabet('NEGIE1')).toBe('EIGEN1');
  });

  it('should handle mixed case characters', () => {
    expect(service.reverseAlphabet('nEgIe1')).toBe('mVtRv1');
  });

  it('should leave non-alphabet characters unchanged', () => {
    expect(service.reverseAlphabet('123!@#')).toBe('123!@#');
  });
});
