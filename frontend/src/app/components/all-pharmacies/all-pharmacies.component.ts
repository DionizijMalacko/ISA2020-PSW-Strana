import {Component, OnInit, ViewChild} from '@angular/core';
import {Hospital} from '../../models/hospital';
import {environment} from '../../../environments/environment';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {FormBuilder} from '@angular/forms';
import {HospitalService} from '../../services/hospital-service.service';
import {Router} from '@angular/router';
import {Pharmacy} from '../../models/Pharmacy';
import {PharmacyService} from '../../services/pharmacy.service';

@Component({
  selector: 'app-all-pharmacies',
  templateUrl: './all-pharmacies.component.html',
  styleUrls: ['./all-pharmacies.component.css']
})
export class AllPharmaciesComponent implements OnInit {

  drugsDataSource: Pharmacy[] = [];
  displayedColumns: string[] = [ 'name', 'address', 'dodaj'];
  searchString: string;
  searchName: string = '';
  numberOfItems: number;
  itemsPerPage = environment.itemsPerPage;
  pharmacyId: number;


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(    private fb: FormBuilder,
                  private pharmacyService: PharmacyService,
                  public router: Router) { }

  ngOnInit(): void {

    this.pharmacyService.getAllPharmacies().subscribe(
      (data: Pharmacy[]) => {
        this.drugsDataSource = data;
      });
  }

  getAllWithSameName() {
    this.pharmacyService.getAllWithSameName(this.searchName).subscribe(
      (data: Pharmacy[]) => {
        this.drugsDataSource = data;
      }
    );
  }

  applyFilter(event: Event) {
    this.searchName = (event.target as HTMLInputElement).value;
  }

  addPharmacy() {
    this.router.navigate(['/add-pharmacy']);
  }

  addDrugInPharmacy(pharmacyId: number) {
    this.pharmacyService.setPharmacyId(pharmacyId);
    this.router.navigate(['/add-drug']);
  }

}
