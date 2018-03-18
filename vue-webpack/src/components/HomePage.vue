<template>
    <div>
      <img v-bind:src="imagePath" class="w-100">
      <div class="container py-4">	
        <h1 class="text-center">Bienvenido</h1>
  <p>La historia detrás de cada platillo es la esencia de nuestra cocina, pasión por los sabores, por el arte, la creación y por la perfección absoluta.</p>
   <div class="card-deck">
  <div class="card">
    <img v-bind:src="imagePath1">
    <div class="card-body">
      <h5 class="card-title">Menu</h5>
      <p class="card-text">Explora nuestros deliciosos platillos y agregalos a tu orden. Puedes enviar tu orden, nosotros la preparamos, y tu la recoges cuando nos visites.</p>
  <router-link to="/menu" class="btn btn-outline-primary">Ver Menu</router-link>
    </div>
  </div>
  <div class="card">
    <img v-bind:src="imagePath2">
    <div class="card-body">
      <h5 class="card-title">Local</h5>
      <p class="card-text">Visitanos en nuestro local ubicado en Provo, Utah.</p>
      <router-link to="/local" class="btn btn-outline-primary">Contacto</router-link>
    </div>
  </div>
  <div class="card">
    <img v-bind:src="imagePath3">
    <div class="card-body">
      <h5 class="card-title">Tu Orden</h5>
      <p class="card-text">Agrega platillos a tu orden y nosotros la prepararemos por ti. Visitanos para recoger tu orden.</p>
      <router-link to="/orden" class="btn btn-outline-primary">Ver Orden</router-link>
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
       imagePath1: '/static/img/tamal.jpg',
       imagePath2: '/static/img/location.jpg',
       imagePath3: '/static/img/order.jpg'
	 }
     }
 }
</script>