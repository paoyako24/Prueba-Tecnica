import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReactivo } from './formulario-reactivo';

describe('FormularioReactivo', () => {
  let component: FormularioReactivo;
  let fixture: ComponentFixture<FormularioReactivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioReactivo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioReactivo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
