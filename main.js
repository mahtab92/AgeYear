function ageInDays() {
  var birthYear = prompt("what is your age?");
  var ageInDayss = (2022 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode("you are" + ageInDayss + "Days old");
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flexbox-result").appendChild(h1);
}
function reset() {
  document.getElementById("ageInDays").remove();
}
