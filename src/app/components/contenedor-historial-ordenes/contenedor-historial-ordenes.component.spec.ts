import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorHistorialOrdenesComponent } from './contenedor-historial-ordenes.component';

describe('ContenedorHistorialOrdenesComponent', () => {
  let component: ContenedorHistorialOrdenesComponent;
  let fixture: ComponentFixture<ContenedorHistorialOrdenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorHistorialOrdenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorHistorialOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
