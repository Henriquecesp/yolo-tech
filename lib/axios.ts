import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://yolotech.herokuapp.com/api/v1',
})

instance.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth')
      config.headers.common['Authorization'] = `Bearer ${token}`
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export const fetcher = (url) => instance.get(url).then((res) => res.data)

export const poster = (url, data) =>
  instance.post(url, data).then((res) => res.data)
