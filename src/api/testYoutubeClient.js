import axios from 'axios'



export default class testYoutubeClient {
  constructor() {

  }
  async search () {
    // 함수 앞에 #을 붙이면 자바스크립트에서는 private함수가 된다. private함수는 class내부적으로는 호출이 가능하지만,class 외부에서는 호출할 수 없다.
    return axios.get('/videos/search.json ')
  }

  async videos () {
    return axios.get('/videos/popular.json ')
  }
  async channels () {
    return axios.get('/videos/channel.json ')
  }
}








