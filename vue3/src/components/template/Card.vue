<template>
    <div class="card" :style="{ 'background-color': bg }">
        <div class="component-name">{{ name }}</div>
        <slot :data="data"></slot>
    </div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref, defineExpose } from 'vue';

export default defineComponent({
    props: {
        name: { type: String }
    },
    setup(props, context) {
        const data = {
            Base: {
                name: "这是Base组件会用到的数据"
            }
        }
        const bg = ref("#ffffff")
        const randomBackgroundColor = () => {
            const r = Math.floor(Math.random() * 255)
            const g = Math.floor(Math.random() * 255)
            const b = Math.floor(Math.random() * 255)
            bg.value = 'rgba(' + r + ',' + g + ',' + b + ',1)';
        }
        context.expose({ randomBackgroundColor })
        onMounted(() => {
            console.log(`${props.name}---挂载完成！`);
        })
        return { data, bg }
    }
})
</script>
<style lang="scss">
.card {
    padding: 10px;
    min-height: 100px;
    height: 100%;
    width: 100%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 4px;
    box-sizing: border-box;
    .component-name {
        font-size: 16px;
        color: #000000;
        font-weight: bold;
        margin: 0 0 10px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>
