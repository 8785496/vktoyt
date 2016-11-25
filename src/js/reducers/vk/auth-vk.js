const stateDefault = {auth: false, userId: 0}

export default function reducer(state = stateDefault, action) {
  switch (action.type) {
    case 'SET_USER':
      return Object.assign({}, state, {auth: action.auth, session: action.session});
    case 'GET_AUTH':
      return state;
    default:
      return state;
  }
}