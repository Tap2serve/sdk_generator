// generated with @7nohe/openapi-react-query-codegen@1.4.1 

import { type QueryClient } from "@tanstack/react-query";
import { AllergyControllerService, AuditHistoryControllerService, AwsControllerService, ContactDirectoryControllerService, DiagnosisControllerService, DocumentControllerService, DocumentTypeControllerService, DrugIntoleranceControllerService, FamilyHistoryControllerService, IcdCodeControllerService, ImagingOrderControllerService, ImagingResultControllerService, InsuranceControllerService, InvoiceControllerService, LeadControllerService, LocationControllerService, LocationGroupControllerService, MedicationControllerService, NoteControllerService, OrderStudyControllerService, PastMedicalHistoryControllerService, PastSurgicalHistoryControllerService, PatientControllerService, PatientFlagControllerService, PatientLinkPharmacyControllerService, PatientVaccinationControllerService, PaymentTransactionControllerService, PharmacyControllerService, PlanControllerService, ProcedureCodeControllerService, ProviderControllerService, ReferralControllerService, UserControllerService, VaccineControllerService } from "../requests/services.gen";
import * as Common from "./common";
export const prefetchUsePaymentTransactionControllerServiceGetPaymentTransactionByUuid = (queryClient: QueryClient, { paymentTransactionUuid }: {
  paymentTransactionUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePaymentTransactionControllerServiceGetPaymentTransactionByUuidKeyFn({ paymentTransactionUuid }), queryFn: () => PaymentTransactionControllerService.getPaymentTransactionByUuid({ paymentTransactionUuid }) });
export const prefetchUsePaymentTransactionControllerServiceGetAllPaymentTransactions = (queryClient: QueryClient, { page, pageSize, searchString, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UsePaymentTransactionControllerServiceGetAllPaymentTransactionsKeyFn({ page, pageSize, searchString, sortBy, sortDirection }), queryFn: () => PaymentTransactionControllerService.getAllPaymentTransactions({ page, pageSize, searchString, sortBy, sortDirection }) });
export const prefetchUseUserControllerServiceGetAllUsers = (queryClient: QueryClient, { archive, page, role, roleType, searchString, size, sortBy, sortDirection, status }: {
  archive?: boolean;
  page?: number;
  role?: string;
  roleType?: "ADMIN" | "USER" | "EHR" | "EMPLOYER" | "PATIENT" | "AGENT";
  searchString?: string;
  size?: number;
  sortBy?: string;
  sortDirection?: string;
  status?: boolean;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseUserControllerServiceGetAllUsersKeyFn({ archive, page, role, roleType, searchString, size, sortBy, sortDirection, status }), queryFn: () => UserControllerService.getAllUsers({ archive, page, role, roleType, searchString, size, sortBy, sortDirection, status }) });
export const prefetchUseUserControllerServiceGetUser = (queryClient: QueryClient, { userId }: {
  userId: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseUserControllerServiceGetUserKeyFn({ userId }), queryFn: () => UserControllerService.getUser({ userId }) });
export const prefetchUseUserControllerServiceGetProfile = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseUserControllerServiceGetProfileKeyFn(), queryFn: () => UserControllerService.getProfile() });
export const prefetchUseProviderControllerServiceGetProviderByUuid = (queryClient: QueryClient, { providerUuid }: {
  providerUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderControllerServiceGetProviderByUuidKeyFn({ providerUuid }), queryFn: () => ProviderControllerService.getProviderByUuid({ providerUuid }) });
export const prefetchUseProviderControllerServiceGetAllProviders = (queryClient: QueryClient, { filterBy, filterValue, latitude, longitude, page, pageSize, patientAge, searchString, sortBy, sortDirection, status, zipcode }: {
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
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderControllerServiceGetAllProvidersKeyFn({ filterBy, filterValue, latitude, longitude, page, pageSize, patientAge, searchString, sortBy, sortDirection, status, zipcode }), queryFn: () => ProviderControllerService.getAllProviders({ filterBy, filterValue, latitude, longitude, page, pageSize, patientAge, searchString, sortBy, sortDirection, status, zipcode }) });
export const prefetchUsePlanControllerServiceGetPlanAmount = (queryClient: QueryClient, { primaryLeadUuid }: {
  primaryLeadUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePlanControllerServiceGetPlanAmountKeyFn({ primaryLeadUuid }), queryFn: () => PlanControllerService.getPlanAmount({ primaryLeadUuid }) });
