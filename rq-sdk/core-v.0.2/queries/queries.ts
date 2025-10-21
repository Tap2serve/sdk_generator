// generated with @7nohe/openapi-react-query-codegen@1.4.1 

import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { AllergyControllerService, AuditHistoryControllerService, AwsControllerService, ContactDirectoryControllerService, DiagnosisControllerService, DocumentControllerService, DocumentTypeControllerService, DrugIntoleranceControllerService, FamilyHistoryControllerService, IcdCodeControllerService, ImagingOrderControllerService, ImagingResultControllerService, InsuranceControllerService, InvoiceControllerService, LeadControllerService, LocationControllerService, LocationGroupControllerService, MedicationControllerService, NoteControllerService, OrderStudyControllerService, PastMedicalHistoryControllerService, PastSurgicalHistoryControllerService, PatientControllerService, PatientFlagControllerService, PatientLinkPharmacyControllerService, PatientVaccinationControllerService, PaymentTransactionControllerService, PharmacyControllerService, PlanControllerService, ProcedureCodeControllerService, ProviderControllerService, ReferralControllerService, UserControllerService, VaccineControllerService } from "../requests/services.gen";
import { AllergyDto, ContactDirectoryRequest, DiagnosisDto, DocumentRequest, DocumentTypeRequest, DrugIntoleranceDto, FamilyHistoryDto, IcdCodeDto, ImagingOrderRequest, ImagingResultRequest, InsuranceDetailsDto, InvoiceRequest, LeadResponseDto, LocationGroupRequest, LocationRequestDto, MedicationRequest, NoteRequest, PastMedicalHistoryDto, PastSurgicalHistoryDto, PatientFlagDto, PatientLinkedPharmacyDto, PatientRequestDto, PatientVaccinationDto, PaymentTransactionRequestDto, PharmacyDto, PlanDetailsDto, PlanDto, ProviderRequestDto, ReferralRequest, UpdateDocumentTypeRequest, User, VaccineDto } from "../requests/types.gen";
import * as Common from "./common";
export const usePaymentTransactionControllerServiceGetPaymentTransactionByUuid = <TData = Common.PaymentTransactionControllerServiceGetPaymentTransactionByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paymentTransactionUuid }: {
  paymentTransactionUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePaymentTransactionControllerServiceGetPaymentTransactionByUuidKeyFn({ paymentTransactionUuid }, queryKey), queryFn: () => PaymentTransactionControllerService.getPaymentTransactionByUuid({ paymentTransactionUuid }) as TData, ...options });
export const usePaymentTransactionControllerServiceGetAllPaymentTransactions = <TData = Common.PaymentTransactionControllerServiceGetAllPaymentTransactionsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, searchString, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePaymentTransactionControllerServiceGetAllPaymentTransactionsKeyFn({ page, pageSize, searchString, sortBy, sortDirection }, queryKey), queryFn: () => PaymentTransactionControllerService.getAllPaymentTransactions({ page, pageSize, searchString, sortBy, sortDirection }) as TData, ...options });
export const useUserControllerServiceGetAllUsers = <TData = Common.UserControllerServiceGetAllUsersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ archive, page, role, roleType, searchString, size, sortBy, sortDirection, status }: {
  archive?: boolean;
  page?: number;
  role?: string;
  roleType?: "ADMIN" | "USER" | "EHR" | "EMPLOYER" | "PATIENT" | "AGENT";
  searchString?: string;
  size?: number;
  sortBy?: string;
  sortDirection?: string;
  status?: boolean;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUserControllerServiceGetAllUsersKeyFn({ archive, page, role, roleType, searchString, size, sortBy, sortDirection, status }, queryKey), queryFn: () => UserControllerService.getAllUsers({ archive, page, role, roleType, searchString, size, sortBy, sortDirection, status }) as TData, ...options });
export const useUserControllerServiceGetUser = <TData = Common.UserControllerServiceGetUserDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ userId }: {
  userId: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUserControllerServiceGetUserKeyFn({ userId }, queryKey), queryFn: () => UserControllerService.getUser({ userId }) as TData, ...options });
export const useUserControllerServiceGetProfile = <TData = Common.UserControllerServiceGetProfileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUserControllerServiceGetProfileKeyFn(queryKey), queryFn: () => UserControllerService.getProfile() as TData, ...options });
export const useProviderControllerServiceGetProviderByUuid = <TData = Common.ProviderControllerServiceGetProviderByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ providerUuid }: {
  providerUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderControllerServiceGetProviderByUuidKeyFn({ providerUuid }, queryKey), queryFn: () => ProviderControllerService.getProviderByUuid({ providerUuid }) as TData, ...options });
export const useProviderControllerServiceGetAllProviders = <TData = Common.ProviderControllerServiceGetAllProvidersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ filterBy, filterValue, latitude, longitude, page, pageSize, patientAge, searchString, sortBy, sortDirection, status, zipcode }: {
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
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderControllerServiceGetAllProvidersKeyFn({ filterBy, filterValue, latitude, longitude, page, pageSize, patientAge, searchString, sortBy, sortDirection, status, zipcode }, queryKey), queryFn: () => ProviderControllerService.getAllProviders({ filterBy, filterValue, latitude, longitude, page, pageSize, patientAge, searchString, sortBy, sortDirection, status, zipcode }) as TData, ...options });
export const usePlanControllerServiceGetPlanAmount = <TData = Common.PlanControllerServiceGetPlanAmountDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ primaryLeadUuid }: {
  primaryLeadUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePlanControllerServiceGetPlanAmountKeyFn({ primaryLeadUuid }, queryKey), queryFn: () => PlanControllerService.getPlanAmount({ primaryLeadUuid }) as TData, ...options });
export const usePlanControllerServiceGetPlanByUuid = <TData = Common.PlanControllerServiceGetPlanByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ planUuid }: {
  planUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePlanControllerServiceGetPlanByUuidKeyFn({ planUuid }, queryKey), queryFn: () => PlanControllerService.getPlanByUuid({ planUuid }) as TData, ...options });
export const usePlanControllerServiceGetAllPlan = <TData = Common.PlanControllerServiceGetAllPlanDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ planUuid }: {
  planUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePlanControllerServiceGetAllPlanKeyFn({ planUuid }, queryKey), queryFn: () => PlanControllerService.getAllPlan({ planUuid }) as TData, ...options });
export const usePlanControllerServiceCheckMyPlan = <TData = Common.PlanControllerServiceCheckMyPlanDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ defaultBillingPeriod, primaryLeadUuid }: {
  defaultBillingPeriod: "ANNUAL" | "MONTH" | "QUARTERLY" | "SEMI_ANNUALLY";
  primaryLeadUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePlanControllerServiceCheckMyPlanKeyFn({ defaultBillingPeriod, primaryLeadUuid }, queryKey), queryFn: () => PlanControllerService.checkMyPlan({ defaultBillingPeriod, primaryLeadUuid }) as TData, ...options });
export const usePlanControllerServiceGetAllPlan1 = <TData = Common.PlanControllerServiceGetAllPlan1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ search }: {
  search?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePlanControllerServiceGetAllPlan1KeyFn({ search }, queryKey), queryFn: () => PlanControllerService.getAllPlan1({ search }) as TData, ...options });
export const usePatientControllerServiceGetPatientByUuid = <TData = Common.PatientControllerServiceGetPatientByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ patientUuid }: {
  patientUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetPatientByUuidKeyFn({ patientUuid }, queryKey), queryFn: () => PatientControllerService.getPatientByUuid({ patientUuid }) as TData, ...options });
export const usePatientControllerServiceGetPatientPlanDetails = <TData = Common.PatientControllerServiceGetPatientPlanDetailsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ patientUuid }: {
  patientUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetPatientPlanDetailsKeyFn({ patientUuid }, queryKey), queryFn: () => PatientControllerService.getPatientPlanDetails({ patientUuid }) as TData, ...options });
export const usePatientControllerServiceGetPatientOverview = <TData = Common.PatientControllerServiceGetPatientOverviewDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ patientUuid }: {
  patientUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetPatientOverviewKeyFn({ patientUuid }, queryKey), queryFn: () => PatientControllerService.getPatientOverview({ patientUuid }) as TData, ...options });
export const usePatientControllerServiceGetPatientMemberShip = <TData = Common.PatientControllerServiceGetPatientMemberShipDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ patientUuid }: {
  patientUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetPatientMemberShipKeyFn({ patientUuid }, queryKey), queryFn: () => PatientControllerService.getPatientMemberShip({ patientUuid }) as TData, ...options });
