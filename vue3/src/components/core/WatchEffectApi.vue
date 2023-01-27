<template>
    <Card name="核心方法WatchEffect">
        <div>模拟竞态场景</div>
        <div>count：{{ count }}</div>
        <div>mockResult：{{ mockResult }}</div>
        <div>count加上随机数：{{ result }}</div>
        <button @click="stopWatchEffect()">停止监听</button>
    </Card>
</template>
<script lang="ts">
let count = 3;
const loadData = (data: number): Promise<number> => {
    return new Promise((resolve) => {
        count--;
        setTimeout(() => {
            console.log(`返回的数据为${data}`);
            resolve(data);
        }, count * 1000);
    });
};
import { defineComponent, ref, watchEffect } from "vue";
import Card from "../template/Card.vue";
export default defineComponent({
    name: "WatchEffectApi",
    components: { Card },
    setup() {
        const count = ref<number>(0);
        //TODO:补充 WatchEffectOptions 参数demo
        const stopWatchEffect = watchEffect(async (onCleanup) => {
            console.info(`watchEffect(count)：${count.value}`);
            if (count.value !== 0) {
                let isLast = true;
                onCleanup(() => {
                    console.error("取消之前的模拟请求,此处使用标志位来标识是否是最后一次请求");
                    isLast = false;
                });
                loadData(count.value).then((res) => {
                    if (isLast) {
                        mockResult.value = res;
                        result.value = res + count.value;
                    }
                });
            }
        });
        const mockResult = ref(0);
        const result = ref(0);
        setTimeout(() => {
            count.value = 666;
        }, 300);
        setTimeout(() => {
            count.value = 999;
        }, 800);
        return { count, mockResult, result, stopWatchEffect };
    },
});
</script>
<style></style>
