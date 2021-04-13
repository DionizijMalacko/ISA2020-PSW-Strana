import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HospitalService} from '../../services/hospital-service.service';
import {Router} from '@angular/router';
import {Hospital} from '../../models/hospital';
import {PharmacyService} from '../../services/pharmacy.service';
import {Pharmacy} from '../../models/Pharmacy';
import {PharmacyCreate} from '../../models/Pharmacy-create';

@Component({
  selector: 'app-add-pharmacy',
  templateUrl: './add-pharmacy.component.html',
  styleUrls: ['./add-pharmacy.component.css']
})
export class AddPharmacyComponent implements OnInit {

  public createNewPharmacyForm: FormGroup;

  constructor(
    private _pharmacyService: PharmacyService,
    private _formBuilder: FormBuilder,
    public router: Router) { }

  ngOnInit(): void {
    this.createNewPharmacyForm = this._formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required])

    });
  }


  addNewPharmacy(): void {
    const pharmacy = new PharmacyCreate(
      this.createNewPharmacyForm.value.name,
      this.createNewPharmacyForm.value.address,
    );
    this._pharmacyService.createNewPharmacy(pharmacy).subscribe(
      () => {
        this.createNewPharmacyForm.reset();
      }
    );
  }

  goBack() {
    this.router.navigate(['/all-pharmacies']);
  }

}
