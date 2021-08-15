import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private valueSideNiveToggled = new BehaviorSubject<boolean>(false);
  sideNavToggled = this.valueSideNiveToggled.asObservable();

  constructor() {}

  toggleSideNav() {
    this.valueSideNiveToggled.next(!this.valueSideNiveToggled.value);
  }
}
