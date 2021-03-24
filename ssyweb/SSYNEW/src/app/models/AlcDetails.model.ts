export interface AlcDetails {
    alcName: string;
    rloOfficeName: string;
    addressLine1: null;
    addressLine2: null;
    city: null;
    balanceOfTheAmount: number;
    approvedClaimsAmount: number;
}

export class RloOfficeInformation {
    userName: string;
    rloOffices: RloOffice[];
    approvedClaimsAmount: number;
}

export class RloOffice {
    rloOfficeId: number;
    rloOfficeCode: string;
    rloOfficeName: string;
    addressLine1: null;
    addressLine2: null;
    city: null;
    stateId: null;
    statusId: null;
    createdBy: null;
    creadtedDate: null;
    updatedBy: null;
    upadtedDate: null;
    subDivisionId: number;
    balanceOfTheAmount: number;
}