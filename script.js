function getCurrentHour() {
  return new Date().getHours();
}

function promptForUserName() {
  const inputName = prompt("Vui lòng nhập tên của bạn:");
  return inputName && inputName.trim().length > 0 ? inputName.trim() : "bạn";
}

function buildGreetingMessage(currentHour, userName) {
  if (currentHour >= 5 && currentHour <= 11) {
    return "Good Morning " + userName + "!";
  } else if (currentHour >= 12 && currentHour <= 16) {
    return "Good Afternoon " + userName + "!";
  } else if (currentHour >= 17 && currentHour <= 20) {
    return "Good Evening " + userName + "!";
  } else {
    return "Good Night " + userName + "!";
  }
}

function displayGreetingMessage(greetingMessage) {
  const greetingTextElement = document.getElementById("greeting-text");
  greetingTextElement.textContent = greetingMessage;
}

function initGreetingApp() {
  const userName = promptForUserName();
  const currentHour = getCurrentHour();
  const greetingMessage = buildGreetingMessage(currentHour, userName);
  displayGreetingMessage(greetingMessage);
}

initGreetingApp();