export const prefetchUsePlanControllerServiceGetPlanByUuid = (queryClient: QueryClient, { planUuid }: {
  planUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePlanControllerServiceGetPlanByUuidKeyFn({ planUuid }), queryFn: () => PlanControllerService.getPlanByUuid({ planUuid }) });
export const prefetchUsePlanControllerServiceGetAllPlan = (queryClient: QueryClient, { planUuid }: {
  planUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePlanControllerServiceGetAllPlanKeyFn({ planUuid }), queryFn: () => PlanControllerService.getAllPlan({ planUuid }) });
export const prefetchUsePlanControllerServiceCheckMyPlan = (queryClient: QueryClient, { defaultBillingPeriod, primaryLeadUuid }: {
  defaultBillingPeriod: "ANNUAL" | "MONTH" | "QUARTERLY" | "SEMI_ANNUALLY";
  primaryLeadUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePlanControllerServiceCheckMyPlanKeyFn({ defaultBillingPeriod, primaryLeadUuid }), queryFn: () => PlanControllerService.checkMyPlan({ defaultBillingPeriod, primaryLeadUuid }) });
export const prefetchUsePlanControllerServiceGetAllPlan1 = (queryClient: QueryClient, { search }: {
  search?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UsePlanControllerServiceGetAllPlan1KeyFn({ search }), queryFn: () => PlanControllerService.getAllPlan1({ search }) });
export const prefetchUsePatientControllerServiceGetPatientByUuid = (queryClient: QueryClient, { patientUuid }: {
  patientUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientControllerServiceGetPatientByUuidKeyFn({ patientUuid }), queryFn: () => PatientControllerService.getPatientByUuid({ patientUuid }) });
export const prefetchUsePatientControllerServiceGetPatientPlanDetails = (queryClient: QueryClient, { patientUuid }: {
  patientUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientControllerServiceGetPatientPlanDetailsKeyFn({ patientUuid }), queryFn: () => PatientControllerService.getPatientPlanDetails({ patientUuid }) });
export const prefetchUsePatientControllerServiceGetPatientOverview = (queryClient: QueryClient, { patientUuid }: {
  patientUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientControllerServiceGetPatientOverviewKeyFn({ patientUuid }), queryFn: () => PatientControllerService.getPatientOverview({ patientUuid }) });
export const prefetchUsePatientControllerServiceGetPatientMemberShip = (queryClient: QueryClient, { patientUuid }: {
  patientUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientControllerServiceGetPatientMemberShipKeyFn({ patientUuid }), queryFn: () => PatientControllerService.getPatientMemberShip({ patientUuid }) });
export const prefetchUsePatientControllerServiceGetAllPatient = (queryClient: QueryClient, { employerUuids, endDate, page, pageSize, searchString, sortBy, sortDirection, startDate, status }: {
  employerUuids?: string[];
  endDate?: string;
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
  startDate?: string;
  status?: boolean;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientControllerServiceGetAllPatientKeyFn({ employerUuids, endDate, page, pageSize, searchString, sortBy, sortDirection, startDate, status }), queryFn: () => PatientControllerService.getAllPatient({ employerUuids, endDate, page, pageSize, searchString, sortBy, sortDirection, startDate, status }) });
export const prefetchUseLeadControllerServiceGetLeadByUuid = (queryClient: QueryClient, { leadUuid }: {
  leadUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseLeadControllerServiceGetLeadByUuidKeyFn({ leadUuid }), queryFn: () => LeadControllerService.getLeadByUuid({ leadUuid }) });
export const prefetchUseLeadControllerServiceGetAllLead = (queryClient: QueryClient, { page, pageSize, searchString, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseLeadControllerServiceGetAllLeadKeyFn({ page, pageSize, searchString, sortBy, sortDirection }), queryFn: () => LeadControllerService.getAllLead({ page, pageSize, searchString, sortBy, sortDirection }) });
export const prefetchUseVaccineControllerServiceGetVaccineByUuid = (queryClient: QueryClient, { uuid }: {
  uuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseVaccineControllerServiceGetVaccineByUuidKeyFn({ uuid }), queryFn: () => VaccineControllerService.getVaccineByUuid({ uuid }) });
