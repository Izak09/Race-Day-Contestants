let raceNumber = Math.floor(Math.random() * 1000);

const runnerAge = 20;

let registeredEarly = true;
let ifAdult = true;
let randomNumber = 500;

if (ifAdult && registeredEarly) {
  raceNumber += 1000;
  console.log('The runner is registered early and is an adult.');
} else {
  console.log('The runner is not an adult and does not meet the criteria.');
}

if (ifAdult && registeredEarly) {
  console.log(`You will race at 9.30 ${raceNumber}`);
} else if (ifAdult === 18) {
  console.log('Check the registration at the desk.')
} else {
  console.log('Young registrants run at 12:30 (regardles of their registration)');
} 
