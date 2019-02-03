<template>
  <div class="hello">
    globalCounter: {{ globalCounter }}
    <br>
    <button @click="add()">add to store</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class HelloWorld4 extends Vue {
  public costomers: any[] = [];
  public get globalCounter() {
    return this.$store.state.globalCounter;
  }

  private add() {
    this.$store.commit("globalAdd");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
