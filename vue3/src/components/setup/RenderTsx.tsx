import { defineComponent } from 'vue';
import Card from '../template/Card.vue';
export default defineComponent({
    setup() {
        return () => <Card name='使用tsx文件渲染组件'><div>使用tsx渲染组件的第二种方式</div></Card>
    }
})
