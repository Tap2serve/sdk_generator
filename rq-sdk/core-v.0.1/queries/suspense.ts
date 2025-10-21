// generated with @7nohe/openapi-react-query-codegen@1.4.1 

import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { ActivityTimeLogControllerService, AdminUserControllerService, AwsControllerService, BillingControllerService, DeviceControllerService, DocumentControllerService, EnrollmentControllerService, GlobalNoteControllerService, IcdCodeControllerService, ImportControllerService, InsuranceControllerService, LabResultControllerService, NameRecordControllerService, NotificationControllerService, NotificationEntityControllerService, NotificationProviderControllerService, PasswordGeneratorControllerService, PatientAllergyControllerService, PatientConditionControllerService, PatientControllerService, PatientMedicationControllerService, PatientSymptomControllerService, ProviderControllerService, ProviderGroupControllerService, RedirectDeviceControllerService, RedirectImportControllerService, RedirectPatientControllerService, RedirectProviderControllerService, SpecialityControllerService, TemplateControllerService, TimeLogControllerService, TwilioConversationControllerService, WorkListControllerService } from "../requests/services.gen";
import * as Common from "./common";
export const useWorkListControllerServiceGetWeekWiseInteractionSuspense = <TData = Common.WorkListControllerServiceGetWeekWiseInteractionDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ careName, dob, enrollmentServiceType, fullName, interactionWeek, page, size, sort }: {
  careName?: string;
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  interactionWeek: "WEEK1" | "WEEK2" | "WEEK3" | "WEEK4";
  page?: number;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetWeekWiseInteractionKeyFn({ careName, dob, enrollmentServiceType, fullName, interactionWeek, page, size, sort }, queryKey), queryFn: () => WorkListControllerService.getWeekWiseInteraction({ careName, dob, enrollmentServiceType, fullName, interactionWeek, page, size, sort }) as TData, ...options });
export const useWorkListControllerServiceGetByVitalsSuspense = <TData = Common.WorkListControllerServiceGetByVitalsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ endDate, page, patientUserUuid, size, sort, startDate, vital }: {
  endDate?: string;
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
  startDate?: string;
  vital: "BLOOD_PRESSURE" | "BLOOD_PRESSURE_SYSTOLIC" | "BLOOD_PRESSURE_DIASTOLIC" | "BLOOD_GLUCOSE" | "HEART_RATE" | "BODY_TEMPERATURE" | "RESPIRATION_RATE" | "WEIGHT" | "OXYGEN_SATURATION" | "PULSE_RATE" | "BODY_MASS_INDEX" | "RESPIRATORY_VOLUME" | "HEIGHT" | "FORCED_EXPIRATORY_VOLUME" | "PEAK_EXPIRATORY" | "PERFUSION_INDEX" | "STEPS" | "PAINSCALE";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetByVitalsKeyFn({ endDate, page, patientUserUuid, size, sort, startDate, vital }, queryKey), queryFn: () => WorkListControllerService.getByVitals({ endDate, page, patientUserUuid, size, sort, startDate, vital }) as TData, ...options });
export const useWorkListControllerServiceProgressBarPatient360Suspense = <TData = Common.WorkListControllerServiceProgressBarPatient360DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ endDate, enrollmentServiceType, patientUserUuid, startDate }: {
  endDate: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  patientUserUuid: string;
  startDate: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceProgressBarPatient360KeyFn({ endDate, enrollmentServiceType, patientUserUuid, startDate }, queryKey), queryFn: () => WorkListControllerService.progressBarPatient360({ endDate, enrollmentServiceType, patientUserUuid, startDate }) as TData, ...options });
export const useWorkListControllerServiceGetOfReadingDataMonotoringDataSuspense = <TData = Common.WorkListControllerServiceGetOfReadingDataMonotoringDataDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ enrollmentServiceType, isAlert, page, patientUserUuid, size, sort }: {
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  isAlert: boolean;
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetOfReadingDataMonotoringDataKeyFn({ enrollmentServiceType, isAlert, page, patientUserUuid, size, sort }, queryKey), queryFn: () => WorkListControllerService.getOfReadingDataMonotoringData({ enrollmentServiceType, isAlert, page, patientUserUuid, size, sort }) as TData, ...options });
export const useWorkListControllerServiceGetNoDataMonitoringSuspense = <TData = Common.WorkListControllerServiceGetNoDataMonitoringDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ careName, dob, enrollmentServiceType, fullName, page, size, sort }: {
  careName?: string;
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  page?: number;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetNoDataMonitoringKeyFn({ careName, dob, enrollmentServiceType, fullName, page, size, sort }, queryKey), queryFn: () => WorkListControllerService.getNoDataMonitoring({ careName, dob, enrollmentServiceType, fullName, page, size, sort }) as TData, ...options });
export const useWorkListControllerServiceGetNewPatientSuspense = <TData = Common.WorkListControllerServiceGetNewPatientDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ dob, enrollmentServiceType, fullName, page, size, sort }: {
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  page?: number;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetNewPatientKeyFn({ dob, enrollmentServiceType, fullName, page, size, sort }, queryKey), queryFn: () => WorkListControllerService.getNewPatient({ dob, enrollmentServiceType, fullName, page, size, sort }) as TData, ...options });
export const useWorkListControllerServiceGetMonitoringDataByIdSuspense = <TData = Common.WorkListControllerServiceGetMonitoringDataByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetMonitoringDataByIdKeyFn({ id }, queryKey), queryFn: () => WorkListControllerService.getMonitoringDataById({ id }) as TData, ...options });
export const useWorkListControllerServiceGetVitalsSuspense = <TData = Common.WorkListControllerServiceGetVitalsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ endDate, page, patientUserUuid, size, sort, startDate, timeZone, unit, vitals }: {
  endDate?: string;
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
  startDate?: string;
  timeZone: string;
  unit?: "MMHG" | "FAHRENHEIT" | "BPM" | "KG_PER_M2" | "PERCENTAGE" | "METERS" | "LBS" | "ML" | "L_PER_MIN" | "LITERS" | "DEGREE_CELSIUS" | "KILOGRAMS";
  vitals?: "BLOOD_PRESSURE" | "BLOOD_PRESSURE_SYSTOLIC" | "BLOOD_PRESSURE_DIASTOLIC" | "BLOOD_GLUCOSE" | "HEART_RATE" | "BODY_TEMPERATURE" | "RESPIRATION_RATE" | "WEIGHT" | "OXYGEN_SATURATION" | "PULSE_RATE" | "BODY_MASS_INDEX" | "RESPIRATORY_VOLUME" | "HEIGHT" | "FORCED_EXPIRATORY_VOLUME" | "PEAK_EXPIRATORY" | "PERFUSION_INDEX" | "STEPS" | "PAINSCALE";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetVitalsKeyFn({ endDate, page, patientUserUuid, size, sort, startDate, timeZone, unit, vitals }, queryKey), queryFn: () => WorkListControllerService.getVitals({ endDate, page, patientUserUuid, size, sort, startDate, timeZone, unit, vitals }) as TData, ...options });
