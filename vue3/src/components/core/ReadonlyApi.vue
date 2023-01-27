<template>
    <Card name="核心方法Readonly">
        <div>count：{{ readonlyCount }}</div>
        <button @click="updateReadonlyCount">控制台警告信息&点击修改</button>
    </Card>
</template>
<script lang="ts">
import { defineComponent, readonly, ref } from "vue";
import Card from "../template/Card.vue";
export default defineComponent({
    name: "ReadonlyApi",
    components: { Card },
    setup() {
        const count = ref(10);
        const readonlyCount = readonly(count);
        const updateReadonlyCount = () => {
            //@ts-ignore
            readonlyCount.value++;
        };
        return { readonlyCount, updateReadonlyCount };
    },
});
</script>
<style></style>
