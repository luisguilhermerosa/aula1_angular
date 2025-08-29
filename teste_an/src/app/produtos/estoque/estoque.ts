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
     {nome: 'geladeira', preco: 6000, estoque: 20},
     {nome: 'micro-ondas', preco: 1200, estoque:0}
      ];


     aumentarPreco() {
      for (let i=0; i < this.produtos.length; i++) {
        this.produtos[i].preco = this.produtos[i].preco * 1.10;
      }
     }

     diminuirPreco(){

    for (let i=0; i < this.produtos.length; i++) {
      this.produtos[i].preco = this.produtos[i].preco * 0.90;
    }

     }


 
}