export const prefetchUseVaccineControllerServiceGetAllVaccines = (queryClient: QueryClient, { page, pageSize, type }: {
  page?: number;
  pageSize?: number;
  type?: "ADULT" | "CHILD";
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseVaccineControllerServiceGetAllVaccinesKeyFn({ page, pageSize, type }), queryFn: () => VaccineControllerService.getAllVaccines({ page, pageSize, type }) });
export const prefetchUseReferralControllerServiceGetReferralByUuid = (queryClient: QueryClient, { referralByUuid }: {
  referralByUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseReferralControllerServiceGetReferralByUuidKeyFn({ referralByUuid }), queryFn: () => ReferralControllerService.getReferralByUuid({ referralByUuid }) });
export const prefetchUseReferralControllerServiceGetAllReferrals = (queryClient: QueryClient, { createdStartDate, email, fax, page, patientUuid, phone, referralType, size, sort, stat }: {
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
}) => queryClient.prefetchQuery({ queryKey: Common.UseReferralControllerServiceGetAllReferralsKeyFn({ createdStartDate, email, fax, page, patientUuid, phone, referralType, size, sort, stat }), queryFn: () => ReferralControllerService.getAllReferrals({ createdStartDate, email, fax, page, patientUuid, phone, referralType, size, sort, stat }) });
export const prefetchUsePharmacyControllerServiceGetPharmacyByUuid = (queryClient: QueryClient, { uuid }: {
  uuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePharmacyControllerServiceGetPharmacyByUuidKeyFn({ uuid }), queryFn: () => PharmacyControllerService.getPharmacyByUuid({ uuid }) });
export const prefetchUsePharmacyControllerServiceGetAllPharmacies = (queryClient: QueryClient, { page, pageSize, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDirection?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UsePharmacyControllerServiceGetAllPharmaciesKeyFn({ page, pageSize, sortBy, sortDirection }), queryFn: () => PharmacyControllerService.getAllPharmacies({ page, pageSize, sortBy, sortDirection }) });
export const prefetchUsePatientVaccinationControllerServiceGetPatientVaccinationByUuid = (queryClient: QueryClient, { uuid }: {
  uuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientVaccinationControllerServiceGetPatientVaccinationByUuidKeyFn({ uuid }), queryFn: () => PatientVaccinationControllerService.getPatientVaccinationByUuid({ uuid }) });
export const prefetchUsePatientVaccinationControllerServiceGetAllPatientVaccination = (queryClient: QueryClient, { page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientVaccinationControllerServiceGetAllPatientVaccinationKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }), queryFn: () => PatientVaccinationControllerService.getAllPatientVaccination({ page, pageSize, patientUuid, sortBy, sortDirection }) });
export const prefetchUsePatientVaccinationControllerServiceGetAllPatientVaccinationForVaccineTable = (queryClient: QueryClient, { patientUuid }: {
  patientUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientVaccinationControllerServiceGetAllPatientVaccinationForVaccineTableKeyFn({ patientUuid }), queryFn: () => PatientVaccinationControllerService.getAllPatientVaccinationForVaccineTable({ patientUuid }) });
export const prefetchUsePatientFlagControllerServiceGetPatientFlagByUuid = (queryClient: QueryClient, { uuid }: {
  uuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientFlagControllerServiceGetPatientFlagByUuidKeyFn({ uuid }), queryFn: () => PatientFlagControllerService.getPatientFlagByUuid({ uuid }) });
export const prefetchUsePatientFlagControllerServiceGetAllPatientFlags = (queryClient: QueryClient, { page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientFlagControllerServiceGetAllPatientFlagsKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }), queryFn: () => PatientFlagControllerService.getAllPatientFlags({ page, pageSize, patientUuid, sortBy, sortDirection }) });
export const prefetchUsePastSurgicalHistoryControllerServiceGetPastSurgicalHistoryByUuid = (queryClient: QueryClient, { uuid }: {
  uuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePastSurgicalHistoryControllerServiceGetPastSurgicalHistoryByUuidKeyFn({ uuid }), queryFn: () => PastSurgicalHistoryControllerService.getPastSurgicalHistoryByUuid({ uuid }) });
