const createPost = (username, body) => {
  return {
    username,
    body,
    createdAt: Date.now()
  };
};

export default createPost;
