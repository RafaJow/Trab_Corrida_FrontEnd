import { EventosService } from './eventos.service';
import { EventosPesquisaComponent } from './eventos-pesquisa/eventos-pesquisa.component';
import { EventosCadastroComponent } from './eventos-cadastro/eventos-cadastro.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {ListboxModule} from 'primeng/listbox';

@NgModule({
  declarations: [EventosPesquisaComponent, EventosCadastroComponent],
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
    CalendarModule,
    CheckboxModule,
    ListboxModule
  ],
  exports:[
    EventosPesquisaComponent,
    EventosCadastroComponent
  ],
  providers:[
    EventosService,
    MessageService
  ]
})
export class EventosModule { }
