import { throttle } from "@/utils/throttle&debounce";
import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from "vue";
// import { throttle } from 'underscore'

export default function useScroll() {
    const isReachBottom = ref(false)
    const showSearchBox = ref(false)
    // clientHeight文档可视区域高度
    // scrollHeight文档总高度
    // scrollTop文档顶部到可视区域的距离
    const scrollListenerHandler = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      // 添加容差范围
      if (clientHeight + scrollTop >= scrollHeight - 1) {
        console.log('滚动到底部了');
        isReachBottom.value = true
      }

      if (scrollTop >= 300) {
        showSearchBox.value = true
      }else {
        showSearchBox.value = false
      }
    }

    const throttleScroll = throttle(scrollListenerHandler, 10)

    const addScrollListener = () => {
        window.addEventListener("scroll", throttleScroll);
    }

    const removeScrollListener = ()=> {
        window.removeEventListener('scroll', scrollListenerHandler)
    }

    // 被keep-alive缓存会首次触发onMounted、onActivated，后续切换时只会触发onActivated,onDeactivated.销毁时才触发onDeactovated、onUnMounted
    // 不确定组件有没有被缓存就两者钩子都使用
    onActivated(addScrollListener)
    onDeactivated(removeScrollListener)

    onMounted(addScrollListener)
    onUnmounted(removeScrollListener)


    return { isReachBottom, showSearchBox }
}