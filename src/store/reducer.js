import { CHANGE_INPUT_FOCUS } from "./action.type"

const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_FOCUS) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused = !state.focused
    return newState
  }
  return state
}