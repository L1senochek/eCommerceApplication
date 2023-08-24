const isNotEmptyValidation = (value: string): boolean => {
  if (!value) {
    return false;
  } else if (value.trim() === value) {
    return true;
  } else {
    return false;
  }
};

export default isNotEmptyValidation;
