import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FeatImage01 from '../images/1.png';
import FeatImage02 from '../images/2.png';
import FeatImage03 from '../images/3.png';
import ai from '../images/ai.jpeg';
import bloch from '../images/bloch.png';
import blockchain from '../images/blockchain.png';
import ecom from '../images/ecomm.png';
import ecommerce from '../images/ecommerce.png';
import elearn from '../images/eleran.png';
import travel from '../images/travel.png';
import bb from '../images/bb.png';
import aii from '../images/ai.png';




function Products() {
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

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-200">
            
            <h1 className="h2 mb-4">Our Products</h1>
            
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={travel} width="540" height="405" alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  
                  <h3 className="h3 mb-3">Customized travel booking platform development </h3>
                  <p className="text-xl text-gray-400 mb-4">Our team of experts can help your business build a customized travel booking platform that incorporates AI and blockchain technologies. We work closely with you to understand your business requirements and design a platform that provides personalized travel recommendations and a seamless booking experience, while ensuring secure and transparent transactions.</p>
                  
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={ecom} width="540" height="405" alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                 
                  <h3 className="h3 mb-3">E-commerce marketplace development </h3>
                  <p className="text-xl text-gray-400 mb-4"> We can help your business build a decentralized and secure e-commerce marketplace that utilizes blockchain technology. Our team of developers and designers can work with you to create a user-friendly platform that incorporates AI algorithms to provide personalized product recommendations and real-time pricing optimization.</p>
                  
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={bb} width="540" height="405" alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                 
                  <h3 className="h3 mb-3">Blockchain consulting services </h3>
                  <p className="text-xl text-gray-400 mb-4"> Our team of blockchain experts provides consulting services to companies looking to integrate blockchain technology into their existing systems. We can help you develop a blockchain strategy, design and build smart contracts, and develop blockchain-based applications that streamline your business operations. </p>
                  
                </div>
              </div>
            </div>
 
  {/* 2nd item */}
  <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={aii} width="540" height="405" alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                 
                  <h3 className="h3 mb-3">AI-powered chatbot development  </h3>
                  <p className="text-xl text-gray-400 mb-4">We can help your business build an AI-powered chatbot that provides 24/7 customer support to your customers. Our team of developers and data scientists can work with you to design a chatbot that uses natural language processing and machine learning algorithms to provide personalized assistance to your customers.</p>
                  
                </div>
              </div>
            </div>


              {/* 3rd item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={bloch} width="540" height="405" alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                 
                  <h3 className="h3 mb-3">Blockchain-based loyalty program development  </h3>
                  <p className="text-xl text-gray-400 mb-4"> We can help your business build a blockchain-based loyalty program that rewards and retains your customers. Our team of developers can work with you to design and develop a loyalty program that uses blockchain technology to ensure transparency and security in the reward distribution process. </p>
                  
                </div>
              </div>
            </div>



              {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={elearn} width="540" height="405" alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                 
                  <h3 className="h3 mb-3">E-learning platform development </h3>
                  <p className="text-xl text-gray-400 mb-4"> We can help your business build a custom e-learning platform that incorporates the latest technologies such as AI and blockchain. Our team of instructional designers, developers, and data scientists can work with you to design and develop an e-learning platform that provides personalized learning experiences to your users, while ensuring data security and integrity.</p>
                  
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

      </main>

      <Footer />


    </div>
  );
}

export default Products;