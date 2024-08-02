import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const adminEmail = process.env.ADMIN_EMAIL;
const pass = process.env.EMAIL_PASSWORD;

const transportOptions: SMTPTransport.Options = {
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "465"),
  secure: true,
  auth: {
    user: adminEmail,
    pass,
  },
};

export const transporter = nodemailer.createTransport(transportOptions);

export const mailOptions = {
  from: adminEmail,
  to: adminEmail,
};
