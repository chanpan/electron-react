const initialState = {
    users: {users: [], isLoading: false, isRejected: false},
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EXAMPLE_LOADING':
    return {
      ...state,
      users: {isLoading: true, isRejected: false, },
    };
    case 'FETCH_EXAMPLE_SUCCESS':
    return {
      ...state,
      users: {users:action.payload,  isLoading: false, isRejected: false, },
    };
    case 'FETCH_EXAMPLE_ERROR':
    return {
      ...state,
      users: {users:action.payload, isLoading: false, isRejected: true, },
    };

  default:
    return state
  }
}
