import { Component } from '@angular/core';
import { withIncrementalHydration } from '@angular/platform-browser';

@Component({
  selector: 'app-conta',
  standalone: false,
  templateUrl: './conta.html',
  styleUrl: './conta.css'
})
export class Conta {

valor: number = 0;
soma(){
  this.valor++;
}
subtracao(){
  this.valor--;
}

}
