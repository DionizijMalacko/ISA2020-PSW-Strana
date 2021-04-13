import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PharmacyService} from '../../services/pharmacy.service';
import {Router} from '@angular/router';
import {PharmacyCreate} from '../../models/Pharmacy-create';
import {DrugService} from '../../services/drug.service';
import {DrugCreate} from '../../models/DrugCreate';


@Component({
  selector: 'app-add-drug',
  templateUrl: './add-drug.component.html',
  styleUrls: ['./add-drug.component.css']
})
export class AddDrugComponent implements OnInit {
  @Input() pharmacyId: number;

  public createNewDrugForm: FormGroup;
  name: string;
  code: string;
  quantity: number;

  constructor(
    private _pharmacyService: PharmacyService,
    private _formBuilder: FormBuilder,
    public router: Router) { }

  ngOnInit(): void {
    this.createNewDrugForm = this._formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      code: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required])
    });
  }


  addNewDrug(): void {
    this.name = this.createNewDrugForm.value.name;
    this.code = this.createNewDrugForm.value.code;
    this.quantity = this.createNewDrugForm.value.quantity;
    const drug = new DrugCreate(
      this.createNewDrugForm.value.name,
      this.createNewDrugForm.value.code,
      this.createNewDrugForm.value.quantity
    );
    this._pharmacyService.createNewDrug(this.name, this.code, this.quantity).subscribe(
      () => {
        this.createNewDrugForm.reset();
      }
    );
  }

  goBack() {
    this.router.navigate(['/patient/all-drugs']);
  }

}
