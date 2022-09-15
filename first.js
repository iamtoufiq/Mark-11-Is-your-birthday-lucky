const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
  if (sum % Number(luckyNumber) == 0) {
    outputBox.innerText = `Your Birthday is lucky 🎊🎉✨`;
    outputBox.style.color = "green";
  } else {
    outputBox.innerText = `Your birthday is not lucky 🤨`;
    outputBox.style.color = "#1c1917";
  }
}

function CheckBirthdayIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  console.log(sum);
  if (sum && luckyNumber.value > 0) {
    compareValues(sum, luckyNumber.value);
  } else {
    outputBox.innerText =
      "Please enter input fields properly & lucky Number must be Positive.";
    outputBox.style.color = "#dc2626";
    outputBox.style.fontSize = "x-large";
  }
}
function calculateSum(dob) {
  // we can also do it using split and join method , but i will take more line .
  dob = dob.replaceAll("-", " ");
  dob = dob.split(" ").join("");
  // console.log(dob);
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkNumber.addEventListener("click", CheckBirthdayIsLucky);
