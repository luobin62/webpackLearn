<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <Cpn/>
  </div>

</template>

<script>
import Cpn from "./Cpn.vue";
export default {
  name: "app",
  components:{
    Cpn
  },
  data() {
    return {
      message: 'haha'
    }
  }
}
</script>

<style scoped>
.title{
  color: black;
}
</style>