import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiDescripcionComponent } from './mi-descripcion.component';

describe('MiDescripcionComponent', () => {
  let component: MiDescripcionComponent;
  let fixture: ComponentFixture<MiDescripcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiDescripcionComponent]
    });
    fixture = TestBed.createComponent(MiDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
