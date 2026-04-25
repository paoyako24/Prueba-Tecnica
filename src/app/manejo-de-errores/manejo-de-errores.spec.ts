import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManejoDeErrores } from './manejo-de-errores';

describe('ManejoDeErrores', () => {
  let component: ManejoDeErrores;
  let fixture: ComponentFixture<ManejoDeErrores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Como es un componente Standalone, va en imports
      imports: [ManejoDeErrores]
    }).compileComponents();

    fixture = TestBed.createComponent(ManejoDeErrores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TEST 1: El básico para asegurar que carga
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TEST 2: Verifica que el estado inicial sea correcto
  it('debe iniciar con el estado en success', () => {
    expect(component.status).toBe('success');
  });

  // TEST 3: Verifica que la función simularError cambie el estado (Robustez)
  it('debe cambiar el estado a error al llamar simularError()', () => {
    component.simularError();
    expect(component.status).toBe('error');
  });

  // TEST 4: Verifica la simulación de carga
  it('debe cambiar a loading al llamar simularCarga()', () => {
    component.simularCarga();
    expect(component.status).toBe('loading');
  });
});
