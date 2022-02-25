import React from 'react';
import { Helmet } from 'react-helmet';
import Masthead from './Masthead';
import Services from '../Services/ServicesPage';
//import SupportingLogos from './SupportingLogos';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>ASRC Home</title>
          <meta
            name='description'
            content='This is what you want to show as the page content in the Google SERP Listing'
          />
        </Helmet>
        <Masthead />
        <Services />
        {/*<SupportingLogos />*/}
      </div>
    );
  }
}
export default MainPage;
