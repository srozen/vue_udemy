import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vuetest-7c1c8.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
