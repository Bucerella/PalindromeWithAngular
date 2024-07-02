import { Component, OnInit } from '@angular/core';
import { PalindromeResult, PalindromeService } from './app.service';

@Component({
  selector: 'app-palindrome',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  palindromes: PalindromeResult[] = [];

  constructor(private palindromeService: PalindromeService) { }

  ngOnInit(): void {
    this.palindromeService.getPalindromes().subscribe(palindromes => {
      this.palindromes = palindromes;
    });
  }

  getClass(result: PalindromeResult): string {
    if (result.is_pure_palindrome && result.is_palindrome) {
      return 'pure-palindrome'; // Green for pure palindrome
    } else if (result.is_palindrome) {
      return 'palindrome'; // Yellow for palindrome
    } else {
      return 'red'; // No highlight for non-palindrome
    }
  }
}
