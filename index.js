// Fibonacci Generator

const fibonacci_gen = (() => {
  let terms = process.argv.slice(2)[0];

  if (terms && !isNaN(parseInt(terms))) terms = parseInt(terms);
  else {
    console.log(`${terms} is not a valid input number for generating fibonnaci series`);
    return;
  }

  if (terms < 1) {
    console.log(`No fibonacci terms generated, ${terms} < 1`);
    return;
  }

  let num1 = 0,
    num2 = 1,
    nextNum;

  console.log(`Fibonacci Sequence (${terms} terms):`);

  for (let i = 1; i <= terms; i++) {
    console.log(`${i} -> `, num1);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
  }
})();
