import getRandomNum from '../utils';
import runGame from '..';

export const isEven = num => num % 2 === 0;
const rule = 'Answer "yes" if number even otherwise answer "no".';

const evenGame = () => {
  const randomNumber = getRandomNum(0, 101);
  const question = randomNumber;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  runGame(evenGame, rule);
};
