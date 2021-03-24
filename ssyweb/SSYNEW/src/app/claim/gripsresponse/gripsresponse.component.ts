import { Component, OnInit, HostListener } from '@angular/core';
import { UserService } from 'src/app/UserService';
import { ClaimDataService } from '../services/claim-data.service';
import { GripsResponseModel } from '../models/gripsResponse.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gripsresponse',
  templateUrl: './gripsresponse.component.html',
  styleUrls: ['./gripsresponse.component.css']
})
export class GripsresponseComponent implements OnInit {
    gripsResponse: GripsResponseModel = {} as GripsResponseModel;
    status: any;

    constructor(public router: Router, private route: ActivatedRoute, private dataService: ClaimDataService, private userService: UserService) { }

    //@HostListener('window:beforeunload', ['$event'])
    //unloadNotification($event: any) {
    //    debugger;
    //    $event.returnValue = true;
    //    this.router.navigate(['.'], { relativeTo: this.route.parent });
    //}
    ngOnInit() {
        debugger;
        this.gripsResponse.eNCDATA = this.userService.user.encData;
        this.gripsResponse.serviceProvider = this.userService.user.serviceProvider;
        var x = this.route.parent;

        //Transaction Status => 1 success
		//                      2 pending
        //                      3 failure
        if (this.userService.user.isDoubleVerification) {
            this.dataService
                .decryptGripsDoubleVerificationResponse(this.gripsResponse)
                .then((data: any) => {
                    debugger;
                    if (data == 1)
                        this.status = "Payment is done successfully";
                    else if (data == 2)
                        this.status = "Payment is Pending";
                    else
                        this.status = "Payment Failed";
                });
        }
        else {
            this.dataService
                .decryptGripsResponse(this.gripsResponse)
                .then((data: any) => {
                    debugger;
                    if(data == 1)
                        this.status = "Payment is done successfully";
                    else if (data == 2)
                        this.status = "Payment is Pending";
                    else
                        this.status = "Payment Failed";
                });
        }
  }

}
