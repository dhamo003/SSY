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
    //getBeneficiaryClaimsHistory: {
    //    url: "getBeneficiaryClaimsHistory",
    //    params: { claimId: 'claimId', benSno: 'benSno', claimType: 'claimType', page: 'page', pageSize: 'pageSize' }
    //},
    getClaimStatusClaims: {
        url: "getClaimStatusClaims",
        params: null
    },
    getBeneficiaryForcedClosedClaims: {
        url: "getBeneficiaryForcedClosedClaims",
        params: { benSno: 'benSno', claimType: 'claimType' }
    },
    getClaimCheckListDetails:{
        url: "GetClaimCheckListDetails",
        params: null
    },
    getLegacyClaimsList: {
        url: 'GetLegacyClaimsList',
        params: null
    },
    saveLegacyClaimDetails: {
        url: 'SaveLegacyClaimDetails',
        params: null
    },
    getEducationClaimsSubmittedbyStudentName: {
        url: 'getEducationClaimsSubmittedbyStudentName',
        params: null
    },
    GetLOVDetailsByLovId: {
        url: 'GetLOVDetailsByLovId',
        params: { lovId: 'lovId' }
    },
}
