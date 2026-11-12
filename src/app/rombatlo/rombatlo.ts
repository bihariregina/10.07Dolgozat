/*
# * File: src/app/rombatlo/rombatlo.ts
# * Author: Bihari Regina
# * Copyright: 2026, Bihari Regina
# * Group: Szoft V
# * Date: 2021-10-07
# * Github: https://github.com/bihariregina/10.07Dolgozat
# * Licenc: MIT
# */

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


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
