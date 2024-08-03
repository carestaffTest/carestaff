import { z } from "zod";

export const jobDetailsSchema = z.object({
  jobNumber: z.string().min(1, "Fill up this field"),
  recruitmentCode: z.any(),
  jobType: z.any(),
  projectHeading: z.any(),
  point: z.any(),
  jobDescription: z.any(),
  personInCharge: z.any(),
  specialConditions: z.any(),
  hpUpdateDate: z.any(),
  employmentStatus: z.any(),
  salaryRange: z.any(),
  salaryDetails: z.any(),
  benefitsDetails: z.any(),
  workLocation: z.any(),
  municipalityHokkaido: z.any(),
  municipalityAomori: z.any(),
  municipalityIwate: z.any(),
  municipalityAkita: z.any(),
  municipalityMiyagi: z.any(),
  municipalityFukushima: z.any(),
  municipalityYamagata: z.any(),
  municipalityTochigi: z.any(),
  municipalityGunma: z.any(),
  municipalityNagano: z.any(),
  transportationAccessInformation: z.any(),
  workAddress: z.any(),
  occupationClassification: z.any(),
  industry: z.any(),
  earlyWorkingHours: z.any(),
  dayWorkingHours: z.any(),
  lateworkingHours: z.any(),
  nightworkingHours: z.any(),
  firstOtherWorkingHours: z.any(),
  secondOtherWorkingHours: z.any(),
  holidaysOrVacations: z.any(),
  qualificationName: z.any(),
  companyName: z.any(),
  nearStation: z.any(),
  earlyShiftConsultant: z.any(),
  dayShiftConsultant: z.any(),
  lateShiftConsultant: z.any(),
  nightShiftConsultant: z.any(),
  otherShiftConsultant: z.any(),
  registeredDate: z.any(),
  contractPeriod: z.any(),
  contractRenew: z.any(),
  insurance: z.any(),
  passiveSmoking: z.any(),
  postCode: z.any(),
});

export const employerInfoSchema = z.object({
  imageUrl: z.string(),
  companyName: z.string().min(1, "Fill up this field"),
  companyLocation: z.string().min(1, "Fill up this field"),
  companyEmail: z.string().min(1, "Fill up this field"),
  companyNumber: z.string().min(1, "Fill up this field"),
  companyOverview: z.string().min(3, "Fill up this field"),
});

export const contactUsSenderSchema = z.object({
  name: z.string().min(1, "Fill up this field"),
  email: z.string().min(1, "Fill up this field"),
  subject: z.string().min(1, "Fill up this field"),
  contactNumber: z.string().min(1, "Fill up this field"),
  message: z
    .string()
    .min(3, "Fill up this field")
    .max(1000, "Only 1000 characters will be allowed."),
  isCheck: z.boolean(),
});

export const jobApplicationSenderInfoSchema = z.object({
  name: z.string().min(1, "Fill up this field"),
  email: z.string().min(1, "Fill up this field"),
  contactNumber: z.string().min(1, "Fill up this field"),
  applyFor: z.string().min(1, "Fill up this field"),
  message: z.string().min(3, "Fill up this field"),
  jobApplicationAttachment: z.any(),
  isCheck: z.boolean(),
});
