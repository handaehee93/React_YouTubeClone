import axios from 'axios'



export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL:'https://www.googleapis.com/youtube/v3',
      // .env파일을 사용할 때는 아래와 같이 process.env를 붙이고 지정한 이름을 입력해 주면 된다.
      // API key는 git에 커밋되어 공개 되면 안되기 때문에 .env파일에 넣고 아래와 같이 작성 해 준 것
      params: {key : process.env.REACT_APP_YOUTUBE_API_KEY}
    })
  }
  async search (keyword) {
    // 함수 앞에 #을 붙이면 자바스크립트에서는 private함수가 된다. private함수는 class내부적으로는 호출이 가능하지만,class 외부에서는 호출할 수 없다.
    return keyword ? this.#searchByKeyword() : this.#mostPopular()

  }

  // 현재 mockData로 만들어 둔 search.json은 임의로 지정된 키워드로 검색된 결과를 넣어 둔 것이기 때문에 어떤 keyword로 검색을 해도 똑같은 값을 보여줄 것이기 때문에 여기선 keyword를 인자로 받을 필요가 없다.
  async #searchByKeyword (keyword) {
    return (
      this.httpClient
        .get(`search`,{
          params: {
            part: 'snippet',
            maxResults: 25,
            type: 'video',
            q: keyword
          }
        })
        .then(res => res.data.items)
        // 현재 MockData로 만들어 둔 videos폴더 안의 파일에 보면 어떤 거는 items안에 id가 string이고, 어떤거는 id가 객체고 그 안에 videoId가 또 있다. 따라서 이렇게 id가 객체로 되어 있는 것을 해당 객체 안의 videoId로 바꿔 주는 것
        .then(items => items.map( item => ({...item, id: item.id.videoId})))
    )
  }


  async #mostPopular () {
    return this.httpClient
    .get(`videos`,{
      params: {
        part: 'snippet',
        maxResults: 25,
        chart: 'mostPopular',
      }
    })
    .then(res => res.data.items)
  }
};