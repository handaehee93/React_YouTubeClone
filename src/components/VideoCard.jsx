import React from 'react'

export default function VideoCard({video}) {
  // snippet안에 개별 video에 관한 대부분의 정보가 들어 있으므로 video.snippet으로 하나하나 입력하면 번거롭기 때문에 구조 분해 할당으로 원하는 데이터를 가져 온다.
  return (
    <li>
      {video.snippet.title}
    </li>
  )
}
