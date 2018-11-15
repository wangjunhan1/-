<template>
  <swiper :options="swiperOption">
    <swiper-slide>
    <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1810/fe/fd9c295c0e1a7602.jpg_750x200_11c8343f.jpg" />
    </swiper-slide>
    <swiper-slide>
    <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1807/78/0a6355bcbbf89502.jpg_750x200_fc738633.jpg" />
    </swiper-slide>
    <swiper-slide>
    <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1609/4d/3dc09bcc290f0c02.jpg_750x200_09c97d67.jpg" />
    </swiper-slide>

      <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {}
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper-img
    width: 100%
</style>