export const prefetchUsePastSurgicalHistoryControllerServiceGetAllPastSurgicalHistory = (queryClient: QueryClient, { page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePastSurgicalHistoryControllerServiceGetAllPastSurgicalHistoryKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }), queryFn: () => PastSurgicalHistoryControllerService.getAllPastSurgicalHistory({ page, pageSize, patientUuid, sortBy, sortDirection }) });
export const prefetchUsePastMedicalHistoryControllerServiceGetPastMedicalHistoryByUuid = (queryClient: QueryClient, { uuid }: {
  uuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePastMedicalHistoryControllerServiceGetPastMedicalHistoryByUuidKeyFn({ uuid }), queryFn: () => PastMedicalHistoryControllerService.getPastMedicalHistoryByUuid({ uuid }) });
export const prefetchUsePastMedicalHistoryControllerServiceGetAllPastMedicalHistory = (queryClient: QueryClient, { page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePastMedicalHistoryControllerServiceGetAllPastMedicalHistoryKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }), queryFn: () => PastMedicalHistoryControllerService.getAllPastMedicalHistory({ page, pageSize, patientUuid, sortBy, sortDirection }) });
export const prefetchUseNoteControllerServiceGetNoteByUuid = (queryClient: QueryClient, { noteByUuid }: {
  noteByUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseNoteControllerServiceGetNoteByUuidKeyFn({ noteByUuid }), queryFn: () => NoteControllerService.getNoteByUuid({ noteByUuid }) });
export const prefetchUseNoteControllerServiceGetAllNotes = (queryClient: QueryClient, { createdDate, documentNote, modifiedDate, note, page, patientUuid, size, sort }: {
  createdDate?: string;
  documentNote?: "INTERNAL_NOTE" | "EXTERNAL_NOTE";
  modifiedDate?: string;
  note?: string;
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseNoteControllerServiceGetAllNotesKeyFn({ createdDate, documentNote, modifiedDate, note, page, patientUuid, size, sort }), queryFn: () => NoteControllerService.getAllNotes({ createdDate, documentNote, modifiedDate, note, page, patientUuid, size, sort }) });
export const prefetchUseMedicationControllerServiceGetMedicationByUuid = (queryClient: QueryClient, { medicationUuid }: {
  medicationUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseMedicationControllerServiceGetMedicationByUuidKeyFn({ medicationUuid }), queryFn: () => MedicationControllerService.getMedicationByUuid({ medicationUuid }) });
export const prefetchUseMedicationControllerServiceGetAllMedications = (queryClient: QueryClient, { medicationStatus, page, patientUuid, size, sort }: {
  medicationStatus?: "ACTIVE" | "PAST" | "PENDING" | "ONGOING" | "COMPLETED";
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseMedicationControllerServiceGetAllMedicationsKeyFn({ medicationStatus, page, patientUuid, size, sort }), queryFn: () => MedicationControllerService.getAllMedications({ medicationStatus, page, patientUuid, size, sort }) });
export const prefetchUseLocationControllerServiceGetLocationByUuid = (queryClient: QueryClient, { locationUuid }: {
  locationUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseLocationControllerServiceGetLocationByUuidKeyFn({ locationUuid }), queryFn: () => LocationControllerService.getLocationByUuid({ locationUuid }) });
export const prefetchUseLocationControllerServiceGetAllLocation = (queryClient: QueryClient, { page, pageSize, searchString, sortBy, sortDirection, status }: {
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
  status?: boolean;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseLocationControllerServiceGetAllLocationKeyFn({ page, pageSize, searchString, sortBy, sortDirection, status }), queryFn: () => LocationControllerService.getAllLocation({ page, pageSize, searchString, sortBy, sortDirection, status }) });
export const prefetchUseLocationGroupControllerServiceGetLocationGroupByUuid = (queryClient: QueryClient, { locationGroupUuid }: {
  locationGroupUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseLocationGroupControllerServiceGetLocationGroupByUuidKeyFn({ locationGroupUuid }), queryFn: () => LocationGroupControllerService.getLocationGroupByUuid({ locationGroupUuid }) });
export const prefetchUseLocationGroupControllerServiceGetAllLocationGroup = (queryClient: QueryClient, { page, pageSize, searchString, sortBy, sortDirection, status }: {
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
  status?: boolean;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseLocationGroupControllerServiceGetAllLocationGroupKeyFn({ page, pageSize, searchString, sortBy, sortDirection, status }), queryFn: () => LocationGroupControllerService.getAllLocationGroup({ page, pageSize, searchString, sortBy, sortDirection, status }) });
