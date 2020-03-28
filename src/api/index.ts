import * as Axios from 'axios'
import router from '@/router'

const baseUrl = process.env.BASE_URL

export class HTTPClient {
  private readonly axios: Axios.AxiosInstance;
  constructor(config: Axios.AxiosRequestConfig) {
    this.axios = Axios.default.create({
      timeout: 0,
      withCredentials: true, // 允许跨域
      headers: { 'Content-Type': 'application/json' },
      maxContentLength: 200,
      transformResponse: [
        data => {
          try {
            data = JSON.parse(data);
          } catch (e) {
            data = {}
          }

          if (data.status === 403) {
            router.push('/login');
          }

          return data;
        }
      ],
      ...config
    })
  }
}