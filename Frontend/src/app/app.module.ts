import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/landingpage/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
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
import { EdituserComponent } from './pages/users/edituser/edituser.component';
import { EditstudentComponent } from './pages/students/editstudent/editstudent.component';
import { CsvComponent } from './pages/csv/csv.component';
import { StudentdataService } from './shared/studentdata.service';

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
    EdituserComponent,
    EditstudentComponent,
    CsvComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService,LoginFormVisibilityService,StudentdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
