import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Privacy Policy</h1>
              </div>

              {/* Form */}
              <div className="max-w-XL mx-auto">
              <Container disableGutters maxWidth="xl" component="main" sx={{ pt: 1, pb:6}}>
       
              <Typography textAlignLast='right' textAlign="left" variant="h5" align="justify" color="white" component="p">
       

We at OG Technologies EU are committed to protecting your privacy. This Privacy Policy describes how we collect, use, and share your personal information in connection with our software development services. By accessing our website or using our services, you consent to the collection and use of your personal information as described in this policy.<br />
<br />
  <br />
Types of Information We Collect<br />
We may collect the following types of information from you:<br />
<br />
  <br />
Personal information: We may collect your name, email address, phone number, and other contact information when you register for an account on our website or request information about our services.<br />
<br />
  <br />
Payment information: If you make a payment for our services, we may collect your payment card information.<br />
<br />
  <br />
Technical information: We may collect information about your computer or mobile device, including your IP address, browser type, and operating system.<br />
<br />
  <br />
Usage information: We may collect information about your use of our website or services, such as the pages you visit, the features you use, and the time you spend on our website.<br />
<br />
  <br />
How We Use Your Information<br />
We may use your personal information for the following purposes:<br />
<br />
  <br />
To provide our software development services to you;<br />

To process payments for our services;<br />

To communicate with you about our services;<br />

To improve our website and services;<br />

To analyze and monitor usage of our website and services;<br />

To comply with legal obligations.<br />
<br />
  <br />
How We Share Your Information<br />
We may share your personal information with third parties in the following circumstances:<br />
<br />
  <br />
With service providers who help us operate our business, such as payment processors and cloud hosting providers;<br />
<br />
  <br />
With our partners who provide complementary services to our own;<br />
<br />
  <br />
With law enforcement authorities or other government officials to comply with legal obligations or to protect our legal rights;<br />
<br />
  <br />
With a successor entity in the event of a merger, acquisition, or sale of all or part of our business.<br />
<br />
  <br />
We will not sell or rent your personal information to third parties for their marketing purposes without your consent.<br />
<br />
  <br />
Your Choices<br />
You may opt-out of receiving marketing emails from us by clicking the unsubscribe link in the email. Please note that you may still receive administrative emails from us, such as notifications about your account.<br />
<br />
  <br />
Security<br />
We take reasonable measures to protect your personal information from unauthorized access or disclosure. However, no security measure is completely effective, and we cannot guarantee the security of your personal information.<br />
<br />
  <br />
Children's Privacy<br />
Our website and services are not directed to children under the age of 13. We do not knowingly collect personal information from children under the age of 13.<br />
<br />
  <br />
International Transfer<br />
Your personal information may be transferred to and processed in countries other than the country where you reside. By using our website or services, you consent to the transfer of your personal information to countries outside your country of residence.<br />
<br />
  <br />
Changes to this Privacy Policy<br />
We reserve the right to update or modify this Privacy Policy at any time without prior notice. Your continued use of our website or services after any such changes constitutes your acceptance of the new Privacy Policy.<br />
<br />
  <br />
Contact Us<br />
If you have any questions about this Privacy Policy, please contact us at hi@ogtechnologies.co.<br />

        </Typography>
      </Container>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />


    </div>
  );
}

export default PrivacyPolicy;