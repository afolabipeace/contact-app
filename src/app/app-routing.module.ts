import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { ContactAppComponent } from './contact-app/contact-app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ContactGuard } from './guards/contact.guard';
import { HomeComponent } from './home/home.component';
import { MaterialComponent } from './material/material.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParentComponent } from './parent/parent.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'signup', component:SignupComponent},
  {path: '', component:SidenavComponent, children:[
    {path: "dashboard", component:DashboardComponent},
    {path: 'api', component:ApiComponent},
    {path: "dashboard", component:DashboardComponent},
  {path: 'api/:name', component:UserProfileComponent },
  {path: 'contact', children:[
    {path:'', component: ContactAppComponent},
    {path:'contact/:id',component:ViewComponent}
  ], canActivate:[ContactGuard]},
  // {path: 'contacts', component: ContactListComponent},
  {path: 'material', component: MaterialComponent},
  {path: 'forms', component:FormsComponent},
  {path: 'parent', component:ParentComponent},
  ]},
  
  {path: '**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
