import React from "react";
import LogoOne from "../../assets/img/envato.jpg";
import LogoTwo from "../../assets/img/designmodo.jpg";
import LogoThree from "../../assets/img/themeforest.jpg";
import LogoFour from "../../assets/img/creative-market.jpg";

export default class SupportingLogos extends React.Component {
  render() {
    return (
      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-sm-6 my-3'>
              <a href='#!'>
                <img
                  className='img-fluid d-block mx-auto'
                  src={LogoOne}
                  alt=''
                />
              </a>
            </div>
            <div className='col-md-3 col-sm-6 my-3'>
              <a href='#!'>
                <img
                  className='img-fluid d-block mx-auto'
                  src={LogoTwo}
                  alt=''
                />
              </a>
            </div>
            <div className='col-md-3 col-sm-6 my-3'>
              <a href='#!'>
                <img
                  className='img-fluid d-block mx-auto'
                  src={LogoThree}
                  alt=''
                />
              </a>
            </div>
            <div className='col-md-3 col-sm-6 my-3'>
              <a href='#!'>
                <img
                  className='img-fluid d-block mx-auto'
                  src={LogoFour}
                  alt=''
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
