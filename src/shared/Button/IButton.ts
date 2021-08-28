type ButtonType = 'submit' | 'button' | undefined;
export interface IButton {
  text: string;
  type?: ButtonType;
  onClick?: () => {};
}

export type ButtonState = {
  text: string;
};
