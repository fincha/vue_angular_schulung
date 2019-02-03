<template>
  <div class="hello">
    Einfache Click Events:
    <button @click="add();">add 1</button>
    <br>
    counter: {{ counter }}
    <br>
    <br>Statische Props:
    <counter counter="5"></counter>
    <br>Dynamische Props:
    <counter :counter="counter"></counter>
    <br>Dynamische Props mit Fehler:
    <counter2 :counter="counter"></counter2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Counter from "./Counter.vue";
import Counter2 from "./Counter2.vue";

@Component({
  components: {
    Counter,
    Counter2
  }
})
export default class HelloWorld extends Vue {
  counter = 1;

  add() {
    this.counter += 1;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
