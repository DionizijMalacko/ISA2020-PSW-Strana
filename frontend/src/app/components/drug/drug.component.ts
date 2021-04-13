import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Drug} from '../../models/Drug';
import {MatTableDataSource} from '@angular/material/table';
import {environment} from '../../../environments/environment';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {FormBuilder} from '@angular/forms';
import {DrugService} from '../../services/drug.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

class DrugInPharmacyComponent {
}

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css']
})
export class DrugComponent implements OnInit {

  drugsDataSource: Drug[] = [];
  displayedColumns: string[] = [ 'name', 'code'];
  searchString: string;
  searchName: string = '';
  numberOfItems: number;
  itemsPerPage = environment.itemsPerPage;


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(    private fb: FormBuilder,
                  private drugService: DrugService,
                  public router: Router) { }

  ngOnInit(): void {

    this.drugService.getAllDrugs().subscribe(
      (data: Drug[]) => {
          this.drugsDataSource = data;
      });
  }

  getAllWithSameName() {
    this.drugService.getAllWithSameName(this.searchName).subscribe(
      (data: Drug[]) => {
        this.drugsDataSource = data;
      }
    );
  }

  applyFilter(event: Event) {
    this.searchName = (event.target as HTMLInputElement).value;
  }

  addDrug() {
    this.router.navigate(['/add-drug']);
  }
}
