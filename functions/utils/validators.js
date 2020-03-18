const isEmpty = string => {
  if (string.trim() === "") return true;
  else return false;
};

const isEmail = email => {
  const regExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regExpression)) return true;
  else return false;
};

exports.validateSignUpData = data => {
  let errors = {};

  if (isEmpty(data.email)) errors.email = "Must not to be an empty.";
  else if (!isEmail(data.email))
    errors.email = "Must to be a valid email address.";

  if (isEmpty(data.password)) errors.password = "Must not to be an empty.";
  else if (data.password !== data.passwordConfirm)
    errors.password = "Must to match.";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

exports.validateSignInData = data => {
  let errors = {};

  if (isEmpty(data.email)) errors.email = "Must not to be an empty.";
  else if (!isEmail(data.email))
    errors.email = "Must to be a valid email address.";

  if (isEmpty(data.password)) errors.password = "Must not to be an empty";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};
