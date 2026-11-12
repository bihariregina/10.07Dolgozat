
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// A program egy rombusz területének kiszámítására használható.
// Készítette: VEZETÉKNÉV KERESZTNÉV
// Dátum: 2026.11.12.
// Osztály: OSZTÁLYOD

@Component({
  selector: 'app-rombatlo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rombatlo.html',
  styleUrl: './rombatlo.css'
})
export class Rombatlo {

  e: number | null = null;
  f: number | null = null;
  terulet: number | null = null;
  hiba = '';

  szamol(): void {
    this.hiba = '';
    this.terulet = null;

    if (
      this.e === null ||
      this.f === null ||
      this.e <= 0 ||
      this.f <= 0
    ) {
      this.hiba = 'Adj meg két pozitív átlóhosszt!';
      return;
    }

    this.terulet = (this.e * this.f) / 2;
  }
}
