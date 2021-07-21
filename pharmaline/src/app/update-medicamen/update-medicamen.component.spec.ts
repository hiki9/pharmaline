import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMedicamenComponent } from './update-medicamen.component';

describe('UpdateMedicamenComponent', () => {
  let component: UpdateMedicamenComponent;
  let fixture: ComponentFixture<UpdateMedicamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMedicamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMedicamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
