import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContentComponent } from './components/content/content.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppTemplateComponent } from 'src/app/core/components/app-template/app-template.component';
import { AuthTemplateComponent } from 'src/app/core/components/auth-template/auth-template.component';

@NgModule({
  declarations: [
    SidenavComponent,
    ContentComponent,
    TopnavComponent,
    NavigationComponent,
    AppTemplateComponent,
    AuthTemplateComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [NavigationComponent, AppTemplateComponent, AuthTemplateComponent],
})
export class CoreModule {}
