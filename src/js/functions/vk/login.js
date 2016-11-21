export function login(dispatch) {
  VK.Auth.login((r) => {
    // console.log('VK login', r)
    if (r.session) {
      dispatch({type: 'SET_PRODUCT', userId: r.session.user.id})
    } else {
      console.log('login cancel')
    }
  })
}