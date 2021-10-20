import { observe } from '../observer'

export function initState(vm) {
    const options = vm.$options;

    if (options.data) {
        initData(vm);
    }
}

function initData(vm) {
    let data = vm.$options.data;
    if (typeof data === 'function') {
        data = data.call(vm);
    }

    //  处理好数据 要开始代理数据
    observe(data);
}