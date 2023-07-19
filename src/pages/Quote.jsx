import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBFile
}
from 'mdb-react-ui-kit';
import Quotes from '../partials/Quotes';
function Quote() {
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
                <h1 className="h1"> Request a Quote </h1>
              </div>

              
              <div className="max-w-XL mx-auto">
                <Container disableGutters maxWidth="xl" component="main" sx={{ pt: 1, pb: 6 }}>

                  <Typography textAlignLast='right' textAlign="left" variant="h5" align="justify" color="white" component="p">


                    Welcome to OG Technologies EU, where we create IT solutions that enhance business processes and help you adapt to the ever-evolving technological landscape. Our industry-leading IT consulting services are custom-tailored to help you achieve your business goals efficiently and cost-effectively.<br />

                    We believe that behind every great solution, there's not only cutting-edge technology but also people's passion, creativity, and dedication. We deeply care about your success and aim to cultivate strong relationships built on trust and mutual growth.<br />
                    <br />
                    <br />
                    <div >
                      <h3 className="h3"> Our Services: </h3>
                    </div>
                    <br />
                    1. IT Strategy Consulting:<br />
                    Our experienced consultants will guide you to formulate a robust and future-proof IT strategy that aligns with your business objectives.<br />
                    <br />
                    <br />
                    2. Digital Transformation:<br />
                    We will help you optimize your operations, enhance customer experience, and stay competitive by embracing digital technologies.<br />
                    <br />
                    <br />
                    3. IT Security Consulting:<br />
                    Our experts will assess your current IT infrastructure, identify vulnerabilities, and provide solutions to secure your business data.<br />
                    <br />
                    <br />
                    4. Cloud Consulting:<br />
                    From choosing the right cloud platform to managing your cloud services, we will assist you every step of the way.<br />
                    <br />
                    <br />
                    5. Software Development Consulting:<br />
                    Our team can help you design, develop, and implement custom software solutions that cater to your specific business needs.<br />
                    <br />
                    <br />
                   
                    <div >
                      <h3 className="h3"> Pricing: </h3>
                    </div>
                    <br />
                    To get a detailed quote for your project, please fill out the form below. Remember, investing in reliable and high-quality IT solutions is not an expenditure, but a step towards securing your future. Our team is eager to learn about your needs, guide you through the process, and make your vision come true.<br />
                  </Typography>
                  <br />
                  <br />
          <Quotes></Quotes>
          <br />
          <br />
          <Typography textAlignLast='right' textAlign="left" variant="h5" align="justify" color="white" component="p" >
          For any further information, feel free to email us at hi@ogtechnologies.co <br></br>
          Let's shape the future of your business, together !
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

export default Quote;