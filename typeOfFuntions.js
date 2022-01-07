// normal functions
function normalFunction() {
  console.log("I'm a function");
}

normalFunction();

// function with parameter
function functionWithParams(name, age) {
  console.log(
    `Welcome ${name}, Next year you are going to ${age + 1} years old`
  );
}

functionWithParams("John", 30);

// function with return
function functionWithReturn(name, age) {
  return `Welcome ${name}, Next year you are going to ${age + 1} years old`;
}

const returnValue1 = functionWithReturn("Jerry", 30);
console.log(returnValue1);

// Arrow Functions
const ArrowFunction = () => {
  console.log("I'm an arrow function ");
};

// Arrow Functions with parameters
const ArrowFunctionWithParams = (name, age) => {
  console.log(
    `Welcome ${name}, Next year you are going to ${age + 1} years old`
  );
};

ArrowFunctionWithParams();

// Arrow Functions with returns
const ArrowFunctionsWithReturns = (name, age) => {
  return `Welcome ${name}, Next year you are going to ${age + 1} years old`;
};

ArrowFunctionsWithReturns();
