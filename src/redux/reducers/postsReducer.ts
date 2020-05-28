import { GET_POSTS } from './../types/postTypes';
const intialState = {
  posts: []
};
function postReducer(state: any, action: any) {
  switch (action) {
    case GET_POSTS:
      return {
        ...state
      };
  }
}
