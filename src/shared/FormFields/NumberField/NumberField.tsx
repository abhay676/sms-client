import React, { Component } from 'react';
import { INumberField, NumberFieldState } from './INumberField';
export default class NumberField extends Component<
  INumberField,
  NumberFieldState
> {
  constructor(props: INumberField) {
    super(props);
    this.state = {
      value: '',
      errorText: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  componentDidMount() {
    this.setState({ errorText: '' });
  }

  componentDidUpdate(prevProps: INumberField, prevState: NumberFieldState) {
    if (this.state.value) {
      this.props.onChange(this.state.value);
    }
  }

  handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ errorText: '' });
    this.setState({ value: e.target?.value });
  }

  handleOnBlur(e: React.FormEvent<HTMLInputElement>) {
    const { value } = this.state;
    if (!value)
      this.setState({ errorText: `${e.currentTarget.name} is required` });
  }
  render() {
    const { value, errorText } = this.state;
    const { name } = this.props;
    return (
      <div className="field_wrapper">
        <label>{name}</label>
        <input
          type="number"
          value={value}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
          name={name}
        />
        {errorText && <span className="errorText">{errorText}</span>}
      </div>
    );
  }
}
