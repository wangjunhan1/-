<template>
    <div class="header">
        <router-link to="/">
          <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
        <div class="header-title">城市选择</div>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style  lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    overflow: hidden
    background: $bgColor
    font-size: .32rem
    color: black
    line-height: $headerHeight
    .back-icon
      float: left
      width: .8rem
      text-align: center
      font-size: .32rem
      font-weight: bold
      color: black
    .header-title
      text-align: center
      margin: 0 1rem
</style>
