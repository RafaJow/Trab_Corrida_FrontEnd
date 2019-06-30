import { AtletasService } from './atletas.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtletasPesquisaComponent } from './atletas-pesquisa/atletas-pesquisa.component';
import { AtletasCadastroComponent } from './atletas-cadastro/atletas-cadastro.component';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AtletasPesquisaComponent, AtletasCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports:[
    AtletasPesquisaComponent,
    AtletasCadastroComponent
  ],
  providers:[
    AtletasService,
    MessageService
  ]
})
export class AtletasModule { }
