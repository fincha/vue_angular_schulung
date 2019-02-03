<template>
  <div class="hello">
    <button @click="add();">http call</button>
    <br>
    <u>
      <li v-for="item in info" :key="item.code">
        {{ item.code }} {{ item.rate }}
        <span v-html="item.symbol"></span>
      </li>
    </u>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class HelloWorld3 extends Vue {
  public info = [];

  add() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response: any) => (this.info = response.data.bpi));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
