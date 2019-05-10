<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			健康办公每一天
		</div>
		<router-link to='/city'>
			<div class="header-right">
				{{this.$store.state.city}}
				<span class="iconfont arrow-icon">&#xe64a;</span>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
	.header
		@import '~styles/varibles.styl'
		display: flex
		line-height: $headerHeight
		background: $bgColor
		color: black
		.header-left
			width: .64rem
			float: left
			.back-icon
				text-align: center
				font-size: .4rem
		.header-input
			flex-grow: 1
			height: .62rem
			line-height: .62rem
			margin-top: .12rem
			margin-left: .2rem
			padding-left: .2rem
			background: #fff
			border-radius: .1rem
			color: black
			text-align: center
		.header-right
			width: 1.24rem
			float: right
			text-align: center
			color: black
			.arrow-icon
				margin-left: -.04rem
				font-size: .2rem

</style>
