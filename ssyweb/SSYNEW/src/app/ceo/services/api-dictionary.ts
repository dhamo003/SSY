export const ApiDictionary = {
    getFundRequestedClaims: {
        url: 'GetFundRequestsByUserID',
        params: null
    },
    saveFundRequestClaims: {
        url: 'saveFundRequest',
        params: null

    },
    updateWorkFlowStatus: {
        url: 'updateWorkFlowStatus',
        params: null
    },
    getFundRequestedClaimsById: {
        url: 'GetFundRequestByFundRequestId',
        // url: 'src/assets/data/approvedclaims.json',
        params: null
    },
    getRLOOfficeUserInformation: {
        url: 'GetRLOOfficeUserInformation',
        params: null
    },
    getClaimTrackDetailsByTransactionId: {
        url: "GetWorkflowTransactionLogDetails",
        params: { baseTransactionId: 'transactionId', transactionType: 'transactionType' }
    },
    getClaimStatusClaims: {
        url: "getClaimStatusClaims",
        params: null
    },
    getPackages: {
        url: 'getPackages',
        params: null
    },
    getClaimDetailsByClaimId: {
        url: 'getClaimDetails',
        params: { claimId: 'claimId' }
    },
    beneficiaryBasicDetails: {
        url: 'GetBeneficiaryBasicDetailsByID',
        params: { id: 'id' }
    },
    getAttachment: {
        url: "getAttachment",
        params: { baseTransactionId: 'transactionId', transactionType: 'transactionType' }
    },
    getFundRequestedExpensesById: {
        url: 'getFundRequestExpensesByFundRequestId',
        params: null
    },
    getCEOUtilizationCertificates: {
        url: 'getCEOUtilizationCertificates',
        params: null
    },
    getReleaseOrders: {
        url: 'getReleaseOrders',
        params: null
    },
    getFinancialYears: {
        url: 'getFinancialYears',
        params: null
    },
    saveUtilizationCertificate: {
        url: 'saveUtilizationCertificate',
        params: null

    },
    getUtilizationCertificateDetails: {
        url: 'getUtilizationCertificateDetails',
        params: null

    },
    getUtilizationCertificate: {
        url: 'getUtilizationCertificate',
        params: null

    },
}