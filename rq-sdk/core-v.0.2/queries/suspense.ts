// generated with @7nohe/openapi-react-query-codegen@1.4.1 

import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { AllergyControllerService, AuditHistoryControllerService, AwsControllerService, ContactDirectoryControllerService, DiagnosisControllerService, DocumentControllerService, DocumentTypeControllerService, DrugIntoleranceControllerService, FamilyHistoryControllerService, IcdCodeControllerService, ImagingOrderControllerService, ImagingResultControllerService, InsuranceControllerService, InvoiceControllerService, LeadControllerService, LocationControllerService, LocationGroupControllerService, MedicationControllerService, NoteControllerService, OrderStudyControllerService, PastMedicalHistoryControllerService, PastSurgicalHistoryControllerService, PatientControllerService, PatientFlagControllerService, PatientLinkPharmacyControllerService, PatientVaccinationControllerService, PaymentTransactionControllerService, PharmacyControllerService, PlanControllerService, ProcedureCodeControllerService, ProviderControllerService, ReferralControllerService, UserControllerService, VaccineControllerService } from "../requests/services.gen";
import * as Common from "./common";
export const usePaymentTransactionControllerServiceGetPaymentTransactionByUuidSuspense = <TData = Common.PaymentTransactionControllerServiceGetPaymentTransactionByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paymentTransactionUuid }: {
  paymentTransactionUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePaymentTransactionControllerServiceGetPaymentTransactionByUuidKeyFn({ paymentTransactionUuid }, queryKey), queryFn: () => PaymentTransactionControllerService.getPaymentTransactionByUuid({ paymentTransactionUuid }) as TData, ...options });
export const usePaymentTransactionControllerServiceGetAllPaymentTransactionsSuspense = <TData = Common.PaymentTransactionControllerServiceGetAllPaymentTransactionsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, searchString, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePaymentTransactionControllerServiceGetAllPaymentTransactionsKeyFn({ page, pageSize, searchString, sortBy, sortDirection }, queryKey), queryFn: () => PaymentTransactionControllerService.getAllPaymentTransactions({ page, pageSize, searchString, sortBy, sortDirection }) as TData, ...options });
export const useUserControllerServiceGetAllUsersSuspense = <TData = Common.UserControllerServiceGetAllUsersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ archive, page, role, roleType, searchString, size, sortBy, sortDirection, status }: {
  archive?: boolean;
  page?: number;
  role?: string;
  roleType?: "ADMIN" | "USER" | "EHR" | "EMPLOYER" | "PATIENT" | "AGENT";
  searchString?: string;
  size?: number;
  sortBy?: string;
  sortDirection?: string;
  status?: boolean;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUserControllerServiceGetAllUsersKeyFn({ archive, page, role, roleType, searchString, size, sortBy, sortDirection, status }, queryKey), queryFn: () => UserControllerService.getAllUsers({ archive, page, role, roleType, searchString, size, sortBy, sortDirection, status }) as TData, ...options });
export const useUserControllerServiceGetUserSuspense = <TData = Common.UserControllerServiceGetUserDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ userId }: {
  userId: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUserControllerServiceGetUserKeyFn({ userId }, queryKey), queryFn: () => UserControllerService.getUser({ userId }) as TData, ...options });
export const useUserControllerServiceGetProfileSuspense = <TData = Common.UserControllerServiceGetProfileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUserControllerServiceGetProfileKeyFn(queryKey), queryFn: () => UserControllerService.getProfile() as TData, ...options });
export const useProviderControllerServiceGetProviderByUuidSuspense = <TData = Common.ProviderControllerServiceGetProviderByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ providerUuid }: {
  providerUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderControllerServiceGetProviderByUuidKeyFn({ providerUuid }, queryKey), queryFn: () => ProviderControllerService.getProviderByUuid({ providerUuid }) as TData, ...options });
