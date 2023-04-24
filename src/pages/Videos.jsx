import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import axios from 'axios'
import Youtube, { search } from '../api/youtube'
import testYoutube from '../api/tesetYoutube'

export default function Videos() {

  const { keyword } = useParams()
  const { isLoading, error, data: videos } = useQuery(
    ['videos', keyword], () => {
      const youtube = new Youtube()
      return youtube.search(keyword)
    }
  )


  return (
    <>
      <div>Videos {keyword ? `${keyword}` : '🔥'}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>erorr !!</p>}
      {videos &&
        <ul>
          {videos.map(video => <VideoCard key={video.id} video={video} />)}
        </ul>
      }
    </>
  )
}

