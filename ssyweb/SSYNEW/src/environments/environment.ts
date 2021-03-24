// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,

    //apiurl:"http://192.168.200.10:8099/v1/"
    //apiurl: "http://162.216.193.100:8099/v1/"
    //apiurl: "http://36.255.252.179:9025/v1/"
    // apiurl: "http://localhost:8085/v1/"


      //Live
    //apiurl: "https://ssy.wblabour.gov.in/SSYAPI/v1/",
    //weburl: "https://ssy.wblabour.gov.in",
    //gripsurl: "https://wbifms.gov.in/GRIPS/v1epay.do",
    //gripsverifyurl: "https://wbifms.gov.in/GRIPS/DeptVarifyPayment.do"

    //9026- test server
     //apiurl: "http://36.255.252.179:9027/v1/",
     //weburl: "http://36.255.252.179:9026"
   
     //UAT
    //apiurl: "http://172.16.93.180/SSYAPI/v1/",
    //weburl: "http://172.16.93.180/",
    //gripsurl: "http://202.61.117.90/GRIPS/v1epay.do",
    //gripsverifyurl: "http://202.61.117.90/GRIPS/DeptVarifyPayment.do"

     //Dev
    //apiurl: "http://localhost:64163/v1/",
    //weburl: "http://36.255.252.179:9026",
    //gripsurl: "http://202.61.117.90/GRIPS/v1epay.do",
    //gripsverifyurl: "http://202.61.117.90/GRIPS/DeptVarifyPayment.do"

    //sdc
    //apiurl: "http://172.20.176.51/SSYAPI/v1/",
    //weburl: "http://172.20.176.51",
    //gripsurl: "https://wbifms.gov.in/GRIPS/v1epay.do",
    //gripsverifyurl: "https://wbifms.gov.in/GRIPS/DeptVarifyPayment.do"

    //local
    apiurl: "http://localhost:64163/v1/",
    weburl: "http://localhost:2126/",
    //weburl: "http://36.255.252.179:9026",
    gripsurl: "http://202.61.117.90/GRIPS/v1epay.do",
    gripsverifyurl: "http://202.61.117.90/GRIPS/DeptVarifyPayment.do"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
