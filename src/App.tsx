/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {styles} from './style'
import {configureStore} from './configureStore'
import { Provider } from 'react-redux'
import Game from './components/Game'
import { View,Text } from 'react-native'

const App: () => Node = () => {

  return (
    <Provider store={configureStore}>
      <Game />
    </Provider>
  )
}



export default App;
