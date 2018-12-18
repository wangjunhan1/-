<template>
   <div>
       <div class="banner" @click="handleBannerClick">
           <img class="banner-img" :src="bannerImg" />
           <div class="banner-info">
               <div class="banner-number">&#xe7b3;{{this.bannerImgs.length}}</div>
               <div class="banner-title">{{this.sightName}}</div>
           </div>
       </div>
       <fade-animation>
         <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallayClose"></common-gallary>
     </fade-animation>
   </div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallayClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary: CommonGallary,
    FadeAnimation: FadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 53.33%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      padding: 0 0 0 .2rem
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-number
        width: 1.2rem
        height: .4rem
        text-align: center
        line-height: .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        margin-left: .2rem
        font-family: "iconfont" !important
      .banner-title
        flex: 1
        font-size: .35rem
</style>
