export function init() {
  VK.init({
    apiId: 4861966
  });
}

export function getAudio(ownerId, dispatch) {
  return (dispatch) => {
    VK.Api.call('audio.get', { owner_id: ownerId, count: 1000 }, function (r) {
      if (r.response) {
        r.response.splice(0, 1) // delete first element
        dispatch({
          type: 'GET_PLAYLIST',
          items: r.response
        })
        dispatch({
          type: 'CREATE_SEARCH_LIST',
          length: r.response.length
        })
      }
    })
  }
}

export function login(dispatch) {
  return (dispatch) => {
    VK.Auth.login((r) => {
      if (r.session) {
        dispatch({ type: 'SET_USER', session: r.session, auth: true })
      } else {
        console.log('login cancel')
      }
    })
  }
}

export function status(dispatch) {
  return (dispatch) => {
    // console.log(VK.Auth.getLoginStatus)
    VK.Auth.getLoginStatus(function (r) {
      if (r.session) {

        dispatch({ type: 'SET_USER', session: r.session, auth: true })
        /* Авторизованный в Open API пользователь, response.status="connected" */
      } else {

        console.log('auth cancel')
        /* Неавторизованный в Open API пользователь,  response.status="not_authorized" */
      }
    })
  }
}
