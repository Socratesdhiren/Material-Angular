import {NgModule} from '@angular/core';
import {MainNavComponent} from './main-nav.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularMaterialModule} from '../../angular-material.module';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    MainNavComponent,
  ],
    imports: [
        AngularMaterialModule,
        RouterModule,
        CommonModule
    ],
  exports: [
    MainNavComponent
  ],
  providers: []
})
export class MainNavModule {
}
