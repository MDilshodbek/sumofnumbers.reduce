let number = [1, 2, 3, 4, 5];

console.log(
  number.reduce((oldValue, currentValue) => {
    if (currentValue % 2 === 0) {
      return oldValue + currentValue;
    }
    return oldValue;
  }, 0)
);
