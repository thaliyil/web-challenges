console.clear();

function printSquare(number) {
  let square = number * number;
  console.log("the square is " + square);
}

printSquare(3);
printSquare(5);

function circumferenceOfCircle(radius) {
  let circumference = 2 * 3.14 * radius;
  console.log("the circumference of the circle is:" + circumference);
}
circumferenceOfCircle(4);
circumferenceOfCircle(6);

function printRectangleArea(width, length) {
  let area = width * length;
  console.log(area);
}
printRectangleArea(5, 7);
printRectangleArea(3, 4);
