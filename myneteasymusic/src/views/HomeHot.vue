<template>
  <ul>
    <SongListItem
      v-for="(item, index) in hotsong"
      :key="index"
      :song-item="item"
      :index="index+1"
      @translate-currentid="$emit('translate-currentid',$event)"
    ></SongListItem>
  </ul>
</template>

<script>
import SongListItem from "@/components/SongListItem.vue";

export default {
  data() {
    return {
      hotsong: []
    };
  },
  components:{
 SongListItem 

  },
  methods: {
    getHotsong() {
      this.axios
        .get("https:API.kele8.cn/agent/musicapi.leanapp.cn/top/list?idx=1")
        .then(response => {
            ({ tracks: this.hotsong } = response.data.playlist);
          window.console.log(this.hotsong);

        });
    },
  
  },
    created() {
      this.getHotsong();
      window.console.log("xxz");
    }
};
</script>

<style>
</style>