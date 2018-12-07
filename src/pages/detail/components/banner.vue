<template>
   <div>
       <div class="banner">
           <img class="banner-img"src="//img1.qunarzz.com/sight/p0/201309/25/70edd368471094bdc8d65eac.jpg_600x330_82e4e08f.jpg" />
           <div class="banner-info">
               <div class="banner-number"><span class="banner-number-span">&#xe7b3;</span>8</div>
               <div class="banner-title">临安湍口众安氡温泉</div>
           </div>
       </div> 
       <common-gallary></common-gallary>
   </div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
export default {
    name: 'DetailBanner',
    components: {
        CommonGallary: CommonGallary
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
      .banner-title
        flex: 1
        font-size: .35rem
</style>