const state = {
  posts: [],
};

const getters = {
  POSTS: state => {
    return state.posts;
  },
};

const mutations = {
  SET_POSTS: (state, payload) => {
    state.posts = payload;
  },
  SET_POST: (state, payload) => {
    state.posts.push(payload);
  },
};

const actions = {
  GET_POSTS: ({commit}) => {
    const posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [];
    commit('SET_POSTS', posts);
  },

  SET_POSTS_TO_LOCALSTORAGE: ({state}) => {
    localStorage.setItem('posts', JSON.stringify(state.posts));
  },

  SET_FORM_TO_LOCALSTORAGE: ({state, commit, dispatch}, payload) => {
    const postObject = {
      title: payload.title,
      summary: payload.summary,
      description: payload.description,
      comments: [],
    };
    commit('SET_POST', postObject);
    dispatch('SET_POSTS_TO_LOCALSTORAGE', state.posts);
  },

  SET_COMMENT_TO_LOCAL_STORAGE: ({state, dispatch}, payload) => {
    const commentObject = {
      author: payload.author,
      text: payload.text,
    };
    const post = state.posts[payload.index];
    post.comments.push(commentObject);
    dispatch('SET_POSTS_TO_LOCALSTORAGE', state.posts);
  },

  EDIT_POST: ({state, dispatch}, payload) => {
    state.posts[payload.index].title = payload.title;
    state.posts[payload.index].summary = payload.summary;
    state.posts[payload.index].description = payload.description;
    dispatch('SET_POSTS_TO_LOCALSTORAGE', state.posts);
  },

  DEL_POST: ({state, dispatch}, index) => {
    state.posts.splice(index, 1);
    dispatch('SET_POSTS_TO_LOCALSTORAGE', state.posts);
  },

  DEL_COMMENT: ({state, dispatch}, payload) => {
    const comments = state.posts[payload.index].comments;
    comments.splice(payload.indexComment, 1);
    dispatch('SET_POSTS_TO_LOCALSTORAGE', state.posts);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
