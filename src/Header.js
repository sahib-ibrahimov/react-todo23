import { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <h2 className="todo-header">{this.props.title}</h2>
    );
  }
}
