export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'SET_AUTH_YT':
      return Object.assign({}, state, {auth: action.auth});
    default:
      return state;
  }
}