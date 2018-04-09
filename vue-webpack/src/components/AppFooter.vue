<template>
 <!-- Footer -->
  <footer class="footer bg-primary">
    <div class="container text-center text-white">
      <div id="footerinfo" class="row">
        <div class="col-sm">
          <span class="align-middle h6">Made by Josue Lopez © 2018</span>
        </div>
        <div class="col-sm">
          <a href="https://github.com/lopze94/creativeproject4.git" class="btn btn-outline-light">Github</a>
        </div>
        <div class="col-sm">
          <span class="align-middle h6">{{ email }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
 export default {
     name: 'AppFooter',
     data () {
       return{
email: "info@culturabakery.com"
       }
       
     }
 }
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}

body {
  margin-bottom: 60px;
  /* Margin bottom by footer height */
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  /* Set the fixed height of the footer here */
  line-height: 60px;
  /* Vertically center the text there */
  background-color: #f5f5f5;
}
</style>
