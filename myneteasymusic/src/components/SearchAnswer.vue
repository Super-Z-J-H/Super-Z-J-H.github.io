<template>
  <!-- <li ></li> -->
  <div>
    <li v-if="type" class="answer">
      <span class="searchpic"></span>
      <span class="message">{{item.name}}</span>
      
    </li>
    <li v-else class="answer"> 
        <span class="searchpic"></span>
        <span class="message">{{item.name}}--{{item.artists[0].name}}</span>
      
    </li>
  </div>
</template>

<script>
export default {
  props: { item: Object,
  type:null }
};
</script>

<style lang="less">
li.answer {
  position: relative;
  // height: 35px;
  list-style: none;
  text-align: left;
  line-height: 20px;
  padding-bottom: 10px;
  .searchpic {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 8px;
    position: absolute;
    top: 5px;
    // padding-top: 10px;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg==");
  }
.message{
  display: inline-block;
  padding:0 25px;
}
}
</style>