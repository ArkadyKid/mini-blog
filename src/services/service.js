class service {
  constructor() {
    this.posts = [];
  }

  getPosts() {
    return this.posts;
  }

  getPostsFromLocalStorage() {
    this.posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [];
    return this.posts;
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
    localStorage.setItem('posts', JSON.stringify(newPosts));
  }

  setCommentToLocalStorage(author, text, index) {
    const commentObject = {
      author,
      text,
    };
    const post = this.posts[index];
    post.comments.push(commentObject);
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }

  delPost(index) {
    this.posts.splice(index, 1);
    console.log(this.posts);
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }
}

export default new service();
