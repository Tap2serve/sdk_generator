// generated with @7nohe/openapi-react-query-codegen@1.4.1 

import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { ActivityTimeLogControllerService, AdminUserControllerService, AuthenticationControllerService, AwsControllerService, BillingControllerService, DeviceControllerService, DocumentControllerService, EmailControllerService, EnrollmentControllerService, GlobalNoteControllerService, IcdCodeControllerService, ImportControllerService, InsuranceControllerService, LabResultControllerService, MonitoringServiceControllerService, NameRecordControllerService, NotificationControllerService, NotificationEntityControllerService, NotificationProviderControllerService, PasswordGeneratorControllerService, PatientAllergyControllerService, PatientConditionControllerService, PatientControllerService, PatientInteractionControllerService, PatientMedicationControllerService, PatientSymptomControllerService, ProviderControllerService, ProviderGroupControllerService, PusherControllerService, RedirectDeviceControllerService, RedirectImportControllerService, RedirectPatientControllerService, RedirectProviderControllerService, SpecialityControllerService, TemplateControllerService, TimeLogControllerService, TwilioConversationControllerService, TwilioSmsControllerService, WorkListControllerService } from "../requests/services.gen";
import { ActivityRequest, AddUpdateParticipantWithServiceRequest, AdminUserUpdateRequest, AuthRequest, AvatarUpdateRequest, AwsImageRequest, CareTeamRequest, CreateAdminUserRequest, CreateInsuranceList, CreateUserTwilioRequest, DeviceCreateRequest, DeviceUpdateRequest, DocumentRequest, EnrollmentBillingUpdateRequest, EnrollmentRequest, EnrollmentTerminateRequest, EscalateRequest, EscalateResolveRequest, FamilyMemberRequest, ForgotPasswordRequest, GlobalNoteRequest, IcdCodeRequest, ImportRequest, ImportRequestIcd, InsuranceMobileRequest, InteractionBillingUpdateRequest, LabResultRequest, MessageRequest, MonitoringBillingUpdateRequest, MonitoringDataRequest, MonitoringDataUpdateRequest, NotificationUpdateRequest, PatientAllergyRequest, PatientConditionRequest, PatientCreateRequest, PatientDocumentMappingRequest, PatientMedicationRequest, PatientSymptomRequest, PatientUpdateRequest, PatientVital, PatientWorkListRequest, Plan, ProviderCreateNewRequest, ProviderCreateRequest, ProviderGroupCreateRequest, ProviderGroupUpdateRequest, ProviderUpdateRequest, SendAppMessagesTwilio, SendMessagesRequest, SendSMSRequest, SendSMSTwilio, SetPasswordRequest, TemplateRequest, TimeLogRequest, UpdateCheckboxesInteraction, UpdateUserTwilioRequest, User, UserRequest, UserSignatureRequest } from "../requests/types.gen";
import * as Common from "./common";
export const useWorkListControllerServiceGetWeekWiseInteraction = <TData = Common.WorkListControllerServiceGetWeekWiseInteractionDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ careName, dob, enrollmentServiceType, fullName, interactionWeek, page, size, sort }: {
  careName?: string;
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  interactionWeek: "WEEK1" | "WEEK2" | "WEEK3" | "WEEK4";
  page?: number;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetWeekWiseInteractionKeyFn({ careName, dob, enrollmentServiceType, fullName, interactionWeek, page, size, sort }, queryKey), queryFn: () => WorkListControllerService.getWeekWiseInteraction({ careName, dob, enrollmentServiceType, fullName, interactionWeek, page, size, sort }) as TData, ...options });
export const useWorkListControllerServiceGetByVitals = <TData = Common.WorkListControllerServiceGetByVitalsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ endDate, page, patientUserUuid, size, sort, startDate, vital }: {
  endDate?: string;
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
  startDate?: string;
  vital: "BLOOD_PRESSURE" | "BLOOD_PRESSURE_SYSTOLIC" | "BLOOD_PRESSURE_DIASTOLIC" | "BLOOD_GLUCOSE" | "HEART_RATE" | "BODY_TEMPERATURE" | "RESPIRATION_RATE" | "WEIGHT" | "OXYGEN_SATURATION" | "PULSE_RATE" | "BODY_MASS_INDEX" | "RESPIRATORY_VOLUME" | "HEIGHT" | "FORCED_EXPIRATORY_VOLUME" | "PEAK_EXPIRATORY" | "PERFUSION_INDEX" | "STEPS" | "PAINSCALE";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetByVitalsKeyFn({ endDate, page, patientUserUuid, size, sort, startDate, vital }, queryKey), queryFn: () => WorkListControllerService.getByVitals({ endDate, page, patientUserUuid, size, sort, startDate, vital }) as TData, ...options });
export const useWorkListControllerServiceProgressBarPatient360 = <TData = Common.WorkListControllerServiceProgressBarPatient360DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ endDate, enrollmentServiceType, patientUserUuid, startDate }: {
  endDate: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  patientUserUuid: string;
  startDate: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceProgressBarPatient360KeyFn({ endDate, enrollmentServiceType, patientUserUuid, startDate }, queryKey), queryFn: () => WorkListControllerService.progressBarPatient360({ endDate, enrollmentServiceType, patientUserUuid, startDate }) as TData, ...options });
export const useWorkListControllerServiceGetOfReadingDataMonotoringData = <TData = Common.WorkListControllerServiceGetOfReadingDataMonotoringDataDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ enrollmentServiceType, isAlert, page, patientUserUuid, size, sort }: {
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  isAlert: boolean;
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetOfReadingDataMonotoringDataKeyFn({ enrollmentServiceType, isAlert, page, patientUserUuid, size, sort }, queryKey), queryFn: () => WorkListControllerService.getOfReadingDataMonotoringData({ enrollmentServiceType, isAlert, page, patientUserUuid, size, sort }) as TData, ...options });
export const useWorkListControllerServiceGetNoDataMonitoring = <TData = Common.WorkListControllerServiceGetNoDataMonitoringDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ careName, dob, enrollmentServiceType, fullName, page, size, sort }: {
  careName?: string;
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  page?: number;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetNoDataMonitoringKeyFn({ careName, dob, enrollmentServiceType, fullName, page, size, sort }, queryKey), queryFn: () => WorkListControllerService.getNoDataMonitoring({ careName, dob, enrollmentServiceType, fullName, page, size, sort }) as TData, ...options });
export const useWorkListControllerServiceGetNewPatient = <TData = Common.WorkListControllerServiceGetNewPatientDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ dob, enrollmentServiceType, fullName, page, size, sort }: {
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  page?: number;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetNewPatientKeyFn({ dob, enrollmentServiceType, fullName, page, size, sort }, queryKey), queryFn: () => WorkListControllerService.getNewPatient({ dob, enrollmentServiceType, fullName, page, size, sort }) as TData, ...options });
export const useWorkListControllerServiceGetMonitoringDataById = <TData = Common.WorkListControllerServiceGetMonitoringDataByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetMonitoringDataByIdKeyFn({ id }, queryKey), queryFn: () => WorkListControllerService.getMonitoringDataById({ id }) as TData, ...options });
export const useWorkListControllerServiceGetVitals = <TData = Common.WorkListControllerServiceGetVitalsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ endDate, page, patientUserUuid, size, sort, startDate, timeZone, unit, vitals }: {
  endDate?: string;
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
  startDate?: string;
  timeZone: string;
  unit?: "MMHG" | "FAHRENHEIT" | "BPM" | "KG_PER_M2" | "PERCENTAGE" | "METERS" | "LBS" | "ML" | "L_PER_MIN" | "LITERS" | "DEGREE_CELSIUS" | "KILOGRAMS";
  vitals?: "BLOOD_PRESSURE" | "BLOOD_PRESSURE_SYSTOLIC" | "BLOOD_PRESSURE_DIASTOLIC" | "BLOOD_GLUCOSE" | "HEART_RATE" | "BODY_TEMPERATURE" | "RESPIRATION_RATE" | "WEIGHT" | "OXYGEN_SATURATION" | "PULSE_RATE" | "BODY_MASS_INDEX" | "RESPIRATORY_VOLUME" | "HEIGHT" | "FORCED_EXPIRATORY_VOLUME" | "PEAK_EXPIRATORY" | "PERFUSION_INDEX" | "STEPS" | "PAINSCALE";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetVitalsKeyFn({ endDate, page, patientUserUuid, size, sort, startDate, timeZone, unit, vitals }, queryKey), queryFn: () => WorkListControllerService.getVitals({ endDate, page, patientUserUuid, size, sort, startDate, timeZone, unit, vitals }) as TData, ...options });
export const useWorkListControllerServiceGetReviewedNote = <TData = Common.WorkListControllerServiceGetReviewedNoteDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetReviewedNoteKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => WorkListControllerService.getReviewedNote({ page, patientUserUuid, size, sort }) as TData, ...options });
export const useWorkListControllerServiceGetResolvedNote = <TData = Common.WorkListControllerServiceGetResolvedNoteDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetResolvedNoteKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => WorkListControllerService.getResolvedNote({ page, patientUserUuid, size, sort }) as TData, ...options });
export const useWorkListControllerServiceGetLatestVitals = <TData = Common.WorkListControllerServiceGetLatestVitalsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort, timeZone }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
  timeZone: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetLatestVitalsKeyFn({ page, patientUserUuid, size, sort, timeZone }, queryKey), queryFn: () => WorkListControllerService.getLatestVitals({ page, patientUserUuid, size, sort, timeZone }) as TData, ...options });
export const useWorkListControllerServiceGetEscalate = <TData = Common.WorkListControllerServiceGetEscalateDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ endDate, escalateStatus, page, search, size, sort, startDate }: {
  endDate?: string;
  escalateStatus?: "CLOSED" | "OPEN";
  page?: number;
  search?: string;
  size?: number;
  sort?: string[];
  startDate?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetEscalateKeyFn({ endDate, escalateStatus, page, search, size, sort, startDate }, queryKey), queryFn: () => WorkListControllerService.getEscalate({ endDate, escalateStatus, page, search, size, sort, startDate }) as TData, ...options });
export const useWorkListControllerServiceGetEscalate1 = <TData = Common.WorkListControllerServiceGetEscalate1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ endDate, escalateStatus, page, patientUserUuid, search, size, sort, startDate }: {
  endDate?: string;
  escalateStatus?: "CLOSED" | "OPEN";
  page?: number;
  patientUserUuid: string;
  search?: string;
  size?: number;
  sort?: string[];
  startDate?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetEscalate1KeyFn({ endDate, escalateStatus, page, patientUserUuid, search, size, sort, startDate }, queryKey), queryFn: () => WorkListControllerService.getEscalate1({ endDate, escalateStatus, page, patientUserUuid, search, size, sort, startDate }) as TData, ...options });
export const useWorkListControllerServiceGetDistinctVitalRecords = <TData = Common.WorkListControllerServiceGetDistinctVitalRecordsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetDistinctVitalRecordsKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => WorkListControllerService.getDistinctVitalRecords({ page, patientUserUuid, size, sort }) as TData, ...options });
export const useWorkListControllerServiceMedicalHistoryAlert = <TData = Common.WorkListControllerServiceMedicalHistoryAlertDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ endDate, page, patientUserUuid, search, size, sort, startDate }: {
  endDate?: string;
  page?: number;
  patientUserUuid: string;
  search?: string;
  size?: number;
  sort?: string[];
  startDate?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceMedicalHistoryAlertKeyFn({ endDate, page, patientUserUuid, search, size, sort, startDate }, queryKey), queryFn: () => WorkListControllerService.medicalHistoryAlert({ endDate, page, patientUserUuid, search, size, sort, startDate }) as TData, ...options });
export const useWorkListControllerServiceGetAlertConfig = <TData = Common.WorkListControllerServiceGetAlertConfigDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ enrollmentServiceType, patientUserUuid, vital }: {
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  patientUserUuid: string;
  vital: "BLOOD_PRESSURE" | "BLOOD_PRESSURE_SYSTOLIC" | "BLOOD_PRESSURE_DIASTOLIC" | "BLOOD_GLUCOSE" | "HEART_RATE" | "BODY_TEMPERATURE" | "RESPIRATION_RATE" | "WEIGHT" | "OXYGEN_SATURATION" | "PULSE_RATE" | "BODY_MASS_INDEX" | "RESPIRATORY_VOLUME" | "HEIGHT" | "FORCED_EXPIRATORY_VOLUME" | "PEAK_EXPIRATORY" | "PERFUSION_INDEX" | "STEPS" | "PAINSCALE";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetAlertConfigKeyFn({ enrollmentServiceType, patientUserUuid, vital }, queryKey), queryFn: () => WorkListControllerService.getAlertConfig({ enrollmentServiceType, patientUserUuid, vital }) as TData, ...options });
