import React from 'react'
import {create,act} from 'react-test-renderer'
import Game from '../src/components/Game'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { ChoiceReducer } from '../src/reducers/ChoiceReducer'
import { StepsReducer } from '../src/reducers/StepsReducer'

const store = createStore(StepsReducer, steps: {currentSteps:0})

const tree = create(<Provider store={store}><Game/></Provider>)
test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});
