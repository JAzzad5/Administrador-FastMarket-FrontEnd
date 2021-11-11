import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorHistorialComponent } from './contenedor-historial.component';

describe('ContenedorHistorialComponent', () => {
  let component: ContenedorHistorialComponent;
  let fixture: ComponentFixture<ContenedorHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorHistorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
