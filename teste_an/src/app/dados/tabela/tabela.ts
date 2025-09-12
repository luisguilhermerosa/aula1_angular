import { Component } from '@angular/core';
import { Produtos } from '../modelo/produto';

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css'
})
export class Tabela {
  displayedColumns: string[] = ['nome', 'valor', 'acoes'];

  dataSource: Produtos[] = [
    { nome: 'coca lata', valor: '10R$' },
    { nome: 'coca 2L', valor: '20R$' }
  ];


}
