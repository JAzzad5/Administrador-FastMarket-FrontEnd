import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorOrdenesPendientesComponent } from './contenedor-ordenes-pendientes.component';

describe('ContenedorOrdenesPendientesComponent', () => {
  let component: ContenedorOrdenesPendientesComponent;
  let fixture: ComponentFixture<ContenedorOrdenesPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorOrdenesPendientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorOrdenesPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
