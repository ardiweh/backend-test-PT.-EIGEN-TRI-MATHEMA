"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlgorithmsModule = void 0;
const common_1 = require("@nestjs/common");
const reverse_alphabet_service_1 = require("./reverse-alphabet/reverse-alphabet.service");
const reverse_alphabet_controller_1 = require("./reverse-alphabet/reverse-alphabet.controller");
const longest_word_service_1 = require("./longest-word/longest-word.service");
const longest_word_controller_1 = require("./longest-word/longest-word.controller");
const count_words_service_1 = require("./count-words/count-words.service");
const count_words_controller_1 = require("./count-words/count-words.controller");
const diagonal_difference_service_1 = require("./diagonal-difference/diagonal-difference.service");
const diagonal_difference_controller_1 = require("./diagonal-difference/diagonal-difference.controller");
let AlgorithmsModule = class AlgorithmsModule {
};
exports.AlgorithmsModule = AlgorithmsModule;
exports.AlgorithmsModule = AlgorithmsModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [
            reverse_alphabet_controller_1.ReverseAlphabetController,
            longest_word_controller_1.LongestWordController,
            count_words_controller_1.CountWordsController,
            diagonal_difference_controller_1.DiagonalDifferenceController,
        ],
        providers: [
            reverse_alphabet_service_1.ReverseAlphabetService,
            longest_word_service_1.LongestWordService,
            count_words_service_1.CountWordsService,
            diagonal_difference_service_1.DiagonalDifferenceService,
        ],
    })
], AlgorithmsModule);
//# sourceMappingURL=algorithms.module.js.map