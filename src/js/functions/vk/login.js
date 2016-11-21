export function login(dispatch) {
  return (dispatch) => {
    VK.Auth.login((r) => {
      if (r.session) {
        dispatch({type: 'SET_USER', userId: r.session.user.id, auth: true})
      } else {
        console.log('login cancel')
      }
    })
  }
}