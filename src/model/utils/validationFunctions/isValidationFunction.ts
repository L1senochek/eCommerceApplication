interface IIsValidationFunction {
  (value: string): {
    status: boolean;
    text: string;
  };
}

export default IIsValidationFunction;
