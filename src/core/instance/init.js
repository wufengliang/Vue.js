import { initState } from './state';

export function initMixin(Vue) {
    Vue.prototype._init = function (options) {
        const vm = this;    //  当前Vue实例对象

        vm.$options = options;  //  options选项挂载到实例对象上的$options属性上


        initState(vm);

    }
}