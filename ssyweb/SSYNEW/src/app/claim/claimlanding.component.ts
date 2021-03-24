import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

declare var window: any;
@Component({
    selector: 'app-claimlanding',
    templateUrl: './claimlanding.component.html',
})
export class ClaimLandingComponent {
    constructor(public router: Router) {
      
    }

}
