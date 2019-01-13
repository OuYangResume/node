import axios from "axios"
import Toast from "@/components/totas"

import Vue from "vue"
/* 
    设计模型：Toast组件的生命周期中包含它本身在页面中的挂载与销毁,在组件外构建一层代理并提供相关方法用于调用 
    其中组件本身dom以及style被封装，只能改变props
*/
/* 定义常量以及获取Toast组件相关的Props */
const types = [
    "normal", "warn", "success", "error", "info"
]
const ToastConstructor = Vue.extend(Toast)
const verticalOffset = 16
let instances = []
let initIndex = 0
let requireProps = Object.keys(Toast.props)
                         .filter((elem) => (Toast.props[elem].required))
/* 初始化每个toast对象在页面中的垂直属性 */
function initVerticalOffset(position) {
    let typeInstances = instances.filter(item => item.position === position)
    return typeInstances.reduce((sum, elem) => (elem.$el.offsetHeight + sum + verticalOffset), verticalOffset)
}
/* 更新每个toast对象在页面中的垂直属性 */
function updateVerticalOffset(removeInstance) {
    let index = 0
    let removeHeight = removeInstance.verticalOffset
    instances.find((elem, i) => {
        if (elem.id === removeInstance.id) index = i
    })
    
    instances.splice(index, 1)

    for (; index < instances.length; ++index) {
        if (instances[index].position === removeInstance.position) {
            [instances[index].verticalOffset, removeHeight] = [removeHeight, instances[index].verticalOffset]
        }
    }
}
/* 构造单个toast */
function generateInstance(options) {
    let instance = new ToastConstructor({
        //propsData只用于 new 创建的实例中,传递 props.
        propsData: options
    }).$mount(document.createElement('div')) //// 创建 ToastConstructor 实例，并挂载到一个元素上。
    if (typeof options.onClose === 'function') instance.onClose = options.onClose
    //计算instance verticalOffset
    let id = 'toast_' + initIndex++
    instance.id = id
    instance.verticalOffset = initVerticalOffset(instance.position)

    //监听组件close,监听一个自定义事件，但是只触发一次，在第一次触发之后移除监听器
    instance.$once('toastClose', function () {
        const curInstance = this
        updateVerticalOffset(curInstance)
        typeof curInstance.onClose === 'function' && curInstance.onClose()
    })
    return instance;
}

let commonPlugin = {
    install(Vue, opt) {
        axios.get("./static/config.json", {}).then(res => {
            console.log(res);
            sessionStorage.serviceExpressUrl = res.data.serviceExpressUrl;
            sessionStorage.author = res.data.author;
        });

        Vue.prototype.testCommin = function () {
            alert("公共方法")
        }

        Vue.prototype.serviceExpressUrl = function () {
            return sessionStorage.serviceExpressUrl;
        }
        /**
         * 公共组件
         */
        Vue.prototype.$toast = (options = {}) => {
            requireProps.forEach((elem) => {
                if (!options[elem]) throw `err: options lack ${elem} prop`
            })
            if ( options.type && !types.some(elem => elem === options.type) ) throw `err: toast not exist ${options.type} type`
    
            /* 将单个toast存入队列中 */
            let instance = generateInstance(options)
            instances.push(instance)
        }
    }
}

export default commonPlugin