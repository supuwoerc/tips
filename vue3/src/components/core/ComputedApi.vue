<template>
    <Card ref="card" name="核心方法Computed">
        <div>only getter：{{ baseResult }}</div>
        <div>setter&getter：{{ advanceResult }}</div>
        <button @click="source += 1">修改source</button>
        <button @click="advance = advance + 2">修改advance</button>
    </Card>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Card from "../template/Card.vue";
export default defineComponent({
    name: "ComputedApi",
    components: { Card },
    setup() {
        const source = ref(0);
        const advance = ref(0);
        const baseResult = computed<number>(() => (source.value + 1) * 6);
        const advanceResult = computed<number>({
            get: () => {
                return (advance.value + 1) * 10;
            },
            set: (val) => {
                advance.value += val;
            },
        });
        return { source, baseResult, advance, advanceResult };
    },
});
</script>
<style></style>
