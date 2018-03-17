<template>
    <div>
      <img v-bind:src="imagePath" class="w-100">
      <div class="container py-4">	
        <h1 class="text-center">Bienvenido</h1>
  <p>La historia detrás de cada platillo es la esencia de nuestra cocina, pasión por los sabores, por el arte, la creación y por la perfección absoluta.</p>
   <div class="card-deck mx-auto">
  <div class="card">
    <img v-bind:src="imagePath2">
    <div class="card-body">
      <h5 class="card-title">Menu</h5>
      <p class="card-text">Learn more about our delicious dishes and add them to your order. You can pick up your order when you visit us at our location.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Location</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Your Order</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
  </div>
 
    </div>
</template>

<script>
 export default {
     name: 'HomePage',
     data () {
	 return {
       imagePath: '/static/img/home.jpg',
       imagePath2: '/static/img/tamal.jpg'
	 }
     }
 }
</script>