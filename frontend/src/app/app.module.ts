import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddHospitalComponent } from './components/add-hospital/add-hospital.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { PharmacyAdminProfileComponent } from './components/pharmacy-admin-profile/pharmacy-admin-profile.component';
import { SystemAdminProfileComponent } from './components/system-admin-profile/system-admin-profile.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatNativeDateModule} from '@angular/material/core';
import {RatingModule} from 'ng-starrating';
import {ChartsModule} from 'ng2-charts';
import { DrugComponent } from './components/drug/drug.component';
import {MatPaginatorModule} from '@angular/material/paginator';
//import {MatDialogModule} from '@angular/material/dialog';
import {MatDialogModule, MatDialog, MatDialogRef} from '@angular/material/dialog';
//import { JwtInterceptor } from './interceptors/jwt.interceptor';
//import { ErrorInterceptor } from './interceptors/error.interceptor';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { AllHospitalsComponent } from './components/all-hospitals/all-hospitals.component';
import {EditPatientProfileComponent} from './components/edit-patient-profile/edit-patient-profile.component';
import { AllPharmaciesComponent } from './components/all-pharmacies/all-pharmacies.component';
import { AddPharmacyComponent } from './components/add-pharmacy/add-pharmacy.component';
import { AllPharmacyDrugsComponent } from './components/all-pharmacy-drugs/all-pharmacy-drugs.component';
import { AddDrugComponent } from './components/add-drug/add-drug.component';
import { CreateTenderOfferComponent } from './components/create-tender-offer/create-tender-offer.component';



@NgModule({
  declarations: [
    AppComponent,
    AddHospitalComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PatientProfileComponent,
    PharmacyAdminProfileComponent,
    SystemAdminProfileComponent,
    DrugComponent,
    AllHospitalsComponent,
    EditPatientProfileComponent,
    AllPharmaciesComponent,
    AddPharmacyComponent,
    AllPharmacyDrugsComponent,
    AddDrugComponent,
    CreateTenderOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    LayoutModule,
    MatNativeDateModule,
    RatingModule,
    ChartsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule


  ],
  providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    {
      provide: MatDialogRef,
      useValue: {}
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = "ISA-PSW-strana 2020 app";
 }
