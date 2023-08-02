import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/landingpage/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { LoginService } from './shared/link.service';
import { LoginFormVisibilityService } from './shared/login-form-visiblity.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewuserComponent } from './pages/users/viewuser/viewuser.component';
import { AdduserComponent } from './pages/users/adduser/adduser.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { AddstudentsComponent } from './pages/students/addstudents/addstudents.component';
import { ViewstudentsComponent } from './pages/students/viewstudents/viewstudents.component';
import { ErrorComponent } from './pages/error/error.component';
import { ChangepassComponent } from './pages/changepass/changepass.component';
import { EditUserComponent } from './pages/users/edituser/edituser.component';
import { EditstudentComponent } from './pages/students/editstudent/editstudent.component';
import { CsvComponent } from './pages/csv/csv.component';
import { StudentdataService } from './shared/studentdata.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserdataService } from './userdata.service';
import { FooterComponent } from './pages/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ViewuserComponent,
    AdduserComponent,
    NavigationComponent,
    AddstudentsComponent,
    ViewstudentsComponent,
    ErrorComponent,
    ChangepassComponent,
    EditUserComponent,
    EditstudentComponent,
    CsvComponent,
    FooterComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [LoginService,LoginFormVisibilityService,StudentdataService, UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
