// // After the API loads, call a function to enable the search box.
// function handleAPILoaded() {
//   $('#search-button').attr('disabled', false);
// }

// Search for a specified string.
export function search(q, id, dispatch) {
  return (dispatch) => {
    dispatch({
      type: '',
      id: id
    })
    
    var request = gapi.client.youtube.search.list({
      q: q,
      part: 'snippet',
      maxResults: 1
    });

    request.execute(function (response) {
      console.log(response.result.items[0].snippet.title);

      // var str = JSON.stringify(response.result);
      // $('#search-container').html('<pre>' + str + '</pre>');
    });
  }

}