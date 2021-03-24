export var LovConstants = {
    Hospitalization: 2,
    ClaimFor: 4,
    LastExamPassed: 5,
    ReasonForApply: 7,
    EntryPoint: 8,
    ExpensesType: 10,
    Diseases: 12,
    ClinicalTests: 13,
    LegacyClaimCategory: 14,
    AdjustmentType: 15
};
export var ClaimConstants = {
    PF: 1,
    HealthFamily: 2,
    Disability: 3,
    Death: 4,
    Education: 5
};
export var ClaimStatus = {
    Saved: 1,
    Submitted: 2,
    SendbackfromInspector: 3,
    ForwardtoALC: 4,
    SendbackfromALC: 5,
    RejectfromALC: 6,
    ApprovedbyALC: 7,
    RefertoALC: 8,
    ReferedRejectbyALC: 9,
    ReferSendbackbyALC: 10,
    ReferApprovedbyALC: 11,
    ReferedtoDLC: 12,
    ReferSendbackfromDLC: 13,
    ReferedRejectbyDLC: 14,
    ReferApprovedbyDLC: 15,
    ForcedClosed: 16,
    FundRequestFromALC: 19,
    SendBackbyDLC: 20,
    ForwardtoBoard: 21,
    SendBackbyBoard: 22,
    RejectbyBoard: 23,
    ApprovebyBoard: 24,
    Release: 25,
    PaymentProcessingbyALC: 26,
    PaymentReleasebyTreasurer: 27
};
export var WorkflowTrans = {
    workflow: 1,
    workflowreferral: 2,
    fundworkflow: 3
};
export var EntryPoint = {
    Beneficiary: 19,
    Agent: 20,
    Nominee: 21,
    CA: 64,
    Lwfc: 65
};
export var AttachmentType = {
    FormV: 22,
    DischargeCertificate: 23,
    OriginalVouchers: 24,
    DoctorPrescription: 25,
    DeathCertificate: 26,
    DisabilityCertificate: 27,
    Scholarship: 28,
    NonMarriage: 29,
    PassingExamCertificate: 30,
    ExpensesSheet: 31,
    FirstPageofBankPassbook: 40,
    Condolationcertificate: 66,
    PayinSlip: 90,
    FormIV: 91
};
export var UserType = {
    SuperAdmin: 1,
    Inspector: 5,
    AsstLabourCom: 6,
    DeputyLabourCom: 7,
    Beneficiary: 14,
    Treasurer: 13,
    CEO: 12,
    ServiceProvider: 8,
    CA: 9,
    Lwfc: 11,
    Others: 10,
};
export var HealthClaimEligibility = {
    TreatmentOfAilment: 20000,
    Surgery: 60000
};
export var PFTypeOfClaim = {
    Premature: 1,
    FinalPayment: 2
};
export var pagination = {
    pageNo: 1,
    pageSize: 10
};
export var PFDepositeStatus = {
    pending: 0,
    deposited: 1
};
export var ClaimCheckList = {
    PFCheckList: 1,
    HealthFamilyCheckList: 2,
    DisabilityCheckList: 3,
    DeathCheckList: 4,
    EducationCheckList: 5
};
export var ReleaseType = {
    ReleaseAgainstRLOOffice: 1,
    ReleaseAgainstBeneficiary: 2
};
export var ReasonForApplyAgent = {
    OnDeathofBeneficiaryOnRequestofNominee: 16,
    OnDisabilityofBeneficiary: 17,
    OnRequestofBeneficiary: 18
};
export var PFStatusMaster = {
    Active: 1,
    Closed: 2,
    Inactive: 3,
    New: 0,
    PartialClosed: 4,
};
//# sourceMappingURL=constnts.model.js.map