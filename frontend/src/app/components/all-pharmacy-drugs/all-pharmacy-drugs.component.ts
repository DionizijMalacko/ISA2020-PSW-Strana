import {Component, OnInit, ViewChild} from '@angular/core';
import {Pharmacy} from '../../models/Pharmacy';
import {environment} from '../../../environments/environment';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {FormBuilder} from '@angular/forms';
import {PharmacyService} from '../../services/pharmacy.service';
import {Router} from '@angular/router';
import {PharmacyDrugs} from '../../models/PharmacyDrugs';

@Component({
  selector: 'app-all-pharmacy-drugs',
  templateUrl: './all-pharmacy-drugs.component.html',
  styleUrls: ['./all-pharmacy-drugs.component.css']
})
export class AllPharmacyDrugsComponent implements OnInit {

  drugsDataSource: PharmacyDrugs[] = [];
  displayedColumns: string[] = [ 'pharmacyName', 'drugName', 'drugCode', 'quantity'];
  searchString: string;
  searchName: string = '';
  numberOfItems: number;
  itemsPerPage = environment.itemsPerPage;


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(    private fb: FormBuilder,
                  private pharmacyService: PharmacyService,
                  public router: Router) { }

  ngOnInit(): void {

    this.pharmacyService.getAllPharmacyDrugs().subscribe(
      (data: PharmacyDrugs[]) => {
        this.drugsDataSource = data;
      });
  }

  applyFilter(event: Event) {
    this.searchName = (event.target as HTMLInputElement).value;
  }

  addPharmacy() {
    this.router.navigate(['/add-pharmacy']);
  }

  getAllWithSameName() {
    this.pharmacyService.getAllWithSameDrugName(this.searchName).subscribe(
      (data: PharmacyDrugs[]) => {
        this.drugsDataSource = data;
      }
    );
  }

}
