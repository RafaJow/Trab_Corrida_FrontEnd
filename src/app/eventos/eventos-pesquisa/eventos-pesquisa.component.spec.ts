import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosPesquisaComponent } from './eventos-pesquisa.component';

describe('EventosPesquisaComponent', () => {
  let component: EventosPesquisaComponent;
  let fixture: ComponentFixture<EventosPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
