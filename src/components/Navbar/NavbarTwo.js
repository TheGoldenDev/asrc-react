import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MDBNavbarToggler, MDBCollapse } from 'mdbreact';
//import logo from '../../assets/img/navbar-logo.svg';
import './NavbarTwo.css';

class NavbarTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      scrolled: false,
    };

    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.collapseMenu = this.collapseMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  collapseMenu = () => {
    if (this.state.isOpen === true) {
      this.setState({ isOpen: false });
    } else {
      return;
    }
  };

  handleScroll = () => {
    const isTop = window.scrollY < 100;
    if (isTop !== true) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      //The click is inside, continue to whatever you are doing
      return;
    }
    //the click is outside, so collapse
    this.collapseMenu();
  };

  render() {
    return (
      <nav
        className={
          this.state.scrolled
            ? 'navbar-shrink navbar navbar-expand-lg navbar-dark fixed-top'
            : 'navbar navbar-expand-lg navbar-dark fixed-top'
        }
        id='otherNav'>
        <div className='container' ref={(node) => (this.node = node)}>
          <a className='navbar-brand' onClick={this.collapseMenu} href='#top'>
            <img src={''} alt='' />
          </a>
          <MDBNavbarToggler
            className='navbar-toggler navbar-toggler-right'
            type='button'
            onClick={this.toggleCollapse}
            aria-controls='navbarResponsive'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            Menu
            <i className='fa fa-bars ml-1'></i>
          </MDBNavbarToggler>
          <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
            <ul className='navbar-nav text-uppercase ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' onClick={this.collapseMenu} to='/'>
                  Home
                </Link>
              </li>

              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  onClick={this.collapseMenu}
                  to='/services'>
                  Services
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  onClick={this.collapseMenu}
                  to='/team'>
                  About Us
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  onClick={this.collapseMenu}
                  to='/contact'>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </MDBCollapse>
        </div>
      </nav>
    );
  }
}
export default NavbarTwo;
