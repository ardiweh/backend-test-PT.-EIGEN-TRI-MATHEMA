import { DiagonalDifferenceService } from './diagonal-difference.service';
export declare class DiagonalDifferenceController {
    private readonly diagonalDifferenceService;
    constructor(diagonalDifferenceService: DiagonalDifferenceService);
    getDifference(matrix: string): number;
}
