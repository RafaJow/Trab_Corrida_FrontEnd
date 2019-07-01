import { AtletasService } from './../atletas.service';
import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-atletas-pesquisa',
  templateUrl: './atletas-pesquisa.component.html',
  styleUrls: ['./atletas-pesquisa.component.css']
})
export class AtletasPesquisaComponent implements OnInit {

  atletas = [];
  nomeBusca:string;

  constructor(
    private service:AtletasService,
    private msg:MessageService,
    private conf:ConfirmationService
  ) { }

  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.atletas=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(atleta:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+atleta.nome+'?',
      accept: () => {
        this.excluir(atleta);
      }
    });
  }

  excluir(atleta: any){
    this.service.excluir(atleta.id)
    .then(() =>{
      this.pesquisar();
      this.msg.add({severity:'sucess', summary: 'Service Message', detail: 'Via MessageService'});
    })
  }
}
