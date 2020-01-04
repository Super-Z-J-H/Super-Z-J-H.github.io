<template>
  <div class="palylist" v-if="playlist">
    <div class="top">
      <div class="go-back" @click="$router.go(-1)">⬅</div>
      <!-- {{$route.query.carditem}} -->
      <!-- <hr /> -->

      <div class="backpic" :style="{backgroundImage:'url('+$route.query.carditem.picUrl+')'}"></div>
      <div class="content">
        <div class="pleft">
          <img :src="$route.query.carditem.picUrl" />
        </div>
        <div class="right">{{$route.query.carditem.name}}</div>
      </div>
    </div>
    <ul class="songlist">
      <template v-if="playlist">
        <SongListItem
          v-for="(item, index) in playlist.tracks"
          :key="index"
          :song-item="item"
          :index="index+1"
          @translate-currentid="$emit('translate-currentid',$event)"
        ></SongListItem>
      </template>
    </ul>
  </div>
</template>

<script>
import SongListItem from "@/components/SongListItem.vue";
export default {
  components: {
    SongListItem
  },
  data: function() {
    return {
      // playlistId: null
      playlist: null
    };
  },
  methods: {
    getPlayListDetail(id) {
      this.axios
        .get("https:API.kele8.cn/agent/musicapi.leanapp.cn/playlist/detail", {
          params: {
            id: id
          }
        })
        .then(reponse => {
          //   window.console.log(reponse.data);
          ({ playlist: this.playlist } = reponse.data);
        });
    }
  },
  created() {
    window.console.log("创建");
  },
  //   watch: {
  //       $route: function () {
  //           window.console.log(this.$route);
  //       }
  //   },
  beforeRouteEnter(to, from, next) {
    // window.console.log(to);
    // 路由进入 当前组件实例化之前就 拿数据
    // beforeRouteEnter 守卫 不能 访问 this，因为守卫在导航确认前被调用,因此即将登场的新组件还没被创建
    next(vm => {
      vm.getPlayListDetail(to.query.carditem.id);
    });
  }
};
</script>

<style lang="less">
.top {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 200px;
  .backpic {
    width: 360px;
    height: 168px;
    background-size: cover;
    background-position: center;
    transform: scale(1.5);
    filter: blur(20px);
    &::before {
      content: "";
      display: inline-block;
      width: 360px;
      height: 168px;
      background: rgba(0, 0, 0, 0.2);
      position: absolute;
      z-index: 0;
    }
  }
  .content {
    position: absolute;
    top: 40px;
    left: 20px;
    .pleft {
      float: left;
      img {
        width: 126px;
      }
    }
    .right{
      width: 50%;
      float: left;
      margin-left: 10px;
          font-size: 17px;
    line-height: 1.3;
    color: #fefefe;
    }
  }
}

.palylist {
  .go-back {
    text-align: left;
    padding-left: 10px;
    font-size: 25px;
    font-weight: bold;
    position: absolute;
    z-index: 2;
  }
}
</style>