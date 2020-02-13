import {ChangeDetectorRef, Component, OnDestroy, ViewChild} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})

export class MainNavComponent  implements OnDestroy {
  mobileQuery: MediaQueryList;
  isExpanded = true;
  opened = true;
  events: string[] = [];
  showSubmenu = false;
  isShowing = false;
  user = JSON.parse(localStorage.getItem('user'));
  // showSubSubMenu = false;
  // tslint:disable-next-line:variable-name
  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    console.log('mb query', this.mobileQuery);
    console.log('usaerss', this.user);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  logOut() {
   localStorage.clear();
   window.location.reload();
  }

}
