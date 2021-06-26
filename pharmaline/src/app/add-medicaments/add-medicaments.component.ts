import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-add-medicaments',
  templateUrl: './add-medicaments.component.html',
  styleUrls: ['./add-medicaments.component.css']
})
export class AddMedicamentsComponent implements OnInit {
  public addMedicamentForm: FormGroup
  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.addMedicamentForm = this.fb.group({
      medicamentName: ['', Validators.required],
      medicamentCode: ['', Validators.required],
      posologie: ['', Validators.required],
      datePeremption: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  AddMedicament() {

    let dataJson = (this.addMedicamentForm.value)
    this.apiService.FctAddMedicaments(dataJson);
  }
}