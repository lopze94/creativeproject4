<template>
    <div id="app">
	<app-header></app-header>
	<router-view/>
    <app-footer></app-footer>

    </div>
    
</template>

<script>
 import AppHeader from './components/AppHeader.vue'
 import AppFooter from './components/AppFooter.vue'
 export default {
     name: 'App',
     components: { AppHeader, AppFooter }
 }
</script>

<style lang="scss">
@import './styles/custom-bootstrap.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>