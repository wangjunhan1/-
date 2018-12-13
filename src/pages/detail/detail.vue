<template>
   <div>
       <detail-banner></detail-banner>
       <detail-header></detail-header>
       <div class="content">
           <detail-list :list="list"></detail-list>
       </div>
   </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'
export default {
  name: 'Detail',
  components: {
    DetailBanner: DetailBanner,
    DetailHeader: DetailHeader,
    DetailList: DetailList
  },
  data () {
    return {
       list: [{
        title: '成人票',
        title2: [{
            title: '成人三馆联票',
            title2: [{
                title: '成人三馆联票 - 某连锁店'
            }]
        }, {
            title: '成人五馆联票'
        }]
       }, {
        title: '学生票'
       }, {
        title: '儿童票'
       }, {
        title: '特惠票'
       }] 
    }
  }
}
</script>

<style lang="stylus" scoped>
    .content
        height: 30rem
</style>
