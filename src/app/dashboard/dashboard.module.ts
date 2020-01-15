import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

import {MainNavModule} from '../Layout/main-nav/main-nav.module';
import {AngularMaterialModule} from '../angular-material.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MainNavModule,
    DashboardRoutingModule,
    AngularMaterialModule
  ],
  providers: []
})
export class DashboardModule { }
