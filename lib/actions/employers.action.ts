"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database";
import Employer from "../database/models/employer.model";
import { handleError } from "../utils";
import {
  CreateEmployerParams,
  DeleteEmployerParams,
  GetAll,
  UpdateEmployerParams,
} from "@/types";
import User from "../database/models/user.model";

const populate = (query: any) => {
  return query.populate({
    path: "_id",
  });
};

export async function createEmployerInfo({
  employerInfo,
  userId,
  path,
}: CreateEmployerParams) {
  try {
    await connectToDatabase();

    const creator = await User.findById(userId);

    if (!creator) {
      throw new Error("Creator not found");
    }

    const newEmployerDetails = await Employer.create({
      ...employerInfo,
      createdBy: userId,
    });
    revalidatePath(path);
    return JSON.parse(JSON.stringify(newEmployerDetails));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateEmployerInfo({
  userId,
  employerInfo,
  path,
}: UpdateEmployerParams) {
  try {
    await connectToDatabase();

    const creator = await User.findById(userId);
    if (!creator) {
      throw new Error("Unauthorized or myid not found");
    }

    const updatedEmployer = await Employer.findByIdAndUpdate(
      employerInfo._id,
      { ...employerInfo },
      { new: true }
    );
    revalidatePath(path);

    return JSON.parse(JSON.stringify(updatedEmployer));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteEmployer({
  employerId,
  path,
}: DeleteEmployerParams) {
  try {
    await connectToDatabase();

    const deletedEmployer = await Employer.findByIdAndDelete(employerId);
    if (deletedEmployer) revalidatePath(path);
  } catch (error) {
    handleError(error);
  }
}

export async function getAllEmployer({ query, limit = 10, page }: GetAll) {
  try {
    await connectToDatabase();

    const employerTypeCondition = query
      ? {
          companyName: { $regex: query, $options: "i" },
        }
      : {};
    const conditions = {
      $and: [employerTypeCondition],
    };
    const skipAmount = (Number(page) - 1) * limit;

    const sortCondition = { createdAt: "desc", _id: "asc" } as any;
    const employerQuery = Employer.find(conditions)
      .sort(sortCondition)
      .skip(skipAmount)
      .limit(limit);

    const employers = await populate(employerQuery);
    const employersCount = await Employer.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(employers)),
      totalPages: Math.ceil(employersCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
}

export async function getEmployerById(employerId: string) {
  try {
    await connectToDatabase();

    const employer = await populate(Employer.findById(employerId));

    if (!employer) throw new Error("Job not found");

    return JSON.parse(JSON.stringify(employer));
  } catch (error) {
    handleError(error);
  }
}
