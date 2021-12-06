import React, { Fragment } from 'react';

import Navigation from './Navigation';

const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      <main className="main">{props.children}</main>
    </Fragment>
  );
};

export default Layout;
