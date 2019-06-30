import { AtletasPesquisaComponent } from './atletas/atletas-pesquisa/atletas-pesquisa.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { AtletasModule } from './atletas/atletas.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const rotas: Routes = [
  {path: 'atletas', component: AtletasPesquisaComponent}
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
