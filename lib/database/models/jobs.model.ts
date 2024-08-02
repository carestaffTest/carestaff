import { Schema, model, models, Document } from "mongoose";

export interface IJobs extends Document {
  jobNumber: string;
  recruitmentCode?: string;
  projectHeading?: string;
  companyNumber?: string;
  companyName?: string;
  specialConditions?: string;
  employmentStatus?: string;
  industry?: string;
  occupationClassification?: string;
  jobType?: string;
  salaryRange?: string;
  salaryDetails?: string;
  benefitsDetails?: string;
  point?: string;
  jobDescription?: string;
  qualificationName?: string;
  workLocation?: string;
  municipalityHokkaido?: string;
  municipalityAomori?: string;
  municipalityIwate?: string;
  municipalityAkita?: string;
  municipalityMiyagi?: string;
  municipalityFukushima?: string;
  municipalityYamagata?: string;
  municipalityTochigi?: string;
  municipalityNagano?: string;
  transportationAccessInformation?: string;
  workingDays?: string;
  earlyWorkingHours?: string;
  dayWorkingHours?: string;
  lateworkingHours?: string;
  nightworkingHours?: string;
  firstOtherWorkingHours?: string;
  secondOtherWorkingHours?: string;
  holidaysOrVacations?: string;
  personInCharge?: string;
  hpUpdateDate?: string;
  webListing?: string;
  jobRegistrationDate?: string;
  registeredDate?: string;
  updateDateAndTime?: string;
  inCharge?: string;
  recruitmentCaseManager?: string;
  directlyPostedOnIndeed?: string;
  recruitmentBoxDirectPosting?: string;
  talentClipPublicOrPrivate?: string;
  nurseHpPublicOrPrivate?: string;
  status?: string;
  memo?: string;
  secondMemo?: string;
  webMediaDisclosureOrNonDisclosure?: string;
  createdBy?: { _id: string; firstName: string; lastName: string };
  createdAt: Date;
}

const JobsSchema = new Schema({
  jobNumber: { type: String, required: true, unique: true },
  recruitmentCode: { type: String, required: false },
  projectHeading: { type: String, required: false },
  companyNumber: { type: String, required: false },
  companyName: { type: String, required: false },
  specialConditions: { type: String, required: false },
  employmentStatus: { type: String, required: false },
  industry: { type: String, required: false },
  occupationClassification: { type: String, required: false },
  jobType: { type: String, required: false },
  salaryRange: { type: String, required: false },
  salaryDetails: { type: String, required: false },
  benefitsDetails: { type: String, required: false },
  point: { type: String, required: false },
  jobDescription: { type: String, required: false },
  qualificationName: { type: String, required: false },
  workLocation: { type: String, required: false },
  municipalityHokkaido: { type: String, required: false },
  municipalityAomori: { type: String, required: false },
  municipalityIwate: { type: String, required: false },
  municipalityAkita: { type: String, required: false },
  municipalityMiyagi: { type: String, required: false },
  municipalityFukushima: { type: String, required: false },
  municipalityYamagata: { type: String, required: false },
  municipalityTochigi: { type: String, required: false },
  municipalityNagano: { type: String, required: false },
  transportationAccessInformation: { type: String, required: false },
  workingDays: { type: String, required: false },
  earlyWorkingHours: { type: String, required: false },
  dayWorkingHours: { type: String, required: false },
  lateworkingHours: { type: String, required: false },
  nightworkingHours: { type: String, required: false },
  firstOtherWorkingHours: { type: String, required: false },
  secondOtherWorkingHours: { type: String, required: false },
  holidaysOrVacations: { type: String, required: false },
  personInCharge: { type: String, required: false },
  hpUpdateDate: { type: String, required: false },
  webListing: { type: String, required: false },
  jobRegistrationDate: { type: String, required: false },
  registeredDate: { type: String, required: false },
  updateDateAndTime: { type: String, required: false },
  inCharge: { type: String, required: false },
  recruitmentCaseManager: { type: String, required: false },
  directlyPostedOnIndeed: { type: String, required: false },
  recruitmentBoxDirectPosting: { type: String, required: false },
  talentClipPublicOrPrivate: { type: String, required: false },
  nurseHpPublicOrPrivate: { type: String, required: false },
  status: { type: String, required: false },
  memo: { type: String, required: false },
  secondMemo: { type: String, required: false },
  webMediaDisclosureOrNonDisclosure: { type: String, required: false },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

const Jobs = models.Jobs || model("Jobs", JobsSchema);

export default Jobs;
