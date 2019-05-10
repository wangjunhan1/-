<template>
    <div class="wrap">
        <div class="usn">
            用户:<input class="inp" type="text" name="userName" />
        </div>
        <div class="usp">
            密码:<input class="inp" type="password" name="userPwd" />
        </div>
        <div class="but">
            <a-button type="primary" >登录</a-button>
            <a-button type="primary" >注册</a-button>
        </div>
    </div>
</template>

<script>
    import { Button } from 'ant-design-vue'
    export default {
        components: {
            AButton: Button
        }
    }
</script>
<style lang="stylus" scoped>
    .wrap
      font-size: .4rem
      margin-top: 4rem
      .usn
        height: .8rem
        line-height: .8rem
        text-align: center
        .inp
          background-color: #DDDDDD
          border: 1px solid black
          border-radius: .1rem
      .usp
        height: .8rem
        line-height: .8rem
        margin-top: .3rem
        text-align: center
        .inp
          background-color: #DDDDDD
          border: 1px solid black
          border-radius: .1rem
      .but
        text-align: center
        margin-top: 2rem
</style>
