import { NUM_PAIRS, Card } from '../components/Card'

const ShuffledCardsGenerator = () : [] => {

  var cardsArr = []

  for(let i=0; i< NUM_PAIRS; i++){
    var newNum = randomIntFromInterval(1,100);
    var exist = false;
    var newCardOne = new Card();
    var newCardTwo = new Card();

    do{
      exist = checkNumberExist(newNum,cardsArr)
      if (exist) {
        newNum = randomIntFromInterval(1,100)
      }
    } while(exist)
    newCardOne.val = newNum
    newCardOne.idx = i
    newCardTwo.val = newNum
    newCardTwo.idx = i + NUM_PAIRS
    cardsArr.push(newCardOne)
    cardsArr.push(newCardTwo)
  }

  return cardsArr

}

export const randomIntFromInterval = (min: number, max:number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const checkNumberExist = (num: number, cardsArr:[Int]) => {
  return cardsArr.includes(num)
}

export default ShuffledCardsGenerator
