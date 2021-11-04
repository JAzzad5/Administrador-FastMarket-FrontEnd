import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorProductosComponent } from './contenedor-productos.component';

describe('ContenedorProductosComponent', () => {
  let component: ContenedorProductosComponent;
  let fixture: ComponentFixture<ContenedorProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
