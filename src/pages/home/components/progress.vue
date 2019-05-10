<template>
  <div>
      <div class="progress">
        <a-progress type="circle" :percent="23" :width="280"/>  
      </div>      
      <div class="fit">体脂率</div>
  </div>
</template>

<script type="text/javascript">
    import { Progress } from 'ant-design-vue'

    export default {
        components: {
            AProgress: Progress
        }
    }    
</script>

<style lang="stylus" scoped>
    .progress
      margin-top: .8rem
      text-align: center
    .fit
      margin-top: .5rem
      height: .3rem
      font-size: .5rem
      line-height: .3rem
      text-align: center
</style>