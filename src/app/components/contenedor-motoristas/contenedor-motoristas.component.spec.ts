import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorMotoristasComponent } from './contenedor-motoristas.component';

describe('ContenedorMotoristasComponent', () => {
  let component: ContenedorMotoristasComponent;
  let fixture: ComponentFixture<ContenedorMotoristasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorMotoristasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorMotoristasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
