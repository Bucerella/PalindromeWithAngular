import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { testStrings } from './test-string';

export interface PalindromeResult {
  text: string;
  is_pure_palindrome: boolean;
  is_palindrome: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PalindromeService {

  constructor() { }

  isPalindrome(text: string): boolean {
    const cleanText = text.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const reversedText = cleanText.split('').reverse().join('');
    return cleanText === reversedText;
  }

  isPurePalindrome(text: string): boolean {
    const cleanText = text.toLowerCase();
    const reversedText = cleanText.split('').reverse().join('');
    return cleanText === reversedText;
  }

  getPalindromes(): Observable<PalindromeResult[]> {
    return of(testStrings.map(text => ({
      text,
      is_pure_palindrome: this.isPurePalindrome(text),
      is_palindrome: this.isPalindrome(text),
    })));
  }
}
