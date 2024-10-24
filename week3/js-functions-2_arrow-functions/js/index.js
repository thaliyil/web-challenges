console.clear();

const now = new Date();
const currentHour = now.getHours();

let getCurrenHour = () => {
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};
const getVectorLength = (x, y, z) => {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
};

const cleanInput = (string) => {
  return string.toLowerCase().trim();
};

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}
/*const isOddAndSmall = (number) => {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
};*/

//const add3 = (a, b, c) => a + b + c;
function add3(a, b, c) {
  return a + b + c;
}

//const repeat10 = (string) => string.repeat(10);
function repeat10(string) {
  return string.repeat(10);
}
