import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupOverviewComponent } from './group-overview/group-overview.component';
import { GroupManageComponent } from './group-manage/group-manage.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { GroupCreateComponent } from './group-create/group-create.component';

@NgModule({
  declarations: [
    GroupOverviewComponent,
    GroupManageComponent,
    GroupDetailsComponent,
    GroupCreateComponent,
  ],
  imports: [CommonModule],
  entryComponents: [
    GroupOverviewComponent,
    GroupManageComponent,
    GroupDetailsComponent,
    GroupCreateComponent,
  ],
})
export class GroupModule {}
