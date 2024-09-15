import { Controller, Get, Query } from '@nestjs/common';
import { CountWordsService } from './count-words.service';

@Controller('count-words')
export class CountWordsController {
  constructor(private readonly countWordsService: CountWordsService) {}

  @Get()
  count(@Query('input') input: string[], @Query('query') query: string[]): number[] {
    return this.countWordsService.countWords(input, query);
  }
}
