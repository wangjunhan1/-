<template>
	<div class="icons">
		<div class="icon" v-for="item of iconList" :key="item.id">
			<div class="icon-img">
				<img class='icon-img-content' :src='item.imgUrl'/>
			</div>
			<p class="icon-content">{{item.content}}</p>
		</div>
	</div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        content: '恋爱咨询'
      },{
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        content: '婚姻咨询'
      },{
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        content: '亲子教育'
      },{
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        content: '人际关系'
      },{
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        content: '情绪压力'
      },{
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
        content: '职场心理'
      },{
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        content: '个人成长'
      },{
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
        content: '全部分类'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons
    overflow: hidden
    height: 0
    padding-bottom: 50%
    margin-top: .2rem
    .icon
      position: relative
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      overflow: hidden
      .icon-img
      	position: absolute
      	top: 0
      	left: 0
      	right: 0
      	bottom: .44rem
       box-sizing: border 
       padding: .1rem 
      	.icon-img-content
         display: block
         height: 100%
         width: 76.53%
         margin: 0 auto
      .icon-content
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>