export const useWorkListControllerServiceGetEscalation = <TData = Common.WorkListControllerServiceGetEscalationDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetEscalationKeyFn({ id }, queryKey), queryFn: () => WorkListControllerService.getEscalation({ id }) as TData, ...options });
export const useWorkListControllerServiceGetDataMonitoring = <TData = Common.WorkListControllerServiceGetDataMonitoringDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ careName, dob, enrollmentServiceType, fullName, page, size, sort }: {
  careName?: string;
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  page?: number;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetDataMonitoringKeyFn({ careName, dob, enrollmentServiceType, fullName, page, size, sort }, queryKey), queryFn: () => WorkListControllerService.getDataMonitoring({ careName, dob, enrollmentServiceType, fullName, page, size, sort }) as TData, ...options });
export const useWorkListControllerServiceGetCountInMonitoringSection = <TData = Common.WorkListControllerServiceGetCountInMonitoringSectionDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ enrollmentServiceType }: {
  enrollmentServiceType?: "RPM" | "RTM" | "CCM";
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetCountInMonitoringSectionKeyFn({ enrollmentServiceType }, queryKey), queryFn: () => WorkListControllerService.getCountInMonitoringSection({ enrollmentServiceType }) as TData, ...options });
export const useWorkListControllerServiceGetCountInInteractionSection = <TData = Common.WorkListControllerServiceGetCountInInteractionSectionDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetCountInInteractionSectionKeyFn(queryKey), queryFn: () => WorkListControllerService.getCountInInteractionSection() as TData, ...options });
export const useWorkListControllerServiceGetCountInEnrollmentSection = <TData = Common.WorkListControllerServiceGetCountInEnrollmentSectionDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetCountInEnrollmentSectionKeyFn(queryKey), queryFn: () => WorkListControllerService.getCountInEnrollmentSection() as TData, ...options });
export const useWorkListControllerServiceGetClosedEnrollment = <TData = Common.WorkListControllerServiceGetClosedEnrollmentDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ careName, dob, enrollmentServiceType, fullName, page, size, sort }: {
  careName?: string;
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  page?: number;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetClosedEnrollmentKeyFn({ careName, dob, enrollmentServiceType, fullName, page, size, sort }, queryKey), queryFn: () => WorkListControllerService.getClosedEnrollment({ careName, dob, enrollmentServiceType, fullName, page, size, sort }) as TData, ...options });
export const useWorkListControllerServiceGetAllMonitoringData = <TData = Common.WorkListControllerServiceGetAllMonitoringDataDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ endDate, escalateStatus, isAlert, isEscalate, isResolve, myAlert, page, search, size, sort, startDate }: {
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
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetAllMonitoringDataKeyFn({ endDate, escalateStatus, isAlert, isEscalate, isResolve, myAlert, page, search, size, sort, startDate }, queryKey), queryFn: () => WorkListControllerService.getAllMonitoringData({ endDate, escalateStatus, isAlert, isEscalate, isResolve, myAlert, page, search, size, sort, startDate }) as TData, ...options });
export const useWorkListControllerServiceGetAlertsMonitoring = <TData = Common.WorkListControllerServiceGetAlertsMonitoringDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ careName, dob, enrollmentServiceType, fullName, page, size, sort }: {
  careName?: string;
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  page?: number;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetAlertsMonitoringKeyFn({ careName, dob, enrollmentServiceType, fullName, page, size, sort }, queryKey), queryFn: () => WorkListControllerService.getAlertsMonitoring({ careName, dob, enrollmentServiceType, fullName, page, size, sort }) as TData, ...options });
export const useWorkListControllerServiceGetActiveEnrollment = <TData = Common.WorkListControllerServiceGetActiveEnrollmentDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ careName, dob, enrollmentServiceType, fullName, page, size, sort }: {
  careName?: string;
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  page?: number;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetActiveEnrollmentKeyFn({ careName, dob, enrollmentServiceType, fullName, page, size, sort }, queryKey), queryFn: () => WorkListControllerService.getActiveEnrollment({ careName, dob, enrollmentServiceType, fullName, page, size, sort }) as TData, ...options });
export const useTemplateControllerServiceGetTemplateById = <TData = Common.TemplateControllerServiceGetTemplateByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseTemplateControllerServiceGetTemplateByIdKeyFn({ id }, queryKey), queryFn: () => TemplateControllerService.getTemplateById({ id }) as TData, ...options });
export const useTemplateControllerServiceGetAll = <TData = Common.TemplateControllerServiceGetAllDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchString, size, sort }: {
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseTemplateControllerServiceGetAllKeyFn({ page, searchString, size, sort }, queryKey), queryFn: () => TemplateControllerService.getAll({ page, searchString, size, sort }) as TData, ...options });
export const useRedirectProviderControllerServiceGetProvider = <TData = Common.RedirectProviderControllerServiceGetProviderDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ providerGroupUuid, providerUuid }: {
  providerGroupUuid: string;
  providerUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseRedirectProviderControllerServiceGetProviderKeyFn({ providerGroupUuid, providerUuid }, queryKey), queryFn: () => RedirectProviderControllerService.getProvider({ providerGroupUuid, providerUuid }) as TData, ...options });
export const useRedirectProviderControllerServiceGetAllProvider1 = <TData = Common.RedirectProviderControllerServiceGetAllProvider1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ exclude, page, providerGroupUuid, searchBy, size, sort, status }: {
  exclude?: boolean;
  page?: number;
  providerGroupUuid: string;
  searchBy?: string;
  size?: number;
  sort?: string[];
  status?: boolean;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseRedirectProviderControllerServiceGetAllProvider1KeyFn({ exclude, page, providerGroupUuid, searchBy, size, sort, status }, queryKey), queryFn: () => RedirectProviderControllerService.getAllProvider1({ exclude, page, providerGroupUuid, searchBy, size, sort, status }) as TData, ...options });
export const useRedirectDeviceControllerServiceFetchDevice = <TData = Common.RedirectDeviceControllerServiceFetchDeviceDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ providerGroupUuid, uuid }: {
  providerGroupUuid: string;
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseRedirectDeviceControllerServiceFetchDeviceKeyFn({ providerGroupUuid, uuid }, queryKey), queryFn: () => RedirectDeviceControllerService.fetchDevice({ providerGroupUuid, uuid }) as TData, ...options });
export const useRedirectDeviceControllerServiceFetchDevices = <TData = Common.RedirectDeviceControllerServiceFetchDevicesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, providerGroupUuid, searchString, size, sort, status }: {
  page?: number;
  providerGroupUuid: string;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: boolean;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseRedirectDeviceControllerServiceFetchDevicesKeyFn({ page, providerGroupUuid, searchString, size, sort, status }, queryKey), queryFn: () => RedirectDeviceControllerService.fetchDevices({ page, providerGroupUuid, searchString, size, sort, status }) as TData, ...options });
export const useProviderControllerServiceGetProvider1 = <TData = Common.ProviderControllerServiceGetProvider1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ providerUuid }: {
  providerUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderControllerServiceGetProvider1KeyFn({ providerUuid }, queryKey), queryFn: () => ProviderControllerService.getProvider1({ providerUuid }) as TData, ...options });
export const useProviderControllerServiceGetProvider2 = <TData = Common.ProviderControllerServiceGetProvider2DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderControllerServiceGetProvider2KeyFn(queryKey), queryFn: () => ProviderControllerService.getProvider2() as TData, ...options });
export const useProviderControllerServiceGetCareManagers = <TData = Common.ProviderControllerServiceGetCareManagersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderControllerServiceGetCareManagersKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => ProviderControllerService.getCareManagers({ page, patientUserUuid, size, sort }) as TData, ...options });
export const useProviderControllerServiceGetProvidersByPatientUuid = <TData = Common.ProviderControllerServiceGetProvidersByPatientUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderControllerServiceGetProvidersByPatientUuidKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => ProviderControllerService.getProvidersByPatientUuid({ page, patientUserUuid, size, sort }) as TData, ...options });
export const useProviderControllerServiceGetProviderByUuid = <TData = Common.ProviderControllerServiceGetProviderByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ providerUserUuid }: {
  providerUserUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderControllerServiceGetProviderByUuidKeyFn({ providerUserUuid }, queryKey), queryFn: () => ProviderControllerService.getProviderByUuid({ providerUserUuid }) as TData, ...options });
export const useProviderControllerServiceGetAllProvider3 = <TData = Common.ProviderControllerServiceGetAllProvider3DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ exclude, page, role, searchBy, size, sort, status }: {
  exclude?: boolean;
  page?: number;
  role?: string;
  searchBy?: string;
  size?: number;
  sort?: string[];
  status?: boolean;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderControllerServiceGetAllProvider3KeyFn({ exclude, page, role, searchBy, size, sort, status }, queryKey), queryFn: () => ProviderControllerService.getAllProvider3({ exclude, page, role, searchBy, size, sort, status }) as TData, ...options });
export const useProviderGroupControllerServiceGetProviderGroup = <TData = Common.ProviderGroupControllerServiceGetProviderGroupDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderGroupControllerServiceGetProviderGroupKeyFn({ uuid }, queryKey), queryFn: () => ProviderGroupControllerService.getProviderGroup({ uuid }) as TData, ...options });
export const useProviderGroupControllerServiceGetUserCommonDetailsByUsername = <TData = Common.ProviderGroupControllerServiceGetUserCommonDetailsByUsernameDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ username }: {
  username: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderGroupControllerServiceGetUserCommonDetailsByUsernameKeyFn({ username }, queryKey), queryFn: () => ProviderGroupControllerService.getUserCommonDetailsByUsername({ username }) as TData, ...options });
export const useProviderGroupControllerServiceGetUserCommonDetailsByUserUuid = <TData = Common.ProviderGroupControllerServiceGetUserCommonDetailsByUserUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ userUuid }: {
  userUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderGroupControllerServiceGetUserCommonDetailsByUserUuidKeyFn({ userUuid }, queryKey), queryFn: () => ProviderGroupControllerService.getUserCommonDetailsByUserUuid({ userUuid }) as TData, ...options });
export const useProviderGroupControllerServiceGetProviderGroupDetailsByTenantGroup = <TData = Common.ProviderGroupControllerServiceGetProviderGroupDetailsByTenantGroupDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ tenantGroup }: {
  tenantGroup: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderGroupControllerServiceGetProviderGroupDetailsByTenantGroupKeyFn({ tenantGroup }, queryKey), queryFn: () => ProviderGroupControllerService.getProviderGroupDetailsByTenantGroup({ tenantGroup }) as TData, ...options });
export const useProviderGroupControllerServiceGetAllProviderGroups = <TData = Common.ProviderGroupControllerServiceGetAllProviderGroupsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ active, page, searchString, size, sort, state }: {
  active?: boolean;
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  state?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderGroupControllerServiceGetAllProviderGroupsKeyFn({ active, page, searchString, size, sort, state }, queryKey), queryFn: () => ProviderGroupControllerService.getAllProviderGroups({ active, page, searchString, size, sort, state }) as TData, ...options });
export const usePatientControllerServiceGetPatientByUuid = <TData = Common.PatientControllerServiceGetPatientByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetPatientByUuidKeyFn({ uuid }, queryKey), queryFn: () => PatientControllerService.getPatientByUuid({ uuid }) as TData, ...options });
export const usePatientControllerServiceSearchPatientProvider = <TData = Common.PatientControllerServiceSearchPatientProviderDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, search, size, sort }: {
  page?: number;
  search?: string;
  size?: number;
  sort?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceSearchPatientProviderKeyFn({ page, search, size, sort }, queryKey), queryFn: () => PatientControllerService.searchPatientProvider({ page, search, size, sort }) as TData, ...options });
export const usePatientControllerServiceGetProfile = <TData = Common.PatientControllerServiceGetProfileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ mobileType }: {
  mobileType?: "IOS" | "ANDROID";
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetProfileKeyFn({ mobileType }, queryKey), queryFn: () => PatientControllerService.getProfile({ mobileType }) as TData, ...options });
export const usePatientControllerServiceGetAvatar = <TData = Common.PatientControllerServiceGetAvatarDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ patientUserUuid }: {
  patientUserUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetAvatarKeyFn({ patientUserUuid }, queryKey), queryFn: () => PatientControllerService.getAvatar({ patientUserUuid }) as TData, ...options });
export const usePatientControllerServiceGetSmsWithProviderEntity = <TData = Common.PatientControllerServiceGetSmsWithProviderEntityDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ activity, page, searchString, size, sort }: {
  activity: "ENROLLMENT" | "NEW_READING_ADDED" | "ALERT_GENERATE" | "ALERT_RESOLVED" | "APP_MESSAGE" | "SMS_MESSAGE" | "RECEIVED_NOTIFICATION" | "TIME_LOGGED" | "VITALS_REVIEWED" | "NOTE_ADDED" | "ESCALATE" | "VITALS_CONFIG_UPDATE";
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetSmsWithProviderEntityKeyFn({ activity, page, searchString, size, sort }, queryKey), queryFn: () => PatientControllerService.getSmsWithProviderEntity({ activity, page, searchString, size, sort }) as TData, ...options });
export const usePatientControllerServiceGetErrorForFile = <TData = Common.PatientControllerServiceGetErrorForFileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ key }: {
  key: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetErrorForFileKeyFn({ key }, queryKey), queryFn: () => PatientControllerService.getErrorForFile({ key }) as TData, ...options });
export const usePatientControllerServiceGetFamilyMembers = <TData = Common.PatientControllerServiceGetFamilyMembersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetFamilyMembersKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => PatientControllerService.getFamilyMembers({ page, patientUserUuid, size, sort }) as TData, ...options });
export const usePatientControllerServiceGetAllPatient = <TData = Common.PatientControllerServiceGetAllPatientDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchBy, size, sort, status }: {
  page?: number;
  searchBy?: string;
  size?: number;
  sort?: string[];
  status?: boolean;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetAllPatientKeyFn({ page, searchBy, size, sort, status }, queryKey), queryFn: () => PatientControllerService.getAllPatient({ page, searchBy, size, sort, status }) as TData, ...options });
