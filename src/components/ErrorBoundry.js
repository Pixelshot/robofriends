import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  // React's lifecycle hook to handle error is called componentDidCatch(err, info)
  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }
  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <h1>Ooops. That is not good</h1>;
    }
    return this.props.children;
    // In this case, children will be anything between (<ErrorBoundry>children</ErrorBoundry>)
  }
}
