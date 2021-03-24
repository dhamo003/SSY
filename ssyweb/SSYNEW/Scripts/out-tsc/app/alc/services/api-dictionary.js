export var ApiDictionary = {
    getPendingApprovals: {
        url: 'GetPendingApprovals',
        params: { roleId: 'benSno' }
    },
    getClaimDetailsByClaimId: {
        url: 'getClaimDetails',
        params: { claimId: 'claimId' }
    },
    beneficiaryBasicDetails: {
        url: 'GetBeneficiaryBasicDetailsByID',
        params: { id: 'id' }
    },
    updateComments: {
        url: 'updateWorkFlowStatus',
        params: { roleId: 'benSno' }
    },
    getApprovalPremission: {
        url: 'GetApprovalPremission',
        params: { statusId: 'statusId' }
    },
    getAttachment: {
        url: "getAttachment",
        params: { baseTransactionId: 'transactionId', transactionType: 'transactionType' }
    },
    getAllApprovalClaims: {
        url: 'getALCAndDLCApprovedClaimsForPaymentProcessing',
        //url: 'src/assets/data/approvedclaims.json',
        params: { roleId: 'alc' }
    },
    getAlcInformation: {
        url: 'GetALCInformation',
        // url: 'src/assets/data/alcpaymentdetails.json',
        params: { roleId: 'alc' }
    },
    saveProcessingClaims: {
        url: 'SavingPaymentProcessing',
        params: null
    },
    getRLOOfficeUserInformation: {
        url: 'GetRLOOfficeUserInformation',
        params: null
    },
    getBoardDetails: {
        url: 'getBoardDetails',
        params: null
    },
    getWorkerTypeDetails: {
        url: 'getWorkerTypeDetails',
        params: null
    },
    getLocationDetails: {
        url: 'getLocationDetails',
        params: { rloId: 'rloId' }
    },
    getClaimTypeMasterDetails: {
        url: 'getClaimConfigDetails',
        params: { rloId: 'rloId' }
    },
    saveFundRequestClaims: {
        url: 'saveFundRequest',
        params: null
    },
    getFundRequestedClaims: {
        url: 'GetFundRequestsByUserID',
        params: null
    },
    getFundRequestedClaimsById: {
        url: 'GetFundRequestByFundRequestId',
        //url: 'getFundReleaseClaimsByFundReleaseHdrId',
        // url: 'src/assets/data/approvedclaims.json',
        params: null
    },
    getClaimTrackDetailsByTransactionId: {
        url: "GetWorkflowTransactionLogDetails",
        params: { baseTransactionId: 'transactionId', transactionType: 'transactionType' }
    },
    getPaymentProcessDetails: {
        url: "GetALCPaymentProcessedList",
        params: null
    },
    getPaymentProcessById: {
        url: "GetPaymentProcessingHdrDetails",
        params: null
    },
    getPackages: {
        url: 'getPackages',
        params: null
    },
    getFundReleaseClaimsByFundReleaseHdrId: {
        url: 'getFundReleaseClaimsByFundReleaseHdrId',
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
    getLOVDetailsByLovId: {
        url: 'GetLOVDetailsByLovId',
        params: { lovId: 'lovId' }
    },
    saveFundRequestExpenses: {
        url: 'saveFundRequestExpenses',
        params: null
    },
    getFundRequestedExpenses: {
        url: 'GetFundRequestExpensesByUserID',
        params: null
    },
    getFundRequestedExpensesById: {
        url: 'getFundRequestExpensesByFundRequestId',
        params: null
    },
    getUtilizationCertificates: {
        url: 'getUtilizationCertificates',
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
    getClaimCheckListDetails: {
        url: "GetClaimCheckListDetails",
        params: null
    },
    getAllApprovalSearchClaims: {
        url: "GetAllApprovalSearchClaims",
        params: null
    },
    getFundRequestSearchClaims: {
        url: "GetFundRequestSearchClaims",
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
    getEducationClaimsSubmittedbyStudentName: {
        url: 'getEducationClaimsSubmittedbyStudentName',
        params: null
    },
    beneficiaryNomineeDetails: {
        url: 'GetBeneficiaryNomineeDetailsByBeneficiaryID',
        params: { benSno: 'benSno' }
    },
    updateNomineeDetails: {
        url: 'updateBeneficiaryNomineeDetails',
        params: null
    },
};
//# sourceMappingURL=api-dictionary.js.map