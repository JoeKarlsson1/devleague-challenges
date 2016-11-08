'use strict';

const bowlingScore = (frameList) => {
  return frameList.map((frame) => {
    let bowlingScores = {
      total: 0,
    };

    Object.keys(frame).forEach((key) => {
      if(frame.hasOwnProperty(key)) {
        bowlingScores[key] = frame[key]
      }
      bowlingScores['total'] += frame[key];
    })
    console.log('bowlingScores: ', bowlingScores);
    return bowlingScores;
  })
  .reduce((prevFrame, currFrame) => {
    if(prevFrame.strike) {
      prevFrame.cumulativeScore += currFrame.roll1 + currFrame.roll2;
    } else if(prevFrame.spare) {
      prevFrame.cumulativeScore += currFrame.roll1;
    }
    prevFrame.cumulativeScore += currFrame.total;

    let newFrame = {};

    newFrame.strike = currFrame.roll1 === 10? true : false;
    newFrame.spare = currFrame.roll1 + currFrame.roll2 === 10? true : false;
    newFrame.cumulativeScore = prevFrame.cumulativeScore;

    return newFrame;

  }, {cumulativeScore: 0, spare: false, strike: false}).cumulativeScore;
}

console.log(bowlingScore([
  {
    roll1: 5,
    roll2: 0,
  },
  {
    roll1: 7,
    roll2: 3,
  },
  {
    roll1: 5,
    roll2: 5,
    roll3: 6,
  }
]));
