
import {FETCH_EXAMPLE} from '../constant';
const initialState = {
    users: {users: [], isLoading: false, isRejected: false},
}
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXAMPLE.LOADING:
    return {
      ...state,
      users: {isLoading: true, isRejected: false, },
    };
    case FETCH_EXAMPLE.SUCCESS:
    return {
      ...state,
      users: {users:action.payload,  isLoading: false, isRejected: false, },
    };
    case FETCH_EXAMPLE.ERROR:
    return {
      ...state,
      users: {users:action.payload, isLoading: false, isRejected: true, },
    };

  default:
    return state
  }
}
