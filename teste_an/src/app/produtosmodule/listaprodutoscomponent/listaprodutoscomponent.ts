import { Component } from '@angular/core';

@Component({
  selector: 'app-listaprodutoscomponent',
  standalone: false,
  templateUrl: './listaprodutoscomponent.html',
  styleUrl: './listaprodutoscomponent.css'
})
export class Listaprodutoscomponent {

  lista = [
    {nome: 'luis'},
    {nome: 'lucas'}
  ]

}
