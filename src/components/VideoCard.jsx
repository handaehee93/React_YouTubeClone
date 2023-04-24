import React from 'react'
import { formatTimeAgo } from '../util/date'


export default function VideoCard({video}) {
  // snippet안에 개별 video에 관한 대부분의 정보가 들어 있으므로 video.snippet으로 하나하나 입력하면 번거롭기 때문에 구조 분해 할당으로 원하는 데이터를 가져 온다.
  const {title, thumbnails, channelTitle, publishedAt} = video.snippet
  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatTimeAgo(publishedAt,'ko')}</p>
      </div>
      {title}
    </li>
  )
}