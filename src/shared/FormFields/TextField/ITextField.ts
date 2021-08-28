export enum FieldType {
  TEXT = 'text',
  EMAIL = 'email',
}
export interface ITextField {
  name: string;
  value?: string;
  onChange: (value: string) => void;
  type: FieldType;
}

export type TextFieldState = {
  value: string;
  isError: boolean;
  errorText?: string;
};
