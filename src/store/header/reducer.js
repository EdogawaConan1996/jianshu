import { CHANGE_INPUT_FOCUS } from "./action.type"
import {fromJS} from 'immutable'

const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_FOCUS) {
    return state.set('focused', !state.get('focused'))
  }
  return state
}