export const useProviderControllerServiceGetAllProvidersSuspense = <TData = Common.ProviderControllerServiceGetAllProvidersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ filterBy, filterValue, latitude, longitude, page, pageSize, patientAge, searchString, sortBy, sortDirection, status, zipcode }: {
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
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderControllerServiceGetAllProvidersKeyFn({ filterBy, filterValue, latitude, longitude, page, pageSize, patientAge, searchString, sortBy, sortDirection, status, zipcode }, queryKey), queryFn: () => ProviderControllerService.getAllProviders({ filterBy, filterValue, latitude, longitude, page, pageSize, patientAge, searchString, sortBy, sortDirection, status, zipcode }) as TData, ...options });
export const usePlanControllerServiceGetPlanAmountSuspense = <TData = Common.PlanControllerServiceGetPlanAmountDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ primaryLeadUuid }: {
  primaryLeadUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePlanControllerServiceGetPlanAmountKeyFn({ primaryLeadUuid }, queryKey), queryFn: () => PlanControllerService.getPlanAmount({ primaryLeadUuid }) as TData, ...options });
export const usePlanControllerServiceGetPlanByUuidSuspense = <TData = Common.PlanControllerServiceGetPlanByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ planUuid }: {
  planUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePlanControllerServiceGetPlanByUuidKeyFn({ planUuid }, queryKey), queryFn: () => PlanControllerService.getPlanByUuid({ planUuid }) as TData, ...options });
export const usePlanControllerServiceGetAllPlanSuspense = <TData = Common.PlanControllerServiceGetAllPlanDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ planUuid }: {
  planUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePlanControllerServiceGetAllPlanKeyFn({ planUuid }, queryKey), queryFn: () => PlanControllerService.getAllPlan({ planUuid }) as TData, ...options });
export const usePlanControllerServiceCheckMyPlanSuspense = <TData = Common.PlanControllerServiceCheckMyPlanDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ defaultBillingPeriod, primaryLeadUuid }: {
  defaultBillingPeriod: "ANNUAL" | "MONTH" | "QUARTERLY" | "SEMI_ANNUALLY";
  primaryLeadUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePlanControllerServiceCheckMyPlanKeyFn({ defaultBillingPeriod, primaryLeadUuid }, queryKey), queryFn: () => PlanControllerService.checkMyPlan({ defaultBillingPeriod, primaryLeadUuid }) as TData, ...options });
export const usePlanControllerServiceGetAllPlan1Suspense = <TData = Common.PlanControllerServiceGetAllPlan1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ search }: {
  search?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePlanControllerServiceGetAllPlan1KeyFn({ search }, queryKey), queryFn: () => PlanControllerService.getAllPlan1({ search }) as TData, ...options });
export const usePatientControllerServiceGetPatientByUuidSuspense = <TData = Common.PatientControllerServiceGetPatientByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ patientUuid }: {
  patientUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetPatientByUuidKeyFn({ patientUuid }, queryKey), queryFn: () => PatientControllerService.getPatientByUuid({ patientUuid }) as TData, ...options });
export const usePatientControllerServiceGetPatientPlanDetailsSuspense = <TData = Common.PatientControllerServiceGetPatientPlanDetailsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ patientUuid }: {
  patientUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetPatientPlanDetailsKeyFn({ patientUuid }, queryKey), queryFn: () => PatientControllerService.getPatientPlanDetails({ patientUuid }) as TData, ...options });
export const usePatientControllerServiceGetPatientOverviewSuspense = <TData = Common.PatientControllerServiceGetPatientOverviewDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ patientUuid }: {
  patientUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetPatientOverviewKeyFn({ patientUuid }, queryKey), queryFn: () => PatientControllerService.getPatientOverview({ patientUuid }) as TData, ...options });
export const usePatientControllerServiceGetPatientMemberShipSuspense = <TData = Common.PatientControllerServiceGetPatientMemberShipDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ patientUuid }: {
  patientUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetPatientMemberShipKeyFn({ patientUuid }, queryKey), queryFn: () => PatientControllerService.getPatientMemberShip({ patientUuid }) as TData, ...options });
export const usePatientControllerServiceGetAllPatientSuspense = <TData = Common.PatientControllerServiceGetAllPatientDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ employerUuids, endDate, page, pageSize, searchString, sortBy, sortDirection, startDate, status }: {
  employerUuids?: string[];
  endDate?: string;
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
  startDate?: string;
  status?: boolean;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetAllPatientKeyFn({ employerUuids, endDate, page, pageSize, searchString, sortBy, sortDirection, startDate, status }, queryKey), queryFn: () => PatientControllerService.getAllPatient({ employerUuids, endDate, page, pageSize, searchString, sortBy, sortDirection, startDate, status }) as TData, ...options });
