<template>
    <Card ref="card" name="核心方法Reactive">
        <div>object.count：{{ object.count }}</div>
        <button @click="updateCount">修改object.count</button>
    </Card>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import Card from "../template/Card.vue";
export default defineComponent({
    name: "ReactiveApi",
    components: { Card },
    setup() {
        const object = reactive({ count: 100 });
        const updateCount = () => {
            object.count++;
        };
        return {
            object,
            updateCount,
        };
    },
});
</script>
<style></style>
