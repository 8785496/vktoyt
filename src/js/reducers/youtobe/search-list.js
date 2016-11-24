export default function reducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_SEARCH_LIST':
      let list = new Array(action.length)
      list.fill({
        fetch: false,
        fetching: false
      })
      return list
    case 'ADD_SEARCH_LIST':
      return state
    default:
      return state
  }
}