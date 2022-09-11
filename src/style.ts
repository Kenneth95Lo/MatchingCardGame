import {StyleSheet, Dimensions} from 'react-native'
import { NUM_PAIRS } from '/components/Card'

const windowWidth = Dimensions.get('window').width - 10
const cardSizeRatio = 700 / 500

const styles = StyleSheet.create({
  viewStyle:{
    backgroundColor: 'gray'
  },
  cardItem:{
    flex: 3,
    // width: $({windowWidth/NUM_PAIRS})
    // height: ${(SCREEN_WIDTH * CARD_IMAGE_RATIO / CARDS_PER_ROW) - 10}
    margin: 5,
    justifyContent:'center',
    borderWidth:2,
    backgroundColor:'white',
    height:'100%',
    borderColor:'black',
    borderWidth:2
  },
  cardItemText:{
    textAlign:'center'
  },
  flexOne:{
    flex: 1
  },
  whiteBackground:{
    backgroundColor:'white'
  },
  textCenter:{
    textAlign:'center'
  },
  positionAbsolute:{
    position:'absolute'
  },
  flipCardFront:{
    width:"100%",
    justifyContent:'center',
    textAlign:'center',
    backfaceVisibility:'hidden'
  },
  flipCardBack:{
    width:"100%",
    justifyContent:'center',
    textAlign:'center',
    position:'absolute'
  }

});

export { styles }
