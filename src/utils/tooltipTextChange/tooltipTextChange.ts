const changeTooltipText = (
  value: string,
  validationFunc: (value: string) => {
    status: boolean;
    text: string;
  }
): string => {
  const result = validationFunc(value);
  return !result.status ? `${result.text}` : '';
};

export default changeTooltipText;
