// Define some variables used to remember state.
var playlistId, channelId;

// // After the API loads, call a function to enable the playlist creation form.
// function handleAPILoaded() {
//   enableForm();
// }

// // Enable the form for creating a playlist.
// function enableForm() {
//   $('#playlist-button').attr('disabled', false);
// }

// Create a private playlist.
export function createPlaylist(dispatch) {
  return (dispatch) => {
    var request = gapi.client.youtube.playlists.insert({
      part: 'snippet,status',
      resource: {
        snippet: {
          title: 'Test Playlist',
          description: 'A private playlist created with the YouTube API'
        },
        status: {
          privacyStatus: 'private'
        }
      }
    });
    request.execute(function (response) {
      var result = response.result;
      if (result) {
        playlistId = result.id;
        dispatch({
          type: 'CREATE_PLAYLIST',
          playlist: result
        })
        console.log('playlist', result);
        //   $('#playlist-id').val(playlistId);
        //   $('#playlist-title').html(result.snippet.title);
        //   $('#playlist-description').html(result.snippet.description);
      } else {
        // $('#status').html();
        console.log('Could not create playlist')
      }
    });
  }
}