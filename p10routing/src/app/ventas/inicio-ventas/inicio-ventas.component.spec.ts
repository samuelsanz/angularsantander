import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioVentasComponent } from './inicio-ventas.component';

describe('InicioVentasComponent', () => {
  let component: InicioVentasComponent;
  let fixture: ComponentFixture<InicioVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