export const useLeadControllerServiceGetLeadByUuidSuspense = <TData = Common.LeadControllerServiceGetLeadByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ leadUuid }: {
  leadUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLeadControllerServiceGetLeadByUuidKeyFn({ leadUuid }, queryKey), queryFn: () => LeadControllerService.getLeadByUuid({ leadUuid }) as TData, ...options });
export const useLeadControllerServiceGetAllLeadSuspense = <TData = Common.LeadControllerServiceGetAllLeadDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, searchString, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLeadControllerServiceGetAllLeadKeyFn({ page, pageSize, searchString, sortBy, sortDirection }, queryKey), queryFn: () => LeadControllerService.getAllLead({ page, pageSize, searchString, sortBy, sortDirection }) as TData, ...options });
export const useVaccineControllerServiceGetVaccineByUuidSuspense = <TData = Common.VaccineControllerServiceGetVaccineByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseVaccineControllerServiceGetVaccineByUuidKeyFn({ uuid }, queryKey), queryFn: () => VaccineControllerService.getVaccineByUuid({ uuid }) as TData, ...options });
export const useVaccineControllerServiceGetAllVaccinesSuspense = <TData = Common.VaccineControllerServiceGetAllVaccinesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, type }: {
  page?: number;
  pageSize?: number;
  type?: "ADULT" | "CHILD";
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseVaccineControllerServiceGetAllVaccinesKeyFn({ page, pageSize, type }, queryKey), queryFn: () => VaccineControllerService.getAllVaccines({ page, pageSize, type }) as TData, ...options });
export const useReferralControllerServiceGetReferralByUuidSuspense = <TData = Common.ReferralControllerServiceGetReferralByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ referralByUuid }: {
  referralByUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseReferralControllerServiceGetReferralByUuidKeyFn({ referralByUuid }, queryKey), queryFn: () => ReferralControllerService.getReferralByUuid({ referralByUuid }) as TData, ...options });
export const useReferralControllerServiceGetAllReferralsSuspense = <TData = Common.ReferralControllerServiceGetAllReferralsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ createdStartDate, email, fax, page, patientUuid, phone, referralType, size, sort, stat }: {
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
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseReferralControllerServiceGetAllReferralsKeyFn({ createdStartDate, email, fax, page, patientUuid, phone, referralType, size, sort, stat }, queryKey), queryFn: () => ReferralControllerService.getAllReferrals({ createdStartDate, email, fax, page, patientUuid, phone, referralType, size, sort, stat }) as TData, ...options });
export const usePharmacyControllerServiceGetPharmacyByUuidSuspense = <TData = Common.PharmacyControllerServiceGetPharmacyByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePharmacyControllerServiceGetPharmacyByUuidKeyFn({ uuid }, queryKey), queryFn: () => PharmacyControllerService.getPharmacyByUuid({ uuid }) as TData, ...options });
export const usePharmacyControllerServiceGetAllPharmaciesSuspense = <TData = Common.PharmacyControllerServiceGetAllPharmaciesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDirection?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePharmacyControllerServiceGetAllPharmaciesKeyFn({ page, pageSize, sortBy, sortDirection }, queryKey), queryFn: () => PharmacyControllerService.getAllPharmacies({ page, pageSize, sortBy, sortDirection }) as TData, ...options });
export const usePatientVaccinationControllerServiceGetPatientVaccinationByUuidSuspense = <TData = Common.PatientVaccinationControllerServiceGetPatientVaccinationByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientVaccinationControllerServiceGetPatientVaccinationByUuidKeyFn({ uuid }, queryKey), queryFn: () => PatientVaccinationControllerService.getPatientVaccinationByUuid({ uuid }) as TData, ...options });
export const usePatientVaccinationControllerServiceGetAllPatientVaccinationSuspense = <TData = Common.PatientVaccinationControllerServiceGetAllPatientVaccinationDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientVaccinationControllerServiceGetAllPatientVaccinationKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }, queryKey), queryFn: () => PatientVaccinationControllerService.getAllPatientVaccination({ page, pageSize, patientUuid, sortBy, sortDirection }) as TData, ...options });
export const usePatientVaccinationControllerServiceGetAllPatientVaccinationForVaccineTableSuspense = <TData = Common.PatientVaccinationControllerServiceGetAllPatientVaccinationForVaccineTableDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ patientUuid }: {
  patientUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientVaccinationControllerServiceGetAllPatientVaccinationForVaccineTableKeyFn({ patientUuid }, queryKey), queryFn: () => PatientVaccinationControllerService.getAllPatientVaccinationForVaccineTable({ patientUuid }) as TData, ...options });
