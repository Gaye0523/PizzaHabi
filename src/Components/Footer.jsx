import React from 'react';
const { Fragment } = require("react");

const Footer = () => {
  return (
    <Fragment>
      <div className="backgraundFooter">
          <span className="copyright">Copyright © 2020</span>
          <div className="nameGroup">
          <span className="design">Diseñado por</span>
          <span className="name">Mayely Bernal</span>
          </div>
      </div>
    </Fragment>
    );
}
export default Footer ;