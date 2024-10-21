console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');
const time = new Date().getHours();
function getGreeting() {
  if (time < 13 && time > 5) {
    return "Good Morning";
  } else if (time > 14 && time < 19) {
    return "Good Afternoon";
  } else if (time < 20 && time < 23) {
    return "Good evening";
  } else if (time < 6 || time > 23) {
    return "Good Night";
  }
}
let day = new Date().getDay();
function getDayColor() {
  if (day === "monday") {
    return "darkgray";
  } else if (day === "tuesday" || "wednesday" || "thursday" || "friday") {
    return "lightblue";
  } else if (day === "saturday" || "sunday") {
    return "hotpink";
  }
  // Code here
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
