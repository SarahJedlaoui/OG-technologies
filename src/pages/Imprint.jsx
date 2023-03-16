import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Imprint() {
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
                <h1 className="h1">Imprint</h1>
              </div>

              {/* Form */}
              <div className="max-w-XL mx-auto">
              <Container disableGutters maxWidth="xl" component="main" sx={{ pt: 1, pb:6}}>
       
              <Typography textAlignLast='right' textAlign="left" variant="h5" align="justify" color="white" component="p">
      


OG Technologies EU<br />
Liechtensteinstraße 111-115, <br />
1090 Vienna, Austria<br />
<br />
  <br />
Legal form<br />

Einzelunternehmen<br />
<br />
  <br />

Registered office<br />
1090 Vienna<br />
<br />
  <br />
Trade name<br />
Services in automatic data processing and information technology<br />
<br />
  <br />
Managing director<br />
Olvis E. Gil Rios<br />
<br />
  <br />
Chamber<br />
Austrian Chamber of Commerce – wko.at<br />
<br />
  <br />
Member of the WKO<br />
Management consulting, accounting, and information technology, Vienna specialist group<br />
<br />
  <br />
Privacy Notice<br />
For privacy information, see our privacy policy at ogtechnologies.co/privacy<br />


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

export default Imprint;