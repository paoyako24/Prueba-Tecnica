import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoDeErrores } from './manejo-de-errores';

describe('ManejoDeErrores', () => {
  let component: ManejoDeErrores;
  let fixture: ComponentFixture<ManejoDeErrores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManejoDeErrores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManejoDeErrores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
