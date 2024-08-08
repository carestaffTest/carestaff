"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Textarea } from "../ui/textarea";

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
      <div className="flex flex-col gap-2">
        <p>Job Description:</p>
        <Textarea
          value={jobDetails?.jobDescription}
          readOnly
          className="p-regular-12 lg:p-regular-16 focus-visible:outline-none focus-visible:ring-* focus-visible:ring-0 focus-visible:shadow-none ring-offset-0 ring-transparent resize-none min-h-[26dvh]"
        />
      </div>
      <div className="flex flex-col gap-2">
        {jobDetails?.specialConditions && (
          <>
            <p>Special Conditions: </p>
            <div className="p-regular-12 lg:p-regular-16">
              <ul>
                {jobDetails?.specialConditions
                  .split("#")
                  .map((hashtag: any, index: any) => {
                    console.log("hashtag", hashtag);
                    return (
                      <li key={index}>
                        {hashtag && (
                          <>
                            <p>
                              • <span>{hashtag}</span>
                            </p>
                          </>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </>
        )}
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
          Employment Type:{" "}
          <span className="p-regular-12 lg:p-regular-16">
            {jobDetails?.employmentType}
          </span>
        </p>
      </div>
      <div className="">
        <p>
          Hourly wage/daily wage/monthly wage/annual salary/minimum amount to
          maximum amount:{" "}
          <span className="p-regular-12 lg:p-regular-16 text-orange-500">
            {jobDetails?.salaryRange}
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p>Salary Details: </p>
        <Textarea
          value={jobDetails?.salaryDetails}
          readOnly
          className="p-regular-12 lg:p-regular-16 focus-visible:outline-none focus-visible:ring-* focus-visible:ring-0 focus-visible:shadow-none ring-offset-0 ring-transparent resize-none min-h-[26dvh]"
        />
      </div>
      <div className="flex flex-col gap-2">
        {jobDetails?.benefitsDetails && (
          <>
            <p>Treatment/benefits:</p>
            <div className="p-regular-12 lg:p-regular-16">
              <ul>
                {jobDetails?.benefitsDetails
                  .split("#")
                  .map((hashtag: any, index: any) => {
                    return (
                      <li key={index}>
                        {hashtag && (
                          <>
                            <p>
                              • <span>{hashtag}</span>
                            </p>
                          </>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col ">
        <p>
          Prefecture:{" "}
          <span className="p-regular-12 lg:p-regular-16 text-orange-500">
            {jobDetails?.workLocation}
          </span>
        </p>
        <p>
          City:{" "}
          <span className="p-regular-12 lg:p-regular-16 text-orange-500">
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
      <div className="flex flex-col gap-2">
        {jobDetails?.qualificationName && (
          <>
            <p>Qualifications:</p>
            <div className="p-regular-12 lg:p-regular-16">
              <ul>
                {jobDetails?.qualificationName
                  .split("#")
                  .map((hashtag: any, index: any) => {
                    return (
                      <li key={index}>
                        {hashtag && (
                          <>
                            <p>
                              • <span>{hashtag}</span>
                            </p>
                          </>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </>
        )}
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
          {jobDetails?.firstOtherWorkingHours && (
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
      <div className="flex flex-col gap-2">
        {jobDetails?.holidaysOrVacations && (
          <>
            <p>Holiday/Vacation:</p>
            <div className="p-regular-12 lg:p-regular-16">
              <ul>
                {jobDetails?.holidaysOrVacations
                  .split("#")
                  .map((hashtag: any, index: any) => {
                    return (
                      <li key={index}>
                        {hashtag && (
                          <>
                            <p>
                              • <span>{hashtag}</span>
                            </p>
                          </>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </>
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
      <div className="flex flex-col gap-2">
        {jobDetails?.insurance && (
          <>
            <p>Participating Insurance:</p>
            <div className="p-regular-12 lg:p-regular-16">
              <ul>
                {jobDetails?.insurance
                  .split("#")
                  .map((hashtag: any, index: any) => {
                    return (
                      <li key={index}>
                        {hashtag && (
                          <>
                            <p>
                              • <span>{hashtag}</span>
                            </p>
                          </>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </>
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
      <div className="flex flex-col gap-2">
        <p className="p-medium-14 lg:p-medium-18">Person Incharge Comment:</p>
        <Textarea
          value={jobDetails?.personInCharge}
          readOnly
          className="p-regular-12 lg:p-regular-16 focus-visible:outline-none focus-visible:ring-* focus-visible:ring-0 focus-visible:shadow-none ring-offset-0 ring-transparent resize-none min-h-[26dvh]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="p-medium-14 lg:p-medium-18">Points: </p>
        <Textarea
          value={jobDetails?.point}
          readOnly
          className="p-regular-12 lg:p-regular-16 focus-visible:outline-none focus-visible:ring-* focus-visible:ring-0 focus-visible:shadow-none ring-offset-0 ring-transparent resize-none min-h-[26dvh]"
        />
      </div>
    </div>
  );
};

export default ViewJobDetailsLeft;
