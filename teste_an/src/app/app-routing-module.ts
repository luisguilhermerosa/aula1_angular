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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
