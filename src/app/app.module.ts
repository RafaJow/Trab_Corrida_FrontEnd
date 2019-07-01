import { Atleta } from './atletas/model';
import { AtletasPesquisaComponent } from './atletas/atletas-pesquisa/atletas-pesquisa.component';
import { AtletasModule } from './atletas/atletas.module';

import { ConfirmationService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const rotas: Routes = [
  {path: 'atletas', component: AtletasPesquisaComponent},
  {path: 'atletas/:id', component: AtletasPesquisaComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AtletasModule,
    HttpClientModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
