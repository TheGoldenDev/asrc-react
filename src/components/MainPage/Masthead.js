import React from 'react';

export default class ContactPage extends React.Component {
  render() {
    return (
      <div>
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
  }
}
