Race-Day-Contestants
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
This project is about a race day registrations ranging from people under 18, for those who are 18 and for those who are well above 18 years old. It ultimately automates and removes the need to count the participants by your self.

How does it work?

1. Race Number Registration:

   ➤ The script starts by generating a random race number between 0 and 999 using `Math.floor(Math.random() * 1000)`.


2. Runner Details:

   ➤ The runner age is set to `20` and stored in `runnerAge` variable.

   ➤ The `registeredEarly` variable indicates whether the runner registered early (set to `true`).

   ➤ The `ifAdult` variable check if the runner is an adult (also set up `true`).


3. Early Registration Check:

   ➤ If the runner is an adult (`ifAdult` is `true`) and registered early (`registeredEarly` is `true`), the race number is increased by `1000`.

   ➤ A message confirming the runner's early registration is logged to the console.


4. Race Time Assignment:

   ➤ If the runner is an adult and registered early, they will race at 9:30 AM, and the race number is displayed.

   ➤ If the runner is exactly 18 years old, they will be instructed to check at the registration desk.

   ➤ Those registrants (children / non-adults) will race at 12:30 PM regardless of their registration.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
USAGE

To use the script, simply copy and paste it into a JavaScript environment (web browser console or Node.js). Make sure to adjust the values of `runnerAge`, `ifAdult` and `registeredEarly`.


EXAMPLE OUTPUT:

when the script is executed it may look like this:

The runner is registered early and is an adult
You will race at 9:30 AM with the race nunber 1234
-----------------------------------------------------

This script is a simple example to demonstrate conditional statements and random number generation in JavaScript.

