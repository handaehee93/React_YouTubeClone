import axios from 'axios'



export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL:'https://www.googleapis.com/youtube/v3',
      // .env파일을 사용할 때는 아래와 같이 process.env를 붙이고 지정한 이름을 입력해 주면 된다.
      // API key는 git에 커밋되어 공개 되면 안되기 때문에 .env파일에 넣고 아래와 같이 작성 해 준 것
      params: {key : process.env.REACT_APP_YOUTUBE_API_KEY}
    })
  }
  async search (params) {
    // 함수 앞에 #을 붙이면 자바스크립트에서는 private함수가 된다. private함수는 class내부적으로는 호출이 가능하지만,class 외부에서는 호출할 수 없다.
    return this.httpClient.get('search', params)
  }
  async videos (params) {

    return this.httpClient.get('videos', params)
  }
  async channels (params) {

    return this.httpClient.get('channels', params)
  }


}


