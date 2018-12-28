import React, { Component } from 'react';

class FooterContainer extends Component {
  render() {
    return (
      <footer className="text-muted">
        <div className="container">
          <p className="float-right">
            <a href="#top">Back to top</a>
          </p>
          <p>
            Album example is &copy; Bootstrap, but please download and customize it for yourself!
          </p>
        </div>
      </footer>
    );
  }
}

export default FooterContainer;
