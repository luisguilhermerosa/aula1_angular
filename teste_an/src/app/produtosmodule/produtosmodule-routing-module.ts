import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Listaprodutocomponent } from './listaprodutocomponent/listaprodutocomponent';

const routes: Routes = [
    {path: 'lista', component: Listaprodutocomponent}
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosmoduleRoutingModule { }
