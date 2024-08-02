"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useEffect } from "react";
import { Textarea } from "../ui/textarea";
import { contactUsSenderDefaultValues } from "@/constant";
import { contactUsSenderSchema } from "@/lib/validator";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactUsEmail = () => {
  const { toast } = useToast();
  const initialValues = contactUsSenderDefaultValues;

  const animation1 = useAnimation();

  const { ref: ref, inView: inView1 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView1) {
      animation1.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.3,
          delay: 0.5,
        },
      });
    } else {
      animation1.start({
        opacity: 0,
        scale: 0.3,
      });
    }
  }, [inView1, animation1]);

  const form = useForm<z.infer<typeof contactUsSenderSchema>>({
    resolver: zodResolver(contactUsSenderSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(values: z.infer<typeof contactUsSenderSchema>) {
    try {
      const response = await fetch("api/contact-us", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      const { success, error } = await response.json();

      if (success) {
        form.reset();
        toast({
          variant: "success",
          title: "Successfully",
          description: "Email Successfully send.",
        });
      } else if (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed sending Email.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed sending Email.",
      });
      console.log(error);
    }
  }

  return (
    <motion.div
      ref={ref}
      animate={animation1}
      className="w-full flex-center flex-col"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-5 md:gap-10 px-2 md:px-6 "
        >
          <div className="w-full flex">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full flex flex-col gap-2">
                  <FormLabel>
                    <span className="text-red-500">*</span>Name:
                  </FormLabel>
                  <FormControl className="w-full flex">
                    <Input
                      placeholder="Name"
                      {...field}
                      className="w-full flex"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full flex flex-col gap-2">
                  <FormLabel>
                    <span className="text-red-500">*</span>Email:
                  </FormLabel>
                  <FormControl className="w-full flex">
                    <Input
                      placeholder="Email"
                      {...field}
                      className="w-full flex"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex">
            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem className="w-full flex flex-col gap-2">
                  <FormLabel>
                    <span className="text-red-500">*</span>Contact Number:
                  </FormLabel>
                  <FormControl className="w-full flex">
                    <Input
                      placeholder="Contact Number"
                      {...field}
                      className="w-full flex"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="w-full flex flex-col gap-2">
                  <FormLabel>
                    <span className="text-red-500">*</span>Subject:
                  </FormLabel>
                  <FormControl className="w-full flex">
                    <Input
                      placeholder="Name"
                      {...field}
                      className="w-full flex"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full flex flex-col gap-2">
                  <FormLabel>
                    <span className="text-red-500">*</span>Your Message:
                  </FormLabel>
                  <FormControl className="w-full flex min-h-72">
                    <Textarea
                      placeholder="Your Message"
                      {...field}
                      className="textarea rounded-md min-h-72"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex-center items-center gap-2">
            <FormField
              control={form.control}
              name="isCheck"
              render={({ field }) => (
                <FormItem className="flex gap-2">
                  <FormControl className="w-full flex">
                    <Checkbox
                      onCheckedChange={field.onChange}
                      checked={field.value}
                      id="isFree"
                      className="mr-2 h-5 w-5 border-2 border-primary-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="">
              <p>
                I agree to the{" "}
                <Link href="/siteterms" className="text-[#e27107]">
                  Site Terms of Use
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="flex-center w-full ">
            <Button
              type="submit"
              disabled={!form.watch("isCheck") || form.formState.isSubmitting}
              className="flex-center bg-[#e27107] hover:bg-orange-500 py-2 px-20"
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin cursor-not-allowed" />
                  <p>Submitting...</p>
                </>
              ) : (
                <p className="p-regular-12 md:p-regular-16">Submit</p>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </motion.div>
  );
};

export default ContactUsEmail;
