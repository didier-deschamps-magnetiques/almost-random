export default AlmostRandom = () => {
  // almost random number must have the same precision than a random one.
  const length = Math.random().toString().length;
  let almostRandom = 0;

  for(let i = 0; i < length; i++) {
    const randomNumber = Math.floor(1 + Math.random() * 100);

    if(randomNumber <= 4) {
      almostRandom += 1;
    }
    else if(randomNumber <= 12) {
      almostRandom += 2;
    }
    else if(randomNumber <= 22) {
      almostRandom += 3;
    }
    else if(randomNumber <= 32) {
      almostRandom += 4;
    }
    else if(randomNumber <= 44) {
      almostRandom += 5;
    }
    else if(randomNumber <= 54) {
      almostRandom += 6;
    }
    else if(randomNumber <= 82) {
      almostRandom += 7;
    }
    else if(randomNumber <= 93) {
      almostRandom += 8;
    }
    else if(randomNumber <= 98) {
      almostRandom += 9;
    }
    else {
      almostRandom += 10;
    }

    almostRandom *= .1;
  }

  return almostRandom;
}
