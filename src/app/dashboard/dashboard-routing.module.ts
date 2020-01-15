import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {AuthGuardService} from '../helpers/auth-guard.service';

const dashboardRoute: Routes = [
  {
    path: '',  component: DashboardComponent, canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoute)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {
}
