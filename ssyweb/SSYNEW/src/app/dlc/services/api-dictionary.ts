export const ApiDictionary = {
    beneficiaryBasicDetails: {
        url: 'GetBeneficiaryBasicDetailsByID',
        params: { id: 'id' }
    },
    beneficiaryBankDetails: {
        url: 'GetBeneficiaryBankDetailsByBeneficiaryID',
        params: { benSno: 'benSno' }
    },
    beneficiaryNomineeDetails: {
        url: 'GetBeneficiaryNomineeDetailsByBeneficiaryID',
        params: { benSno: 'benSno' }
    },
    beneficiaryFamilyDetails: {
        url: 'GetBeneficiaryFamilyDetailsByBeneficiaryID',
        params: { benSno: 'benSno' }
    },
    getClaims: {
        url: 'src/assets/data/inspectorClaims.json',
        params: { roleId: 'benSno' }
    },
    getClaimDetailsByClaimId: {
        url: 'getClaimDetails',
        params: { claimId: 'claimId' }
    },
    getPendingApprovals: {
        url: 'GetPendingApprovals',
        params: { roleId: 'benSno' }
    },
    updateComments: {
        url: 'updateWorkFlowStatus',
        params: { roleId: 'benSno' }
    },
    getAttachment: {
        url: "getAttachment",
        params: { baseTransactionId: 'transactionId', transactionType: 'transactionType' }
    },
    getFundRequestedClaims: {
        url: 'GetFundRequestsByUserID',
        params: null
    },
    getFundRequestedClaimsById: {
        url: 'GetFundRequestByFundRequestId',
        params: null
    },
    getRLOOfficeUserInformation: {
        url: 'GetRLOOfficeUserInformation',
        params: null
    },
    updateWorkFlowStatus: {
        url: 'updateWorkFlowStatus',
        params: null
    },
    getClaimTrackDetailsByTransactionId: {
        url: "GetWorkflowTransactionLogDetails",
        params: { baseTransactionId: 'transactionId', transactionType: 'transactionType' }
    },
    getPackages: {
        url: 'getPackages',
        params: null
    },
    getBeneficiaryClaimsHistory: {
        url: "getBeneficiaryClaimsHistory",
        params: { claimId: 'claimId', benSno: 'benSno', claimType: 'claimType' }
    },
    getClaimStatusClaims: {
        url: "getClaimStatusClaims",
        params: null
    },
    getFundRequestedExpensesById: {
        url: 'getFundRequestExpensesByFundRequestId',
        params: null
    },
    getDLCUtilizationCertificates: {
        url: 'getDLCUtilizationCertificates',
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
    getBoardDetails: {
        url: 'getBoardDetails',
        params: null
    },
    getDistricts: {
        url: 'getDistricts',
        params: null
    },
    getLocationCodes: {
        url: 'getLocationCodes',
        params: null
    },
    calculatePFInterest: {
        url: 'calculatePFInterest',
        params: null

    },
}