import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AppHeaderComponent } from './Layout/app-header/app-header.component';
import { UserBoxComponent } from './Layout/user-box/user-box.component';
import { AngularMaterialModule } from './angular-material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { MainNavModule } from './Layout/main-nav/main-nav.module';
import {AuthGuardService} from './helpers/auth-guard.service';
import {AuthInterceptors} from './helpers/authInterceptor';
import { CategoryModule } from './Category/category.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppHeaderComponent,
    UserBoxComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    DashboardModule,
    MainNavModule,
    CategoryModule,
  ],
  providers: [AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptors, multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