export const usePatientFlagControllerServiceGetPatientFlagByUuidSuspense = <TData = Common.PatientFlagControllerServiceGetPatientFlagByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientFlagControllerServiceGetPatientFlagByUuidKeyFn({ uuid }, queryKey), queryFn: () => PatientFlagControllerService.getPatientFlagByUuid({ uuid }) as TData, ...options });
export const usePatientFlagControllerServiceGetAllPatientFlagsSuspense = <TData = Common.PatientFlagControllerServiceGetAllPatientFlagsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientFlagControllerServiceGetAllPatientFlagsKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }, queryKey), queryFn: () => PatientFlagControllerService.getAllPatientFlags({ page, pageSize, patientUuid, sortBy, sortDirection }) as TData, ...options });
export const usePastSurgicalHistoryControllerServiceGetPastSurgicalHistoryByUuidSuspense = <TData = Common.PastSurgicalHistoryControllerServiceGetPastSurgicalHistoryByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePastSurgicalHistoryControllerServiceGetPastSurgicalHistoryByUuidKeyFn({ uuid }, queryKey), queryFn: () => PastSurgicalHistoryControllerService.getPastSurgicalHistoryByUuid({ uuid }) as TData, ...options });
export const usePastSurgicalHistoryControllerServiceGetAllPastSurgicalHistorySuspense = <TData = Common.PastSurgicalHistoryControllerServiceGetAllPastSurgicalHistoryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePastSurgicalHistoryControllerServiceGetAllPastSurgicalHistoryKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }, queryKey), queryFn: () => PastSurgicalHistoryControllerService.getAllPastSurgicalHistory({ page, pageSize, patientUuid, sortBy, sortDirection }) as TData, ...options });
export const usePastMedicalHistoryControllerServiceGetPastMedicalHistoryByUuidSuspense = <TData = Common.PastMedicalHistoryControllerServiceGetPastMedicalHistoryByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePastMedicalHistoryControllerServiceGetPastMedicalHistoryByUuidKeyFn({ uuid }, queryKey), queryFn: () => PastMedicalHistoryControllerService.getPastMedicalHistoryByUuid({ uuid }) as TData, ...options });
export const usePastMedicalHistoryControllerServiceGetAllPastMedicalHistorySuspense = <TData = Common.PastMedicalHistoryControllerServiceGetAllPastMedicalHistoryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePastMedicalHistoryControllerServiceGetAllPastMedicalHistoryKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }, queryKey), queryFn: () => PastMedicalHistoryControllerService.getAllPastMedicalHistory({ page, pageSize, patientUuid, sortBy, sortDirection }) as TData, ...options });
export const useNoteControllerServiceGetNoteByUuidSuspense = <TData = Common.NoteControllerServiceGetNoteByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ noteByUuid }: {
  noteByUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseNoteControllerServiceGetNoteByUuidKeyFn({ noteByUuid }, queryKey), queryFn: () => NoteControllerService.getNoteByUuid({ noteByUuid }) as TData, ...options });
export const useNoteControllerServiceGetAllNotesSuspense = <TData = Common.NoteControllerServiceGetAllNotesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ createdDate, documentNote, modifiedDate, note, page, patientUuid, size, sort }: {
  createdDate?: string;
  documentNote?: "INTERNAL_NOTE" | "EXTERNAL_NOTE";
  modifiedDate?: string;
  note?: string;
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseNoteControllerServiceGetAllNotesKeyFn({ createdDate, documentNote, modifiedDate, note, page, patientUuid, size, sort }, queryKey), queryFn: () => NoteControllerService.getAllNotes({ createdDate, documentNote, modifiedDate, note, page, patientUuid, size, sort }) as TData, ...options });
export const useMedicationControllerServiceGetMedicationByUuidSuspense = <TData = Common.MedicationControllerServiceGetMedicationByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ medicationUuid }: {
  medicationUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseMedicationControllerServiceGetMedicationByUuidKeyFn({ medicationUuid }, queryKey), queryFn: () => MedicationControllerService.getMedicationByUuid({ medicationUuid }) as TData, ...options });
