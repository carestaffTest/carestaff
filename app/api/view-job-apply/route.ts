import { mailOptions, transporter } from "@/email/contactUsEmail";

import { NextResponse } from "next/server";
import { render } from "@react-email/components";
import ContactFormEmail from "@/email/ContactFormEmail";
import React from "react";
import { UTApi } from "uploadthing/server";

export async function POST(request: any) {
  const data = await request.json();

  const utapi = new UTApi();

  const emailHtml = render(
    React.createElement(ContactFormEmail, {
      name: data?.name as string,
      email: data?.email as string,
      contactNumber: data?.contactNumber as string,
      message: data?.message.split("\n"),
      isCheck: data?.isCheck as boolean,
      page: "Job Application",
    })
  );

  const options = {
    from: `${data?.name} ${mailOptions.from}`,
    to: ["gadiazajoseph18@gmail.com", "jgadz22@gmail.com"],
    subject: `Applying for the position of ${data?.applyFor}`,
    replyTo: data?.email,
    html: emailHtml,
    attachments: [
      {
        filename: `${data.name} Resume.pdf`,
        path: data?.pdfUrl,
      },
    ],
  };

  try {
    await transporter.sendMail(options);

    await utapi.deleteFiles(data?.pdfKey);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: err.status });
  }
}
