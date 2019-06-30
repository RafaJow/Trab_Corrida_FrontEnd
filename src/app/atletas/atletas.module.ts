import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtletasPesquisaComponent } from './atletas-pesquisa/atletas-pesquisa.component';
import { AtletasCadastroComponent } from './atletas-cadastro/atletas-cadastro.component';

@NgModule({
  declarations: [AtletasPesquisaComponent, AtletasCadastroComponent],
  imports: [
    CommonModule
  ]
})
export class AtletasModule { }