export const useWorkListControllerServiceGetReviewedNoteSuspense = <TData = Common.WorkListControllerServiceGetReviewedNoteDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetReviewedNoteKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => WorkListControllerService.getReviewedNote({ page, patientUserUuid, size, sort }) as TData, ...options });
export const useWorkListControllerServiceGetResolvedNoteSuspense = <TData = Common.WorkListControllerServiceGetResolvedNoteDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetResolvedNoteKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => WorkListControllerService.getResolvedNote({ page, patientUserUuid, size, sort }) as TData, ...options });
export const useWorkListControllerServiceGetLatestVitalsSuspense = <TData = Common.WorkListControllerServiceGetLatestVitalsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort, timeZone }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
  timeZone: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetLatestVitalsKeyFn({ page, patientUserUuid, size, sort, timeZone }, queryKey), queryFn: () => WorkListControllerService.getLatestVitals({ page, patientUserUuid, size, sort, timeZone }) as TData, ...options });
export const useWorkListControllerServiceGetEscalateSuspense = <TData = Common.WorkListControllerServiceGetEscalateDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ endDate, escalateStatus, page, search, size, sort, startDate }: {
  endDate?: string;
  escalateStatus?: "CLOSED" | "OPEN";
  page?: number;
  search?: string;
  size?: number;
  sort?: string[];
  startDate?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetEscalateKeyFn({ endDate, escalateStatus, page, search, size, sort, startDate }, queryKey), queryFn: () => WorkListControllerService.getEscalate({ endDate, escalateStatus, page, search, size, sort, startDate }) as TData, ...options });
export const useWorkListControllerServiceGetEscalate1Suspense = <TData = Common.WorkListControllerServiceGetEscalate1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ endDate, escalateStatus, page, patientUserUuid, search, size, sort, startDate }: {
  endDate?: string;
  escalateStatus?: "CLOSED" | "OPEN";
  page?: number;
  patientUserUuid: string;
  search?: string;
  size?: number;
  sort?: string[];
  startDate?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetEscalate1KeyFn({ endDate, escalateStatus, page, patientUserUuid, search, size, sort, startDate }, queryKey), queryFn: () => WorkListControllerService.getEscalate1({ endDate, escalateStatus, page, patientUserUuid, search, size, sort, startDate }) as TData, ...options });
export const useWorkListControllerServiceGetDistinctVitalRecordsSuspense = <TData = Common.WorkListControllerServiceGetDistinctVitalRecordsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetDistinctVitalRecordsKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => WorkListControllerService.getDistinctVitalRecords({ page, patientUserUuid, size, sort }) as TData, ...options });
export const useWorkListControllerServiceMedicalHistoryAlertSuspense = <TData = Common.WorkListControllerServiceMedicalHistoryAlertDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ endDate, page, patientUserUuid, search, size, sort, startDate }: {
  endDate?: string;
  page?: number;
  patientUserUuid: string;
  search?: string;
  size?: number;
  sort?: string[];
  startDate?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceMedicalHistoryAlertKeyFn({ endDate, page, patientUserUuid, search, size, sort, startDate }, queryKey), queryFn: () => WorkListControllerService.medicalHistoryAlert({ endDate, page, patientUserUuid, search, size, sort, startDate }) as TData, ...options });
export const useWorkListControllerServiceGetAlertConfigSuspense = <TData = Common.WorkListControllerServiceGetAlertConfigDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ enrollmentServiceType, patientUserUuid, vital }: {
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  patientUserUuid: string;
  vital: "BLOOD_PRESSURE" | "BLOOD_PRESSURE_SYSTOLIC" | "BLOOD_PRESSURE_DIASTOLIC" | "BLOOD_GLUCOSE" | "HEART_RATE" | "BODY_TEMPERATURE" | "RESPIRATION_RATE" | "WEIGHT" | "OXYGEN_SATURATION" | "PULSE_RATE" | "BODY_MASS_INDEX" | "RESPIRATORY_VOLUME" | "HEIGHT" | "FORCED_EXPIRATORY_VOLUME" | "PEAK_EXPIRATORY" | "PERFUSION_INDEX" | "STEPS" | "PAINSCALE";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetAlertConfigKeyFn({ enrollmentServiceType, patientUserUuid, vital }, queryKey), queryFn: () => WorkListControllerService.getAlertConfig({ enrollmentServiceType, patientUserUuid, vital }) as TData, ...options });
export const useWorkListControllerServiceGetEscalationSuspense = <TData = Common.WorkListControllerServiceGetEscalationDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetEscalationKeyFn({ id }, queryKey), queryFn: () => WorkListControllerService.getEscalation({ id }) as TData, ...options });
export const useWorkListControllerServiceGetDataMonitoringSuspense = <TData = Common.WorkListControllerServiceGetDataMonitoringDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ careName, dob, enrollmentServiceType, fullName, page, size, sort }: {
  careName?: string;
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  page?: number;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetDataMonitoringKeyFn({ careName, dob, enrollmentServiceType, fullName, page, size, sort }, queryKey), queryFn: () => WorkListControllerService.getDataMonitoring({ careName, dob, enrollmentServiceType, fullName, page, size, sort }) as TData, ...options });
export const useWorkListControllerServiceGetCountInMonitoringSectionSuspense = <TData = Common.WorkListControllerServiceGetCountInMonitoringSectionDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ enrollmentServiceType }: {
  enrollmentServiceType?: "RPM" | "RTM" | "CCM";
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetCountInMonitoringSectionKeyFn({ enrollmentServiceType }, queryKey), queryFn: () => WorkListControllerService.getCountInMonitoringSection({ enrollmentServiceType }) as TData, ...options });
export const useWorkListControllerServiceGetCountInInteractionSectionSuspense = <TData = Common.WorkListControllerServiceGetCountInInteractionSectionDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetCountInInteractionSectionKeyFn(queryKey), queryFn: () => WorkListControllerService.getCountInInteractionSection() as TData, ...options });
export const useWorkListControllerServiceGetCountInEnrollmentSectionSuspense = <TData = Common.WorkListControllerServiceGetCountInEnrollmentSectionDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetCountInEnrollmentSectionKeyFn(queryKey), queryFn: () => WorkListControllerService.getCountInEnrollmentSection() as TData, ...options });
export const useWorkListControllerServiceGetClosedEnrollmentSuspense = <TData = Common.WorkListControllerServiceGetClosedEnrollmentDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ careName, dob, enrollmentServiceType, fullName, page, size, sort }: {
  careName?: string;
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  page?: number;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetClosedEnrollmentKeyFn({ careName, dob, enrollmentServiceType, fullName, page, size, sort }, queryKey), queryFn: () => WorkListControllerService.getClosedEnrollment({ careName, dob, enrollmentServiceType, fullName, page, size, sort }) as TData, ...options });
export const useWorkListControllerServiceGetAllMonitoringDataSuspense = <TData = Common.WorkListControllerServiceGetAllMonitoringDataDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ endDate, escalateStatus, isAlert, isEscalate, isResolve, myAlert, page, search, size, sort, startDate }: {
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
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetAllMonitoringDataKeyFn({ endDate, escalateStatus, isAlert, isEscalate, isResolve, myAlert, page, search, size, sort, startDate }, queryKey), queryFn: () => WorkListControllerService.getAllMonitoringData({ endDate, escalateStatus, isAlert, isEscalate, isResolve, myAlert, page, search, size, sort, startDate }) as TData, ...options });
export const useWorkListControllerServiceGetAlertsMonitoringSuspense = <TData = Common.WorkListControllerServiceGetAlertsMonitoringDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ careName, dob, enrollmentServiceType, fullName, page, size, sort }: {
  careName?: string;
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  page?: number;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetAlertsMonitoringKeyFn({ careName, dob, enrollmentServiceType, fullName, page, size, sort }, queryKey), queryFn: () => WorkListControllerService.getAlertsMonitoring({ careName, dob, enrollmentServiceType, fullName, page, size, sort }) as TData, ...options });
export const useWorkListControllerServiceGetActiveEnrollmentSuspense = <TData = Common.WorkListControllerServiceGetActiveEnrollmentDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ careName, dob, enrollmentServiceType, fullName, page, size, sort }: {
  careName?: string;
  dob?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  fullName?: string;
  page?: number;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseWorkListControllerServiceGetActiveEnrollmentKeyFn({ careName, dob, enrollmentServiceType, fullName, page, size, sort }, queryKey), queryFn: () => WorkListControllerService.getActiveEnrollment({ careName, dob, enrollmentServiceType, fullName, page, size, sort }) as TData, ...options });
