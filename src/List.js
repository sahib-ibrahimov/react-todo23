import { Component } from 'react';
import ListItem from './ListItem.js';

export default class List extends Component {
  render() {
    return (
      <ul>
        {this.props.array.map((item, i) =>
          <ListItem title={item} id={i} del={this.props.delItem} />
        )}
      </ul>
    );
  }
}
