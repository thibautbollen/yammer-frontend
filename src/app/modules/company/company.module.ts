import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyManageComponent } from './company-manage/company-manage.component';



@NgModule({
  declarations: [
    CompanyDetailsComponent,
    CompanyCreateComponent,
    CompanyManageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompanyModule { }
