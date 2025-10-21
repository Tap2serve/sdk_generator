// generated with @7nohe/openapi-react-query-codegen@1.4.1 

import { type QueryClient } from "@tanstack/react-query";
import { ActivityTimeLogControllerService, AdminUserControllerService, AwsControllerService, BillingControllerService, DeviceControllerService, DocumentControllerService, EnrollmentControllerService, GlobalNoteControllerService, IcdCodeControllerService, ImportControllerService, InsuranceControllerService, LabResultControllerService, NameRecordControllerService, NotificationControllerService, NotificationEntityControllerService, NotificationProviderControllerService, PasswordGeneratorControllerService, PatientAllergyControllerService, PatientConditionControllerService, PatientControllerService, PatientMedicationControllerService, PatientSymptomControllerService, ProviderControllerService, ProviderGroupControllerService, RedirectDeviceControllerService, RedirectImportControllerService, RedirectPatientControllerService, RedirectProviderControllerService, SpecialityControllerService, TemplateControllerService, TimeLogControllerService, TwilioConversationControllerService, WorkListControllerService } from "../requests/services.gen";
import * as Common from "./common";
export const prefetchUseWorkListControllerServiceGetWeekWiseInteraction = (queryClient: QueryClient, { careName, dob, enrollmentServiceType, fullName, interactionWeek, page, size, sort }: {
  careName?: string;
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  interactionWeek: "WEEK1" | "WEEK2" | "WEEK3" | "WEEK4";
  page?: number;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetWeekWiseInteractionKeyFn({ careName, dob, enrollmentServiceType, fullName, interactionWeek, page, size, sort }), queryFn: () => WorkListControllerService.getWeekWiseInteraction({ careName, dob, enrollmentServiceType, fullName, interactionWeek, page, size, sort }) });
export const prefetchUseWorkListControllerServiceGetByVitals = (queryClient: QueryClient, { endDate, page, patientUserUuid, size, sort, startDate, vital }: {
  endDate?: string;
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
  startDate?: string;
  vital: "BLOOD_PRESSURE" | "BLOOD_PRESSURE_SYSTOLIC" | "BLOOD_PRESSURE_DIASTOLIC" | "BLOOD_GLUCOSE" | "HEART_RATE" | "BODY_TEMPERATURE" | "RESPIRATION_RATE" | "WEIGHT" | "OXYGEN_SATURATION" | "PULSE_RATE" | "BODY_MASS_INDEX" | "RESPIRATORY_VOLUME" | "HEIGHT" | "FORCED_EXPIRATORY_VOLUME" | "PEAK_EXPIRATORY" | "PERFUSION_INDEX" | "STEPS" | "PAINSCALE";
}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetByVitalsKeyFn({ endDate, page, patientUserUuid, size, sort, startDate, vital }), queryFn: () => WorkListControllerService.getByVitals({ endDate, page, patientUserUuid, size, sort, startDate, vital }) });
export const prefetchUseWorkListControllerServiceProgressBarPatient360 = (queryClient: QueryClient, { endDate, enrollmentServiceType, patientUserUuid, startDate }: {
  endDate: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  patientUserUuid: string;
  startDate: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceProgressBarPatient360KeyFn({ endDate, enrollmentServiceType, patientUserUuid, startDate }), queryFn: () => WorkListControllerService.progressBarPatient360({ endDate, enrollmentServiceType, patientUserUuid, startDate }) });
export const prefetchUseWorkListControllerServiceGetOfReadingDataMonotoringData = (queryClient: QueryClient, { enrollmentServiceType, isAlert, page, patientUserUuid, size, sort }: {
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  isAlert: boolean;
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetOfReadingDataMonotoringDataKeyFn({ enrollmentServiceType, isAlert, page, patientUserUuid, size, sort }), queryFn: () => WorkListControllerService.getOfReadingDataMonotoringData({ enrollmentServiceType, isAlert, page, patientUserUuid, size, sort }) });
export const prefetchUseWorkListControllerServiceGetNoDataMonitoring = (queryClient: QueryClient, { careName, dob, enrollmentServiceType, fullName, page, size, sort }: {
  careName?: string;
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  page?: number;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetNoDataMonitoringKeyFn({ careName, dob, enrollmentServiceType, fullName, page, size, sort }), queryFn: () => WorkListControllerService.getNoDataMonitoring({ careName, dob, enrollmentServiceType, fullName, page, size, sort }) });
export const prefetchUseWorkListControllerServiceGetNewPatient = (queryClient: QueryClient, { dob, enrollmentServiceType, fullName, page, size, sort }: {
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  page?: number;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetNewPatientKeyFn({ dob, enrollmentServiceType, fullName, page, size, sort }), queryFn: () => WorkListControllerService.getNewPatient({ dob, enrollmentServiceType, fullName, page, size, sort }) });
export const prefetchUseWorkListControllerServiceGetMonitoringDataById = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetMonitoringDataByIdKeyFn({ id }), queryFn: () => WorkListControllerService.getMonitoringDataById({ id }) });
export const prefetchUseWorkListControllerServiceGetVitals = (queryClient: QueryClient, { endDate, page, patientUserUuid, size, sort, startDate, timeZone, unit, vitals }: {
  endDate?: string;
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
  startDate?: string;
  timeZone: string;
  unit?: "MMHG" | "FAHRENHEIT" | "BPM" | "KG_PER_M2" | "PERCENTAGE" | "METERS" | "LBS" | "ML" | "L_PER_MIN" | "LITERS" | "DEGREE_CELSIUS" | "KILOGRAMS";
  vitals?: "BLOOD_PRESSURE" | "BLOOD_PRESSURE_SYSTOLIC" | "BLOOD_PRESSURE_DIASTOLIC" | "BLOOD_GLUCOSE" | "HEART_RATE" | "BODY_TEMPERATURE" | "RESPIRATION_RATE" | "WEIGHT" | "OXYGEN_SATURATION" | "PULSE_RATE" | "BODY_MASS_INDEX" | "RESPIRATORY_VOLUME" | "HEIGHT" | "FORCED_EXPIRATORY_VOLUME" | "PEAK_EXPIRATORY" | "PERFUSION_INDEX" | "STEPS" | "PAINSCALE";
}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetVitalsKeyFn({ endDate, page, patientUserUuid, size, sort, startDate, timeZone, unit, vitals }), queryFn: () => WorkListControllerService.getVitals({ endDate, page, patientUserUuid, size, sort, startDate, timeZone, unit, vitals }) });
export const prefetchUseWorkListControllerServiceGetReviewedNote = (queryClient: QueryClient, { page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetReviewedNoteKeyFn({ page, patientUserUuid, size, sort }), queryFn: () => WorkListControllerService.getReviewedNote({ page, patientUserUuid, size, sort }) });
export const prefetchUseWorkListControllerServiceGetResolvedNote = (queryClient: QueryClient, { page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetResolvedNoteKeyFn({ page, patientUserUuid, size, sort }), queryFn: () => WorkListControllerService.getResolvedNote({ page, patientUserUuid, size, sort }) });
export const prefetchUseWorkListControllerServiceGetLatestVitals = (queryClient: QueryClient, { page, patientUserUuid, size, sort, timeZone }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
  timeZone: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetLatestVitalsKeyFn({ page, patientUserUuid, size, sort, timeZone }), queryFn: () => WorkListControllerService.getLatestVitals({ page, patientUserUuid, size, sort, timeZone }) });
export const prefetchUseWorkListControllerServiceGetEscalate = (queryClient: QueryClient, { endDate, escalateStatus, page, search, size, sort, startDate }: {
  endDate?: string;
  escalateStatus?: "CLOSED" | "OPEN";
  page?: number;
  search?: string;
  size?: number;
  sort?: string[];
  startDate?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetEscalateKeyFn({ endDate, escalateStatus, page, search, size, sort, startDate }), queryFn: () => WorkListControllerService.getEscalate({ endDate, escalateStatus, page, search, size, sort, startDate }) });
export const prefetchUseWorkListControllerServiceGetEscalate1 = (queryClient: QueryClient, { endDate, escalateStatus, page, patientUserUuid, search, size, sort, startDate }: {
  endDate?: string;
  escalateStatus?: "CLOSED" | "OPEN";
  page?: number;
  patientUserUuid: string;
  search?: string;
  size?: number;
  sort?: string[];
  startDate?: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetEscalate1KeyFn({ endDate, escalateStatus, page, patientUserUuid, search, size, sort, startDate }), queryFn: () => WorkListControllerService.getEscalate1({ endDate, escalateStatus, page, patientUserUuid, search, size, sort, startDate }) });
export const prefetchUseWorkListControllerServiceGetDistinctVitalRecords = (queryClient: QueryClient, { page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetDistinctVitalRecordsKeyFn({ page, patientUserUuid, size, sort }), queryFn: () => WorkListControllerService.getDistinctVitalRecords({ page, patientUserUuid, size, sort }) });
export const prefetchUseWorkListControllerServiceMedicalHistoryAlert = (queryClient: QueryClient, { endDate, page, patientUserUuid, search, size, sort, startDate }: {
  endDate?: string;
  page?: number;
  patientUserUuid: string;
  search?: string;
  size?: number;
  sort?: string[];
  startDate?: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceMedicalHistoryAlertKeyFn({ endDate, page, patientUserUuid, search, size, sort, startDate }), queryFn: () => WorkListControllerService.medicalHistoryAlert({ endDate, page, patientUserUuid, search, size, sort, startDate }) });
export const prefetchUseWorkListControllerServiceGetAlertConfig = (queryClient: QueryClient, { enrollmentServiceType, patientUserUuid, vital }: {
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  patientUserUuid: string;
  vital: "BLOOD_PRESSURE" | "BLOOD_PRESSURE_SYSTOLIC" | "BLOOD_PRESSURE_DIASTOLIC" | "BLOOD_GLUCOSE" | "HEART_RATE" | "BODY_TEMPERATURE" | "RESPIRATION_RATE" | "WEIGHT" | "OXYGEN_SATURATION" | "PULSE_RATE" | "BODY_MASS_INDEX" | "RESPIRATORY_VOLUME" | "HEIGHT" | "FORCED_EXPIRATORY_VOLUME" | "PEAK_EXPIRATORY" | "PERFUSION_INDEX" | "STEPS" | "PAINSCALE";
}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetAlertConfigKeyFn({ enrollmentServiceType, patientUserUuid, vital }), queryFn: () => WorkListControllerService.getAlertConfig({ enrollmentServiceType, patientUserUuid, vital }) });
export const prefetchUseWorkListControllerServiceGetEscalation = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetEscalationKeyFn({ id }), queryFn: () => WorkListControllerService.getEscalation({ id }) });
export const prefetchUseWorkListControllerServiceGetDataMonitoring = (queryClient: QueryClient, { careName, dob, enrollmentServiceType, fullName, page, size, sort }: {
  careName?: string;
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  page?: number;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetDataMonitoringKeyFn({ careName, dob, enrollmentServiceType, fullName, page, size, sort }), queryFn: () => WorkListControllerService.getDataMonitoring({ careName, dob, enrollmentServiceType, fullName, page, size, sort }) });
export const prefetchUseWorkListControllerServiceGetCountInMonitoringSection = (queryClient: QueryClient, { enrollmentServiceType }: {
  enrollmentServiceType?: "RPM" | "RTM" | "CCM";
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetCountInMonitoringSectionKeyFn({ enrollmentServiceType }), queryFn: () => WorkListControllerService.getCountInMonitoringSection({ enrollmentServiceType }) });
export const prefetchUseWorkListControllerServiceGetCountInInteractionSection = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetCountInInteractionSectionKeyFn(), queryFn: () => WorkListControllerService.getCountInInteractionSection() });
export const prefetchUseWorkListControllerServiceGetCountInEnrollmentSection = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetCountInEnrollmentSectionKeyFn(), queryFn: () => WorkListControllerService.getCountInEnrollmentSection() });
export const prefetchUseWorkListControllerServiceGetClosedEnrollment = (queryClient: QueryClient, { careName, dob, enrollmentServiceType, fullName, page, size, sort }: {
  careName?: string;
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  page?: number;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetClosedEnrollmentKeyFn({ careName, dob, enrollmentServiceType, fullName, page, size, sort }), queryFn: () => WorkListControllerService.getClosedEnrollment({ careName, dob, enrollmentServiceType, fullName, page, size, sort }) });
export const prefetchUseWorkListControllerServiceGetAllMonitoringData = (queryClient: QueryClient, { endDate, escalateStatus, isAlert, isEscalate, isResolve, myAlert, page, search, size, sort, startDate }: {
  endDate?: string;
  escalateStatus?: "CLOSED" | "OPEN";
  isAlert?: boolean;
  isEscalate?: boolean;
  isResolve?: boolean;
  myAlert?: boolean;
  page?: number;
  search?: string;
  size?: number;
  sort?: string[];
  startDate?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetAllMonitoringDataKeyFn({ endDate, escalateStatus, isAlert, isEscalate, isResolve, myAlert, page, search, size, sort, startDate }), queryFn: () => WorkListControllerService.getAllMonitoringData({ endDate, escalateStatus, isAlert, isEscalate, isResolve, myAlert, page, search, size, sort, startDate }) });
export const prefetchUseWorkListControllerServiceGetAlertsMonitoring = (queryClient: QueryClient, { careName, dob, enrollmentServiceType, fullName, page, size, sort }: {
  careName?: string;
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  page?: number;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetAlertsMonitoringKeyFn({ careName, dob, enrollmentServiceType, fullName, page, size, sort }), queryFn: () => WorkListControllerService.getAlertsMonitoring({ careName, dob, enrollmentServiceType, fullName, page, size, sort }) });
export const prefetchUseWorkListControllerServiceGetActiveEnrollment = (queryClient: QueryClient, { careName, dob, enrollmentServiceType, fullName, page, size, sort }: {
  careName?: string;
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  page?: number;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseWorkListControllerServiceGetActiveEnrollmentKeyFn({ careName, dob, enrollmentServiceType, fullName, page, size, sort }), queryFn: () => WorkListControllerService.getActiveEnrollment({ careName, dob, enrollmentServiceType, fullName, page, size, sort }) });
export const prefetchUseTemplateControllerServiceGetTemplateById = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseTemplateControllerServiceGetTemplateByIdKeyFn({ id }), queryFn: () => TemplateControllerService.getTemplateById({ id }) });
export const prefetchUseTemplateControllerServiceGetAll = (queryClient: QueryClient, { page, searchString, size, sort }: {
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseTemplateControllerServiceGetAllKeyFn({ page, searchString, size, sort }), queryFn: () => TemplateControllerService.getAll({ page, searchString, size, sort }) });
export const prefetchUseRedirectProviderControllerServiceGetProvider = (queryClient: QueryClient, { providerGroupUuid, providerUuid }: {
  providerGroupUuid: string;
  providerUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseRedirectProviderControllerServiceGetProviderKeyFn({ providerGroupUuid, providerUuid }), queryFn: () => RedirectProviderControllerService.getProvider({ providerGroupUuid, providerUuid }) });
export const prefetchUseRedirectProviderControllerServiceGetAllProvider1 = (queryClient: QueryClient, { exclude, page, providerGroupUuid, searchBy, size, sort, status }: {
  exclude?: boolean;
  page?: number;
  providerGroupUuid: string;
  searchBy?: string;
  size?: number;
  sort?: string[];
  status?: boolean;
}) => queryClient.prefetchQuery({ queryKey: Common.UseRedirectProviderControllerServiceGetAllProvider1KeyFn({ exclude, page, providerGroupUuid, searchBy, size, sort, status }), queryFn: () => RedirectProviderControllerService.getAllProvider1({ exclude, page, providerGroupUuid, searchBy, size, sort, status }) });
export const prefetchUseRedirectDeviceControllerServiceFetchDevice = (queryClient: QueryClient, { providerGroupUuid, uuid }: {
  providerGroupUuid: string;
  uuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseRedirectDeviceControllerServiceFetchDeviceKeyFn({ providerGroupUuid, uuid }), queryFn: () => RedirectDeviceControllerService.fetchDevice({ providerGroupUuid, uuid }) });
export const prefetchUseRedirectDeviceControllerServiceFetchDevices = (queryClient: QueryClient, { page, providerGroupUuid, searchString, size, sort, status }: {
  page?: number;
  providerGroupUuid: string;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: boolean;
}) => queryClient.prefetchQuery({ queryKey: Common.UseRedirectDeviceControllerServiceFetchDevicesKeyFn({ page, providerGroupUuid, searchString, size, sort, status }), queryFn: () => RedirectDeviceControllerService.fetchDevices({ page, providerGroupUuid, searchString, size, sort, status }) });
export const prefetchUseProviderControllerServiceGetProvider1 = (queryClient: QueryClient, { providerUuid }: {
  providerUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderControllerServiceGetProvider1KeyFn({ providerUuid }), queryFn: () => ProviderControllerService.getProvider1({ providerUuid }) });
export const prefetchUseProviderControllerServiceGetProvider2 = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseProviderControllerServiceGetProvider2KeyFn(), queryFn: () => ProviderControllerService.getProvider2() });
export const prefetchUseProviderControllerServiceGetCareManagers = (queryClient: QueryClient, { page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderControllerServiceGetCareManagersKeyFn({ page, patientUserUuid, size, sort }), queryFn: () => ProviderControllerService.getCareManagers({ page, patientUserUuid, size, sort }) });
export const prefetchUseProviderControllerServiceGetProvidersByPatientUuid = (queryClient: QueryClient, { page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderControllerServiceGetProvidersByPatientUuidKeyFn({ page, patientUserUuid, size, sort }), queryFn: () => ProviderControllerService.getProvidersByPatientUuid({ page, patientUserUuid, size, sort }) });
export const prefetchUseProviderControllerServiceGetProviderByUuid = (queryClient: QueryClient, { providerUserUuid }: {
  providerUserUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderControllerServiceGetProviderByUuidKeyFn({ providerUserUuid }), queryFn: () => ProviderControllerService.getProviderByUuid({ providerUserUuid }) });
export const prefetchUseProviderControllerServiceGetAllProvider3 = (queryClient: QueryClient, { exclude, page, role, searchBy, size, sort, status }: {
  exclude?: boolean;
  page?: number;
  role?: string;
  searchBy?: string;
  size?: number;
  sort?: string[];
  status?: boolean;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderControllerServiceGetAllProvider3KeyFn({ exclude, page, role, searchBy, size, sort, status }), queryFn: () => ProviderControllerService.getAllProvider3({ exclude, page, role, searchBy, size, sort, status }) });
export const prefetchUseProviderGroupControllerServiceGetProviderGroup = (queryClient: QueryClient, { uuid }: {
  uuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderGroupControllerServiceGetProviderGroupKeyFn({ uuid }), queryFn: () => ProviderGroupControllerService.getProviderGroup({ uuid }) });
export const prefetchUseProviderGroupControllerServiceGetUserCommonDetailsByUsername = (queryClient: QueryClient, { username }: {
  username: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderGroupControllerServiceGetUserCommonDetailsByUsernameKeyFn({ username }), queryFn: () => ProviderGroupControllerService.getUserCommonDetailsByUsername({ username }) });
export const prefetchUseProviderGroupControllerServiceGetUserCommonDetailsByUserUuid = (queryClient: QueryClient, { userUuid }: {
  userUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderGroupControllerServiceGetUserCommonDetailsByUserUuidKeyFn({ userUuid }), queryFn: () => ProviderGroupControllerService.getUserCommonDetailsByUserUuid({ userUuid }) });
export const prefetchUseProviderGroupControllerServiceGetProviderGroupDetailsByTenantGroup = (queryClient: QueryClient, { tenantGroup }: {
  tenantGroup: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderGroupControllerServiceGetProviderGroupDetailsByTenantGroupKeyFn({ tenantGroup }), queryFn: () => ProviderGroupControllerService.getProviderGroupDetailsByTenantGroup({ tenantGroup }) });
export const prefetchUseProviderGroupControllerServiceGetAllProviderGroups = (queryClient: QueryClient, { active, page, searchString, size, sort, state }: {
  active?: boolean;
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  state?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderGroupControllerServiceGetAllProviderGroupsKeyFn({ active, page, searchString, size, sort, state }), queryFn: () => ProviderGroupControllerService.getAllProviderGroups({ active, page, searchString, size, sort, state }) });
export const prefetchUsePatientControllerServiceGetPatientByUuid = (queryClient: QueryClient, { uuid }: {
  uuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientControllerServiceGetPatientByUuidKeyFn({ uuid }), queryFn: () => PatientControllerService.getPatientByUuid({ uuid }) });
export const prefetchUsePatientControllerServiceSearchPatientProvider = (queryClient: QueryClient, { page, search, size, sort }: {
  page?: number;
  search?: string;
  size?: number;
  sort?: string[];
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientControllerServiceSearchPatientProviderKeyFn({ page, search, size, sort }), queryFn: () => PatientControllerService.searchPatientProvider({ page, search, size, sort }) });
export const prefetchUsePatientControllerServiceGetProfile = (queryClient: QueryClient, { mobileType }: {
  mobileType?: "IOS" | "ANDROID";
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientControllerServiceGetProfileKeyFn({ mobileType }), queryFn: () => PatientControllerService.getProfile({ mobileType }) });
export const prefetchUsePatientControllerServiceGetAvatar = (queryClient: QueryClient, { patientUserUuid }: {
  patientUserUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientControllerServiceGetAvatarKeyFn({ patientUserUuid }), queryFn: () => PatientControllerService.getAvatar({ patientUserUuid }) });
export const prefetchUsePatientControllerServiceGetSmsWithProviderEntity = (queryClient: QueryClient, { activity, page, searchString, size, sort }: {
  activity: "ENROLLMENT" | "NEW_READING_ADDED" | "ALERT_GENERATE" | "ALERT_RESOLVED" | "APP_MESSAGE" | "SMS_MESSAGE" | "RECEIVED_NOTIFICATION" | "TIME_LOGGED" | "VITALS_REVIEWED" | "NOTE_ADDED" | "ESCALATE" | "VITALS_CONFIG_UPDATE";
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientControllerServiceGetSmsWithProviderEntityKeyFn({ activity, page, searchString, size, sort }), queryFn: () => PatientControllerService.getSmsWithProviderEntity({ activity, page, searchString, size, sort }) });
export const prefetchUsePatientControllerServiceGetErrorForFile = (queryClient: QueryClient, { key }: {
  key: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientControllerServiceGetErrorForFileKeyFn({ key }), queryFn: () => PatientControllerService.getErrorForFile({ key }) });
export const prefetchUsePatientControllerServiceGetFamilyMembers = (queryClient: QueryClient, { page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientControllerServiceGetFamilyMembersKeyFn({ page, patientUserUuid, size, sort }), queryFn: () => PatientControllerService.getFamilyMembers({ page, patientUserUuid, size, sort }) });
export const prefetchUsePatientControllerServiceGetAllPatient = (queryClient: QueryClient, { page, searchBy, size, sort, status }: {
  page?: number;
  searchBy?: string;
  size?: number;
  sort?: string[];
  status?: boolean;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientControllerServiceGetAllPatientKeyFn({ page, searchBy, size, sort, status }), queryFn: () => PatientControllerService.getAllPatient({ page, searchBy, size, sort, status }) });
export const prefetchUsePatientControllerServiceGetAllCareTeam = (queryClient: QueryClient, { page, searchBy, serviceType, size, sort, userUuid }: {
  page?: number;
  searchBy?: string;
  serviceType?: string;
  size?: number;
  sort?: string[];
  userUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientControllerServiceGetAllCareTeamKeyFn({ page, searchBy, serviceType, size, sort, userUuid }), queryFn: () => PatientControllerService.getAllCareTeam({ page, searchBy, serviceType, size, sort, userUuid }) });
export const prefetchUsePatientControllerServiceGetManagers = (queryClient: QueryClient, { page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientControllerServiceGetManagersKeyFn({ page, patientUserUuid, size, sort }), queryFn: () => PatientControllerService.getManagers({ page, patientUserUuid, size, sort }) });
export const prefetchUsePatientSymptomControllerServiceGetAllByPatient = (queryClient: QueryClient, { userUuid }: {
  userUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientSymptomControllerServiceGetAllByPatientKeyFn({ userUuid }), queryFn: () => PatientSymptomControllerService.getAllByPatient({ userUuid }) });
export const prefetchUsePatientMedicationControllerServiceChangeStatus = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UsePatientMedicationControllerServiceChangeStatusKeyFn(), queryFn: () => PatientMedicationControllerService.changeStatus() });
export const prefetchUsePatientMedicationControllerServiceGetAllMedicationsByPatient = (queryClient: QueryClient, { page, searchBy, size, sort, userUuid }: {
  page?: number;
  searchBy?: string;
  size?: number;
  sort?: string[];
  userUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientMedicationControllerServiceGetAllMedicationsByPatientKeyFn({ page, searchBy, size, sort, userUuid }), queryFn: () => PatientMedicationControllerService.getAllMedicationsByPatient({ page, searchBy, size, sort, userUuid }) });
export const prefetchUsePatientMedicationControllerServiceGetMedicationsByPatient = (queryClient: QueryClient, { page, searchString, size, sort, status, userUuid }: {
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: string;
  userUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientMedicationControllerServiceGetMedicationsByPatientKeyFn({ page, searchString, size, sort, status, userUuid }), queryFn: () => PatientMedicationControllerService.getMedicationsByPatient({ page, searchString, size, sort, status, userUuid }) });
export const prefetchUsePatientMedicationControllerServiceGetAllMedications = (queryClient: QueryClient, { page, searchBy, size, sort }: {
  page?: number;
  searchBy?: string;
  size?: number;
  sort?: string[];
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientMedicationControllerServiceGetAllMedicationsKeyFn({ page, searchBy, size, sort }), queryFn: () => PatientMedicationControllerService.getAllMedications({ page, searchBy, size, sort }) });
export const prefetchUsePatientConditionControllerServiceGetAllPatientConditions = (queryClient: QueryClient, { page, searchString, serviceType, size, sort, userUuid }: {
  page?: number;
  searchString?: string;
  serviceType?: "RPM" | "RTM" | "CCM";
  size?: number;
  sort?: string[];
  userUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientConditionControllerServiceGetAllPatientConditionsKeyFn({ page, searchString, serviceType, size, sort, userUuid }), queryFn: () => PatientConditionControllerService.getAllPatientConditions({ page, searchString, serviceType, size, sort, userUuid }) });
export const prefetchUsePatientAllergyControllerServiceGetAllAllergy = (queryClient: QueryClient, { page, searchString, size, sort, userUuid }: {
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  userUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePatientAllergyControllerServiceGetAllAllergyKeyFn({ page, searchString, size, sort, userUuid }), queryFn: () => PatientAllergyControllerService.getAllAllergy({ page, searchString, size, sort, userUuid }) });
export const prefetchUseNotificationEntityControllerServiceGetAllNotifications = (queryClient: QueryClient, { page, size, sort, type }: {
  page?: number;
  size?: number;
  sort?: string[];
  type?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseNotificationEntityControllerServiceGetAllNotificationsKeyFn({ page, size, sort, type }), queryFn: () => NotificationEntityControllerService.getAllNotifications({ page, size, sort, type }) });
export const prefetchUseNotificationEntityControllerServiceGetCountNotification = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseNotificationEntityControllerServiceGetCountNotificationKeyFn(), queryFn: () => NotificationEntityControllerService.getCountNotification() });
export const prefetchUseNotificationControllerServiceGetAllNotification = (queryClient: QueryClient, { search }: {
  search?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseNotificationControllerServiceGetAllNotificationKeyFn({ search }), queryFn: () => NotificationControllerService.getAllNotification({ search }) });
export const prefetchUseNotificationProviderControllerServiceGetAllNotifications1 = (queryClient: QueryClient, { page, size, sort, type }: {
  page?: number;
  size?: number;
  sort?: string[];
  type?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseNotificationProviderControllerServiceGetAllNotifications1KeyFn({ page, size, sort, type }), queryFn: () => NotificationProviderControllerService.getAllNotifications1({ page, size, sort, type }) });
export const prefetchUseNotificationProviderControllerServiceGetCountNotification1 = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseNotificationProviderControllerServiceGetCountNotification1KeyFn(), queryFn: () => NotificationProviderControllerService.getCountNotification1() });
export const prefetchUseLabResultControllerServiceGetById = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseLabResultControllerServiceGetByIdKeyFn({ id }), queryFn: () => LabResultControllerService.getById({ id }) });
export const prefetchUseLabResultControllerServiceGetAllPatientLabResult = (queryClient: QueryClient, { page, searchString, size, sort, userUuid }: {
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  userUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseLabResultControllerServiceGetAllPatientLabResultKeyFn({ page, searchString, size, sort, userUuid }), queryFn: () => LabResultControllerService.getAllPatientLabResult({ page, searchString, size, sort, userUuid }) });
export const prefetchUseInsuranceControllerServiceGetAllInsuranceMobile = (queryClient: QueryClient, { page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseInsuranceControllerServiceGetAllInsuranceMobileKeyFn({ page, patientUserUuid, size, sort }), queryFn: () => InsuranceControllerService.getAllInsuranceMobile({ page, patientUserUuid, size, sort }) });
export const prefetchUseIcdCodeControllerServiceGetIcdCodeById = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseIcdCodeControllerServiceGetIcdCodeByIdKeyFn({ id }), queryFn: () => IcdCodeControllerService.getIcdCodeById({ id }) });
export const prefetchUseIcdCodeControllerServiceGetAll1 = (queryClient: QueryClient, { isFavorite, page, searchString, size, sort }: {
  isFavorite?: boolean;
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseIcdCodeControllerServiceGetAll1KeyFn({ isFavorite, page, searchString, size, sort }), queryFn: () => IcdCodeControllerService.getAll1({ isFavorite, page, searchString, size, sort }) });
export const prefetchUseEnrollmentControllerServiceGetVitalsOfPatient = (queryClient: QueryClient, { patientUserUuid }: {
  patientUserUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseEnrollmentControllerServiceGetVitalsOfPatientKeyFn({ patientUserUuid }), queryFn: () => EnrollmentControllerService.getVitalsOfPatient({ patientUserUuid }) });
export const prefetchUseEnrollmentControllerServiceGetEnrollmentById = (queryClient: QueryClient, { uuid }: {
  uuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseEnrollmentControllerServiceGetEnrollmentByIdKeyFn({ uuid }), queryFn: () => EnrollmentControllerService.getEnrollmentById({ uuid }) });
export const prefetchUseEnrollmentControllerServiceGetEnrollmentOfPatient = (queryClient: QueryClient, { page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseEnrollmentControllerServiceGetEnrollmentOfPatientKeyFn({ page, patientUserUuid, size, sort }), queryFn: () => EnrollmentControllerService.getEnrollmentOfPatient({ page, patientUserUuid, size, sort }) });
export const prefetchUseEnrollmentControllerServiceGetAllEnrollment = (queryClient: QueryClient, { endDate, enrollmentServiceType, enrollmentStatusType, page, size, sort, startDate }: {
  endDate?: string;
  enrollmentServiceType?: "RPM" | "RTM" | "CCM";
  enrollmentStatusType?: "CLOSED" | "NEW" | "ACTIVE";
  page?: number;
  size?: number;
  sort?: string[];
  startDate?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseEnrollmentControllerServiceGetAllEnrollmentKeyFn({ endDate, enrollmentServiceType, enrollmentStatusType, page, size, sort, startDate }), queryFn: () => EnrollmentControllerService.getAllEnrollment({ endDate, enrollmentServiceType, enrollmentStatusType, page, size, sort, startDate }) });
export const prefetchUseDocumentControllerServiceGetSignature = (queryClient: QueryClient, { documentUuid, patientUserUuid }: {
  documentUuid: string;
  patientUserUuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseDocumentControllerServiceGetSignatureKeyFn({ documentUuid, patientUserUuid }), queryFn: () => DocumentControllerService.getSignature({ documentUuid, patientUserUuid }) });
export const prefetchUseDocumentControllerServiceGetSignedDocuments = (queryClient: QueryClient, { page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseDocumentControllerServiceGetSignedDocumentsKeyFn({ page, patientUserUuid, size, sort }), queryFn: () => DocumentControllerService.getSignedDocuments({ page, patientUserUuid, size, sort }) });
export const prefetchUseDocumentControllerServiceGetPatientMappedDocuments = (queryClient: QueryClient, { archive, documentType, page, patientUserUuid, searchString, size, sort }: {
  archive?: boolean;
  documentType?: ("CONSENT" | "EDUCATION" | "CHALLENGES" | "GENERAL" | "REPORT" | "HOME_EXERCISE")[];
  page?: number;
  patientUserUuid: string;
  searchString?: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseDocumentControllerServiceGetPatientMappedDocumentsKeyFn({ archive, documentType, page, patientUserUuid, searchString, size, sort }), queryFn: () => DocumentControllerService.getPatientMappedDocuments({ archive, documentType, page, patientUserUuid, searchString, size, sort }) });
export const prefetchUseDocumentControllerServiceGetDocuments = (queryClient: QueryClient, { archive, documentType, page, searchString, size, sort }: {
  archive?: boolean;
  documentType?: ("CONSENT" | "EDUCATION" | "CHALLENGES" | "GENERAL" | "REPORT" | "HOME_EXERCISE")[];
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseDocumentControllerServiceGetDocumentsKeyFn({ archive, documentType, page, searchString, size, sort }), queryFn: () => DocumentControllerService.getDocuments({ archive, documentType, page, searchString, size, sort }) });
export const prefetchUseDeviceControllerServiceFetchDeviceByPatient = (queryClient: QueryClient, { page, patientUserUuid, search, size, sort }: {
  page?: number;
  patientUserUuid: string;
  search?: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseDeviceControllerServiceFetchDeviceByPatientKeyFn({ page, patientUserUuid, search, size, sort }), queryFn: () => DeviceControllerService.fetchDeviceByPatient({ page, patientUserUuid, search, size, sort }) });
export const prefetchUseDeviceControllerServiceFetchDevice1 = (queryClient: QueryClient, { uuid }: {
  uuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseDeviceControllerServiceFetchDevice1KeyFn({ uuid }), queryFn: () => DeviceControllerService.fetchDevice1({ uuid }) });
export const prefetchUseDeviceControllerServiceFetchDevices1 = (queryClient: QueryClient, { page, searchString, size, sort, status }: {
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: boolean;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseDeviceControllerServiceFetchDevices1KeyFn({ page, searchString, size, sort, status }), queryFn: () => DeviceControllerService.fetchDevices1({ page, searchString, size, sort, status }) });
export const prefetchUseDeviceControllerServiceFetchAllDevicesName = (queryClient: QueryClient, { page, size, sort }: {
  page?: number;
  size?: number;
  sort?: string[];
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseDeviceControllerServiceFetchAllDevicesNameKeyFn({ page, size, sort }), queryFn: () => DeviceControllerService.fetchAllDevicesName({ page, size, sort }) });
export const prefetchUseAdminUserControllerServiceGetProfile1 = (queryClient: QueryClient, { userUuid }: {
  userUuid?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminUserControllerServiceGetProfile1KeyFn({ userUuid }), queryFn: () => AdminUserControllerService.getProfile1({ userUuid }) });
export const prefetchUseAdminUserControllerServiceGetUsers = (queryClient: QueryClient, { active, exclude, page, searchBy, size, sort, sortBy, sortDirection }: {
  active?: boolean;
  exclude?: boolean;
  page?: number;
  searchBy?: string;
  size?: number;
  sort?: string[];
  sortBy?: string;
  sortDirection?: "ASC" | "DESC";
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminUserControllerServiceGetUsersKeyFn({ active, exclude, page, searchBy, size, sort, sortBy, sortDirection }), queryFn: () => AdminUserControllerService.getUsers({ active, exclude, page, searchBy, size, sort, sortBy, sortDirection }) });
export const prefetchUseTimeLogControllerServiceGetTimeLogByPatientUserUuidAndEnrollmentServiceType = (queryClient: QueryClient, { enrollmentServiceType, patientUserUuid, specificMonth }: {
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  patientUserUuid: string;
  specificMonth?: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseTimeLogControllerServiceGetTimeLogByPatientUserUuidAndEnrollmentServiceTypeKeyFn({ enrollmentServiceType, patientUserUuid, specificMonth }), queryFn: () => TimeLogControllerService.getTimeLogByPatientUserUuidAndEnrollmentServiceType({ enrollmentServiceType, patientUserUuid, specificMonth }) });
export const prefetchUseTimeLogControllerServiceGetMonthWiseTimeLog = (queryClient: QueryClient, { enrollmentServiceType, page, patientUserUuid, size, sort }: {
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseTimeLogControllerServiceGetMonthWiseTimeLogKeyFn({ enrollmentServiceType, page, patientUserUuid, size, sort }), queryFn: () => TimeLogControllerService.getMonthWiseTimeLog({ enrollmentServiceType, page, patientUserUuid, size, sort }) });
export const prefetchUseTimeLogControllerServiceGetManualEntries = (queryClient: QueryClient, { enrollmentServiceType, page, patientUserUuid, size, sort }: {
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseTimeLogControllerServiceGetManualEntriesKeyFn({ enrollmentServiceType, page, patientUserUuid, size, sort }), queryFn: () => TimeLogControllerService.getManualEntries({ enrollmentServiceType, page, patientUserUuid, size, sort }) });
export const prefetchUseTimeLogControllerServiceGetTimeLine = (queryClient: QueryClient, { activity, endDate, enrollmentServiceType, page, patientUserUuid, size, sort, startDate, timeZone }: {
  activity?: ("ENROLLMENT" | "NEW_READING_ADDED" | "ALERT_GENERATE" | "ALERT_RESOLVED" | "APP_MESSAGE" | "SMS_MESSAGE" | "RECEIVED_NOTIFICATION" | "TIME_LOGGED" | "VITALS_REVIEWED" | "NOTE_ADDED" | "ESCALATE" | "VITALS_CONFIG_UPDATE")[];
  endDate?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
  startDate?: string;
  timeZone: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseTimeLogControllerServiceGetTimeLineKeyFn({ activity, endDate, enrollmentServiceType, page, patientUserUuid, size, sort, startDate, timeZone }), queryFn: () => TimeLogControllerService.getTimeLine({ activity, endDate, enrollmentServiceType, page, patientUserUuid, size, sort, startDate, timeZone }) });
export const prefetchUseRedirectImportControllerServiceGetPatientAuditFiles = (queryClient: QueryClient, { file, page, providerGroupUuid, searchString, size, sort, status }: {
  file?: string;
  page?: number;
  providerGroupUuid: string;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: "IN_PROGRESS" | "COMPLETED_WITH_ERROR" | "COMPLETED" | "FAILED";
}) => queryClient.prefetchQuery({ queryKey: Common.UseRedirectImportControllerServiceGetPatientAuditFilesKeyFn({ file, page, providerGroupUuid, searchString, size, sort, status }), queryFn: () => RedirectImportControllerService.getPatientAuditFiles({ file, page, providerGroupUuid, searchString, size, sort, status }) });
export const prefetchUseRedirectImportControllerServiceGetPatientAuditFileRecords = (queryClient: QueryClient, { audiFileId, page, providerGroupUuid, searchString, size, sort, status }: {
  audiFileId: number;
  page?: number;
  providerGroupUuid: string;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: "FAILED" | "SUCCESS";
}) => queryClient.prefetchQuery({ queryKey: Common.UseRedirectImportControllerServiceGetPatientAuditFileRecordsKeyFn({ audiFileId, page, providerGroupUuid, searchString, size, sort, status }), queryFn: () => RedirectImportControllerService.getPatientAuditFileRecords({ audiFileId, page, providerGroupUuid, searchString, size, sort, status }) });
export const prefetchUseImportControllerServiceGetPatientAuditFiles1 = (queryClient: QueryClient, { file, page, searchString, size, sort, status }: {
  file?: string;
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: "IN_PROGRESS" | "COMPLETED_WITH_ERROR" | "COMPLETED" | "FAILED";
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseImportControllerServiceGetPatientAuditFiles1KeyFn({ file, page, searchString, size, sort, status }), queryFn: () => ImportControllerService.getPatientAuditFiles1({ file, page, searchString, size, sort, status }) });
export const prefetchUseImportControllerServiceGetPatientAuditFileRecords1 = (queryClient: QueryClient, { audiFileId, page, searchString, size, sort, status }: {
  audiFileId: number;
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: "FAILED" | "SUCCESS";
}) => queryClient.prefetchQuery({ queryKey: Common.UseImportControllerServiceGetPatientAuditFileRecords1KeyFn({ audiFileId, page, searchString, size, sort, status }), queryFn: () => ImportControllerService.getPatientAuditFileRecords1({ audiFileId, page, searchString, size, sort, status }) });
export const prefetchUseImportControllerServiceGetTemplateInCsv = (queryClient: QueryClient, { templateType }: {
  templateType: "PATIENT";
}) => queryClient.prefetchQuery({ queryKey: Common.UseImportControllerServiceGetTemplateInCsvKeyFn({ templateType }), queryFn: () => ImportControllerService.getTemplateInCsv({ templateType }) });
export const prefetchUseGlobalNoteControllerServiceGetGlobalNotesByPatientUuid = (queryClient: QueryClient, { page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseGlobalNoteControllerServiceGetGlobalNotesByPatientUuidKeyFn({ page, patientUserUuid, size, sort }), queryFn: () => GlobalNoteControllerService.getGlobalNotesByPatientUuid({ page, patientUserUuid, size, sort }) });
export const prefetchUseBillingControllerServicePatient360AllBilling = (queryClient: QueryClient, { localDate, patientUserUuid, service }: {
  localDate: string;
  patientUserUuid: string;
  service: "RPM" | "RTM" | "CCM";
}) => queryClient.prefetchQuery({ queryKey: Common.UseBillingControllerServicePatient360AllBillingKeyFn({ localDate, patientUserUuid, service }), queryFn: () => BillingControllerService.patient360AllBilling({ localDate, patientUserUuid, service }) });
export const prefetchUseBillingControllerServiceGetMonitoringBillingByUuid = (queryClient: QueryClient, { uuid }: {
  uuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseBillingControllerServiceGetMonitoringBillingByUuidKeyFn({ uuid }), queryFn: () => BillingControllerService.getMonitoringBillingByUuid({ uuid }) });
export const prefetchUseBillingControllerServiceGetMonitoringBillingCount = (queryClient: QueryClient, { localDate }: {
  localDate: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseBillingControllerServiceGetMonitoringBillingCountKeyFn({ localDate }), queryFn: () => BillingControllerService.getMonitoringBillingCount({ localDate }) });
export const prefetchUseBillingControllerServiceGetAllBillingForMonitoring = (queryClient: QueryClient, { claimStatus, localDate, page, patientName, providerName, service, size, sort }: {
  claimStatus?: string;
  localDate: string;
  page?: number;
  patientName?: string;
  providerName?: string;
  service: "RPM" | "RTM" | "CCM";
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseBillingControllerServiceGetAllBillingForMonitoringKeyFn({ claimStatus, localDate, page, patientName, providerName, service, size, sort }), queryFn: () => BillingControllerService.getAllBillingForMonitoring({ claimStatus, localDate, page, patientName, providerName, service, size, sort }) });
export const prefetchUseBillingControllerServiceGetInteractionBillingByUuid = (queryClient: QueryClient, { localDate, uuid }: {
  localDate: string;
  uuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseBillingControllerServiceGetInteractionBillingByUuidKeyFn({ localDate, uuid }), queryFn: () => BillingControllerService.getInteractionBillingByUuid({ localDate, uuid }) });
export const prefetchUseBillingControllerServiceGetInteractionBillingCount = (queryClient: QueryClient, { localDate }: {
  localDate: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseBillingControllerServiceGetInteractionBillingCountKeyFn({ localDate }), queryFn: () => BillingControllerService.getInteractionBillingCount({ localDate }) });
export const prefetchUseBillingControllerServiceGetAllBillingForInteraction = (queryClient: QueryClient, { claimStatus, localDate, page, patientName, providerName, service, size, sort }: {
  claimStatus?: string;
  localDate: string;
  page?: number;
  patientName?: string;
  providerName?: string;
  service: "RPM" | "RTM" | "CCM";
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseBillingControllerServiceGetAllBillingForInteractionKeyFn({ claimStatus, localDate, page, patientName, providerName, service, size, sort }), queryFn: () => BillingControllerService.getAllBillingForInteraction({ claimStatus, localDate, page, patientName, providerName, service, size, sort }) });
export const prefetchUseBillingControllerServiceGetEnrollmentBillingByUuid = (queryClient: QueryClient, { uuid }: {
  uuid: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseBillingControllerServiceGetEnrollmentBillingByUuidKeyFn({ uuid }), queryFn: () => BillingControllerService.getEnrollmentBillingByUuid({ uuid }) });
export const prefetchUseBillingControllerServiceGetEnrollmentBillingCount = (queryClient: QueryClient, { localDate }: {
  localDate: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseBillingControllerServiceGetEnrollmentBillingCountKeyFn({ localDate }), queryFn: () => BillingControllerService.getEnrollmentBillingCount({ localDate }) });
export const prefetchUseBillingControllerServiceGetAllBillingForEnrollment = (queryClient: QueryClient, { claimStatus, localDate, page, patientName, providerName, service, size, sort }: {
  claimStatus?: string;
  localDate: string;
  page?: number;
  patientName?: string;
  providerName?: string;
  service: "RPM" | "RTM" | "CCM";
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseBillingControllerServiceGetAllBillingForEnrollmentKeyFn({ claimStatus, localDate, page, patientName, providerName, service, size, sort }), queryFn: () => BillingControllerService.getAllBillingForEnrollment({ claimStatus, localDate, page, patientName, providerName, service, size, sort }) });
export const prefetchUseActivityTimeLogControllerServiceAllActivity = (queryClient: QueryClient, { page, providerUseruuid, size, sort }: {
  page?: number;
  providerUseruuid: string;
  size?: number;
  sort?: string[];
}) => queryClient.prefetchQuery({ queryKey: Common.UseActivityTimeLogControllerServiceAllActivityKeyFn({ page, providerUseruuid, size, sort }), queryFn: () => ActivityTimeLogControllerService.allActivity({ page, providerUseruuid, size, sort }) });
export const prefetchUseSpecialityControllerServiceGetAllSpecialities = (queryClient: QueryClient, { page, searchString, size, sort }: {
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseSpecialityControllerServiceGetAllSpecialitiesKeyFn({ page, searchString, size, sort }), queryFn: () => SpecialityControllerService.getAllSpecialities({ page, searchString, size, sort }) });
export const prefetchUseRedirectPatientControllerServiceGetAllProvider2 = (queryClient: QueryClient, { page, providerGroupUuid, searchBy, size, sort, status }: {
  page?: number;
  providerGroupUuid: string;
  searchBy?: string;
  size?: number;
  sort?: string[];
  status?: boolean;
}) => queryClient.prefetchQuery({ queryKey: Common.UseRedirectPatientControllerServiceGetAllProvider2KeyFn({ page, providerGroupUuid, searchBy, size, sort, status }), queryFn: () => RedirectPatientControllerService.getAllProvider2({ page, providerGroupUuid, searchBy, size, sort, status }) });
export const prefetchUsePasswordGeneratorControllerServiceGeneratePassword = (queryClient: QueryClient, { count }: {
  count?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UsePasswordGeneratorControllerServiceGeneratePasswordKeyFn({ count }), queryFn: () => PasswordGeneratorControllerService.generatePassword({ count }) });
export const prefetchUseTwilioConversationControllerServiceGetAuthToken = (queryClient: QueryClient, { identity }: {
  identity: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseTwilioConversationControllerServiceGetAuthTokenKeyFn({ identity }), queryFn: () => TwilioConversationControllerService.getAuthToken({ identity }) });
export const prefetchUseNameRecordControllerServiceBuildAndGetPortalUrl = (queryClient: QueryClient, { attachProtocol, nameRecord }: {
  attachProtocol: boolean;
  nameRecord?: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseNameRecordControllerServiceBuildAndGetPortalUrlKeyFn({ attachProtocol, nameRecord }), queryFn: () => NameRecordControllerService.buildAndGetPortalUrl({ attachProtocol, nameRecord }) });
export const prefetchUseNameRecordControllerServiceIsNameRecordPresent = (queryClient: QueryClient, { nameRecord }: {
  nameRecord: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseNameRecordControllerServiceIsNameRecordPresentKeyFn({ nameRecord }), queryFn: () => NameRecordControllerService.isNameRecordPresent({ nameRecord }) });
export const prefetchUseAwsControllerServiceGetFile = (queryClient: QueryClient, { key }: {
  key: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAwsControllerServiceGetFileKeyFn({ key }), queryFn: () => AwsControllerService.getFile({ key }) });
export const prefetchUseAwsControllerServiceGetFile1 = (queryClient: QueryClient, { key }: {
  key: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAwsControllerServiceGetFile1KeyFn({ key }), queryFn: () => AwsControllerService.getFile1({ key }) });
