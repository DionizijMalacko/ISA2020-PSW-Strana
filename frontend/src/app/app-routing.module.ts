import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHospitalComponent } from './components/add-hospital/add-hospital.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import {DrugComponent} from './components/drug/drug.component';
import {AllHospitalsComponent} from './components/all-hospitals/all-hospitals.component';
import {EditPatientProfileComponent} from './components/edit-patient-profile/edit-patient-profile.component';
import {AllPharmaciesComponent} from './components/all-pharmacies/all-pharmacies.component';
import {AddPharmacyComponent} from './components/add-pharmacy/add-pharmacy.component';
import {AllPharmacyDrugsComponent} from './components/all-pharmacy-drugs/all-pharmacy-drugs.component';
import {AddDrugComponent} from './components/add-drug/add-drug.component';
import {CreateTenderOfferComponent} from './components/create-tender-offer/create-tender-offer.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'all-hospitals',
    component: AllHospitalsComponent,
    pathMatch: 'full'
  },

  {
    path: 'add-hospital',
    component: AddHospitalComponent,
    pathMatch: 'full'
  },

  {
    path: 'patient',
    component: PatientProfileComponent,
    pathMatch: 'full'
  },

  {
    path: 'patient/all-drugs',
    component: DrugComponent,
    pathMatch: 'full'
  },

  {
    path: 'patient/edit-patient-profile',
    component: EditPatientProfileComponent,
    pathMatch: 'full'
  },

  {
    path: 'all-pharmacies',
    component: AllPharmaciesComponent,
    pathMatch: 'full'
  },

  {
    path: 'add-pharmacy',
    component: AddPharmacyComponent,
    pathMatch: 'full'
  },

  {
    path: 'all-pharmacy-drugs',
    component: AllPharmacyDrugsComponent,
    pathMatch: 'full'
  },

  {
    path: 'add-drug',
    component: AddDrugComponent,
    pathMatch: 'full'
  },

  {
    path: 'create-tender-offer',
    component: CreateTenderOfferComponent,
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
