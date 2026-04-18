import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPro } from './listado-pro';

describe('ListadoPro', () => {
  let component: ListadoPro;
  let fixture: ComponentFixture<ListadoPro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoPro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
