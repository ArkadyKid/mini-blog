class service {
  constructor() {
    this.posts = [];
  }

  getPosts() {
    return this.posts;
  }

  getPost(index) {
    return this.posts[index];
  }

  getPostsFromLocalStorage() {
    this.posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [];
    return this.posts;
  }

  setPostsToLocalStorage(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  setFormToLocalStorage(title, summary, description) {
    const postObject = {
      title,
      summary,
      description,
      comments: [],
    };
    const newPosts = this.getPosts();
    newPosts.push(postObject);
    this.setPostsToLocalStorage(newPosts);
  }

  setCommentToLocalStorage(author, text, index) {
    const commentObject = {
      author,
      text,
    };
    const post = this.posts[index];
    post.comments.push(commentObject);
    this.setPostsToLocalStorage(this.posts);
  }

  editPost(index, newTitle, newSummary, newDescription) {
    this.posts[index].title = newTitle;
    this.posts[index].summary = newSummary;
    this.posts[index].description = newDescription;
    this.setPostsToLocalStorage(this.posts);
  }

  delPost(index) {
    this.posts.splice(index, 1);
    this.setPostsToLocalStorage(this.posts);
  }

  delComment(indexPost, indexComment) {
    const comments = this.posts[indexPost].comments;
    comments.splice(indexComment, 1);
    this.setPostsToLocalStorage(this.posts);
  }
}

export default new service();
