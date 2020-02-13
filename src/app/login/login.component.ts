import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

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
  errorMessage: string;
  isError: boolean;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private auth: AuthenticationService,
  ) {
    this.returnUrl = '/dashboard';
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
      localStorage.setItem('user', JSON.stringify(response.data));
      console.log('this.returnUrl', this.returnUrl);
      this.router.navigateByUrl(this.returnUrl);
    }, (error: any) => {
      this.errorMessage = error.error.message || 'Server issue';
      this.isError = true;
      console.log('eroror', error);
    });
  }

}