export const usePatientControllerServiceGetAllCareTeam = <TData = Common.PatientControllerServiceGetAllCareTeamDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchBy, serviceType, size, sort, userUuid }: {
  page?: number;
  searchBy?: string;
  serviceType?: string;
  size?: number;
  sort?: string[];
  userUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetAllCareTeamKeyFn({ page, searchBy, serviceType, size, sort, userUuid }, queryKey), queryFn: () => PatientControllerService.getAllCareTeam({ page, searchBy, serviceType, size, sort, userUuid }) as TData, ...options });
export const usePatientControllerServiceGetManagers = <TData = Common.PatientControllerServiceGetManagersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetManagersKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => PatientControllerService.getManagers({ page, patientUserUuid, size, sort }) as TData, ...options });
export const usePatientSymptomControllerServiceGetAllByPatient = <TData = Common.PatientSymptomControllerServiceGetAllByPatientDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ userUuid }: {
  userUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientSymptomControllerServiceGetAllByPatientKeyFn({ userUuid }, queryKey), queryFn: () => PatientSymptomControllerService.getAllByPatient({ userUuid }) as TData, ...options });
export const usePatientMedicationControllerServiceChangeStatus = <TData = Common.PatientMedicationControllerServiceChangeStatusDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientMedicationControllerServiceChangeStatusKeyFn(queryKey), queryFn: () => PatientMedicationControllerService.changeStatus() as TData, ...options });
export const usePatientMedicationControllerServiceGetAllMedicationsByPatient = <TData = Common.PatientMedicationControllerServiceGetAllMedicationsByPatientDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchBy, size, sort, userUuid }: {
  page?: number;
  searchBy?: string;
  size?: number;
  sort?: string[];
  userUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientMedicationControllerServiceGetAllMedicationsByPatientKeyFn({ page, searchBy, size, sort, userUuid }, queryKey), queryFn: () => PatientMedicationControllerService.getAllMedicationsByPatient({ page, searchBy, size, sort, userUuid }) as TData, ...options });
export const usePatientMedicationControllerServiceGetMedicationsByPatient = <TData = Common.PatientMedicationControllerServiceGetMedicationsByPatientDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchString, size, sort, status, userUuid }: {
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: string;
  userUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientMedicationControllerServiceGetMedicationsByPatientKeyFn({ page, searchString, size, sort, status, userUuid }, queryKey), queryFn: () => PatientMedicationControllerService.getMedicationsByPatient({ page, searchString, size, sort, status, userUuid }) as TData, ...options });
export const usePatientMedicationControllerServiceGetAllMedications = <TData = Common.PatientMedicationControllerServiceGetAllMedicationsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchBy, size, sort }: {
  page?: number;
  searchBy?: string;
  size?: number;
  sort?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientMedicationControllerServiceGetAllMedicationsKeyFn({ page, searchBy, size, sort }, queryKey), queryFn: () => PatientMedicationControllerService.getAllMedications({ page, searchBy, size, sort }) as TData, ...options });
export const usePatientConditionControllerServiceGetAllPatientConditions = <TData = Common.PatientConditionControllerServiceGetAllPatientConditionsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchString, serviceType, size, sort, userUuid }: {
  page?: number;
  searchString?: string;
  serviceType?: "RPM" | "RTM" | "CCM";
  size?: number;
  sort?: string[];
  userUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientConditionControllerServiceGetAllPatientConditionsKeyFn({ page, searchString, serviceType, size, sort, userUuid }, queryKey), queryFn: () => PatientConditionControllerService.getAllPatientConditions({ page, searchString, serviceType, size, sort, userUuid }) as TData, ...options });
export const usePatientAllergyControllerServiceGetAllAllergy = <TData = Common.PatientAllergyControllerServiceGetAllAllergyDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchString, size, sort, userUuid }: {
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  userUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePatientAllergyControllerServiceGetAllAllergyKeyFn({ page, searchString, size, sort, userUuid }, queryKey), queryFn: () => PatientAllergyControllerService.getAllAllergy({ page, searchString, size, sort, userUuid }) as TData, ...options });
export const useNotificationEntityControllerServiceGetAllNotifications = <TData = Common.NotificationEntityControllerServiceGetAllNotificationsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, size, sort, type }: {
  page?: number;
  size?: number;
  sort?: string[];
  type?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseNotificationEntityControllerServiceGetAllNotificationsKeyFn({ page, size, sort, type }, queryKey), queryFn: () => NotificationEntityControllerService.getAllNotifications({ page, size, sort, type }) as TData, ...options });
export const useNotificationEntityControllerServiceGetCountNotification = <TData = Common.NotificationEntityControllerServiceGetCountNotificationDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseNotificationEntityControllerServiceGetCountNotificationKeyFn(queryKey), queryFn: () => NotificationEntityControllerService.getCountNotification() as TData, ...options });
export const useNotificationControllerServiceGetAllNotification = <TData = Common.NotificationControllerServiceGetAllNotificationDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ search }: {
  search?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseNotificationControllerServiceGetAllNotificationKeyFn({ search }, queryKey), queryFn: () => NotificationControllerService.getAllNotification({ search }) as TData, ...options });
export const useNotificationProviderControllerServiceGetAllNotifications1 = <TData = Common.NotificationProviderControllerServiceGetAllNotifications1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, size, sort, type }: {
  page?: number;
  size?: number;
  sort?: string[];
  type?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseNotificationProviderControllerServiceGetAllNotifications1KeyFn({ page, size, sort, type }, queryKey), queryFn: () => NotificationProviderControllerService.getAllNotifications1({ page, size, sort, type }) as TData, ...options });
export const useNotificationProviderControllerServiceGetCountNotification1 = <TData = Common.NotificationProviderControllerServiceGetCountNotification1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseNotificationProviderControllerServiceGetCountNotification1KeyFn(queryKey), queryFn: () => NotificationProviderControllerService.getCountNotification1() as TData, ...options });
export const useLabResultControllerServiceGetById = <TData = Common.LabResultControllerServiceGetByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLabResultControllerServiceGetByIdKeyFn({ id }, queryKey), queryFn: () => LabResultControllerService.getById({ id }) as TData, ...options });
export const useLabResultControllerServiceGetAllPatientLabResult = <TData = Common.LabResultControllerServiceGetAllPatientLabResultDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchString, size, sort, userUuid }: {
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  userUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLabResultControllerServiceGetAllPatientLabResultKeyFn({ page, searchString, size, sort, userUuid }, queryKey), queryFn: () => LabResultControllerService.getAllPatientLabResult({ page, searchString, size, sort, userUuid }) as TData, ...options });
export const useInsuranceControllerServiceGetAllInsuranceMobile = <TData = Common.InsuranceControllerServiceGetAllInsuranceMobileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseInsuranceControllerServiceGetAllInsuranceMobileKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => InsuranceControllerService.getAllInsuranceMobile({ page, patientUserUuid, size, sort }) as TData, ...options });
export const useIcdCodeControllerServiceGetIcdCodeById = <TData = Common.IcdCodeControllerServiceGetIcdCodeByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseIcdCodeControllerServiceGetIcdCodeByIdKeyFn({ id }, queryKey), queryFn: () => IcdCodeControllerService.getIcdCodeById({ id }) as TData, ...options });
export const useIcdCodeControllerServiceGetAll1 = <TData = Common.IcdCodeControllerServiceGetAll1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ isFavorite, page, searchString, size, sort }: {
  isFavorite?: boolean;
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseIcdCodeControllerServiceGetAll1KeyFn({ isFavorite, page, searchString, size, sort }, queryKey), queryFn: () => IcdCodeControllerService.getAll1({ isFavorite, page, searchString, size, sort }) as TData, ...options });
export const useEnrollmentControllerServiceGetVitalsOfPatient = <TData = Common.EnrollmentControllerServiceGetVitalsOfPatientDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ patientUserUuid }: {
  patientUserUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseEnrollmentControllerServiceGetVitalsOfPatientKeyFn({ patientUserUuid }, queryKey), queryFn: () => EnrollmentControllerService.getVitalsOfPatient({ patientUserUuid }) as TData, ...options });
export const useEnrollmentControllerServiceGetEnrollmentById = <TData = Common.EnrollmentControllerServiceGetEnrollmentByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseEnrollmentControllerServiceGetEnrollmentByIdKeyFn({ uuid }, queryKey), queryFn: () => EnrollmentControllerService.getEnrollmentById({ uuid }) as TData, ...options });
export const useEnrollmentControllerServiceGetEnrollmentOfPatient = <TData = Common.EnrollmentControllerServiceGetEnrollmentOfPatientDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseEnrollmentControllerServiceGetEnrollmentOfPatientKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => EnrollmentControllerService.getEnrollmentOfPatient({ page, patientUserUuid, size, sort }) as TData, ...options });
export const useEnrollmentControllerServiceGetAllEnrollment = <TData = Common.EnrollmentControllerServiceGetAllEnrollmentDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ endDate, enrollmentServiceType, enrollmentStatusType, page, size, sort, startDate }: {
  endDate?: string;
  enrollmentServiceType?: "RPM" | "RTM" | "CCM";
  enrollmentStatusType?: "CLOSED" | "NEW" | "ACTIVE";
  page?: number;
  size?: number;
  sort?: string[];
  startDate?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseEnrollmentControllerServiceGetAllEnrollmentKeyFn({ endDate, enrollmentServiceType, enrollmentStatusType, page, size, sort, startDate }, queryKey), queryFn: () => EnrollmentControllerService.getAllEnrollment({ endDate, enrollmentServiceType, enrollmentStatusType, page, size, sort, startDate }) as TData, ...options });
export const useDocumentControllerServiceGetSignature = <TData = Common.DocumentControllerServiceGetSignatureDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ documentUuid, patientUserUuid }: {
  documentUuid: string;
  patientUserUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDocumentControllerServiceGetSignatureKeyFn({ documentUuid, patientUserUuid }, queryKey), queryFn: () => DocumentControllerService.getSignature({ documentUuid, patientUserUuid }) as TData, ...options });
export const useDocumentControllerServiceGetSignedDocuments = <TData = Common.DocumentControllerServiceGetSignedDocumentsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDocumentControllerServiceGetSignedDocumentsKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => DocumentControllerService.getSignedDocuments({ page, patientUserUuid, size, sort }) as TData, ...options });
export const useDocumentControllerServiceGetPatientMappedDocuments = <TData = Common.DocumentControllerServiceGetPatientMappedDocumentsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ archive, documentType, page, patientUserUuid, searchString, size, sort }: {
  archive?: boolean;
  documentType?: ("CONSENT" | "EDUCATION" | "CHALLENGES" | "GENERAL" | "REPORT" | "HOME_EXERCISE")[];
  page?: number;
  patientUserUuid: string;
  searchString?: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDocumentControllerServiceGetPatientMappedDocumentsKeyFn({ archive, documentType, page, patientUserUuid, searchString, size, sort }, queryKey), queryFn: () => DocumentControllerService.getPatientMappedDocuments({ archive, documentType, page, patientUserUuid, searchString, size, sort }) as TData, ...options });
export const useDocumentControllerServiceGetDocuments = <TData = Common.DocumentControllerServiceGetDocumentsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ archive, documentType, page, searchString, size, sort }: {
  archive?: boolean;
  documentType?: ("CONSENT" | "EDUCATION" | "CHALLENGES" | "GENERAL" | "REPORT" | "HOME_EXERCISE")[];
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDocumentControllerServiceGetDocumentsKeyFn({ archive, documentType, page, searchString, size, sort }, queryKey), queryFn: () => DocumentControllerService.getDocuments({ archive, documentType, page, searchString, size, sort }) as TData, ...options });
export const useDeviceControllerServiceFetchDeviceByPatient = <TData = Common.DeviceControllerServiceFetchDeviceByPatientDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, search, size, sort }: {
  page?: number;
  patientUserUuid: string;
  search?: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDeviceControllerServiceFetchDeviceByPatientKeyFn({ page, patientUserUuid, search, size, sort }, queryKey), queryFn: () => DeviceControllerService.fetchDeviceByPatient({ page, patientUserUuid, search, size, sort }) as TData, ...options });
export const useDeviceControllerServiceFetchDevice1 = <TData = Common.DeviceControllerServiceFetchDevice1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDeviceControllerServiceFetchDevice1KeyFn({ uuid }, queryKey), queryFn: () => DeviceControllerService.fetchDevice1({ uuid }) as TData, ...options });
export const useDeviceControllerServiceFetchDevices1 = <TData = Common.DeviceControllerServiceFetchDevices1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchString, size, sort, status }: {
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: boolean;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDeviceControllerServiceFetchDevices1KeyFn({ page, searchString, size, sort, status }, queryKey), queryFn: () => DeviceControllerService.fetchDevices1({ page, searchString, size, sort, status }) as TData, ...options });
export const useDeviceControllerServiceFetchAllDevicesName = <TData = Common.DeviceControllerServiceFetchAllDevicesNameDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, size, sort }: {
  page?: number;
  size?: number;
  sort?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDeviceControllerServiceFetchAllDevicesNameKeyFn({ page, size, sort }, queryKey), queryFn: () => DeviceControllerService.fetchAllDevicesName({ page, size, sort }) as TData, ...options });
