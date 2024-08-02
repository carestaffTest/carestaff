import { Schema, model, models } from "mongoose";

export interface IEmployer extends Document {
  _id: string;
  imageUrl: string;
  companyName: string;
  companyLocation: string;
  companyEmail: string;
  companyNumber: string;
  companyOverview: string;
  createdBy: { _id: string; firstName: string; lastName: string };
  createdAt: Date;
}

const EmployerSchema = new Schema({
  imageUrl: { type: String, required: true },
  companyName: { type: String, required: true },
  companyLocation: { type: String, required: true },
  companyEmail: { type: String, required: true },
  companyNumber: { type: String, required: true },
  companyOverview: { type: String, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

const Employer = models.Employer || model("Employer", EmployerSchema);

export default Employer;
