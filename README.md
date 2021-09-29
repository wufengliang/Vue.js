### 前言
> 随着`Vue3`版本的普及起来，`Vue2.x`使用的频率会相对减少，为了避免忘记`Vue2.x`的使用，就有了该项目，主要目的是为了`加深学习记忆`，`了解源码、学习源码`。


#### 知识脑图
![生命周期](https://cn.vuejs.org/images/lifecycle.png)


##### 使用`demo`

```javascript
const vm = new Vue({
    el:'#app',
    data:{
        name:'张三',
        age:'14',
        info:{
            sex:'男',
        },
        address:['中国',['广东','广州']]
    }
})
```