export default function reducer(state = [], action) {
  switch (action.type) {
    case 'GET_PLAYLIST':
      return action.items
    default:
      return state
  }
}