export const prefetchUsePatientLinkPharmacyControllerServiceGetAllPharmaciesForPatient = (queryClient: QueryClient, { page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientLinkPharmacyControllerServiceGetAllPharmaciesForPatientKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }), queryFn: () => PatientLinkPharmacyControllerService.getAllPharmaciesForPatient({ page, pageSize, patientUuid, sortBy, sortDirection }) });
export const prefetchUseInvoiceControllerServiceGetInvoiceByUuid = (queryClient: QueryClient, { invoiceUuid }: {
  invoiceUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseInvoiceControllerServiceGetInvoiceByUuidKeyFn({ invoiceUuid }), queryFn: () => InvoiceControllerService.getInvoiceByUuid({ invoiceUuid }) });
export const prefetchUseInvoiceControllerServiceGetAllInvoices = (queryClient: QueryClient, { invoiceChargeType, invoiceId, invoiceStatus, localDate, page, patientUuid, size, sort }: {
  invoiceChargeType?: "MEMBERSHIP_CHARGE" | "PROCEDURE_CHARGE" | "MEDICATION_CHARGE" | "LAB_CHARGE" | "PANEL_CHARGE";
  invoiceId?: string;
  invoiceStatus?: "PAID" | "PARTIALLY_PAID" | "UNPAID";
  localDate?: string;
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseInvoiceControllerServiceGetAllInvoicesKeyFn({ invoiceChargeType, invoiceId, invoiceStatus, localDate, page, patientUuid, size, sort }), queryFn: () => InvoiceControllerService.getAllInvoices({ invoiceChargeType, invoiceId, invoiceStatus, localDate, page, patientUuid, size, sort }) });
export const prefetchUseInsuranceControllerServiceGetInsuranceByUuid = (queryClient: QueryClient, { insuranceUuid }: {
  insuranceUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseInsuranceControllerServiceGetInsuranceByUuidKeyFn({ insuranceUuid }), queryFn: () => InsuranceControllerService.getInsuranceByUuid({ insuranceUuid }) });
export const prefetchUseInsuranceControllerServiceGetAllPatientInsurance = (queryClient: QueryClient, { page, pageSize, patientUuid, searchString, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseInsuranceControllerServiceGetAllPatientInsuranceKeyFn({ page, pageSize, patientUuid, searchString, sortBy, sortDirection }), queryFn: () => InsuranceControllerService.getAllPatientInsurance({ page, pageSize, patientUuid, searchString, sortBy, sortDirection }) });
export const prefetchUseImagingResultControllerServiceGetImagingResultByUuid = (queryClient: QueryClient, { imagingResultByUuid }: {
  imagingResultByUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseImagingResultControllerServiceGetImagingResultByUuidKeyFn({ imagingResultByUuid }), queryFn: () => ImagingResultControllerService.getImagingResultByUuid({ imagingResultByUuid }) });
export const prefetchUseImagingResultControllerServiceGetAllImagingResults = (queryClient: QueryClient, { page, patientUuid, size, sort }: {
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseImagingResultControllerServiceGetAllImagingResultsKeyFn({ page, patientUuid, size, sort }), queryFn: () => ImagingResultControllerService.getAllImagingResults({ page, patientUuid, size, sort }) });
export const prefetchUseImagingOrderControllerServiceGetImagingOrderByUuid = (queryClient: QueryClient, { imagingOrderByUuid }: {
  imagingOrderByUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseImagingOrderControllerServiceGetImagingOrderByUuidKeyFn({ imagingOrderByUuid }), queryFn: () => ImagingOrderControllerService.getImagingOrderByUuid({ imagingOrderByUuid }) });
export const prefetchUseImagingOrderControllerServiceGetAllImagingOrder = (queryClient: QueryClient, { page, patientUuid, size, sort }: {
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseImagingOrderControllerServiceGetAllImagingOrderKeyFn({ page, patientUuid, size, sort }), queryFn: () => ImagingOrderControllerService.getAllImagingOrder({ page, patientUuid, size, sort }) });
export const prefetchUseIcdCodeControllerServiceGetIcdCodeByUuid = (queryClient: QueryClient, { uuid }: {
  uuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseIcdCodeControllerServiceGetIcdCodeByUuidKeyFn({ uuid }), queryFn: () => IcdCodeControllerService.getIcdCodeByUuid({ uuid }) });
