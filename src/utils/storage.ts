/**
 * 存储数据
 */
export const setItem = (key: any, value: any) => {
    // 将数组、对象类型的数据转化为 JSON 字符串进行存储
    if (typeof value === 'object') {
        value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
}

/**
 * 获取数据
 */
export const getItem = (key: string) => {
    const data = window.localStorage.getItem(key)
    try {
        return JSON.parse(data as string)
    } catch (err) {
        return data
    }
}