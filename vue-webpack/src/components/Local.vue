<template>
<div>
    <img v-bind:src="imageHead" class="w-100">
    
     <div class="container py-4">
        <h1 class="text-center">Contacto</h1>
         <div class="row">
    <div class="col col-lg-2 mr-5">
    

    <br>
    <h2>Email</h2>
    <p>{{ email }}</p>
    <h2>Phone</h2>
    <p>{{ phone }}</p>
    <h2>Address</h2>
    <p>{{ address }}<br>{{ city }}, {{ state }} {{ zipCode }}</p>
    <br>
    </div>
    <div class="col">
      <img v-bind:src="imagePath" class="w-100">
    </div>
  </div>
         
         
    </div>
</div>
   
</template>

<script>
 export default {
     name: 'Local',
     data () {
	 return {
         imageHead: '/static/img/localHead.jpg',
         imagePath: '/static/img/local.jpg',
                email: 'info@culturabakery.com',
       phone: '(801) 400-8794',
       address: '151 N University Ave',
       city: 'Provo',
       state: 'UT', 
       zipCode: '84601',

	 }
     }
 }
</script>
