import React from "react";

/**
 * Utility to calculate the display name of a React Component.
 */
const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

/**
 * HOC
 */
const logProps = WrappedComponent => {
  class WithLog extends React.Component {
    componentDidUpdate = prevProps => {
      console.log("Previous props", prevProps);
      console.log("Current props", this.props);
    };

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  WithLog.displayName = `LogProps(${getDisplayName(WrappedComponent)}`;

  return WithLog;
};

/**
 * Display current count from props
 */
class ChildComponent extends React.Component {

  render() {
    return <div>{this.props.count}</div>
  }
}

/**
 * Enhance the child Component
 */
const WithLog = logProps(ChildComponent);

/**
 * A React class with counter, which increments on press of a button.
 * It passes the current count to its child
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}));
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <WithLog count={this.state.count} />
      </div>
    );
  }
}

export default Counter;
