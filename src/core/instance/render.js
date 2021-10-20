import { compilerToFunction } from '../compiler';
import { mountComponent } from '../vnode/patch';

export function renderMixin(Vue) {

    //  Vue实例上的渲染方法
    Vue.prototype._render = function () {
        const vm = this;
        const { render } = vm.$options;
        const vnode = render.call(vm);
        return vnode;
    }

    Vue.prototype.$mount = function (el) {
        const vm = this,
            options = vm.$options;

        let el = document.querySelector(el);

        if (!options.render) {
            const template = options.template;
            if (!template) {
                template = el.outerHTML;
            }
            const render = compilerToFunction(template);
            options.render = render;
        }

        mountComponent(vm, el);
    }
}