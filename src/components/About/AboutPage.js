import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../MainPage/Footer';
import jonathan from '../../assets/img/j-profile2.jpg';
import rebecca from '../../assets/img/b-profile.jpg';

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>ASRC About Us</title>
          <meta
            name='description'
            content='This is what you want to show as the page content in the Google SERP Listing'
          />
        </Helmet>
        <section className='page-section bg-light' id='team'>
          <h1 className='text-center section-heading text-uppercase'>
            Who We Are And What We Do
          </h1>
          <div className='container'>
            <div className='background'>
              <div className='row py-5 px-4 my-4'>
                <div className='col-lg-6'>
                  <div className='text-center'>
                    <h2 className='section-heading text-uppercase'>
                      Our Mission
                    </h2>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <p className='text-center'>
                    Our mission is to help non-profits, government agencies,
                    religious organizations, local businesses, and other
                    organizations thrive by providing information through
                    applied research.
                  </p>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <h2 className='section-heading text-uppercase'>
                Our Amazing Team
              </h2>
              <h3 className='section-subheading text-muted text-center'>
                Jonathon and Becca are extremely motivated to help your
                organization succeed. Between them they have 5 years of
                experience in applied research.
              </h3>
            </div>
            <div className='row py-5 px-4'>
              <div className='col-lg-6'>
                <div className='team-member'>
                  <img
                    className='mx-auto rounded-circle'
                    src={jonathan}
                    alt=''
                  />
                  <h4>Jonathan</h4>
                  <p className='text-muted'>President</p>
                  <p className='text-muted'>
                    Completed three years of experience at the Center for
                    Applied Research in the Apostolate and concentrated in
                    quantitative methodology as a Ph.D. student.{' '}
                  </p>
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
              </div>
              <div className='col-lg-6'>
                <div className='team-member'>
                  <img
                    className='mx-auto rounded-circle'
                    src={rebecca}
                    alt=''
                  />
                  <h4>Rebecca</h4>
                  <p className='text-muted'>Vice President</p>
                  <p className='text-muted'>
                    Served 2 years at the Department of Institutional
                    Effectiveness at Berea College. Completed a master's degree
                    and is set to complete a Ph.D. in 2023 in quantitative
                    methodology.
                  </p>
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
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
