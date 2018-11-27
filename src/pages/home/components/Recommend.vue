<template>
	<div>
		<div class="recommend-title">热销推荐</div>
		<ul>
			<li class="item border-bottom">
				<img class="item-img" src="http://img1.qunarzz.com/sight/p0/1411/b6/662fc49d1d26a5a7775cf6b7f8b4ecec.water.jpg_200x200_7dec115f.jpg"/>
				<div class="item-info">
					<p class="item-title">杭州野生动物世界</p>
					<p class="item-content">帅的人都去过了😎，你还等什么~</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeRecommend'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
   margin-top: 0.2rem
   background: #BEBEBE
   line-height: .8rem
   text-indent: .2rem
  .item
   overflow: hidden
   display: flex
   height: 1.9rem
  	.item-img
  	 width: 1.7rem
  	 height: 1.7rem
  	 padding: .1rem
  	.item-info
  		flex: 1
  		padding: .1rem
  		.item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()          
  		.item-content
        line-height: .4rem
        color: #ccc
        ellipsis()   
  		.item-button  
        background: #ff9300
        padding: 0 .1rem
        border-radius: .06rem
        margin-top: .16rem
        color: #fff
        line-height: .44rem
</style>
