import * as types from './mutation-types'

export const initJokes = ({commit}) => {
  fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(json => commit(types.INIT_JOKES, json))
}

export const addJoke = ({commit}) => {
  fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(json => commit(types.ADD_JOKE, json))
}


export const removeJoke = ({commit}, index) => {
  commit(types.REMOVE_JOKE, index)
}