export const useMedicationControllerServiceGetAllMedicationsSuspense = <TData = Common.MedicationControllerServiceGetAllMedicationsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ medicationStatus, page, patientUuid, size, sort }: {
  medicationStatus?: "ACTIVE" | "PAST" | "PENDING" | "ONGOING" | "COMPLETED";
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseMedicationControllerServiceGetAllMedicationsKeyFn({ medicationStatus, page, patientUuid, size, sort }, queryKey), queryFn: () => MedicationControllerService.getAllMedications({ medicationStatus, page, patientUuid, size, sort }) as TData, ...options });
export const useLocationControllerServiceGetLocationByUuidSuspense = <TData = Common.LocationControllerServiceGetLocationByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ locationUuid }: {
  locationUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLocationControllerServiceGetLocationByUuidKeyFn({ locationUuid }, queryKey), queryFn: () => LocationControllerService.getLocationByUuid({ locationUuid }) as TData, ...options });
export const useLocationControllerServiceGetAllLocationSuspense = <TData = Common.LocationControllerServiceGetAllLocationDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, searchString, sortBy, sortDirection, status }: {
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
  status?: boolean;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLocationControllerServiceGetAllLocationKeyFn({ page, pageSize, searchString, sortBy, sortDirection, status }, queryKey), queryFn: () => LocationControllerService.getAllLocation({ page, pageSize, searchString, sortBy, sortDirection, status }) as TData, ...options });
export const useLocationGroupControllerServiceGetLocationGroupByUuidSuspense = <TData = Common.LocationGroupControllerServiceGetLocationGroupByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ locationGroupUuid }: {
  locationGroupUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLocationGroupControllerServiceGetLocationGroupByUuidKeyFn({ locationGroupUuid }, queryKey), queryFn: () => LocationGroupControllerService.getLocationGroupByUuid({ locationGroupUuid }) as TData, ...options });
export const useLocationGroupControllerServiceGetAllLocationGroupSuspense = <TData = Common.LocationGroupControllerServiceGetAllLocationGroupDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, searchString, sortBy, sortDirection, status }: {
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
  status?: boolean;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLocationGroupControllerServiceGetAllLocationGroupKeyFn({ page, pageSize, searchString, sortBy, sortDirection, status }, queryKey), queryFn: () => LocationGroupControllerService.getAllLocationGroup({ page, pageSize, searchString, sortBy, sortDirection, status }) as TData, ...options });
export const usePatientLinkPharmacyControllerServiceGetAllPharmaciesForPatientSuspense = <TData = Common.PatientLinkPharmacyControllerServiceGetAllPharmaciesForPatientDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientLinkPharmacyControllerServiceGetAllPharmaciesForPatientKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }, queryKey), queryFn: () => PatientLinkPharmacyControllerService.getAllPharmaciesForPatient({ page, pageSize, patientUuid, sortBy, sortDirection }) as TData, ...options });
export const useInvoiceControllerServiceGetInvoiceByUuidSuspense = <TData = Common.InvoiceControllerServiceGetInvoiceByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ invoiceUuid }: {
  invoiceUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseInvoiceControllerServiceGetInvoiceByUuidKeyFn({ invoiceUuid }, queryKey), queryFn: () => InvoiceControllerService.getInvoiceByUuid({ invoiceUuid }) as TData, ...options });
export const useInvoiceControllerServiceGetAllInvoicesSuspense = <TData = Common.InvoiceControllerServiceGetAllInvoicesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ invoiceChargeType, invoiceId, invoiceStatus, localDate, page, patientUuid, size, sort }: {
  invoiceChargeType?: "MEMBERSHIP_CHARGE" | "PROCEDURE_CHARGE" | "MEDICATION_CHARGE" | "LAB_CHARGE" | "PANEL_CHARGE";
  invoiceId?: string;
  invoiceStatus?: "PAID" | "PARTIALLY_PAID" | "UNPAID";
  localDate?: string;
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseInvoiceControllerServiceGetAllInvoicesKeyFn({ invoiceChargeType, invoiceId, invoiceStatus, localDate, page, patientUuid, size, sort }, queryKey), queryFn: () => InvoiceControllerService.getAllInvoices({ invoiceChargeType, invoiceId, invoiceStatus, localDate, page, patientUuid, size, sort }) as TData, ...options });
export const useInsuranceControllerServiceGetInsuranceByUuidSuspense = <TData = Common.InsuranceControllerServiceGetInsuranceByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ insuranceUuid }: {
  insuranceUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseInsuranceControllerServiceGetInsuranceByUuidKeyFn({ insuranceUuid }, queryKey), queryFn: () => InsuranceControllerService.getInsuranceByUuid({ insuranceUuid }) as TData, ...options });
