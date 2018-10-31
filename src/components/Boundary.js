import React, { PureComponent } from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';

class Boundary extends PureComponent {
  static propTypes = {
    children: oneOfType([node, arrayOf(node)]),
  };

  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error.stack, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <div>Error</div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default Boundary;
