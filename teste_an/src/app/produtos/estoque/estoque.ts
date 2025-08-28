import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {
mostrarMensagem = true;


  produtos =[
     {nome: 'geladeira', preco:'6000', estoque:'20'},
     {nome: 'micro-ondas', preco:'3200', estoque:'0'}

  ];

}
