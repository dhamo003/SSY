var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AlcDataService } from '../services/alc-data.service';
import { UserService } from '../../UserService';
import { WorkflowTrans, pagination } from '../../claim/pipes/constnts.model';
import { Router } from '@angular/router';
var SearchStudentComponent = /** @class */ (function () {
    //Paging props end
    function SearchStudentComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.claimsData = [];
        this.nameValid = true;
        //Paging props start
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
    }
    SearchStudentComponent.prototype.searchStudent = function () {
        debugger;
        this.getEducationClaimsSubmittedbyStudentName(this.studentName, this.page, this.pageSize);
    };
    SearchStudentComponent.prototype.ngOnInit = function () {
        //this.getEducationClaimsSubmittedbyStudentName('montu', this.page, this.pageSize);
    };
    SearchStudentComponent.prototype.getEducationClaimsSubmittedbyStudentName = function (name, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getEducationClaimsSubmittedbyStudentName(name, pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    SearchStudentComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['alc/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "search", workflowId: WorkflowTrans.workflow, chronologicalOrder: -1 }], { skipLocationChange: true });
    };
    SearchStudentComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['alc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "search", workflowId: WorkflowTrans.workflow }], { skipLocationChange: true });
    };
    SearchStudentComponent.prototype.changepage = function (page) {
        this.getEducationClaimsSubmittedbyStudentName(this.studentName, this.page, this.pageSize);
    };
    SearchStudentComponent = __decorate([
        Component({
            selector: 'app-search-student',
            templateUrl: './search-student.component.html',
            styleUrls: ['./search-student.component.css']
        }),
        __metadata("design:paramtypes", [Router, AlcDataService, UserService])
    ], SearchStudentComponent);
    return SearchStudentComponent;
}());
export { SearchStudentComponent };
//# sourceMappingURL=search-student.component.js.map