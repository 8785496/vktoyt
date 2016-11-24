export function init() {
  VK.init({
    apiId: 4861966
  });
}

export function getAudio(ownerId, dispatch) {
  return (dispatch) => {
    VK.Api.call('audio.get', { owner_id: ownerId, count: 1000 }, function (r) {
      if (r.response) {
        // console.log(r)
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
        dispatch({type: 'SET_USER', userId: r.session.user.id, auth: true})
      } else {
        console.log('login cancel')
      }
    })
  }
}
