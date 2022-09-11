export const choiceMade = (payload:{}) => {
  return {
    type: 'CHOICE_MADE',
    payload: payload
  }
}

export const clearChoice = {
    type: 'CLEAR_CHOICE',
    payload: null
}

export const incrementMatched = {
  type: 'INCREMENT_MATCHED',
  payload: null
}