export const useAdminUserControllerServiceGetProfile1 = <TData = Common.AdminUserControllerServiceGetProfile1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ userUuid }: {
  userUuid?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminUserControllerServiceGetProfile1KeyFn({ userUuid }, queryKey), queryFn: () => AdminUserControllerService.getProfile1({ userUuid }) as TData, ...options });
export const useAdminUserControllerServiceGetUsers = <TData = Common.AdminUserControllerServiceGetUsersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ active, exclude, page, searchBy, size, sort, sortBy, sortDirection }: {
  active?: boolean;
  exclude?: boolean;
  page?: number;
  searchBy?: string;
  size?: number;
  sort?: string[];
  sortBy?: string;
  sortDirection?: "ASC" | "DESC";
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminUserControllerServiceGetUsersKeyFn({ active, exclude, page, searchBy, size, sort, sortBy, sortDirection }, queryKey), queryFn: () => AdminUserControllerService.getUsers({ active, exclude, page, searchBy, size, sort, sortBy, sortDirection }) as TData, ...options });
export const useTimeLogControllerServiceGetTimeLogByPatientUserUuidAndEnrollmentServiceType = <TData = Common.TimeLogControllerServiceGetTimeLogByPatientUserUuidAndEnrollmentServiceTypeDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ enrollmentServiceType, patientUserUuid, specificMonth }: {
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  patientUserUuid: string;
  specificMonth?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseTimeLogControllerServiceGetTimeLogByPatientUserUuidAndEnrollmentServiceTypeKeyFn({ enrollmentServiceType, patientUserUuid, specificMonth }, queryKey), queryFn: () => TimeLogControllerService.getTimeLogByPatientUserUuidAndEnrollmentServiceType({ enrollmentServiceType, patientUserUuid, specificMonth }) as TData, ...options });
export const useTimeLogControllerServiceGetMonthWiseTimeLog = <TData = Common.TimeLogControllerServiceGetMonthWiseTimeLogDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ enrollmentServiceType, page, patientUserUuid, size, sort }: {
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseTimeLogControllerServiceGetMonthWiseTimeLogKeyFn({ enrollmentServiceType, page, patientUserUuid, size, sort }, queryKey), queryFn: () => TimeLogControllerService.getMonthWiseTimeLog({ enrollmentServiceType, page, patientUserUuid, size, sort }) as TData, ...options });
export const useTimeLogControllerServiceGetManualEntries = <TData = Common.TimeLogControllerServiceGetManualEntriesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ enrollmentServiceType, page, patientUserUuid, size, sort }: {
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseTimeLogControllerServiceGetManualEntriesKeyFn({ enrollmentServiceType, page, patientUserUuid, size, sort }, queryKey), queryFn: () => TimeLogControllerService.getManualEntries({ enrollmentServiceType, page, patientUserUuid, size, sort }) as TData, ...options });
export const useTimeLogControllerServiceGetTimeLine = <TData = Common.TimeLogControllerServiceGetTimeLineDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ activity, endDate, enrollmentServiceType, page, patientUserUuid, size, sort, startDate, timeZone }: {
  activity?: ("ENROLLMENT" | "NEW_READING_ADDED" | "ALERT_GENERATE" | "ALERT_RESOLVED" | "APP_MESSAGE" | "SMS_MESSAGE" | "RECEIVED_NOTIFICATION" | "TIME_LOGGED" | "VITALS_REVIEWED" | "NOTE_ADDED" | "ESCALATE" | "VITALS_CONFIG_UPDATE")[];
  endDate?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
  startDate?: string;
  timeZone: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseTimeLogControllerServiceGetTimeLineKeyFn({ activity, endDate, enrollmentServiceType, page, patientUserUuid, size, sort, startDate, timeZone }, queryKey), queryFn: () => TimeLogControllerService.getTimeLine({ activity, endDate, enrollmentServiceType, page, patientUserUuid, size, sort, startDate, timeZone }) as TData, ...options });
export const useRedirectImportControllerServiceGetPatientAuditFiles = <TData = Common.RedirectImportControllerServiceGetPatientAuditFilesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ file, page, providerGroupUuid, searchString, size, sort, status }: {
  file?: string;
  page?: number;
  providerGroupUuid: string;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: "IN_PROGRESS" | "COMPLETED_WITH_ERROR" | "COMPLETED" | "FAILED";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseRedirectImportControllerServiceGetPatientAuditFilesKeyFn({ file, page, providerGroupUuid, searchString, size, sort, status }, queryKey), queryFn: () => RedirectImportControllerService.getPatientAuditFiles({ file, page, providerGroupUuid, searchString, size, sort, status }) as TData, ...options });
export const useRedirectImportControllerServiceGetPatientAuditFileRecords = <TData = Common.RedirectImportControllerServiceGetPatientAuditFileRecordsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ audiFileId, page, providerGroupUuid, searchString, size, sort, status }: {
  audiFileId: number;
  page?: number;
  providerGroupUuid: string;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: "FAILED" | "SUCCESS";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseRedirectImportControllerServiceGetPatientAuditFileRecordsKeyFn({ audiFileId, page, providerGroupUuid, searchString, size, sort, status }, queryKey), queryFn: () => RedirectImportControllerService.getPatientAuditFileRecords({ audiFileId, page, providerGroupUuid, searchString, size, sort, status }) as TData, ...options });
export const useImportControllerServiceGetPatientAuditFiles1 = <TData = Common.ImportControllerServiceGetPatientAuditFiles1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ file, page, searchString, size, sort, status }: {
  file?: string;
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: "IN_PROGRESS" | "COMPLETED_WITH_ERROR" | "COMPLETED" | "FAILED";
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseImportControllerServiceGetPatientAuditFiles1KeyFn({ file, page, searchString, size, sort, status }, queryKey), queryFn: () => ImportControllerService.getPatientAuditFiles1({ file, page, searchString, size, sort, status }) as TData, ...options });
export const useImportControllerServiceGetPatientAuditFileRecords1 = <TData = Common.ImportControllerServiceGetPatientAuditFileRecords1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ audiFileId, page, searchString, size, sort, status }: {
  audiFileId: number;
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: "FAILED" | "SUCCESS";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseImportControllerServiceGetPatientAuditFileRecords1KeyFn({ audiFileId, page, searchString, size, sort, status }, queryKey), queryFn: () => ImportControllerService.getPatientAuditFileRecords1({ audiFileId, page, searchString, size, sort, status }) as TData, ...options });
export const useImportControllerServiceGetTemplateInCsv = <TData = Common.ImportControllerServiceGetTemplateInCsvDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ templateType }: {
  templateType: "PATIENT";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseImportControllerServiceGetTemplateInCsvKeyFn({ templateType }, queryKey), queryFn: () => ImportControllerService.getTemplateInCsv({ templateType }) as TData, ...options });
export const useGlobalNoteControllerServiceGetGlobalNotesByPatientUuid = <TData = Common.GlobalNoteControllerServiceGetGlobalNotesByPatientUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGlobalNoteControllerServiceGetGlobalNotesByPatientUuidKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => GlobalNoteControllerService.getGlobalNotesByPatientUuid({ page, patientUserUuid, size, sort }) as TData, ...options });
export const useBillingControllerServicePatient360AllBilling = <TData = Common.BillingControllerServicePatient360AllBillingDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ localDate, patientUserUuid, service }: {
  localDate: string;
  patientUserUuid: string;
  service: "RPM" | "RTM" | "CCM";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseBillingControllerServicePatient360AllBillingKeyFn({ localDate, patientUserUuid, service }, queryKey), queryFn: () => BillingControllerService.patient360AllBilling({ localDate, patientUserUuid, service }) as TData, ...options });
export const useBillingControllerServiceGetMonitoringBillingByUuid = <TData = Common.BillingControllerServiceGetMonitoringBillingByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseBillingControllerServiceGetMonitoringBillingByUuidKeyFn({ uuid }, queryKey), queryFn: () => BillingControllerService.getMonitoringBillingByUuid({ uuid }) as TData, ...options });
export const useBillingControllerServiceGetMonitoringBillingCount = <TData = Common.BillingControllerServiceGetMonitoringBillingCountDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ localDate }: {
  localDate: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseBillingControllerServiceGetMonitoringBillingCountKeyFn({ localDate }, queryKey), queryFn: () => BillingControllerService.getMonitoringBillingCount({ localDate }) as TData, ...options });
export const useBillingControllerServiceGetAllBillingForMonitoring = <TData = Common.BillingControllerServiceGetAllBillingForMonitoringDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ claimStatus, localDate, page, patientName, providerName, service, size, sort }: {
  claimStatus?: string;
  localDate: string;
  page?: number;
  patientName?: string;
  providerName?: string;
  service: "RPM" | "RTM" | "CCM";
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseBillingControllerServiceGetAllBillingForMonitoringKeyFn({ claimStatus, localDate, page, patientName, providerName, service, size, sort }, queryKey), queryFn: () => BillingControllerService.getAllBillingForMonitoring({ claimStatus, localDate, page, patientName, providerName, service, size, sort }) as TData, ...options });
export const useBillingControllerServiceGetInteractionBillingByUuid = <TData = Common.BillingControllerServiceGetInteractionBillingByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ localDate, uuid }: {
  localDate: string;
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseBillingControllerServiceGetInteractionBillingByUuidKeyFn({ localDate, uuid }, queryKey), queryFn: () => BillingControllerService.getInteractionBillingByUuid({ localDate, uuid }) as TData, ...options });
export const useBillingControllerServiceGetInteractionBillingCount = <TData = Common.BillingControllerServiceGetInteractionBillingCountDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ localDate }: {
  localDate: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseBillingControllerServiceGetInteractionBillingCountKeyFn({ localDate }, queryKey), queryFn: () => BillingControllerService.getInteractionBillingCount({ localDate }) as TData, ...options });
export const useBillingControllerServiceGetAllBillingForInteraction = <TData = Common.BillingControllerServiceGetAllBillingForInteractionDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ claimStatus, localDate, page, patientName, providerName, service, size, sort }: {
  claimStatus?: string;
  localDate: string;
  page?: number;
  patientName?: string;
  providerName?: string;
  service: "RPM" | "RTM" | "CCM";
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseBillingControllerServiceGetAllBillingForInteractionKeyFn({ claimStatus, localDate, page, patientName, providerName, service, size, sort }, queryKey), queryFn: () => BillingControllerService.getAllBillingForInteraction({ claimStatus, localDate, page, patientName, providerName, service, size, sort }) as TData, ...options });
export const useBillingControllerServiceGetEnrollmentBillingByUuid = <TData = Common.BillingControllerServiceGetEnrollmentBillingByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseBillingControllerServiceGetEnrollmentBillingByUuidKeyFn({ uuid }, queryKey), queryFn: () => BillingControllerService.getEnrollmentBillingByUuid({ uuid }) as TData, ...options });
export const useBillingControllerServiceGetEnrollmentBillingCount = <TData = Common.BillingControllerServiceGetEnrollmentBillingCountDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ localDate }: {
  localDate: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseBillingControllerServiceGetEnrollmentBillingCountKeyFn({ localDate }, queryKey), queryFn: () => BillingControllerService.getEnrollmentBillingCount({ localDate }) as TData, ...options });
export const useBillingControllerServiceGetAllBillingForEnrollment = <TData = Common.BillingControllerServiceGetAllBillingForEnrollmentDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ claimStatus, localDate, page, patientName, providerName, service, size, sort }: {
  claimStatus?: string;
  localDate: string;
  page?: number;
  patientName?: string;
  providerName?: string;
  service: "RPM" | "RTM" | "CCM";
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseBillingControllerServiceGetAllBillingForEnrollmentKeyFn({ claimStatus, localDate, page, patientName, providerName, service, size, sort }, queryKey), queryFn: () => BillingControllerService.getAllBillingForEnrollment({ claimStatus, localDate, page, patientName, providerName, service, size, sort }) as TData, ...options });
export const useActivityTimeLogControllerServiceAllActivity = <TData = Common.ActivityTimeLogControllerServiceAllActivityDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, providerUseruuid, size, sort }: {
  page?: number;
  providerUseruuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseActivityTimeLogControllerServiceAllActivityKeyFn({ page, providerUseruuid, size, sort }, queryKey), queryFn: () => ActivityTimeLogControllerService.allActivity({ page, providerUseruuid, size, sort }) as TData, ...options });
export const useSpecialityControllerServiceGetAllSpecialities = <TData = Common.SpecialityControllerServiceGetAllSpecialitiesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchString, size, sort }: {
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSpecialityControllerServiceGetAllSpecialitiesKeyFn({ page, searchString, size, sort }, queryKey), queryFn: () => SpecialityControllerService.getAllSpecialities({ page, searchString, size, sort }) as TData, ...options });
export const useRedirectPatientControllerServiceGetAllProvider2 = <TData = Common.RedirectPatientControllerServiceGetAllProvider2DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, providerGroupUuid, searchBy, size, sort, status }: {
  page?: number;
  providerGroupUuid: string;
  searchBy?: string;
  size?: number;
  sort?: string[];
  status?: boolean;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseRedirectPatientControllerServiceGetAllProvider2KeyFn({ page, providerGroupUuid, searchBy, size, sort, status }, queryKey), queryFn: () => RedirectPatientControllerService.getAllProvider2({ page, providerGroupUuid, searchBy, size, sort, status }) as TData, ...options });
