import { Component, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-eventos-pesquisa',
  templateUrl: './eventos-pesquisa.component.html',
  styleUrls: ['./eventos-pesquisa.component.css']
})
export class EventosPesquisaComponent implements OnInit {

  eventos = [];
  nomeBusca:string;

  constructor(
    private service:EventosService,
    private msg:MessageService,
    private conf:ConfirmationService
  ) { }

  pesquisar(){
     this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
       this.eventos=dados;
     });
   }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(evento:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+evento.nome+'?',
      accept: () => {
        this.excluir(evento);
      }
    });
  }

  excluir(evento: any){
    this.service.excluir(evento.id)
    .then(() =>{
      this.pesquisar();
      this.msg.add({severity:'sucess', summary: 'Service Message', detail: 'Via MessageService'});
    })
  }

}
