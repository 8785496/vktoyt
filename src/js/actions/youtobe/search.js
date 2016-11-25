export function search(q, id, dispatch) {
  return (dispatch) => {
    dispatch({
      type: 'SEARCH_ITEM_START',
      id: id,
      fetched: false,
      fetching: true
    })

    const reg = /[^0-9A-Za-zА-ЯЁа-яё]+/g
    const query = q.replace(reg, ' ')
    console.log('query = ', query)

    const request = gapi.client.youtube.search.list({
      q: query,
      part: 'snippet',
      maxResults: 1
    });

    request.execute(function (response) {
      if (response.result.items && response.result.items.length > 0) {
        dispatch({
          type: 'SEARCH_ITEM_COMPLETE',
          id: id,
          item: response.result.items[0]
        })
      } else {
        dispatch({
          type: 'SEARCH_ITEM_ERROR',
          id: id
        })
      }
    });
  }
}