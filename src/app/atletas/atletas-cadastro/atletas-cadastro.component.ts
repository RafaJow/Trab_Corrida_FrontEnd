import { Atleta } from '../model';

import { AtletasService } from '../atletas.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MessageService } from 'primeng/api';
import { FormControl } from '@angular/forms';




@Component({
  selector: 'app-atletas-cadastro',
  templateUrl: './atletas-cadastro.component.html',
  styleUrls: ['./atletas-cadastro.component.css']
})
export class AtletasCadastroComponent implements OnInit {

  atleta = new Atleta();

  constructor(
    private service: AtletasService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  inserir(form: FormControl){
    this.service.adicionar(this.atleta)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Atleta '+this.atleta.nome+' Cadastrado'});
      form.reset();
    })
  }

  ngOnInit() {
    const codigoAtleta = this.rota.snapshot.params['id'];
    if(codigoAtleta){
      this.carregarAtleta(codigoAtleta);
      console.log(this.atleta.id);
    }
  }

  carregarAtleta(id: number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
       this.atleta = data;
      }
    );
  }

  alterar(form: FormControl){
    this.service.alterar(this.atleta)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Atleta '+this.atleta.nome+' alterado'});
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
    return Boolean(this.atleta.id);
  }
}
