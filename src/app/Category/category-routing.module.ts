import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddCategoryFormComponent} from './add-category-form/add-category-form.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {AuthGuardService} from '../helpers/auth-guard.service';

const categoryRoute: Routes = [
  {  path: '',  component: CategoryListComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'add', component: AddCategoryFormComponent, canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(categoryRoute)],
  exports: [RouterModule]
})

export class CategoryRoutingModule {
}
