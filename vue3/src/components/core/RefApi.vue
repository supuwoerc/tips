<template>
    <Card ref="card" name="核心方法Ref">
        <div>count：{{ count }}</div>
        <button @click="updateCount">点击修改count</button>
        <div>object.name：{{ object.name }}</div>
        <button @click="updateObjectName">点击修改count</button>
    </Card>
</template>
<script lang="ts">
// https://cn.vuejs.org/api/reactivity-core.html#ref
import { defineComponent, Ref, ref, reactive } from "vue";
import Card from "../template/Card.vue";
export default defineComponent({
    name: "RefApi",
    components: { Card },
    setup() {
        const count: Ref<number> = ref<number>(-1);
        const updateCount = () => {
            count.value++;
        };
        const object = ref({
            name: "对象的名称",
        });
        const updateObjectName = () => {
            object.value.name = "修改后的名称";
        };

        return {
            count,
            updateCount,
            object,
            updateObjectName,
        };
    },
});
</script>
<style></style>