export const useInsuranceControllerServiceGetAllPatientInsuranceSuspense = <TData = Common.InsuranceControllerServiceGetAllPatientInsuranceDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, patientUuid, searchString, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseInsuranceControllerServiceGetAllPatientInsuranceKeyFn({ page, pageSize, patientUuid, searchString, sortBy, sortDirection }, queryKey), queryFn: () => InsuranceControllerService.getAllPatientInsurance({ page, pageSize, patientUuid, searchString, sortBy, sortDirection }) as TData, ...options });
export const useImagingResultControllerServiceGetImagingResultByUuidSuspense = <TData = Common.ImagingResultControllerServiceGetImagingResultByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ imagingResultByUuid }: {
  imagingResultByUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseImagingResultControllerServiceGetImagingResultByUuidKeyFn({ imagingResultByUuid }, queryKey), queryFn: () => ImagingResultControllerService.getImagingResultByUuid({ imagingResultByUuid }) as TData, ...options });
export const useImagingResultControllerServiceGetAllImagingResultsSuspense = <TData = Common.ImagingResultControllerServiceGetAllImagingResultsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUuid, size, sort }: {
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseImagingResultControllerServiceGetAllImagingResultsKeyFn({ page, patientUuid, size, sort }, queryKey), queryFn: () => ImagingResultControllerService.getAllImagingResults({ page, patientUuid, size, sort }) as TData, ...options });
export const useImagingOrderControllerServiceGetImagingOrderByUuidSuspense = <TData = Common.ImagingOrderControllerServiceGetImagingOrderByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ imagingOrderByUuid }: {
  imagingOrderByUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseImagingOrderControllerServiceGetImagingOrderByUuidKeyFn({ imagingOrderByUuid }, queryKey), queryFn: () => ImagingOrderControllerService.getImagingOrderByUuid({ imagingOrderByUuid }) as TData, ...options });
export const useImagingOrderControllerServiceGetAllImagingOrderSuspense = <TData = Common.ImagingOrderControllerServiceGetAllImagingOrderDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUuid, size, sort }: {
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseImagingOrderControllerServiceGetAllImagingOrderKeyFn({ page, patientUuid, size, sort }, queryKey), queryFn: () => ImagingOrderControllerService.getAllImagingOrder({ page, patientUuid, size, sort }) as TData, ...options });
export const useIcdCodeControllerServiceGetIcdCodeByUuidSuspense = <TData = Common.IcdCodeControllerServiceGetIcdCodeByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseIcdCodeControllerServiceGetIcdCodeByUuidKeyFn({ uuid }, queryKey), queryFn: () => IcdCodeControllerService.getIcdCodeByUuid({ uuid }) as TData, ...options });
export const useIcdCodeControllerServiceGetAllIcdCodesSuspense = <TData = Common.IcdCodeControllerServiceGetAllIcdCodesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, searchString, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseIcdCodeControllerServiceGetAllIcdCodesKeyFn({ page, pageSize, searchString, sortBy, sortDirection }, queryKey), queryFn: () => IcdCodeControllerService.getAllIcdCodes({ page, pageSize, searchString, sortBy, sortDirection }) as TData, ...options });
export const useFamilyHistoryControllerServiceGetFamilyHistoryByUuidSuspense = <TData = Common.FamilyHistoryControllerServiceGetFamilyHistoryByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseFamilyHistoryControllerServiceGetFamilyHistoryByUuidKeyFn({ uuid }, queryKey), queryFn: () => FamilyHistoryControllerService.getFamilyHistoryByUuid({ uuid }) as TData, ...options });
export const useFamilyHistoryControllerServiceGetAllFamilyHistorySuspense = <TData = Common.FamilyHistoryControllerServiceGetAllFamilyHistoryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseFamilyHistoryControllerServiceGetAllFamilyHistoryKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }, queryKey), queryFn: () => FamilyHistoryControllerService.getAllFamilyHistory({ page, pageSize, patientUuid, sortBy, sortDirection }) as TData, ...options });
export const useDrugIntoleranceControllerServiceGetDrugIntoleranceByUuidSuspense = <TData = Common.DrugIntoleranceControllerServiceGetDrugIntoleranceByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ drugIntoleranceUuid }: {
  drugIntoleranceUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDrugIntoleranceControllerServiceGetDrugIntoleranceByUuidKeyFn({ drugIntoleranceUuid }, queryKey), queryFn: () => DrugIntoleranceControllerService.getDrugIntoleranceByUuid({ drugIntoleranceUuid }) as TData, ...options });
