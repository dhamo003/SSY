var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CeoDataService } from '../services/ceo-data.service';
import { UserService } from '../../UserService';
import { pagination } from '../../claim/pipes/constnts.model';
import { ModalDirective } from "ngx-bootstrap";
import * as FileSaver from 'file-saver';
var UtilizationcertificatelistComponent = /** @class */ (function () {
    //Paging props end
    function UtilizationcertificatelistComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        //public claimsData: Claims[];
        this.utilizationCertificateDetails = [];
        //Paging props start
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
    }
    UtilizationcertificatelistComponent.prototype.onViewClick = function (item) {
        debugger;
        this.router.navigate(['ceo/utilizationcertificate', { ucId: item.utilizationCertificateHdrId, mode: "view", alcId: item.createdBy }], { skipLocationChange: true });
    };
    UtilizationcertificatelistComponent.prototype.onPDFViewClick = function (item) {
        debugger;
        this.ucId = item.utilizationCertificateHdrId;
        this.pdfModal.show();
    };
    UtilizationcertificatelistComponent.prototype.downLoadPdf = function (type) {
        var _this = this;
        debugger;
        this.dataService
            .downloadUtilizationCertificate(this.ucId)
            .then(function (data) {
            var blob = new Blob([data.body], { type: 'application/pdf' });
            if (type == 'print') {
                var blobUrl = URL.createObjectURL(blob);
                var iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                iframe.src = blobUrl;
                document.body.appendChild(iframe);
                iframe.contentWindow.print();
            }
            else {
                FileSaver.saveAs(blob, "UtilizationCertificate.pdf");
            }
            _this.pdfModal.hide();
        });
    };
    UtilizationcertificatelistComponent.prototype.ngOnInit = function () {
        this.getCEOUtilizationCertificates(this.userService.user.deptUserid, this.page, this.pageSize);
    };
    UtilizationcertificatelistComponent.prototype.getCEOUtilizationCertificates = function (id, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getCEOUtilizationCertificates(id, pageNo, pageSize)
            .subscribe(function (data) {
            _this.utilizationCertificateDetails = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    UtilizationcertificatelistComponent.prototype.changepage = function (page) {
        this.getCEOUtilizationCertificates(this.userService.user.deptUserid, this.page, this.pageSize);
    };
    __decorate([
        ViewChild('pdfModal'),
        __metadata("design:type", ModalDirective)
    ], UtilizationcertificatelistComponent.prototype, "pdfModal", void 0);
    UtilizationcertificatelistComponent = __decorate([
        Component({
            selector: 'app-utilizationcertificatelist',
            templateUrl: './utilizationcertificatelist.component.html',
            styleUrls: ['./utilizationcertificatelist.component.css']
        }),
        __metadata("design:paramtypes", [Router, CeoDataService, UserService])
    ], UtilizationcertificatelistComponent);
    return UtilizationcertificatelistComponent;
}());
export { UtilizationcertificatelistComponent };
//# sourceMappingURL=utilizationcertificatelist.component.js.map