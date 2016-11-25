export function createSearchList(length, dispatch) {
  dispatch({
    type: 'CREATE_SEARCH_LIST',
    length: length
  })
}