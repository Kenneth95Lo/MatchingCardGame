import React, { useState, memo, useRef, useEffect } from 'react'
import { View, Text, TouchableOpacity,Animated } from 'react-native'
import { styles } from '../style'

type CardItemProps = {
  card: Card
  onCardClicked: (card:Card) => void
  flipped: Bool,
  cardsRef: React.MutableRefObject<Record<string, TouchableOpacity | null>>
}

const CardItem : React.FC = ({card, onCardClicked, flipped, cardsRef}) => {

  const [animatedValue] = useState(new Animated.Value(0))
  const [val, setVal] = useState(0)

  let frontInterpolate = animatedValue.interpolate({
    inputRange:[0,180],
    outputRange:['0deg','180deg']
  })
  let backInterpolate = animatedValue.interpolate({
    inputRange:[0,180],
    outputRange:['180deg','0deg']
  })

  const frontAnimatedStyle = {
    transform: [
      { rotateY: frontInterpolate}
    ]
  }

  const backAnimatedStyle = {
    transform: [
      { rotateY: backInterpolate}
    ]
  }

  useEffect(()=>{
    if (flipped) {
      console.log("i'm in here")
      flipToBack()
    }else{
      console.log("i'm in here jor")
      flipToFront()
    }
  },[flipped])

  useEffect(()=>{
    animatedValue.addListener(({value})=>{
      setVal(value)
    })
  },[])

  const onCardItemClicked = () => {
    // flipCard()
    console.log(card)
    onCardClicked(card)
  }

  const flipCard = () => {

    if (val > 90){
      flipToFront()
    }else{
      flipToBack()
    }
  }

  const flipToFront = () => {
    Animated.spring(animatedValue,{
      toValue:0,
      friction:8,
      tension:10,
      useNativeDriver:false
    }).start()
  }

  const flipToBack = () => {
    Animated.spring(animatedValue,{
      toValue:180,
      friction:8,
      tension:10,
      useNativeDriver:false
    }).start()
  }

  return (

    <TouchableOpacity
    ref={ref => cardsRef.current[card.key] = ref}
    style={[styles.cardItem]}
    onPress={onCardItemClicked}>
      <Animated.View
      style={[styles.whiteBackground,styles.flipCardBack,backAnimatedStyle,styles.flexOne]}
      >
        <Text style={styles.textCenter}>{card.val}</Text>
      </Animated.View>

        <Animated.View style={[styles.flipCardFront,frontAnimatedStyle,{backgroundColor:'blue'},styles.flexOne]}>
          <Text style={[{textAlign:'center',color:'white'}]}>?</Text>
        </Animated.View>


    </TouchableOpacity>
  )

}

export default memo(CardItem)
