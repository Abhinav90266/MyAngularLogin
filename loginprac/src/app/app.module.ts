import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './compoents/signup/signup.component';
import { LoginComponent } from './compoents/login/login.component';
import { DashboardComponent } from './compoents/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AddComponent } from './compoents/add/add.component';
import { EmployeeServicesService } from './services/employee-services.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './pipes/filter.pipe';
import { SortingPipe } from './pipes/sorting.pipe';
import { SalaryDetailsComponent } from './compoents/salary-details/salary-details.component';
import { authInterceptor } from './auth.interceptor';
// import { authInterceptor } from './auth.interceptor';
// import { Interceptor } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddComponent,
    DashboardComponent,
    FilterPipe,
    SortingPipe,
    SalaryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [ 
    provideClientHydration(),EmployeeServicesService,
    // provideHttpClient(withInterceptors([authInterceptor,]))
    {provide: HTTP_INTERCEPTORS, useClass:authInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