export const useTemplateControllerServiceGetTemplateByIdSuspense = <TData = Common.TemplateControllerServiceGetTemplateByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseTemplateControllerServiceGetTemplateByIdKeyFn({ id }, queryKey), queryFn: () => TemplateControllerService.getTemplateById({ id }) as TData, ...options });
export const useTemplateControllerServiceGetAllSuspense = <TData = Common.TemplateControllerServiceGetAllDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchString, size, sort }: {
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseTemplateControllerServiceGetAllKeyFn({ page, searchString, size, sort }, queryKey), queryFn: () => TemplateControllerService.getAll({ page, searchString, size, sort }) as TData, ...options });
export const useRedirectProviderControllerServiceGetProviderSuspense = <TData = Common.RedirectProviderControllerServiceGetProviderDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ providerGroupUuid, providerUuid }: {
  providerGroupUuid: string;
  providerUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseRedirectProviderControllerServiceGetProviderKeyFn({ providerGroupUuid, providerUuid }, queryKey), queryFn: () => RedirectProviderControllerService.getProvider({ providerGroupUuid, providerUuid }) as TData, ...options });
export const useRedirectProviderControllerServiceGetAllProvider1Suspense = <TData = Common.RedirectProviderControllerServiceGetAllProvider1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ exclude, page, providerGroupUuid, searchBy, size, sort, status }: {
  exclude?: boolean;
  page?: number;
  providerGroupUuid: string;
  searchBy?: string;
  size?: number;
  sort?: string[];
  status?: boolean;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseRedirectProviderControllerServiceGetAllProvider1KeyFn({ exclude, page, providerGroupUuid, searchBy, size, sort, status }, queryKey), queryFn: () => RedirectProviderControllerService.getAllProvider1({ exclude, page, providerGroupUuid, searchBy, size, sort, status }) as TData, ...options });
export const useRedirectDeviceControllerServiceFetchDeviceSuspense = <TData = Common.RedirectDeviceControllerServiceFetchDeviceDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ providerGroupUuid, uuid }: {
  providerGroupUuid: string;
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseRedirectDeviceControllerServiceFetchDeviceKeyFn({ providerGroupUuid, uuid }, queryKey), queryFn: () => RedirectDeviceControllerService.fetchDevice({ providerGroupUuid, uuid }) as TData, ...options });
export const useRedirectDeviceControllerServiceFetchDevicesSuspense = <TData = Common.RedirectDeviceControllerServiceFetchDevicesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, providerGroupUuid, searchString, size, sort, status }: {
  page?: number;
  providerGroupUuid: string;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: boolean;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseRedirectDeviceControllerServiceFetchDevicesKeyFn({ page, providerGroupUuid, searchString, size, sort, status }, queryKey), queryFn: () => RedirectDeviceControllerService.fetchDevices({ page, providerGroupUuid, searchString, size, sort, status }) as TData, ...options });
export const useProviderControllerServiceGetProvider1Suspense = <TData = Common.ProviderControllerServiceGetProvider1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ providerUuid }: {
  providerUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderControllerServiceGetProvider1KeyFn({ providerUuid }, queryKey), queryFn: () => ProviderControllerService.getProvider1({ providerUuid }) as TData, ...options });
export const useProviderControllerServiceGetProvider2Suspense = <TData = Common.ProviderControllerServiceGetProvider2DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderControllerServiceGetProvider2KeyFn(queryKey), queryFn: () => ProviderControllerService.getProvider2() as TData, ...options });
export const useProviderControllerServiceGetCareManagersSuspense = <TData = Common.ProviderControllerServiceGetCareManagersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderControllerServiceGetCareManagersKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => ProviderControllerService.getCareManagers({ page, patientUserUuid, size, sort }) as TData, ...options });
export const useProviderControllerServiceGetProvidersByPatientUuidSuspense = <TData = Common.ProviderControllerServiceGetProvidersByPatientUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderControllerServiceGetProvidersByPatientUuidKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => ProviderControllerService.getProvidersByPatientUuid({ page, patientUserUuid, size, sort }) as TData, ...options });
export const useProviderControllerServiceGetProviderByUuidSuspense = <TData = Common.ProviderControllerServiceGetProviderByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ providerUserUuid }: {
  providerUserUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderControllerServiceGetProviderByUuidKeyFn({ providerUserUuid }, queryKey), queryFn: () => ProviderControllerService.getProviderByUuid({ providerUserUuid }) as TData, ...options });
export const useProviderControllerServiceGetAllProvider3Suspense = <TData = Common.ProviderControllerServiceGetAllProvider3DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ exclude, page, role, searchBy, size, sort, status }: {
  exclude?: boolean;
  page?: number;
  role?: string;
  searchBy?: string;
  size?: number;
  sort?: string[];
  status?: boolean;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderControllerServiceGetAllProvider3KeyFn({ exclude, page, role, searchBy, size, sort, status }, queryKey), queryFn: () => ProviderControllerService.getAllProvider3({ exclude, page, role, searchBy, size, sort, status }) as TData, ...options });
export const useProviderGroupControllerServiceGetProviderGroupSuspense = <TData = Common.ProviderGroupControllerServiceGetProviderGroupDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderGroupControllerServiceGetProviderGroupKeyFn({ uuid }, queryKey), queryFn: () => ProviderGroupControllerService.getProviderGroup({ uuid }) as TData, ...options });
export const useProviderGroupControllerServiceGetUserCommonDetailsByUsernameSuspense = <TData = Common.ProviderGroupControllerServiceGetUserCommonDetailsByUsernameDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ username }: {
  username: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderGroupControllerServiceGetUserCommonDetailsByUsernameKeyFn({ username }, queryKey), queryFn: () => ProviderGroupControllerService.getUserCommonDetailsByUsername({ username }) as TData, ...options });
