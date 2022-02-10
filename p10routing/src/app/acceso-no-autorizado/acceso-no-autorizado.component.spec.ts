import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoNoAutorizadoComponent } from './acceso-no-autorizado.component';

describe('AccesoNoAutorizadoComponent', () => {
  let component: AccesoNoAutorizadoComponent;
  let fixture: ComponentFixture<AccesoNoAutorizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoNoAutorizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoNoAutorizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
