<template>
  <img alt="Vue logo" src="./assets/bg_trans_withSlogan_small.png">
  <HelloFicus msg="An Structure Editor For Everyone" style="font-size: 30px"/>
</template>

<script>
import HelloFicus from './components/HelloFicus.vue'

export default {
  name: 'App',  
  components: {
    HelloFicus
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
