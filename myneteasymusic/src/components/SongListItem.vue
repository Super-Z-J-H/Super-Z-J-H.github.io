<template>
  <li class="song" @click="setCurrentSongId(songItem.id)">
    <div class="left" v-if="index">{{index}}</div>
    <div class="right">
      <div class="content">
        <div class="songname">{{songItem.name}}</div>
        <span class="sq" v-if="!index">SQ</span>
        <span
          v-if="songItem.song"
          class="singer"
        >{{songItem.song.artists[0].name}}-{{songItem.song.album.name}}</span>
        <span v-else-if="songItem.ar" class="singer">{{songItem.ar[0].name}}-{{songItem.al.name}}</span>
        <span v-else class="singer">{{songItem.name}}-{{songItem.album.name}}</span>

      </div>

      <div class="play">
        <i class="fa fa-play" aria-hidden="true"></i>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["songItem", "index"],
  methods: {
    setCurrentSongId(id) {
      this.$emit("translate-currentid", id);
    }
  }
};
</script>

<style lang="less">
li.song {
  border: 0.5px rgb(250, 247, 247) solid;
  position: relative;
  position: relative;
  padding-left: 10px;
  display: flex;
  text-align: left;
  height: 50px;

  .left {
    float: left;
    width: 40px;
    line-height: 50px;
    text-align: center;
    margin-left: -10px;
  }
  .right {
    float: left;
    flex: 1;
    .content {
      float: left;
      .songname {
        width: 270px;
        padding-bottom: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: normal;
      }
      .sq {
        font-size: 11px;
        color: rgb(212, 60, 51);
        border: rgb(212, 60, 51) 1px solid;
        margin-right: 3px;
      }
      .singer {
        font-size: 14px;
        color: rgb(187, 185, 185);
        // display: -webkit-box;
        width: 270px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: normal;
      }
    }
    .play {
      float: right;
      width: 23px;
      height: 23px;
      border: 1px rgb(153, 152, 152) solid;
      border-radius: 50%;
      position: absolute;
      right: 14px;
      bottom: 13px;
      i {
        margin-top: 5.5px;
        position: absolute;
        margin-left: 6.5px;
        color: rgb(153, 152, 152);
        font-size: 10px;
      }
    }
  }
}
</style>