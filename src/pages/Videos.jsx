import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import Youtube, { search } from '../api/youtube'
import testYoutube from '../api/testYoutubeClient'
import { useYoutubeApi } from '../context/YouTubeApiContext'


export default function Videos() {
  const { keyword } = useParams()
  const {youtube} = useYoutubeApi()
  const { data: videos } = useQuery(['videos',keyword], () => youtube.search(keyword), {staleTime: 1000 * 60 })

  return (
    <>
      {videos &&
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4 '>
          {videos.map(video => <VideoCard key={video.id} video={video} />)}
        </ul>
      }
    </>
  )
}




