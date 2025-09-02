import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'livros',
    loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule)
  },
   {
    path: 'contador',
    loadChildren: () => import('./contador/contador-module').then(n => n.ContadorModule)
  },

 {
    path: 'estrutura',
    loadChildren: () => import('./estrutura/estrutura-module').then(n => n.EstruturaModule)
  },

 {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos-module').then(n => n.ProdutosModule)
  },

   {

     path: 'produtos-module',
    loadChildren: () => import('./produtosmodule/produtosmodule-module').then(n => n.ProdutosmoduleModule)
   }
     
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
