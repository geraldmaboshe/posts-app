import { GET_POSTS } from './../types/postTypes';

function postActions(payload: any) {
  return {
    type: GET_POSTS,
    posts: payload
  };
}
