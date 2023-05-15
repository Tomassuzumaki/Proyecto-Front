import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaLComponent } from './experiencia-l.component';

describe('ExperienciaLComponent', () => {
  let component: ExperienciaLComponent;
  let fixture: ComponentFixture<ExperienciaLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienciaLComponent]
    });
    fixture = TestBed.createComponent(ExperienciaLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
