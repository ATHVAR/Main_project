import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/landingpage/navbar.component';
import { ViewuserComponent } from './pages/users/viewuser/viewuser.component';
import { AdduserComponent } from './pages/users/adduser/adduser.component';
import { ViewstudentsComponent } from './pages/students/viewstudents/viewstudents.component';
import { AddstudentsComponent } from './pages/students/addstudents/addstudents.component';
import { ErrorComponent } from './pages/error/error.component';
import { ChangepassComponent } from './pages/changepass/changepass.component';
import { EdituserComponent } from './pages/users/edituser/edituser.component';
import { EditstudentComponent } from './pages/students/editstudent/editstudent.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: '',component:NavbarComponent},
  {path:'home',component:HomeComponent},
  {path:'viewuser',component:ViewuserComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'edituser',component:EdituserComponent},
  {path:'viewstuds',component:ViewstudentsComponent},
  {path:'addstuds',component:AddstudentsComponent},
  {path:'editstuds',component:EditstudentComponent},
  {path:'passchange',component:ChangepassComponent},
  {path:'**',component:ErrorComponent}
  // Other routes for your application
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
