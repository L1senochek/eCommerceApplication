const isDateValid = (
  value: string
): {
  status: boolean;
  text: string;
} => {
  const currentDate = new Date();
  const inputDate = new Date(value);
  const minAgeMilliseconds = 13 * 365.25 * 24 * 60 * 60 * 1000;

  const thirteenYearsFromNowInMs = new Date(currentDate.getTime() - minAgeMilliseconds);

  if (!value) {
    return {
      status: false,
      text: 'Shouldn`t be empty',
    };
  } else if (inputDate >= thirteenYearsFromNowInMs) {
    return {
      status: false,
      text: 'Should be at least 13 years old',
    };
  } else {
    return {
      status: true,
      text: '',
    };
  }
};

export default isDateValid;
