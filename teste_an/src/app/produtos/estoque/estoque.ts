import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {
mostrarLista: boolean = true;


  produtos =[
     {nome: 'geladeira', preco:'R$ 6000', estoque: 20},
     {nome: 'micro-ondas', preco:'R$ 3200', estoque:0}

  ];

}
