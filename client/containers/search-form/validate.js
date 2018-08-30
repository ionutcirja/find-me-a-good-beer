// @flow
import * as ValidationMessages from '../../constants/validation-messages';
import * as regex from '../../constants/regular-expressions';

type Values = {
  food: string,
};

export default (values: Values) => {
  let errors = {};

  if (!values.food || !values.food.match(regex.NON_EMPTY)) {
    errors = Object.assign(
      {},
      { ...errors },
      { food: ValidationMessages.FOOD_EMPTY },
    );
  }

  return errors;
};
