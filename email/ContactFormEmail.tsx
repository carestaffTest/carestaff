import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  name: string;
  email: string;
  contactNumber: string;
  message: [];
  isCheck: boolean;
  page: string;
};

const ContactFormEmail = ({
  name,
  email,
  contactNumber,
  message,
  isCheck,
  page,
}: ContactFormEmailProps) => {
  return (
    <Html lang="en">
      <Head />
      <Preview>New message from carestaff website</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Heading className="text-orange-600">
                You received a meesage from Carestaff website {page}.
              </Heading>
              <Hr />
              <Section className="p-regular-14">
                {message.map((mess: any, index) => {
                  return (
                    <>
                      {mess ? (
                        <Text key={index}>{mess}</Text>
                      ) : (
                        <br key={index}></br>
                      )}
                    </>
                  );
                })}
              </Section>
              <Hr />
              <Text>The sender's name is: {name}</Text>
              <Text>The sender's email is: {email}</Text>
              <Text>The sender's contact number is: {contactNumber}</Text>
              {isCheck ? (
                <Text>The sender's agree to the Site Terms of Use.</Text>
              ) : (
                <Text>The sender's didn't agree to the Site Terms of Use.</Text>
              )}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
