const changeTooltipText = (
  value: string,
  validationFunc: (value: string) => boolean,
  tooltipErrorText: string
): string => {
  const status = validationFunc(value);
  return !status ? `${tooltipErrorText}` : '';
};

export default changeTooltipText;
