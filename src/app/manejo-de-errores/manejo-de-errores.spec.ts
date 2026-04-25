import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManejoDeErroresComponent } from './manejo-de-errores';

describe('ManejoDeErroresComponent', () => {
  let component: ManejoDeErroresComponent;
  let fixture: ComponentFixture<ManejoDeErroresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManejoDeErroresComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ManejoDeErroresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TEST 1: Verificar que el componente se crea
  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  // TEST 2: Verificar cambio a estado de error
  it('debe cambiar el estado a error al llamar simularError()', () => {
    component.simularError();
    expect(component.status).toBe('error');
  });
});