export const usePatientControllerServiceGetAllPatient = <TData = Common.PatientControllerServiceGetAllPatientDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ employerUuids, endDate, page, pageSize, searchString, sortBy, sortDirection, startDate, status }: {
  employerUuids?: string[];
  endDate?: string;
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
  startDate?: string;
  status?: boolean;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetAllPatientKeyFn({ employerUuids, endDate, page, pageSize, searchString, sortBy, sortDirection, startDate, status }, queryKey), queryFn: () => PatientControllerService.getAllPatient({ employerUuids, endDate, page, pageSize, searchString, sortBy, sortDirection, startDate, status }) as TData, ...options });
export const useLeadControllerServiceGetLeadByUuid = <TData = Common.LeadControllerServiceGetLeadByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ leadUuid }: {
  leadUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLeadControllerServiceGetLeadByUuidKeyFn({ leadUuid }, queryKey), queryFn: () => LeadControllerService.getLeadByUuid({ leadUuid }) as TData, ...options });
export const useLeadControllerServiceGetAllLead = <TData = Common.LeadControllerServiceGetAllLeadDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, searchString, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLeadControllerServiceGetAllLeadKeyFn({ page, pageSize, searchString, sortBy, sortDirection }, queryKey), queryFn: () => LeadControllerService.getAllLead({ page, pageSize, searchString, sortBy, sortDirection }) as TData, ...options });
export const useVaccineControllerServiceGetVaccineByUuid = <TData = Common.VaccineControllerServiceGetVaccineByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseVaccineControllerServiceGetVaccineByUuidKeyFn({ uuid }, queryKey), queryFn: () => VaccineControllerService.getVaccineByUuid({ uuid }) as TData, ...options });
export const useVaccineControllerServiceGetAllVaccines = <TData = Common.VaccineControllerServiceGetAllVaccinesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, type }: {
  page?: number;
  pageSize?: number;
  type?: "ADULT" | "CHILD";
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseVaccineControllerServiceGetAllVaccinesKeyFn({ page, pageSize, type }, queryKey), queryFn: () => VaccineControllerService.getAllVaccines({ page, pageSize, type }) as TData, ...options });
export const useReferralControllerServiceGetReferralByUuid = <TData = Common.ReferralControllerServiceGetReferralByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ referralByUuid }: {
  referralByUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseReferralControllerServiceGetReferralByUuidKeyFn({ referralByUuid }, queryKey), queryFn: () => ReferralControllerService.getReferralByUuid({ referralByUuid }) as TData, ...options });
export const useReferralControllerServiceGetAllReferrals = <TData = Common.ReferralControllerServiceGetAllReferralsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ createdStartDate, email, fax, page, patientUuid, phone, referralType, size, sort, stat }: {
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
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseReferralControllerServiceGetAllReferralsKeyFn({ createdStartDate, email, fax, page, patientUuid, phone, referralType, size, sort, stat }, queryKey), queryFn: () => ReferralControllerService.getAllReferrals({ createdStartDate, email, fax, page, patientUuid, phone, referralType, size, sort, stat }) as TData, ...options });
export const usePharmacyControllerServiceGetPharmacyByUuid = <TData = Common.PharmacyControllerServiceGetPharmacyByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePharmacyControllerServiceGetPharmacyByUuidKeyFn({ uuid }, queryKey), queryFn: () => PharmacyControllerService.getPharmacyByUuid({ uuid }) as TData, ...options });
export const usePharmacyControllerServiceGetAllPharmacies = <TData = Common.PharmacyControllerServiceGetAllPharmaciesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDirection?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePharmacyControllerServiceGetAllPharmaciesKeyFn({ page, pageSize, sortBy, sortDirection }, queryKey), queryFn: () => PharmacyControllerService.getAllPharmacies({ page, pageSize, sortBy, sortDirection }) as TData, ...options });
export const usePatientVaccinationControllerServiceGetPatientVaccinationByUuid = <TData = Common.PatientVaccinationControllerServiceGetPatientVaccinationByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientVaccinationControllerServiceGetPatientVaccinationByUuidKeyFn({ uuid }, queryKey), queryFn: () => PatientVaccinationControllerService.getPatientVaccinationByUuid({ uuid }) as TData, ...options });
export const usePatientVaccinationControllerServiceGetAllPatientVaccination = <TData = Common.PatientVaccinationControllerServiceGetAllPatientVaccinationDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientVaccinationControllerServiceGetAllPatientVaccinationKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }, queryKey), queryFn: () => PatientVaccinationControllerService.getAllPatientVaccination({ page, pageSize, patientUuid, sortBy, sortDirection }) as TData, ...options });
export const usePatientVaccinationControllerServiceGetAllPatientVaccinationForVaccineTable = <TData = Common.PatientVaccinationControllerServiceGetAllPatientVaccinationForVaccineTableDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ patientUuid }: {
  patientUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientVaccinationControllerServiceGetAllPatientVaccinationForVaccineTableKeyFn({ patientUuid }, queryKey), queryFn: () => PatientVaccinationControllerService.getAllPatientVaccinationForVaccineTable({ patientUuid }) as TData, ...options });
export const usePatientFlagControllerServiceGetPatientFlagByUuid = <TData = Common.PatientFlagControllerServiceGetPatientFlagByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientFlagControllerServiceGetPatientFlagByUuidKeyFn({ uuid }, queryKey), queryFn: () => PatientFlagControllerService.getPatientFlagByUuid({ uuid }) as TData, ...options });
export const usePatientFlagControllerServiceGetAllPatientFlags = <TData = Common.PatientFlagControllerServiceGetAllPatientFlagsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientFlagControllerServiceGetAllPatientFlagsKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }, queryKey), queryFn: () => PatientFlagControllerService.getAllPatientFlags({ page, pageSize, patientUuid, sortBy, sortDirection }) as TData, ...options });
export const usePastSurgicalHistoryControllerServiceGetPastSurgicalHistoryByUuid = <TData = Common.PastSurgicalHistoryControllerServiceGetPastSurgicalHistoryByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePastSurgicalHistoryControllerServiceGetPastSurgicalHistoryByUuidKeyFn({ uuid }, queryKey), queryFn: () => PastSurgicalHistoryControllerService.getPastSurgicalHistoryByUuid({ uuid }) as TData, ...options });
export const usePastSurgicalHistoryControllerServiceGetAllPastSurgicalHistory = <TData = Common.PastSurgicalHistoryControllerServiceGetAllPastSurgicalHistoryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePastSurgicalHistoryControllerServiceGetAllPastSurgicalHistoryKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }, queryKey), queryFn: () => PastSurgicalHistoryControllerService.getAllPastSurgicalHistory({ page, pageSize, patientUuid, sortBy, sortDirection }) as TData, ...options });
export const usePastMedicalHistoryControllerServiceGetPastMedicalHistoryByUuid = <TData = Common.PastMedicalHistoryControllerServiceGetPastMedicalHistoryByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePastMedicalHistoryControllerServiceGetPastMedicalHistoryByUuidKeyFn({ uuid }, queryKey), queryFn: () => PastMedicalHistoryControllerService.getPastMedicalHistoryByUuid({ uuid }) as TData, ...options });
export const usePastMedicalHistoryControllerServiceGetAllPastMedicalHistory = <TData = Common.PastMedicalHistoryControllerServiceGetAllPastMedicalHistoryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePastMedicalHistoryControllerServiceGetAllPastMedicalHistoryKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }, queryKey), queryFn: () => PastMedicalHistoryControllerService.getAllPastMedicalHistory({ page, pageSize, patientUuid, sortBy, sortDirection }) as TData, ...options });
export const useNoteControllerServiceGetNoteByUuid = <TData = Common.NoteControllerServiceGetNoteByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ noteByUuid }: {
  noteByUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseNoteControllerServiceGetNoteByUuidKeyFn({ noteByUuid }, queryKey), queryFn: () => NoteControllerService.getNoteByUuid({ noteByUuid }) as TData, ...options });
export const useNoteControllerServiceGetAllNotes = <TData = Common.NoteControllerServiceGetAllNotesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ createdDate, documentNote, modifiedDate, note, page, patientUuid, size, sort }: {
  createdDate?: string;
  documentNote?: "INTERNAL_NOTE" | "EXTERNAL_NOTE";
  modifiedDate?: string;
  note?: string;
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseNoteControllerServiceGetAllNotesKeyFn({ createdDate, documentNote, modifiedDate, note, page, patientUuid, size, sort }, queryKey), queryFn: () => NoteControllerService.getAllNotes({ createdDate, documentNote, modifiedDate, note, page, patientUuid, size, sort }) as TData, ...options });
export const useMedicationControllerServiceGetMedicationByUuid = <TData = Common.MedicationControllerServiceGetMedicationByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ medicationUuid }: {
  medicationUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseMedicationControllerServiceGetMedicationByUuidKeyFn({ medicationUuid }, queryKey), queryFn: () => MedicationControllerService.getMedicationByUuid({ medicationUuid }) as TData, ...options });
