<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <ul>
      <li>
        <router-link to="/hello1">Hello World</router-link>
      </li>
      <li>
        <router-link to="/hello2">Hello World with params</router-link>
      </li>
      <li>
        <router-link to="/hello3">Hello World with HTTP</router-link>
      </li>
      <li>
        <router-link to="/hello4">Hello World with store</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
