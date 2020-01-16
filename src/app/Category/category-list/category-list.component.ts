import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material';
import {CategoryService} from '../../services/category.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'title', 'weight', 'enable'];
  dataSource = new MatTableDataSource<CategoryList>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private category: CategoryService) { }

  ngOnInit() {
    this.getCategorylist();
    this.dataSource.paginator = this.paginator;
  }

  getCategorylist() {
    this.category.getCategorylist().subscribe((response) => {
        console.log(response, 'get ist res');
      },
      (error: any) => {
        console.log(error, 'error');
      });
  }
}

export interface CategoryList {
  title: string;
  position: number;
  weight: number;
  enable: string;
}

const ELEMENT_DATA: CategoryList[] = [
  {position: 1, title: 'Hydrogen', weight: 1.0079, enable: 'H'},
  {position: 2, title: 'Helium', weight: 4.0026, enable: 'He'},
  {position: 3, title: 'Lithium', weight: 6.941, enable: 'Li'},
  {position: 4, title: 'Beryllium', weight: 9.0122, enable: 'Be'},
  {position: 5, title: 'Boron', weight: 10.811, enable: 'B'},
  {position: 6, title: 'Carbon', weight: 12.0107, enable: 'C'},
  {position: 7, title: 'Nitrogen', weight: 14.0067, enable: 'N'},
  {position: 8, title: 'Oxygen', weight: 15.9994, enable: 'O'},
  {position: 9, title: 'Fluorine', weight: 18.9984, enable: 'F'},
  {position: 10, title: 'Neon', weight: 20.1797, enable: 'Ne'},
  {position: 11, title: 'Sodium', weight: 22.9897, enable: 'Na'},
  {position: 12, title: 'Magnesium', weight: 24.305, enable: 'Mg'},
  {position: 13, title: 'Aluminum', weight: 26.9815, enable: 'Al'},
  {position: 14, title: 'Silicon', weight: 28.0855, enable: 'Si'},
  {position: 15, title: 'Phosphorus', weight: 30.9738, enable: 'P'},
  {position: 16, title: 'Sulfur', weight: 32.065, enable: 'S'},
  {position: 17, title: 'Chlorine', weight: 35.453, enable: 'Cl'},
  {position: 18, title: 'Argon', weight: 39.948, enable: 'Ar'},
  {position: 19, title: 'Potassium', weight: 39.0983, enable: 'K'},
  {position: 20, title: 'Calcium', weight: 40.078, enable: 'Ca'},
];