export const useProviderGroupControllerServiceGetUserCommonDetailsByUserUuidSuspense = <TData = Common.ProviderGroupControllerServiceGetUserCommonDetailsByUserUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ userUuid }: {
  userUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderGroupControllerServiceGetUserCommonDetailsByUserUuidKeyFn({ userUuid }, queryKey), queryFn: () => ProviderGroupControllerService.getUserCommonDetailsByUserUuid({ userUuid }) as TData, ...options });
export const useProviderGroupControllerServiceGetProviderGroupDetailsByTenantGroupSuspense = <TData = Common.ProviderGroupControllerServiceGetProviderGroupDetailsByTenantGroupDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ tenantGroup }: {
  tenantGroup: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderGroupControllerServiceGetProviderGroupDetailsByTenantGroupKeyFn({ tenantGroup }, queryKey), queryFn: () => ProviderGroupControllerService.getProviderGroupDetailsByTenantGroup({ tenantGroup }) as TData, ...options });
export const useProviderGroupControllerServiceGetAllProviderGroupsSuspense = <TData = Common.ProviderGroupControllerServiceGetAllProviderGroupsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ active, page, searchString, size, sort, state }: {
  active?: boolean;
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  state?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderGroupControllerServiceGetAllProviderGroupsKeyFn({ active, page, searchString, size, sort, state }, queryKey), queryFn: () => ProviderGroupControllerService.getAllProviderGroups({ active, page, searchString, size, sort, state }) as TData, ...options });
export const usePatientControllerServiceGetPatientByUuidSuspense = <TData = Common.PatientControllerServiceGetPatientByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetPatientByUuidKeyFn({ uuid }, queryKey), queryFn: () => PatientControllerService.getPatientByUuid({ uuid }) as TData, ...options });
export const usePatientControllerServiceSearchPatientProviderSuspense = <TData = Common.PatientControllerServiceSearchPatientProviderDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, search, size, sort }: {
  page?: number;
  search?: string;
  size?: number;
  sort?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceSearchPatientProviderKeyFn({ page, search, size, sort }, queryKey), queryFn: () => PatientControllerService.searchPatientProvider({ page, search, size, sort }) as TData, ...options });
export const usePatientControllerServiceGetProfileSuspense = <TData = Common.PatientControllerServiceGetProfileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ mobileType }: {
  mobileType?: "IOS" | "ANDROID";
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetProfileKeyFn({ mobileType }, queryKey), queryFn: () => PatientControllerService.getProfile({ mobileType }) as TData, ...options });
export const usePatientControllerServiceGetAvatarSuspense = <TData = Common.PatientControllerServiceGetAvatarDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ patientUserUuid }: {
  patientUserUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetAvatarKeyFn({ patientUserUuid }, queryKey), queryFn: () => PatientControllerService.getAvatar({ patientUserUuid }) as TData, ...options });
export const usePatientControllerServiceGetSmsWithProviderEntitySuspense = <TData = Common.PatientControllerServiceGetSmsWithProviderEntityDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ activity, page, searchString, size, sort }: {
  activity: "ENROLLMENT" | "NEW_READING_ADDED" | "ALERT_GENERATE" | "ALERT_RESOLVED" | "APP_MESSAGE" | "SMS_MESSAGE" | "RECEIVED_NOTIFICATION" | "TIME_LOGGED" | "VITALS_REVIEWED" | "NOTE_ADDED" | "ESCALATE" | "VITALS_CONFIG_UPDATE";
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetSmsWithProviderEntityKeyFn({ activity, page, searchString, size, sort }, queryKey), queryFn: () => PatientControllerService.getSmsWithProviderEntity({ activity, page, searchString, size, sort }) as TData, ...options });
export const usePatientControllerServiceGetErrorForFileSuspense = <TData = Common.PatientControllerServiceGetErrorForFileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ key }: {
  key: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetErrorForFileKeyFn({ key }, queryKey), queryFn: () => PatientControllerService.getErrorForFile({ key }) as TData, ...options });
export const usePatientControllerServiceGetFamilyMembersSuspense = <TData = Common.PatientControllerServiceGetFamilyMembersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetFamilyMembersKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => PatientControllerService.getFamilyMembers({ page, patientUserUuid, size, sort }) as TData, ...options });
export const usePatientControllerServiceGetAllPatientSuspense = <TData = Common.PatientControllerServiceGetAllPatientDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchBy, size, sort, status }: {
  page?: number;
  searchBy?: string;
  size?: number;
  sort?: string[];
  status?: boolean;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetAllPatientKeyFn({ page, searchBy, size, sort, status }, queryKey), queryFn: () => PatientControllerService.getAllPatient({ page, searchBy, size, sort, status }) as TData, ...options });
export const usePatientControllerServiceGetAllCareTeamSuspense = <TData = Common.PatientControllerServiceGetAllCareTeamDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchBy, serviceType, size, sort, userUuid }: {
  page?: number;
  searchBy?: string;
  serviceType?: string;
  size?: number;
  sort?: string[];
  userUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetAllCareTeamKeyFn({ page, searchBy, serviceType, size, sort, userUuid }, queryKey), queryFn: () => PatientControllerService.getAllCareTeam({ page, searchBy, serviceType, size, sort, userUuid }) as TData, ...options });
export const usePatientControllerServiceGetManagersSuspense = <TData = Common.PatientControllerServiceGetManagersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientControllerServiceGetManagersKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => PatientControllerService.getManagers({ page, patientUserUuid, size, sort }) as TData, ...options });
export const usePatientSymptomControllerServiceGetAllByPatientSuspense = <TData = Common.PatientSymptomControllerServiceGetAllByPatientDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ userUuid }: {
  userUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientSymptomControllerServiceGetAllByPatientKeyFn({ userUuid }, queryKey), queryFn: () => PatientSymptomControllerService.getAllByPatient({ userUuid }) as TData, ...options });
export const usePatientMedicationControllerServiceChangeStatusSuspense = <TData = Common.PatientMedicationControllerServiceChangeStatusDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientMedicationControllerServiceChangeStatusKeyFn(queryKey), queryFn: () => PatientMedicationControllerService.changeStatus() as TData, ...options });
export const usePatientMedicationControllerServiceGetAllMedicationsByPatientSuspense = <TData = Common.PatientMedicationControllerServiceGetAllMedicationsByPatientDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchBy, size, sort, userUuid }: {
  page?: number;
  searchBy?: string;
  size?: number;
  sort?: string[];
  userUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientMedicationControllerServiceGetAllMedicationsByPatientKeyFn({ page, searchBy, size, sort, userUuid }, queryKey), queryFn: () => PatientMedicationControllerService.getAllMedicationsByPatient({ page, searchBy, size, sort, userUuid }) as TData, ...options });
