import { incrementStep, resetStep } from '../actions/StepsActions'

const initialState = {
  currentSteps:0
}

const StepsReducer = (state = initialState, action) => {
  switch(action.type){
    case "INCREMENT_STEP":{
      var {currentSteps} = state
      var newSteps = currentSteps += 1

      return {
        currentSteps: newSteps
      }
    }
    case "RESET_STEP":{
      return initialState
    }
    default:
      return {...state}
  }
}

export default StepsReducer
