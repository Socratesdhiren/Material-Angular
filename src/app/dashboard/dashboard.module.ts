import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

import {MainNavModule} from '../Layout/main-nav/main-nav.module';
import {MatTableModule} from '@angular/material';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MainNavModule,
    DashboardRoutingModule,
    MatTableModule
  ],
  providers: []
})
export class DashboardModule { }