export const usePatientMedicationControllerServiceGetMedicationsByPatientSuspense = <TData = Common.PatientMedicationControllerServiceGetMedicationsByPatientDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchString, size, sort, status, userUuid }: {
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: string;
  userUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientMedicationControllerServiceGetMedicationsByPatientKeyFn({ page, searchString, size, sort, status, userUuid }, queryKey), queryFn: () => PatientMedicationControllerService.getMedicationsByPatient({ page, searchString, size, sort, status, userUuid }) as TData, ...options });
export const usePatientMedicationControllerServiceGetAllMedicationsSuspense = <TData = Common.PatientMedicationControllerServiceGetAllMedicationsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchBy, size, sort }: {
  page?: number;
  searchBy?: string;
  size?: number;
  sort?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientMedicationControllerServiceGetAllMedicationsKeyFn({ page, searchBy, size, sort }, queryKey), queryFn: () => PatientMedicationControllerService.getAllMedications({ page, searchBy, size, sort }) as TData, ...options });
export const usePatientConditionControllerServiceGetAllPatientConditionsSuspense = <TData = Common.PatientConditionControllerServiceGetAllPatientConditionsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchString, serviceType, size, sort, userUuid }: {
  page?: number;
  searchString?: string;
  serviceType?: "RPM" | "RTM" | "CCM";
  size?: number;
  sort?: string[];
  userUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientConditionControllerServiceGetAllPatientConditionsKeyFn({ page, searchString, serviceType, size, sort, userUuid }, queryKey), queryFn: () => PatientConditionControllerService.getAllPatientConditions({ page, searchString, serviceType, size, sort, userUuid }) as TData, ...options });
export const usePatientAllergyControllerServiceGetAllAllergySuspense = <TData = Common.PatientAllergyControllerServiceGetAllAllergyDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchString, size, sort, userUuid }: {
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  userUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePatientAllergyControllerServiceGetAllAllergyKeyFn({ page, searchString, size, sort, userUuid }, queryKey), queryFn: () => PatientAllergyControllerService.getAllAllergy({ page, searchString, size, sort, userUuid }) as TData, ...options });
export const useNotificationEntityControllerServiceGetAllNotificationsSuspense = <TData = Common.NotificationEntityControllerServiceGetAllNotificationsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, size, sort, type }: {
  page?: number;
  size?: number;
  sort?: string[];
  type?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseNotificationEntityControllerServiceGetAllNotificationsKeyFn({ page, size, sort, type }, queryKey), queryFn: () => NotificationEntityControllerService.getAllNotifications({ page, size, sort, type }) as TData, ...options });
export const useNotificationEntityControllerServiceGetCountNotificationSuspense = <TData = Common.NotificationEntityControllerServiceGetCountNotificationDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseNotificationEntityControllerServiceGetCountNotificationKeyFn(queryKey), queryFn: () => NotificationEntityControllerService.getCountNotification() as TData, ...options });
export const useNotificationControllerServiceGetAllNotificationSuspense = <TData = Common.NotificationControllerServiceGetAllNotificationDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ search }: {
  search?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseNotificationControllerServiceGetAllNotificationKeyFn({ search }, queryKey), queryFn: () => NotificationControllerService.getAllNotification({ search }) as TData, ...options });
export const useNotificationProviderControllerServiceGetAllNotifications1Suspense = <TData = Common.NotificationProviderControllerServiceGetAllNotifications1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, size, sort, type }: {
  page?: number;
  size?: number;
  sort?: string[];
  type?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseNotificationProviderControllerServiceGetAllNotifications1KeyFn({ page, size, sort, type }, queryKey), queryFn: () => NotificationProviderControllerService.getAllNotifications1({ page, size, sort, type }) as TData, ...options });
export const useNotificationProviderControllerServiceGetCountNotification1Suspense = <TData = Common.NotificationProviderControllerServiceGetCountNotification1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseNotificationProviderControllerServiceGetCountNotification1KeyFn(queryKey), queryFn: () => NotificationProviderControllerService.getCountNotification1() as TData, ...options });
export const useLabResultControllerServiceGetByIdSuspense = <TData = Common.LabResultControllerServiceGetByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLabResultControllerServiceGetByIdKeyFn({ id }, queryKey), queryFn: () => LabResultControllerService.getById({ id }) as TData, ...options });
export const useLabResultControllerServiceGetAllPatientLabResultSuspense = <TData = Common.LabResultControllerServiceGetAllPatientLabResultDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchString, size, sort, userUuid }: {
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  userUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLabResultControllerServiceGetAllPatientLabResultKeyFn({ page, searchString, size, sort, userUuid }, queryKey), queryFn: () => LabResultControllerService.getAllPatientLabResult({ page, searchString, size, sort, userUuid }) as TData, ...options });
export const useInsuranceControllerServiceGetAllInsuranceMobileSuspense = <TData = Common.InsuranceControllerServiceGetAllInsuranceMobileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseInsuranceControllerServiceGetAllInsuranceMobileKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => InsuranceControllerService.getAllInsuranceMobile({ page, patientUserUuid, size, sort }) as TData, ...options });
export const useIcdCodeControllerServiceGetIcdCodeByIdSuspense = <TData = Common.IcdCodeControllerServiceGetIcdCodeByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseIcdCodeControllerServiceGetIcdCodeByIdKeyFn({ id }, queryKey), queryFn: () => IcdCodeControllerService.getIcdCodeById({ id }) as TData, ...options });
export const useIcdCodeControllerServiceGetAll1Suspense = <TData = Common.IcdCodeControllerServiceGetAll1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ isFavorite, page, searchString, size, sort }: {
  isFavorite?: boolean;
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseIcdCodeControllerServiceGetAll1KeyFn({ isFavorite, page, searchString, size, sort }, queryKey), queryFn: () => IcdCodeControllerService.getAll1({ isFavorite, page, searchString, size, sort }) as TData, ...options });
export const useEnrollmentControllerServiceGetVitalsOfPatientSuspense = <TData = Common.EnrollmentControllerServiceGetVitalsOfPatientDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ patientUserUuid }: {
  patientUserUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseEnrollmentControllerServiceGetVitalsOfPatientKeyFn({ patientUserUuid }, queryKey), queryFn: () => EnrollmentControllerService.getVitalsOfPatient({ patientUserUuid }) as TData, ...options });
