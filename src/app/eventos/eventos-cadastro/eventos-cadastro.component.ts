import { Categoria } from './../../categorias/model';
import { Evento } from '../model';
import { EventosService } from '../eventos.service';

import { MessageService, SelectItem } from 'primeng/api';

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-eventos-cadastro',
  templateUrl: './eventos-cadastro.component.html',
  styleUrls: ['./eventos-cadastro.component.css']
})
export class EventosCadastroComponent implements OnInit {

  evento = new Evento();
  selectedCategorias: Categoria[];
  categorias: SelectItem[];


  //categorias: { label: string; value: { id: number; distancia: number; }; }[];

  constructor(
    private service: EventosService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) {



    this.categorias = [

      {label:'Escolha uma categoria KM', value:null},
      {label:'5 KM', value:{id:10, distancia:5.0}},
      {label:'10 KM', value:{id:11, distancia:10.0}},
      {label:'15 KM', value:{id:12, distancia:15.0}},
      {label:'20 KM', value:{id:14, distancia:20.0}},
      {label:'25 KM', value:{id:15, distancia:25.0}},
      {label:'30 KM', value:{id:16, distancia:30.0}},

    ]

  }

  inserir(form: FormControl){
    this.service.adicionar(this.evento)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Evento '+this.evento.nome+' Cadastrado'});
      form.reset();
    })
  }

  ngOnInit() {
    const codigoEvento = this.rota.snapshot.params['id'];
    if(codigoEvento){
      this.carregarEvento(codigoEvento);
      console.log(this.evento.id);
    }
  }

  carregarEvento(id: number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
       this.evento = data;
      }
    );
  }

  alterar(form: FormControl){
    this.service.alterar(this.evento)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Eventos '+this.evento.nome+' alterado'});
      form.reset();
    });
  }



  salvar(form: FormControl){
    if(this.editando){
      this.alterar(form);
    }else{
      this.inserir(form);
    }
  }


  get editando(){
    return Boolean(this.evento.id);
  }
}


