<template>
  <div class="hello">
    ===={{ counter }}====
    <button @click="add()">add</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Counter2 extends Vue {
  @Prop() public counter: number;

  add() {
    this.counter += 1;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
