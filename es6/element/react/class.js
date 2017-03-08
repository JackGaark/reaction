'use strict';

const ReactElement = require('../react');

class ReactClassElement extends ReactElement {
  constructor(reactClass, props) {
    super(props);

    this.reactClass = reactClass;

    const initialState = this.getInitialState();

    this.setInitialState(initialState);
  }

  render(update) {
    return this.reactClass.render.call(this, update);
  }

  getInitialState() {
    return this.reactClass.getInitialState.call(this);
  }

  getChildContext() {
    return this.reactClass.getChildContext.call(this);
  }
  
  componentDidMount() {
    this.reactClass.componentDidMount.call(this);
  }

  componentWillUnmount() {
    this.reactClass.componentWillUnmount.call(this);
  }
}

module.exports = ReactClassElement;