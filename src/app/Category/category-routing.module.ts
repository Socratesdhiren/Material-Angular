import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddCategoryFormComponent} from './add-category-form/add-category-form.component';
import {AuthGuardService} from '../helpers/auth-guard.service';

const dashboardRoute: Routes = [
  {
    path: '',  component: AddCategoryFormComponent, canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoute)],
  exports: [RouterModule]
})

export class CategoryRoutingModule {
}
