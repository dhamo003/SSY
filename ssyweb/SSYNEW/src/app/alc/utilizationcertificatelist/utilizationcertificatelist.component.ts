import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlcDataService } from '../services/alc-data.service';
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

    constructor(public router: Router, private dataService: AlcDataService, private userService: UserService) {

    }

    onViewClick(item: any) {
            this.router.navigate(['alc/utilizationcertificate', { ucId: item.utilizationCertificateHdrId, mode: "view"}], { skipLocationChange: true });
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
        this.getUtilizationCertificates(this.userService.user.deptUserid, this.page, this.pageSize);
    }

    getUtilizationCertificates(id: number, pageNo?: any, pageSize?: any) {
        this.dataService
            .getUtilizationCertificates(id, pageNo, pageSize)
            .subscribe((data: any) => {
                this.utilizationCertificateDetails = data.results;
                this.totalRows = data.rowCount;
            });
    }

    changepage(page) {
        this.getUtilizationCertificates(this.userService.user.deptUserid, this.page, this.pageSize);
    }

}