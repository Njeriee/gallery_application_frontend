import { createStore } from "vuex";
import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com'

const store = createStore({
  // state
  state: {
    users : [],
    albums : [],
    userAlbum : [],
    currentUser : []
  },

  // getters
  getters:{
    getUsers: (state) => state.users,
    getAlbums: (state) => state.albums,
    getUserAlbum:(state) => state.userAlbum,
    getCurrentUser:(state) => state.currentUser
  }, 

  // mutations
  mutations: {
    // send fetched data to state
    setUsers(state, response){
      state.users = response
    },   
    setAlbums(state, response){
      state.albums = response
    },
    setCurrentUser(state,response){
      state.currentUser = response
    },
    setUserAlbum(state,response){
      state.currentUser.album = response      
    },
    setUserAlbumPhotos(state,response){
      state.userAlbum = response
    },
   
  },

  // actions
  actions: {
    // fetch users
    async fetchUsers({commit}) {
      const response = await axios.get(API_URL + '/users')
       commit("setUsers", response.data)
      },

    // fetch albums 
    async fetchAlbums({commit}) {
      const response = await axios.get(API_URL + '/albums')       
       commit("setAlbums", response.data)
    },      

    // fetch current user
    async fetchUser({commit},id) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);      
      console.log('hello')
      commit("setCurrentUser", response.data)
      console.log('user fetched')
    },

    // fetch current user albums
    async fetchUserAlbums({commit},userId) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
      commit("setUserAlbum", response.data)
    },
    async fetchPhotos({commit},albumId) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      commit("setUserAlbumPhotos", response.data)
      console.log('photos fetched')
    },
      
  },

  modules: {
   }

});

export default store;
