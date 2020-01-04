<template>
  <div class="playmusic" v-if="currentSongDetail" :class="{paused:isPaused}">
    <audio :src="currentSongUrl" controls autoplay></audio>

    <div class="player-bar" @click="isShowFullScreen=true">
      <img :src="currentSongDetail.al.picUrl" alt />
      <h3>{{currentSongDetail.name}}</h3>
      <div class="play" @click.stop="pausedAudio">
        <i
          class="fa fa-play-circle play"
          aria-hidden="true"
          @click="pausedAudio"
          :class="{playing:isPaused}"
        ></i>
        <i
          class="fa fa-pause-circle pause"
          aria-hidden="true"
          @click="pausedAudio"
          :class="{pausing:!isPaused}"
        ></i>

        <canvas width="50" height="50"></canvas>
      </div>
    </div>
    <template v-if="isShowFullScreen">
      <div class="fulscreen" :style="{'background-image':`url(${currentSongDetail.al.picUrl})`}"></div>
      <div class="full">
        <div class="back" @click="isShowFullScreen=false">
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </div>
        <div class="round" :class="{pausedMove:isPaused}">
          <img :src="currentSongDetail.al.picUrl" :class="{paused:isPaused}" />
        </div>
        <div></div>
      </div>
      <div class="contral">
        <span>
          <i class="fa fa-random" aria-hidden="true"></i>
        </span>
        <span>
          <i class="fa fa-step-backward" aria-hidden="true"></i>
        </span>
        <span class="playAndPause">
          <i
            class="fa fa-play-circle play"
            aria-hidden="true"
            @click="pausedAudio"
            :class="{playing:isPaused}"
          ></i>
          <i
            class="fa fa-pause-circle pause"
            aria-hidden="true"
            @click="pausedAudio"
            :class="{pausing:!isPaused}"
          ></i>
        </span>

        <span>
          <i class="fa fa-step-forward" aria-hidden="true"></i>
        </span>
        <span>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </span>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: ["currentSongId"],
  data() {
    return {
      currentSongDetail: null,
      isPaused: false,
      isShowFullScreen: false,
      currentTime: 0,
      animationId: null
    };
  },
  computed: {
    currentSongUrl() {
      return (
        "https://music.163.com/song/media/outer/url?id=" +
        this.currentSongId +
        ".mp3"
      );
    }
  },
  methods: {
    getSongDetail() {
      this.axios
        .get("https://musicapi.leanapp.cn/song/detail?", {
          params: {
            ids: this.currentSongId
          }
        })
        .then(response => {
          this.currentSongDetail = response.data.songs[0];
          window.console.log(this.currentSongDetail);
        });
    },
    pausedAudio() {
      let audio = this.$el.querySelector("audio");
      // window.console.log(this.$el.querySelector("audio"))
      if (this.isPaused) {
        //  this.drawcricle();
        audio.play();
      } else {
        audio.pause();
      }
      this.isPaused = audio.paused;
    },
    drawcricle() {
      let canvas = this.$el.querySelector("canvas");
      let ctx = canvas.getContext("2d");
      let audio = this.$el.querySelector("audio");

      // this.currentTime=audio.currentTime
      // ctx.fillRect(0,0,20,20)
      let width = canvas.width,
        height = canvas.height;
      if (window.devicePixelRatio) {
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        canvas.height = height * window.devicePixelRatio;
        canvas.width = width * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
      this.animationId = setInterval(() => {
        this.currentTime = audio.currentTime * 1000;

        ctx.clearRect(0, 0, 50, 50);
        ctx.beginPath();
        ctx.arc(14.5, 18, 12.5, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.strokeStyle = "black";

        ctx.stroke();
        ctx.beginPath();
        ctx.arc(
          14.5,
          18,
          12.5,
          (-1 / 2) * Math.PI,
          2 * Math.PI * (this.currentTime / this.currentSongDetail.dt) -
            (1 / 2) * Math.PI
        );
        // ctx.closePath();
        ctx.strokeStyle = "red";
        ctx.stroke();
        // window.console.log(this.currentTime / this.currentSongDetail.dt);
      }, 500);
    }
  },
  created() {
    this.getSongDetail();
  },

  watch: {
    currentSongId: function() {
      this.getSongDetail();
    }
  },
  updated() {
    window.clearInterval(this.animationId);

    this.drawcricle();
  }
};
</script>
<style lang="less">
.playmusic {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  .player-bar {
    display: flex;
    height: 60px;
    background: rgba(255, 255, 255, 0.9);
    line-height: 60px;
    img {
      width: 44px;
      height: 44px;
      float: left;
      margin-top: 8px;
      margin-left: 5px;
      border-radius: 50%;
      animation: rolling 4s linear infinite;
    }
    @keyframes rolling {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
    h3 {
      display: inline-block;
      margin: 0 20px;

      flex: 1;
    }
    .play {
      float: right;
      width: 50px;
      margin-right: 30px;
      canvas {
        position: absolute;
        bottom: 0;
        // right: 5;
      }
      i {
        font-size: 22px;
        position: absolute;
        // bottom: 0;
        margin-top: 17px;
        margin-left: 3.5px;
        color: rgb(153, 152, 152);
        opacity: 0;
        &.playing {
          opacity: 1;
        }
        &.pausing {
          opacity: 1;
        }
      }
    }
  }
  audio {
    width: 100%;
    height: 60px;
  }
  &.paused {
    img {
      animation-play-state: paused;
    }
  }

  .fulscreen {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    transform: scale(1.5);
    background-position: center;
    filter: blur(20px);
    &::before {
      content: "";
      display: block;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.25);
    }
  }
  .full {
    position: absolute;
    top: 200px;
    z-index: 5;
    width: 100vw;

    .back {
      width: 100vw;
      color: white;
      position: absolute;
      top: -45px;
      left: 20px;
      font-size: 25px;
    }
    .round {
      background: url("/disc.png") no-repeat;
      background-size: 85%;
      background-position: center;
      width: 250px;
      height: 250px;
      margin: 0 auto;
      position: relative;
      &::before {
        content: "";
        display: inline-block;
        width: 50px;
        height: 100px;
        background: url("/needle-ip6.png") no-repeat;
        background-size: 100%;
        background-position: center;
        position: absolute;
        right: 80px;
        top: -33px;
        transform-origin: 0 0;
        transition: all 0.5s;
      }
      img {
        display: block;
        width: 130px;
        animation: myrolling 7s linear infinite;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        margin-top: -65px;
        left: 50%;
        margin-left: -65px;
        &.paused {
          animation-play-state: paused;
        }
      }
      &.pausedMove {
        &::before {
          transform-origin: 0 0;
          transform: rotate(-30deg);
          transition: transform 0.5s;
        }
      }
    }

    @keyframes myrolling {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  .contral {
    width: 100vw;
    height: 36px;
    text-align: center;
    font-size: 24px;
    position: absolute;
    top: 680px;
    color: white;
    font-weight: 100;
    display: flex;
    span {
      flex: 1;
      &.playAndPause {
        position: relative;
        font-size: 45px;
        .play {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left: -17px;
          margin-top: -25px;
          opacity: 0;

          &.playing {
            opacity: 1;
          }
        }
        .pause {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left: -17px;
          margin-top: -25px;
          opacity: 0;

          &.pausing {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>