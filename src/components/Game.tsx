import React, { useCallback, useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View,Text,FlatList, SafeAreaView, Button,Alert } from 'react-native'
import { connect } from 'react-redux'
import CardItem from './CardItem'
import { Card, NUM_PAIRS } from './Card'
import { incrementStep, resetStep } from '../actions/StepsActions'
import { incrementMatched, clearChoice } from '../actions/ChoiceActions'
import { styles } from '../style'
import ShuffledCardsGenerator from '../helpers/ShuffledCardsGenerator'

const Game : React.FC = () => {

  const cardsRef = useRef<Record<string, TouchableOpacity | null>>({})

  const dispatch = useDispatch()

  const [cardOne, setCardOne] = useState(null)
  const [cardTwo, setCardTwo] = useState(null)
  const [shuffledCards, setShuffedCards] = useState([])
  const stepsTaken = useSelector((state) => {return state.steps.currentSteps})
  const matched = useSelector((state) => {return state.choice.matched})
  const [extraData,setExtraData] = useState(new Date())

  const onCardItemClicked = (card) => {

    dispatch(incrementStep)
    //set into the card choice first
    cardOne ? setCardTwo(card) : setCardOne(card)
  }

  const resetTurn = () => {
    dispatch(resetStep)
    dispatch(clearChoice)
    setCardOne(null)
    setCardTwo(null)
    setShuffedCards([])
    generateShuffledCards()
    //also reset the steps count //call dispatch
  }

  useEffect(() => {

    if (cardOne && cardTwo) {
      if (cardOne.val === cardTwo.val) {
        //matched
        dispatch(incrementMatched)

        cardOne.matched = true
        cardTwo.matched = true
        setCardOne(null)
        setCardTwo(null)
        if ((matched + 2) === NUM_PAIRS * 2){
          //game won
          let msg = 'You win this game with ' + stepsTaken + ' steps'
          showAlert('Congratulations!', msg, 'Try Around Round')
        }
      }else{
        console.log('doesnt match, flipped back the cards')
        setTimeout(() => {
          setCardOne(null)
          setCardTwo(null)
        }, 500);
      }
    }
  }, [cardOne, cardTwo])

  useEffect(() => {

    if (shuffledCards.length > 0) {
      return
    }

    generateShuffledCards()

  }, [])

  const generateShuffledCards = () => {

    let cardsArr = ShuffledCardsGenerator()

    setShuffedCards(cardsArr.sort(() => Math.random() - 0.5))
  }

  const renderItem = ({item, ...obj }) => {
    return (
      <CardItem
      testID={'cardItem'}
      card={item}
      onCardClicked={onCardItemClicked}
      cardsRef={cardsRef}
      flipped={(item.idx === (cardOne ? cardOne.idx : false) || item.idx === (cardTwo ? cardTwo.idx : false) || item.matched)}
      />
    )
  }

  const renderHeader = (
    <View style={{height: '10%', justifyContent:'center', }}>
      <Text style={{textAlign:'center', fontSize: 18}}>Steps Taken: {stepsTaken}</Text>
      <Button
      onPress={resetTurn}
      title="Restart"
      style={{backgroundColor:'white'}}
      />
    </View>
  )

  const showAlert = (title: String, message: String, btnText: String) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: btnText,
          style: 'default',
          onPress: () => {
            resetTurn()
          }
        }
      ],
      {
        cancelable: true
      }
    )
  }

  return(
    <SafeAreaView>
      {renderHeader}
      <FlatList
        style={[{height:'80%'}]}
        data={shuffledCards}
        keyExtractor={useCallback((_, index) => index.toString(), [])}
        renderItem={renderItem}
        bounces={false}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        ListHeaderComponent = {<View/>}
        ListFooterComponent = {(<View/>)}
      />
    </SafeAreaView>
  )

}

export default Game
