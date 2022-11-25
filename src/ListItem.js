import { Component } from 'react';
import DelBtn from './DelBtn.js';

export default class ListItem extends Component {
  render() {
    return (
      <li>
        {this.props.title}
        <DelBtn clicker={this.props.del} id={this.props.id} />
      </li>
    );
  }
}
