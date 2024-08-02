"use client";

import { IEmployer } from "@/lib/database/models/employer.model";
import React, { useState } from "react";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { employerDefaultValues } from "@/constant";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { employerInfoSchema } from "@/lib/validator";
import { FileUploader } from "./FileUploader";
import { Textarea } from "../ui/textarea";
import { useUploadThing } from "@/lib/uploadthing";
import {
  createEmployerInfo,
  updateEmployerInfo,
} from "@/lib/actions/employers.action";
import { Loader2 } from "lucide-react";

type EmployerFormProps = {
  userId: string;
  type: "Create" | "Update";
  employerInfo?: IEmployer;
  employerInfoId?: string;
};

const EmployerForm = ({
  userId,
  type,
  employerInfo,
  employerInfoId,
}: EmployerFormProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const { toast } = useToast();
  const router = useRouter();
  const initialValues =
    employerInfo && type === "Update"
      ? {
          ...employerInfo,
        }
      : employerDefaultValues;

  const { startUpload } = useUploadThing("imageUploader");

  const form = useForm<z.infer<typeof employerInfoSchema>>({
    resolver: zodResolver(employerInfoSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(values: z.infer<typeof employerInfoSchema>) {
    let uploadedImageUrl = values.imageUrl;

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) {
        return;
      }

      uploadedImageUrl = uploadedImages[0].url;
    }

    if (type === "Create") {
      try {
        const newMyid = await createEmployerInfo({
          employerInfo: { ...values, imageUrl: uploadedImageUrl },
          userId,
          path: "/adminops/employer",
        });

        if (newMyid) {
          form.reset();
          toast({
            variant: "success",
            title: "Successfully",
            description: "Employer details successfully created.",
          });
          router.push(`/adminops/employer`);
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed saving the Employer details.",
        });
        console.log(error);
      }
    }

    if (type === "Update") {
      if (!employerInfoId) {
        router.back();
        return;
      }

      try {
        const updatedEvent = await updateEmployerInfo({
          userId,
          employerInfo: {
            ...values,
            imageUrl: uploadedImageUrl,
            _id: employerInfoId,
          },
          path: `/adminops/employer`,
        });

        if (updatedEvent) {
          form.reset();
          toast({
            variant: "success",
            title: "Successfully",
            description: "Employer details successfully updated.",
          });
          router.push(`/adminops/employer`);
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed saving the Employer details.",
        });
        console.log(error);
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 px-2 md:px-6 w-[95%] md:w-[90%]"
      >
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Company Name"
                    {...field}
                    className="input-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="companyLocation"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Company Location"
                    {...field}
                    className="input-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="companyEmail"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Email Address"
                    {...field}
                    className="input-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="companyNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Contact Number"
                    {...field}
                    className="input-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="companyOverview"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <Textarea
                    placeholder="Company Overview"
                    {...field}
                    className="textarea rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full"
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              <p>Submitting...</p>
            </>
          ) : (
            `${type} Job Details`
          )}
        </Button>
      </form>
    </Form>
  );
};

export default EmployerForm;
