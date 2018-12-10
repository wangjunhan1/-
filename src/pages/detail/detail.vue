<template>
   <div>
       <detail-banner></detail-banner>
       <detail-header></detail-header>
       <div class="test">123</div>
   </div> 
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
export default {
    name: 'Detail',
    components: {
        DetailBanner: DetailBanner,
        DetailHeader: DetailHeader
    }
}
    
</script>

<style lang="stylus" scoped>
    .test
        height: 30rem
</style>