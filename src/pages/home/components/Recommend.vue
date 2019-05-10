<template>
	<div>
		<div class="recommend-title"></div>
		<ul>
			<li class="item border-bottom" v-for="item of list">
				<img class="item-img" :src="item.imgUrl"/>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-content">{{item.content}}</p>
					<a class="item-button" href="https://m.yidianling.com/ceshi/1760">查看详情</a>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
      recommendList: [{
        id: '00001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/b6/662fc49d1d26a5a7775cf6b7f8b4ecec.water.jpg_200x200_7dec115f.jpg',
        title: '杭州野生动物世界',
        content: '帅的人都去过了😎，你还等什么~'
      }, {
        id: '00002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201212/18/f195032e85740a4b93835fbb.jpg_200x200_77761d11.jpg',
        title: '杭州海底世界',
        content: '这里最近很火哦，好多人都在点评它呢！'
      }, {
        id: '00003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/95/95db58d0da425616.water.jpg_200x200_631da622.jpg',
        title: '杭州动物园',
        content: '嘟嘟嘟'
      }, {
        id: '00004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/28/288fbeccc335f774a3.img.jpg_200x200_4a81bde9.jpg',
        title: '印象西湖',
        content: '帅的人都去过了😎，你还等什么~'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
   height: .5rem
   margin-top: 0.2rem
   line-height: .8rem
   text-indent: .2rem
   font-size: .3rem
   background: #d0d0d0
   font-weight: bold
  .item
   overflow: hidden
   display: flex
   height: 1.9rem
   .item-img
    width: 1.9rem
    height: 1.7rem
    padding: .1rem
   .item-info
    flex: 1
    padding: .1rem
    min-width: 0
    .item-title
     line-height: .54rem
     font-size: .32rem
     ellipsis()
    .item-content
     line-height: .5rem
     color: #ccc
     ellipsis()
    .item-button
     background: #46A3FF
     padding: 0 .1rem
     border-radius: .06rem
     margin-top: .2rem
     color: #fff
     line-height: .44rem
     width: 77px
     height: 30px
     font-size: .25rem
     font-weight: bold
</style>
