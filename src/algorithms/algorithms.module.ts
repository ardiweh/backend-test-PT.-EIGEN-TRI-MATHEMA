import { Module } from '@nestjs/common';
import { ReverseAlphabetService } from './reverse-alphabet/reverse-alphabet.service';
import { ReverseAlphabetController } from './reverse-alphabet/reverse-alphabet.controller';
import { LongestWordService } from './longest-word/longest-word.service';
import { LongestWordController } from './longest-word/longest-word.controller';
import { CountWordsService } from './count-words/count-words.service';
import { CountWordsController } from './count-words/count-words.controller';
import { DiagonalDifferenceService } from './diagonal-difference/diagonal-difference.service';
import { DiagonalDifferenceController } from './diagonal-difference/diagonal-difference.controller';

@Module({
  imports: [],
  controllers: [
    ReverseAlphabetController,
    LongestWordController,
    CountWordsController,
    DiagonalDifferenceController,
  ],
  providers: [
    ReverseAlphabetService,
    LongestWordService,
    CountWordsService,
    DiagonalDifferenceService,
  ],
})
export class AlgorithmsModule {}