export const prefetchUseIcdCodeControllerServiceGetAllIcdCodes = (queryClient: QueryClient, { page, pageSize, searchString, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseIcdCodeControllerServiceGetAllIcdCodesKeyFn({ page, pageSize, searchString, sortBy, sortDirection }), queryFn: () => IcdCodeControllerService.getAllIcdCodes({ page, pageSize, searchString, sortBy, sortDirection }) });
export const prefetchUseFamilyHistoryControllerServiceGetFamilyHistoryByUuid = (queryClient: QueryClient, { uuid }: {
  uuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseFamilyHistoryControllerServiceGetFamilyHistoryByUuidKeyFn({ uuid }), queryFn: () => FamilyHistoryControllerService.getFamilyHistoryByUuid({ uuid }) });
export const prefetchUseFamilyHistoryControllerServiceGetAllFamilyHistory = (queryClient: QueryClient, { page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseFamilyHistoryControllerServiceGetAllFamilyHistoryKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }), queryFn: () => FamilyHistoryControllerService.getAllFamilyHistory({ page, pageSize, patientUuid, sortBy, sortDirection }) });
export const prefetchUseDrugIntoleranceControllerServiceGetDrugIntoleranceByUuid = (queryClient: QueryClient, { drugIntoleranceUuid }: {
  drugIntoleranceUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseDrugIntoleranceControllerServiceGetDrugIntoleranceByUuidKeyFn({ drugIntoleranceUuid }), queryFn: () => DrugIntoleranceControllerService.getDrugIntoleranceByUuid({ drugIntoleranceUuid }) });
export const prefetchUseDrugIntoleranceControllerServiceGetAllDrugIntolerances = (queryClient: QueryClient, { page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseDrugIntoleranceControllerServiceGetAllDrugIntolerancesKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }), queryFn: () => DrugIntoleranceControllerService.getAllDrugIntolerances({ page, pageSize, patientUuid, sortBy, sortDirection }) });
export const prefetchUseDocumentTypeControllerServiceGetDocumentTypeByUuid = (queryClient: QueryClient, { documentTypeUuid }: {
  documentTypeUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseDocumentTypeControllerServiceGetDocumentTypeByUuidKeyFn({ documentTypeUuid }), queryFn: () => DocumentTypeControllerService.getDocumentTypeByUuid({ documentTypeUuid }) });
export const prefetchUseDocumentTypeControllerServiceGetAllDocumentTypes = (queryClient: QueryClient, { documentType, page, size, sort }: {
  documentType?: string;
  page?: number;
  size?: number;
  sort?: string[];
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseDocumentTypeControllerServiceGetAllDocumentTypesKeyFn({ documentType, page, size, sort }), queryFn: () => DocumentTypeControllerService.getAllDocumentTypes({ documentType, page, size, sort }) });
export const prefetchUseDiagnosisControllerServiceGetDiagnosisByUuid = (queryClient: QueryClient, { uuid }: {
  uuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseDiagnosisControllerServiceGetDiagnosisByUuidKeyFn({ uuid }), queryFn: () => DiagnosisControllerService.getDiagnosisByUuid({ uuid }) });
export const prefetchUseDiagnosisControllerServiceGetAllDiagnoses = (queryClient: QueryClient, { page, pageSize, patientUuid, searchString, sortBy, sortDirection, status, type }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  searchString?: string;
  sortBy?: string;
  sortDirection?: string;
  status?: "ACTIVE" | "HISTORICAL" | "RESOLVED";
  type?: "ACUTE" | "CHRONIC";
}) => queryClient.prefetchQuery({ queryKey: Common.UseDiagnosisControllerServiceGetAllDiagnosesKeyFn({ page, pageSize, patientUuid, searchString, sortBy, sortDirection, status, type }), queryFn: () => DiagnosisControllerService.getAllDiagnoses({ page, pageSize, patientUuid, searchString, sortBy, sortDirection, status, type }) });
export const prefetchUseAllergyControllerServiceGetAllergyByUuid = (queryClient: QueryClient, { uuid }: {
  uuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAllergyControllerServiceGetAllergyByUuidKeyFn({ uuid }), queryFn: () => AllergyControllerService.getAllergyByUuid({ uuid }) });
