<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
      <a class="navbar-brand" href="#"><img v-bind:src="imagePath" width="150px"></a>
  </button>
  <div class="navbar" id="navbarNavAltMarkup">
    <div class="navbar-nav float-right">
      <router-link to="/culturabakery" class="nav-item nav-link">Home</router-link>
      <router-link to="/menu" class="nav-item nav-link">Menu</router-link>
      <router-link to="/location" class="nav-item nav-link">Location</router-link>
      <router-link to="/order" class="btn btn-outline-primary">Order</router-link>
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