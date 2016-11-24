export default function reducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_SEARCH_LIST':
      let list = new Array(action.length)
      list.fill({
        fetched: false,
        fetching: false,
        error: null
      })
      return list
    case 'SEARCH_ITEM_START':
      return state.map((item, i) => {
        if (i !== action.id) {
          return item
        }
        return Object.assign({}, item, { fetching: true })
      })
    case 'SEARCH_ITEM_COMPLETE':
      return state.map((item, i) => {
        if (i !== action.id) {
          return item
        }
        return Object.assign({}, item, { fetching: false, fetched: true, item: action.item })
      })
    case 'SEARCH_ITEM_ERROR':
      return state.map((item, i) => {
        if (i !== action.id) {
          return item
        }
        return Object.assign({}, item, { fetching: false, fetched: false, error: 'not found' })
      })
    case 'ADD_PLAYLIST':
      return state.map((item, i) => {
        if (i !== action.id) {
          return item
        }
        return Object.assign({}, item, { saved: true })
      })
    default:
      return state
  }
}