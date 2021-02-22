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
