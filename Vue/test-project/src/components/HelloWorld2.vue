<template>
  <div class="hello">
    <button @click="add();">add 1</button>
    <button @click="add(2);">add 2</button>
    <br>
    <br>
    counter: {{ counter }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld2 extends Vue {
  counter = 1;
  info: any;

  add(v = 1) {
    this.counter += v;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
