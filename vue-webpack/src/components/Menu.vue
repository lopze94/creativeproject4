<template>
  <div>
    <img v-bind:src="imagePath" class="w-100">
    <div class="container py-4">
      <div class="row">
        <div class="col">
          <h1 class="text-center">Menu</h1>
          <div class="card border-0 text-white my-2" v-for="(item) in menulist" v-bind:key="item.id">
            <img class="card-img" alt="Card image" v-bind:src="item.url" />
            <div class="card-img-overlay">
              <div class="row">
                <div class="col">
                  
                  <h5 class="card-title">{{ item.name }}
                    <span class="badge badge-light ml-2 py-2">${{item.price}}</span>
                  </h5>
                </div>
                <div class="col text-right">
                  <button v-bind:id="item.id" class="btn btn-outline-light" v-on:click="addItem(item)">Ordenar</button>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <div class="col">
         <h1 class="text-center">Tu Orden</h1>
          <div class="card border-0 text-white my-2" v-for="(order) in items" >
            <img class="card-img" alt="Card image" v-bind:src="order.url" />
            <div class="card-img-overlay">
              <div class="row">
                <div class="col">
                  
                  <h5 class="card-title">{{ order.name }}
                    <span class="badge badge-light ml-2 py-2">{{order.quantity}}</span>
                  </h5>
                </div>
                <div class="col text-right">
              
                  <button class="btn btn-outline-light" v-on:click="deleteItem(order)">Cancelar</button>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <h1 class="text-center"> Total ${{ price }} + Taxes</h1>
    </div>
     
  </div>
</template>

<script>
export default {
  name: 'Orden',
  data () {
	return {
    id: '',
    name: '',
    quantity: '',
    url: '',
    imagePath: '/static/img/menu.jpg',
	  }
  },
  computed:{
    menulist: function(){
      const menu = this.$store.state.menulist;      
      return menu;
    },
     items: function() {
       return this.$store.getters.items;
     },
     price: function(){
       let temp = this.$store.getters.items;
       let mult = 0;
       for (let index = 0; index < temp.length; index++) {
         let q = temp[index].quantity;
         let p = parseFloat(temp[index].price);
         mult += q*p;
         
       }
       return mult.toFixed(2);
       
     }
  },
     created: function() {
     this.getItems();
   },
 methods:{
    getItems: function() {
       this.$store.dispatch('getItems');
     },
 addItem: function(itm) {
   let tempID = itm.id;
   let temp = this.$store.getters.items;
   function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey) {
            return true;
        }
    };
}

let resultObject = search(tempID, temp);
console.log(resultObject);
if (resultObject === true)
{
  console.log("duplicate");
  this.$store.dispatch('updateItem', itm);
}
else
{
 this.$store.dispatch('addItem', itm);
}   
     
  },
  
   deleteItem: function(item) {
       this.$store.dispatch('deleteItem',{
	 id: item.id
       });
     },
}
}
</script>