export const useDrugIntoleranceControllerServiceGetAllDrugIntolerancesSuspense = <TData = Common.DrugIntoleranceControllerServiceGetAllDrugIntolerancesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDrugIntoleranceControllerServiceGetAllDrugIntolerancesKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }, queryKey), queryFn: () => DrugIntoleranceControllerService.getAllDrugIntolerances({ page, pageSize, patientUuid, sortBy, sortDirection }) as TData, ...options });
export const useDocumentTypeControllerServiceGetDocumentTypeByUuidSuspense = <TData = Common.DocumentTypeControllerServiceGetDocumentTypeByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ documentTypeUuid }: {
  documentTypeUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDocumentTypeControllerServiceGetDocumentTypeByUuidKeyFn({ documentTypeUuid }, queryKey), queryFn: () => DocumentTypeControllerService.getDocumentTypeByUuid({ documentTypeUuid }) as TData, ...options });
export const useDocumentTypeControllerServiceGetAllDocumentTypesSuspense = <TData = Common.DocumentTypeControllerServiceGetAllDocumentTypesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ documentType, page, size, sort }: {
  documentType?: string;
  page?: number;
  size?: number;
  sort?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDocumentTypeControllerServiceGetAllDocumentTypesKeyFn({ documentType, page, size, sort }, queryKey), queryFn: () => DocumentTypeControllerService.getAllDocumentTypes({ documentType, page, size, sort }) as TData, ...options });
export const useDiagnosisControllerServiceGetDiagnosisByUuidSuspense = <TData = Common.DiagnosisControllerServiceGetDiagnosisByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDiagnosisControllerServiceGetDiagnosisByUuidKeyFn({ uuid }, queryKey), queryFn: () => DiagnosisControllerService.getDiagnosisByUuid({ uuid }) as TData, ...options });
export const useDiagnosisControllerServiceGetAllDiagnosesSuspense = <TData = Common.DiagnosisControllerServiceGetAllDiagnosesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, patientUuid, searchString, sortBy, sortDirection, status, type }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
  status?: "ACTIVE" | "HISTORICAL" | "RESOLVED";
  type?: "ACUTE" | "CHRONIC";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDiagnosisControllerServiceGetAllDiagnosesKeyFn({ page, pageSize, patientUuid, searchString, sortBy, sortDirection, status, type }, queryKey), queryFn: () => DiagnosisControllerService.getAllDiagnoses({ page, pageSize, patientUuid, searchString, sortBy, sortDirection, status, type }) as TData, ...options });
export const useAllergyControllerServiceGetAllergyByUuidSuspense = <TData = Common.AllergyControllerServiceGetAllergyByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAllergyControllerServiceGetAllergyByUuidKeyFn({ uuid }, queryKey), queryFn: () => AllergyControllerService.getAllergyByUuid({ uuid }) as TData, ...options });
export const useAllergyControllerServiceGetAllAllergiesSuspense = <TData = Common.AllergyControllerServiceGetAllAllergiesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAllergyControllerServiceGetAllAllergiesKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }, queryKey), queryFn: () => AllergyControllerService.getAllAllergies({ page, pageSize, patientUuid, sortBy, sortDirection }) as TData, ...options });
export const useDocumentControllerServiceGetDocumentByUuidSuspense = <TData = Common.DocumentControllerServiceGetDocumentByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ documentUuid }: {
  documentUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDocumentControllerServiceGetDocumentByUuidKeyFn({ documentUuid }, queryKey), queryFn: () => DocumentControllerService.getDocumentByUuid({ documentUuid }) as TData, ...options });
