export class NewRegUsers {
    userid: number;
    userCode: string;
    firstname: string;
    lastname: string;
    userType: number;
    location: number;
    distId: number;
    subDivId: number;
    isActive: boolean;
    userName: string;
    locationName: string;
    locationCode: number;
    agentRLOInformation: RLOOffice;
    rloOfficeId: number;
}

export class RLOOffice {
    rloOfficeId: number;
    rloOfficeName: string;
    addressLine1: string;
    addressLine2: string;
    
}