export const useEnrollmentControllerServiceGetEnrollmentByIdSuspense = <TData = Common.EnrollmentControllerServiceGetEnrollmentByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseEnrollmentControllerServiceGetEnrollmentByIdKeyFn({ uuid }, queryKey), queryFn: () => EnrollmentControllerService.getEnrollmentById({ uuid }) as TData, ...options });
export const useEnrollmentControllerServiceGetEnrollmentOfPatientSuspense = <TData = Common.EnrollmentControllerServiceGetEnrollmentOfPatientDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseEnrollmentControllerServiceGetEnrollmentOfPatientKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => EnrollmentControllerService.getEnrollmentOfPatient({ page, patientUserUuid, size, sort }) as TData, ...options });
export const useEnrollmentControllerServiceGetAllEnrollmentSuspense = <TData = Common.EnrollmentControllerServiceGetAllEnrollmentDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ endDate, enrollmentServiceType, enrollmentStatusType, page, size, sort, startDate }: {
  endDate?: string;
  enrollmentServiceType?: "RPM" | "RTM" | "CCM";
  enrollmentStatusType?: "CLOSED" | "NEW" | "ACTIVE";
  page?: number;
  size?: number;
  sort?: string[];
  startDate?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseEnrollmentControllerServiceGetAllEnrollmentKeyFn({ endDate, enrollmentServiceType, enrollmentStatusType, page, size, sort, startDate }, queryKey), queryFn: () => EnrollmentControllerService.getAllEnrollment({ endDate, enrollmentServiceType, enrollmentStatusType, page, size, sort, startDate }) as TData, ...options });
export const useDocumentControllerServiceGetSignatureSuspense = <TData = Common.DocumentControllerServiceGetSignatureDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ documentUuid, patientUserUuid }: {
  documentUuid: string;
  patientUserUuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDocumentControllerServiceGetSignatureKeyFn({ documentUuid, patientUserUuid }, queryKey), queryFn: () => DocumentControllerService.getSignature({ documentUuid, patientUserUuid }) as TData, ...options });
export const useDocumentControllerServiceGetSignedDocumentsSuspense = <TData = Common.DocumentControllerServiceGetSignedDocumentsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDocumentControllerServiceGetSignedDocumentsKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => DocumentControllerService.getSignedDocuments({ page, patientUserUuid, size, sort }) as TData, ...options });
export const useDocumentControllerServiceGetPatientMappedDocumentsSuspense = <TData = Common.DocumentControllerServiceGetPatientMappedDocumentsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ archive, documentType, page, patientUserUuid, searchString, size, sort }: {
  archive?: boolean;
  documentType?: ("CONSENT" | "EDUCATION" | "CHALLENGES" | "GENERAL" | "REPORT" | "HOME_EXERCISE")[];
  page?: number;
  patientUserUuid: string;
  searchString?: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDocumentControllerServiceGetPatientMappedDocumentsKeyFn({ archive, documentType, page, patientUserUuid, searchString, size, sort }, queryKey), queryFn: () => DocumentControllerService.getPatientMappedDocuments({ archive, documentType, page, patientUserUuid, searchString, size, sort }) as TData, ...options });
export const useDocumentControllerServiceGetDocumentsSuspense = <TData = Common.DocumentControllerServiceGetDocumentsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ archive, documentType, page, searchString, size, sort }: {
  archive?: boolean;
  documentType?: ("CONSENT" | "EDUCATION" | "CHALLENGES" | "GENERAL" | "REPORT" | "HOME_EXERCISE")[];
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDocumentControllerServiceGetDocumentsKeyFn({ archive, documentType, page, searchString, size, sort }, queryKey), queryFn: () => DocumentControllerService.getDocuments({ archive, documentType, page, searchString, size, sort }) as TData, ...options });
export const useDeviceControllerServiceFetchDeviceByPatientSuspense = <TData = Common.DeviceControllerServiceFetchDeviceByPatientDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, search, size, sort }: {
  page?: number;
  patientUserUuid: string;
  search?: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDeviceControllerServiceFetchDeviceByPatientKeyFn({ page, patientUserUuid, search, size, sort }, queryKey), queryFn: () => DeviceControllerService.fetchDeviceByPatient({ page, patientUserUuid, search, size, sort }) as TData, ...options });
export const useDeviceControllerServiceFetchDevice1Suspense = <TData = Common.DeviceControllerServiceFetchDevice1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDeviceControllerServiceFetchDevice1KeyFn({ uuid }, queryKey), queryFn: () => DeviceControllerService.fetchDevice1({ uuid }) as TData, ...options });
export const useDeviceControllerServiceFetchDevices1Suspense = <TData = Common.DeviceControllerServiceFetchDevices1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchString, size, sort, status }: {
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: boolean;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDeviceControllerServiceFetchDevices1KeyFn({ page, searchString, size, sort, status }, queryKey), queryFn: () => DeviceControllerService.fetchDevices1({ page, searchString, size, sort, status }) as TData, ...options });
export const useDeviceControllerServiceFetchAllDevicesNameSuspense = <TData = Common.DeviceControllerServiceFetchAllDevicesNameDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, size, sort }: {
  page?: number;
  size?: number;
  sort?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDeviceControllerServiceFetchAllDevicesNameKeyFn({ page, size, sort }, queryKey), queryFn: () => DeviceControllerService.fetchAllDevicesName({ page, size, sort }) as TData, ...options });
export const useAdminUserControllerServiceGetProfile1Suspense = <TData = Common.AdminUserControllerServiceGetProfile1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ userUuid }: {
  userUuid?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminUserControllerServiceGetProfile1KeyFn({ userUuid }, queryKey), queryFn: () => AdminUserControllerService.getProfile1({ userUuid }) as TData, ...options });
export const useAdminUserControllerServiceGetUsersSuspense = <TData = Common.AdminUserControllerServiceGetUsersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ active, exclude, page, searchBy, size, sort, sortBy, sortDirection }: {
  active?: boolean;
  exclude?: boolean;
  page?: number;
  searchBy?: string;
  size?: number;
  sort?: string[];
  sortBy?: string;
  sortDirection?: "ASC" | "DESC";
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminUserControllerServiceGetUsersKeyFn({ active, exclude, page, searchBy, size, sort, sortBy, sortDirection }, queryKey), queryFn: () => AdminUserControllerService.getUsers({ active, exclude, page, searchBy, size, sort, sortBy, sortDirection }) as TData, ...options });
export const useTimeLogControllerServiceGetTimeLogByPatientUserUuidAndEnrollmentServiceTypeSuspense = <TData = Common.TimeLogControllerServiceGetTimeLogByPatientUserUuidAndEnrollmentServiceTypeDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ enrollmentServiceType, patientUserUuid, specificMonth }: {
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  patientUserUuid: string;
  specificMonth?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseTimeLogControllerServiceGetTimeLogByPatientUserUuidAndEnrollmentServiceTypeKeyFn({ enrollmentServiceType, patientUserUuid, specificMonth }, queryKey), queryFn: () => TimeLogControllerService.getTimeLogByPatientUserUuidAndEnrollmentServiceType({ enrollmentServiceType, patientUserUuid, specificMonth }) as TData, ...options });
