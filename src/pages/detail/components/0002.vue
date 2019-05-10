<template>
    <div class="wrap">
        <div class="header">
            <div class="header-left">
              <router-link to="/">
                <div class="iconfont back-icon">&#xe624;</div>
              </router-link>
            </div>
            <div class="title">基本数据</div>            
        </div>
        <div class="allN">
            <div class="number1">
                <span>您的身高：</span><span class="high">&nbsp&nbsp181CM</span>
            </div>
            <div class="number">
                <span>您的体重：</span><a-progress class="prg" :percent="75" :format="percent => `${percent}KG`" :strokeWidth="20"/>
            </div>
            <div class="number">
                <span>您的体脂：</span><a-progress class="prg" :percent="20" :strokeWidth="20" status="active" />
            </div>
            <div class="number">
                <span>肥胖程度：</span><a-progress class="prg" :percent="27" :strokeWidth="20" status="active"/>
            </div>
            <div class="number">
                <span>您的坐姿合格度：</span><a-progress class="prg" :percent="37" :strokeWidth="20" status="active" />
            </div>
            <div class="number">
                <span>否达到坐姿要求：</span><a-progress class="prg" :percent="100" :strokeWidth="20" status="exception" />
            </div>
            <div class="number">
                <span>是否达到对应健康标准:</span><a-progress class="prg" :percent="100" :strokeWidth="20" status="exception" />
            </div>
            <div class="ts">体脂小于20%:合格；20%——50%：微胖；50%——80%：肥胖</div>
        </div>
    </div>
</template>

<script>
    import { Progress } from 'ant-design-vue'
    export default {
      name: 'Second',
      components: {
        AProgress: Progress
      }
    }
</script>

<style lang="stylus" scoped>
.wrap
  background-color: #CCCCFF
  .header
    display: flex
    line-height: .5rem
    background: white
    color: black
    font-size: .5rem
    padding: .2rem 0
    .header-left
      width: .7rem
      float: left
      .back-icon
        text-align: center
    .title
      margin-left: 1.8rem
  .allN
    font-size: .4rem
    font-weight: bold
    padding: 0 .2rem
    .number1
      margin-top: .7rem
    .number
      margin-top: .7rem
      .high
        margin-left: 4rem
        color: #46A3FF
      .prg
        margin-top: .7rem
  .ts
    margin-top: .7rem
    color: #BEBEBE
    font-size: .3rem
</style>