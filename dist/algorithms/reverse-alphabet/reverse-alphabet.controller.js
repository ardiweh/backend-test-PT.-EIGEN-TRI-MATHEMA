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
exports.ReverseAlphabetController = void 0;
const common_1 = require("@nestjs/common");
const reverse_alphabet_service_1 = require("./reverse-alphabet.service");
let ReverseAlphabetController = class ReverseAlphabetController {
    constructor(reverseAlphabetService) {
        this.reverseAlphabetService = reverseAlphabetService;
    }
    reverse(s) {
        return this.reverseAlphabetService.reverseAlphabet(s);
    }
};
exports.ReverseAlphabetController = ReverseAlphabetController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('string')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], ReverseAlphabetController.prototype, "reverse", null);
exports.ReverseAlphabetController = ReverseAlphabetController = __decorate([
    (0, common_1.Controller)('reverse-alphabet'),
    __metadata("design:paramtypes", [reverse_alphabet_service_1.ReverseAlphabetService])
], ReverseAlphabetController);
//# sourceMappingURL=reverse-alphabet.controller.js.map