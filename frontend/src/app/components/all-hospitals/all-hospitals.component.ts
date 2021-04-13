import {Component, OnInit, ViewChild} from '@angular/core';
import {Drug} from '../../models/Drug';
import {environment} from '../../../environments/environment';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {FormBuilder} from '@angular/forms';
import {DrugService} from '../../services/drug.service';
import {Hospital} from '../../models/hospital';
import {HospitalService} from '../../services/hospital-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-hospitals',
  templateUrl: './all-hospitals.component.html',
  styleUrls: ['./all-hospitals.component.css']
})
export class AllHospitalsComponent implements OnInit {

  drugsDataSource: Hospital[] = [];
  displayedColumns: string[] = [ 'name', 'city', 'address'];
  searchString: string;
  searchName: string = '';
  numberOfItems: number;
  itemsPerPage = environment.itemsPerPage;


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(    private fb: FormBuilder,
                  private hospitalService: HospitalService,
                  public router: Router) { }

  ngOnInit(): void {

    this.hospitalService.getAllHospitals().subscribe(
      (data: Hospital[]) => {
        this.drugsDataSource = data;
      });
  }

  getAllWithSameName() {
    this.hospitalService.getAllWithSameName(this.searchName).subscribe(
      (data: Hospital[]) => {
        this.drugsDataSource = data;
      }
    );
  }

  applyFilter(event: Event) {
    this.searchName = (event.target as HTMLInputElement).value;
  }

  addHospital() {
    this.router.navigate(['/add-hospital']);
  }

}
