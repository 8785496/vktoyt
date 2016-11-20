import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { googleApiClientReady } from './functions/youtobe/auth'

function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'AIzaSyBp__evQ8Z17w1Z7nLmdaUgdx29Le3Syig',
    'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
    // clientId and scope are optional if auth is not required.
    'clientId': '277028620383-50kagfrqakl618u4d9r73valj32iiauk.apps.googleusercontent.com',
    'scope': 'profile',
  }).then(function () {
    // 3. Initialize and make the API request.
    googleApiClientReady()
    /*
    return gapi.client.people.people.get({
      resourceName: 'people/me'
    });
    */
  })
  /*
  .then(function(resp) {
    console.log(resp.result);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  })*/;
};
// 1. Load the JavaScript client library.
gapi.load('client', start);



ReactDOM.render(
  <App />,
  document.getElementById("root")
)