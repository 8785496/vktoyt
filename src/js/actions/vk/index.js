export function init() {
  VK.init({
    apiId: 4861966
  });
}

function getAudio(ownerId, dispatch) {
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

export function login(dispatch) {
  return (dispatch) => {
    VK.Auth.login((r) => {
      if (r.session) {
        dispatch({type: 'SET_USER', session: r.session, auth: true})
        getAudio(r.session.user.id, dispatch)
      } else {
        console.log('login cancel')
      }
    })
  }
}
