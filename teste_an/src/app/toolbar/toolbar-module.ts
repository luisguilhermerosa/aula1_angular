import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarRoutingModule } from './toolbar-routing-module';
import { Teste } from './teste/teste';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    Teste
  ],
  imports: [
    CommonModule,
    ToolbarRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule

  ],
  exports: [
    Teste
  ]
})
export class ToolbarModule { }
