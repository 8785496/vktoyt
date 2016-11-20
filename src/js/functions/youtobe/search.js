// // After the API loads, call a function to enable the search box.
// function handleAPILoaded() {
//   $('#search-button').attr('disabled', false);
// }

// Search for a specified string.
export function search() {
  // var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: 'ногу свело наши юные смешные голоса',
    part: 'snippet'
  });

  request.execute(function(response) {
    console.log(response.result);
    
    // var str = JSON.stringify(response.result);
    // $('#search-container').html('<pre>' + str + '</pre>');
  });
}