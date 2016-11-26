// Create a private playlist.
export function createPlaylist(title, dispatch) {
  return (dispatch) => {
    var request = gapi.client.youtube.playlists.insert({
      part: 'snippet,status',
      resource: {
        snippet: {
          title: title,
          description: 'A private playlist created with VK to Youtobe converter'
        },
        status: {
          privacyStatus: 'private'
        }
      }
    });
    request.execute(function (response) {
      var result = response.result;
      if (result) {
        dispatch({
          type: 'CREATE_PLAYLIST',
          playlist: result
        })
      } else {
        console.log('Could not create playlist')
      }
    });
  }
}