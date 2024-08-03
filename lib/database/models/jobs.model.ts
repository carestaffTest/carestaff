import { Schema, model, models, Document } from "mongoose";

export interface IJobs extends Document {
  jobNumber: string;
  recruitmentCode: string;
  jobType: string;
  projectHeading: string;
  point: string;
  jobDescription: string;
  personInCharge: string;
  specialConditions: string;
  hpUpdateDate: string;
  employmentStatus: string;
  salaryRange: string;
  salaryDetails: string;
  benefitsDetails: string;
  workLocation: string;
  municipalityHokkaido: string;
  municipalityAomori: string;
  municipalityIwate: string;
  municipalityAkita: string;
  municipalityMiyagi: string;
  municipalityFukushima: string;
  municipalityYamagata: string;
  municipalityTochigi: string;
  municipalityGunma: string;
  municipalityNagano: string;
  transportationAccessInformation: string;
  workAddress: string;
  occupationClassification: string;
  industry: string;
  earlyWorkingHours: string;
  dayWorkingHours: string;
  lateworkingHours: string;
  nightworkingHours: string;
  firstOtherWorkingHours: string;
  secondOtherWorkingHours: string;
  holidaysOrVacations: string;
  qualificationName: string;
  companyName: string;
  nearStation: string;
  earlyShiftConsultant: string;
  dayShiftConsultant: string;
  lateShiftConsultant: string;
  nightShiftConsultant: string;
  otherShiftConsultant: string;
  registeredDate: string;
  contractPeriod: string;
  contractRenew: string;
  insurance: string;
  passiveSmoking: string;
  postCode: string;
  createdBy?: { _id: string; firstName: string; lastName: string };
  createdAt: Date;
}

const JobsSchema = new Schema({
  jobNumber: { type: String, required: true, unique: true },
  recruitmentCode: { type: String, required: false },
  jobType: { type: String, required: false },
  projectHeading: { type: String, required: false },
  point: { type: String, required: false },
  jobDescription: { type: String, required: false },
  personInCharge: { type: String, required: false },
  specialConditions: { type: String, required: false },
  hpUpdateDate: { type: String, required: false },
  employmentStatus: { type: String, required: false },
  salaryRange: { type: String, required: false },
  salaryDetails: { type: String, required: false },
  benefitsDetails: { type: String, required: false },
  workLocation: { type: String, required: false },
  municipalityHokkaido: { type: String, required: false },
  municipalityAomori: { type: String, required: false },
  municipalityIwate: { type: String, required: false },
  municipalityAkita: { type: String, required: false },
  municipalityMiyagi: { type: String, required: false },
  municipalityFukushima: { type: String, required: false },
  municipalityYamagata: { type: String, required: false },
  municipalityTochigi: { type: String, required: false },
  municipalityGunma: { type: String, required: false },
  municipalityNagano: { type: String, required: false },
  transportationAccessInformation: { type: String, required: false },
  workAddress: { type: String, required: false },
  occupationClassification: { type: String, required: false },
  industry: { type: String, required: false },
  earlyWorkingHours: { type: String, required: false },
  dayWorkingHours: { type: String, required: false },
  lateworkingHours: { type: String, required: false },
  nightworkingHours: { type: String, required: false },
  firstOtherWorkingHours: { type: String, required: false },
  secondOtherWorkingHours: { type: String, required: false },
  holidaysOrVacations: { type: String, required: false },
  qualificationName: { type: String, required: false },
  companyName: { type: String, required: false },
  nearStation: { type: String, required: false },
  earlyShiftConsultant: { type: String, required: false },
  dayShiftConsultant: { type: String, required: false },
  lateShiftConsultant: { type: String, required: false },
  nightShiftConsultant: { type: String, required: false },
  otherShiftConsultant: { type: String, required: false },
  registeredDate: { type: String, required: false },
  contractPeriod: { type: String, required: false },
  contractRenew: { type: String, required: false },
  insurance: { type: String, required: false },
  passiveSmoking: { type: String, required: false },
  postCode: { type: String, required: false },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

const Jobs = models.Jobs || model("Jobs", JobsSchema);

export default Jobs;
