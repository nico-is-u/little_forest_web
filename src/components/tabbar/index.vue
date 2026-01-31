<template>
    <nut-tabbar unactive-color="var(--color-gray)" active-color="var(--color-primary)" v-model="activeName" @tab-switch="tabSwitch">
        <nut-tabbar-item v-for="item in tabList" :key="'tabbar-item-' + item.name"
            :tab-title="item.title"
            :name="item.name" >
            <template #icon="{active}">
                <IconFont font-class-name="iconfont" class-prefix="if" :name="item.activeIcon" v-if="active" />
                <IconFont font-class-name="iconfont" class-prefix="if" :name="item.icon" v-else />
            </template>
        </nut-tabbar-item>
    </nut-tabbar>
</template>

<script>
import {ref,watch} from 'vue'
import { IconFont } from '@nutui/icons-vue-taro'
import useAppStore from '../../store/app'

export default {
    setup(){

        /* Vuex */
        const appStore = useAppStore()

        /* 由于京东的垃圾设计，这个key只能同步页面高亮 */
        const activeName = ref()
        if(appStore.tabbarName) activeName.value = appStore.tabbarName

        /* 同步这个垃圾设计(这里一定会造成多次的监听，因为渲染就是多份) */
        watch(() => appStore.tabbarName, val => activeName.value = val)

        /* 跳转相关 */
        const tabSwitch = props2 => {
            /* 防抖 */
            if(appStore.tabbarName === props2.name) return
            /* 跳转 */
            appStore.setTabbar(props2.name)
        }

        return {
            activeName,
            tabList: appStore.tabbarDatas,
            tabSwitch
        }

    },
    components: {
        IconFont:IconFont
    }
}
</script>
