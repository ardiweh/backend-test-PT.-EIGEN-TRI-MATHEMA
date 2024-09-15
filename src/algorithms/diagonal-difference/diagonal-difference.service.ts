import { Injectable } from '@nestjs/common';

@Injectable()
export class DiagonalDifferenceService {
  diagonalDifference(matrix: number[][]): number {
    const n = matrix.length;
    const primaryDiagonal = matrix.reduce((sum, row, i) => sum + row[i], 0);
    const secondaryDiagonal = matrix.reduce((sum, row, i) => sum + row[n - 1 - i], 0);
    return Math.abs(primaryDiagonal - secondaryDiagonal);
  }
}
