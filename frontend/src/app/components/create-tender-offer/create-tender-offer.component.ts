import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PharmacyService} from '../../services/pharmacy.service';
import {Router} from '@angular/router';
import {TenderOffer} from '../../models/TenderOffer';

@Component({
  selector: 'app-create-tender-offer',
  templateUrl: './create-tender-offer.component.html',
  styleUrls: ['./create-tender-offer.component.css']
})
export class CreateTenderOfferComponent implements OnInit {

  public createTenderOfferForm: FormGroup;
  name: string;
  code: string;
  quantity: number;
  price: number;

  constructor(
    private _pharmacyService: PharmacyService,
    private _formBuilder: FormBuilder,
    public router: Router) { }

  ngOnInit(): void {
    this.createTenderOfferForm = this._formBuilder.group({
      code: new FormControl(null, [Validators.required]),
    });
  }

  createOffer(): void {
    this.code = this.createTenderOfferForm.value.code;

    this._pharmacyService.createTenderOffer(this.code).subscribe(
      () => {
        this.createTenderOfferForm.reset();
      }
    );
  }

  goBack() {
    this.router.navigate(['/patient/all-drugs']);
  }

}
