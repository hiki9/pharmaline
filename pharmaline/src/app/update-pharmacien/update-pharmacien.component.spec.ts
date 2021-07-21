import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePharmacienComponent } from './update-pharmacien.component';

describe('UpdatePharmacienComponent', () => {
  let component: UpdatePharmacienComponent;
  let fixture: ComponentFixture<UpdatePharmacienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePharmacienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePharmacienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
