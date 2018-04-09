<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <router-link to="/" class="nav-item nav-link"><img v-bind:src="imagePath" width="150px"></router-link>
     
  <div class="navbar" id="navbarNavAltMarkup">
    <div class="navbar-nav float-right">
      <router-link to="/" class="nav-item nav-link">Inicio</router-link>
      <router-link to="/menu" class="nav-item nav-link">Menu</router-link>
      <router-link to="/local" class="nav-item nav-link">Local</router-link>
      <router-link to="/orden" class="btn btn-outline-primary">Orden</router-link>
    </div>
  </div>
  </div>

</nav>
</template>

<script>
 export default {
     name: 'AppHeader',
     data () {
	 return {
	     imagePath: '/static/img/culturaLogo.svg'
	 }
     }
 
 }
</script>