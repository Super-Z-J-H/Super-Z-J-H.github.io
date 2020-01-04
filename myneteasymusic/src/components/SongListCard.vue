<template>
  <li class="card" @click="handlerCardClick(item)">
    <div class="thumb">
      <img :src="item.picUrl" />
      <span><i class="fa fa-headphones" aria-hidden="true"></i>{{comPlayCount(item.playCount)}}</span>
    </div>
    <div class="name">
        {{item.name}}
    </div>
  </li>
</template>
<script>
export default {
  props: {
    item: Object
  },
  methods: {
      comPlayCount(n){
      if (n > 99999999) {
        return (n / 100000000).toFixed(2) + "亿";
      }
      if (n > 9999) {
        return (n / 10000).toFixed(1) + "万";
      }
    },
    handlerCardClick(param) {
      window.console.log(param)
      this.$router.push({ path: "playlist", query: { carditem: param }});
    }
      }
  }

</script>

<style lang="less">
.thumb {
  position: relative;
  img {
    vertical-align: middle;
  }
  span {
    position: absolute;
    top: 5px;
    right: 5px;
    color: white;
    font-size: 10px;
    
  }
}

.name {
  display: -webkit-box;
  font-size: 13px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0 5px 10px 5px;
  text-align: left;
}
</style>