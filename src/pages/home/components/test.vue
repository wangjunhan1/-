<template>
    <div class="container">
      <div class="wrapper">
        <swiper>
          <swiper-slide :options="swiperOption">
            <img class="gallary-img" src="//img1.qunarzz.com/sight/p0/201309/25/70edd368471094bdc8d65eac.jpg_600x330_82e4e08f.jpg"/>
          </swiper-slide>
          <swiper-slide>
            <img class="gallary-img" src="//img1.qunarzz.com/sight/p0/201309/25/70edd368471094bdc8d65eac.jpg_600x330_82e4e08f.jpg"/>
          </swiper-slide>
          <swiper-slide>
            <img class="gallary-img" src="//img1.qunarzz.com/sight/p0/201309/25/70edd368471094bdc8d65eac.jpg_600x330_82e4e08f.jpg"/>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TestSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
    .container
      display: flex
      flex-direction: column
      justify-content: center
      z-index: 99
      position: fixed
      left: 0
      right: 0
      top: 0
      bottom: 0
      background: #000
      .wrapper
      //   overflow: hidden
      //   width: 100%
      //   height: 0
      //   padding-bottom: 100%
        .gallary-img
          width: 100%
</style>
