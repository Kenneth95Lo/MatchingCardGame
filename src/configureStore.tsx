import { createStore, combineReducers } from 'redux'
import StepsReducer from './reducers/StepsReducer'
import ChoiceReducer from './reducers/ChoiceReducer'

const rootReducer = combineReducers({
  steps: StepsReducer,
  choice: ChoiceReducer
})

export const configureStore = createStore(rootReducer)
