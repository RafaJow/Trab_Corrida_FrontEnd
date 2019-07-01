import { AtletasService } from './atletas.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AtletasPesquisaComponent } from './atletas-pesquisa/atletas-pesquisa.component';
import { AtletasCadastroComponent } from './atletas-cadastro/atletas-cadastro.component';

import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {RadioButtonModule} from 'primeng/radiobutton';



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
    RouterModule,
    RadioButtonModule
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
