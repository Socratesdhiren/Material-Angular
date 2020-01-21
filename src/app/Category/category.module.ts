import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {MainNavModule} from '../Layout/main-nav/main-nav.module';
import {AngularMaterialModule} from '../angular-material.module';
import {AuthInterceptors} from '../helpers/authInterceptor';
import {AuthGuardService} from '../helpers/auth-guard.service';

import { AddCategoryFormComponent } from './add-category-form/add-category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { EditCategoryFormComponent } from './edit-category-form/edit-category-form.component';

import {CategoryRoutingModule} from './category-routing.module';


@NgModule({
  declarations: [
    AddCategoryFormComponent,
    CategoryListComponent,
    EditCategoryFormComponent
],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        MainNavModule,
        CategoryRoutingModule,
        AngularMaterialModule,
        FormsModule,
    ],
  providers: [AuthGuardService,
    {
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptors, multi: true
  }]
})
export class CategoryModule { }
