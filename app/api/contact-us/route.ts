import { mailOptions, transporter } from "@/email/contactUsEmail";

import { NextResponse } from "next/server";
import { render } from "@react-email/components";
import ContactFormEmail from "@/email/ContactFormEmail";
import React from "react";

export async function POST(request: any) {
  const data = await request.json();

  const emailHtml = render(
    React.createElement(ContactFormEmail, {
      name: data?.name as string,
      email: data?.email as string,
      contactNumber: data?.contactNumber as string,
      message: data?.message.split("\n"),
      isCheck: data?.isCheck as boolean,
      page: "Contact Us Page",
    })
  );

  const options = {
    from: `${data?.name} ${mailOptions.from}`,
    to: mailOptions.to,
    subject: data?.subject,
    replyTo: data?.email,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(options);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: err.status });
  }
}
