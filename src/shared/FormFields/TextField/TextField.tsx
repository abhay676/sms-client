import React, { Component } from 'react';
import { ITextField, TextFieldState, FieldType } from './ITextField';

export default class TextField extends Component<ITextField, TextFieldState> {
  constructor(props: ITextField) {
    super(props);
    this.state = {
      value: '',
      isError: false,
      errorText: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  componentDidMount() {
    this.setState({ errorText: '', isError: false });
  }

  componentDidUpdate(prevProps: ITextField, prevState: TextFieldState) {
    if (this.state.value) {
      this.props.onChange(this.state.value);
    }
  }

  handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.props.type === FieldType.EMAIL) {
      let isEmailValid = re.test(String(e.target?.value).toLowerCase());

      if (!isEmailValid)
        this.setState({ isError: true, errorText: 'email should be valid' });
      else this.setState({ errorText: '', isError: false });
    }
    this.setState({ value: e.target?.value });
  }

  handleOnBlur(e: React.FormEvent<HTMLInputElement>) {
    const { value } = this.state;

    if (!value) {
      this.setState({
        isError: true,
        errorText: `${e.currentTarget.name} is required`,
      });
    }
  }
  render() {
    const { value, errorText, isError } = this.state;
    const { name, type } = this.props;
    return (
      <div className="field_wrapper">
        <label>{name}</label>
        <input
          type={type}
          value={value}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
          name={name}
        />
        {isError ? <span className="errorText">{errorText}</span> : null}
      </div>
    );
  }
}
