"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseAlphabetService = void 0;
const common_1 = require("@nestjs/common");
let ReverseAlphabetService = class ReverseAlphabetService {
    reverseAlphabet(s) {
        return s
            .split('')
            .map(c => {
            if (c >= 'A' && c <= 'Z') {
                return String.fromCharCode('Z'.charCodeAt(0) - (c.charCodeAt(0) - 'A'.charCodeAt(0)));
            }
            else if (c >= 'a' && c <= 'z') {
                return String.fromCharCode('z'.charCodeAt(0) - (c.charCodeAt(0) - 'a'.charCodeAt(0)));
            }
            else {
                return c;
            }
        })
            .join('');
    }
};
exports.ReverseAlphabetService = ReverseAlphabetService;
exports.ReverseAlphabetService = ReverseAlphabetService = __decorate([
    (0, common_1.Injectable)()
], ReverseAlphabetService);
//# sourceMappingURL=reverse-alphabet.service.js.map