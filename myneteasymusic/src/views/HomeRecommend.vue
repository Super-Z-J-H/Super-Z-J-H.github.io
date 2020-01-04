<template>
  <div class="commend">
    <HomeTitle>推荐菜单</HomeTitle>
    <!-- <div class="commendlist"></div> -->
    <ul class="list">
      <SongListCard
        v-for="(item, index) in personalized"
        :key="index"
        :item="item"
      ></SongListCard>
    </ul>
    <HomeTitle>最新音乐</HomeTitle>
    <ul>
    <SongListItem  v-for="(item, index) in newsong"
      :key="index"
      :song-item="item"
      :index="0" @translate-currentid="$emit('translate-currentid',$event)"></SongListItem>
    </ul>
  </div>
</template>

<script>
import HomeTitle from "@/components/HomeTitle.vue";
import SongListCard from "@/components/SongListCard.vue";
import SongListItem from "@/components/SongListItem.vue";

export default {
  name: "HomeRecommend",
  data() {
    return {
      personalized: [],
      newsong: []
    };
  },
  components: {
    HomeTitle,
    SongListCard,
    SongListItem
  },
  methods: {
   getPersonalized() {
      this.axios
        .get("https:API.kele8.cn/agent/musicapi.leanapp.cn/personalized?limit=6")
        .then(response => {
          ({ result: this.personalized } = response.data);
          // window.console.log(response.data)
        });
    },
    getNewsong() {
      this.axios
        .get("https:API.kele8.cn/agent/musicapi.leanapp.cn/personalized/newsong")
        .then(response => {
          // window.console.log(response),
          ({ result: this.newsong } = response.data);
        });
    }
  },
  created() {
    this.getPersonalized(), this.getNewsong();
  }
};
</script>

<style lang="less">
ul.list {
  display: flex;
  flex-wrap: wrap;
  li.card {
    flex: 1 0 30%;
    &:nth-child(3n + 2) {
      margin: 0 5px;
    }
  }
}
</style>