export const useMedicationControllerServiceGetAllMedications = <TData = Common.MedicationControllerServiceGetAllMedicationsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ medicationStatus, page, patientUuid, size, sort }: {
  medicationStatus?: "ACTIVE" | "PAST" | "PENDING" | "ONGOING" | "COMPLETED";
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseMedicationControllerServiceGetAllMedicationsKeyFn({ medicationStatus, page, patientUuid, size, sort }, queryKey), queryFn: () => MedicationControllerService.getAllMedications({ medicationStatus, page, patientUuid, size, sort }) as TData, ...options });
export const useLocationControllerServiceGetLocationByUuid = <TData = Common.LocationControllerServiceGetLocationByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ locationUuid }: {
  locationUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLocationControllerServiceGetLocationByUuidKeyFn({ locationUuid }, queryKey), queryFn: () => LocationControllerService.getLocationByUuid({ locationUuid }) as TData, ...options });
export const useLocationControllerServiceGetAllLocation = <TData = Common.LocationControllerServiceGetAllLocationDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, searchString, sortBy, sortDirection, status }: {
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
  status?: boolean;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLocationControllerServiceGetAllLocationKeyFn({ page, pageSize, searchString, sortBy, sortDirection, status }, queryKey), queryFn: () => LocationControllerService.getAllLocation({ page, pageSize, searchString, sortBy, sortDirection, status }) as TData, ...options });
export const useLocationGroupControllerServiceGetLocationGroupByUuid = <TData = Common.LocationGroupControllerServiceGetLocationGroupByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ locationGroupUuid }: {
  locationGroupUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLocationGroupControllerServiceGetLocationGroupByUuidKeyFn({ locationGroupUuid }, queryKey), queryFn: () => LocationGroupControllerService.getLocationGroupByUuid({ locationGroupUuid }) as TData, ...options });
export const useLocationGroupControllerServiceGetAllLocationGroup = <TData = Common.LocationGroupControllerServiceGetAllLocationGroupDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, searchString, sortBy, sortDirection, status }: {
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
  status?: boolean;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLocationGroupControllerServiceGetAllLocationGroupKeyFn({ page, pageSize, searchString, sortBy, sortDirection, status }, queryKey), queryFn: () => LocationGroupControllerService.getAllLocationGroup({ page, pageSize, searchString, sortBy, sortDirection, status }) as TData, ...options });
export const usePatientLinkPharmacyControllerServiceGetAllPharmaciesForPatient = <TData = Common.PatientLinkPharmacyControllerServiceGetAllPharmaciesForPatientDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientLinkPharmacyControllerServiceGetAllPharmaciesForPatientKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }, queryKey), queryFn: () => PatientLinkPharmacyControllerService.getAllPharmaciesForPatient({ page, pageSize, patientUuid, sortBy, sortDirection }) as TData, ...options });
export const useInvoiceControllerServiceGetInvoiceByUuid = <TData = Common.InvoiceControllerServiceGetInvoiceByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ invoiceUuid }: {
  invoiceUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseInvoiceControllerServiceGetInvoiceByUuidKeyFn({ invoiceUuid }, queryKey), queryFn: () => InvoiceControllerService.getInvoiceByUuid({ invoiceUuid }) as TData, ...options });
export const useInvoiceControllerServiceGetAllInvoices = <TData = Common.InvoiceControllerServiceGetAllInvoicesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ invoiceChargeType, invoiceId, invoiceStatus, localDate, page, patientUuid, size, sort }: {
  invoiceChargeType?: "MEMBERSHIP_CHARGE" | "PROCEDURE_CHARGE" | "MEDICATION_CHARGE" | "LAB_CHARGE" | "PANEL_CHARGE";
  invoiceId?: string;
  invoiceStatus?: "PAID" | "PARTIALLY_PAID" | "UNPAID";
  localDate?: string;
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseInvoiceControllerServiceGetAllInvoicesKeyFn({ invoiceChargeType, invoiceId, invoiceStatus, localDate, page, patientUuid, size, sort }, queryKey), queryFn: () => InvoiceControllerService.getAllInvoices({ invoiceChargeType, invoiceId, invoiceStatus, localDate, page, patientUuid, size, sort }) as TData, ...options });
export const useInsuranceControllerServiceGetInsuranceByUuid = <TData = Common.InsuranceControllerServiceGetInsuranceByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ insuranceUuid }: {
  insuranceUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseInsuranceControllerServiceGetInsuranceByUuidKeyFn({ insuranceUuid }, queryKey), queryFn: () => InsuranceControllerService.getInsuranceByUuid({ insuranceUuid }) as TData, ...options });
export const useInsuranceControllerServiceGetAllPatientInsurance = <TData = Common.InsuranceControllerServiceGetAllPatientInsuranceDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, patientUuid, searchString, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseInsuranceControllerServiceGetAllPatientInsuranceKeyFn({ page, pageSize, patientUuid, searchString, sortBy, sortDirection }, queryKey), queryFn: () => InsuranceControllerService.getAllPatientInsurance({ page, pageSize, patientUuid, searchString, sortBy, sortDirection }) as TData, ...options });
export const useImagingResultControllerServiceGetImagingResultByUuid = <TData = Common.ImagingResultControllerServiceGetImagingResultByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ imagingResultByUuid }: {
  imagingResultByUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseImagingResultControllerServiceGetImagingResultByUuidKeyFn({ imagingResultByUuid }, queryKey), queryFn: () => ImagingResultControllerService.getImagingResultByUuid({ imagingResultByUuid }) as TData, ...options });
export const useImagingResultControllerServiceGetAllImagingResults = <TData = Common.ImagingResultControllerServiceGetAllImagingResultsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUuid, size, sort }: {
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseImagingResultControllerServiceGetAllImagingResultsKeyFn({ page, patientUuid, size, sort }, queryKey), queryFn: () => ImagingResultControllerService.getAllImagingResults({ page, patientUuid, size, sort }) as TData, ...options });
export const useImagingOrderControllerServiceGetImagingOrderByUuid = <TData = Common.ImagingOrderControllerServiceGetImagingOrderByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ imagingOrderByUuid }: {
  imagingOrderByUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseImagingOrderControllerServiceGetImagingOrderByUuidKeyFn({ imagingOrderByUuid }, queryKey), queryFn: () => ImagingOrderControllerService.getImagingOrderByUuid({ imagingOrderByUuid }) as TData, ...options });
export const useImagingOrderControllerServiceGetAllImagingOrder = <TData = Common.ImagingOrderControllerServiceGetAllImagingOrderDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUuid, size, sort }: {
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseImagingOrderControllerServiceGetAllImagingOrderKeyFn({ page, patientUuid, size, sort }, queryKey), queryFn: () => ImagingOrderControllerService.getAllImagingOrder({ page, patientUuid, size, sort }) as TData, ...options });
export const useIcdCodeControllerServiceGetIcdCodeByUuid = <TData = Common.IcdCodeControllerServiceGetIcdCodeByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseIcdCodeControllerServiceGetIcdCodeByUuidKeyFn({ uuid }, queryKey), queryFn: () => IcdCodeControllerService.getIcdCodeByUuid({ uuid }) as TData, ...options });
export const useIcdCodeControllerServiceGetAllIcdCodes = <TData = Common.IcdCodeControllerServiceGetAllIcdCodesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, searchString, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseIcdCodeControllerServiceGetAllIcdCodesKeyFn({ page, pageSize, searchString, sortBy, sortDirection }, queryKey), queryFn: () => IcdCodeControllerService.getAllIcdCodes({ page, pageSize, searchString, sortBy, sortDirection }) as TData, ...options });
export const useFamilyHistoryControllerServiceGetFamilyHistoryByUuid = <TData = Common.FamilyHistoryControllerServiceGetFamilyHistoryByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseFamilyHistoryControllerServiceGetFamilyHistoryByUuidKeyFn({ uuid }, queryKey), queryFn: () => FamilyHistoryControllerService.getFamilyHistoryByUuid({ uuid }) as TData, ...options });
export const useFamilyHistoryControllerServiceGetAllFamilyHistory = <TData = Common.FamilyHistoryControllerServiceGetAllFamilyHistoryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseFamilyHistoryControllerServiceGetAllFamilyHistoryKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }, queryKey), queryFn: () => FamilyHistoryControllerService.getAllFamilyHistory({ page, pageSize, patientUuid, sortBy, sortDirection }) as TData, ...options });
export const useDrugIntoleranceControllerServiceGetDrugIntoleranceByUuid = <TData = Common.DrugIntoleranceControllerServiceGetDrugIntoleranceByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ drugIntoleranceUuid }: {
  drugIntoleranceUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDrugIntoleranceControllerServiceGetDrugIntoleranceByUuidKeyFn({ drugIntoleranceUuid }, queryKey), queryFn: () => DrugIntoleranceControllerService.getDrugIntoleranceByUuid({ drugIntoleranceUuid }) as TData, ...options });
