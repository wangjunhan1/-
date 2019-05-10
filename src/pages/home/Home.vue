<template>
	<div>
		<home-header></home-header>
    <home-progress></home-progress>
		<home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <div class="und"></div>
    <!--<test-swiper></test-swiper>-->
	</div>
</template>

<script>
import HomeHeader from './components/header.vue'
import HomeSwiper from './components/swiper.vue'
import HomeIcons from './components/icons.vue'
import HomeRecommend from './components/recommend.vue'
import HomeWeekend from './components/weekend.vue'
import TestSwiper from './components/test.vue'
import HomeProgress from './components/progress.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons: HomeIcons,
    HomeRecommend: HomeRecommend,
    HomeWeekend: HomeWeekend,
    TestSwiper: TestSwiper,
    HomeProgress: HomeProgress
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted: function () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo: function () {
      axios.get('./api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .und
    height: 1rem
</style>
