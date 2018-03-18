<template>
  <div>
    <img v-bind:src="imagePath" class="w-100">
    <div class="container py-4">
      <h1 class="text-center">Tu Orden | Total ${{ price }} + Taxes</h1>
      <div id="ordenApp">
        <router-link to="/menu" class="btn btn-outline-primary">Agregar Platillos</router-link>
   
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
  </div>
</template>

<script>
 export default {
     name: 'Orden',
     data () {
	 return {
	     imagePath: '/static/img/orden.jpg'
	 }
     },
      computed:{
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
   deleteItem: function(item) {
       this.$store.dispatch('deleteItem',{
	 id: item.id
       });
     },
}
}

</script>