import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosCadastroComponent } from './eventos-cadastro.component';

describe('EventosCadastroComponent', () => {
  let component: EventosCadastroComponent;
  let fixture: ComponentFixture<EventosCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
