// The client ID is obtained from the Google Developers Console
// at https://console.developers.google.com/.
// If you run this code from a server other than http://localhost,
// you need to register your own client ID.
var OAUTH2_CLIENT_ID = '277028620383-50kagfrqakl618u4d9r73valj32iiauk.apps.googleusercontent.com';
var OAUTH2_SCOPES = [
  'https://www.googleapis.com/auth/youtube'
];

// // Attempt the immediate OAuth 2.0 client flow as soon as the page loads.
// // If the currently logged-in Google Account has previously authorized
// // the client specified as the OAUTH2_CLIENT_ID, then the authorization
// // succeeds with no user intervention. Otherwise, it fails and the
// // user interface that prompts for authorization needs to display.
// function checkAuth(dispatch) {
//   gapi.auth.authorize({
//     client_id: OAUTH2_CLIENT_ID,
//     scope: OAUTH2_SCOPES,
//     immediate: true
//   }, (authResult) => {
//     handleAuthResult(authResult, dispatch)
//   });
// }

// Handle the result of a gapi.auth.authorize() call.
function handleAuthResult(authResult, dispatch) {
  if (authResult && !authResult.error) {
    // Authorization was successful. Hide authorization prompts and show
    // content that should be visible after authorization succeeds.
    // loadAPIClientInterfaces();
    gapi.client.load('youtube', 'v3', () => {
      dispatch({
        type: 'SET_AUTH_YT',
        auth: true
      })
    });
  } else {
    // Make the #login-link clickable. Attempt a non-immediate OAuth 2.0
    // client flow. The current function is called when that flow completes.
    console.log('Youtobe not auth');
    dispatch({
      type: 'SET_AUTH_YT',
      auth: false
    })
  }
}

// Load the client interfaces for the YouTube Analytics and Data APIs, which
// are required to use the Google APIs JS client. More info is available at
// http://code.google.com/p/google-api-javascript-client/wiki/GettingStarted#Loading_the_Client
// function loadAPIClientInterfaces() {
//   gapi.client.load('youtube', 'v3', function () {
//     console.log("Youtobe auth");
//   });
// }


export function init(dispatch) {
  return (dispatch) => {
    // Attempt the immediate OAuth 2.0 client flow as soon as the page loads.
    // If the currently logged-in Google Account has previously authorized
    // the client specified as the OAUTH2_CLIENT_ID, then the authorization
    // succeeds with no user intervention. Otherwise, it fails and the
    // user interface that prompts for authorization needs to display.
    const checkAuth = () => {
      gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: true
      }, (authResult) => {
        handleAuthResult(authResult, dispatch)
      });
    }

    // Load the client interfaces for the YouTube Analytics and Data APIs, which
    // are required to use the Google APIs JS client. More info is available at
    // http://code.google.com/p/google-api-javascript-client/wiki/GettingStarted#Loading_the_Client
    gapi.load('client', () => {
      gapi.auth.init(function () {
        window.setTimeout(checkAuth, 1);
      });
    });
  };
}

export function login(dispatch) {
  return (dispatch) => {
    gapi.auth.authorize({
      client_id: OAUTH2_CLIENT_ID,
      scope: OAUTH2_SCOPES,
      immediate: false
    }, (authResult) => {
      handleAuthResult(authResult, dispatch)
    });
  };
}