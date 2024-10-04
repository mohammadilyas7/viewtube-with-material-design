import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LiveGuard } from './live.guard';
import { LiveComponent } from './live/live.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudioComponent } from './studio/studio.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'studio', component: StudioComponent,canActivate:[AuthGuard],
    children: [
      { path: 'upload', component: UploadComponent },
      { path: 'live', component: LiveComponent},
      // { path: '', redirectTo: 'upload', pathMatch: 'prefix' }
    ]},
    
  {path: 'account', component: AccountComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {path:'',redirectTo:'register',pathMatch:'prefix'}
    ]},

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
