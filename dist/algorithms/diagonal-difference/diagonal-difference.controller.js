"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagonalDifferenceController = void 0;
const common_1 = require("@nestjs/common");
const diagonal_difference_service_1 = require("./diagonal-difference.service");
let DiagonalDifferenceController = class DiagonalDifferenceController {
    constructor(diagonalDifferenceService) {
        this.diagonalDifferenceService = diagonalDifferenceService;
    }
    getDifference(matrix) {
        const parsedMatrix = JSON.parse(matrix);
        return this.diagonalDifferenceService.diagonalDifference(parsedMatrix);
    }
};
exports.DiagonalDifferenceController = DiagonalDifferenceController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('matrix')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Number)
], DiagonalDifferenceController.prototype, "getDifference", null);
exports.DiagonalDifferenceController = DiagonalDifferenceController = __decorate([
    (0, common_1.Controller)('diagonal-difference'),
    __metadata("design:paramtypes", [diagonal_difference_service_1.DiagonalDifferenceService])
], DiagonalDifferenceController);
//# sourceMappingURL=diagonal-difference.controller.js.map