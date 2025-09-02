import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Botaocomponent } from './botaocomponent/botaocomponent';



@NgModule({
  declarations: [
    Botaocomponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Botaocomponent
  ]
})
export class SharedmoduleModule { }
