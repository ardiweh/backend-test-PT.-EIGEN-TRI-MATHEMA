import { Module } from '@nestjs/common';
import { AlgorithmsModule } from './algorithms/algorithms.module';

@Module({
  imports: [AlgorithmsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
