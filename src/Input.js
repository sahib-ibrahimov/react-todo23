import { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <input className="todo-input" onChange={this.props.change} value={this.props.value} />
    );
  }
}
