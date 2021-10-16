import { createStore } from 'vuex'
import todos from './modules/todos.js'
import signup from './modules/signup.js'
import snackbar from './modules/Snackbar.js'
import Menu from './modules/Menu.js'
import Menusuccess from './modules/Menusucess.js'
import Sidenav from './modules/Sidenav.js'
import Notes from './modules/Notes.js'


export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todos, signup, snackbar,Sidenav, Menu, Menusuccess, Notes
  }
})
