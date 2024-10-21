console.clear();

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
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