export const prefetchUseAllergyControllerServiceGetAllAllergies = (queryClient: QueryClient, { page, pageSize, patientUuid, sortBy, sortDirection }: {
  page?: number;
  pageSize?: number;
  patientUuid: string;
  sortBy?: string;
  sortDirection?: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAllergyControllerServiceGetAllAllergiesKeyFn({ page, pageSize, patientUuid, sortBy, sortDirection }), queryFn: () => AllergyControllerService.getAllAllergies({ page, pageSize, patientUuid, sortBy, sortDirection }) });
export const prefetchUseDocumentControllerServiceGetDocumentByUuid = (queryClient: QueryClient, { documentUuid }: {
  documentUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseDocumentControllerServiceGetDocumentByUuidKeyFn({ documentUuid }), queryFn: () => DocumentControllerService.getDocumentByUuid({ documentUuid }) });
export const prefetchUseDocumentControllerServiceGetAllDocuments1 = (queryClient: QueryClient, { documentType, fileName, page, patientUuid, size, sort }: {
  documentType?: string;
  fileName?: string;
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseDocumentControllerServiceGetAllDocuments1KeyFn({ documentType, fileName, page, patientUuid, size, sort }), queryFn: () => DocumentControllerService.getAllDocuments1({ documentType, fileName, page, patientUuid, size, sort }) });
export const prefetchUseContactDirectoryControllerServiceGetContactDirectoryUuid = (queryClient: QueryClient, { contactDirectoryUuid }: {
  contactDirectoryUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseContactDirectoryControllerServiceGetContactDirectoryUuidKeyFn({ contactDirectoryUuid }), queryFn: () => ContactDirectoryControllerService.getContactDirectoryUuid({ contactDirectoryUuid }) });
export const prefetchUseContactDirectoryControllerServiceGetAllContactDirectory = (queryClient: QueryClient, { page, referralType, size, sort }: {
  page?: number;
  referralType?: "IMAGING" | "SPECIALIST";
  size?: number;
  sort?: string[];
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseContactDirectoryControllerServiceGetAllContactDirectoryKeyFn({ page, referralType, size, sort }), queryFn: () => ContactDirectoryControllerService.getAllContactDirectory({ page, referralType, size, sort }) });
export const prefetchUseAwsControllerServiceGetFile = (queryClient: QueryClient, { key }: {
  key: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAwsControllerServiceGetFileKeyFn({ key }), queryFn: () => AwsControllerService.getFile({ key }) });
export const prefetchUseAwsControllerServiceGetFile1 = (queryClient: QueryClient, { key }: {
  key: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAwsControllerServiceGetFile1KeyFn({ key }), queryFn: () => AwsControllerService.getFile1({ key }) });
export const prefetchUseProcedureCodeControllerServiceGetProcedureCodes = (queryClient: QueryClient, { code, page, size, sort }: {
  code?: string;
  page?: number;
  size?: number;
  sort?: string[];
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseProcedureCodeControllerServiceGetProcedureCodesKeyFn({ code, page, size, sort }), queryFn: () => ProcedureCodeControllerService.getProcedureCodes({ code, page, size, sort }) });
export const prefetchUseOrderStudyControllerServiceGetAllDocuments = (queryClient: QueryClient, { page, size, sort, studyName }: {
  page?: number;
  size?: number;
  sort?: string[];
  studyName?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseOrderStudyControllerServiceGetAllDocumentsKeyFn({ page, size, sort, studyName }), queryFn: () => OrderStudyControllerService.getAllDocuments({ page, size, sort, studyName }) });
export const prefetchUseAuditHistoryControllerServiceGetAuditHistoryByUuid = (queryClient: QueryClient, { auditUuid, entityName }: {
  auditUuid: string;
  entityName: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAuditHistoryControllerServiceGetAuditHistoryByUuidKeyFn({ auditUuid, entityName }), queryFn: () => AuditHistoryControllerService.getAuditHistoryByUuid({ auditUuid, entityName }) });
export const prefetchUseAuditHistoryControllerServiceGetAllAuditHistory = (queryClient: QueryClient, { endDate, entityNames, page, patientUuid, size, sort, startDate }: {
  endDate?: string;
  entityNames: string[];
  page?: number;
  patientUuid: string;
  size?: number;
  sort?: string[];
  startDate?: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAuditHistoryControllerServiceGetAllAuditHistoryKeyFn({ endDate, entityNames, page, patientUuid, size, sort, startDate }), queryFn: () => AuditHistoryControllerService.getAllAuditHistory({ endDate, entityNames, page, patientUuid, size, sort, startDate }) });
