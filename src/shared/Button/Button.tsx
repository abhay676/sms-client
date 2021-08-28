import React, { Component } from 'react';
import { ButtonState, IButton } from './IButton';

export default class Button extends Component<IButton, ButtonState> {
  constructor(props: IButton) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick() {
    console.log('click');
  }
  render() {
    const { text, type } = this.props;

    return (
      <div>
        <button type={type}>{text}</button>
      </div>
    );
  }
}
