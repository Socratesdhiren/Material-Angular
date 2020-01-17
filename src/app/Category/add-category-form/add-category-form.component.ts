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
  categoryForm: FormGroup;
  loading: boolean;
  submitted = false;
  returnUrl: string;
  errorMessage: string;
  isError: boolean;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private category: CategoryService) {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/category';
  }

  ngOnInit() {
    // this.getCategorylist();
    this.createForm();
  }

  createForm() {
    this.categoryForm = this.formBuilder.group({
      title: ['', Validators.required],
      enable: [''],
    });
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.categoryForm.invalid) {
      return;
    }
    console.log('here ia ma', this.categoryForm.invalid);

    this.loading = true;
    const formValues = this.categoryForm.value;
    console.log('formVA', JSON.stringify(formValues));
    this.category.addCategory(formValues.title, formValues.enable).subscribe((response: any) => {
      console.log(response, 'response');
      // console.log('this.returnUrl', this.returnUrl);
      this.router.navigateByUrl(this.returnUrl).then(() => location.reload());
    }, (error: any) => {
      console.log('eroror', error.error.message);
      this.errorMessage = error.error.message;
      this.isError = true;
      console.log('isError', this.isError);
    });
  }
}
