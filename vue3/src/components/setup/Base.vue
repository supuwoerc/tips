<template>
    <Card ref="card" :name="componentName">
        <div>姓名：{{ name }}</div>
        <div>年龄：{{ age }}</div>
        <button @click="updateInfo">点击随机修改</button>
        <button @click="card.randomBackgroundColor">调用子组件方法</button>
    </Card>
</template>
<script lang='ts'>
import { computed, defineComponent, ref } from 'vue';
import Card from '../template/Card.vue';
// https://cn.vuejs.org/api/composition-api-setup.html 
export default defineComponent({
    name: "Base",
    components: { Card },
    setup() {
        const card = ref()
        const reRenderCount = ref(0)
        const name = ref<string>("测试姓名")
        const age = ref<number>(100)
        const updateInfo = () => {
            age.value = parseInt((Math.random() + 1) * 100 + "")
            name.value = `测试姓名${age.value}`
            reRenderCount.value++
        }
        const componentName = computed(() => `初识组合式API${reRenderCount.value ? `-更新${reRenderCount.value}次` : ""}`)
        return {
            card, name, age, updateInfo, componentName
        }
    }
})
</script>
<style>

</style>
