import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar/Navbar';
import NavbarTwo from './components/Navbar/NavbarTwo';
import MainPage from './components/MainPage/MainPage';
import Services from './components/Services/ServicesPage';
import Team from './components/About/AboutPage';
import ContactPage from './components/Contact/ContactPage';

class App extends React.Component {
  render() {
    const routes = [
      {
        path: '/',
        exact: true,
        navbar: () => <Navbar />,
        main: () => <MainPage />,
      },
      {
        path: '/services',
        navbar: () => <NavbarTwo />,
        main: () => <Services />,
      },
      {
        path: '/team',
        navbar: () => <NavbarTwo />,
        main: () => <Team />,
      },
      {
        path: '/contact',
        navbar: () => <NavbarTwo />,
        main: () => <ContactPage />,
      },
    ];

    return (
      <div>
        <Helmet>
          <title>ASRC</title>
          <meta
            name='description'
            content='This is what you want to show as the page content in the Google SERP Listing'
          />
        </Helmet>
        <Router>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.navbar />}
              />
            ))}
          </Switch>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
