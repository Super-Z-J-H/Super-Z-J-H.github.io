<template>
  <div class="hot">
    <label class="searchm">
      <input
        type="text"
        v-model="inputsearch"
        placeholder="搜索歌曲、歌手、专辑"
        @keyup.enter="getmultimatch();inputsearch()"
      />
      <!-- <button @click="searchmusic">搜索</button> -->
      <span class="reset" @click="inputsearch=null"></span>
    </label>

    <div class="multimatch" v-if="orders">
      <template v-if="orders.artist">
        <div
          class="artist"
          v-for="(item) in orders.artist"
          :key="item.id"
          @click="$router.push('/artist?id='+item.id)"
        >
          <img :src="item.picUrl" alt />
          <h5>歌手: {{item.name}}</h5>
          <span>></span>
        </div>
      </template>
      <template v-if="orders.mv">
        <div class="mv" v-for="(item) in orders.mv" :key="item.id">
          <img :src="item.cover" alt />
          <h5>
            <p>MV: {{item.name}}</p>
            <p>{{item.artistName}}</p>
          </h5>
          <span>></span>
        </div>
      </template>
    </div>

    <ul v-if="orders">
      <SongListItem v-for="(item) in answers.songs" :key="item.id" :songItem="item" @translate-currentid="$emit('translate-currentid',$event)"></SongListItem>
    </ul>

    <ul class="answer" v-if="answers&&!orders">
      <p class="searchletter">
        搜索
        <span>"{{this.inputsearch}}"</span>
      </p>
      <SearchAnswer
        v-for="(item,index) in answers.artists"
        :key="index"
        :type="answers.artists"
        :item="item"
      ></SearchAnswer>
      <SearchAnswer v-for="(item) in answers.songs" :key="item.id" :item="item"></SearchAnswer>
    </ul>
    <ul class="hot" v-if="!inputsearch&&!orders">
      <P>热门搜索</P>
      <HotSearch v-for="(item, index) in hotmusic" :key="index" :item="item"></HotSearch>
    </ul>
  </div>
</template>

<script>
import HotSearch from "@/components/HotSearch.vue";
import SearchAnswer from "@/components/SearchAnswer.vue";
import SongListItem from "@/components/SongListItem.vue";

export default {
 
  components: { HotSearch, SearchAnswer,SongListItem },
  data() {
    return {
      hotmusic: [],
      inputsearch: null,
      orders: null,
      answers: null
    };
  },

  methods: {
    // 热门搜索
    getHomeSearch() {
      this.axios.get("http://musicapi.leanapp.cn/search/hot").then(response => {
        ({ hots: this.hotmusic } = response.data.result);
        // window.console.log(this.hotmusic);
      });
    },
    // 多重搜素
    getmultimatch() {
      this.axios
        .get("https:API.kele8.cn/agent/music.kele8.cn/search/multimatch", {
          params: {
            keywords: this.inputsearch
          }
        })
        .then(response => {
          ({ result: this.orders } = response.data);
          // window.console.log(this.orders);
        });
    }
  },
  watch: {
    inputsearch() {
      // this.searchcontent = this.search;
      // window.console.log(this.searchcontent);

      this.axios
        .get("http://musicapi.leanapp.cn/search/suggest", {
          params: {
            keywords: this.inputsearch,
            type: "mobile"
          }
        })
        .then(reponse => {
          // window.console.log(reponse.data);
          ({ result: this.answers } = reponse.data);
          window.console.log(this.answers.songs);
          // ({ artists: this.artists } = reponse.data.result);
        });
      this.answers = null;
    }
  },
  created() {
    this.getHomeSearch();
  }
};
</script>

<style lang="less">
.hot {
  padding: 0 10px;

  .multimatch {
    margin-top: 20px;
    div {
      border-bottom: 1px solid gray;

      display: flex;
      padding: 5px 10px;
      img {
        height: 60px;
      }
      h5 {
        padding: 0 10px;
        flex: 1;
      }
      span {
        width: 20px;
      }
    }
  }
  .searchm {
    top: 15px;
    position: relative;
    input {
      width: 100%;
      height: 30px;
      border: 1px solid gray;
      border-radius: 15px;
      outline: none;
      padding: 0 30px;
    }
    &::before {
      content: "";
      width: 14px;
      height: 14px;
      position: absolute;
      top: 5px;
      left: 8px;
      background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg==");
    }
    .reset {
      height: 15px;
      width: 15px;
      position: absolute;
      top: 5px;
      right: 10px;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyOCI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjYmNiZGJkIiBkPSJNMTQgMGM3LjczMiAwIDE0IDYuMjY4IDE0IDE0cy02LjI2OCAxNC0xNCAxNFMwIDIxLjczMiAwIDE0IDYuMjY4IDAgMTQgMHoiLz48cGF0aCBkPSJNMTkgOUw5IDE5TTkgOWwxMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWJlY2ViIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PC9nPjwvc3ZnPg==");
    }
  }
  ul.answer {
    margin-top: 10px;
    width: 100%;
    padding: 10px 20px;
    // margin: 0 auto;
    // height: 300px;
    .searchletter {
      color: blue;
      height: 30px;
    }
  }
  ul.hot {
    // margin-top: 20px;
    p {
      margin: 10px 8px;
    }
    margin-top: 30px;
  }
}
</style>