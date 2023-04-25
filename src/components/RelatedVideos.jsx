import React from 'react'
import {useYoutubeApi} from '../context/YouTubeApiContext'
import { useQuery } from '@tanstack/react-query'
import VideoCard from './VideoCard'


export default function ChannelInfo({id}) {
  const {youtube} = useYoutubeApi()
  const { data: videos} = useQuery(['related',id], () => youtube.relatedVideos(id))
  return (
    <>
      {/* <div>Videos {keyword ? `${keyword}` : '🔥'}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>erorr !!</p>} */}
      {videos &&
        <ul>
          {videos.map(video => <VideoCard key={video.id} video={video} type='list'/>)}
        </ul>
      }
    </>
  )
}
