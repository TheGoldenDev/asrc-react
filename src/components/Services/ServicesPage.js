import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../MainPage/Footer';
import './ServicePage.css';

export default class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>ASRC | Services</title>
          <meta
            name='description'
            content='BGSRA offers and way range of services that are custom tailored to fit your needs'
          />
        </Helmet>
        <section className='services-page-section' id='services'>
          <div className='container'>
            <div className='text-center'>
              <h2 className='section-heading text-uppercase'>Services</h2>
              <h3 className='section-subheading text-muted'>
                We have the experience, the drive, the knowledge, and the
                ability to help your organization with any aspect of research–
                or the entire research process. We specialize in program
                evaluation, survey writing, and data analysis– we can even
                assist your organization in writing grants to fund your project
                research.
              </h3>
            </div>
            <div className='row text-center'>
              <div className='col-md-4'>
                <span className='fa-stack fa-2x'>
                  <i className='fa fa-circle fa-stack-2x icon-text-primary'></i>
                  <i className='fas fa-folder fa-stack-1x fa-inverse'></i>
                </span>
                <h4 className='my-3'>Reports</h4>
                <p className='text-muted'>
                  Every client will receive a report that makes the data easy to
                  understand for both people who do not know how to read
                  statistical analyses, and people who do data analysis every
                  day.
                </p>
              </div>
              <div className='col-md-4'>
                <span className='fa-stack fa-2x'>
                  <i className='fa fa-circle fa-stack-2x icon-text-primary'></i>
                  <i className='fas fa-users fa-stack-1x fa-inverse'></i>
                </span>
                <h4 className='my-3'>Surveys</h4>
                <p className='text-muted'>
                  We know the best way to contact the people you want to hear
                  from and how to ask questions in the proper format that makes
                  your respondents want to answer!
                </p>
              </div>
              <div className='col-md-4'>
                <span className='fa-stack fa-2x'>
                  <i className='fa fa-circle fa-stack-2x icon-text-primary'></i>
                  <i className='fas fa-chart-pie fa-stack-1x fa-inverse'></i>
                </span>
                <h4 className='my-3'>Data Analysis</h4>
                <p className='text-muted'>
                  Need help understanding your data? We will analyze your data
                  and give you the highest quality report that is polished and
                  ready for distribution!
                </p>
              </div>
              <div className='col-md-6'>
                <span className='fa-stack fa-2x'>
                  <i className='fa fa-circle fa-stack-2x icon-text-primary'></i>
                  <i className='fas fa-search fa-stack-1x fa-inverse'></i>
                </span>
                <h4 className='my-3'>Program Evaluation</h4>
                <p className='text-muted'>
                  We use techniques that help an organization know if they are
                  actually reaching their goals by involving all levels of the
                  organization in experiments to measure organizational goals.
                </p>
              </div>
              <div className='col-md-6'>
                <span className='fa-stack fa-2x'>
                  <i className='fa fa-circle fa-stack-2x icon-text-primary'></i>
                  <i className='fas fa-dollar-sign fa-stack-1x fa-inverse'></i>
                </span>
                <h4 className='my-3'>Grant Application Assistance</h4>
                <p className='text-muted'>
                  We can help write your grant applications to give you the best
                  shot at receiving your grant. We guarantee our work– if you
                  don’t receive the grant, you don’t pay!
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
