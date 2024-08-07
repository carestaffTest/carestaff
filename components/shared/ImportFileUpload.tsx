"use client";

import { useState } from "react";
import * as XLSX from "xlsx";
import Papa from "papaparse";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { importBulkData } from "@/lib/actions/jobs.actions";
import { useToast } from "../ui/use-toast";

const ImportFileUpload = ({ userId }: any) => {
  const { toast } = useToast();
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [parsedData, setParsedData] = useState<any[]>([]);

  const headerMapping: { [key: string]: string } = {
    "Job number": "jobNumber",
    "Recruitment code": "recruitmentCode",
    "Job type (for indeed) (text area 5)": "jobType",
    "Project heading": "projectHeading",
    "Point (text area 3)": "point",
    "job description": "jobDescription",
    "Person in charge (comment) (text area 1)": "personInCharge",
    "Special conditions (checkbox 4)": "specialConditions",
    "HP update date (text box 2)": "hpUpdateDate",
    "Employment status": "employmentStatus",
    "Employment Type": "employmentType",
    "Hourly wage/daily wage/monthly wage/annual salary/minimum amount to maximum amount Required (Text Box 1)":
      "salaryRange",
    "Salary details (allowances, etc.) (text area 4)": "salaryDetails",
    "Treatment/benefits (checkbox 5)": "benefitsDetails",
    "Work location (prefecture) (pulldown 1)": "workLocation",
    "Work location (municipality) Hokkaido (pulldown 2)":
      "municipalityHokkaido",
    "Work location (municipality) Aomori (pulldown 3)": "municipalityAomori",
    "Work location (municipality) Iwate (pulldown 4)": "municipalityIwate",
    "Work location (city/town/village) Akita (pulldown 5)": "municipalityAkita",
    "Work location (municipality) Miyagi (pulldown 6)": "municipalityMiyagi",
    "Work location (municipality) Fukushima (pulldown 7)":
      "municipalityFukushima",
    "Work location (municipality) Yamagata (pulldown 8)":
      "municipalityYamagata",
    "Work location (municipality) Tochigi (pulldown 9)": "municipalityTochigi",
    "Work location (municipality) Gunma (pulldown 15)": "municipalityGunma",
    "Work location (municipality) Nagano (pulldown 17)": "municipalityNagano",
    "Transportation access information (text box 10)":
      "transportationAccessInformation",
    "Work location (address, street number, etc.) (Text box 9)": "workAddress",
    "Occupation classification": "occupationClassification",
    Industry: "industry",
    "Early shift: Working hours (text box 3)": "earlyWorkingHours",
    "Day shift: Working hours (text box 4)": "dayWorkingHours",
    "Late shift: working hours (text box 5)": "lateworkingHours",
    "Night shift: working hours (text box 6)": "nightworkingHours",
    "Other 1: Working hours (Text Box 7)": "firstOtherWorkingHours",
    "Other 2: Working hours (Text Box 8)": "secondOtherWorkingHours",
    "Holidays/vacations (checkbox 2)": "holidaysOrVacations",
    "Qualification name (checkbox 3)": "qualificationName",
    "Company Name": "companyName",
    "Nearest station (only one station name, JR station only) (Text box 19)":
      "nearStation",
    "Early shift: Consultation on working conditions (check box 6)":
      "earlyShiftConsultant",
    "Day shift: Working conditions consultation (check box 7)":
      "dayShiftConsultant",
    "Late shift: Consultation on working conditions (check box 8)":
      "lateShiftConsultant",
    "Night shift: Consultation on working conditions (check box 9)":
      "nightShiftConsultant",
    "Other 1: Consultation on working conditions (check box 10)":
      "otherShiftConsultant",
    "Registered Date": "registeredDate",
    "Contract period Input example: 2 months (Text box 20)": "contractPeriod",
    "Whether to renew the contract (pulldown 23)": "contractRenew",
    "[Required] Participating insurance (checkbox 23)": "insurance",
    "[Required] Measures against passive smoking (check box 24)":
      "passiveSmoking",
    "post code": "postCode",
  };

  const handleFileUpload = async (event: any) => {
    const file = event.target.files?.[0];
    if (!file) {
      setError("No file selected");
      return;
    }

    const fileExtension = file.name.split(".").pop()?.toLowerCase();

    if (fileExtension === "xlsx" || fileExtension === "xls") {
      parseExcel(file);
    } else {
      setError("Unsupported file format. Please upload an Excel file.");
    }
  };

  const parseExcel = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      let json = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

      json = json.map((row: any) => {
        const newRow: { [key: string]: any } = {};
        for (const key in row) {
          if (headerMapping[key]) {
            newRow[headerMapping[key]] = row[key];
          } else {
            newRow[key] = row[key];
          }
        }
        return { ...newRow, createdBy: userId };
      });

      setParsedData(json);
      setError(null);
    };
    reader.onerror = () => {
      setError("Error reading Excel file");
    };
    reader.readAsArrayBuffer(file);
  };

  const onSave = async () => {
    if (parsedData && userId) {
      try {
        const bulkimport = await importBulkData({
          parsedData: parsedData,
          userId,
          path: "/adminops/joblist/importfile",
        });
        if (bulkimport) {
          toast({
            variant: "success",
            title: "Successfully",
            description: "Importing the Job details successfully.",
          });
          router.push("/adminops/joblist/importfile");
        }
      } catch (error) {
        console.log("Error saving data:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed importing the Job details.",
        });
        setError("Failed to save data. Please check the file.");
      }
    }
  };

  return (
    <div className="flex-center flex-col gap-5">
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        className="p-2 mb-4 border border-gray-300 rounded"
      />
      {parsedData.length > 0 && <Button onClick={onSave}>Save</Button>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default ImportFileUpload;
