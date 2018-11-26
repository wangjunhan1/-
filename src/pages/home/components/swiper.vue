<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1711/61/0af7f65988570e02.jpg_750x200_905350d6.jpg'
      },{
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1809/12/856f100069809e02.jpg_750x200_e3485a2b.jpg'
      },{
        id: '003',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1811/b4/ac00a771d74f5a02.jpg_750x200_a71cff60.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    .swiper-img
     width: 100%
</style>
