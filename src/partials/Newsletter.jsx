import React, { useState } from 'react';
import axios from 'axios'; // import axios library to make HTTP requests

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await axios.post('http://localhost:3000/api/subscribe', { email });
      console.log(response.data);
      setSubmitSuccess(true);
    } catch (error) {
      console.error(error);
      setSubmitError('An error occurred, please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
              <h3 className="h3 text-white mb-2">Stay in the loop</h3>
              <p className="text-purple-200 text-lg">Join our newsletter to get top news before anyone else.</p>
            </div>
            <form id="subscribe-form" className="w-full lg:w-1/2" onSubmit={handleFormSubmit}  >
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input
                  id="email-input"
                  type="email"
                  className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-purple-400"
                  placeholder="Your best email…"
                  aria-label="Your best email…"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  disabled={isSubmitting}
                />
                <button
                  id="subscribe-button"
                  type="submit"
                  className="btn text-purple-600 bg-purple-100 hover:bg-white shadow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Subscribe'}
                </button>
              </div>

              {/* Success message */}
              {/* <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;
