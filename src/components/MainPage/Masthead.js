import React from 'react';
import { Helmet } from 'react-helmet';

export default () => {
  return (
    <div>
      <Helmet>
        <title>BGSRA</title>
        <meta
          name='description'
          content='This is what you want to show as the page content in the Google SERP Listing'
        />
      </Helmet>
      <header className='masthead'>
        <div className='container'>
          <div className='masthead-heading text-uppercase'>
            Applied Social Research Contractors
          </div>
          <div className='masthead-subheading'>
            We collect data for you, or run your existing data through our
            cutting-edge analysis techniques, or BOTH!
          </div>
          <div className='wrapper'>
            <a
              className='fancy-button pop-onhover bg-gradient1'
              href='/contact'>
              <span className='btn btn-xl btn-primary  text-uppercase'>
                REQUEST A QUOTE!
              </span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};
