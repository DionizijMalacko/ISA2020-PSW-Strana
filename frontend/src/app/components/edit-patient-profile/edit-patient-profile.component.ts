import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Patient} from 'src/app/models/Patient';
import {PatientService} from '../../services/patient.service';
import {PatientInfo} from '../../models/PatientInfo';

@Component({
  selector: 'app-edit-patient-profile',
  templateUrl: './edit-patient-profile.component.html',
  styleUrls: ['./edit-patient-profile.component.css']
})
export class EditPatientProfileComponent implements OnInit {

  PatientForm: FormGroup;
  loggedPatient: PatientInfo = new PatientInfo(-1, '', '', '', '');

  constructor(private formBuilder: FormBuilder,
              private patientService: PatientService,
              private userService: UserService ) { }

  ngOnInit(): void {
    console.log(this.loggedPatient.username);
    this.PatientForm = this.formBuilder.group({
      username: new FormControl(null, [Validators.required, Validators.maxLength(30)]),
      //password: new FormControl(null, [Validators.required, Validators.maxLength(30)]),
      firstName: new FormControl(null, [Validators.required, Validators.maxLength(30)]),
      lastName: new FormControl(null, [Validators.required, Validators.maxLength(30)])
    });

    this.patientService.get(this.userService.getLoggedInUser().id).subscribe(
      (responseData: PatientInfo) => {
        this.loggedPatient = responseData;
        this.PatientForm.patchValue(
          {
            username: this.loggedPatient.username,
            firstName: this.loggedPatient.firstName,
            lastName: this.loggedPatient.lastName,
          }
        );
      },
      () => {
        this.userService.logout();
      }
    );
  }

  saveChanges() {
    if (this.PatientForm.invalid) {
      return;
    }

    const patient = new Patient(this.loggedPatient.id,
      this.loggedPatient.username,
      this.PatientForm.value.firstName,
      this.PatientForm.value.lastName,
    );

  }

}