export const useDocumentControllerServiceGetAllDocuments1Suspense = <TData = Common.DocumentControllerServiceGetAllDocuments1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ documentType, fileName, page, patientUuid, size, sort }: {
  documentType?: string;
  fileName?: string;
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDocumentControllerServiceGetAllDocuments1KeyFn({ documentType, fileName, page, patientUuid, size, sort }, queryKey), queryFn: () => DocumentControllerService.getAllDocuments1({ documentType, fileName, page, patientUuid, size, sort }) as TData, ...options });
export const useContactDirectoryControllerServiceGetContactDirectoryUuidSuspense = <TData = Common.ContactDirectoryControllerServiceGetContactDirectoryUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contactDirectoryUuid }: {
  contactDirectoryUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseContactDirectoryControllerServiceGetContactDirectoryUuidKeyFn({ contactDirectoryUuid }, queryKey), queryFn: () => ContactDirectoryControllerService.getContactDirectoryUuid({ contactDirectoryUuid }) as TData, ...options });
export const useContactDirectoryControllerServiceGetAllContactDirectorySuspense = <TData = Common.ContactDirectoryControllerServiceGetAllContactDirectoryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, referralType, size, sort }: {
  page?: number;
  referralType?: "IMAGING" | "SPECIALIST";
  size?: number;
  sort?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseContactDirectoryControllerServiceGetAllContactDirectoryKeyFn({ page, referralType, size, sort }, queryKey), queryFn: () => ContactDirectoryControllerService.getAllContactDirectory({ page, referralType, size, sort }) as TData, ...options });
export const useAwsControllerServiceGetFileSuspense = <TData = Common.AwsControllerServiceGetFileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ key }: {
  key: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAwsControllerServiceGetFileKeyFn({ key }, queryKey), queryFn: () => AwsControllerService.getFile({ key }) as TData, ...options });
export const useAwsControllerServiceGetFile1Suspense = <TData = Common.AwsControllerServiceGetFile1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ key }: {
  key: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAwsControllerServiceGetFile1KeyFn({ key }, queryKey), queryFn: () => AwsControllerService.getFile1({ key }) as TData, ...options });
export const useProcedureCodeControllerServiceGetProcedureCodesSuspense = <TData = Common.ProcedureCodeControllerServiceGetProcedureCodesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ code, page, size, sort }: {
  code?: string;
  page?: number;
  size?: number;
  sort?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProcedureCodeControllerServiceGetProcedureCodesKeyFn({ code, page, size, sort }, queryKey), queryFn: () => ProcedureCodeControllerService.getProcedureCodes({ code, page, size, sort }) as TData, ...options });
export const useOrderStudyControllerServiceGetAllDocumentsSuspense = <TData = Common.OrderStudyControllerServiceGetAllDocumentsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, size, sort, studyName }: {
  page?: number;
  size?: number;
  sort?: string[];
  studyName?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseOrderStudyControllerServiceGetAllDocumentsKeyFn({ page, size, sort, studyName }, queryKey), queryFn: () => OrderStudyControllerService.getAllDocuments({ page, size, sort, studyName }) as TData, ...options });
export const useAuditHistoryControllerServiceGetAuditHistoryByUuidSuspense = <TData = Common.AuditHistoryControllerServiceGetAuditHistoryByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ auditUuid, entityName }: {
  auditUuid: string;
  entityName: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAuditHistoryControllerServiceGetAuditHistoryByUuidKeyFn({ auditUuid, entityName }, queryKey), queryFn: () => AuditHistoryControllerService.getAuditHistoryByUuid({ auditUuid, entityName }) as TData, ...options });
export const useAuditHistoryControllerServiceGetAllAuditHistorySuspense = <TData = Common.AuditHistoryControllerServiceGetAllAuditHistoryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ endDate, entityNames, page, patientUuid, size, sort, startDate }: {
  endDate?: string;
  entityNames: string[];
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
  startDate?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAuditHistoryControllerServiceGetAllAuditHistoryKeyFn({ endDate, entityNames, page, patientUuid, size, sort, startDate }, queryKey), queryFn: () => AuditHistoryControllerService.getAllAuditHistory({ endDate, entityNames, page, patientUuid, size, sort, startDate }) as TData, ...options });
