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
  GetLOVDetailsByLovId: {
    url: 'GetLOVDetailsByLovId',
    params: { lovId: 'lovId' }
  },
  GetClaimConfigDetails: {
    url: 'GetClaimConfigDetailsByCliamMasterId',
    params: { claimMasterId: 'claimMasterId' }
  },
  getClaims: {
    url: 'src/assets/data/claims.json',
    params: { roleId: 'benSno' }
  },
  GetAllHospitals: {
    url: 'GetAllHospitals',
    params: null
  },
  createClaim: {
    url: 'createClaim',
    params: null
    },
    beneficiaryEduCount: {
        url: 'GetBeneficiaryDependentClaimsbyEdu',
        params: { benSno: 'benSno' }
    },
    beneficiary: {
        url: 'GetBeneficiaryDependentClaimsbyEdu',
        params: { benSno: 'benSno' }
    },
    genarateFormV: {
        url: "getFormV",
        params: { baseTransactionId: 'transactionId', transactionType: 'transactionType' }
    },
    getReceipt: {
        url: 'getReceipt',
        params: null
    },
    getBeneficiaryHealthClaimAmount: {
        url: "GetBeneficiaryHealthClaimAmount",
        params: { benSno: 'benSno', typeOfClaim: 'typeOfClaim?' }
    },
  getPackages: {
      url: 'getPackages',
      params: null
    },
    getPfBalance:
    {
        url: "GetPfBalance"
    },
    validatePfSubmit:
    {
        url: "ValidatePfSubmit"
    },
    getNomineeClaimEntryValidation:
    {
        url: "GetNomineeClaimEntryValidation"
    },
    sendOTPforNominee:
    {
        url: "SendOTPforNominee"
    },
    verifyOTP:
    {
        url: "VerifyOTP"
    },
    pullTrack:
    {
        url: "PullTrackClaimforNominee"
    },
    getClaimDetailsById: {
        url: 'getClaimDetailsByClaimId',
        params: { claimId: 'claimId' }
    },
    getCalimId:
    {
        url: "GetCalimId"
    },
    deleteClaimExceptions:
    {
        url: "DeleteClaimExceptions"
    },
    isSameBenNomineeClaimSubmitted: {
        url: 'isSameBenNomineeSubmittedClaim',
    },
    getBenefitConfigurationDetails:
    {
        url: "GetBenefitConfigurationDetails"
    },
    isDuplicateDependentSubmitted:
    {
        url: "IsDuplicateDependentSubmitted",
        params: null
    },
    isCAFUpdated:
    {
        url: "IsCAFUpdated",
        params: null
    },
    getRegistrationNumber: {
        url: "getRegistrationNumber",
        params: null
    },
    GetClaimConfigMasterDetails: {
        url: 'GetClaimConfigDetails',
        params: null
    },
    getBeneficiaryPFAccountDetails: {
        url: "getBeneficiaryPFAccountDetails",
        params: null
    },
}
