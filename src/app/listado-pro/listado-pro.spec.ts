import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoPro } from './listado-pro';
import { ReactiveFormsModule } from '@angular/forms';

describe('ListadoPro', () => {
  let component: ListadoPro;
  let fixture: ComponentFixture<ListadoPro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importamos ReactiveFormsModule porque tu componente lo usa
      imports: [ListadoPro, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoPro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe filtrar productos al cambiar el buscador', (done) => {
    component.searchControl.setValue('Café');
    // Esperamos el debounceTime de 500ms
    setTimeout(() => {
      expect(component.productosFiltrados.length).toBe(1);
      done();
    }, 600);
  });
});