export const useDrugIntoleranceControllerServiceGetAllDrugIntolerances = <TData = Common.DrugIntoleranceControllerServiceGetAllDrugIntolerancesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDrugIntoleranceControllerServiceGetAllDrugIntolerancesKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }, queryKey), queryFn: () => DrugIntoleranceControllerService.getAllDrugIntolerances({ page, pageSize, patientUuid, sortBy, sortDirection }) as TData, ...options });
export const useDocumentTypeControllerServiceGetDocumentTypeByUuid = <TData = Common.DocumentTypeControllerServiceGetDocumentTypeByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ documentTypeUuid }: {
  documentTypeUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDocumentTypeControllerServiceGetDocumentTypeByUuidKeyFn({ documentTypeUuid }, queryKey), queryFn: () => DocumentTypeControllerService.getDocumentTypeByUuid({ documentTypeUuid }) as TData, ...options });
export const useDocumentTypeControllerServiceGetAllDocumentTypes = <TData = Common.DocumentTypeControllerServiceGetAllDocumentTypesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ documentType, page, size, sort }: {
  documentType?: string;
  page?: number;
  size?: number;
  sort?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDocumentTypeControllerServiceGetAllDocumentTypesKeyFn({ documentType, page, size, sort }, queryKey), queryFn: () => DocumentTypeControllerService.getAllDocumentTypes({ documentType, page, size, sort }) as TData, ...options });
export const useDiagnosisControllerServiceGetDiagnosisByUuid = <TData = Common.DiagnosisControllerServiceGetDiagnosisByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDiagnosisControllerServiceGetDiagnosisByUuidKeyFn({ uuid }, queryKey), queryFn: () => DiagnosisControllerService.getDiagnosisByUuid({ uuid }) as TData, ...options });
export const useDiagnosisControllerServiceGetAllDiagnoses = <TData = Common.DiagnosisControllerServiceGetAllDiagnosesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, patientUuid, searchString, sortBy, sortDirection, status, type }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
  status?: "ACTIVE" | "HISTORICAL" | "RESOLVED";
  type?: "ACUTE" | "CHRONIC";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDiagnosisControllerServiceGetAllDiagnosesKeyFn({ page, pageSize, patientUuid, searchString, sortBy, sortDirection, status, type }, queryKey), queryFn: () => DiagnosisControllerService.getAllDiagnoses({ page, pageSize, patientUuid, searchString, sortBy, sortDirection, status, type }) as TData, ...options });
export const useAllergyControllerServiceGetAllergyByUuid = <TData = Common.AllergyControllerServiceGetAllergyByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAllergyControllerServiceGetAllergyByUuidKeyFn({ uuid }, queryKey), queryFn: () => AllergyControllerService.getAllergyByUuid({ uuid }) as TData, ...options });
export const useAllergyControllerServiceGetAllAllergies = <TData = Common.AllergyControllerServiceGetAllAllergiesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAllergyControllerServiceGetAllAllergiesKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }, queryKey), queryFn: () => AllergyControllerService.getAllAllergies({ page, pageSize, patientUuid, sortBy, sortDirection }) as TData, ...options });
export const useDocumentControllerServiceGetDocumentByUuid = <TData = Common.DocumentControllerServiceGetDocumentByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ documentUuid }: {
  documentUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDocumentControllerServiceGetDocumentByUuidKeyFn({ documentUuid }, queryKey), queryFn: () => DocumentControllerService.getDocumentByUuid({ documentUuid }) as TData, ...options });
export const useDocumentControllerServiceGetAllDocuments1 = <TData = Common.DocumentControllerServiceGetAllDocuments1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ documentType, fileName, page, patientUuid, size, sort }: {
  documentType?: string;
  fileName?: string;
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDocumentControllerServiceGetAllDocuments1KeyFn({ documentType, fileName, page, patientUuid, size, sort }, queryKey), queryFn: () => DocumentControllerService.getAllDocuments1({ documentType, fileName, page, patientUuid, size, sort }) as TData, ...options });
export const useContactDirectoryControllerServiceGetContactDirectoryUuid = <TData = Common.ContactDirectoryControllerServiceGetContactDirectoryUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contactDirectoryUuid }: {
  contactDirectoryUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseContactDirectoryControllerServiceGetContactDirectoryUuidKeyFn({ contactDirectoryUuid }, queryKey), queryFn: () => ContactDirectoryControllerService.getContactDirectoryUuid({ contactDirectoryUuid }) as TData, ...options });
export const useContactDirectoryControllerServiceGetAllContactDirectory = <TData = Common.ContactDirectoryControllerServiceGetAllContactDirectoryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, referralType, size, sort }: {
  page?: number;
  referralType?: "IMAGING" | "SPECIALIST";
  size?: number;
  sort?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseContactDirectoryControllerServiceGetAllContactDirectoryKeyFn({ page, referralType, size, sort }, queryKey), queryFn: () => ContactDirectoryControllerService.getAllContactDirectory({ page, referralType, size, sort }) as TData, ...options });
export const useAwsControllerServiceGetFile = <TData = Common.AwsControllerServiceGetFileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ key }: {
  key: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAwsControllerServiceGetFileKeyFn({ key }, queryKey), queryFn: () => AwsControllerService.getFile({ key }) as TData, ...options });
export const useAwsControllerServiceGetFile1 = <TData = Common.AwsControllerServiceGetFile1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ key }: {
  key: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAwsControllerServiceGetFile1KeyFn({ key }, queryKey), queryFn: () => AwsControllerService.getFile1({ key }) as TData, ...options });
export const useProcedureCodeControllerServiceGetProcedureCodes = <TData = Common.ProcedureCodeControllerServiceGetProcedureCodesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ code, page, size, sort }: {
  code?: string;
  page?: number;
  size?: number;
  sort?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProcedureCodeControllerServiceGetProcedureCodesKeyFn({ code, page, size, sort }, queryKey), queryFn: () => ProcedureCodeControllerService.getProcedureCodes({ code, page, size, sort }) as TData, ...options });
export const useOrderStudyControllerServiceGetAllDocuments = <TData = Common.OrderStudyControllerServiceGetAllDocumentsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, size, sort, studyName }: {
  page?: number;
  size?: number;
  sort?: string[];
  studyName?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseOrderStudyControllerServiceGetAllDocumentsKeyFn({ page, size, sort, studyName }, queryKey), queryFn: () => OrderStudyControllerService.getAllDocuments({ page, size, sort, studyName }) as TData, ...options });
export const useAuditHistoryControllerServiceGetAuditHistoryByUuid = <TData = Common.AuditHistoryControllerServiceGetAuditHistoryByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ auditUuid, entityName }: {
  auditUuid: string;
  entityName: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAuditHistoryControllerServiceGetAuditHistoryByUuidKeyFn({ auditUuid, entityName }, queryKey), queryFn: () => AuditHistoryControllerService.getAuditHistoryByUuid({ auditUuid, entityName }) as TData, ...options });
export const useAuditHistoryControllerServiceGetAllAuditHistory = <TData = Common.AuditHistoryControllerServiceGetAllAuditHistoryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ endDate, entityNames, page, patientUuid, size, sort, startDate }: {
  endDate?: string;
  entityNames: string[];
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
  startDate?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAuditHistoryControllerServiceGetAllAuditHistoryKeyFn({ endDate, entityNames, page, patientUuid, size, sort, startDate }, queryKey), queryFn: () => AuditHistoryControllerService.getAllAuditHistory({ endDate, entityNames, page, patientUuid, size, sort, startDate }) as TData, ...options });
