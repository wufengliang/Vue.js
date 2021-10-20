
export function mountComponent(vm, el) {
    vm.$el = el;

    let updateComponent = () => {
        const render = vm.$options.render;  //  虚拟节点
    }
}

export function callHook(vm, hook) {

}