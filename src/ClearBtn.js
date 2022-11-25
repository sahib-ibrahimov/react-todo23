import { Component } from 'react';

export default class ClearBtn extends Component {
  render() {
    return (
      <button onClick={this.props.clicker}>X</button>
    );
  }
}
