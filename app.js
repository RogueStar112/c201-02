// Prompting for username and greeting

// !DON'T FORGET TO UNCOMMENT BEFORE PUSH
let username = prompt(
  "Hello, welcome to my little corner of the internet. What is your name?"
);

while (!username) {
  username = prompt("You shall not pass if you don't tell me your name.");
}

alert(`Nice to meet you ${username}, I hope you are having a fantastic day.`);

// !Beginning of 5 questions prompt
function quizTime() {
  let scoreCounter = 0;
  let choices = "Yes/no (y/n)?";

  function qOneStart() {
    let qOne = prompt(`I have lived in multiple countries. ${choices}`)
      .toLowerCase()
      .trim();

    if (qOne === "y" || qOne === "yes") {
      alert("✅ Nice one, you got that one right. +1 to you.");
      // console.log("✅ Nice one, you got that one right. +1 to you.");
      scoreCounter++;
      // console.log(`Current score: ${scoreCounter}`);
    } else if (qOne === "n" || qOne === "no") {
      alert("❌ WRONG - I have lived in multiple countries!");
      // console.log("❌ WRONG - I have lived in multiple countries!");
      // console.log(`Current score: ${scoreCounter}`);
    } else if (qOne === null) {
      alert("🚨 You must write yes or no!");
      qOneStart();
    } else {
      alert("🚨 You must write yes or no!");
      qOneStart();
    }
  }
  qOneStart();

  function qTwoStart() {
    let qTwo = prompt(
      `I have completed University at King's College London. ${choices}`
    )
      .toLowerCase()
      .trim();

    if (qTwo === "y" || qTwo === "yes") {
      alert("❌ WRONG - I didn't finish university!");
      // console.log("❌ WRONG - I didn't finish university!");
      // console.log(`Current score: ${scoreCounter}`);
    } else if (qTwo === "n" || qTwo === "no") {
      alert("✅ Correct. Unfortunately I never got to finish it.");
      // console.log("✅ Correct. Unfortunately I never got to finish it.");
      scoreCounter++;
      // console.log(`Current score: ${scoreCounter}`);
    }
  }
  qTwoStart();

  function qThreeStart() {
    let qThree = prompt(`I own dogs. ${choices}`).toLowerCase().trim();

    if (qThree === "y" || qThree === "yes") {
      alert("❌ WRONG - I own birds, not dogs!");
      // console.log("❌ WRONG - I own birds, not dogs!");
      // console.log(`Current score: ${scoreCounter}`);
    } else if (qThree === "n" || qThree === "no") {
      alert("✅ Correct, I own birds!");
      // console.log("✅ Correct, I own birds!");
      scoreCounter++;
      // console.log(`Current score: ${scoreCounter}`);
    } else {
      alert("🚨 You must write yes or no!");
      qThreeStart();
    }
  }
  qThreeStart();

  function qFourStart() {
    let qFour = prompt(`My favorite music genres are Rock & Metal. ${choices}`)
      .toLowerCase()
      .trim();

    if (qFour === "y" || qFour === "yes") {
      alert(
        "✅ Correct, I listen to multiple genres but those two are my favorite."
      );
      // console.log("✅ Correct, I listen to multiple genres but those two are my favorite.");
      scoreCounter++;
      // console.log(`Current score: ${scoreCounter}`);
    } else if (qFour === "n" || qFour === "no") {
      alert(
        "❌ WRONG - They are my favorite genres! I do listen to a variety of music, however."
      );
      // console.log("❌ WRONG - They are my favorite genres! I do listen to a variety of music, however.");
      // console.log(`Current score: ${scoreCounter}`);
    } else {
      alert("🚨 You must write yes or no!");
      qFourStart();
    }
  }
  qFourStart();

  function qFiveStart() {
    let qFive = prompt(`I self-taught English. ${choices}`)
      .toLowerCase()
      .trim();

    if (qFive === "y" || qFive === "yes") {
      alert("✅ That's right! I started out with cartoons and music!");
      // console.log("✅ That's right! I started out with cartoons and music!");
      scoreCounter++;
      // console.log(`Current score: ${scoreCounter}`);
    } else if (qFive === "n" || qFive === "no") {
      alert(
        "❌ WRONG - I did learn English by myself from cartoons, movies, music, tv shows, etc."
      );
      // console.log("❌ WRONG - I did learn English by myself from cartoons, movies, music, tv shows, etc.");
      // console.log(`Current score: ${scoreCounter}`);
    } else {
      alert("🚨 You must write yes or no!");
      qFiveStart();
    }
  }
  qFiveStart();

  // Defines a random number when the question starts
  let correctGuess = Math.floor(Math.random() * 11);
  let attemptsLeft = 4;

  console.log(`Your random number is: ${correctGuess}`);

  /*
  Took out recursion - so this question would work.
  */
  function qSixStart() {
    while (attemptsLeft > 0) {
      attemptsLeft--;
      let qSix = parseInt(prompt("Guess a number between 1 and 10."));

      if (qSix === correctGuess) {
        /* If guess is correct*/
        alert("✅ That's the correct guess!");
        scoreCounter++;
        break;
      } else if (qSix < correctGuess) {
        /* If Number Lesser than Correct guess*/

        alert(`Your guess was too low. You have ${attemptsLeft} guesses left.`);
        // attemptsLeft--;
      } else if (qSix > correctGuess) {
        /* If Number Greater than Correct guess*/

        alert(
          `Your guess was too high. You have ${attemptsLeft} guesses left.`
        );
        // attemptsLeft--;
      } else if (isNaN(parseInt(qSix))) {
        /* If guess is not a valid value*/
        alert("Try again, with a number this time.");
      }

      if (attemptsLeft === 0) {
        alert(
          `Sorry, you have no more attempts left. The answer is ${correctGuess}.`
        );
      }
    }
  }

  qSixStart();

  alert(
    `${username}, you have completed my quiz and you have a final score of ${scoreCounter}/6. Nice one!`
  );
}

document.getElementById("quiz-btn-start").addEventListener("click", quizTime);
