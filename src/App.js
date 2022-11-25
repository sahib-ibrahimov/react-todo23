import { Component } from 'react';
import Header from './Header.js';
import Input from './Input.js';
import List from './List.js';
import Button from './Button.js';
import ClearBtn from './ClearBtn.js';

export default class App extends Component {
  state = {
    inputValue: '',
    list: [],
    size: 0
  }

  inputChange = (e) => {
    this.setState({inputValue: e.target.value});
  }

  buttonClick = () => {
    const input = this.state.inputValue;
    if(input !== '') {
      const x = this.state.list.slice();
      x.push(input);
      this.setState({list: x});
      this.clearInput();
    }
  }

  clearInput = () => {
    this.setState({inputValue: ''});
  }

  delItem = (id) => {
    const x = this.state.list.slice();
    x.splice(id,1);
    this.setState({list: x});
  }

  render() {
    return (
      <div className="todo">
        <Header title="To-Do List" />
        <Input change={this.inputChange} value={this.state.inputValue} />
        <ClearBtn clicker={this.clearInput} />
        <List array={this.state.list} delItem={this.delItem} />
        <Button clicker={this.buttonClick} />
      </div>
    );
  }
}
