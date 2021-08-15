import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  sideNavToggled = false;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.sideNavToggled.subscribe(
      (bool) => (this.sideNavToggled = bool)
    );
  }

  toggleSideNav(): void {
    this.commonService.toggleSideNav();
  }
}
