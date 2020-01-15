import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {AdminAuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private auth: AdminAuthenticationService,
  ) {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/dashboard';
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      user_name: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });
    // get return url form route parameters or detail to '/'
    // this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    const formValues = this.loginForm.value;
    console.log('formVA', JSON.stringify(formValues));
    this.auth.login(formValues.user_name, formValues.password).subscribe((response: any) => {
      console.log(response, 'response');
      localStorage.setItem('user', JSON.stringify(response.data));
      console.log('this.returnUrl', this.returnUrl);
      this.router.navigateByUrl(this.returnUrl).then(() => location.reload());
    }, (error: any) => {
      console.log('eroror', error);
    });
  }

}
