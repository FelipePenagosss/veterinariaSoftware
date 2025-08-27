import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMacotaComponent } from './crear-macota.component';

describe('CrearMacotaComponent', () => {
  let component: CrearMacotaComponent;
  let fixture: ComponentFixture<CrearMacotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearMacotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearMacotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
