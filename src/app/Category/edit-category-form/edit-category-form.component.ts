import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-edit-category-form',
  templateUrl: './edit-category-form.component.html',
  styleUrls: ['./edit-category-form.component.css']
})
export class EditCategoryFormComponent implements OnInit {
  categoryForm: FormGroup;
  loading: boolean;
  submitted = false;
  categories = {};
  returnUrl: string;
  errorMessage: string;
  isError: boolean;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private router: Router,
    private category: CategoryService,
  ) {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/category';
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.getCategoryByIdentifier(this.id);
    this.createForm();
  }
  createForm() {
    this.categoryForm = this.formBuilder.group({
      title: ['', Validators.required],
      enable: [''],
    });
  }

  getCategoryByIdentifier(id) {
    this.category.getCategoryByIdentifier(id).subscribe((response: any) => {
        console.log('category response', response);
        this.categories = response.data;
      },
      (error: any) => {
        console.log(error, 'error');
        this.errorMessage = error.error.message;
        this.isError = true;
      });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.categoryForm.invalid) {
      return;
    }

    this.loading = true;
    const formValues = this.categoryForm.value;
    this.category.editCategory(formValues.title, formValues.enable, this.id).subscribe((response: any) => {
      console.log(response, 'response');

      this.router.navigateByUrl(this.returnUrl).then(() => location.reload());
    }, (error: any) => {
      console.log('eroror', error.error.message);
      this.errorMessage = error.error.message;
      this.isError = true;
    });
  }
}
