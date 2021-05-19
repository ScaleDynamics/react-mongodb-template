import React from 'react';

// init ScaleDynamics Platform
import * as Backend from './.backend/backend.js';

const { hello } = new Backend();

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
    };
  }

  componentDidMount() {
    hello().then((message) => {
      this.setState({ msg: message });
    });
  }

  render() {
    return (
      <div className="hello centered">
        <h3>{this.state.msg}</h3>
        <span>
          Learn about{' '}
          <a
            href="https://docs.scaledynamics.com/docs/"
            target="_blank"
            rel="noreferrer">
            ScaleDynamics Platform
          </a>{' '}
          and{' '}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            React
          </a>
        </span>
      </div>
    );
  }
}
