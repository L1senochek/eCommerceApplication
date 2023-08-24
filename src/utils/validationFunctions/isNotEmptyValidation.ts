const isNotEmptyValidation = (
  value: string
): {
  status: boolean;
  text: string;
} => {
  if (!value) {
    return {
      status: false,
      text: 'Shouldn`t be Empty',
    };
  } else if (value.trim() === value) {
    return {
      status: false,
      text: '',
    };
  } else {
    return {
      status: false,
      text: 'Shouldn`t contain trailing spaces',
    };
  }
};

export default isNotEmptyValidation;
