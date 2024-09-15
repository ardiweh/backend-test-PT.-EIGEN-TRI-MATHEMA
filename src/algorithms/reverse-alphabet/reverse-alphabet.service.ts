import { Injectable } from '@nestjs/common';

@Injectable()
export class ReverseAlphabetService {
  reverseAlphabet(s: string): string {
    return s
      .split('')
      .map(c => {
        if (c >= 'A' && c <= 'Z') {
          // Pembalikan huruf kapital (A-Z -> Z-A)
          return String.fromCharCode('Z'.charCodeAt(0) - (c.charCodeAt(0) - 'A'.charCodeAt(0)));
        } else if (c >= 'a' && c <= 'z') {
          // Pembalikan huruf kecil (a-z -> z-a)
          return String.fromCharCode('z'.charCodeAt(0) - (c.charCodeAt(0) - 'a'.charCodeAt(0)));
        } else {
          // Karakter non-huruf tidak diubah
          return c;
        }
      })
      .join('');
  }
}
