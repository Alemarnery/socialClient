export function curateFormValidation(validation) {
  return typeof validation["pattern"] === "object"
    ? {
        ...validation,
        pattern: {
          ...validation.pattern,
          value: RegExp(validation.pattern.value),
        },
      }
    : validation;
}

export function zeroBeforeNumber(number) {
  if (number < 10) {
    return ("0" + number).slice(-2);
  }

  return number;
}
