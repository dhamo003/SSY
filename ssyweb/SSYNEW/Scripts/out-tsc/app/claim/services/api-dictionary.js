export var ApiDictionary = {
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
    GetLOVDetailsByLovId: {
        url: 'GetLOVDetailsByLovId',
        params: { lovId: 'lovId' }
    },
    GetClaimConfigDetails: {
        url: 'GetClaimConfigDetailsByCliamMasterId',
        params: { claimMasterId: 'claimMasterId' }
    },
    GetClaimConfigMasterDetails: {
        url: 'GetClaimConfigDetails',
        params: null
    },
    getClaims: {
        url: 'GetAllClaims',
        params: { benSno: 'benSno' }
    },
    GetAllHospitals: {
        url: 'GetAllHospitals',
        params: null
    },
    getAllClaimsByAgentId: {
        url: 'GetAllClaimsByAgentId',
        params: null
    },
    getAllClaimsbByDraft: {
        url: 'GetAllClaimsbByDraft',
        params: null
    },
    getAllClaimsbByAgentDraft: {
        url: 'GetAllClaimsbByAgentDraft',
        params: null
    },
    createClaim: {
        url: 'createClaim',
        params: null
    },
    updateClaim: {
        url: 'updateClaim',
        params: null
    },
    beneficiaryEduCount: {
        url: 'GetBeneficiaryDependentClaimsbyEdu',
        params: { benSno: 'benSno' }
    },
    getReceipt: {
        url: 'getReceipt',
        params: null
    },
    getClaimDetailsByClaimId: {
        url: 'getClaimDetails',
        params: { claimId: 'claimId' }
    },
    getClaimDetailsById: {
        url: 'getClaimDetailsByClaimId',
        params: { claimId: 'claimId' }
    },
    getClaimTrackDetailsByTransactionId: {
        url: "GetWorkflowTransactionLogDetails",
        params: { baseTransactionId: 'transactionId', transactionType: 'transactionType', wfId: 'wfId' }
    },
    genarateFormV: {
        url: "getFormV",
        params: { baseTransactionId: 'transactionId', transactionType: 'transactionType' }
    },
    getAttachment: {
        url: "getAttachment",
        params: { baseTransactionId: 'transactionId', transactionType: 'transactionType' }
    },
    deleteClaimById: {
        url: "deleteClaim",
        params: { claimId: 'claimId' }
    },
    getAllBeneficiaryClaimRefers: {
        url: "GetAllBeneficiaryClaimRefers",
        params: { benSno: 'benSno', entryPoint: 'entrypoint', userType: 'usertype' }
    },
    getAllAgentClaimRefers: {
        url: "GetAllAgentClaimRefers",
        //params: { agentId: 'agentId', entryPoint: 'entrypoint' }
        params: null
    },
    getActiveFinancialYear: {
        url: "GetActiveFinancialYear"
    },
    getBeneficiaryHealthClaimAmount: {
        url: "GetBeneficiaryHealthClaimAmount",
        params: { benSno: 'benSno', typeOfClaim: 'typeOfClaim?' }
    },
    getPackages: {
        url: 'getPackages',
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
    beneficiaryAppliedDisabilities: {
        url: 'getBeneficiaryAppliedDisabilities',
        params: { benSno: 'benSno' }
    },
    getPfBalance: {
        url: "GetPfBalance"
    },
    validatePfSubmit: {
        url: "ValidatePfSubmit"
    },
    getLastPaidPfDetails: {
        url: "getBeneficiaryLastPaidCollectionDetails",
        // url: 'src/assets/data/PfPaymentDetails.json',
        params: { ssin: 'ssin', benSno: 'benSno' }
    },
    getBeneficiaryDetailsBySearch: {
        url: 'getPFBeneficiaryBasicDetailsByID',
        params: { searchId: 'searchId' }
    },
    getLegacyPFBeneficiaryBasicDetailsByID: {
        url: 'GetLegacyPFBeneficiaryBasicDetailsByID',
        params: { searchId: 'searchId' }
    },
    savePFCollectionDetails: {
        url: 'savePFCollection',
        params: { pfcollectionObj: 'pfObj' }
    },
    getPFMasterConfigDetails: {
        url: 'getPFContribution',
    },
    getAgentCollectedAmount: {
        url: 'getMaxCashAtAgent',
        params: { userId: 'userId' }
    },
    getPFDepositDetailsByAgentId: {
        url: 'getCollectionMasterDetailsByAgent',
        params: { userid: 'id', status: '0/1', page: '1', pageSize: '10' }
    },
    submitPFDepositDetails: {
        url: 'savePFDeposit',
        params: { pfDepositObj: 'pfObj' }
    },
    isBenNomineeClaimSubmitted: {
        url: 'isBenNomineeSubmittedClaim',
        params: { benSno: 'benSno' }
    },
    isSameBenNomineeClaimSubmitted: {
        url: 'isSameBenNomineeSubmittedClaim',
        params: { benSno: 'benSno' }
    },
    getNomineeClaimEntryValidation: {
        url: "GetNomineeClaimEntryValidation"
    },
    getAgentList: {
        url: "GetDeptUsers"
    },
    getBenefitConfigurationDetails: {
        url: "GetBenefitConfigurationDetails"
    },
    getPFConfigurationDetails: {
        url: 'getPFConfigurationDetails',
        params: null
    },
    isValidMonthSubmitted: {
        url: 'IsValidMonthSubmitted',
        params: null
    },
    isValidBookReceipt: {
        url: 'IsValidBookReceipt',
        params: null
    },
    submitLegacyPFDetails: {
        url: 'SaveLegacyPFDetails',
        params: null
    },
    getSubDivRLOBankDetails: {
        url: 'GetSubDivRLOBankDetails',
        params: null
    },
    getAgentBooks: {
        url: 'getAgentBooks',
        params: null
    },
    getAgentLocationWise: {
        url: "GetAgentLocationWise",
        params: null
    },
    //getAgentBooks: {
    //    url: 'getAgentBooks',
    //    params: null
    //},
    getNextReceiptNo: {
        url: 'getNextReceiptNo',
        params: null
    },
    getWorkerTypeDetails: {
        url: 'getWorkerTypeDetails',
        params: null
    },
    getAgentLegacyPfDetails: {
        url: "GetAgentLegacyPfDetails",
        params: null
    },
    getAgentDetailsForDeposit: {
        url: 'getAgentDetailsForDeposit',
        params: null
    },
    savePayInSlip: {
        url: 'SavePayInSlip',
        params: null
    },
    getPFDepositStatusDetailsByAgentId: {
        url: 'getDepositMasterDetailsByAgent',
        params: { userid: 'id', status: '0/1', page: '1', pageSize: '10' }
    },
    isAgentAllDepositsPayInSlipsUploaded: {
        url: 'isAgentAllDepositsPayInSlipsUploaded',
        params: null
    },
    getPFDeposits: {
        url: 'getPFDeposits',
        params: null
    },
    getCollections: {
        url: 'getCollectionMasterDetailsByDepositId',
        params: null
    },
    getLegacyCollections: {
        url: 'getLegacyCollectionMasterDetailsByDepositId',
        params: null
    },
    getPFDepositStatusDetailsByUser: {
        url: 'getDepositMasterDetailsByUser',
        params: null
    },
    getUserDetails: {
        url: 'getUserDetails',
        params: null
    },
    checkReceiptNoForAgentBook: {
        url: 'checkReceiptNoForAgentBook',
        params: null
    },
    getCollectionFinancialYear: {
        url: "GetCollectionFinancialYearDetails",
        params: null
    },
    getBeneficiaryPFDetails: {
        url: "GetBenPFDetails",
        params: null
    },
    isDuplicateDependentSubmitted: {
        url: "IsDuplicateDependentSubmitted",
        params: null
    },
    getAgentCollectionBooks: {
        url: "GetAgentCollectionBooks",
        params: null
    },
    getLegacyPFDetails: {
        url: "GetLegacyPFDetails",
        params: null
    },
    getLegacyPFCollectionDetails: {
        url: "GetLegacyPFCollectionDetails",
        params: null
    },
    getLegacyPFCollections: {
        url: 'GetLegacyPFCollections',
        params: null
    },
    deleteClaimExceptions: {
        url: "DeleteClaimExceptions"
    },
    genaratePdfFormIV: {
        url: "getFormIV",
        params: null
    },
    genaratePdfLegacyFormIV: {
        url: "getLegacyFormIV",
        params: null
    },
    getfinanacialYearListDetails: {
        url: "GetFinanacialYearListDetails",
        params: null
    },
    isValidCollectionYear: {
        url: "IsValidCollectionYear",
        params: null
    },
    isInterestCalculatedforBen: {
        url: "IsInterestCalculatedforBen",
        params: null
    },
    getSubmittedLegacyPFDetails: {
        url: "GetSubmittedLegacyPFDetails",
        params: null
    },
    saveAdjustment: {
        url: "saveAdjustment",
        params: null
    },
    getAdjustmentBeneficiaryBasicDetailsByID: {
        url: "getAdjustmentBeneficiaryBasicDetailsByID",
        params: null
    },
    genaratePdfPayInSlip: {
        url: "getPayInSlip",
        params: null
    },
    isCAFUpdated: {
        url: "IsCAFUpdated",
        params: null
    },
    decryptGripsResponse: {
        url: "decryptGripsResponse",
        params: null
    },
    decryptGripsDoubleVerificationResponse: {
        url: "decryptGripsDoubleVerificationResponse",
        params: null
    },
    repayToGrips: {
        url: "repayToGrips",
        params: null
    },
    postDoubleVerificationGrips: {
        url: "postDoubleVerificationGrips",
        params: null
    },
    downloadPFDepositDetails: {
        url: "getPFDepositDetails",
        params: null
    },
    getRegistrationNumber: {
        url: "getRegistrationNumber",
        params: null
    },
    getPFDepositAttachments: {
        url: "getPFDepositAttachments",
        params: null
    },
    getLWCBankDetails: {
        url: "getLWFCBankDetailsByUserId",
        params: null
    },
    getBeneficiaryPFAccountDetails: {
        url: "getBeneficiaryPFAccountDetails",
        params: null
    },
};
//# sourceMappingURL=api-dictionary.js.map