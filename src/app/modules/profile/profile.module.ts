import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileManageComponent } from './profile-manage/profile-manage.component';



@NgModule({
  declarations: [
    ProfileDetailsComponent,
    ProfileManageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
