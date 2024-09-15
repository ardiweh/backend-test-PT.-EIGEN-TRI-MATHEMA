import { Controller, Get, Query } from '@nestjs/common';
import { ReverseAlphabetService } from './reverse-alphabet.service';

@Controller('reverse-alphabet')
export class ReverseAlphabetController {
  constructor(private readonly reverseAlphabetService: ReverseAlphabetService) {}

  @Get()
  reverse(@Query('string') s: string): string {
    return this.reverseAlphabetService.reverseAlphabet(s);
  }
}
