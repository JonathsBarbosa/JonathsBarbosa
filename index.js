function rankedMatches(victoryQt, LossQt) {
  let rankedBalance = victoryQt - LossQt;
  let level;

  if (victoryQt <= 10) {
    level = "Iron";
  } else if (victoryQt > 10 && victoryQt <= 20) {
    level = "Brass";
  } else if (victoryQt > 20 && victoryQt <= 50) {
    level = "Silver";
  } else if (victoryQt > 50 && victoryQt <= 80) {
    level = "Gold";
  } else if (victoryQt > 80 && victoryQt <= 90) {
    level = "Diamond";
  } else if (victoryQt > 90 && victoryQt <= 100) {
    level = "Legendary";
  } else {
    level = "Immortal";
  }

  return { rankedBalance, level };
}

let result = rankedMatches(45, 3);
console.log(
  `The Hero has total balance of ${result.rankedBalance} victories and is on level ${result.level} !`
);

result = rankedMatches(5, 1);
console.log(
  `The Hero has total balance of ${result.rankedBalance} victories and is on level ${result.level} !`
);

result = rankedMatches(70, 5);
console.log(
  `The Hero has total balance of ${result.rankedBalance} victories and is on level ${result.level} !`
);
