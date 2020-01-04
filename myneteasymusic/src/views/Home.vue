<template>
  <div class="home">
    <ul class="nav">
      <li>
        <router-link to="/recommend">推荐音乐</router-link>
      </li>
      <li>
        <router-link to="/hot">热歌榜</router-link>
      </li>
      <li>
        <router-link to="/search">搜索</router-link>
      </li>
    </ul>
    <keep-alive>
      <router-view @translate-currentid="$emit('translate-currentid',$event)"></router-view>
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  components: {}
};
</script>

<style lang="less">
ul.nav {
  display: flex;
  border-bottom: 1px solid #e6e6e6;
  li {
    flex: 1;
    text-align: center;
    height: 41px;
    a {
      line-height: 40px;
      display: inline-block;
      &:active {
        background: none;
      }
      &.router-link-exact-active {
        color: red;
        border-bottom: 2px solid red;
      }
    }
  }
}
</style>