export const usePasswordGeneratorControllerServiceGeneratePassword = <TData = Common.PasswordGeneratorControllerServiceGeneratePasswordDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ count }: {
  count?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePasswordGeneratorControllerServiceGeneratePasswordKeyFn({ count }, queryKey), queryFn: () => PasswordGeneratorControllerService.generatePassword({ count }) as TData, ...options });
export const useTwilioConversationControllerServiceGetAuthToken = <TData = Common.TwilioConversationControllerServiceGetAuthTokenDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ identity }: {
  identity: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseTwilioConversationControllerServiceGetAuthTokenKeyFn({ identity }, queryKey), queryFn: () => TwilioConversationControllerService.getAuthToken({ identity }) as TData, ...options });
export const useNameRecordControllerServiceBuildAndGetPortalUrl = <TData = Common.NameRecordControllerServiceBuildAndGetPortalUrlDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ attachProtocol, nameRecord }: {
  attachProtocol: boolean;
  nameRecord?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseNameRecordControllerServiceBuildAndGetPortalUrlKeyFn({ attachProtocol, nameRecord }, queryKey), queryFn: () => NameRecordControllerService.buildAndGetPortalUrl({ attachProtocol, nameRecord }) as TData, ...options });
export const useNameRecordControllerServiceIsNameRecordPresent = <TData = Common.NameRecordControllerServiceIsNameRecordPresentDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ nameRecord }: {
  nameRecord: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseNameRecordControllerServiceIsNameRecordPresentKeyFn({ nameRecord }, queryKey), queryFn: () => NameRecordControllerService.isNameRecordPresent({ nameRecord }) as TData, ...options });
export const useAwsControllerServiceGetFile = <TData = Common.AwsControllerServiceGetFileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ key }: {
  key: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAwsControllerServiceGetFileKeyFn({ key }, queryKey), queryFn: () => AwsControllerService.getFile({ key }) as TData, ...options });
export const useAwsControllerServiceGetFile1 = <TData = Common.AwsControllerServiceGetFile1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ key }: {
  key: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAwsControllerServiceGetFile1KeyFn({ key }, queryKey), queryFn: () => AwsControllerService.getFile1({ key }) as TData, ...options });
