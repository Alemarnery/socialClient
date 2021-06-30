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

//For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

export function solution() {
  const arr = [4, -2, 3, 0, , -1, 2, -5];
  const newArr = arr
    .filter(function (elem, index, self) {
      if (elem > 0) {
        return index === self.indexOf(elem);
      }
    })
    .sort();

  console.log(newArr);

  let minValue = 0;
  const num = newArr.map(function (elemn) {
    if (minValue < elemn) {
      minValue++;
      if (minValue < elemn) {
        return minValue;
      }
    }
    return 0;
  });

  console.log(num);
}
