import { NgModule } from '@angular/core';
import { AddCategoryFormComponent } from './add-category-form/add-category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { EditCategoryFormComponent } from './edit-category-form/edit-category-form.component';
import {CategoryRoutingModule} from './category-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

import {MainNavModule} from '../Layout/main-nav/main-nav.module';
import {AngularMaterialModule} from '../angular-material.module';

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
    AngularMaterialModule  ],
  providers: []
})
export class CategoryModule { }
