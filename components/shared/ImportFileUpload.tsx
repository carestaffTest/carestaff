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
    "Project heading": "projectHeading",
    "Company number": "companyNumber",
    "Company Name": "companyName",
    "Special conditions (checkbox 4)": "specialConditions",
    "Employment status": "employmentStatus",
    Industry: "industry",
    "Occupation classification": "occupationClassification",
    "Job type (for indeed) (text area 5)": "jobType",
    "★Hourly wage/daily wage/monthly wage/annual salary/minimum amount to maximum amount Required (Text Box 1)":
      "salaryRange",
    "Salary details (allowances, etc.) (text area 4)": "salaryDetails",
    "Treatment/benefits (checkbox 5)": "benefitsDetails",
    "Point (text area 3)": "point",
    "job description": "jobDescription",
    "Qualification name (checkbox 3)": "qualificationName",
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
    "Work location (municipality) Nagano (pulldown 17)": "municipalityNagano",
    "Transportation access information (text box 10)":
      "transportationAccessInformation",
    "Working days": "workingDays",
    "▼Early shift: Working hours (text box 3)": "earlyWorkingHours",
    "▼Day shift: Working hours (text box 4)": "dayWorkingHours",
    "▼Late shift: working hours (text box 5)": "lateworkingHours",
    "▼Night shift: working hours (text box 6)": "nightworkingHours",
    "▼Other 1: Working hours (text box 7)": "firstOtherWorkingHours",
    "▼Other 2: Working hours (Text Box 8)": "secondOtherWorkingHours",
    "Holidays/vacations (checkbox 2)": "holidaysOrVacations",
    "Person in charge (comment) (text area 1)": "personInCharge",
    "HP update date (text box 2)": "hpUpdateDate",
    "WEB listing": "webListing",
    "★Job registration date (=order slip registration date) (Text box 17)":
      "jobRegistrationDate",
    "Registered Date": "registeredDate",
    "Update date and time": "updateDateAndTime",
    "in charge": "inCharge",
    "Recruitment case manager (for internal processing) (pulldown 10)":
      "recruitmentCaseManager",
    "For head office management: Directly posted on indeed (pulldown 14)":
      "directlyPostedOnIndeed",
    "For head office management: Recruitment box direct posting (pulldown 16)":
      "recruitmentBoxDirectPosting",
    "For head office management: TalentClip public/private (pulldown 12)":
      "talentClipPublicOrPrivate",
    "For head office management: Nurse HP public/private (pulldown 11)":
      "nurseHpPublicOrPrivate",
    status: "status",
    memo: "memo",
    "Memo 2 (WEB media publication history) (Text area 7)": "secondMemo",
    "Web media disclosure/non-disclosure (checkbox 25)":
      "webMediaDisclosureOrNonDisclosure",
  };

  const handleFileUpload = async (event: any) => {
    const file = event.target.files?.[0];
    if (!file) {
      setError("No file selected");
      return;
    }

    const fileExtension = file.name.split(".").pop()?.toLowerCase();

    // if (fileExtension === "csv") {
    //   parseCSV(file);
    // } else 
    if (fileExtension === "xlsx" || fileExtension === "xls") {
      parseExcel(file);
    } else {
      // setError("Unsupported file format. Please upload a CSV or Excel file.");
      setError("Unsupported file format. Please upload an Excel file.");
    }
  };

  // const parseCSV = (file: File) => {
  //   Papa.parse(file, {
  //     header: true,
  //     skipEmptyLines: false,
  //     dynamicTyping: true,
  //     complete: (result) => {
  //       const data = result.data.map((row: any) => {
  //         const newRow: { [key: string]: any } = {};
  //         for (const key in row) {
  //           if (headerMapping[key]) {
  //             newRow[headerMapping[key]] = row[key];
  //           } else {
  //             newRow[key] = row[key];
  //           }
  //         }

  //         return { ...newRow, createdBy: userId };
  //       });
  //       setParsedData(data);
  //       setError(null);
  //     },
  //     error: (error) => {
  //       setError(`Error parsing CSV file: ${error.message}`);
  //     },
  //   });
  // };

  const parseExcel = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      let json = XLSX.utils.sheet_to_json(worksheet, { defval: null });

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
        // accept=".csv, .xlsx, .xls"
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
