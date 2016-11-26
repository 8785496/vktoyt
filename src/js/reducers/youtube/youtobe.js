export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'CREATE_PLAYLIST':
      return Object.assign({}, {playlist: action.playlist})
    default:
      return state
  }
}