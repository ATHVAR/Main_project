import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './components/sidenav/home.component';
import { NavbarComponent } from './pages/landingpage/navbar.component';
import { ViewuserComponent } from './pages/users/viewuser/viewuser.component';
import { AdduserComponent } from './pages/users/adduser/adduser.component';
import { ViewstudentsComponent } from './pages/students/viewstudents/viewstudents.component';
import { AddstudentsComponent } from './pages/students/addstudents/addstudents.component';
import { ErrorComponent } from './pages/error/error.component';
import { EditUserComponent } from './pages/users/edituser/edituser.component';
import { EditstudentComponent } from './pages/students/editstudent/editstudent.component';
import { CsvComponent } from './pages/csv/csv.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomedataComponent } from './pages/homedata/homedata.component';
import { EditbyplacerComponent } from './pages/students/editbyplacer/editbyplacer.component';
import { AddnotificationComponent } from './pages/addnotification/addnotification.component';

const routes: Routes = [

  { path: '', component: NavbarComponent },
  { path: 'login', component: LoginComponent },

  { path: 'home', component: HomeComponent, 
  children:[
    { path: '', redirectTo: 'homecomp', pathMatch: 'full' },
    { path: 'homecomp', component: HomedataComponent },
    { path: 'viewuser', component: ViewuserComponent },
    { path: 'adduser', component: AdduserComponent },
    { path: 'edituser/:id', component: EditUserComponent },
    { path: 'viewstuds', component: ViewstudentsComponent },
    { path: 'addstuds', component: AddstudentsComponent },
    { path: 'editbypo/:id', component: EditbyplacerComponent },
    { path: 'editstuds/:id', component: EditstudentComponent }, 
    { path: 'csv', component: CsvComponent },
    { path: 'passchange',component:AddnotificationComponent},
  ] },

  { path: 'footer',component:FooterComponent},
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
