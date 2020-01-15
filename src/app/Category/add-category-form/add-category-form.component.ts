import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.css']
})
export class AddCategoryFormComponent implements OnInit {
  categoryAddForm: FormGroup;
  loading: boolean;
  submitted = false;
  returnUrl: string;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private category: CategoryService) {
    // {
    //   this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/category';
    // }
  }

  ngOnInit() {
    this.getCategorylist();
    this.createForm();
  }

  createForm() {
    this.categoryAddForm = this.formBuilder.group({
      title: ['', Validators.required],
      enable: [''],
    });
    // get return url form route parameters or detail to '/'
    // this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.categoryAddForm.invalid) {
      return;
    }
    console.log('here ia ma', this.categoryAddForm.invalid);

    this.loading = true;
    const formValues = this.categoryAddForm.value;
    console.log('formVA', JSON.stringify(formValues));
    this.category.addCategory(formValues.title, formValues.enable).subscribe((response: any) => {
      console.log(response, 'response');
      console.log('this.returnUrl', this.returnUrl);
      // this.router.navigateByUrl(this.returnUrl).then(() => location.reload());
    }, (error: any) => {
      console.log('eroror', error);
    });
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
