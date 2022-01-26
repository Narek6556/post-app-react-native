import {privateApi} from './index';

export const getPostsRequest = () => {
  return privateApi({
    method: 'get',
    url: 'posts',
    params: {
      showAll: true,
    },
  });
};

export const addNewPostRequest = data => {
  return privateApi({
    method: 'post',
    url: 'posts',
    data,
  });
};

export const editPostRequest = (id, data) => {
  return privateApi({
    method: 'put',
    url: `posts/${id}`,
    data,
  });
};

export const getPostRequest = id => {
  return privateApi({
    method: 'get',
    url: `posts/${id}`,
  });
};

export const deletePostRequest = id => {
  return privateApi({
    method: 'delete',
    url: `posts/${id}`,
  });
};
