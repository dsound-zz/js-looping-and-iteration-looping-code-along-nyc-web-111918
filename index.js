// Code your solutions in this file
function printBadges(names) {
  for (let i = 0; names.length > i; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }
  return names;
}

function tailsNeverFails() {
    let tails = 0

    while (Math.random() >= 0.5) {
      tails ++
    }
    return `You got ${tails} tails in a row!`
}
