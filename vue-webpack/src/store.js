import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    items: [],
    menulist: [
      { id: 0, name: "Chuchito", price: "2.99", quantity: 0, url: "/static/menu/chuchito.jpg", ordered: false },
      { id: 1, name: "Tamal", price: "4.99", quantity: 0, url: "/static/menu/tamal.jpg", ordered: false },
      { id: 2, name: "Tostada", price: "1.99", quantity: 0, url: "/static/menu/tostada.jpg", ordered: false },
      { id: 3, name: "Arroz con Leche", price: "2.49", quantity: 0, url: "/static/menu/arroz.jpg", ordered: false },
      { id: 4, name: "Churrasco", price: "9.99", quantity: 0, url: "/static/menu/churrasco.jpg", ordered: false }
    ]
  },
  getters: {
    items: state => state.items,
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
  },
  actions: {
     getItems(context) {
      console.log("getting items");
      axios.get("/api/items").then(response => {
	context.commit('setItems', response.data);
	return true;
      }).catch(err => {
      });
    },
    addItem(context, item) {
      let id = item.id;
   //   console.log(id);
      axios.post("/api/items", item).then(response => {
	return context.dispatch('getItems');
      }).catch(err => {
      });
    },
    updateItem(context, order) {
      axios.put("/api/items/" + order.id).then(response => {
        return context.dispatch('getItems');
      }).catch(err => {
      });
    },
    deleteItem(context, order) {
      axios.delete("/api/items/" + order.id).then(response => {
        return context.dispatch('getItems');
      }).catch(err => {
      });
    }
  }
});
