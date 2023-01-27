<template>
    <div class="header">Vue3 API Demos</div>
    <div class="component-list">
        <Base />
        <RenderTsx />
        <RenderTsxFile />
        <RefApi />
        <ComputedApi />
        <ReactiveApi />
        <RefUnpack />
        <ReadonlyApi />
        <WatchEffectApi />
    </div>
</template>
<script setup lang="ts">
import Base from "./components/setup/Base.vue";
import RenderTsx from "./components/setup/RenderTsx.vue";
import RenderTsxFile from "./components/setup/RenderTsx";
import RefApi from "./components/core/RefApi.vue";
import ComputedApi from "./components/core/ComputedApi.vue";
import ReactiveApi from "./components/core/ReactiveApi.vue";
import RefUnpack from "./components/core/RefUnpack.vue";
import ReadonlyApi from "./components/core/ReadonlyApi.vue";
import WatchEffectApi from "./components/core/WatchEffectApi.vue";
</script>
<style lang="scss">
.header {
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    margin: 0 0 10px 0;
}

.component-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 10px;
    padding: 10px;
}
</style>
