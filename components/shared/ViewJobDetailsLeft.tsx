"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import { ArrowLeft } from "lucide-react";

const ViewJobDetailsLeft = ({ jobDetails, employer }: any) => {
  const router = useRouter();

  const backButton = (e: any) => {
    e.preventDefault();
    router.back();
  };
  return (
    <div className="flex flex-col w-full gap-2 md:gap-5 p-medium-14 lg:p-medium-18">
      <button type="button" onClick={backButton}>
        <span className="text-[#e5811e]">
          <ArrowLeft />
        </span>
      </button>
      <div className="">
        <p>Job Details:</p>
      </div>

      <div className="">
        <p>
          Job Title:{" "}
          <span className="text-orange-600">{jobDetails?.jobType}</span>
        </p>
      </div>
      <div className="">
        <p>
          Job Number:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.jobNumber}
          </span>
        </p>
      </div>
      <div className="">
        <p>
          Recruitment Code:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.recruitmentCode}
          </span>
        </p>
      </div>
      <div className="">
        <p>
          Project Heading:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.projectHeading}
          </span>
        </p>
      </div>
      <div className="">
        <p>
          Job Description:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.jobDescription}
          </span>
        </p>
      </div>
      <div className="">
        <p>
          Special Conditions:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.specialConditions}
          </span>
        </p>
      </div>
      <div className="">
        <p>
          Employment Status:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.employmentStatus}
          </span>
        </p>
      </div>
      <div className="">
        <p>
          Hourly wage/daily wage/monthly wage/annual salary/minimum amount to
          maximum amount:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.salaryRange}
          </span>
        </p>
      </div>
      <div className="">
        <p>
          Salary Details:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.salaryDetails}
          </span>
        </p>
      </div>
      <div className="">
        <p>
          Treatment/benefits:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.benefitsDetails}
          </span>
        </p>
      </div>
      <div className="flex flex-col">
        <p>
          Prefecture:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.workLocation}
          </span>
        </p>
        <p>
          City:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.municipalityHokkaido &&
              jobDetails?.municipalityHokkaido}
            {jobDetails?.municipalityAomori && jobDetails?.municipalityAomori}
            {jobDetails?.municipalityIwate && jobDetails?.municipalityIwate}
            {jobDetails?.municipalityAkita && jobDetails?.municipalityAkita}
            {jobDetails?.municipalityMiyagi && jobDetails?.municipalityMiyagi}
            {jobDetails?.municipalityFukushima &&
              jobDetails?.municipalityFukushima}
            {jobDetails?.municipalityYamagata &&
              jobDetails?.municipalityYamagata}
            {jobDetails?.municipalityTochigi && jobDetails?.municipalityTochigi}
            {jobDetails?.municipalityNagano && jobDetails?.municipalityNagano}
          </span>
        </p>
        <p>
          Address/Location:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.workAddress}
          </span>
        </p>
      </div>
      <div className="">
        <p>
          Transportation Access Information:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.transportationAccessInformation}
          </span>
        </p>
      </div>
      <div className="">
        <p>
          Nearest Station:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.nearStation}
          </span>
        </p>
      </div>
      <div className="">
        <p>
          Occupation Classification:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.occupationClassification}
          </span>
        </p>
      </div>
      <div className="">
        <p>
          Industry:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.industry}
          </span>
        </p>
      </div>
      <div className="">
        <p>
          Qualifications:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.qualificationName}
          </span>
        </p>
      </div>
      <div className="">
        <p>Shifts: </p>
        <ul className="p-regular-12 lg:p-regular-16">
          {jobDetails?.earlyWorkingHours && (
            <li>
              <p className="p-regular-12 lg:p-regular-16">
                Early Shift: <span>{jobDetails?.earlyWorkingHours}</span>
              </p>
            </li>
          )}
          {jobDetails?.dayWorkingHours && (
            <li>
              <p className="p-regular-12 lg:p-regular-16">
                Day Shift: <span>{jobDetails?.dayWorkingHours}</span>
              </p>
            </li>
          )}
          {jobDetails?.lateworkingHours && (
            <li>
              <p className="p-regular-12 lg:p-regular-16">
                Late Shift: <span>{jobDetails?.lateworkingHours}</span>
              </p>
            </li>
          )}
          {jobDetails?.nightworkingHours && (
            <li>
              <p className="p-regular-12 lg:p-regular-16">
                Night Shift: <span>{jobDetails?.nightworkingHours}</span>
              </p>
            </li>
          )}
          {jobDetails?.firstOtherkingHours && (
            <li>
              <p className="p-regular-12 lg:p-regular-16">
                Other Shift: <span>{jobDetails?.firstOtherWorkingHours}</span>
              </p>
            </li>
          )}
          {jobDetails?.secondOtherWorkingHours && (
            <li>
              <p className="p-regular-12 lg:p-regular-16">
                Other Shift: <span>{jobDetails?.secondOtherWorkingHours}</span>
              </p>
            </li>
          )}
        </ul>
      </div>
      <div className="">
        {jobDetails?.holidaysOrVacations && (
          <p className="p-medium-14 lg:p-medium-18">
            Holiday/Vacation:
            <span className="p-regular-12 lg:p-regular-16">
              {jobDetails?.holidaysOrVacations}
            </span>
          </p>
        )}
      </div>
      <div className="">
        {jobDetails?.contractPeriod && (
          <p className="p-medium-14 lg:p-medium-18">
            Contract Period:{" "}
            <span className="p-regular-12 lg:p-regular-16">
              {jobDetails?.contractPeriod}
            </span>
          </p>
        )}
      </div>
      <div className="">
        {jobDetails?.contractRenew && (
          <p className="p-medium-14 lg:p-medium-18">
            Whether to Renew the Contract:{" "}
            <span className="p-regular-12 lg:p-regular-16">
              {jobDetails?.contractRenew}
            </span>
          </p>
        )}
      </div>
      <div className="">
        {jobDetails?.insurance && (
          <p className="p-medium-14 lg:p-medium-18">
            Participating Insurance:{" "}
            <span className="p-regular-12 lg:p-regular-16">
              {jobDetails?.insurance}
            </span>
          </p>
        )}
      </div>
      <div className="">
        {jobDetails?.passiveSmoking && (
          <p className="p-medium-14 lg:p-medium-18">
            Measures Against Passive Smoking:{" "}
            <span className="p-regular-12 lg:p-regular-16">
              {jobDetails?.passiveSmoking}
            </span>
          </p>
        )}
      </div>
      <div className="">
        {jobDetails?.hpUpdateDate && (
          <p className="p-medium-14 lg:p-medium-18">
            HP Update Date:{" "}
            <span className="p-regular-12 lg:p-regular-16">
              {jobDetails?.hpUpdateDate}
            </span>
          </p>
        )}
      </div>
      <div className="">
        <p>
          Company Name:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.companyName}
          </span>
        </p>
      </div>
      <div className="">
        <p className="p-medium-14 lg:p-medium-18">
          Person Incharge Comment:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.personInCharge}
          </span>
        </p>
      </div>
      <div className="">
        <p className="p-medium-14 lg:p-medium-18">
          Points:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.point}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ViewJobDetailsLeft;
