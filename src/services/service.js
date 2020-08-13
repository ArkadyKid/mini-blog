class service {
  constructor() {
    this.posts = [];
  }
  getPosts() {
    return this.posts;
  }
  getPostsFromLocalStorage() {
    this.posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [];
  }
  setFormToLocalStorage(title, summary, description) {
    const postObject = {
      title,
      summary,
      description,
    };
    const localstorage = this.getPosts();
    localstorage.push(postObject);
    localStorage.setItem('posts', JSON.stringify(localstorage));
    if (localStorage.getItem('posts')) {
      this.posts = this.getPosts();
    }
  }
}

export default new service();
