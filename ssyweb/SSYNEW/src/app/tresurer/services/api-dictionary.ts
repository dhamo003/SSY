export const ApiDictionary = {
    getRLOBankDetails: {
        url: 'GetRLOBankAccounts',
        params: null
    },
    getPaymentProcessedDetails: {
        url: 'getAllClaimsByPaymentProcessingId',
        params: null
    },

    GetRLOUserInfoByProcessingId: {
        url: 'GetRLOUserInfoByProcessingId',
        params: null
    },
    getRLOOfficeUserInformation: {
        url: 'GetRLOOfficeUserInformation',
        params: null
    },
    savePaymentRelease: {
        url: 'savePaymentRelease',
        params: null
    },

    getTreasurerPaymentProcesses: {
        url: 'getTreasurerPaymentProcesses',
        params: null
    },

    getFundReleaseDetails: {
        url: 'getTreasurerReleaseOrders',
        params: null
    },

    getFundRequestedClaimsById: {
        url: 'GetFundReleaseOrderByFundReleaseOrderId',
        params: null
    },
    getNEFTDetailsById: {
        url: 'GetNEFTDetailsForReleasedClaims', //TODO: Change API Name
        //url: 'src/assets/data/NEFTdetails.json',
        params: null
    },
    updateComments: {
        url: 'updateWorkFlowStatus',
        params: { roleId: 'benSno' }
    },
    getPaymentReleaseDetails: {
        url: 'GetPaymentReleasedList',
        params: null
    },
    getPaymentReleaseById: {
        url: 'GetPaymentReleaseHdrDetails',
        params: null
    },
    getFundRequestedExpensesById: {
        url: 'getFundReleaseOrderExpensesByFundReleaseOrderId',
        params: null
    },
    getBeneficiaryPaymentNEFTDetails: {
        url: 'getBeneficiaryPaymentNEFTDetails', 
        params: null
    },
}