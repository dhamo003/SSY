import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CeoDataService } from '../services/ceo-data.service';
import { UtilizationCertificate } from '../../models/utilizationcertificate.model';
import { UserService } from '../../UserService';
import { pagination } from '../../claim/pipes/constnts.model';
import { ModalDirective } from "ngx-bootstrap";
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-utilizationcertificatelist',
  templateUrl: './utilizationcertificatelist.component.html',
  styleUrls: ['./utilizationcertificatelist.component.css']
})
export class UtilizationcertificatelistComponent implements OnInit {
    @ViewChild('pdfModal') public pdfModal: ModalDirective;
    //public claimsData: Claims[];
    public utilizationCertificateDetails: UtilizationCertificate[] = [];
    ucId: number;
    //Paging props start
    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    //Paging props end

    constructor(public router: Router, private dataService: CeoDataService, private userService: UserService) {

    }

    onViewClick(item: any) {
        debugger;
        this.router.navigate(['ceo/utilizationcertificate', { ucId: item.utilizationCertificateHdrId, mode: "view", alcId: item.createdBy }], { skipLocationChange: true });
    }
    onPDFViewClick(item: any) {
        debugger;
        this.ucId = item.utilizationCertificateHdrId;
        this.pdfModal.show();
    }
    downLoadPdf(type) {
        debugger;
        this.dataService
            .downloadUtilizationCertificate(this.ucId)
            .then((data: any) => {
                var blob = new Blob([data.body], { type: 'application/pdf' });
                if (type == 'print') {
                    const blobUrl = URL.createObjectURL(blob);
                    const iframe = document.createElement('iframe');
                    iframe.style.display = 'none';
                    iframe.src = blobUrl;
                    document.body.appendChild(iframe);
                    iframe.contentWindow.print();
                }
                else {
                    FileSaver.saveAs(blob, "UtilizationCertificate.pdf");
                }
                this.pdfModal.hide();
            });
    }
    ngOnInit() {
        this.getCEOUtilizationCertificates(this.userService.user.deptUserid, this.page, this.pageSize);
    }

    getCEOUtilizationCertificates(id: number, pageNo?: any, pageSize?: any) {
        this.dataService
            .getCEOUtilizationCertificates(id, pageNo, pageSize)
            .subscribe((data: any) => {
                this.utilizationCertificateDetails = data.results;
                this.totalRows = data.rowCount;
            });
    }

    changepage(page) {
        this.getCEOUtilizationCertificates(this.userService.user.deptUserid, this.page, this.pageSize);
    }

}
