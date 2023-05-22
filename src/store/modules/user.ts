import { login } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant/index'
import router from '@/router'
import { Store } from 'vuex'

export default {
    namespaced: true,
    state: () => ({
        token: getItem(TOKEN) || '',
        userInfo: {}
    }),
    mutations: {
        setToken(state: { token: any }, token: any) {
            state.token = token
            setItem(TOKEN, token)
        }
    },
    actions: {
        /**
        * 登录请求动作
        *
        */
        login(context: any, userInfo: any) {
            const { username, password } = userInfo
            return new Promise((resolve, reject) => {
                login({
                    username,
                    password: md5(password)
                })
                    .then((data) => {
                        (this as any).commit('user/setToken', (data as any).token)
                        // 登录后操作
                        router.push('/')
                        // 保存登录时间
                        // setTimeStamp()
                        console.log(data)
                        resolve('登录成功')
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        }
    }
}
