import React, { useState } from 'react';
import axios from 'axios'; // import axios library to make HTTP requests

function Quotes() {
  const [email, setEmail] = useState('');
  const [fullname, setName] = useState('');
  const [number, setNumber] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);


  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    const formData = {
      name: fullname,
      email,
      phone: number,
      company,
      service,
      description,
      budget,
    };

   
    fetch('http://localhost:3000/api/quote/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // Successful submission
          console.log('Form submitted successfully');
          setSubmitSuccess(true)
        } else {
          
          console.error('Form submission failed');
          // You can show an error message to the user or handle the error in any other way.
        }
      })
      .catch((error) => {
        // Handle any network errors or exceptions during the submission process
        console.error('Error submitting the form', error);
      })
      .finally(() => {
        // Reset the form submission state (if needed)
        setIsSubmitting(false);
      });

    // Set isSubmitting to true to disable the submit button while the form is being submitted
    setIsSubmitting(true);
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative bg-purple-600 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">
          <div className="absolute right-0 top-0 -ml-40 pointer-events-none" aria-hidden="true">
            <svg width="238" height="110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="illustration-04" x1="369.483" y1="-84.633" x2="139.954" y2="-199.798" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fff" stopOpacity=".01" />
                  <stop offset="1" stopColor="#fff" stopOpacity=".24" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-white mb-2">Request a Quote Form</h3>
              <p className="text-purple-200 text-lg">Note: The more details you provide, the better we can customize our proposal to fit your needs</p>
              <br></br>
              <p className="text-purple-200 text-lg">Let's take this journey together. When you succeed, we succeed. Contact us today to unlock the full potential of your business and make technology your greatest asset.<br></br>

                With OG Technologies EU, you're not just buying a service. You're investing in a partnership. A partnership that grows with you, and for you. A partnership that puts your goals at the forefront, a partnership that cares.</p>
            </div>
            <form id="subscribe-form" className="w-full lg:w-1/2" onSubmit={handleFormSubmit}  >
              <div className="flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input
                  id="name"
                  type="name"
                  className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-2 sm:mr-2 text-white placeholder-purple-400"
                  placeholder="Name"
                  aria-label="Name"
                  value={fullname}
                  onChange={(event) => setName(event.target.value)}
                  disabled={isSubmitting}
                />
                <br></br>
                <input
                  id="email-input"
                  type="email"
                  className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-2 sm:mr-2 text-white placeholder-purple-400"
                  placeholder="Your email"
                  aria-label="Your email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  disabled={isSubmitting}
                />
                <input
                  id="phone-input"
                  type="text"
                  className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-5 sm:mb-2 sm:mr-2 text-white placeholder-purple-400"
                  placeholder="Your phone number"
                  aria-label="Your phone number"
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                  disabled={isSubmitting}
                />
                <input
                  id="comapany"
                  type="text"
                  className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-2 sm:mr-2 text-white placeholder-purple-400"
                  placeholder="Your company name"
                  aria-label="Your company name"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  disabled={isSubmitting}
                />
                <input
                  id="service"
                  type="text"
                  className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-2 sm:mr-2 text-white placeholder-purple-400"
                  placeholder="Service(s) Interested In"
                  aria-label="Service(s) Interested In"
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                  disabled={isSubmitting}
                />
                <input
                  id="description"
                  type="text"
                  className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-2 sm:mr-2 text-white placeholder-purple-400"
                  placeholder="Brief Description of Your Project:"
                  aria-label="Brief Description of Your Project:"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  disabled={isSubmitting}
                />
                <input
                  id="budget"
                  type="text"
                  className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-2 sm:mr-2 text-white placeholder-purple-400"
                  placeholder="Estimated Budget"
                  aria-label="Estimated Budget"
                  value={budget}
                  onChange={(event) => setBudget(event.target.value)}
                  disabled={isSubmitting}
                />
                <button
                  id="subscribe-button"
                  type="submit"
                  className="btn text-purple-600 bg-purple-100 mb-2 hover:bg-white shadow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Request a Quote'}
                </button>
              </div>

              {/* Success message */}
               

               {submitSuccess && (
                      <div style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '10px' }}>
                        Success! Your Quote Request has been submitted.
                      </div>
                    )}
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Quotes;
