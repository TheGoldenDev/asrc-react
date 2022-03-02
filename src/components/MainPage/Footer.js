import React from 'react';

export default class ContactPage extends React.Component {
  render() {
    return (
      <footer className='footer py-4'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-4 text-lg-left'>Copyright © ASRC 2022</div>
            <div className='col-lg-4 my-3 my-lg-0'>
              <a className='btn btn-dark btn-social mx-2' href='#!'>
                <i className='fa fa-twitter'></i>
              </a>
              <a className='btn btn-dark btn-social mx-2' href='#!'>
                <i className='fa fa-facebook-f'></i>
              </a>
              <a className='btn btn-dark btn-social mx-2' href='#!'>
                <i className='fa fa-linkedin-in'></i>
              </a>
            </div>
            <div className='col-lg-4 text-lg-right'>
              <a className='mr-3' href='#!'>
                Privacy Policy
              </a>
              <a href='#!'>Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
