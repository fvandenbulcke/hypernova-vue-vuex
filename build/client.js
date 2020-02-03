import { renderVuex } from 'hypernova-vue';
import LysModule from '../src/components/LysModule.vue';
import createStore from '../src/store';

export default renderVuex('VUE_MODULE', LysModule, createStore);
