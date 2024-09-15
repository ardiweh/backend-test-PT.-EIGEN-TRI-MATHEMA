import { Controller, Get, Query } from '@nestjs/common';
import { DiagonalDifferenceService } from './diagonal-difference.service';

@Controller('diagonal-difference')
export class DiagonalDifferenceController {
  constructor(private readonly diagonalDifferenceService: DiagonalDifferenceService) {}

  @Get()
  getDifference(@Query('matrix') matrix: string): number {
    const parsedMatrix = JSON.parse(matrix);
    return this.diagonalDifferenceService.diagonalDifference(parsedMatrix);
  }
}
