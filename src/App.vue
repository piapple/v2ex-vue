<template>
  <div id="app">
    <top></top>
    <mainbody></mainbody>
  </div>
</template>

<script>
import top from "./component/top.vue";
import mainbody from "./component/mainbody.vue";
export default {

  data () {
    return {
      
    }
  },
  components:{top,mainbody}
}
</script>

<style>
*{
  padding: 0px;
  margin: 0px;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0 0 15px 0;
    font-weight: 400;
    color: #444;
    text-transform: none;
}
</style>
