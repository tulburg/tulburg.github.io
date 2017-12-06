<template>
  <div id="app">
    <div id="main">
      <Background/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Background from "@/components/Background"
export default {
  name: 'app',
  components : { Background }
}
</script>

<style src="./assets/css/main.css" />