export const useTimeLogControllerServiceGetMonthWiseTimeLogSuspense = <TData = Common.TimeLogControllerServiceGetMonthWiseTimeLogDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ enrollmentServiceType, page, patientUserUuid, size, sort }: {
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseTimeLogControllerServiceGetMonthWiseTimeLogKeyFn({ enrollmentServiceType, page, patientUserUuid, size, sort }, queryKey), queryFn: () => TimeLogControllerService.getMonthWiseTimeLog({ enrollmentServiceType, page, patientUserUuid, size, sort }) as TData, ...options });
export const useTimeLogControllerServiceGetManualEntriesSuspense = <TData = Common.TimeLogControllerServiceGetManualEntriesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ enrollmentServiceType, page, patientUserUuid, size, sort }: {
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseTimeLogControllerServiceGetManualEntriesKeyFn({ enrollmentServiceType, page, patientUserUuid, size, sort }, queryKey), queryFn: () => TimeLogControllerService.getManualEntries({ enrollmentServiceType, page, patientUserUuid, size, sort }) as TData, ...options });
export const useTimeLogControllerServiceGetTimeLineSuspense = <TData = Common.TimeLogControllerServiceGetTimeLineDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ activity, endDate, enrollmentServiceType, page, patientUserUuid, size, sort, startDate, timeZone }: {
  activity?: ("ENROLLMENT" | "NEW_READING_ADDED" | "ALERT_GENERATE" | "ALERT_RESOLVED" | "APP_MESSAGE" | "SMS_MESSAGE" | "RECEIVED_NOTIFICATION" | "TIME_LOGGED" | "VITALS_REVIEWED" | "NOTE_ADDED" | "ESCALATE" | "VITALS_CONFIG_UPDATE")[];
  endDate?: string;
  enrollmentServiceType: "RPM" | "RTM" | "CCM";
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
  startDate?: string;
  timeZone: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseTimeLogControllerServiceGetTimeLineKeyFn({ activity, endDate, enrollmentServiceType, page, patientUserUuid, size, sort, startDate, timeZone }, queryKey), queryFn: () => TimeLogControllerService.getTimeLine({ activity, endDate, enrollmentServiceType, page, patientUserUuid, size, sort, startDate, timeZone }) as TData, ...options });
export const useRedirectImportControllerServiceGetPatientAuditFilesSuspense = <TData = Common.RedirectImportControllerServiceGetPatientAuditFilesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ file, page, providerGroupUuid, searchString, size, sort, status }: {
  file?: string;
  page?: number;
  providerGroupUuid: string;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: "IN_PROGRESS" | "COMPLETED_WITH_ERROR" | "COMPLETED" | "FAILED";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseRedirectImportControllerServiceGetPatientAuditFilesKeyFn({ file, page, providerGroupUuid, searchString, size, sort, status }, queryKey), queryFn: () => RedirectImportControllerService.getPatientAuditFiles({ file, page, providerGroupUuid, searchString, size, sort, status }) as TData, ...options });
export const useRedirectImportControllerServiceGetPatientAuditFileRecordsSuspense = <TData = Common.RedirectImportControllerServiceGetPatientAuditFileRecordsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ audiFileId, page, providerGroupUuid, searchString, size, sort, status }: {
  audiFileId: number;
  page?: number;
  providerGroupUuid: string;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: "FAILED" | "SUCCESS";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseRedirectImportControllerServiceGetPatientAuditFileRecordsKeyFn({ audiFileId, page, providerGroupUuid, searchString, size, sort, status }, queryKey), queryFn: () => RedirectImportControllerService.getPatientAuditFileRecords({ audiFileId, page, providerGroupUuid, searchString, size, sort, status }) as TData, ...options });
export const useImportControllerServiceGetPatientAuditFiles1Suspense = <TData = Common.ImportControllerServiceGetPatientAuditFiles1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ file, page, searchString, size, sort, status }: {
  file?: string;
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: "IN_PROGRESS" | "COMPLETED_WITH_ERROR" | "COMPLETED" | "FAILED";
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseImportControllerServiceGetPatientAuditFiles1KeyFn({ file, page, searchString, size, sort, status }, queryKey), queryFn: () => ImportControllerService.getPatientAuditFiles1({ file, page, searchString, size, sort, status }) as TData, ...options });
export const useImportControllerServiceGetPatientAuditFileRecords1Suspense = <TData = Common.ImportControllerServiceGetPatientAuditFileRecords1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ audiFileId, page, searchString, size, sort, status }: {
  audiFileId: number;
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
  status?: "FAILED" | "SUCCESS";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseImportControllerServiceGetPatientAuditFileRecords1KeyFn({ audiFileId, page, searchString, size, sort, status }, queryKey), queryFn: () => ImportControllerService.getPatientAuditFileRecords1({ audiFileId, page, searchString, size, sort, status }) as TData, ...options });
export const useImportControllerServiceGetTemplateInCsvSuspense = <TData = Common.ImportControllerServiceGetTemplateInCsvDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ templateType }: {
  templateType: "PATIENT";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseImportControllerServiceGetTemplateInCsvKeyFn({ templateType }, queryKey), queryFn: () => ImportControllerService.getTemplateInCsv({ templateType }) as TData, ...options });
export const useGlobalNoteControllerServiceGetGlobalNotesByPatientUuidSuspense = <TData = Common.GlobalNoteControllerServiceGetGlobalNotesByPatientUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, patientUserUuid, size, sort }: {
  page?: number;
  patientUserUuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGlobalNoteControllerServiceGetGlobalNotesByPatientUuidKeyFn({ page, patientUserUuid, size, sort }, queryKey), queryFn: () => GlobalNoteControllerService.getGlobalNotesByPatientUuid({ page, patientUserUuid, size, sort }) as TData, ...options });
export const useBillingControllerServicePatient360AllBillingSuspense = <TData = Common.BillingControllerServicePatient360AllBillingDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ localDate, patientUserUuid, service }: {
  localDate: string;
  patientUserUuid: string;
  service: "RPM" | "RTM" | "CCM";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseBillingControllerServicePatient360AllBillingKeyFn({ localDate, patientUserUuid, service }, queryKey), queryFn: () => BillingControllerService.patient360AllBilling({ localDate, patientUserUuid, service }) as TData, ...options });
export const useBillingControllerServiceGetMonitoringBillingByUuidSuspense = <TData = Common.BillingControllerServiceGetMonitoringBillingByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseBillingControllerServiceGetMonitoringBillingByUuidKeyFn({ uuid }, queryKey), queryFn: () => BillingControllerService.getMonitoringBillingByUuid({ uuid }) as TData, ...options });
export const useBillingControllerServiceGetMonitoringBillingCountSuspense = <TData = Common.BillingControllerServiceGetMonitoringBillingCountDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ localDate }: {
  localDate: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseBillingControllerServiceGetMonitoringBillingCountKeyFn({ localDate }, queryKey), queryFn: () => BillingControllerService.getMonitoringBillingCount({ localDate }) as TData, ...options });
