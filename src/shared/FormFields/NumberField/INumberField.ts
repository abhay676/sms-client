export interface INumberField {
  value?: string;
  onChange: (value: number | string) => void;
  name: string;
}

export type NumberFieldState = {
  value: string;
  errorText: string;
};
