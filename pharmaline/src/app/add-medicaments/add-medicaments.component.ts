import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-add-medicaments',
  templateUrl: './add-medicaments.component.html',
  styleUrls: ['./add-medicaments.component.css']
})
export class AddMedicamentsComponent implements OnInit {
  submitted : boolean=false;
  public addMedicamentForm: FormGroup
  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.addMedicamentForm = this.fb.group({
      medicamentName: ['', Validators.required],
      medicamentCode: ['', Validators.required],
      posologie: ['', Validators.required],
      datePeremption: ['', Validators.required]
    })
  }
  ngOnInit(){
  }
  AddMedicament(){
    this.submitted = true;
    const valid = this.addMedicamentForm.valid;
    if(valid) {

      let dataJson = this.addMedicamentForm.value;
      this.apiService.FctAddMedicaments(dataJson);
    }
  

  }
  get f(){
    return this.addMedicamentForm.controls}
}