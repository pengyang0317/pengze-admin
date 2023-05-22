import i18n from '@/i18n'

export const validatePassword = () => {
    return (rule: any, value: string | any[], callback: (arg0?: Error | undefined) => void) => {
        if (value.length < 6) {
            callback(new Error(i18n.global.t('msg.login.passwordRule')))
        } else {
            callback()
        }
    }
}
