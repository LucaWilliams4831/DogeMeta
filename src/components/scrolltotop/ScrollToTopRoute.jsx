import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';


class ScrollToTopRoute extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.path === this.props.location.pathname && this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {

    const { ...rest } = this.props;

    return <Route {...rest}/>;
  }
}

export default withRouter(ScrollToTopRoute);
