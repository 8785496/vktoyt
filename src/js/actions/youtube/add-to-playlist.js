export function addToPlaylist(id, playlistId, itemId, next, /*startPos, endPos,*/ dispatch) {
  return (dispatch) => {
    var details = {
      videoId: id,
      kind: 'youtube#video'
    }
    
    // if (startPos != undefined) {
    //   details['startAt'] = startPos;
    // }
    // if (endPos != undefined) {
    //   details['endAt'] = endPos;
    // }

    var request = gapi.client.youtube.playlistItems.insert({
      part: 'snippet',
      resource: {
        snippet: {
          playlistId: playlistId,
          resourceId: details
        }
      }
    });
    request.execute(function (response) {
      // $('#status').html('<pre>' + JSON.stringify(response.result) + '</pre>');
      // console.log(response.result)
      dispatch ({
        type: 'ADD_PLAYLIST',
        id: itemId
      })

      next(++itemId)
    });
  }
}