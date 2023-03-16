import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Terms() {
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
                <h1 className="h1">Terms and Conditions</h1>
              </div>

              {/* Form */}
              <div className="max-w-XL mx-auto">
              <Container disableGutters maxWidth="xl" component="main" sx={{ pt: 1, pb:6}}>
       
        <Typography textAlignLast='right' textAlign="left" variant="h5" align="justify" color="white" component="p">
        


Welcome to our website! These Terms and Conditions outline the rules and regulations for the use of our website and software development services. By accessing our website or using our services, you agree to these terms and conditions. <br />
<br />
  <br />
Definitions <br />
"Company" refers to our software development startup OG Technologies EU, based in Vienna, Austria. <br />
"Website" refers to our website located at https://www.ogtechnologies.co/. <br />
"Services" refers to our software development services in payments, edtech, ecommerce, and blockchain. <br />
"User" refers to anyone who accesses our website or uses our services. <br />
<br />
  <br />
Use of Our Website <br />
You may use our website for personal or commercial purposes, but you may not copy or reproduce any part of it without our written permission. <br />
<br />
  <br />
Use of Our Services <br />
We provide software development services in payments, edtech, ecommerce, and blockchain. You may use our services for personal or commercial purposes, but you may not use them to violate any laws or infringe on the intellectual property rights of others. <br />
<br />
  <br />
Payment <br />
Our fees for our services are described on our website. We will provide you with an invoice for our services, and you agree to pay us in a timely manner. If you fail to pay us, we reserve the right to terminate our services. <br />
<br />
  <br />
Intellectual Property <br />
We own all intellectual property rights to our website and services, including but not limited to all software, code, designs, graphics, and text. You may not use our intellectual property without our written permission. <br />
<br />
  <br />
Confidentiality <br />
We may share confidential information with you in connection with our services. You agree to keep this information confidential and not to disclose it to any third party without our written permission. <br />
<br />
  <br />
Disclaimer of Warranties <br />
Our website and services are provided "as is" without any warranties, express or implied. We do not guarantee that our website or services will be error-free, uninterrupted, or secure. <br />
<br />
  <br />
Limitation of Liability <br />
In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our website or services. <br />
<br />
  <br />
Indemnification <br />
You agree to indemnify and hold us harmless from any claims, damages, or expenses arising out of or in connection with your use of our website or services. <br />
<br />
  <br />
Termination <br />
We may terminate your access to our website or services at any time without prior notice. <br />
<br />
  <br />
Governing Law <br />
These terms and conditions shall be governed by and construed in accordance with the laws of Austria. <br />
<br />
  <br />
Changes to these Terms and Conditions <br />
We reserve the right to update or modify these terms and conditions at any time without prior notice. Your continued use of our website or services after any such changes constitutes your acceptance of the new terms and conditions. <br />
<br />
  <br />
If you have any questions about these terms and conditions, please contact us at hi@ogtechnologies.co. <br />

        
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

export default Terms;