import axios from 'axios'
import md5 from 'md5'

import { ElMessage } from 'element-plus'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        const { icode, time } = getTestICode()
        config.headers.icode = icode
        config.headers.codeType = time

        return config // 必须返回配置
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        const { success, message, data } = response.data
        //   要根据success的成功与否决定下面的操作
        if (success) {
            // 成功返回解析后的数据
            return data
        } else {
            // 业务错误
            ElMessage.error(message) // 提示错误消息
            return Promise.reject(new Error(message))
        }
    },
    (error) => {
        ElMessage.error(error.message) // 提示错误信息
        return Promise.reject(error)
    }
)

/**
 * 返回 Icode 的实现
 */
function getTestICode() {
    const now = Date.now() / 1000
    const code = now + 'LGD_Sunday-1991-12-30'
    return {
        icode: md5(code),
        time: now
    }
}
export default service
