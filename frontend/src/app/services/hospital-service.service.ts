import {HttpClient, HttpParams, HttpResponseBase} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Hospital } from '../models/hospital';
import {BehaviorSubject, Observable} from 'rxjs';
import {Drug} from '../models/Drug';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  url = environment.baseUrl;
  urlHospital = environment.baseUrl + '/api/auth/hospital';
  _createNewHospital = this.url + environment.createNewHospital;
  _getAllHospitals = this.url + environment.getAllHospitals;
  _getOneHospital = this.url + environment.getOneHospital;

  hospitals: BehaviorSubject<Hospital[]> = new BehaviorSubject<Hospital[]>([]);

  constructor(private http: HttpClient, private router: Router) { }

  public createNewHospital(hospital: Hospital) {
    return this.http.post(this._createNewHospital, hospital);
  }

  public getAllHospitals(): Observable<Hospital[]> {
    this.http.get(this.urlHospital + '/getAll').subscribe(
      ( data: Hospital[] ) => {
        this.hospitals.next(data);
      },
      (error: HttpResponseBase) => {

      });
    return this.hospitals.asObservable();
  }

  public getAllWithSameName(name: string): Observable<Hospital[]> {
    let params = new HttpParams();
    params = params.append('name', name );

    this.http.get(this.urlHospital + '/getAllWithSameName', { params: params }).subscribe(
      ( data: Hospital[] ) => {
        this.hospitals.next(data);
      },
      (error: HttpResponseBase) => {

      });
    return this.hospitals.asObservable();
  }

}
