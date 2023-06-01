import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
import YoutubeClient from '../api/youtubeClient';
import testYoutubeClient from '../api/testYoutubeClient';

export const YouTubeApiContext = createContext()

const client = new testYoutubeClient()
// const client = new YoutubeClient()
const youtube = new Youtube(client) 

export function YouTubeApiProvider({ children }) {
  return( 
    <YouTubeApiContext.Provider value={{youtube}}>
      {children}
    </YouTubeApiContext.Provider>
  )
}

export function useYoutubeApi() {
  return useContext(YouTubeApiContext)
}