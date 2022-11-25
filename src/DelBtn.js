import { Component } from 'react';

export default class DelBtn extends Component {
  render() {
    return (
      <button onClick={() => {
        this.props.clicker(this.props.id)
      }}>X</button>
    );
  }
}
