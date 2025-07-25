import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPacienteComponent } from './alta-paciente.component';

describe('AltaPacienteComponent', () => {
  let component: AltaPacienteComponent;
  let fixture: ComponentFixture<AltaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaPacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
