export function getAudio(ownerId, dispatch) {
  return (dispatch) => {
    VK.Api.call('audio.get', { owner_id: ownerId, count: 1000 }, function (r) {
      if (r.response) {
        // console.log(r)
        dispatch({
          type: 'GET_PLAYLIST',
          items: r.response
        })
      }
    })
  }
}