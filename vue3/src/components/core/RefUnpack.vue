<template>
    <Card name="Ref的解包场景">
        <div>
            <span>解包1：{{ foo + 1 }}</span>
        </div>
        <div>
            <span>解包2_1：{{ refCount }}</span>
            <button @click="updateRefCount">refCount++</button>
        </div>
        <div>
            <span>解包2_2：{{ autoUnpack2.refCount }}</span>
            <button @click="updateReactiveCount">reactiveCount++</button>
        </div>
        <div>
            <!-- 此处是模板提供的解包能力使得不需要显式的访问.value -->
            <span>不会解包：{{ list[0] }}</span>
            <span>不会解包：{{ map.get("number") }}</span>
        </div>
    </Card>
</template>
<script lang="ts">
import { Ref, defineComponent, reactive, ref } from "vue";
import Card from "../template/Card.vue";
export default defineComponent({
    name: "RefUnpack",
    components: { Card },
    setup() {
        //1.foo的类型为Ref<number> 在模板中会自动解包为number类型
        const autoUnpack1 = { foo: ref(1) };
        const { foo } = autoUnpack1;
        //2.ref在响应式对象中的解包
        const refCount = ref(888);
        const autoUnpack2 = reactive({
            refCount,
        });
        const updateRefCount = () => {
            refCount.value++;
        };
        const updateReactiveCount = () => {
            autoUnpack2.refCount++;
        };
        console.log(refCount.value === autoUnpack2.refCount); //true
        //3.【不会解包】ref作为响应式数组或像Map这种原生集合类型的元素被访问时
        const list = reactive([ref("elemnt-0"), ref("element-1")]);
        const map = reactive(new Map<string, Ref<number>>([["number", ref(100)]]));
        //console.log(list[0]);
        console.log(list[0].value);
        //console.log(map.get("number"));
        console.log(map.get("number")?.value);
        return {
            foo,
            refCount,
            autoUnpack2,
            updateRefCount,
            updateReactiveCount,
            list,
            map,
        };
    },
});
</script>
<style></style>
