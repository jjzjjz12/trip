// 节流函数，使这个函数每间隔一段时间执行一次
export function throttle(fn, interval) {
    let lastTime = 0
    return function(...args) {
        const nowTime = Date.now()
        if(nowTime - lastTime >= interval) {
            lastTime = nowTime
            fn.apply(this, ...args)
        }
    }
}

export function debounce(fn, delay) {
    let timer = null
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, ...args)
        }, delay);
    }
}