export const useWorkListControllerServiceUpdateReviewedWithStatusForNoData = <TData = Common.WorkListControllerServiceUpdateReviewedWithStatusForNoDataMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  patientUserUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  patientUserUuid: string;
}, TContext>({ mutationFn: ({ patientUserUuid }) => WorkListControllerService.updateReviewedWithStatusForNoData({ patientUserUuid }) as unknown as Promise<TData>, ...options });
export const useWorkListControllerServiceUpdateReviewedWithStatusForData = <TData = Common.WorkListControllerServiceUpdateReviewedWithStatusForDataMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  monitoringDataId?: number;
  patientUserUuid: string;
  reviewedNote: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  monitoringDataId?: number;
  patientUserUuid: string;
  reviewedNote: string;
}, TContext>({ mutationFn: ({ monitoringDataId, patientUserUuid, reviewedNote }) => WorkListControllerService.updateReviewedWithStatusForData({ monitoringDataId, patientUserUuid, reviewedNote }) as unknown as Promise<TData>, ...options });
export const useWorkListControllerServiceUpdateReviewedWithStatusForAlert = <TData = Common.WorkListControllerServiceUpdateReviewedWithStatusForAlertMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  monitoringDataId?: number;
  patientUserUuid: string;
  resolvedNote: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  monitoringDataId?: number;
  patientUserUuid: string;
  resolvedNote: string;
}, TContext>({ mutationFn: ({ monitoringDataId, patientUserUuid, resolvedNote }) => WorkListControllerService.updateReviewedWithStatusForAlert({ monitoringDataId, patientUserUuid, resolvedNote }) as unknown as Promise<TData>, ...options });
export const useWorkListControllerServiceUpdateCheckboxesInteraction = <TData = Common.WorkListControllerServiceUpdateCheckboxesInteractionMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: UpdateCheckboxesInteraction;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: UpdateCheckboxesInteraction;
}, TContext>({ mutationFn: ({ requestBody }) => WorkListControllerService.updateCheckboxesInteraction({ requestBody }) as unknown as Promise<TData>, ...options });
export const useWorkListControllerServiceUpdateAlertConfig = <TData = Common.WorkListControllerServiceUpdateAlertConfigMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  planId: number;
  requestBody: Plan;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  planId: number;
  requestBody: Plan;
}, TContext>({ mutationFn: ({ planId, requestBody }) => WorkListControllerService.updateAlertConfig({ planId, requestBody }) as unknown as Promise<TData>, ...options });
export const useWorkListControllerServiceReviewVitalList = <TData = Common.WorkListControllerServiceReviewVitalListMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  reviewedNote: string;
  vitalIdList: number[];
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  reviewedNote: string;
  vitalIdList: number[];
}, TContext>({ mutationFn: ({ reviewedNote, vitalIdList }) => WorkListControllerService.reviewVitalList({ reviewedNote, vitalIdList }) as unknown as Promise<TData>, ...options });
export const useWorkListControllerServiceResolveMonitoringAlerts = <TData = Common.WorkListControllerServiceResolveMonitoringAlertsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
  requestBody: MonitoringDataUpdateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
  requestBody: MonitoringDataUpdateRequest;
}, TContext>({ mutationFn: ({ id, requestBody }) => WorkListControllerService.resolveMonitoringAlerts({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useWorkListControllerServiceUpdatePatientConsentCheckbox = <TData = Common.WorkListControllerServiceUpdatePatientConsentCheckboxMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  patientUserUuid: string;
  requestBody: PatientWorkListRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  patientUserUuid: string;
  requestBody: PatientWorkListRequest;
}, TContext>({ mutationFn: ({ patientUserUuid, requestBody }) => WorkListControllerService.updatePatientConsentCheckbox({ patientUserUuid, requestBody }) as unknown as Promise<TData>, ...options });
export const useWorkListControllerServiceOnBoardingPatientAddVitals = <TData = Common.WorkListControllerServiceOnBoardingPatientAddVitalsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  patientUserUuid: string;
  requestBody: PatientVital[];
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  patientUserUuid: string;
  requestBody: PatientVital[];
}, TContext>({ mutationFn: ({ patientUserUuid, requestBody }) => WorkListControllerService.onBoardingPatientAddVitals({ patientUserUuid, requestBody }) as unknown as Promise<TData>, ...options });
export const useWorkListControllerServiceAddEscalation = <TData = Common.WorkListControllerServiceAddEscalationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  alertIds?: number[];
  requestBody: EscalateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  alertIds?: number[];
  requestBody: EscalateRequest;
}, TContext>({ mutationFn: ({ alertIds, requestBody }) => WorkListControllerService.addEscalation({ alertIds, requestBody }) as unknown as Promise<TData>, ...options });
export const useWorkListControllerServiceEscalateMonitoringAlerts = <TData = Common.WorkListControllerServiceEscalateMonitoringAlertsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
  requestBody: MonitoringDataUpdateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
  requestBody: MonitoringDataUpdateRequest;
}, TContext>({ mutationFn: ({ id, requestBody }) => WorkListControllerService.escalateMonitoringAlerts({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useWorkListControllerServiceAddEscalation1 = <TData = Common.WorkListControllerServiceAddEscalation1MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  escalateId: number;
  resolveNote: string;
  status?: "CLOSED" | "OPEN";
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  escalateId: number;
  resolveNote: string;
  status?: "CLOSED" | "OPEN";
}, TContext>({ mutationFn: ({ escalateId, resolveNote, status }) => WorkListControllerService.addEscalation1({ escalateId, resolveNote, status }) as unknown as Promise<TData>, ...options });
export const useWorkListControllerServiceCreateMonitoringRecord = <TData = Common.WorkListControllerServiceCreateMonitoringRecordMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  newReading?: boolean;
  requestBody: MonitoringDataRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  newReading?: boolean;
  requestBody: MonitoringDataRequest;
}, TContext>({ mutationFn: ({ newReading, requestBody }) => WorkListControllerService.createMonitoringRecord({ newReading, requestBody }) as unknown as Promise<TData>, ...options });
export const useWorkListControllerServiceAddVitals = <TData = Common.WorkListControllerServiceAddVitalsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  deviceReading?: boolean;
  patientUserUuid: string;
  requestBody: PatientVital[];
  syncVitalDate?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  deviceReading?: boolean;
  patientUserUuid: string;
  requestBody: PatientVital[];
  syncVitalDate?: string;
}, TContext>({ mutationFn: ({ deviceReading, patientUserUuid, requestBody, syncVitalDate }) => WorkListControllerService.addVitals({ deviceReading, patientUserUuid, requestBody, syncVitalDate }) as unknown as Promise<TData>, ...options });
export const useTemplateControllerServiceCreateTemplate = <TData = Common.TemplateControllerServiceCreateTemplateMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: TemplateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: TemplateRequest;
}, TContext>({ mutationFn: ({ requestBody }) => TemplateControllerService.createTemplate({ requestBody }) as unknown as Promise<TData>, ...options });
export const useRedirectProviderControllerServiceSaveProvider = <TData = Common.RedirectProviderControllerServiceSaveProviderMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  providerGroupUuid: string;
  requestBody: ProviderCreateNewRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  providerGroupUuid: string;
  requestBody: ProviderCreateNewRequest;
}, TContext>({ mutationFn: ({ providerGroupUuid, requestBody }) => RedirectProviderControllerService.saveProvider({ providerGroupUuid, requestBody }) as unknown as Promise<TData>, ...options });
export const useRedirectProviderControllerServiceResentInvite = <TData = Common.RedirectProviderControllerServiceResentInviteMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  providerGroupUuid: string;
  providerUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  providerGroupUuid: string;
  providerUuid: string;
}, TContext>({ mutationFn: ({ providerGroupUuid, providerUuid }) => RedirectProviderControllerService.resentInvite({ providerGroupUuid, providerUuid }) as unknown as Promise<TData>, ...options });
export const useRedirectDeviceControllerServiceSaveDevice = <TData = Common.RedirectDeviceControllerServiceSaveDeviceMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  providerGroupUuid: string;
  requestBody: DeviceCreateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  providerGroupUuid: string;
  requestBody: DeviceCreateRequest;
}, TContext>({ mutationFn: ({ providerGroupUuid, requestBody }) => RedirectDeviceControllerService.saveDevice({ providerGroupUuid, requestBody }) as unknown as Promise<TData>, ...options });
export const useProviderControllerServiceSaveProvider1 = <TData = Common.ProviderControllerServiceSaveProvider1MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ProviderCreateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ProviderCreateRequest;
}, TContext>({ mutationFn: ({ requestBody }) => ProviderControllerService.saveProvider1({ requestBody }) as unknown as Promise<TData>, ...options });
export const useProviderControllerServiceSaveProviderNew = <TData = Common.ProviderControllerServiceSaveProviderNewMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ProviderCreateNewRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ProviderCreateNewRequest;
}, TContext>({ mutationFn: ({ requestBody }) => ProviderControllerService.saveProviderNew({ requestBody }) as unknown as Promise<TData>, ...options });
export const useProviderControllerServiceResendInvite = <TData = Common.ProviderControllerServiceResendInviteMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  uuid: string;
}, TContext>({ mutationFn: ({ uuid }) => ProviderControllerService.resendInvite({ uuid }) as unknown as Promise<TData>, ...options });
export const useProviderControllerServiceAddParticipant = <TData = Common.ProviderControllerServiceAddParticipantMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  patientUserUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  patientUserUuid: string;
}, TContext>({ mutationFn: ({ enrollmentServiceType, patientUserUuid }) => ProviderControllerService.addParticipant({ enrollmentServiceType, patientUserUuid }) as unknown as Promise<TData>, ...options });
export const useProviderGroupControllerServiceCreateProviderGroup = <TData = Common.ProviderGroupControllerServiceCreateProviderGroupMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ProviderGroupCreateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ProviderGroupCreateRequest;
}, TContext>({ mutationFn: ({ requestBody }) => ProviderGroupControllerService.createProviderGroup({ requestBody }) as unknown as Promise<TData>, ...options });
export const useProviderGroupControllerServiceCreateDefaultDocument = <TData = Common.ProviderGroupControllerServiceCreateDefaultDocumentMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => ProviderGroupControllerService.createDefaultDocument() as unknown as Promise<TData>, ...options });
export const usePatientControllerServiceSetTemporaryPasswordFieldForPatient = <TData = Common.PatientControllerServiceSetTemporaryPasswordFieldForPatientMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  userUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  userUuid: string;
}, TContext>({ mutationFn: ({ userUuid }) => PatientControllerService.setTemporaryPasswordFieldForPatient({ userUuid }) as unknown as Promise<TData>, ...options });
export const usePatientControllerServiceSendSms = <TData = Common.PatientControllerServiceSendSmsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: SendSMSRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: SendSMSRequest;
}, TContext>({ mutationFn: ({ requestBody }) => PatientControllerService.sendSms({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientControllerServiceSendMessages = <TData = Common.PatientControllerServiceSendMessagesMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: SendMessagesRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: SendMessagesRequest;
}, TContext>({ mutationFn: ({ requestBody }) => PatientControllerService.sendMessages({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientControllerServiceSavePatient = <TData = Common.PatientControllerServiceSavePatientMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PatientCreateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PatientCreateRequest;
}, TContext>({ mutationFn: ({ requestBody }) => PatientControllerService.savePatient({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientControllerServiceSendMessageProvider = <TData = Common.PatientControllerServiceSendMessageProviderMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: MessageRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: MessageRequest;
}, TContext>({ mutationFn: ({ requestBody }) => PatientControllerService.sendMessageProvider({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientControllerServiceAddCareTeam = <TData = Common.PatientControllerServiceAddCareTeamMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  patientUserUuid: string;
  requestBody: CareTeamRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  patientUserUuid: string;
  requestBody: CareTeamRequest;
}, TContext>({ mutationFn: ({ patientUserUuid, requestBody }) => PatientControllerService.addCareTeam({ patientUserUuid, requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientSymptomControllerServiceAddPatientSymptom = <TData = Common.PatientSymptomControllerServiceAddPatientSymptomMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PatientSymptomRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PatientSymptomRequest;
}, TContext>({ mutationFn: ({ requestBody }) => PatientSymptomControllerService.addPatientSymptom({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientMedicationControllerServiceAddMedication = <TData = Common.PatientMedicationControllerServiceAddMedicationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PatientMedicationRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PatientMedicationRequest;
}, TContext>({ mutationFn: ({ requestBody }) => PatientMedicationControllerService.addMedication({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientConditionControllerServiceAddPatientCondition = <TData = Common.PatientConditionControllerServiceAddPatientConditionMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PatientConditionRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PatientConditionRequest;
}, TContext>({ mutationFn: ({ requestBody }) => PatientConditionControllerService.addPatientCondition({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientAllergyControllerServiceAddPatientAllergy = <TData = Common.PatientAllergyControllerServiceAddPatientAllergyMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PatientAllergyRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PatientAllergyRequest;
}, TContext>({ mutationFn: ({ requestBody }) => PatientAllergyControllerService.addPatientAllergy({ requestBody }) as unknown as Promise<TData>, ...options });
export const useLabResultControllerServiceCreateLabResult = <TData = Common.LabResultControllerServiceCreateLabResultMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: LabResultRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: LabResultRequest;
}, TContext>({ mutationFn: ({ requestBody }) => LabResultControllerService.createLabResult({ requestBody }) as unknown as Promise<TData>, ...options });
export const useInsuranceControllerServiceSaveInsurancesMobile = <TData = Common.InsuranceControllerServiceSaveInsurancesMobileMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  patientUserUuid: string;
  requestBody: CreateInsuranceList;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  patientUserUuid: string;
  requestBody: CreateInsuranceList;
}, TContext>({ mutationFn: ({ patientUserUuid, requestBody }) => InsuranceControllerService.saveInsurancesMobile({ patientUserUuid, requestBody }) as unknown as Promise<TData>, ...options });
export const useInsuranceControllerServiceAddInsurance = <TData = Common.InsuranceControllerServiceAddInsuranceMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  patientUserUuid: string;
  requestBody: InsuranceMobileRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  patientUserUuid: string;
  requestBody: InsuranceMobileRequest;
}, TContext>({ mutationFn: ({ patientUserUuid, requestBody }) => InsuranceControllerService.addInsurance({ patientUserUuid, requestBody }) as unknown as Promise<TData>, ...options });
export const useIcdCodeControllerServiceCreateIcdCode = <TData = Common.IcdCodeControllerServiceCreateIcdCodeMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: IcdCodeRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: IcdCodeRequest;
}, TContext>({ mutationFn: ({ requestBody }) => IcdCodeControllerService.createIcdCode({ requestBody }) as unknown as Promise<TData>, ...options });
export const useEnrollmentControllerServiceCreateEnrollment = <TData = Common.EnrollmentControllerServiceCreateEnrollmentMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: EnrollmentRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: EnrollmentRequest;
}, TContext>({ mutationFn: ({ requestBody }) => EnrollmentControllerService.createEnrollment({ requestBody }) as unknown as Promise<TData>, ...options });
export const useDocumentControllerServiceCreateSignature = <TData = Common.DocumentControllerServiceCreateSignatureMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  documentUuid: string;
  patientUserUuid: string;
  requestBody: UserSignatureRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  documentUuid: string;
  patientUserUuid: string;
  requestBody: UserSignatureRequest;
}, TContext>({ mutationFn: ({ documentUuid, patientUserUuid, requestBody }) => DocumentControllerService.createSignature({ documentUuid, patientUserUuid, requestBody }) as unknown as Promise<TData>, ...options });
export const useDocumentControllerServiceMapDocumentsToPatients = <TData = Common.DocumentControllerServiceMapDocumentsToPatientsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PatientDocumentMappingRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PatientDocumentMappingRequest;
}, TContext>({ mutationFn: ({ requestBody }) => DocumentControllerService.mapDocumentsToPatients({ requestBody }) as unknown as Promise<TData>, ...options });
export const useDocumentControllerServiceCreateDocument = <TData = Common.DocumentControllerServiceCreateDocumentMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: DocumentRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: DocumentRequest;
}, TContext>({ mutationFn: ({ requestBody }) => DocumentControllerService.createDocument({ requestBody }) as unknown as Promise<TData>, ...options });
export const useDeviceControllerServiceSaveDevice1 = <TData = Common.DeviceControllerServiceSaveDevice1MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  patientUserUuid: string;
  requestBody: DeviceCreateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  patientUserUuid: string;
  requestBody: DeviceCreateRequest;
}, TContext>({ mutationFn: ({ patientUserUuid, requestBody }) => DeviceControllerService.saveDevice1({ patientUserUuid, requestBody }) as unknown as Promise<TData>, ...options });
export const useAdminUserControllerServiceSaveAdminUser = <TData = Common.AdminUserControllerServiceSaveAdminUserMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CreateAdminUserRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CreateAdminUserRequest;
}, TContext>({ mutationFn: ({ requestBody }) => AdminUserControllerService.saveAdminUser({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAdminUserControllerServiceResendInvitation = <TData = Common.AdminUserControllerServiceResendInvitationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  uuid: string;
}, TContext>({ mutationFn: ({ uuid }) => AdminUserControllerService.resendInvitation({ uuid }) as unknown as Promise<TData>, ...options });
export const useTimeLogControllerServiceSetInteractionForNewMonth = <TData = Common.TimeLogControllerServiceSetInteractionForNewMonthMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => TimeLogControllerService.setInteractionForNewMonth() as unknown as Promise<TData>, ...options });
export const useTimeLogControllerServiceAddTimeLogs = <TData = Common.TimeLogControllerServiceAddTimeLogsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: TimeLogRequest[];
  timezone: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: TimeLogRequest[];
  timezone: string;
}, TContext>({ mutationFn: ({ requestBody, timezone }) => TimeLogControllerService.addTimeLogs({ requestBody, timezone }) as unknown as Promise<TData>, ...options });
export const useTimeLogControllerServiceAddTimeLog = <TData = Common.TimeLogControllerServiceAddTimeLogMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  note?: boolean;
  requestBody: TimeLogRequest;
  timezone: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  note?: boolean;
  requestBody: TimeLogRequest;
  timezone: string;
}, TContext>({ mutationFn: ({ note, requestBody, timezone }) => TimeLogControllerService.addTimeLog({ note, requestBody, timezone }) as unknown as Promise<TData>, ...options });
export const useRedirectImportControllerServiceImports = <TData = Common.RedirectImportControllerServiceImportsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  providerGroupUuid: string;
  requestBody: ImportRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  providerGroupUuid: string;
  requestBody: ImportRequest;
}, TContext>({ mutationFn: ({ providerGroupUuid, requestBody }) => RedirectImportControllerService.imports({ providerGroupUuid, requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientInteractionControllerServiceSetWeekToNewWeek = <TData = Common.PatientInteractionControllerServiceSetWeekToNewWeekMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => PatientInteractionControllerService.setWeekToNewWeek() as unknown as Promise<TData>, ...options });
export const usePatientInteractionControllerServiceSetWeek1ForNewMonth = <TData = Common.PatientInteractionControllerServiceSetWeek1ForNewMonthMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => PatientInteractionControllerService.setWeek1ForNewMonth() as unknown as Promise<TData>, ...options });
export const useMonitoringServiceControllerServiceSetDays = <TData = Common.MonitoringServiceControllerServiceSetDaysMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => MonitoringServiceControllerService.setDays() as unknown as Promise<TData>, ...options });
export const useImportControllerServiceImports1 = <TData = Common.ImportControllerServiceImports1MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ImportRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ImportRequest;
}, TContext>({ mutationFn: ({ requestBody }) => ImportControllerService.imports1({ requestBody }) as unknown as Promise<TData>, ...options });
export const useImportControllerServiceImportsIcd = <TData = Common.ImportControllerServiceImportsIcdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ImportRequestIcd;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ImportRequestIcd;
}, TContext>({ mutationFn: ({ requestBody }) => ImportControllerService.importsIcd({ requestBody }) as unknown as Promise<TData>, ...options });
export const useGlobalNoteControllerServiceAddGlobalNote = <TData = Common.GlobalNoteControllerServiceAddGlobalNoteMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: GlobalNoteRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: GlobalNoteRequest;
}, TContext>({ mutationFn: ({ requestBody }) => GlobalNoteControllerService.addGlobalNote({ requestBody }) as unknown as Promise<TData>, ...options });
export const useBillingControllerServiceSetMonitoringForNewMonth = <TData = Common.BillingControllerServiceSetMonitoringForNewMonthMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => BillingControllerService.setMonitoringForNewMonth() as unknown as Promise<TData>, ...options });
export const useBillingControllerServiceSetInteractionForNewMonth1 = <TData = Common.BillingControllerServiceSetInteractionForNewMonth1MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => BillingControllerService.setInteractionForNewMonth1() as unknown as Promise<TData>, ...options });
export const useBillingControllerServiceSetEnrollmentForNewMonth = <TData = Common.BillingControllerServiceSetEnrollmentForNewMonthMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => BillingControllerService.setEnrollmentForNewMonth() as unknown as Promise<TData>, ...options });
export const useBillingControllerServiceUpdateMonitoringBillingByUuid = <TData = Common.BillingControllerServiceUpdateMonitoringBillingByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: MonitoringBillingUpdateRequest;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: MonitoringBillingUpdateRequest;
  uuid: string;
}, TContext>({ mutationFn: ({ requestBody, uuid }) => BillingControllerService.updateMonitoringBillingByUuid({ requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const useBillingControllerServiceUpdateInteractionBillingByUuid = <TData = Common.BillingControllerServiceUpdateInteractionBillingByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: InteractionBillingUpdateRequest;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: InteractionBillingUpdateRequest;
  uuid: string;
}, TContext>({ mutationFn: ({ requestBody, uuid }) => BillingControllerService.updateInteractionBillingByUuid({ requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const useBillingControllerServiceUpdateEnrollmentBillingByUuid = <TData = Common.BillingControllerServiceUpdateEnrollmentBillingByUuidMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: EnrollmentBillingUpdateRequest;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: EnrollmentBillingUpdateRequest;
  uuid: string;
}, TContext>({ mutationFn: ({ requestBody, uuid }) => BillingControllerService.updateEnrollmentBillingByUuid({ requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const useAuthenticationControllerServiceSetPassword = <TData = Common.AuthenticationControllerServiceSetPasswordMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: SetPasswordRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: SetPasswordRequest;
}, TContext>({ mutationFn: ({ requestBody }) => AuthenticationControllerService.setPassword({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAuthenticationControllerServiceSetPasswordCsvPatient = <TData = Common.AuthenticationControllerServiceSetPasswordCsvPatientMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: SetPasswordRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: SetPasswordRequest;
}, TContext>({ mutationFn: ({ requestBody }) => AuthenticationControllerService.setPasswordCsvPatient({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAuthenticationControllerServiceGetAccessToken = <TData = Common.AuthenticationControllerServiceGetAccessTokenMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: AuthRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: AuthRequest;
}, TContext>({ mutationFn: ({ requestBody }) => AuthenticationControllerService.getAccessToken({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAuthenticationControllerServiceForgotPasswordRequest = <TData = Common.AuthenticationControllerServiceForgotPasswordRequestMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ForgotPasswordRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ForgotPasswordRequest;
}, TContext>({ mutationFn: ({ requestBody }) => AuthenticationControllerService.forgotPasswordRequest({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAuthenticationControllerServiceCheckUrlEndPoint = <TData = Common.AuthenticationControllerServiceCheckUrlEndPointMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AuthenticationControllerService.checkUrlEndPoint() as unknown as Promise<TData>, ...options });
export const useAuthenticationControllerServiceUpdatePassword = <TData = Common.AuthenticationControllerServiceUpdatePasswordMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  newPassword: string;
  oldPassword: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  newPassword: string;
  oldPassword: string;
}, TContext>({ mutationFn: ({ newPassword, oldPassword }) => AuthenticationControllerService.updatePassword({ newPassword, oldPassword }) as unknown as Promise<TData>, ...options });
export const useAuthenticationControllerServiceGetAccessTokenFromRefreshToken = <TData = Common.AuthenticationControllerServiceGetAccessTokenFromRefreshTokenMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  refreshToken: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  refreshToken: string;
}, TContext>({ mutationFn: ({ refreshToken }) => AuthenticationControllerService.getAccessTokenFromRefreshToken({ refreshToken }) as unknown as Promise<TData>, ...options });
export const useActivityTimeLogControllerServiceSaveActivity = <TData = Common.ActivityTimeLogControllerServiceSaveActivityMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ActivityRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ActivityRequest;
}, TContext>({ mutationFn: ({ requestBody }) => ActivityTimeLogControllerService.saveActivity({ requestBody }) as unknown as Promise<TData>, ...options });
export const useTwilioSmsControllerServiceSendSms1 = <TData = Common.TwilioSmsControllerServiceSendSms1MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: SendSMSTwilio;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: SendSMSTwilio;
}, TContext>({ mutationFn: ({ requestBody }) => TwilioSmsControllerService.sendSms1({ requestBody }) as unknown as Promise<TData>, ...options });
export const useTwilioConversationControllerServiceUpdateUserToTwilio = <TData = Common.TwilioConversationControllerServiceUpdateUserToTwilioMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: UpdateUserTwilioRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: UpdateUserTwilioRequest;
}, TContext>({ mutationFn: ({ requestBody }) => TwilioConversationControllerService.updateUserToTwilio({ requestBody }) as unknown as Promise<TData>, ...options });
export const useTwilioConversationControllerServiceSendMessages1 = <TData = Common.TwilioConversationControllerServiceSendMessages1MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: SendAppMessagesTwilio;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: SendAppMessagesTwilio;
}, TContext>({ mutationFn: ({ requestBody }) => TwilioConversationControllerService.sendMessages1({ requestBody }) as unknown as Promise<TData>, ...options });
export const useTwilioConversationControllerServiceRegisterUserToTwilio = <TData = Common.TwilioConversationControllerServiceRegisterUserToTwilioMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CreateUserTwilioRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CreateUserTwilioRequest;
}, TContext>({ mutationFn: ({ requestBody }) => TwilioConversationControllerService.registerUserToTwilio({ requestBody }) as unknown as Promise<TData>, ...options });
export const useTwilioConversationControllerServiceDeleteCareTeamFromTwilio = <TData = Common.TwilioConversationControllerServiceDeleteCareTeamFromTwilioMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: AddUpdateParticipantWithServiceRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: AddUpdateParticipantWithServiceRequest;
}, TContext>({ mutationFn: ({ requestBody }) => TwilioConversationControllerService.deleteCareTeamFromTwilio({ requestBody }) as unknown as Promise<TData>, ...options });
export const useTwilioConversationControllerServiceAddUpdateParticipantToTwilio = <TData = Common.TwilioConversationControllerServiceAddUpdateParticipantToTwilioMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: AddUpdateParticipantWithServiceRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: AddUpdateParticipantWithServiceRequest;
}, TContext>({ mutationFn: ({ requestBody }) => TwilioConversationControllerService.addUpdateParticipantToTwilio({ requestBody }) as unknown as Promise<TData>, ...options });
export const useTwilioConversationControllerServiceAddCareTeamToTwilio = <TData = Common.TwilioConversationControllerServiceAddCareTeamToTwilioMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: AddUpdateParticipantWithServiceRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: AddUpdateParticipantWithServiceRequest;
}, TContext>({ mutationFn: ({ requestBody }) => TwilioConversationControllerService.addCareTeamToTwilio({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePusherControllerServiceSendAlert = <TData = Common.PusherControllerServiceSendAlertMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  message: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  message: string;
}, TContext>({ mutationFn: ({ message }) => PusherControllerService.sendAlert({ message }) as unknown as Promise<TData>, ...options });
export const useNameRecordControllerServiceCreateNameRecords = <TData = Common.NameRecordControllerServiceCreateNameRecordsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  nameRecord: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  nameRecord: string;
}, TContext>({ mutationFn: ({ nameRecord }) => NameRecordControllerService.createNameRecords({ nameRecord }) as unknown as Promise<TData>, ...options });
export const useEmailControllerServiceSendInvitationEmail = <TData = Common.EmailControllerServiceSendInvitationEmailMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  category: "PATIENT" | "ADMIN" | "SUPER_ADMIN" | "PROVIDER" | "STAFF";
  requestBody: UserRequest;
  userUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  category: "PATIENT" | "ADMIN" | "SUPER_ADMIN" | "PROVIDER" | "STAFF";
  requestBody: UserRequest;
  userUuid: string;
}, TContext>({ mutationFn: ({ category, requestBody, userUuid }) => EmailControllerService.sendInvitationEmail({ category, requestBody, userUuid }) as unknown as Promise<TData>, ...options });
export const useEmailControllerServiceForgotPasswordRequest1 = <TData = Common.EmailControllerServiceForgotPasswordRequest1MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: User;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: User;
}, TContext>({ mutationFn: ({ requestBody }) => EmailControllerService.forgotPasswordRequest1({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAwsControllerServiceUpdateMultipart = <TData = Common.AwsControllerServiceUpdateMultipartMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  objectRequestCategory: "ADMIN" | "SUPER_ADMIN" | "PROVIDER_GROUP" | "IMPORT_DATA";
  providerGroupUuid?: string;
  referenceType: "PATIENT" | "PROVIDER" | "IMPORT_DATA" | "PROVIDER_PROFILE" | "ADMIN_PROFILE" | "PATIENT_INSURANCE_DOCUMENTS" | "PROFILE" | "LOGO" | "DOCUMENT";
  requestBody?: { file: Blob | File; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  objectRequestCategory: "ADMIN" | "SUPER_ADMIN" | "PROVIDER_GROUP" | "IMPORT_DATA";
  providerGroupUuid?: string;
  referenceType: "PATIENT" | "PROVIDER" | "IMPORT_DATA" | "PROVIDER_PROFILE" | "ADMIN_PROFILE" | "PATIENT_INSURANCE_DOCUMENTS" | "PROFILE" | "LOGO" | "DOCUMENT";
  requestBody?: { file: Blob | File; };
}, TContext>({ mutationFn: ({ objectRequestCategory, providerGroupUuid, referenceType, requestBody }) => AwsControllerService.updateMultipart({ objectRequestCategory, providerGroupUuid, referenceType, requestBody }) as unknown as Promise<TData>, ...options });
export const useAwsControllerServiceUpdateMultipartBase64 = <TData = Common.AwsControllerServiceUpdateMultipartBase64MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: AwsImageRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: AwsImageRequest;
}, TContext>({ mutationFn: ({ requestBody }) => AwsControllerService.updateMultipartBase64({ requestBody }) as unknown as Promise<TData>, ...options });
export const useWorkListControllerServiceUpdateVitals = <TData = Common.WorkListControllerServiceUpdateVitalsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PatientVital;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PatientVital;
}, TContext>({ mutationFn: ({ requestBody }) => WorkListControllerService.updateVitals({ requestBody }) as unknown as Promise<TData>, ...options });
export const useWorkListControllerServiceResolveEscalate = <TData = Common.WorkListControllerServiceResolveEscalateMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
  requestBody: EscalateResolveRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
  requestBody: EscalateResolveRequest;
}, TContext>({ mutationFn: ({ id, requestBody }) => WorkListControllerService.resolveEscalate({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useTemplateControllerServiceUpdateTemplate = <TData = Common.TemplateControllerServiceUpdateTemplateMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
  requestBody: TemplateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
  requestBody: TemplateRequest;
}, TContext>({ mutationFn: ({ id, requestBody }) => TemplateControllerService.updateTemplate({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useRedirectProviderControllerServiceGetAllProvider = <TData = Common.RedirectProviderControllerServiceGetAllProviderMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  providerGroupUuid: string;
  providerUuid: string;
  requestBody: ProviderCreateNewRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  providerGroupUuid: string;
  providerUuid: string;
  requestBody: ProviderCreateNewRequest;
}, TContext>({ mutationFn: ({ providerGroupUuid, providerUuid, requestBody }) => RedirectProviderControllerService.getAllProvider({ providerGroupUuid, providerUuid, requestBody }) as unknown as Promise<TData>, ...options });
export const useRedirectProviderControllerServiceUpdateProviderStatus = <TData = Common.RedirectProviderControllerServiceUpdateProviderStatusMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  providerGroupUuid: string;
  providerUuid: string;
  status: boolean;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  providerGroupUuid: string;
  providerUuid: string;
  status: boolean;
}, TContext>({ mutationFn: ({ providerGroupUuid, providerUuid, status }) => RedirectProviderControllerService.updateProviderStatus({ providerGroupUuid, providerUuid, status }) as unknown as Promise<TData>, ...options });
export const useRedirectDeviceControllerServiceUpdateStatus = <TData = Common.RedirectDeviceControllerServiceUpdateStatusMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  providerGroupUuid: string;
  status: boolean;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  providerGroupUuid: string;
  status: boolean;
  uuid: string;
}, TContext>({ mutationFn: ({ providerGroupUuid, status, uuid }) => RedirectDeviceControllerService.updateStatus({ providerGroupUuid, status, uuid }) as unknown as Promise<TData>, ...options });
export const useRedirectDeviceControllerServiceUpdateDevice = <TData = Common.RedirectDeviceControllerServiceUpdateDeviceMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  providerGroupUuid: string;
  requestBody: DeviceUpdateRequest;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  providerGroupUuid: string;
  requestBody: DeviceUpdateRequest;
  uuid: string;
}, TContext>({ mutationFn: ({ providerGroupUuid, requestBody, uuid }) => RedirectDeviceControllerService.updateDevice({ providerGroupUuid, requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const useProviderControllerServiceUpdateProvider = <TData = Common.ProviderControllerServiceUpdateProviderMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ProviderUpdateRequest;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ProviderUpdateRequest;
  uuid: string;
}, TContext>({ mutationFn: ({ requestBody, uuid }) => ProviderControllerService.updateProvider({ requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const useProviderControllerServiceUpdateProviderNew = <TData = Common.ProviderControllerServiceUpdateProviderNewMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ProviderCreateNewRequest;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ProviderCreateNewRequest;
  uuid: string;
}, TContext>({ mutationFn: ({ requestBody, uuid }) => ProviderControllerService.updateProviderNew({ requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const useProviderControllerServiceUpdateProviderStatus1 = <TData = Common.ProviderControllerServiceUpdateProviderStatus1MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  status: boolean;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  status: boolean;
  uuid: string;
}, TContext>({ mutationFn: ({ status, uuid }) => ProviderControllerService.updateProviderStatus1({ status, uuid }) as unknown as Promise<TData>, ...options });
export const useProviderGroupControllerServiceSyncDatabaseSchema = <TData = Common.ProviderGroupControllerServiceSyncDatabaseSchemaMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  uuid: string;
}, TContext>({ mutationFn: ({ uuid }) => ProviderGroupControllerService.syncDatabaseSchema({ uuid }) as unknown as Promise<TData>, ...options });
export const useProviderGroupControllerServiceUpdateProviderGroup = <TData = Common.ProviderGroupControllerServiceUpdateProviderGroupMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ProviderGroupUpdateRequest;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ProviderGroupUpdateRequest;
  uuid: string;
}, TContext>({ mutationFn: ({ requestBody, uuid }) => ProviderGroupControllerService.updateProviderGroup({ requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const useProviderGroupControllerServiceUpdateStatus1 = <TData = Common.ProviderGroupControllerServiceUpdateStatus1MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  status: boolean;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  status: boolean;
  uuid: string;
}, TContext>({ mutationFn: ({ status, uuid }) => ProviderGroupControllerService.updateStatus1({ status, uuid }) as unknown as Promise<TData>, ...options });
export const useProviderGroupControllerServiceUpdateLastLogin = <TData = Common.ProviderGroupControllerServiceUpdateLastLoginMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  userUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  userUuid: string;
}, TContext>({ mutationFn: ({ userUuid }) => ProviderGroupControllerService.updateLastLogin({ userUuid }) as unknown as Promise<TData>, ...options });
export const useProviderGroupControllerServiceSyncDatabaseSchemas = <TData = Common.ProviderGroupControllerServiceSyncDatabaseSchemasMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => ProviderGroupControllerService.syncDatabaseSchemas() as unknown as Promise<TData>, ...options });
export const usePatientControllerServiceUpdateProfileAvatar = <TData = Common.PatientControllerServiceUpdateProfileAvatarMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  patientUserUuid: string;
  requestBody: AvatarUpdateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  patientUserUuid: string;
  requestBody: AvatarUpdateRequest;
}, TContext>({ mutationFn: ({ patientUserUuid, requestBody }) => PatientControllerService.updateProfileAvatar({ patientUserUuid, requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientControllerServiceUpdatePatient = <TData = Common.PatientControllerServiceUpdatePatientMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: PatientUpdateRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: PatientUpdateRequest;
}, TContext>({ mutationFn: ({ requestBody }) => PatientControllerService.updatePatient({ requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientControllerServiceUpdatePatientStatus = <TData = Common.PatientControllerServiceUpdatePatientStatusMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  status: boolean;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  status: boolean;
  uuid: string;
}, TContext>({ mutationFn: ({ status, uuid }) => PatientControllerService.updatePatientStatus({ status, uuid }) as unknown as Promise<TData>, ...options });
export const usePatientControllerServiceUpdateFamilyDetails = <TData = Common.PatientControllerServiceUpdateFamilyDetailsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  familyMemberId: number;
  patientUserUuid: string;
  requestBody: FamilyMemberRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  familyMemberId: number;
  patientUserUuid: string;
  requestBody: FamilyMemberRequest;
}, TContext>({ mutationFn: ({ familyMemberId, patientUserUuid, requestBody }) => PatientControllerService.updateFamilyDetails({ familyMemberId, patientUserUuid, requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientSymptomControllerServiceUpdateSymptom = <TData = Common.PatientSymptomControllerServiceUpdateSymptomMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
  requestBody: PatientSymptomRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
  requestBody: PatientSymptomRequest;
}, TContext>({ mutationFn: ({ id, requestBody }) => PatientSymptomControllerService.updateSymptom({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientMedicationControllerServiceUpdateMedication = <TData = Common.PatientMedicationControllerServiceUpdateMedicationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
  requestBody: PatientMedicationRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
  requestBody: PatientMedicationRequest;
}, TContext>({ mutationFn: ({ id, requestBody }) => PatientMedicationControllerService.updateMedication({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientConditionControllerServiceUpdatePatientCondition = <TData = Common.PatientConditionControllerServiceUpdatePatientConditionMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
  requestBody: PatientConditionRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
  requestBody: PatientConditionRequest;
}, TContext>({ mutationFn: ({ id, requestBody }) => PatientConditionControllerService.updatePatientCondition({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const usePatientAllergyControllerServiceUpdatePatientAllergy = <TData = Common.PatientAllergyControllerServiceUpdatePatientAllergyMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
  requestBody: PatientAllergyRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
  requestBody: PatientAllergyRequest;
}, TContext>({ mutationFn: ({ id, requestBody }) => PatientAllergyControllerService.updatePatientAllergy({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useNotificationEntityControllerServicePutNotifications = <TData = Common.NotificationEntityControllerServicePutNotificationsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => NotificationEntityControllerService.putNotifications() as unknown as Promise<TData>, ...options });
export const useNotificationEntityControllerServiceNotificationUpdate = <TData = Common.NotificationEntityControllerServiceNotificationUpdateMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  notificationuuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  notificationuuid: string;
}, TContext>({ mutationFn: ({ notificationuuid }) => NotificationEntityControllerService.notificationUpdate({ notificationuuid }) as unknown as Promise<TData>, ...options });
export const useNotificationControllerServiceUpdateNotifications = <TData = Common.NotificationControllerServiceUpdateNotificationsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: NotificationUpdateRequest[];
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: NotificationUpdateRequest[];
}, TContext>({ mutationFn: ({ requestBody }) => NotificationControllerService.updateNotifications({ requestBody }) as unknown as Promise<TData>, ...options });
export const useNotificationProviderControllerServicePutNotifications1 = <TData = Common.NotificationProviderControllerServicePutNotifications1MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => NotificationProviderControllerService.putNotifications1() as unknown as Promise<TData>, ...options });
export const useNotificationProviderControllerServiceNotificationUpdate1 = <TData = Common.NotificationProviderControllerServiceNotificationUpdate1MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  notificationuuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  notificationuuid: string;
}, TContext>({ mutationFn: ({ notificationuuid }) => NotificationProviderControllerService.notificationUpdate1({ notificationuuid }) as unknown as Promise<TData>, ...options });
export const useLabResultControllerServiceUpdateLabResult = <TData = Common.LabResultControllerServiceUpdateLabResultMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
  requestBody: LabResultRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
  requestBody: LabResultRequest;
}, TContext>({ mutationFn: ({ id, requestBody }) => LabResultControllerService.updateLabResult({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useInsuranceControllerServiceUpdateInsuranceMobile = <TData = Common.InsuranceControllerServiceUpdateInsuranceMobileMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  patientUserUuid: string;
  requestBody: InsuranceMobileRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  patientUserUuid: string;
  requestBody: InsuranceMobileRequest;
}, TContext>({ mutationFn: ({ patientUserUuid, requestBody }) => InsuranceControllerService.updateInsuranceMobile({ patientUserUuid, requestBody }) as unknown as Promise<TData>, ...options });
export const useIcdCodeControllerServiceUpdateIcdCode = <TData = Common.IcdCodeControllerServiceUpdateIcdCodeMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
  requestBody: IcdCodeRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
  requestBody: IcdCodeRequest;
}, TContext>({ mutationFn: ({ id, requestBody }) => IcdCodeControllerService.updateIcdCode({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useIcdCodeControllerServiceMakeIcdCodeFavorite = <TData = Common.IcdCodeControllerServiceMakeIcdCodeFavoriteMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
  isFavorite: boolean;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
  isFavorite: boolean;
}, TContext>({ mutationFn: ({ id, isFavorite }) => IcdCodeControllerService.makeIcdCodeFavorite({ id, isFavorite }) as unknown as Promise<TData>, ...options });
export const useEnrollmentControllerServiceUpdateEnrollment = <TData = Common.EnrollmentControllerServiceUpdateEnrollmentMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  reEnrollment?: boolean;
  requestBody: EnrollmentRequest;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  reEnrollment?: boolean;
  requestBody: EnrollmentRequest;
  uuid: string;
}, TContext>({ mutationFn: ({ reEnrollment, requestBody, uuid }) => EnrollmentControllerService.updateEnrollment({ reEnrollment, requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const useEnrollmentControllerServiceReEnrollment = <TData = Common.EnrollmentControllerServiceReEnrollmentMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  uuid: string;
}, TContext>({ mutationFn: ({ uuid }) => EnrollmentControllerService.reEnrollment({ uuid }) as unknown as Promise<TData>, ...options });
export const useDocumentControllerServiceUpdateArchive = <TData = Common.DocumentControllerServiceUpdateArchiveMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  archive: boolean;
  documentUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  archive: boolean;
  documentUuid: string;
}, TContext>({ mutationFn: ({ archive, documentUuid }) => DocumentControllerService.updateArchive({ archive, documentUuid }) as unknown as Promise<TData>, ...options });
export const useDeviceControllerServiceUpdateStatus2 = <TData = Common.DeviceControllerServiceUpdateStatus2MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  status: boolean;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  status: boolean;
  uuid: string;
}, TContext>({ mutationFn: ({ status, uuid }) => DeviceControllerService.updateStatus2({ status, uuid }) as unknown as Promise<TData>, ...options });
export const useDeviceControllerServiceUpdateDevice1 = <TData = Common.DeviceControllerServiceUpdateDevice1MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: DeviceUpdateRequest;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: DeviceUpdateRequest;
  uuid: string;
}, TContext>({ mutationFn: ({ requestBody, uuid }) => DeviceControllerService.updateDevice1({ requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const useDeviceControllerServiceUnAssignDevice = <TData = Common.DeviceControllerServiceUnAssignDeviceMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  assign: boolean;
  deviceUuid: string;
  providerGroupUuid?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  assign: boolean;
  deviceUuid: string;
  providerGroupUuid?: string;
}, TContext>({ mutationFn: ({ assign, deviceUuid, providerGroupUuid }) => DeviceControllerService.unAssignDevice({ assign, deviceUuid, providerGroupUuid }) as unknown as Promise<TData>, ...options });
export const useAdminUserControllerServiceUpdateUser = <TData = Common.AdminUserControllerServiceUpdateUserMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: AdminUserUpdateRequest;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: AdminUserUpdateRequest;
  uuid: string;
}, TContext>({ mutationFn: ({ requestBody, uuid }) => AdminUserControllerService.updateUser({ requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const useAdminUserControllerServiceManageUser = <TData = Common.AdminUserControllerServiceManageUserMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  isActive: boolean;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  isActive: boolean;
  uuid: string;
}, TContext>({ mutationFn: ({ isActive, uuid }) => AdminUserControllerService.manageUser({ isActive, uuid }) as unknown as Promise<TData>, ...options });
export const useWorkListControllerServiceDeleteVitals = <TData = Common.WorkListControllerServiceDeleteVitalsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  vitalId: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  vitalId: number;
}, TContext>({ mutationFn: ({ vitalId }) => WorkListControllerService.deleteVitals({ vitalId }) as unknown as Promise<TData>, ...options });
export const useTemplateControllerServiceDeleteTemplate = <TData = Common.TemplateControllerServiceDeleteTemplateMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
}, TContext>({ mutationFn: ({ id }) => TemplateControllerService.deleteTemplate({ id }) as unknown as Promise<TData>, ...options });
export const useRedirectProviderControllerServiceDeleteProvider = <TData = Common.RedirectProviderControllerServiceDeleteProviderMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  providerGroupUuid: string;
  providerUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  providerGroupUuid: string;
  providerUuid: string;
}, TContext>({ mutationFn: ({ providerGroupUuid, providerUuid }) => RedirectProviderControllerService.deleteProvider({ providerGroupUuid, providerUuid }) as unknown as Promise<TData>, ...options });
export const useRedirectDeviceControllerServiceUpdateStatus3 = <TData = Common.RedirectDeviceControllerServiceUpdateStatus3MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  providerGroupUuid: string;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  providerGroupUuid: string;
  uuid: string;
}, TContext>({ mutationFn: ({ providerGroupUuid, uuid }) => RedirectDeviceControllerService.updateStatus3({ providerGroupUuid, uuid }) as unknown as Promise<TData>, ...options });
export const useProviderControllerServiceDeleteProvider1 = <TData = Common.ProviderControllerServiceDeleteProvider1MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  uuid: string;
}, TContext>({ mutationFn: ({ uuid }) => ProviderControllerService.deleteProvider1({ uuid }) as unknown as Promise<TData>, ...options });
export const usePatientControllerServiceDeletePatient = <TData = Common.PatientControllerServiceDeletePatientMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  uuid: string;
}, TContext>({ mutationFn: ({ uuid }) => PatientControllerService.deletePatient({ uuid }) as unknown as Promise<TData>, ...options });
export const usePatientControllerServiceDeleteCareTeam = <TData = Common.PatientControllerServiceDeleteCareTeamMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  id: number;
  patientUserUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  id: number;
  patientUserUuid: string;
}, TContext>({ mutationFn: ({ enrollmentServiceType, id, patientUserUuid }) => PatientControllerService.deleteCareTeam({ enrollmentServiceType, id, patientUserUuid }) as unknown as Promise<TData>, ...options });
export const usePatientSymptomControllerServiceDeletePatientSymptom = <TData = Common.PatientSymptomControllerServiceDeletePatientSymptomMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
}, TContext>({ mutationFn: ({ id }) => PatientSymptomControllerService.deletePatientSymptom({ id }) as unknown as Promise<TData>, ...options });
export const usePatientMedicationControllerServiceDeleteMedication = <TData = Common.PatientMedicationControllerServiceDeleteMedicationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
}, TContext>({ mutationFn: ({ id }) => PatientMedicationControllerService.deleteMedication({ id }) as unknown as Promise<TData>, ...options });
export const usePatientConditionControllerServiceDeletePatientCondition = <TData = Common.PatientConditionControllerServiceDeletePatientConditionMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
}, TContext>({ mutationFn: ({ id }) => PatientConditionControllerService.deletePatientCondition({ id }) as unknown as Promise<TData>, ...options });
export const usePatientAllergyControllerServiceDeletePatientAllergyById = <TData = Common.PatientAllergyControllerServiceDeletePatientAllergyByIdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
}, TContext>({ mutationFn: ({ id }) => PatientAllergyControllerService.deletePatientAllergyById({ id }) as unknown as Promise<TData>, ...options });
export const useLabResultControllerServiceDeleteLabResult = <TData = Common.LabResultControllerServiceDeleteLabResultMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
}, TContext>({ mutationFn: ({ id }) => LabResultControllerService.deleteLabResult({ id }) as unknown as Promise<TData>, ...options });
export const useInsuranceControllerServiceDeleteInsuranceMobile = <TData = Common.InsuranceControllerServiceDeleteInsuranceMobileMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => InsuranceControllerService.deleteInsuranceMobile() as unknown as Promise<TData>, ...options });
export const useIcdCodeControllerServiceDeleteTemplate1 = <TData = Common.IcdCodeControllerServiceDeleteTemplate1MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
}, TContext>({ mutationFn: ({ id }) => IcdCodeControllerService.deleteTemplate1({ id }) as unknown as Promise<TData>, ...options });
export const useEnrollmentControllerServiceDeleteEnrollment = <TData = Common.EnrollmentControllerServiceDeleteEnrollmentMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: EnrollmentTerminateRequest;
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: EnrollmentTerminateRequest;
  uuid: string;
}, TContext>({ mutationFn: ({ requestBody, uuid }) => EnrollmentControllerService.deleteEnrollment({ requestBody, uuid }) as unknown as Promise<TData>, ...options });
export const useDocumentControllerServiceDeleteDocument = <TData = Common.DocumentControllerServiceDeleteDocumentMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  documentUuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  documentUuid: string;
}, TContext>({ mutationFn: ({ documentUuid }) => DocumentControllerService.deleteDocument({ documentUuid }) as unknown as Promise<TData>, ...options });
export const useDeviceControllerServiceUpdateStatus4 = <TData = Common.DeviceControllerServiceUpdateStatus4MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  uuid: string;
}, TContext>({ mutationFn: ({ uuid }) => DeviceControllerService.updateStatus4({ uuid }) as unknown as Promise<TData>, ...options });
export const useAdminUserControllerServiceRemoveUser = <TData = Common.AdminUserControllerServiceRemoveUserMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  uuid: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  uuid: string;
}, TContext>({ mutationFn: ({ uuid }) => AdminUserControllerService.removeUser({ uuid }) as unknown as Promise<TData>, ...options });