export const usePaymentTransactionControllerServiceCreatePaymentTransaction = <TData = Common.PaymentTransactionControllerServiceCreatePaymentTransactionMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PaymentTransactionRequestDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PaymentTransactionRequestDto;
}, TContext>({ mutationFn: ({ requestBody }) => PaymentTransactionControllerService.createPaymentTransaction({ requestBody }) as unknown as Promise<TData>, ...options });
export const useUserControllerServiceAddUser = <TData = Common.UserControllerServiceAddUserMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: User;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: User;
}, TContext>({ mutationFn: ({ requestBody }) => UserControllerService.addUser({ requestBody }) as unknown as Promise<TData>, ...options });
export const useProviderControllerServiceAddProvider = <TData = Common.ProviderControllerServiceAddProviderMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ProviderRequestDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ProviderRequestDto;
}, TContext>({ mutationFn: ({ requestBody }) => ProviderControllerService.addProvider({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePlanControllerServiceCreatePlan = <TData = Common.PlanControllerServiceCreatePlanMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PlanDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PlanDto;
}, TContext>({ mutationFn: ({ requestBody }) => PlanControllerService.createPlan({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientControllerServiceAddPatient = <TData = Common.PatientControllerServiceAddPatientMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PatientRequestDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PatientRequestDto;
}, TContext>({ mutationFn: ({ requestBody }) => PatientControllerService.addPatient({ requestBody }) as unknown as Promise<TData>, ...options });
export const useLeadControllerServiceCreateLead = <TData = Common.LeadControllerServiceCreateLeadMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: LeadResponseDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: LeadResponseDto;
}, TContext>({ mutationFn: ({ requestBody }) => LeadControllerService.createLead({ requestBody }) as unknown as Promise<TData>, ...options });
export const useVaccineControllerServiceCreateVaccine = <TData = Common.VaccineControllerServiceCreateVaccineMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: VaccineDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: VaccineDto;
}, TContext>({ mutationFn: ({ requestBody }) => VaccineControllerService.createVaccine({ requestBody }) as unknown as Promise<TData>, ...options });
export const useReferralControllerServiceSaveReferral = <TData = Common.ReferralControllerServiceSaveReferralMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ReferralRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ReferralRequest;
}, TContext>({ mutationFn: ({ requestBody }) => ReferralControllerService.saveReferral({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePharmacyControllerServiceAddPharmacy = <TData = Common.PharmacyControllerServiceAddPharmacyMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PharmacyDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PharmacyDto;
}, TContext>({ mutationFn: ({ requestBody }) => PharmacyControllerService.addPharmacy({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientVaccinationControllerServiceCreatePatientVaccination = <TData = Common.PatientVaccinationControllerServiceCreatePatientVaccinationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PatientVaccinationDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PatientVaccinationDto;
}, TContext>({ mutationFn: ({ requestBody }) => PatientVaccinationControllerService.createPatientVaccination({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientFlagControllerServiceAddPatientFlag = <TData = Common.PatientFlagControllerServiceAddPatientFlagMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PatientFlagDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PatientFlagDto;
}, TContext>({ mutationFn: ({ requestBody }) => PatientFlagControllerService.addPatientFlag({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePastSurgicalHistoryControllerServiceAddPastSurgicalHistory = <TData = Common.PastSurgicalHistoryControllerServiceAddPastSurgicalHistoryMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PastSurgicalHistoryDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PastSurgicalHistoryDto;
}, TContext>({ mutationFn: ({ requestBody }) => PastSurgicalHistoryControllerService.addPastSurgicalHistory({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePastMedicalHistoryControllerServiceAddPastMedicalHistory = <TData = Common.PastMedicalHistoryControllerServiceAddPastMedicalHistoryMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PastMedicalHistoryDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PastMedicalHistoryDto;
}, TContext>({ mutationFn: ({ requestBody }) => PastMedicalHistoryControllerService.addPastMedicalHistory({ requestBody }) as unknown as Promise<TData>, ...options });
export const useNoteControllerServiceSaveNote = <TData = Common.NoteControllerServiceSaveNoteMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: NoteRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: NoteRequest;
}, TContext>({ mutationFn: ({ requestBody }) => NoteControllerService.saveNote({ requestBody }) as unknown as Promise<TData>, ...options });
export const useMedicationControllerServiceSaveMedication = <TData = Common.MedicationControllerServiceSaveMedicationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: MedicationRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: MedicationRequest;
}, TContext>({ mutationFn: ({ requestBody }) => MedicationControllerService.saveMedication({ requestBody }) as unknown as Promise<TData>, ...options });
export const useLocationControllerServiceAddLocation = <TData = Common.LocationControllerServiceAddLocationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: LocationRequestDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: LocationRequestDto;
}, TContext>({ mutationFn: ({ requestBody }) => LocationControllerService.addLocation({ requestBody }) as unknown as Promise<TData>, ...options });
export const useLocationGroupControllerServiceAddLocationGroup = <TData = Common.LocationGroupControllerServiceAddLocationGroupMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: LocationGroupRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: LocationGroupRequest;
}, TContext>({ mutationFn: ({ requestBody }) => LocationGroupControllerService.addLocationGroup({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientLinkPharmacyControllerServiceLinkPharmacy = <TData = Common.PatientLinkPharmacyControllerServiceLinkPharmacyMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PatientLinkedPharmacyDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PatientLinkedPharmacyDto;
}, TContext>({ mutationFn: ({ requestBody }) => PatientLinkPharmacyControllerService.linkPharmacy({ requestBody }) as unknown as Promise<TData>, ...options });
export const useInvoiceControllerServiceSaveInvoice = <TData = Common.InvoiceControllerServiceSaveInvoiceMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: InvoiceRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: InvoiceRequest;
}, TContext>({ mutationFn: ({ requestBody }) => InvoiceControllerService.saveInvoice({ requestBody }) as unknown as Promise<TData>, ...options });
export const useInsuranceControllerServiceCreateInsurance = <TData = Common.InsuranceControllerServiceCreateInsuranceMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: InsuranceDetailsDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: InsuranceDetailsDto;
}, TContext>({ mutationFn: ({ requestBody }) => InsuranceControllerService.createInsurance({ requestBody }) as unknown as Promise<TData>, ...options });
export const useImagingResultControllerServiceSaveImagingResult = <TData = Common.ImagingResultControllerServiceSaveImagingResultMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ImagingResultRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ImagingResultRequest;
}, TContext>({ mutationFn: ({ requestBody }) => ImagingResultControllerService.saveImagingResult({ requestBody }) as unknown as Promise<TData>, ...options });
export const useImagingOrderControllerServiceSaveImagingOrder = <TData = Common.ImagingOrderControllerServiceSaveImagingOrderMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ImagingOrderRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ImagingOrderRequest;
}, TContext>({ mutationFn: ({ requestBody }) => ImagingOrderControllerService.saveImagingOrder({ requestBody }) as unknown as Promise<TData>, ...options });
export const useIcdCodeControllerServiceCreateIcdCode = <TData = Common.IcdCodeControllerServiceCreateIcdCodeMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: IcdCodeDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: IcdCodeDto;
}, TContext>({ mutationFn: ({ requestBody }) => IcdCodeControllerService.createIcdCode({ requestBody }) as unknown as Promise<TData>, ...options });
export const useFamilyHistoryControllerServiceAddFamilyHistory = <TData = Common.FamilyHistoryControllerServiceAddFamilyHistoryMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: FamilyHistoryDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: FamilyHistoryDto;
}, TContext>({ mutationFn: ({ requestBody }) => FamilyHistoryControllerService.addFamilyHistory({ requestBody }) as unknown as Promise<TData>, ...options });
export const useDrugIntoleranceControllerServiceAddDrugIntolerance = <TData = Common.DrugIntoleranceControllerServiceAddDrugIntoleranceMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: DrugIntoleranceDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: DrugIntoleranceDto;
}, TContext>({ mutationFn: ({ requestBody }) => DrugIntoleranceControllerService.addDrugIntolerance({ requestBody }) as unknown as Promise<TData>, ...options });
export const useDocumentTypeControllerServiceSaveDocumentType = <TData = Common.DocumentTypeControllerServiceSaveDocumentTypeMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: DocumentTypeRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: DocumentTypeRequest;
}, TContext>({ mutationFn: ({ requestBody }) => DocumentTypeControllerService.saveDocumentType({ requestBody }) as unknown as Promise<TData>, ...options });
export const useDiagnosisControllerServiceAddDiagnosis = <TData = Common.DiagnosisControllerServiceAddDiagnosisMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: DiagnosisDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: DiagnosisDto;
}, TContext>({ mutationFn: ({ requestBody }) => DiagnosisControllerService.addDiagnosis({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAllergyControllerServiceAddAllergy = <TData = Common.AllergyControllerServiceAddAllergyMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: AllergyDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: AllergyDto;
}, TContext>({ mutationFn: ({ requestBody }) => AllergyControllerService.addAllergy({ requestBody }) as unknown as Promise<TData>, ...options });
export const useDocumentControllerServiceSaveDocument = <TData = Common.DocumentControllerServiceSaveDocumentMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: DocumentRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: DocumentRequest;
}, TContext>({ mutationFn: ({ requestBody }) => DocumentControllerService.saveDocument({ requestBody }) as unknown as Promise<TData>, ...options });
export const useContactDirectoryControllerServiceSaveContactDirectory = <TData = Common.ContactDirectoryControllerServiceSaveContactDirectoryMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ContactDirectoryRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ContactDirectoryRequest;
}, TContext>({ mutationFn: ({ requestBody }) => ContactDirectoryControllerService.saveContactDirectory({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAwsControllerServiceUploadImageAsMultipart = <TData = Common.AwsControllerServiceUploadImageAsMultipartMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  referenceType: "LOCATION_PROFILE" | "PROVIDER_PROFILE" | "PATIENT_DOCUMENTS" | "PATIENT_PROFILE" | "LAB_ORDER" | "INSURANCE";
  requestBody?: { file: Blob | File; };
  userUuid?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  referenceType: "LOCATION_PROFILE" | "PROVIDER_PROFILE" | "PATIENT_DOCUMENTS" | "PATIENT_PROFILE" | "LAB_ORDER" | "INSURANCE";
  requestBody?: { file: Blob | File; };
  userUuid?: string;
}, TContext>({ mutationFn: ({ referenceType, requestBody, userUuid }) => AwsControllerService.uploadImageAsMultipart({ referenceType, requestBody, userUuid }) as unknown as Promise<TData>, ...options });
export const useAwsControllerServiceUploadImageAsBase64 = <TData = Common.AwsControllerServiceUploadImageAsBase64MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  base64: string;
  referenceType: "LOCATION_PROFILE" | "PROVIDER_PROFILE" | "PATIENT_DOCUMENTS" | "PATIENT_PROFILE" | "LAB_ORDER" | "INSURANCE";
  userUuid?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  base64: string;
  referenceType: "LOCATION_PROFILE" | "PROVIDER_PROFILE" | "PATIENT_DOCUMENTS" | "PATIENT_PROFILE" | "LAB_ORDER" | "INSURANCE";
  userUuid?: string;
}, TContext>({ mutationFn: ({ base64, referenceType, userUuid }) => AwsControllerService.uploadImageAsBase64({ base64, referenceType, userUuid }) as unknown as Promise<TData>, ...options });
export const useAwsControllerServiceUploadDocumentAsMultipart = <TData = Common.AwsControllerServiceUploadDocumentAsMultipartMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  referenceType: "LOCATION_PROFILE" | "PROVIDER_PROFILE" | "PATIENT_DOCUMENTS" | "PATIENT_PROFILE" | "LAB_ORDER" | "INSURANCE";
  requestBody?: { file: Blob | File; };
  userUuid?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  referenceType: "LOCATION_PROFILE" | "PROVIDER_PROFILE" | "PATIENT_DOCUMENTS" | "PATIENT_PROFILE" | "LAB_ORDER" | "INSURANCE";
  requestBody?: { file: Blob | File; };
  userUuid?: string;
}, TContext>({ mutationFn: ({ referenceType, requestBody, userUuid }) => AwsControllerService.uploadDocumentAsMultipart({ referenceType, requestBody, userUuid }) as unknown as Promise<TData>, ...options });
export const useAwsControllerServiceUploadDocumentAsBase64 = <TData = Common.AwsControllerServiceUploadDocumentAsBase64MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  base64: string;
  userUuid?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  base64: string;
  userUuid?: string;
}, TContext>({ mutationFn: ({ base64, userUuid }) => AwsControllerService.uploadDocumentAsBase64({ base64, userUuid }) as unknown as Promise<TData>, ...options });
export const usePaymentTransactionControllerServiceUpdatePaymentTransaction = <TData = Common.PaymentTransactionControllerServiceUpdatePaymentTransactionMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PaymentTransactionRequestDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PaymentTransactionRequestDto;
}, TContext>({ mutationFn: ({ requestBody }) => PaymentTransactionControllerService.updatePaymentTransaction({ requestBody }) as unknown as Promise<TData>, ...options });
export const useUserControllerServiceUpdateUserArchiveStatus = <TData = Common.UserControllerServiceUpdateUserArchiveStatusMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  status: boolean;
  userId: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  status: boolean;
  userId: string;
}, TContext>({ mutationFn: ({ status, userId }) => UserControllerService.updateUserArchiveStatus({ status, userId }) as unknown as Promise<TData>, ...options });
export const useUserControllerServiceUpdateUser = <TData = Common.UserControllerServiceUpdateUserMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: User;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: User;
}, TContext>({ mutationFn: ({ requestBody }) => UserControllerService.updateUser({ requestBody }) as unknown as Promise<TData>, ...options });
export const useUserControllerServiceUpdateUserStatus = <TData = Common.UserControllerServiceUpdateUserStatusMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  status: boolean;
  userId: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  status: boolean;
  userId: string;
}, TContext>({ mutationFn: ({ status, userId }) => UserControllerService.updateUserStatus({ status, userId }) as unknown as Promise<TData>, ...options });
export const useProviderControllerServiceUpdateProvider = <TData = Common.ProviderControllerServiceUpdateProviderMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ProviderRequestDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ProviderRequestDto;
}, TContext>({ mutationFn: ({ requestBody }) => ProviderControllerService.updateProvider({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePlanControllerServiceUpdatePlan = <TData = Common.PlanControllerServiceUpdatePlanMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PlanDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PlanDto;
}, TContext>({ mutationFn: ({ requestBody }) => PlanControllerService.updatePlan({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePlanControllerServiceUpdatePlanDetails = <TData = Common.PlanControllerServiceUpdatePlanDetailsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PlanDetailsDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PlanDetailsDto;
}, TContext>({ mutationFn: ({ requestBody }) => PlanControllerService.updatePlanDetails({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientControllerServiceUpdatePatient = <TData = Common.PatientControllerServiceUpdatePatientMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PatientRequestDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PatientRequestDto;
}, TContext>({ mutationFn: ({ requestBody }) => PatientControllerService.updatePatient({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientControllerServiceCreateUpdatePatient = <TData = Common.PatientControllerServiceCreateUpdatePatientMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PatientRequestDto[];
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PatientRequestDto[];
}, TContext>({ mutationFn: ({ requestBody }) => PatientControllerService.createUpdatePatient({ requestBody }) as unknown as Promise<TData>, ...options });
export const useLeadControllerServiceUpdateLead = <TData = Common.LeadControllerServiceUpdateLeadMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: LeadResponseDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: LeadResponseDto;
}, TContext>({ mutationFn: ({ requestBody }) => LeadControllerService.updateLead({ requestBody }) as unknown as Promise<TData>, ...options });
export const useLeadControllerServiceCreateUpdateLead = <TData = Common.LeadControllerServiceCreateUpdateLeadMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: LeadResponseDto[];
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: LeadResponseDto[];
}, TContext>({ mutationFn: ({ requestBody }) => LeadControllerService.createUpdateLead({ requestBody }) as unknown as Promise<TData>, ...options });
export const useVaccineControllerServiceUpdateVaccine = <TData = Common.VaccineControllerServiceUpdateVaccineMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: VaccineDto;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: VaccineDto;
  uuid: string;
}, TContext>({ mutationFn: ({ requestBody, uuid }) => VaccineControllerService.updateVaccine({ requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const useReferralControllerServiceUpdateReferralByUuid = <TData = Common.ReferralControllerServiceUpdateReferralByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  referralByUuid: string;
  requestBody: ReferralRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  referralByUuid: string;
  requestBody: ReferralRequest;
}, TContext>({ mutationFn: ({ referralByUuid, requestBody }) => ReferralControllerService.updateReferralByUuid({ referralByUuid, requestBody }) as unknown as Promise<TData>, ...options });
export const usePharmacyControllerServiceUpdatePharmacy = <TData = Common.PharmacyControllerServiceUpdatePharmacyMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PharmacyDto;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PharmacyDto;
  uuid: string;
}, TContext>({ mutationFn: ({ requestBody, uuid }) => PharmacyControllerService.updatePharmacy({ requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const usePatientVaccinationControllerServiceUpdatePatientVaccination = <TData = Common.PatientVaccinationControllerServiceUpdatePatientVaccinationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PatientVaccinationDto;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PatientVaccinationDto;
  uuid: string;
}, TContext>({ mutationFn: ({ requestBody, uuid }) => PatientVaccinationControllerService.updatePatientVaccination({ requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const usePatientFlagControllerServiceUpdatePatientFlag = <TData = Common.PatientFlagControllerServiceUpdatePatientFlagMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PatientFlagDto;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PatientFlagDto;
  uuid: string;
}, TContext>({ mutationFn: ({ requestBody, uuid }) => PatientFlagControllerService.updatePatientFlag({ requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const usePastSurgicalHistoryControllerServiceUpdatePastSurgicalHistory = <TData = Common.PastSurgicalHistoryControllerServiceUpdatePastSurgicalHistoryMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PastSurgicalHistoryDto;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PastSurgicalHistoryDto;
  uuid: string;
}, TContext>({ mutationFn: ({ requestBody, uuid }) => PastSurgicalHistoryControllerService.updatePastSurgicalHistory({ requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const usePastMedicalHistoryControllerServiceUpdatePastMedicalHistory = <TData = Common.PastMedicalHistoryControllerServiceUpdatePastMedicalHistoryMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PastMedicalHistoryDto;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PastMedicalHistoryDto;
  uuid: string;
}, TContext>({ mutationFn: ({ requestBody, uuid }) => PastMedicalHistoryControllerService.updatePastMedicalHistory({ requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const useNoteControllerServiceUpdateNoteByUuid = <TData = Common.NoteControllerServiceUpdateNoteByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  noteByUuid: string;
  requestBody: NoteRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  noteByUuid: string;
  requestBody: NoteRequest;
}, TContext>({ mutationFn: ({ noteByUuid, requestBody }) => NoteControllerService.updateNoteByUuid({ noteByUuid, requestBody }) as unknown as Promise<TData>, ...options });
export const useMedicationControllerServiceUpdateMedicationByUuid = <TData = Common.MedicationControllerServiceUpdateMedicationByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  medicationUuid: string;
  requestBody: MedicationRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  medicationUuid: string;
  requestBody: MedicationRequest;
}, TContext>({ mutationFn: ({ medicationUuid, requestBody }) => MedicationControllerService.updateMedicationByUuid({ medicationUuid, requestBody }) as unknown as Promise<TData>, ...options });
export const useLocationControllerServiceUpdateLocation = <TData = Common.LocationControllerServiceUpdateLocationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: LocationRequestDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: LocationRequestDto;
}, TContext>({ mutationFn: ({ requestBody }) => LocationControllerService.updateLocation({ requestBody }) as unknown as Promise<TData>, ...options });
export const useLocationGroupControllerServiceUpdateLocationGroup = <TData = Common.LocationGroupControllerServiceUpdateLocationGroupMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: LocationGroupRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: LocationGroupRequest;
}, TContext>({ mutationFn: ({ requestBody }) => LocationGroupControllerService.updateLocationGroup({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientLinkPharmacyControllerServiceSetDefaultPharmacy = <TData = Common.PatientLinkPharmacyControllerServiceSetDefaultPharmacyMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  patientUuid: string;
  pharmacyUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  patientUuid: string;
  pharmacyUuid: string;
}, TContext>({ mutationFn: ({ patientUuid, pharmacyUuid }) => PatientLinkPharmacyControllerService.setDefaultPharmacy({ patientUuid, pharmacyUuid }) as unknown as Promise<TData>, ...options });
export const useInvoiceControllerServiceUpdateInvoiceByUuid = <TData = Common.InvoiceControllerServiceUpdateInvoiceByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  invoiceUuid: string;
  requestBody: InvoiceRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  invoiceUuid: string;
  requestBody: InvoiceRequest;
}, TContext>({ mutationFn: ({ invoiceUuid, requestBody }) => InvoiceControllerService.updateInvoiceByUuid({ invoiceUuid, requestBody }) as unknown as Promise<TData>, ...options });
export const useInsuranceControllerServiceUpdateInsurance = <TData = Common.InsuranceControllerServiceUpdateInsuranceMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: InsuranceDetailsDto[];
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: InsuranceDetailsDto[];
}, TContext>({ mutationFn: ({ requestBody }) => InsuranceControllerService.updateInsurance({ requestBody }) as unknown as Promise<TData>, ...options });
export const useImagingResultControllerServiceUpdateImagingResult = <TData = Common.ImagingResultControllerServiceUpdateImagingResultMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  imagingResultByUuid: string;
  requestBody: ImagingResultRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  imagingResultByUuid: string;
  requestBody: ImagingResultRequest;
}, TContext>({ mutationFn: ({ imagingResultByUuid, requestBody }) => ImagingResultControllerService.updateImagingResult({ imagingResultByUuid, requestBody }) as unknown as Promise<TData>, ...options });
export const useImagingOrderControllerServiceUpdateImagingOrder = <TData = Common.ImagingOrderControllerServiceUpdateImagingOrderMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  imagingOrderByUuid: string;
  requestBody: ImagingOrderRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  imagingOrderByUuid: string;
  requestBody: ImagingOrderRequest;
}, TContext>({ mutationFn: ({ imagingOrderByUuid, requestBody }) => ImagingOrderControllerService.updateImagingOrder({ imagingOrderByUuid, requestBody }) as unknown as Promise<TData>, ...options });
export const useIcdCodeControllerServiceUpdateIcdCode = <TData = Common.IcdCodeControllerServiceUpdateIcdCodeMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: IcdCodeDto;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: IcdCodeDto;
  uuid: string;
}, TContext>({ mutationFn: ({ requestBody, uuid }) => IcdCodeControllerService.updateIcdCode({ requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const useFamilyHistoryControllerServiceUpdateFamilyHistory = <TData = Common.FamilyHistoryControllerServiceUpdateFamilyHistoryMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: FamilyHistoryDto;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: FamilyHistoryDto;
  uuid: string;
}, TContext>({ mutationFn: ({ requestBody, uuid }) => FamilyHistoryControllerService.updateFamilyHistory({ requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const useDrugIntoleranceControllerServiceUpdateDrugIntolerance = <TData = Common.DrugIntoleranceControllerServiceUpdateDrugIntoleranceMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: DrugIntoleranceDto;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: DrugIntoleranceDto;
  uuid: string;
}, TContext>({ mutationFn: ({ requestBody, uuid }) => DrugIntoleranceControllerService.updateDrugIntolerance({ requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const useDocumentTypeControllerServiceUpdateDocumentType = <TData = Common.DocumentTypeControllerServiceUpdateDocumentTypeMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: UpdateDocumentTypeRequest[];
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: UpdateDocumentTypeRequest[];
}, TContext>({ mutationFn: ({ requestBody }) => DocumentTypeControllerService.updateDocumentType({ requestBody }) as unknown as Promise<TData>, ...options });
export const useDiagnosisControllerServiceUpdateDiagnosis = <TData = Common.DiagnosisControllerServiceUpdateDiagnosisMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: DiagnosisDto;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: DiagnosisDto;
  uuid: string;
}, TContext>({ mutationFn: ({ requestBody, uuid }) => DiagnosisControllerService.updateDiagnosis({ requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const useAllergyControllerServiceUpdateAllergy = <TData = Common.AllergyControllerServiceUpdateAllergyMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: AllergyDto;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: AllergyDto;
  uuid: string;
}, TContext>({ mutationFn: ({ requestBody, uuid }) => AllergyControllerService.updateAllergy({ requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const useProviderControllerServiceUpdateProviderStatus = <TData = Common.ProviderControllerServiceUpdateProviderStatusMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  providerUuid: string;
  status: boolean;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  providerUuid: string;
  status: boolean;
}, TContext>({ mutationFn: ({ providerUuid, status }) => ProviderControllerService.updateProviderStatus({ providerUuid, status }) as unknown as Promise<TData>, ...options });
export const useDiagnosisControllerServiceResolvedDiagnosis = <TData = Common.DiagnosisControllerServiceResolvedDiagnosisMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  uuid: string;
}, TContext>({ mutationFn: ({ uuid }) => DiagnosisControllerService.resolvedDiagnosis({ uuid }) as unknown as Promise<TData>, ...options });
export const usePaymentTransactionControllerServiceDeletePaymentTransaction = <TData = Common.PaymentTransactionControllerServiceDeletePaymentTransactionMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  paymentTransactionUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  paymentTransactionUuid: string;
}, TContext>({ mutationFn: ({ paymentTransactionUuid }) => PaymentTransactionControllerService.deletePaymentTransaction({ paymentTransactionUuid }) as unknown as Promise<TData>, ...options });
export const useProviderControllerServiceDeleteProviderByUuid = <TData = Common.ProviderControllerServiceDeleteProviderByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  providerUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  providerUuid: string;
}, TContext>({ mutationFn: ({ providerUuid }) => ProviderControllerService.deleteProviderByUuid({ providerUuid }) as unknown as Promise<TData>, ...options });
export const usePlanControllerServiceDeletePlanByUuid = <TData = Common.PlanControllerServiceDeletePlanByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  planUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  planUuid: string;
}, TContext>({ mutationFn: ({ planUuid }) => PlanControllerService.deletePlanByUuid({ planUuid }) as unknown as Promise<TData>, ...options });
export const usePatientControllerServiceDeletePatientByUuid = <TData = Common.PatientControllerServiceDeletePatientByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  patientUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  patientUuid: string;
}, TContext>({ mutationFn: ({ patientUuid }) => PatientControllerService.deletePatientByUuid({ patientUuid }) as unknown as Promise<TData>, ...options });
export const useLeadControllerServiceDeleteLeadByUuid = <TData = Common.LeadControllerServiceDeleteLeadByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  leadUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  leadUuid: string;
}, TContext>({ mutationFn: ({ leadUuid }) => LeadControllerService.deleteLeadByUuid({ leadUuid }) as unknown as Promise<TData>, ...options });
export const useVaccineControllerServiceDeleteVaccineByUuid = <TData = Common.VaccineControllerServiceDeleteVaccineByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  uuid: string;
}, TContext>({ mutationFn: ({ uuid }) => VaccineControllerService.deleteVaccineByUuid({ uuid }) as unknown as Promise<TData>, ...options });
export const useReferralControllerServiceDeleteReferralByUuid = <TData = Common.ReferralControllerServiceDeleteReferralByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  referralByUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  referralByUuid: string;
}, TContext>({ mutationFn: ({ referralByUuid }) => ReferralControllerService.deleteReferralByUuid({ referralByUuid }) as unknown as Promise<TData>, ...options });
export const usePharmacyControllerServiceDeletePharmacy = <TData = Common.PharmacyControllerServiceDeletePharmacyMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  uuid: string;
}, TContext>({ mutationFn: ({ uuid }) => PharmacyControllerService.deletePharmacy({ uuid }) as unknown as Promise<TData>, ...options });
export const usePatientVaccinationControllerServiceDeletePatientVaccination = <TData = Common.PatientVaccinationControllerServiceDeletePatientVaccinationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  uuid: string;
}, TContext>({ mutationFn: ({ uuid }) => PatientVaccinationControllerService.deletePatientVaccination({ uuid }) as unknown as Promise<TData>, ...options });
export const usePatientFlagControllerServiceDeletePatientFlag = <TData = Common.PatientFlagControllerServiceDeletePatientFlagMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  uuid: string;
}, TContext>({ mutationFn: ({ uuid }) => PatientFlagControllerService.deletePatientFlag({ uuid }) as unknown as Promise<TData>, ...options });
export const usePastSurgicalHistoryControllerServiceDeletePastSurgicalHistoryByUuid = <TData = Common.PastSurgicalHistoryControllerServiceDeletePastSurgicalHistoryByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  uuid: string;
}, TContext>({ mutationFn: ({ uuid }) => PastSurgicalHistoryControllerService.deletePastSurgicalHistoryByUuid({ uuid }) as unknown as Promise<TData>, ...options });
export const usePastMedicalHistoryControllerServiceDeletePastMedicalHistoryByUuid = <TData = Common.PastMedicalHistoryControllerServiceDeletePastMedicalHistoryByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  uuid: string;
}, TContext>({ mutationFn: ({ uuid }) => PastMedicalHistoryControllerService.deletePastMedicalHistoryByUuid({ uuid }) as unknown as Promise<TData>, ...options });
export const useNoteControllerServiceDeleteNoteByUuid = <TData = Common.NoteControllerServiceDeleteNoteByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  noteByUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  noteByUuid: string;
}, TContext>({ mutationFn: ({ noteByUuid }) => NoteControllerService.deleteNoteByUuid({ noteByUuid }) as unknown as Promise<TData>, ...options });
export const useMedicationControllerServiceDeleteMedicationByUuid = <TData = Common.MedicationControllerServiceDeleteMedicationByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  medicationUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  medicationUuid: string;
}, TContext>({ mutationFn: ({ medicationUuid }) => MedicationControllerService.deleteMedicationByUuid({ medicationUuid }) as unknown as Promise<TData>, ...options });
export const useLocationControllerServiceDeleteLocationByUuid = <TData = Common.LocationControllerServiceDeleteLocationByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  locationUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  locationUuid: string;
}, TContext>({ mutationFn: ({ locationUuid }) => LocationControllerService.deleteLocationByUuid({ locationUuid }) as unknown as Promise<TData>, ...options });
export const useLocationGroupControllerServiceDeleteLocationGroupByUuid = <TData = Common.LocationGroupControllerServiceDeleteLocationGroupByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  locationGroupUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  locationGroupUuid: string;
}, TContext>({ mutationFn: ({ locationGroupUuid }) => LocationGroupControllerService.deleteLocationGroupByUuid({ locationGroupUuid }) as unknown as Promise<TData>, ...options });
export const useInvoiceControllerServiceDeleteInvoiceByUuid = <TData = Common.InvoiceControllerServiceDeleteInvoiceByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  invoiceUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  invoiceUuid: string;
}, TContext>({ mutationFn: ({ invoiceUuid }) => InvoiceControllerService.deleteInvoiceByUuid({ invoiceUuid }) as unknown as Promise<TData>, ...options });
export const useInsuranceControllerServiceDeleteInsuranceByUuid = <TData = Common.InsuranceControllerServiceDeleteInsuranceByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  insuranceUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  insuranceUuid: string;
}, TContext>({ mutationFn: ({ insuranceUuid }) => InsuranceControllerService.deleteInsuranceByUuid({ insuranceUuid }) as unknown as Promise<TData>, ...options });
export const useImagingResultControllerServiceDeleteImagingResultByUuid = <TData = Common.ImagingResultControllerServiceDeleteImagingResultByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  imagingResultByUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  imagingResultByUuid: string;
}, TContext>({ mutationFn: ({ imagingResultByUuid }) => ImagingResultControllerService.deleteImagingResultByUuid({ imagingResultByUuid }) as unknown as Promise<TData>, ...options });
export const useImagingOrderControllerServiceDeleteImagingOrderByUuid = <TData = Common.ImagingOrderControllerServiceDeleteImagingOrderByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  imagingOrderByUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  imagingOrderByUuid: string;
}, TContext>({ mutationFn: ({ imagingOrderByUuid }) => ImagingOrderControllerService.deleteImagingOrderByUuid({ imagingOrderByUuid }) as unknown as Promise<TData>, ...options });
export const useIcdCodeControllerServiceDeleteIcdCodeByUuid = <TData = Common.IcdCodeControllerServiceDeleteIcdCodeByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  uuid: string;
}, TContext>({ mutationFn: ({ uuid }) => IcdCodeControllerService.deleteIcdCodeByUuid({ uuid }) as unknown as Promise<TData>, ...options });
export const useFamilyHistoryControllerServiceDeleteFamilyHistoryByUuid = <TData = Common.FamilyHistoryControllerServiceDeleteFamilyHistoryByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  uuid: string;
}, TContext>({ mutationFn: ({ uuid }) => FamilyHistoryControllerService.deleteFamilyHistoryByUuid({ uuid }) as unknown as Promise<TData>, ...options });
export const useDrugIntoleranceControllerServiceDeleteDrugIntoleranceByUuid = <TData = Common.DrugIntoleranceControllerServiceDeleteDrugIntoleranceByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  drugIntoleranceUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  drugIntoleranceUuid: string;
}, TContext>({ mutationFn: ({ drugIntoleranceUuid }) => DrugIntoleranceControllerService.deleteDrugIntoleranceByUuid({ drugIntoleranceUuid }) as unknown as Promise<TData>, ...options });
export const useDocumentTypeControllerServiceDeleteDocumentTypeByUuid = <TData = Common.DocumentTypeControllerServiceDeleteDocumentTypeByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  documentTypeUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  documentTypeUuid: string;
}, TContext>({ mutationFn: ({ documentTypeUuid }) => DocumentTypeControllerService.deleteDocumentTypeByUuid({ documentTypeUuid }) as unknown as Promise<TData>, ...options });
export const useDiagnosisControllerServiceDeleteDiagnosis = <TData = Common.DiagnosisControllerServiceDeleteDiagnosisMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  uuid: string;
}, TContext>({ mutationFn: ({ uuid }) => DiagnosisControllerService.deleteDiagnosis({ uuid }) as unknown as Promise<TData>, ...options });
export const useAllergyControllerServiceDeleteAllergyByUuId = <TData = Common.AllergyControllerServiceDeleteAllergyByUuIdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  uuid: string;
}, TContext>({ mutationFn: ({ uuid }) => AllergyControllerService.deleteAllergyByUuId({ uuid }) as unknown as Promise<TData>, ...options });
export const useDocumentControllerServiceDeleteDocumentByUuid = <TData = Common.DocumentControllerServiceDeleteDocumentByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  documentUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  documentUuid: string;
}, TContext>({ mutationFn: ({ documentUuid }) => DocumentControllerService.deleteDocumentByUuid({ documentUuid }) as unknown as Promise<TData>, ...options });
export const useContactDirectoryControllerServiceDeleteContactDirectoryByUuid = <TData = Common.ContactDirectoryControllerServiceDeleteContactDirectoryByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contactDirectoryUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contactDirectoryUuid: string;
}, TContext>({ mutationFn: ({ contactDirectoryUuid }) => ContactDirectoryControllerService.deleteContactDirectoryByUuid({ contactDirectoryUuid }) as unknown as Promise<TData>, ...options });
