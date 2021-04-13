import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {Drug} from '../models/Drug';
import {HttpClient, HttpHeaders, HttpParams, HttpResponseBase} from '@angular/common/http';
import {Router} from '@angular/router';
import {PharmacyCreate} from '../models/Pharmacy-create';

@Injectable({
  providedIn: 'root'
})

export class DrugService {

  urlDrug = environment.baseUrl + '/api/noAuth/drug';

  drugsInPharmacy: BehaviorSubject<Drug[]> = new BehaviorSubject<Drug[]>([]);

  drugsInPharmacySearched: BehaviorSubject<Drug[]> = new BehaviorSubject<Drug[]>([]);

  constructor(private http: HttpClient, private router: Router) { }

  public getAllDrugs(): Observable<Drug[]> {
    this.http.get(this.urlDrug + '/getAll').subscribe(
      ( data: Drug[] ) => {
        this.drugsInPharmacy.next(data);
      },
      (error: HttpResponseBase) => {

      });
    return this.drugsInPharmacy.asObservable();
  }

  public getAllWithSameName(name: string): Observable<Drug[]> {
    let params = new HttpParams();
    params = params.append('name', name );

    this.http.get(this.urlDrug + '/getAllWithSameName', { params: params }).subscribe(
      ( data: Drug[] ) => {
        this.drugsInPharmacy.next(data);
      },
      (error: HttpResponseBase) => {

      });
    return this.drugsInPharmacy.asObservable();
  }


}
