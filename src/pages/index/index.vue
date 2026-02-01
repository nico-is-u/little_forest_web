<template>
    <view class="page tab-page">
        <navbar/>
        <view class="page-content">
          首页正文
        </view>
        <tabbar/>
    </view>
</template>

<script>
import Navbar from '../../components/navbar/index.vue'
import Tabbar from '../../components/tabbar/index.vue'
export default {
    components: {
        Navbar: Navbar,
        Tabbar: Tabbar
    }
}
</script>