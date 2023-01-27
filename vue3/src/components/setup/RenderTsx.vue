<script lang='tsx'>
import { defineComponent } from 'vue';
import Card from '../template/Card.vue';
export default defineComponent({
    setup() {
        return () => <Card name='tsx+script'><div>使用tsx渲染组件</div></Card>
    }
})
</script>
