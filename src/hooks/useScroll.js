import { throttle } from "@/utils/throttle&debounce";
import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from "vue";
// import { throttle } from 'underscore'

// clientHeight文档可视区域高度
// scrollHeight文档总高度
// scrollTop文档顶部到可视区域的距离(滚动的距离)

const scrollHeight = ref();
const scrollTop = ref();
const clientHeight = ref();
export default function useScroll(elRef = window) {
  const isReachBottom = ref(false);
  const showSearchBox = ref(false);
  const scrollListenerHandler = () => {
    if (elRef === window) {
      scrollHeight.value = document.documentElement.scrollHeight;
      scrollTop.value = document.documentElement.scrollTop;
      clientHeight.value = document.documentElement.clientHeight;
    } else {
      scrollHeight.value = elRef.value.scrollHeight;
      scrollTop.value = elRef.value.scrollTop;
      clientHeight.value = elRef.value.clientHeight;
    }
    // 添加容差范围
    if (clientHeight.value + scrollTop.value >= scrollHeight.value - 1) {
      isReachBottom.value = true;
      console.log('滚到底部了');
    }

  };

  const throttleScroll = throttle(scrollListenerHandler, 10);

  const addScrollListener = () => {
    if (elRef === window) {
      elRef.addEventListener("scroll", throttleScroll);
    } else {
      elRef.value.addEventListener("scroll", throttleScroll);
    }
  };

  const removeScrollListener = () => {
    if (elRef === window) {
      elRef.removeEventListener("scroll", throttleScroll);
    } else {
      elRef.value?.removeEventListener("scroll", throttleScroll);
    }
  };

  // 被keep-alive缓存会首次触发onMounted、onActivated，后续切换时只会触发onActivated,onDeactivated.销毁时才触发onDeactovated、onUnMounted
  // 不确定组件有没有被缓存就两者钩子都使用
  // onActivated(addScrollListener);
  // onDeactivated(removeScrollListener);

  onMounted(addScrollListener);
  onUnmounted(removeScrollListener);

  return { isReachBottom, scrollTop };
}
