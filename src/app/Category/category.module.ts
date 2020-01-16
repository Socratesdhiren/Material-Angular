import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AddCategoryFormComponent } from './add-category-form/add-category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { EditCategoryFormComponent } from './edit-category-form/edit-category-form.component';
import {MainNavModule} from '../Layout/main-nav/main-nav.module';
import {CategoryRoutingModule} from './category-routing.module';
import {AngularMaterialModule} from '../angular-material.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptors} from '../helpers/authInterceptor';
import {AuthGuardService} from '../helpers/auth-guard.service';

@NgModule({
  declarations: [
    AddCategoryFormComponent,
    CategoryListComponent,
    EditCategoryFormComponent
],
  imports: [
    ReactiveFormsModule,
    MainNavModule,
    CategoryRoutingModule,
    AngularMaterialModule,
  ],
  providers: [AuthGuardService,
    {
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptors, multi: true
  }]
})
export class CategoryModule { }
