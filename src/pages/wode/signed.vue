<template>
    <div>
        <div class="wrap">
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"  :size="160"/>
        </div>
        <ul class="list-wrap">
            <li class="list"><a-icon type="rocket" /></li>
            <li class="list"><a-icon type="rocket" /></li>
            <li class="list"><a-icon type="rocket" /></li>
            <li class="list"><a-icon type="rocket" /></li>
            <li class="list"><a-icon type="rocket" /></li>
        </ul>
    </div>
</template>

<script>
    import { Avatar, Icon } from 'ant-design-vue'
    export default {
        components: {
            AAvatar: Avatar,
            AIcon: Icon
        }
    }
</script>
<style lang="stylus" scoped>
    .wrap
      text-align: center
      margin-top: 1rem
    .list-wrap
        margin-top:1.5rem
        width:100%
        height:300px
        .list
            margin-top:0.1rem
            height:1rem
            font-size:0.5rem
            line-height:1rem
            text-indent:0.15rem
            width:100%
            background-color:#F0F0F0
</style>