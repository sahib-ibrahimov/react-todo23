import { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <button onClick={this.props.clicker}>+ Add</button>
    );
  }
}