export const useBillingControllerServiceGetAllBillingForMonitoringSuspense = <TData = Common.BillingControllerServiceGetAllBillingForMonitoringDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ claimStatus, localDate, page, patientName, providerName, service, size, sort }: {
  claimStatus?: string;
  localDate: string;
  page?: number;
  patientName?: string;
  providerName?: string;
  service: "RPM" | "RTM" | "CCM";
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseBillingControllerServiceGetAllBillingForMonitoringKeyFn({ claimStatus, localDate, page, patientName, providerName, service, size, sort }, queryKey), queryFn: () => BillingControllerService.getAllBillingForMonitoring({ claimStatus, localDate, page, patientName, providerName, service, size, sort }) as TData, ...options });
export const useBillingControllerServiceGetInteractionBillingByUuidSuspense = <TData = Common.BillingControllerServiceGetInteractionBillingByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ localDate, uuid }: {
  localDate: string;
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseBillingControllerServiceGetInteractionBillingByUuidKeyFn({ localDate, uuid }, queryKey), queryFn: () => BillingControllerService.getInteractionBillingByUuid({ localDate, uuid }) as TData, ...options });
export const useBillingControllerServiceGetInteractionBillingCountSuspense = <TData = Common.BillingControllerServiceGetInteractionBillingCountDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ localDate }: {
  localDate: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseBillingControllerServiceGetInteractionBillingCountKeyFn({ localDate }, queryKey), queryFn: () => BillingControllerService.getInteractionBillingCount({ localDate }) as TData, ...options });
export const useBillingControllerServiceGetAllBillingForInteractionSuspense = <TData = Common.BillingControllerServiceGetAllBillingForInteractionDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ claimStatus, localDate, page, patientName, providerName, service, size, sort }: {
  claimStatus?: string;
  localDate: string;
  page?: number;
  patientName?: string;
  providerName?: string;
  service: "RPM" | "RTM" | "CCM";
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseBillingControllerServiceGetAllBillingForInteractionKeyFn({ claimStatus, localDate, page, patientName, providerName, service, size, sort }, queryKey), queryFn: () => BillingControllerService.getAllBillingForInteraction({ claimStatus, localDate, page, patientName, providerName, service, size, sort }) as TData, ...options });
export const useBillingControllerServiceGetEnrollmentBillingByUuidSuspense = <TData = Common.BillingControllerServiceGetEnrollmentBillingByUuidDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ uuid }: {
  uuid: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseBillingControllerServiceGetEnrollmentBillingByUuidKeyFn({ uuid }, queryKey), queryFn: () => BillingControllerService.getEnrollmentBillingByUuid({ uuid }) as TData, ...options });
export const useBillingControllerServiceGetEnrollmentBillingCountSuspense = <TData = Common.BillingControllerServiceGetEnrollmentBillingCountDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ localDate }: {
  localDate: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseBillingControllerServiceGetEnrollmentBillingCountKeyFn({ localDate }, queryKey), queryFn: () => BillingControllerService.getEnrollmentBillingCount({ localDate }) as TData, ...options });
export const useBillingControllerServiceGetAllBillingForEnrollmentSuspense = <TData = Common.BillingControllerServiceGetAllBillingForEnrollmentDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ claimStatus, localDate, page, patientName, providerName, service, size, sort }: {
  claimStatus?: string;
  localDate: string;
  page?: number;
  patientName?: string;
  providerName?: string;
  service: "RPM" | "RTM" | "CCM";
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseBillingControllerServiceGetAllBillingForEnrollmentKeyFn({ claimStatus, localDate, page, patientName, providerName, service, size, sort }, queryKey), queryFn: () => BillingControllerService.getAllBillingForEnrollment({ claimStatus, localDate, page, patientName, providerName, service, size, sort }) as TData, ...options });
export const useActivityTimeLogControllerServiceAllActivitySuspense = <TData = Common.ActivityTimeLogControllerServiceAllActivityDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, providerUseruuid, size, sort }: {
  page?: number;
  providerUseruuid: string;
  size?: number;
  sort?: string[];
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseActivityTimeLogControllerServiceAllActivityKeyFn({ page, providerUseruuid, size, sort }, queryKey), queryFn: () => ActivityTimeLogControllerService.allActivity({ page, providerUseruuid, size, sort }) as TData, ...options });
export const useSpecialityControllerServiceGetAllSpecialitiesSuspense = <TData = Common.SpecialityControllerServiceGetAllSpecialitiesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, searchString, size, sort }: {
  page?: number;
  searchString?: string;
  size?: number;
  sort?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSpecialityControllerServiceGetAllSpecialitiesKeyFn({ page, searchString, size, sort }, queryKey), queryFn: () => SpecialityControllerService.getAllSpecialities({ page, searchString, size, sort }) as TData, ...options });
export const useRedirectPatientControllerServiceGetAllProvider2Suspense = <TData = Common.RedirectPatientControllerServiceGetAllProvider2DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, providerGroupUuid, searchBy, size, sort, status }: {
  page?: number;
  providerGroupUuid: string;
  searchBy?: string;
  size?: number;
  sort?: string[];
  status?: boolean;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseRedirectPatientControllerServiceGetAllProvider2KeyFn({ page, providerGroupUuid, searchBy, size, sort, status }, queryKey), queryFn: () => RedirectPatientControllerService.getAllProvider2({ page, providerGroupUuid, searchBy, size, sort, status }) as TData, ...options });
export const usePasswordGeneratorControllerServiceGeneratePasswordSuspense = <TData = Common.PasswordGeneratorControllerServiceGeneratePasswordDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ count }: {
  count?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePasswordGeneratorControllerServiceGeneratePasswordKeyFn({ count }, queryKey), queryFn: () => PasswordGeneratorControllerService.generatePassword({ count }) as TData, ...options });
export const useTwilioConversationControllerServiceGetAuthTokenSuspense = <TData = Common.TwilioConversationControllerServiceGetAuthTokenDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ identity }: {
  identity: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseTwilioConversationControllerServiceGetAuthTokenKeyFn({ identity }, queryKey), queryFn: () => TwilioConversationControllerService.getAuthToken({ identity }) as TData, ...options });
export const useNameRecordControllerServiceBuildAndGetPortalUrlSuspense = <TData = Common.NameRecordControllerServiceBuildAndGetPortalUrlDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ attachProtocol, nameRecord }: {
  attachProtocol: boolean;
  nameRecord?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseNameRecordControllerServiceBuildAndGetPortalUrlKeyFn({ attachProtocol, nameRecord }, queryKey), queryFn: () => NameRecordControllerService.buildAndGetPortalUrl({ attachProtocol, nameRecord }) as TData, ...options });
export const useNameRecordControllerServiceIsNameRecordPresentSuspense = <TData = Common.NameRecordControllerServiceIsNameRecordPresentDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ nameRecord }: {
  nameRecord: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseNameRecordControllerServiceIsNameRecordPresentKeyFn({ nameRecord }, queryKey), queryFn: () => NameRecordControllerService.isNameRecordPresent({ nameRecord }) as TData, ...options });
export const useAwsControllerServiceGetFileSuspense = <TData = Common.AwsControllerServiceGetFileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ key }: {
  key: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAwsControllerServiceGetFileKeyFn({ key }, queryKey), queryFn: () => AwsControllerService.getFile({ key }) as TData, ...options });
export const useAwsControllerServiceGetFile1Suspense = <TData = Common.AwsControllerServiceGetFile1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ key }: {
  key: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAwsControllerServiceGetFile1KeyFn({ key }, queryKey), queryFn: () => AwsControllerService.getFile1({ key }) as TData, ...options });
