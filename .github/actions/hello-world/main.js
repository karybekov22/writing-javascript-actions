const core = require("@actions/core");

const firstGreeting = core.getInput("first-greeting");
const secondGreeting = core.getInput("second-greeting");
const thirdGreeting = core.getInput("third-greeting");

console.log('Hello ${firstGeeting}');
console.log('Hello ${secondGeeting}');
if (thirdGreeting) {
    console.log('Hello ${thirdGreeting}');
}
