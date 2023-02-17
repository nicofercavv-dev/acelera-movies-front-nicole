import { client } from './client'

const setAuthCodeinHeader = (login, password) => {
  const code = `${login}:${password}`
  const basic = Buffer.from(code, 'utf-8')
  client.interceptors.request.use(config => {
    config.headers.Authorization = `Basic ${basic.toString('base64')}`
    return config
  })
}

export default setAuthCodeinHeader
