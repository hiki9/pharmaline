import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPharmacienComponent } from './add-pharmacien.component';

describe('AddPharmacienComponent', () => {
  let component: AddPharmacienComponent;
  let fixture: ComponentFixture<AddPharmacienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPharmacienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPharmacienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
