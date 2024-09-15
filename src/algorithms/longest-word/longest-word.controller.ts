import { Controller, Get, Query } from '@nestjs/common';
import { LongestWordService } from './longest-word.service';

@Controller('longest-word')
export class LongestWordController {
  constructor(private readonly longestWordService: LongestWordService) {}

  @Get()
  getLongest(@Query('sentence') sentence: string): string {
    return this.longestWordService.longest(sentence);
  }
}
