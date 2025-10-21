// generated with @7nohe/openapi-react-query-codegen@1.4.1 

import { UseQueryResult } from "@tanstack/react-query";
import { AllergyControllerService, AuditHistoryControllerService, AwsControllerService, ContactDirectoryControllerService, DiagnosisControllerService, DocumentControllerService, DocumentTypeControllerService, DrugIntoleranceControllerService, FamilyHistoryControllerService, IcdCodeControllerService, ImagingOrderControllerService, ImagingResultControllerService, InsuranceControllerService, InvoiceControllerService, LeadControllerService, LocationControllerService, LocationGroupControllerService, MedicationControllerService, NoteControllerService, OrderStudyControllerService, PastMedicalHistoryControllerService, PastSurgicalHistoryControllerService, PatientControllerService, PatientFlagControllerService, PatientLinkPharmacyControllerService, PatientVaccinationControllerService, PaymentTransactionControllerService, PharmacyControllerService, PlanControllerService, ProcedureCodeControllerService, ProviderControllerService, ReferralControllerService, UserControllerService, VaccineControllerService } from "../requests/services.gen";
export type PaymentTransactionControllerServiceGetPaymentTransactionByUuidDefaultResponse = Awaited<ReturnType<typeof PaymentTransactionControllerService.getPaymentTransactionByUuid>>;
export type PaymentTransactionControllerServiceGetPaymentTransactionByUuidQueryResult<TData = PaymentTransactionControllerServiceGetPaymentTransactionByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePaymentTransactionControllerServiceGetPaymentTransactionByUuidKey = "PaymentTransactionControllerServiceGetPaymentTransactionByUuid";
export const UsePaymentTransactionControllerServiceGetPaymentTransactionByUuidKeyFn = ({ paymentTransactionUuid }: {
  paymentTransactionUuid: string;
}, queryKey?: Array<unknown>) => [usePaymentTransactionControllerServiceGetPaymentTransactionByUuidKey, ...(queryKey ?? [{ paymentTransactionUuid }])];
export type PaymentTransactionControllerServiceGetAllPaymentTransactionsDefaultResponse = Awaited<ReturnType<typeof PaymentTransactionControllerService.getAllPaymentTransactions>>;
export type PaymentTransactionControllerServiceGetAllPaymentTransactionsQueryResult<TData = PaymentTransactionControllerServiceGetAllPaymentTransactionsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePaymentTransactionControllerServiceGetAllPaymentTransactionsKey = "PaymentTransactionControllerServiceGetAllPaymentTransactions";
export const UsePaymentTransactionControllerServiceGetAllPaymentTransactionsKeyFn = ({ page, pageSize, searchString, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
} = {}, queryKey?: Array<unknown>) => [usePaymentTransactionControllerServiceGetAllPaymentTransactionsKey, ...(queryKey ?? [{ page, pageSize, searchString, sortBy, sortDirection }])];
export type UserControllerServiceGetAllUsersDefaultResponse = Awaited<ReturnType<typeof UserControllerService.getAllUsers>>;
export type UserControllerServiceGetAllUsersQueryResult<TData = UserControllerServiceGetAllUsersDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUserControllerServiceGetAllUsersKey = "UserControllerServiceGetAllUsers";
export const UseUserControllerServiceGetAllUsersKeyFn = ({ archive, page, role, roleType, searchString, size, sortBy, sortDirection, status }: {
  archive?: boolean;
  page?: number;
  role?: string;
  roleType?: "ADMIN" | "USER" | "EHR" | "EMPLOYER" | "PATIENT" | "AGENT";
  searchString?: string;
  size?: number;
  sortBy?: string;
  sortDirection?: string;
  status?: boolean;
} = {}, queryKey?: Array<unknown>) => [useUserControllerServiceGetAllUsersKey, ...(queryKey ?? [{ archive, page, role, roleType, searchString, size, sortBy, sortDirection, status }])];
export type UserControllerServiceGetUserDefaultResponse = Awaited<ReturnType<typeof UserControllerService.getUser>>;
export type UserControllerServiceGetUserQueryResult<TData = UserControllerServiceGetUserDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUserControllerServiceGetUserKey = "UserControllerServiceGetUser";
export const UseUserControllerServiceGetUserKeyFn = ({ userId }: {
  userId: string;
}, queryKey?: Array<unknown>) => [useUserControllerServiceGetUserKey, ...(queryKey ?? [{ userId }])];
export type UserControllerServiceGetProfileDefaultResponse = Awaited<ReturnType<typeof UserControllerService.getProfile>>;
export type UserControllerServiceGetProfileQueryResult<TData = UserControllerServiceGetProfileDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUserControllerServiceGetProfileKey = "UserControllerServiceGetProfile";
export const UseUserControllerServiceGetProfileKeyFn = (queryKey?: Array<unknown>) => [useUserControllerServiceGetProfileKey, ...(queryKey ?? [])];
export type ProviderControllerServiceGetProviderByUuidDefaultResponse = Awaited<ReturnType<typeof ProviderControllerService.getProviderByUuid>>;
export type ProviderControllerServiceGetProviderByUuidQueryResult<TData = ProviderControllerServiceGetProviderByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useProviderControllerServiceGetProviderByUuidKey = "ProviderControllerServiceGetProviderByUuid";
export const UseProviderControllerServiceGetProviderByUuidKeyFn = ({ providerUuid }: {
  providerUuid: string;
}, queryKey?: Array<unknown>) => [useProviderControllerServiceGetProviderByUuidKey, ...(queryKey ?? [{ providerUuid }])];
export type ProviderControllerServiceGetAllProvidersDefaultResponse = Awaited<ReturnType<typeof ProviderControllerService.getAllProviders>>;
export type ProviderControllerServiceGetAllProvidersQueryResult<TData = ProviderControllerServiceGetAllProvidersDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useProviderControllerServiceGetAllProvidersKey = "ProviderControllerServiceGetAllProviders";
export const UseProviderControllerServiceGetAllProvidersKeyFn = ({ filterBy, filterValue, latitude, longitude, page, pageSize, patientAge, searchString, sortBy, sortDirection, status, zipcode }: {
  filterBy?: string;
  filterValue?: string[];
  latitude?: string;
  longitude?: string;
  page?: number;
  pageSize?: number;
  patientAge?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
  status?: boolean;
  zipcode?: string;
} = {}, queryKey?: Array<unknown>) => [useProviderControllerServiceGetAllProvidersKey, ...(queryKey ?? [{ filterBy, filterValue, latitude, longitude, page, pageSize, patientAge, searchString, sortBy, sortDirection, status, zipcode }])];
export type PlanControllerServiceGetPlanAmountDefaultResponse = Awaited<ReturnType<typeof PlanControllerService.getPlanAmount>>;
export type PlanControllerServiceGetPlanAmountQueryResult<TData = PlanControllerServiceGetPlanAmountDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePlanControllerServiceGetPlanAmountKey = "PlanControllerServiceGetPlanAmount";
export const UsePlanControllerServiceGetPlanAmountKeyFn = ({ primaryLeadUuid }: {
  primaryLeadUuid: string;
}, queryKey?: Array<unknown>) => [usePlanControllerServiceGetPlanAmountKey, ...(queryKey ?? [{ primaryLeadUuid }])];
export type PlanControllerServiceGetPlanByUuidDefaultResponse = Awaited<ReturnType<typeof PlanControllerService.getPlanByUuid>>;
export type PlanControllerServiceGetPlanByUuidQueryResult<TData = PlanControllerServiceGetPlanByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePlanControllerServiceGetPlanByUuidKey = "PlanControllerServiceGetPlanByUuid";
export const UsePlanControllerServiceGetPlanByUuidKeyFn = ({ planUuid }: {
  planUuid: string;
}, queryKey?: Array<unknown>) => [usePlanControllerServiceGetPlanByUuidKey, ...(queryKey ?? [{ planUuid }])];
export type PlanControllerServiceGetAllPlanDefaultResponse = Awaited<ReturnType<typeof PlanControllerService.getAllPlan>>;
export type PlanControllerServiceGetAllPlanQueryResult<TData = PlanControllerServiceGetAllPlanDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePlanControllerServiceGetAllPlanKey = "PlanControllerServiceGetAllPlan";
export const UsePlanControllerServiceGetAllPlanKeyFn = ({ planUuid }: {
  planUuid: string;
}, queryKey?: Array<unknown>) => [usePlanControllerServiceGetAllPlanKey, ...(queryKey ?? [{ planUuid }])];
export type PlanControllerServiceCheckMyPlanDefaultResponse = Awaited<ReturnType<typeof PlanControllerService.checkMyPlan>>;
export type PlanControllerServiceCheckMyPlanQueryResult<TData = PlanControllerServiceCheckMyPlanDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePlanControllerServiceCheckMyPlanKey = "PlanControllerServiceCheckMyPlan";
export const UsePlanControllerServiceCheckMyPlanKeyFn = ({ defaultBillingPeriod, primaryLeadUuid }: {
  defaultBillingPeriod: "ANNUAL" | "MONTH" | "QUARTERLY" | "SEMI_ANNUALLY";
  primaryLeadUuid: string;
}, queryKey?: Array<unknown>) => [usePlanControllerServiceCheckMyPlanKey, ...(queryKey ?? [{ defaultBillingPeriod, primaryLeadUuid }])];
export type PlanControllerServiceGetAllPlan1DefaultResponse = Awaited<ReturnType<typeof PlanControllerService.getAllPlan1>>;
export type PlanControllerServiceGetAllPlan1QueryResult<TData = PlanControllerServiceGetAllPlan1DefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePlanControllerServiceGetAllPlan1Key = "PlanControllerServiceGetAllPlan1";
export const UsePlanControllerServiceGetAllPlan1KeyFn = ({ search }: {
  search?: string;
} = {}, queryKey?: Array<unknown>) => [usePlanControllerServiceGetAllPlan1Key, ...(queryKey ?? [{ search }])];
export type PatientControllerServiceGetPatientByUuidDefaultResponse = Awaited<ReturnType<typeof PatientControllerService.getPatientByUuid>>;
export type PatientControllerServiceGetPatientByUuidQueryResult<TData = PatientControllerServiceGetPatientByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePatientControllerServiceGetPatientByUuidKey = "PatientControllerServiceGetPatientByUuid";
export const UsePatientControllerServiceGetPatientByUuidKeyFn = ({ patientUuid }: {
  patientUuid: string;
}, queryKey?: Array<unknown>) => [usePatientControllerServiceGetPatientByUuidKey, ...(queryKey ?? [{ patientUuid }])];
export type PatientControllerServiceGetPatientPlanDetailsDefaultResponse = Awaited<ReturnType<typeof PatientControllerService.getPatientPlanDetails>>;
export type PatientControllerServiceGetPatientPlanDetailsQueryResult<TData = PatientControllerServiceGetPatientPlanDetailsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePatientControllerServiceGetPatientPlanDetailsKey = "PatientControllerServiceGetPatientPlanDetails";
export const UsePatientControllerServiceGetPatientPlanDetailsKeyFn = ({ patientUuid }: {
  patientUuid: string;
}, queryKey?: Array<unknown>) => [usePatientControllerServiceGetPatientPlanDetailsKey, ...(queryKey ?? [{ patientUuid }])];
export type PatientControllerServiceGetPatientOverviewDefaultResponse = Awaited<ReturnType<typeof PatientControllerService.getPatientOverview>>;
export type PatientControllerServiceGetPatientOverviewQueryResult<TData = PatientControllerServiceGetPatientOverviewDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePatientControllerServiceGetPatientOverviewKey = "PatientControllerServiceGetPatientOverview";
export const UsePatientControllerServiceGetPatientOverviewKeyFn = ({ patientUuid }: {
  patientUuid: string;
}, queryKey?: Array<unknown>) => [usePatientControllerServiceGetPatientOverviewKey, ...(queryKey ?? [{ patientUuid }])];
export type PatientControllerServiceGetPatientMemberShipDefaultResponse = Awaited<ReturnType<typeof PatientControllerService.getPatientMemberShip>>;
export type PatientControllerServiceGetPatientMemberShipQueryResult<TData = PatientControllerServiceGetPatientMemberShipDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePatientControllerServiceGetPatientMemberShipKey = "PatientControllerServiceGetPatientMemberShip";
export const UsePatientControllerServiceGetPatientMemberShipKeyFn = ({ patientUuid }: {
  patientUuid: string;
}, queryKey?: Array<unknown>) => [usePatientControllerServiceGetPatientMemberShipKey, ...(queryKey ?? [{ patientUuid }])];
export type PatientControllerServiceGetAllPatientDefaultResponse = Awaited<ReturnType<typeof PatientControllerService.getAllPatient>>;
export type PatientControllerServiceGetAllPatientQueryResult<TData = PatientControllerServiceGetAllPatientDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePatientControllerServiceGetAllPatientKey = "PatientControllerServiceGetAllPatient";
export const UsePatientControllerServiceGetAllPatientKeyFn = ({ employerUuids, endDate, page, pageSize, searchString, sortBy, sortDirection, startDate, status }: {
  employerUuids?: string[];
  endDate?: string;
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
  startDate?: string;
  status?: boolean;
} = {}, queryKey?: Array<unknown>) => [usePatientControllerServiceGetAllPatientKey, ...(queryKey ?? [{ employerUuids, endDate, page, pageSize, searchString, sortBy, sortDirection, startDate, status }])];
export type LeadControllerServiceGetLeadByUuidDefaultResponse = Awaited<ReturnType<typeof LeadControllerService.getLeadByUuid>>;
export type LeadControllerServiceGetLeadByUuidQueryResult<TData = LeadControllerServiceGetLeadByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useLeadControllerServiceGetLeadByUuidKey = "LeadControllerServiceGetLeadByUuid";
export const UseLeadControllerServiceGetLeadByUuidKeyFn = ({ leadUuid }: {
  leadUuid: string;
}, queryKey?: Array<unknown>) => [useLeadControllerServiceGetLeadByUuidKey, ...(queryKey ?? [{ leadUuid }])];
export type LeadControllerServiceGetAllLeadDefaultResponse = Awaited<ReturnType<typeof LeadControllerService.getAllLead>>;
export type LeadControllerServiceGetAllLeadQueryResult<TData = LeadControllerServiceGetAllLeadDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useLeadControllerServiceGetAllLeadKey = "LeadControllerServiceGetAllLead";
export const UseLeadControllerServiceGetAllLeadKeyFn = ({ page, pageSize, searchString, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
} = {}, queryKey?: Array<unknown>) => [useLeadControllerServiceGetAllLeadKey, ...(queryKey ?? [{ page, pageSize, searchString, sortBy, sortDirection }])];
export type VaccineControllerServiceGetVaccineByUuidDefaultResponse = Awaited<ReturnType<typeof VaccineControllerService.getVaccineByUuid>>;
export type VaccineControllerServiceGetVaccineByUuidQueryResult<TData = VaccineControllerServiceGetVaccineByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useVaccineControllerServiceGetVaccineByUuidKey = "VaccineControllerServiceGetVaccineByUuid";
export const UseVaccineControllerServiceGetVaccineByUuidKeyFn = ({ uuid }: {
  uuid: string;
}, queryKey?: Array<unknown>) => [useVaccineControllerServiceGetVaccineByUuidKey, ...(queryKey ?? [{ uuid }])];
export type VaccineControllerServiceGetAllVaccinesDefaultResponse = Awaited<ReturnType<typeof VaccineControllerService.getAllVaccines>>;
export type VaccineControllerServiceGetAllVaccinesQueryResult<TData = VaccineControllerServiceGetAllVaccinesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useVaccineControllerServiceGetAllVaccinesKey = "VaccineControllerServiceGetAllVaccines";
export const UseVaccineControllerServiceGetAllVaccinesKeyFn = ({ page, pageSize, type }: {
  page?: number;
  pageSize?: number;
  type?: "ADULT" | "CHILD";
} = {}, queryKey?: Array<unknown>) => [useVaccineControllerServiceGetAllVaccinesKey, ...(queryKey ?? [{ page, pageSize, type }])];
export type ReferralControllerServiceGetReferralByUuidDefaultResponse = Awaited<ReturnType<typeof ReferralControllerService.getReferralByUuid>>;
export type ReferralControllerServiceGetReferralByUuidQueryResult<TData = ReferralControllerServiceGetReferralByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useReferralControllerServiceGetReferralByUuidKey = "ReferralControllerServiceGetReferralByUuid";
export const UseReferralControllerServiceGetReferralByUuidKeyFn = ({ referralByUuid }: {
  referralByUuid: string;
}, queryKey?: Array<unknown>) => [useReferralControllerServiceGetReferralByUuidKey, ...(queryKey ?? [{ referralByUuid }])];
export type ReferralControllerServiceGetAllReferralsDefaultResponse = Awaited<ReturnType<typeof ReferralControllerService.getAllReferrals>>;
export type ReferralControllerServiceGetAllReferralsQueryResult<TData = ReferralControllerServiceGetAllReferralsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useReferralControllerServiceGetAllReferralsKey = "ReferralControllerServiceGetAllReferrals";
export const UseReferralControllerServiceGetAllReferralsKeyFn = ({ createdStartDate, email, fax, page, patientUuid, phone, referralType, size, sort, stat }: {
  createdStartDate?: string;
  email?: string;
  fax?: string;
  page?: number;
  patientUuid: string;
  phone?: string;
  referralType?: "IMAGING" | "SPECIALIST";
  size?: number;
  sort?: string[];
  stat?: boolean;
}, queryKey?: Array<unknown>) => [useReferralControllerServiceGetAllReferralsKey, ...(queryKey ?? [{ createdStartDate, email, fax, page, patientUuid, phone, referralType, size, sort, stat }])];
export type PharmacyControllerServiceGetPharmacyByUuidDefaultResponse = Awaited<ReturnType<typeof PharmacyControllerService.getPharmacyByUuid>>;
export type PharmacyControllerServiceGetPharmacyByUuidQueryResult<TData = PharmacyControllerServiceGetPharmacyByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePharmacyControllerServiceGetPharmacyByUuidKey = "PharmacyControllerServiceGetPharmacyByUuid";
export const UsePharmacyControllerServiceGetPharmacyByUuidKeyFn = ({ uuid }: {
  uuid: string;
}, queryKey?: Array<unknown>) => [usePharmacyControllerServiceGetPharmacyByUuidKey, ...(queryKey ?? [{ uuid }])];
export type PharmacyControllerServiceGetAllPharmaciesDefaultResponse = Awaited<ReturnType<typeof PharmacyControllerService.getAllPharmacies>>;
export type PharmacyControllerServiceGetAllPharmaciesQueryResult<TData = PharmacyControllerServiceGetAllPharmaciesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePharmacyControllerServiceGetAllPharmaciesKey = "PharmacyControllerServiceGetAllPharmacies";
export const UsePharmacyControllerServiceGetAllPharmaciesKeyFn = ({ page, pageSize, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDirection?: string;
} = {}, queryKey?: Array<unknown>) => [usePharmacyControllerServiceGetAllPharmaciesKey, ...(queryKey ?? [{ page, pageSize, sortBy, sortDirection }])];
export type PatientVaccinationControllerServiceGetPatientVaccinationByUuidDefaultResponse = Awaited<ReturnType<typeof PatientVaccinationControllerService.getPatientVaccinationByUuid>>;
export type PatientVaccinationControllerServiceGetPatientVaccinationByUuidQueryResult<TData = PatientVaccinationControllerServiceGetPatientVaccinationByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePatientVaccinationControllerServiceGetPatientVaccinationByUuidKey = "PatientVaccinationControllerServiceGetPatientVaccinationByUuid";
export const UsePatientVaccinationControllerServiceGetPatientVaccinationByUuidKeyFn = ({ uuid }: {
  uuid: string;
}, queryKey?: Array<unknown>) => [usePatientVaccinationControllerServiceGetPatientVaccinationByUuidKey, ...(queryKey ?? [{ uuid }])];
export type PatientVaccinationControllerServiceGetAllPatientVaccinationDefaultResponse = Awaited<ReturnType<typeof PatientVaccinationControllerService.getAllPatientVaccination>>;
export type PatientVaccinationControllerServiceGetAllPatientVaccinationQueryResult<TData = PatientVaccinationControllerServiceGetAllPatientVaccinationDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePatientVaccinationControllerServiceGetAllPatientVaccinationKey = "PatientVaccinationControllerServiceGetAllPatientVaccination";
export const UsePatientVaccinationControllerServiceGetAllPatientVaccinationKeyFn = ({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: Array<unknown>) => [usePatientVaccinationControllerServiceGetAllPatientVaccinationKey, ...(queryKey ?? [{ page, pageSize, patientUuid, sortBy, sortDirection }])];
export type PatientVaccinationControllerServiceGetAllPatientVaccinationForVaccineTableDefaultResponse = Awaited<ReturnType<typeof PatientVaccinationControllerService.getAllPatientVaccinationForVaccineTable>>;
export type PatientVaccinationControllerServiceGetAllPatientVaccinationForVaccineTableQueryResult<TData = PatientVaccinationControllerServiceGetAllPatientVaccinationForVaccineTableDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePatientVaccinationControllerServiceGetAllPatientVaccinationForVaccineTableKey = "PatientVaccinationControllerServiceGetAllPatientVaccinationForVaccineTable";
export const UsePatientVaccinationControllerServiceGetAllPatientVaccinationForVaccineTableKeyFn = ({ patientUuid }: {
  patientUuid: string;
}, queryKey?: Array<unknown>) => [usePatientVaccinationControllerServiceGetAllPatientVaccinationForVaccineTableKey, ...(queryKey ?? [{ patientUuid }])];
export type PatientFlagControllerServiceGetPatientFlagByUuidDefaultResponse = Awaited<ReturnType<typeof PatientFlagControllerService.getPatientFlagByUuid>>;
export type PatientFlagControllerServiceGetPatientFlagByUuidQueryResult<TData = PatientFlagControllerServiceGetPatientFlagByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePatientFlagControllerServiceGetPatientFlagByUuidKey = "PatientFlagControllerServiceGetPatientFlagByUuid";
export const UsePatientFlagControllerServiceGetPatientFlagByUuidKeyFn = ({ uuid }: {
  uuid: string;
}, queryKey?: Array<unknown>) => [usePatientFlagControllerServiceGetPatientFlagByUuidKey, ...(queryKey ?? [{ uuid }])];
export type PatientFlagControllerServiceGetAllPatientFlagsDefaultResponse = Awaited<ReturnType<typeof PatientFlagControllerService.getAllPatientFlags>>;
export type PatientFlagControllerServiceGetAllPatientFlagsQueryResult<TData = PatientFlagControllerServiceGetAllPatientFlagsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePatientFlagControllerServiceGetAllPatientFlagsKey = "PatientFlagControllerServiceGetAllPatientFlags";
export const UsePatientFlagControllerServiceGetAllPatientFlagsKeyFn = ({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: Array<unknown>) => [usePatientFlagControllerServiceGetAllPatientFlagsKey, ...(queryKey ?? [{ page, pageSize, patientUuid, sortBy, sortDirection }])];
export type PastSurgicalHistoryControllerServiceGetPastSurgicalHistoryByUuidDefaultResponse = Awaited<ReturnType<typeof PastSurgicalHistoryControllerService.getPastSurgicalHistoryByUuid>>;
export type PastSurgicalHistoryControllerServiceGetPastSurgicalHistoryByUuidQueryResult<TData = PastSurgicalHistoryControllerServiceGetPastSurgicalHistoryByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePastSurgicalHistoryControllerServiceGetPastSurgicalHistoryByUuidKey = "PastSurgicalHistoryControllerServiceGetPastSurgicalHistoryByUuid";
export const UsePastSurgicalHistoryControllerServiceGetPastSurgicalHistoryByUuidKeyFn = ({ uuid }: {
  uuid: string;
}, queryKey?: Array<unknown>) => [usePastSurgicalHistoryControllerServiceGetPastSurgicalHistoryByUuidKey, ...(queryKey ?? [{ uuid }])];
export type PastSurgicalHistoryControllerServiceGetAllPastSurgicalHistoryDefaultResponse = Awaited<ReturnType<typeof PastSurgicalHistoryControllerService.getAllPastSurgicalHistory>>;
export type PastSurgicalHistoryControllerServiceGetAllPastSurgicalHistoryQueryResult<TData = PastSurgicalHistoryControllerServiceGetAllPastSurgicalHistoryDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePastSurgicalHistoryControllerServiceGetAllPastSurgicalHistoryKey = "PastSurgicalHistoryControllerServiceGetAllPastSurgicalHistory";
export const UsePastSurgicalHistoryControllerServiceGetAllPastSurgicalHistoryKeyFn = ({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: Array<unknown>) => [usePastSurgicalHistoryControllerServiceGetAllPastSurgicalHistoryKey, ...(queryKey ?? [{ page, pageSize, patientUuid, sortBy, sortDirection }])];
export type PastMedicalHistoryControllerServiceGetPastMedicalHistoryByUuidDefaultResponse = Awaited<ReturnType<typeof PastMedicalHistoryControllerService.getPastMedicalHistoryByUuid>>;
export type PastMedicalHistoryControllerServiceGetPastMedicalHistoryByUuidQueryResult<TData = PastMedicalHistoryControllerServiceGetPastMedicalHistoryByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePastMedicalHistoryControllerServiceGetPastMedicalHistoryByUuidKey = "PastMedicalHistoryControllerServiceGetPastMedicalHistoryByUuid";
export const UsePastMedicalHistoryControllerServiceGetPastMedicalHistoryByUuidKeyFn = ({ uuid }: {
  uuid: string;
}, queryKey?: Array<unknown>) => [usePastMedicalHistoryControllerServiceGetPastMedicalHistoryByUuidKey, ...(queryKey ?? [{ uuid }])];
export type PastMedicalHistoryControllerServiceGetAllPastMedicalHistoryDefaultResponse = Awaited<ReturnType<typeof PastMedicalHistoryControllerService.getAllPastMedicalHistory>>;
export type PastMedicalHistoryControllerServiceGetAllPastMedicalHistoryQueryResult<TData = PastMedicalHistoryControllerServiceGetAllPastMedicalHistoryDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePastMedicalHistoryControllerServiceGetAllPastMedicalHistoryKey = "PastMedicalHistoryControllerServiceGetAllPastMedicalHistory";
export const UsePastMedicalHistoryControllerServiceGetAllPastMedicalHistoryKeyFn = ({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: Array<unknown>) => [usePastMedicalHistoryControllerServiceGetAllPastMedicalHistoryKey, ...(queryKey ?? [{ page, pageSize, patientUuid, sortBy, sortDirection }])];
export type NoteControllerServiceGetNoteByUuidDefaultResponse = Awaited<ReturnType<typeof NoteControllerService.getNoteByUuid>>;
export type NoteControllerServiceGetNoteByUuidQueryResult<TData = NoteControllerServiceGetNoteByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useNoteControllerServiceGetNoteByUuidKey = "NoteControllerServiceGetNoteByUuid";
export const UseNoteControllerServiceGetNoteByUuidKeyFn = ({ noteByUuid }: {
  noteByUuid: string;
}, queryKey?: Array<unknown>) => [useNoteControllerServiceGetNoteByUuidKey, ...(queryKey ?? [{ noteByUuid }])];
export type NoteControllerServiceGetAllNotesDefaultResponse = Awaited<ReturnType<typeof NoteControllerService.getAllNotes>>;
export type NoteControllerServiceGetAllNotesQueryResult<TData = NoteControllerServiceGetAllNotesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useNoteControllerServiceGetAllNotesKey = "NoteControllerServiceGetAllNotes";
export const UseNoteControllerServiceGetAllNotesKeyFn = ({ createdDate, documentNote, modifiedDate, note, page, patientUuid, size, sort }: {
  createdDate?: string;
  documentNote?: "INTERNAL_NOTE" | "EXTERNAL_NOTE";
  modifiedDate?: string;
  note?: string;
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: Array<unknown>) => [useNoteControllerServiceGetAllNotesKey, ...(queryKey ?? [{ createdDate, documentNote, modifiedDate, note, page, patientUuid, size, sort }])];
export type MedicationControllerServiceGetMedicationByUuidDefaultResponse = Awaited<ReturnType<typeof MedicationControllerService.getMedicationByUuid>>;
export type MedicationControllerServiceGetMedicationByUuidQueryResult<TData = MedicationControllerServiceGetMedicationByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMedicationControllerServiceGetMedicationByUuidKey = "MedicationControllerServiceGetMedicationByUuid";
export const UseMedicationControllerServiceGetMedicationByUuidKeyFn = ({ medicationUuid }: {
  medicationUuid: string;
}, queryKey?: Array<unknown>) => [useMedicationControllerServiceGetMedicationByUuidKey, ...(queryKey ?? [{ medicationUuid }])];
export type MedicationControllerServiceGetAllMedicationsDefaultResponse = Awaited<ReturnType<typeof MedicationControllerService.getAllMedications>>;
export type MedicationControllerServiceGetAllMedicationsQueryResult<TData = MedicationControllerServiceGetAllMedicationsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMedicationControllerServiceGetAllMedicationsKey = "MedicationControllerServiceGetAllMedications";
export const UseMedicationControllerServiceGetAllMedicationsKeyFn = ({ medicationStatus, page, patientUuid, size, sort }: {
  medicationStatus?: "ACTIVE" | "PAST" | "PENDING" | "ONGOING" | "COMPLETED";
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: Array<unknown>) => [useMedicationControllerServiceGetAllMedicationsKey, ...(queryKey ?? [{ medicationStatus, page, patientUuid, size, sort }])];
export type LocationControllerServiceGetLocationByUuidDefaultResponse = Awaited<ReturnType<typeof LocationControllerService.getLocationByUuid>>;
export type LocationControllerServiceGetLocationByUuidQueryResult<TData = LocationControllerServiceGetLocationByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useLocationControllerServiceGetLocationByUuidKey = "LocationControllerServiceGetLocationByUuid";
export const UseLocationControllerServiceGetLocationByUuidKeyFn = ({ locationUuid }: {
  locationUuid: string;
}, queryKey?: Array<unknown>) => [useLocationControllerServiceGetLocationByUuidKey, ...(queryKey ?? [{ locationUuid }])];
export type LocationControllerServiceGetAllLocationDefaultResponse = Awaited<ReturnType<typeof LocationControllerService.getAllLocation>>;
export type LocationControllerServiceGetAllLocationQueryResult<TData = LocationControllerServiceGetAllLocationDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useLocationControllerServiceGetAllLocationKey = "LocationControllerServiceGetAllLocation";
export const UseLocationControllerServiceGetAllLocationKeyFn = ({ page, pageSize, searchString, sortBy, sortDirection, status }: {
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
  status?: boolean;
} = {}, queryKey?: Array<unknown>) => [useLocationControllerServiceGetAllLocationKey, ...(queryKey ?? [{ page, pageSize, searchString, sortBy, sortDirection, status }])];
export type LocationGroupControllerServiceGetLocationGroupByUuidDefaultResponse = Awaited<ReturnType<typeof LocationGroupControllerService.getLocationGroupByUuid>>;
export type LocationGroupControllerServiceGetLocationGroupByUuidQueryResult<TData = LocationGroupControllerServiceGetLocationGroupByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useLocationGroupControllerServiceGetLocationGroupByUuidKey = "LocationGroupControllerServiceGetLocationGroupByUuid";
export const UseLocationGroupControllerServiceGetLocationGroupByUuidKeyFn = ({ locationGroupUuid }: {
  locationGroupUuid: string;
}, queryKey?: Array<unknown>) => [useLocationGroupControllerServiceGetLocationGroupByUuidKey, ...(queryKey ?? [{ locationGroupUuid }])];
export type LocationGroupControllerServiceGetAllLocationGroupDefaultResponse = Awaited<ReturnType<typeof LocationGroupControllerService.getAllLocationGroup>>;
export type LocationGroupControllerServiceGetAllLocationGroupQueryResult<TData = LocationGroupControllerServiceGetAllLocationGroupDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useLocationGroupControllerServiceGetAllLocationGroupKey = "LocationGroupControllerServiceGetAllLocationGroup";
export const UseLocationGroupControllerServiceGetAllLocationGroupKeyFn = ({ page, pageSize, searchString, sortBy, sortDirection, status }: {
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
  status?: boolean;
} = {}, queryKey?: Array<unknown>) => [useLocationGroupControllerServiceGetAllLocationGroupKey, ...(queryKey ?? [{ page, pageSize, searchString, sortBy, sortDirection, status }])];
export type PatientLinkPharmacyControllerServiceGetAllPharmaciesForPatientDefaultResponse = Awaited<ReturnType<typeof PatientLinkPharmacyControllerService.getAllPharmaciesForPatient>>;
export type PatientLinkPharmacyControllerServiceGetAllPharmaciesForPatientQueryResult<TData = PatientLinkPharmacyControllerServiceGetAllPharmaciesForPatientDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePatientLinkPharmacyControllerServiceGetAllPharmaciesForPatientKey = "PatientLinkPharmacyControllerServiceGetAllPharmaciesForPatient";
export const UsePatientLinkPharmacyControllerServiceGetAllPharmaciesForPatientKeyFn = ({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: Array<unknown>) => [usePatientLinkPharmacyControllerServiceGetAllPharmaciesForPatientKey, ...(queryKey ?? [{ page, pageSize, patientUuid, sortBy, sortDirection }])];
export type InvoiceControllerServiceGetInvoiceByUuidDefaultResponse = Awaited<ReturnType<typeof InvoiceControllerService.getInvoiceByUuid>>;
export type InvoiceControllerServiceGetInvoiceByUuidQueryResult<TData = InvoiceControllerServiceGetInvoiceByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useInvoiceControllerServiceGetInvoiceByUuidKey = "InvoiceControllerServiceGetInvoiceByUuid";
export const UseInvoiceControllerServiceGetInvoiceByUuidKeyFn = ({ invoiceUuid }: {
  invoiceUuid: string;
}, queryKey?: Array<unknown>) => [useInvoiceControllerServiceGetInvoiceByUuidKey, ...(queryKey ?? [{ invoiceUuid }])];
export type InvoiceControllerServiceGetAllInvoicesDefaultResponse = Awaited<ReturnType<typeof InvoiceControllerService.getAllInvoices>>;
export type InvoiceControllerServiceGetAllInvoicesQueryResult<TData = InvoiceControllerServiceGetAllInvoicesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useInvoiceControllerServiceGetAllInvoicesKey = "InvoiceControllerServiceGetAllInvoices";
export const UseInvoiceControllerServiceGetAllInvoicesKeyFn = ({ invoiceChargeType, invoiceId, invoiceStatus, localDate, page, patientUuid, size, sort }: {
  invoiceChargeType?: "MEMBERSHIP_CHARGE" | "PROCEDURE_CHARGE" | "MEDICATION_CHARGE" | "LAB_CHARGE" | "PANEL_CHARGE";
  invoiceId?: string;
  invoiceStatus?: "PAID" | "PARTIALLY_PAID" | "UNPAID";
  localDate?: string;
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: Array<unknown>) => [useInvoiceControllerServiceGetAllInvoicesKey, ...(queryKey ?? [{ invoiceChargeType, invoiceId, invoiceStatus, localDate, page, patientUuid, size, sort }])];
export type InsuranceControllerServiceGetInsuranceByUuidDefaultResponse = Awaited<ReturnType<typeof InsuranceControllerService.getInsuranceByUuid>>;
export type InsuranceControllerServiceGetInsuranceByUuidQueryResult<TData = InsuranceControllerServiceGetInsuranceByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useInsuranceControllerServiceGetInsuranceByUuidKey = "InsuranceControllerServiceGetInsuranceByUuid";
export const UseInsuranceControllerServiceGetInsuranceByUuidKeyFn = ({ insuranceUuid }: {
  insuranceUuid: string;
}, queryKey?: Array<unknown>) => [useInsuranceControllerServiceGetInsuranceByUuidKey, ...(queryKey ?? [{ insuranceUuid }])];
export type InsuranceControllerServiceGetAllPatientInsuranceDefaultResponse = Awaited<ReturnType<typeof InsuranceControllerService.getAllPatientInsurance>>;
export type InsuranceControllerServiceGetAllPatientInsuranceQueryResult<TData = InsuranceControllerServiceGetAllPatientInsuranceDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useInsuranceControllerServiceGetAllPatientInsuranceKey = "InsuranceControllerServiceGetAllPatientInsurance";
export const UseInsuranceControllerServiceGetAllPatientInsuranceKeyFn = ({ page, pageSize, patientUuid, searchString, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: Array<unknown>) => [useInsuranceControllerServiceGetAllPatientInsuranceKey, ...(queryKey ?? [{ page, pageSize, patientUuid, searchString, sortBy, sortDirection }])];
export type ImagingResultControllerServiceGetImagingResultByUuidDefaultResponse = Awaited<ReturnType<typeof ImagingResultControllerService.getImagingResultByUuid>>;
export type ImagingResultControllerServiceGetImagingResultByUuidQueryResult<TData = ImagingResultControllerServiceGetImagingResultByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useImagingResultControllerServiceGetImagingResultByUuidKey = "ImagingResultControllerServiceGetImagingResultByUuid";
export const UseImagingResultControllerServiceGetImagingResultByUuidKeyFn = ({ imagingResultByUuid }: {
  imagingResultByUuid: string;
}, queryKey?: Array<unknown>) => [useImagingResultControllerServiceGetImagingResultByUuidKey, ...(queryKey ?? [{ imagingResultByUuid }])];
export type ImagingResultControllerServiceGetAllImagingResultsDefaultResponse = Awaited<ReturnType<typeof ImagingResultControllerService.getAllImagingResults>>;
export type ImagingResultControllerServiceGetAllImagingResultsQueryResult<TData = ImagingResultControllerServiceGetAllImagingResultsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useImagingResultControllerServiceGetAllImagingResultsKey = "ImagingResultControllerServiceGetAllImagingResults";
export const UseImagingResultControllerServiceGetAllImagingResultsKeyFn = ({ page, patientUuid, size, sort }: {
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: Array<unknown>) => [useImagingResultControllerServiceGetAllImagingResultsKey, ...(queryKey ?? [{ page, patientUuid, size, sort }])];
export type ImagingOrderControllerServiceGetImagingOrderByUuidDefaultResponse = Awaited<ReturnType<typeof ImagingOrderControllerService.getImagingOrderByUuid>>;
export type ImagingOrderControllerServiceGetImagingOrderByUuidQueryResult<TData = ImagingOrderControllerServiceGetImagingOrderByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useImagingOrderControllerServiceGetImagingOrderByUuidKey = "ImagingOrderControllerServiceGetImagingOrderByUuid";
export const UseImagingOrderControllerServiceGetImagingOrderByUuidKeyFn = ({ imagingOrderByUuid }: {
  imagingOrderByUuid: string;
}, queryKey?: Array<unknown>) => [useImagingOrderControllerServiceGetImagingOrderByUuidKey, ...(queryKey ?? [{ imagingOrderByUuid }])];
export type ImagingOrderControllerServiceGetAllImagingOrderDefaultResponse = Awaited<ReturnType<typeof ImagingOrderControllerService.getAllImagingOrder>>;
export type ImagingOrderControllerServiceGetAllImagingOrderQueryResult<TData = ImagingOrderControllerServiceGetAllImagingOrderDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useImagingOrderControllerServiceGetAllImagingOrderKey = "ImagingOrderControllerServiceGetAllImagingOrder";
export const UseImagingOrderControllerServiceGetAllImagingOrderKeyFn = ({ page, patientUuid, size, sort }: {
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: Array<unknown>) => [useImagingOrderControllerServiceGetAllImagingOrderKey, ...(queryKey ?? [{ page, patientUuid, size, sort }])];
export type IcdCodeControllerServiceGetIcdCodeByUuidDefaultResponse = Awaited<ReturnType<typeof IcdCodeControllerService.getIcdCodeByUuid>>;
export type IcdCodeControllerServiceGetIcdCodeByUuidQueryResult<TData = IcdCodeControllerServiceGetIcdCodeByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useIcdCodeControllerServiceGetIcdCodeByUuidKey = "IcdCodeControllerServiceGetIcdCodeByUuid";
export const UseIcdCodeControllerServiceGetIcdCodeByUuidKeyFn = ({ uuid }: {
  uuid: string;
}, queryKey?: Array<unknown>) => [useIcdCodeControllerServiceGetIcdCodeByUuidKey, ...(queryKey ?? [{ uuid }])];
export type IcdCodeControllerServiceGetAllIcdCodesDefaultResponse = Awaited<ReturnType<typeof IcdCodeControllerService.getAllIcdCodes>>;
export type IcdCodeControllerServiceGetAllIcdCodesQueryResult<TData = IcdCodeControllerServiceGetAllIcdCodesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useIcdCodeControllerServiceGetAllIcdCodesKey = "IcdCodeControllerServiceGetAllIcdCodes";
export const UseIcdCodeControllerServiceGetAllIcdCodesKeyFn = ({ page, pageSize, searchString, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
} = {}, queryKey?: Array<unknown>) => [useIcdCodeControllerServiceGetAllIcdCodesKey, ...(queryKey ?? [{ page, pageSize, searchString, sortBy, sortDirection }])];
export type FamilyHistoryControllerServiceGetFamilyHistoryByUuidDefaultResponse = Awaited<ReturnType<typeof FamilyHistoryControllerService.getFamilyHistoryByUuid>>;
export type FamilyHistoryControllerServiceGetFamilyHistoryByUuidQueryResult<TData = FamilyHistoryControllerServiceGetFamilyHistoryByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useFamilyHistoryControllerServiceGetFamilyHistoryByUuidKey = "FamilyHistoryControllerServiceGetFamilyHistoryByUuid";
export const UseFamilyHistoryControllerServiceGetFamilyHistoryByUuidKeyFn = ({ uuid }: {
  uuid: string;
}, queryKey?: Array<unknown>) => [useFamilyHistoryControllerServiceGetFamilyHistoryByUuidKey, ...(queryKey ?? [{ uuid }])];
export type FamilyHistoryControllerServiceGetAllFamilyHistoryDefaultResponse = Awaited<ReturnType<typeof FamilyHistoryControllerService.getAllFamilyHistory>>;
export type FamilyHistoryControllerServiceGetAllFamilyHistoryQueryResult<TData = FamilyHistoryControllerServiceGetAllFamilyHistoryDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useFamilyHistoryControllerServiceGetAllFamilyHistoryKey = "FamilyHistoryControllerServiceGetAllFamilyHistory";
export const UseFamilyHistoryControllerServiceGetAllFamilyHistoryKeyFn = ({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: Array<unknown>) => [useFamilyHistoryControllerServiceGetAllFamilyHistoryKey, ...(queryKey ?? [{ page, pageSize, patientUuid, sortBy, sortDirection }])];
export type DrugIntoleranceControllerServiceGetDrugIntoleranceByUuidDefaultResponse = Awaited<ReturnType<typeof DrugIntoleranceControllerService.getDrugIntoleranceByUuid>>;
export type DrugIntoleranceControllerServiceGetDrugIntoleranceByUuidQueryResult<TData = DrugIntoleranceControllerServiceGetDrugIntoleranceByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDrugIntoleranceControllerServiceGetDrugIntoleranceByUuidKey = "DrugIntoleranceControllerServiceGetDrugIntoleranceByUuid";
export const UseDrugIntoleranceControllerServiceGetDrugIntoleranceByUuidKeyFn = ({ drugIntoleranceUuid }: {
  drugIntoleranceUuid: string;
}, queryKey?: Array<unknown>) => [useDrugIntoleranceControllerServiceGetDrugIntoleranceByUuidKey, ...(queryKey ?? [{ drugIntoleranceUuid }])];
export type DrugIntoleranceControllerServiceGetAllDrugIntolerancesDefaultResponse = Awaited<ReturnType<typeof DrugIntoleranceControllerService.getAllDrugIntolerances>>;
export type DrugIntoleranceControllerServiceGetAllDrugIntolerancesQueryResult<TData = DrugIntoleranceControllerServiceGetAllDrugIntolerancesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDrugIntoleranceControllerServiceGetAllDrugIntolerancesKey = "DrugIntoleranceControllerServiceGetAllDrugIntolerances";
export const UseDrugIntoleranceControllerServiceGetAllDrugIntolerancesKeyFn = ({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: Array<unknown>) => [useDrugIntoleranceControllerServiceGetAllDrugIntolerancesKey, ...(queryKey ?? [{ page, pageSize, patientUuid, sortBy, sortDirection }])];
export type DocumentTypeControllerServiceGetDocumentTypeByUuidDefaultResponse = Awaited<ReturnType<typeof DocumentTypeControllerService.getDocumentTypeByUuid>>;
export type DocumentTypeControllerServiceGetDocumentTypeByUuidQueryResult<TData = DocumentTypeControllerServiceGetDocumentTypeByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDocumentTypeControllerServiceGetDocumentTypeByUuidKey = "DocumentTypeControllerServiceGetDocumentTypeByUuid";
export const UseDocumentTypeControllerServiceGetDocumentTypeByUuidKeyFn = ({ documentTypeUuid }: {
  documentTypeUuid: string;
}, queryKey?: Array<unknown>) => [useDocumentTypeControllerServiceGetDocumentTypeByUuidKey, ...(queryKey ?? [{ documentTypeUuid }])];
export type DocumentTypeControllerServiceGetAllDocumentTypesDefaultResponse = Awaited<ReturnType<typeof DocumentTypeControllerService.getAllDocumentTypes>>;
export type DocumentTypeControllerServiceGetAllDocumentTypesQueryResult<TData = DocumentTypeControllerServiceGetAllDocumentTypesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDocumentTypeControllerServiceGetAllDocumentTypesKey = "DocumentTypeControllerServiceGetAllDocumentTypes";
export const UseDocumentTypeControllerServiceGetAllDocumentTypesKeyFn = ({ documentType, page, size, sort }: {
  documentType?: string;
  page?: number;
  size?: number;
  sort?: string[];
} = {}, queryKey?: Array<unknown>) => [useDocumentTypeControllerServiceGetAllDocumentTypesKey, ...(queryKey ?? [{ documentType, page, size, sort }])];
export type DiagnosisControllerServiceGetDiagnosisByUuidDefaultResponse = Awaited<ReturnType<typeof DiagnosisControllerService.getDiagnosisByUuid>>;
export type DiagnosisControllerServiceGetDiagnosisByUuidQueryResult<TData = DiagnosisControllerServiceGetDiagnosisByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDiagnosisControllerServiceGetDiagnosisByUuidKey = "DiagnosisControllerServiceGetDiagnosisByUuid";
export const UseDiagnosisControllerServiceGetDiagnosisByUuidKeyFn = ({ uuid }: {
  uuid: string;
}, queryKey?: Array<unknown>) => [useDiagnosisControllerServiceGetDiagnosisByUuidKey, ...(queryKey ?? [{ uuid }])];
export type DiagnosisControllerServiceGetAllDiagnosesDefaultResponse = Awaited<ReturnType<typeof DiagnosisControllerService.getAllDiagnoses>>;
export type DiagnosisControllerServiceGetAllDiagnosesQueryResult<TData = DiagnosisControllerServiceGetAllDiagnosesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDiagnosisControllerServiceGetAllDiagnosesKey = "DiagnosisControllerServiceGetAllDiagnoses";
export const UseDiagnosisControllerServiceGetAllDiagnosesKeyFn = ({ page, pageSize, patientUuid, searchString, sortBy, sortDirection, status, type }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
  status?: "ACTIVE" | "HISTORICAL" | "RESOLVED";
  type?: "ACUTE" | "CHRONIC";
}, queryKey?: Array<unknown>) => [useDiagnosisControllerServiceGetAllDiagnosesKey, ...(queryKey ?? [{ page, pageSize, patientUuid, searchString, sortBy, sortDirection, status, type }])];
export type AllergyControllerServiceGetAllergyByUuidDefaultResponse = Awaited<ReturnType<typeof AllergyControllerService.getAllergyByUuid>>;
export type AllergyControllerServiceGetAllergyByUuidQueryResult<TData = AllergyControllerServiceGetAllergyByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAllergyControllerServiceGetAllergyByUuidKey = "AllergyControllerServiceGetAllergyByUuid";
export const UseAllergyControllerServiceGetAllergyByUuidKeyFn = ({ uuid }: {
  uuid: string;
}, queryKey?: Array<unknown>) => [useAllergyControllerServiceGetAllergyByUuidKey, ...(queryKey ?? [{ uuid }])];
export type AllergyControllerServiceGetAllAllergiesDefaultResponse = Awaited<ReturnType<typeof AllergyControllerService.getAllAllergies>>;
export type AllergyControllerServiceGetAllAllergiesQueryResult<TData = AllergyControllerServiceGetAllAllergiesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAllergyControllerServiceGetAllAllergiesKey = "AllergyControllerServiceGetAllAllergies";
export const UseAllergyControllerServiceGetAllAllergiesKeyFn = ({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: Array<unknown>) => [useAllergyControllerServiceGetAllAllergiesKey, ...(queryKey ?? [{ page, pageSize, patientUuid, sortBy, sortDirection }])];
export type DocumentControllerServiceGetDocumentByUuidDefaultResponse = Awaited<ReturnType<typeof DocumentControllerService.getDocumentByUuid>>;
export type DocumentControllerServiceGetDocumentByUuidQueryResult<TData = DocumentControllerServiceGetDocumentByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDocumentControllerServiceGetDocumentByUuidKey = "DocumentControllerServiceGetDocumentByUuid";
export const UseDocumentControllerServiceGetDocumentByUuidKeyFn = ({ documentUuid }: {
  documentUuid: string;
}, queryKey?: Array<unknown>) => [useDocumentControllerServiceGetDocumentByUuidKey, ...(queryKey ?? [{ documentUuid }])];
export type DocumentControllerServiceGetAllDocuments1DefaultResponse = Awaited<ReturnType<typeof DocumentControllerService.getAllDocuments1>>;
export type DocumentControllerServiceGetAllDocuments1QueryResult<TData = DocumentControllerServiceGetAllDocuments1DefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDocumentControllerServiceGetAllDocuments1Key = "DocumentControllerServiceGetAllDocuments1";
export const UseDocumentControllerServiceGetAllDocuments1KeyFn = ({ documentType, fileName, page, patientUuid, size, sort }: {
  documentType?: string;
  fileName?: string;
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: Array<unknown>) => [useDocumentControllerServiceGetAllDocuments1Key, ...(queryKey ?? [{ documentType, fileName, page, patientUuid, size, sort }])];
export type ContactDirectoryControllerServiceGetContactDirectoryUuidDefaultResponse = Awaited<ReturnType<typeof ContactDirectoryControllerService.getContactDirectoryUuid>>;
export type ContactDirectoryControllerServiceGetContactDirectoryUuidQueryResult<TData = ContactDirectoryControllerServiceGetContactDirectoryUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useContactDirectoryControllerServiceGetContactDirectoryUuidKey = "ContactDirectoryControllerServiceGetContactDirectoryUuid";
export const UseContactDirectoryControllerServiceGetContactDirectoryUuidKeyFn = ({ contactDirectoryUuid }: {
  contactDirectoryUuid: string;
}, queryKey?: Array<unknown>) => [useContactDirectoryControllerServiceGetContactDirectoryUuidKey, ...(queryKey ?? [{ contactDirectoryUuid }])];
export type ContactDirectoryControllerServiceGetAllContactDirectoryDefaultResponse = Awaited<ReturnType<typeof ContactDirectoryControllerService.getAllContactDirectory>>;
export type ContactDirectoryControllerServiceGetAllContactDirectoryQueryResult<TData = ContactDirectoryControllerServiceGetAllContactDirectoryDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useContactDirectoryControllerServiceGetAllContactDirectoryKey = "ContactDirectoryControllerServiceGetAllContactDirectory";
export const UseContactDirectoryControllerServiceGetAllContactDirectoryKeyFn = ({ page, referralType, size, sort }: {
  page?: number;
  referralType?: "IMAGING" | "SPECIALIST";
  size?: number;
  sort?: string[];
} = {}, queryKey?: Array<unknown>) => [useContactDirectoryControllerServiceGetAllContactDirectoryKey, ...(queryKey ?? [{ page, referralType, size, sort }])];
export type AwsControllerServiceGetFileDefaultResponse = Awaited<ReturnType<typeof AwsControllerService.getFile>>;
export type AwsControllerServiceGetFileQueryResult<TData = AwsControllerServiceGetFileDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAwsControllerServiceGetFileKey = "AwsControllerServiceGetFile";
export const UseAwsControllerServiceGetFileKeyFn = ({ key }: {
  key: string;
}, queryKey?: Array<unknown>) => [useAwsControllerServiceGetFileKey, ...(queryKey ?? [{ key }])];
export type AwsControllerServiceGetFile1DefaultResponse = Awaited<ReturnType<typeof AwsControllerService.getFile1>>;
export type AwsControllerServiceGetFile1QueryResult<TData = AwsControllerServiceGetFile1DefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAwsControllerServiceGetFile1Key = "AwsControllerServiceGetFile1";
export const UseAwsControllerServiceGetFile1KeyFn = ({ key }: {
  key: string;
}, queryKey?: Array<unknown>) => [useAwsControllerServiceGetFile1Key, ...(queryKey ?? [{ key }])];
export type ProcedureCodeControllerServiceGetProcedureCodesDefaultResponse = Awaited<ReturnType<typeof ProcedureCodeControllerService.getProcedureCodes>>;
export type ProcedureCodeControllerServiceGetProcedureCodesQueryResult<TData = ProcedureCodeControllerServiceGetProcedureCodesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useProcedureCodeControllerServiceGetProcedureCodesKey = "ProcedureCodeControllerServiceGetProcedureCodes";
export const UseProcedureCodeControllerServiceGetProcedureCodesKeyFn = ({ code, page, size, sort }: {
  code?: string;
  page?: number;
  size?: number;
  sort?: string[];
} = {}, queryKey?: Array<unknown>) => [useProcedureCodeControllerServiceGetProcedureCodesKey, ...(queryKey ?? [{ code, page, size, sort }])];
export type OrderStudyControllerServiceGetAllDocumentsDefaultResponse = Awaited<ReturnType<typeof OrderStudyControllerService.getAllDocuments>>;
export type OrderStudyControllerServiceGetAllDocumentsQueryResult<TData = OrderStudyControllerServiceGetAllDocumentsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useOrderStudyControllerServiceGetAllDocumentsKey = "OrderStudyControllerServiceGetAllDocuments";
export const UseOrderStudyControllerServiceGetAllDocumentsKeyFn = ({ page, size, sort, studyName }: {
  page?: number;
  size?: number;
  sort?: string[];
  studyName?: string;
} = {}, queryKey?: Array<unknown>) => [useOrderStudyControllerServiceGetAllDocumentsKey, ...(queryKey ?? [{ page, size, sort, studyName }])];
export type AuditHistoryControllerServiceGetAuditHistoryByUuidDefaultResponse = Awaited<ReturnType<typeof AuditHistoryControllerService.getAuditHistoryByUuid>>;
export type AuditHistoryControllerServiceGetAuditHistoryByUuidQueryResult<TData = AuditHistoryControllerServiceGetAuditHistoryByUuidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAuditHistoryControllerServiceGetAuditHistoryByUuidKey = "AuditHistoryControllerServiceGetAuditHistoryByUuid";
export const UseAuditHistoryControllerServiceGetAuditHistoryByUuidKeyFn = ({ auditUuid, entityName }: {
  auditUuid: string;
  entityName: string;
}, queryKey?: Array<unknown>) => [useAuditHistoryControllerServiceGetAuditHistoryByUuidKey, ...(queryKey ?? [{ auditUuid, entityName }])];
export type AuditHistoryControllerServiceGetAllAuditHistoryDefaultResponse = Awaited<ReturnType<typeof AuditHistoryControllerService.getAllAuditHistory>>;
export type AuditHistoryControllerServiceGetAllAuditHistoryQueryResult<TData = AuditHistoryControllerServiceGetAllAuditHistoryDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAuditHistoryControllerServiceGetAllAuditHistoryKey = "AuditHistoryControllerServiceGetAllAuditHistory";
export const UseAuditHistoryControllerServiceGetAllAuditHistoryKeyFn = ({ endDate, entityNames, page, patientUuid, size, sort, startDate }: {
  endDate?: string;
  entityNames: string[];
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
  startDate?: string;
}, queryKey?: Array<unknown>) => [useAuditHistoryControllerServiceGetAllAuditHistoryKey, ...(queryKey ?? [{ endDate, entityNames, page, patientUuid, size, sort, startDate }])];
export type PaymentTransactionControllerServiceCreatePaymentTransactionMutationResult = Awaited<ReturnType<typeof PaymentTransactionControllerService.createPaymentTransaction>>;
export type UserControllerServiceAddUserMutationResult = Awaited<ReturnType<typeof UserControllerService.addUser>>;
export type ProviderControllerServiceAddProviderMutationResult = Awaited<ReturnType<typeof ProviderControllerService.addProvider>>;
export type PlanControllerServiceCreatePlanMutationResult = Awaited<ReturnType<typeof PlanControllerService.createPlan>>;
export type PatientControllerServiceAddPatientMutationResult = Awaited<ReturnType<typeof PatientControllerService.addPatient>>;
export type LeadControllerServiceCreateLeadMutationResult = Awaited<ReturnType<typeof LeadControllerService.createLead>>;
export type VaccineControllerServiceCreateVaccineMutationResult = Awaited<ReturnType<typeof VaccineControllerService.createVaccine>>;
export type ReferralControllerServiceSaveReferralMutationResult = Awaited<ReturnType<typeof ReferralControllerService.saveReferral>>;
export type PharmacyControllerServiceAddPharmacyMutationResult = Awaited<ReturnType<typeof PharmacyControllerService.addPharmacy>>;
export type PatientVaccinationControllerServiceCreatePatientVaccinationMutationResult = Awaited<ReturnType<typeof PatientVaccinationControllerService.createPatientVaccination>>;
export type PatientFlagControllerServiceAddPatientFlagMutationResult = Awaited<ReturnType<typeof PatientFlagControllerService.addPatientFlag>>;
export type PastSurgicalHistoryControllerServiceAddPastSurgicalHistoryMutationResult = Awaited<ReturnType<typeof PastSurgicalHistoryControllerService.addPastSurgicalHistory>>;
export type PastMedicalHistoryControllerServiceAddPastMedicalHistoryMutationResult = Awaited<ReturnType<typeof PastMedicalHistoryControllerService.addPastMedicalHistory>>;
export type NoteControllerServiceSaveNoteMutationResult = Awaited<ReturnType<typeof NoteControllerService.saveNote>>;
export type MedicationControllerServiceSaveMedicationMutationResult = Awaited<ReturnType<typeof MedicationControllerService.saveMedication>>;
export type LocationControllerServiceAddLocationMutationResult = Awaited<ReturnType<typeof LocationControllerService.addLocation>>;
export type LocationGroupControllerServiceAddLocationGroupMutationResult = Awaited<ReturnType<typeof LocationGroupControllerService.addLocationGroup>>;
export type PatientLinkPharmacyControllerServiceLinkPharmacyMutationResult = Awaited<ReturnType<typeof PatientLinkPharmacyControllerService.linkPharmacy>>;
export type InvoiceControllerServiceSaveInvoiceMutationResult = Awaited<ReturnType<typeof InvoiceControllerService.saveInvoice>>;
export type InsuranceControllerServiceCreateInsuranceMutationResult = Awaited<ReturnType<typeof InsuranceControllerService.createInsurance>>;
export type ImagingResultControllerServiceSaveImagingResultMutationResult = Awaited<ReturnType<typeof ImagingResultControllerService.saveImagingResult>>;
export type ImagingOrderControllerServiceSaveImagingOrderMutationResult = Awaited<ReturnType<typeof ImagingOrderControllerService.saveImagingOrder>>;
export type IcdCodeControllerServiceCreateIcdCodeMutationResult = Awaited<ReturnType<typeof IcdCodeControllerService.createIcdCode>>;
export type FamilyHistoryControllerServiceAddFamilyHistoryMutationResult = Awaited<ReturnType<typeof FamilyHistoryControllerService.addFamilyHistory>>;
export type DrugIntoleranceControllerServiceAddDrugIntoleranceMutationResult = Awaited<ReturnType<typeof DrugIntoleranceControllerService.addDrugIntolerance>>;
export type DocumentTypeControllerServiceSaveDocumentTypeMutationResult = Awaited<ReturnType<typeof DocumentTypeControllerService.saveDocumentType>>;
export type DiagnosisControllerServiceAddDiagnosisMutationResult = Awaited<ReturnType<typeof DiagnosisControllerService.addDiagnosis>>;
export type AllergyControllerServiceAddAllergyMutationResult = Awaited<ReturnType<typeof AllergyControllerService.addAllergy>>;
export type DocumentControllerServiceSaveDocumentMutationResult = Awaited<ReturnType<typeof DocumentControllerService.saveDocument>>;
export type ContactDirectoryControllerServiceSaveContactDirectoryMutationResult = Awaited<ReturnType<typeof ContactDirectoryControllerService.saveContactDirectory>>;
export type AwsControllerServiceUploadImageAsMultipartMutationResult = Awaited<ReturnType<typeof AwsControllerService.uploadImageAsMultipart>>;
export type AwsControllerServiceUploadImageAsBase64MutationResult = Awaited<ReturnType<typeof AwsControllerService.uploadImageAsBase64>>;
export type AwsControllerServiceUploadDocumentAsMultipartMutationResult = Awaited<ReturnType<typeof AwsControllerService.uploadDocumentAsMultipart>>;
export type AwsControllerServiceUploadDocumentAsBase64MutationResult = Awaited<ReturnType<typeof AwsControllerService.uploadDocumentAsBase64>>;
export type PaymentTransactionControllerServiceUpdatePaymentTransactionMutationResult = Awaited<ReturnType<typeof PaymentTransactionControllerService.updatePaymentTransaction>>;
export type UserControllerServiceUpdateUserArchiveStatusMutationResult = Awaited<ReturnType<typeof UserControllerService.updateUserArchiveStatus>>;
export type UserControllerServiceUpdateUserMutationResult = Awaited<ReturnType<typeof UserControllerService.updateUser>>;
export type UserControllerServiceUpdateUserStatusMutationResult = Awaited<ReturnType<typeof UserControllerService.updateUserStatus>>;
export type ProviderControllerServiceUpdateProviderMutationResult = Awaited<ReturnType<typeof ProviderControllerService.updateProvider>>;
export type PlanControllerServiceUpdatePlanMutationResult = Awaited<ReturnType<typeof PlanControllerService.updatePlan>>;
export type PlanControllerServiceUpdatePlanDetailsMutationResult = Awaited<ReturnType<typeof PlanControllerService.updatePlanDetails>>;
export type PatientControllerServiceUpdatePatientMutationResult = Awaited<ReturnType<typeof PatientControllerService.updatePatient>>;
export type PatientControllerServiceCreateUpdatePatientMutationResult = Awaited<ReturnType<typeof PatientControllerService.createUpdatePatient>>;
export type LeadControllerServiceUpdateLeadMutationResult = Awaited<ReturnType<typeof LeadControllerService.updateLead>>;
export type LeadControllerServiceCreateUpdateLeadMutationResult = Awaited<ReturnType<typeof LeadControllerService.createUpdateLead>>;
export type VaccineControllerServiceUpdateVaccineMutationResult = Awaited<ReturnType<typeof VaccineControllerService.updateVaccine>>;
export type ReferralControllerServiceUpdateReferralByUuidMutationResult = Awaited<ReturnType<typeof ReferralControllerService.updateReferralByUuid>>;
export type PharmacyControllerServiceUpdatePharmacyMutationResult = Awaited<ReturnType<typeof PharmacyControllerService.updatePharmacy>>;
export type PatientVaccinationControllerServiceUpdatePatientVaccinationMutationResult = Awaited<ReturnType<typeof PatientVaccinationControllerService.updatePatientVaccination>>;
export type PatientFlagControllerServiceUpdatePatientFlagMutationResult = Awaited<ReturnType<typeof PatientFlagControllerService.updatePatientFlag>>;
export type PastSurgicalHistoryControllerServiceUpdatePastSurgicalHistoryMutationResult = Awaited<ReturnType<typeof PastSurgicalHistoryControllerService.updatePastSurgicalHistory>>;
export type PastMedicalHistoryControllerServiceUpdatePastMedicalHistoryMutationResult = Awaited<ReturnType<typeof PastMedicalHistoryControllerService.updatePastMedicalHistory>>;
export type NoteControllerServiceUpdateNoteByUuidMutationResult = Awaited<ReturnType<typeof NoteControllerService.updateNoteByUuid>>;
export type MedicationControllerServiceUpdateMedicationByUuidMutationResult = Awaited<ReturnType<typeof MedicationControllerService.updateMedicationByUuid>>;
export type LocationControllerServiceUpdateLocationMutationResult = Awaited<ReturnType<typeof LocationControllerService.updateLocation>>;
export type LocationGroupControllerServiceUpdateLocationGroupMutationResult = Awaited<ReturnType<typeof LocationGroupControllerService.updateLocationGroup>>;
export type PatientLinkPharmacyControllerServiceSetDefaultPharmacyMutationResult = Awaited<ReturnType<typeof PatientLinkPharmacyControllerService.setDefaultPharmacy>>;
export type InvoiceControllerServiceUpdateInvoiceByUuidMutationResult = Awaited<ReturnType<typeof InvoiceControllerService.updateInvoiceByUuid>>;
export type InsuranceControllerServiceUpdateInsuranceMutationResult = Awaited<ReturnType<typeof InsuranceControllerService.updateInsurance>>;
export type ImagingResultControllerServiceUpdateImagingResultMutationResult = Awaited<ReturnType<typeof ImagingResultControllerService.updateImagingResult>>;
export type ImagingOrderControllerServiceUpdateImagingOrderMutationResult = Awaited<ReturnType<typeof ImagingOrderControllerService.updateImagingOrder>>;
export type IcdCodeControllerServiceUpdateIcdCodeMutationResult = Awaited<ReturnType<typeof IcdCodeControllerService.updateIcdCode>>;
export type FamilyHistoryControllerServiceUpdateFamilyHistoryMutationResult = Awaited<ReturnType<typeof FamilyHistoryControllerService.updateFamilyHistory>>;
export type DrugIntoleranceControllerServiceUpdateDrugIntoleranceMutationResult = Awaited<ReturnType<typeof DrugIntoleranceControllerService.updateDrugIntolerance>>;
export type DocumentTypeControllerServiceUpdateDocumentTypeMutationResult = Awaited<ReturnType<typeof DocumentTypeControllerService.updateDocumentType>>;
export type DiagnosisControllerServiceUpdateDiagnosisMutationResult = Awaited<ReturnType<typeof DiagnosisControllerService.updateDiagnosis>>;
export type AllergyControllerServiceUpdateAllergyMutationResult = Awaited<ReturnType<typeof AllergyControllerService.updateAllergy>>;
export type ProviderControllerServiceUpdateProviderStatusMutationResult = Awaited<ReturnType<typeof ProviderControllerService.updateProviderStatus>>;
export type DiagnosisControllerServiceResolvedDiagnosisMutationResult = Awaited<ReturnType<typeof DiagnosisControllerService.resolvedDiagnosis>>;
export type PaymentTransactionControllerServiceDeletePaymentTransactionMutationResult = Awaited<ReturnType<typeof PaymentTransactionControllerService.deletePaymentTransaction>>;
export type ProviderControllerServiceDeleteProviderByUuidMutationResult = Awaited<ReturnType<typeof ProviderControllerService.deleteProviderByUuid>>;
export type PlanControllerServiceDeletePlanByUuidMutationResult = Awaited<ReturnType<typeof PlanControllerService.deletePlanByUuid>>;
export type PatientControllerServiceDeletePatientByUuidMutationResult = Awaited<ReturnType<typeof PatientControllerService.deletePatientByUuid>>;
export type LeadControllerServiceDeleteLeadByUuidMutationResult = Awaited<ReturnType<typeof LeadControllerService.deleteLeadByUuid>>;
export type VaccineControllerServiceDeleteVaccineByUuidMutationResult = Awaited<ReturnType<typeof VaccineControllerService.deleteVaccineByUuid>>;
export type ReferralControllerServiceDeleteReferralByUuidMutationResult = Awaited<ReturnType<typeof ReferralControllerService.deleteReferralByUuid>>;
export type PharmacyControllerServiceDeletePharmacyMutationResult = Awaited<ReturnType<typeof PharmacyControllerService.deletePharmacy>>;
export type PatientVaccinationControllerServiceDeletePatientVaccinationMutationResult = Awaited<ReturnType<typeof PatientVaccinationControllerService.deletePatientVaccination>>;
export type PatientFlagControllerServiceDeletePatientFlagMutationResult = Awaited<ReturnType<typeof PatientFlagControllerService.deletePatientFlag>>;
export type PastSurgicalHistoryControllerServiceDeletePastSurgicalHistoryByUuidMutationResult = Awaited<ReturnType<typeof PastSurgicalHistoryControllerService.deletePastSurgicalHistoryByUuid>>;
export type PastMedicalHistoryControllerServiceDeletePastMedicalHistoryByUuidMutationResult = Awaited<ReturnType<typeof PastMedicalHistoryControllerService.deletePastMedicalHistoryByUuid>>;
export type NoteControllerServiceDeleteNoteByUuidMutationResult = Awaited<ReturnType<typeof NoteControllerService.deleteNoteByUuid>>;
export type MedicationControllerServiceDeleteMedicationByUuidMutationResult = Awaited<ReturnType<typeof MedicationControllerService.deleteMedicationByUuid>>;
export type LocationControllerServiceDeleteLocationByUuidMutationResult = Awaited<ReturnType<typeof LocationControllerService.deleteLocationByUuid>>;
export type LocationGroupControllerServiceDeleteLocationGroupByUuidMutationResult = Awaited<ReturnType<typeof LocationGroupControllerService.deleteLocationGroupByUuid>>;
export type InvoiceControllerServiceDeleteInvoiceByUuidMutationResult = Awaited<ReturnType<typeof InvoiceControllerService.deleteInvoiceByUuid>>;
export type InsuranceControllerServiceDeleteInsuranceByUuidMutationResult = Awaited<ReturnType<typeof InsuranceControllerService.deleteInsuranceByUuid>>;
export type ImagingResultControllerServiceDeleteImagingResultByUuidMutationResult = Awaited<ReturnType<typeof ImagingResultControllerService.deleteImagingResultByUuid>>;
export type ImagingOrderControllerServiceDeleteImagingOrderByUuidMutationResult = Awaited<ReturnType<typeof ImagingOrderControllerService.deleteImagingOrderByUuid>>;
export type IcdCodeControllerServiceDeleteIcdCodeByUuidMutationResult = Awaited<ReturnType<typeof IcdCodeControllerService.deleteIcdCodeByUuid>>;
export type FamilyHistoryControllerServiceDeleteFamilyHistoryByUuidMutationResult = Awaited<ReturnType<typeof FamilyHistoryControllerService.deleteFamilyHistoryByUuid>>;
export type DrugIntoleranceControllerServiceDeleteDrugIntoleranceByUuidMutationResult = Awaited<ReturnType<typeof DrugIntoleranceControllerService.deleteDrugIntoleranceByUuid>>;
export type DocumentTypeControllerServiceDeleteDocumentTypeByUuidMutationResult = Awaited<ReturnType<typeof DocumentTypeControllerService.deleteDocumentTypeByUuid>>;
export type DiagnosisControllerServiceDeleteDiagnosisMutationResult = Awaited<ReturnType<typeof DiagnosisControllerService.deleteDiagnosis>>;
export type AllergyControllerServiceDeleteAllergyByUuIdMutationResult = Awaited<ReturnType<typeof AllergyControllerService.deleteAllergyByUuId>>;
export type DocumentControllerServiceDeleteDocumentByUuidMutationResult = Awaited<ReturnType<typeof DocumentControllerService.deleteDocumentByUuid>>;
export type ContactDirectoryControllerServiceDeleteContactDirectoryByUuidMutationResult = Awaited<ReturnType<typeof ContactDirectoryControllerService.deleteContactDirectoryByUuid>>;
