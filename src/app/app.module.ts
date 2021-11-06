import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './_guards/index';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginService } from './services/login.service';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ProfessorProfileComponent } from './professor-profile/professor-profile.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { ProfessorDashboardComponent } from './professor-dashboard/professor-dashboard.component';
import { ListOfPatientComponent } from './list-of-patient/list-of-patient.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdminDashboardComponent,
    ForgotPasswordComponent,
    TermsandconditionsComponent,
    ChangepasswordComponent,
    AdminProfileComponent,
    ProfessorProfileComponent,
    StudentProfileComponent,
    RegistrationComponent,
    StudentDashboardComponent,
    StudentListComponent,
    ProfessorListComponent,
    RegisterPatientComponent,
    ProfessorDashboardComponent,
    ListOfPatientComponent,
    AboutSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule, 
    FormsModule
  ],
  providers: [
    AuthGuard,
    LoginService
  ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
