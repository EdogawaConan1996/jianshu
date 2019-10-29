import {CHANGE_INPUT_FOCUS} from './action.type'

const defaultStore = {
  focused: false
}
// reducer可以接收state但不能更改state
export default (state = defaultStore, action) => {
  if (action.type === CHANGE_INPUT_FOCUS) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused = !state.focused
    return newState
  }
  return state;
}
