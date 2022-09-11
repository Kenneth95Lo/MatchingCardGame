import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

const initialState = {
  choiceOne: null,
  choiceTwo: null,
  matched:0
}

const ChoiceReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'CHOICE_MADE':{
      var {choice,val} = action.payload
      if (choice === 1){
        return {...initialState, choiceOne:val}
      }else{
        return {...initialState, choiceTwo:val}
      }
    }
    case 'RESET_CHOICE':{
      return initialState
    }
    case 'INCREMENT_MATCHED':{

      var { matched } = state
      var newMatched = matched + 2

      return {
        ...state, matched: newMatched
      }
    }
    default: return {...state}
  }

}

export default ChoiceReducer
