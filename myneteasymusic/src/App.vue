<template>
  <div id="app">
    <keep-alive>
      <router-view @translate-currentid="currentSongId=$event" />
    </keep-alive>
    <PlayMusic v-if="currentSongId" :current-song-id="currentSongId"></PlayMusic>
  </div>
</template>

<script>
import PlayMusic from "@/views/PlayMusic.vue";
export default {
  data() {
    return {
      currentSongId: null
    };
  },
  components: { PlayMusic }

 
};
</script>
<style>
a {
  color: #2c3e50;
  text-decoration: none;
}

</style>
