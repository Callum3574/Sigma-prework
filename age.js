function userEnterBirthday() {
  const dob = new Date(prompt("Please enter your date of birth. (YYYY-MM-DD)"));
  return dob;
}

function displayCurrentDate() {
  const currentDate = new Date();
  return currentDate;
}

function ageCalculation(userEnterBirthday, displayCurrentDate) {
  const userBirthday = userEnterBirthday();
  const dateNow = displayCurrentDate();

  const userBirthdayYear = userBirthday.getFullYear();
  const dateNowYear = dateNow.getFullYear();
  const userBirthdayMonth = userBirthday.getMonth() + 1;
  const dateNowMonth = dateNow.getMonth() + 1;

  let userAge = dateNowYear - userBirthdayYear;
  if (dateNowMonth < userBirthdayMonth) {
    userAge--;
  }
  alert(`Age: ${userAge}`);
  return runAgain(ageCalculation);
}
function runAgain(ageCalculation) {
  const userDecision = prompt("Would you like to work out another age?");
  if (userDecision === "yes" || userDecision === "yes") {
    ageCalculation(userEnterBirthday, displayCurrentDate);
  } else if (userDecision === "no" || userDecision === "No") {
    return;
  } else {
    alert('please enter either "yes" or "no"');
    runAgain();
  }
}

ageCalculation(userEnterBirthday, displayCurrentDate);
