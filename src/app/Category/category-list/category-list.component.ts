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
  displayedColumns: string[] = ['title', 'enable' , 'action'];
  categoryLists: CategoryList[];
  errorMessage: string;
  isError: boolean;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private category: CategoryService) {
  }

  ngOnInit() {
    this.getCategorylist();
  }

  getCategorylist() {
    this.category.getCategorylist().subscribe((response: any) => {
        console.log('category response', response);

        this.categoryLists = response.data;
      },
      (error: any) => {
        console.log(error, 'error');
        this.errorMessage = error.error.message;
        this.isError = true;
      });
  }
}

export interface CategoryList {
  id: string;
  title: string;
  enable: boolean;
}

