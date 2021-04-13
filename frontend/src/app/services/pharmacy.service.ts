import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams, HttpResponseBase} from '@angular/common/http';
import {Router} from '@angular/router';
import {Pharmacy} from '../models/Pharmacy';
import {PharmacyCreate} from '../models/Pharmacy-create';
import {PharmacyDrugs} from '../models/PharmacyDrugs';
import {DrugCreate} from '../models/DrugCreate';
import {DrugCreateFull} from '../models/DrugCreateFull';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  url = environment.baseUrl;
  urlPharmacy = environment.baseUrl + '/api/noAuth/pharmacy';
  urlPharmacyDrugs = environment.baseUrl + '/api/noAuth/pharmacyDrugDetails';


  pharmacies: BehaviorSubject<Pharmacy[]> = new BehaviorSubject<Pharmacy[]>([]);
  pharmacyDrugs: BehaviorSubject<PharmacyDrugs[]> = new BehaviorSubject<PharmacyDrugs[]>([]);
  pharmacyId: number;



  constructor(private http: HttpClient, private router: Router) { }

  public createNewPharmacy(pharmacy: PharmacyCreate) {
    return this.http.post(this.urlPharmacy + '/create', pharmacy);
  }

  public getAllPharmacies(): Observable<Pharmacy[]> {
    this.http.get(this.urlPharmacy + '/getAll').subscribe(
      ( data: Pharmacy[] ) => {
        this.pharmacies.next(data);
      },
      (error: HttpResponseBase) => {

      });
    return this.pharmacies.asObservable();
  }

  public getAllPharmacyDrugs(): Observable<PharmacyDrugs[]> {
    this.http.get(this.urlPharmacyDrugs + '/getAll').subscribe(
      ( data: PharmacyDrugs[] ) => {
        this.pharmacyDrugs.next(data);
      },
      (error: HttpResponseBase) => {

      });
    return this.pharmacyDrugs.asObservable();
  }

  public getAllWithSameName(name: string): Observable<Pharmacy[]> {
    let params = new HttpParams();
    params = params.append('name', name );

    this.http.get(this.urlPharmacy + '/getAllWithSameName', { params: params }).subscribe(
      ( data: Pharmacy[] ) => {
        this.pharmacies.next(data);
      },
      (error: HttpResponseBase) => {

      });
    return this.pharmacies.asObservable();
  }

  public getAllWithSameDrugName(name: string): Observable<PharmacyDrugs[]> {
    let params = new HttpParams();
    params = params.append('name', name );

    this.http.get(this.urlPharmacyDrugs + '/getAllWithSameName', { params: params }).subscribe(
      ( data: PharmacyDrugs[] ) => {
        this.pharmacyDrugs.next(data);
      },
      (error: HttpResponseBase) => {

      });
    return this.pharmacyDrugs.asObservable();
  }

  public setPharmacyId(pharmacyId: number) {
    this.pharmacyId = pharmacyId;
  }

  public createNewDrug(name: string, code: string, quantity: number) {
    /*let params = new HttpParams();
    let headers = new HttpHeaders();*/
    console.log(name);
    console.log(code);
    console.log(quantity);
    console.log(this.pharmacyId);
    const drugFull = new DrugCreateFull(name, code, quantity, this.pharmacyId);
    console.log(drugFull.name);
    console.log(drugFull.code);
    console.log(drugFull.quantity);
    console.log(drugFull.pharmacyId);

    return this.http.post(this.urlPharmacyDrugs + '/create', drugFull);
  }

  public createTenderOffer(code: string) {
    let params = new HttpParams();
    params = params.append('code', code);
    /*let headers = new HttpHeaders();*/
    console.log(code);
    return this.http.post(this.urlPharmacyDrugs + '/createTenderOffer', {}, {params: params});
  }

}
