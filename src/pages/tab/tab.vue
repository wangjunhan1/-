<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/">
            <span class="tab-link">主页</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/detail/components/0002">
            <span class="tab-link">状态</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/detail/components/0001">
            <span class="tab-link">发现</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/wode/signed">
            <span class="tab-link">我的</span>
        </router-link>
    </div>
</template>

<script>
    export default {}
</script>
<style lang="stylus" scoped>
    .tab
      display: flex
      width: 100%
      height: 44px
      line-height: 44px
      font-size: 20px
      margin-bottom: 0px
      position : fixed
      bottom : 0
      left : 0 
      z-index: 9999
      background-color: #333
      border-radius: .3rem
      .tab-item
        flex: 1
        text-align: center
        .tab-link
          padding-bottom: 5px
          color: rgba(255, 255, 255, 0.5)
        &.router-link-active
          .tab-link
            color: #ffcd32
            border-bottom: 2px solid #ffcd32
</style>
