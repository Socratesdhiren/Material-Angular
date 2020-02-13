import {NgModule} from '@angular/core';
import {MainNavComponent} from './main-nav.component';
import {AppFooterComponent} from '../app-footer/app-footer.component';
import {AngularMaterialModule} from '../../angular-material.module';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    MainNavComponent,
    AppFooterComponent,
  ],
    imports: [
        AngularMaterialModule,
        RouterModule,
        CommonModule
    ],
  exports: [
    MainNavComponent,
    AppFooterComponent
  ],
  providers: []
})
export class MainNavModule {
}
