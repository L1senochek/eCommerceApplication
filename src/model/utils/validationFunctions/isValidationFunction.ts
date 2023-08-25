export interface IIsValidationFunction {
  (value: string): {
    status: boolean;
    text: string;
  };
}
