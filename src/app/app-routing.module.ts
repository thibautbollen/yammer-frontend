import { ProfileManageComponent } from './modules/profile/profile-manage/profile-manage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/modules/auth/login/login.component';
import { RegisterComponent } from 'src/app/modules/auth/register/register.component';
import { GroupOverviewComponent } from 'src/app/modules/group/group-overview/group-overview.component';
import { ProfileDetailsComponent } from 'src/app/modules/profile/profile-details/profile-details.component';
import { AppTemplateComponent } from 'src/app/core/components/app-template/app-template.component';
import { AuthTemplateComponent } from 'src/app/core/components/auth-template/auth-template.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: '',
    component: AppTemplateComponent,
    children: [
      {
        path: 'profile',
        children: [
          { path: 'details', component: ProfileDetailsComponent },
          { path: 'manage', component: ProfileManageComponent },
          {
            path: '**',
            pathMatch: 'full',
            redirectTo: 'details',
          },
        ],
      },
    ],
  },
  {
    path: 'auth',
    component: AuthTemplateComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'login',
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
