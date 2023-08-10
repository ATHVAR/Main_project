import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './components/sidenav/home.component';
import { NavbarComponent } from './pages/landingpage/navbar.component';

import { ViewuserComponent } from './pages/users/viewuser/viewuser.component';
import { AdduserComponent } from './pages/users/adduser/adduser.component';
import { EditUserComponent } from './pages/users/edituser/edituser.component';

import { ViewstudentsComponent } from './pages/students/viewstudents/viewstudents.component';
import { AddstudentsComponent } from './pages/students/addstudents/addstudents.component';
import { EditstudentComponent } from './pages/students/editstudent/editstudent.component';
import { EditbyplacerComponent } from './pages/students/editbyplacer/editbyplacer.component';

import { AddnotificationComponent } from './pages/addnotification/addnotification.component';
import { HomedataComponent } from './pages/homedata/homedata.component';
import { CsvComponent } from './pages/csv/csv.component';

import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './pages/error/error.component';


const routes: Routes = [

  { path: '', component: NavbarComponent }, //all
  { path: 'login', component: LoginComponent }, //all

  { path: 'home', component: HomeComponent, //all
  children:[
    { path: '', redirectTo: 'homecomp', pathMatch: 'full' }, //all
    { path: 'homecomp', component: HomedataComponent }, //all
    { path: 'viewuser', component: ViewuserComponent }, //admin
    { path: 'adduser', component: AdduserComponent }, //admin
    { path: 'edituser/:id', component: EditUserComponent }, //admin
    { path: 'viewstuds', component: ViewstudentsComponent }, //admin+head+placer
    { path: 'addstuds', component: AddstudentsComponent }, //admin+head
    { path: 'editbypo/:id', component: EditbyplacerComponent }, //placer
    { path: 'editstuds/:id', component: EditstudentComponent }, //admin+head
    { path: 'csv', component: CsvComponent }, //admin+head
    { path: 'passchange',component:AddnotificationComponent}, //admin
  ] },

  { path: 'footer',component:FooterComponent}, //all
  { path: '**', component: ErrorComponent }, //all

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}