import React, { useEffect, useState } from 'react'
import { getVideos } from '../../services'
import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'
// const VIDEOS = [
//   {
//     id: 1,
//     liked: true,
//     username: 'devguy',
//     likes: 10,
//     shares: 234,
//     comments: 333,
//     songTitle: 'sonido original',
//     albumCover: 'https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/11ed6b9fafb645e09bf938569a329b28~c5_200x200.jpeg',
//     description: 'So magical 😐 #fyp #foryou #rufflesownyourridges #universalstudios #universalstudioshollywood',
//     src: 'https://v16-webapp.tiktok.com/901d9836b03a2c9b0d91defc12c4f4c6/624321e0/video/tos/useast2a/tos-useast2a-ve-0068c001/da1f8ec039df464fade40d7eb4ae9343/?a=1988&br=3044&bt=1522&cd=0|0|1|0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3CMnz7TheJTgDXq&l=2022032909121501022312009612034958&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2Y1eTc6ZmZ5PDMzNzczM0ApOjhkNDs8NmUzNzQ3M2dkOGcxMmZjcjRvLi1gLS1kMTZzc2FgXmEwYzMxXzYvLjYxYzY6Yw==&vl=&vr='

//   },
//   {
//     id: 2,
//     username: 'devguy',
//     liked: true,
//     likes: 0,
//     shares: 234,
//     comments: 333,
//     songTitle: 'sonido original',
//     albumCover: 'https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/11ed6b9fafb645e09bf938569a329b28~c5_200x200.jpeg',
//     description: 'Using React to develop websites versus HTML and CSS 👨🏼‍💻',
//     src: 'https://v16-webapp.tiktok.com/901d9836b03a2c9b0d91defc12c4f4c6/624321e0/video/tos/useast2a/tos-useast2a-ve-0068c001/da1f8ec039df464fade40d7eb4ae9343/?a=1988&br=3044&bt=1522&cd=0|0|1|0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3CMnz7TheJTgDXq&l=2022032909121501022312009612034958&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2Y1eTc6ZmZ5PDMzNzczM0ApOjhkNDs8NmUzNzQ3M2dkOGcxMmZjcjRvLi1gLS1kMTZzc2FgXmEwYzMxXzYvLjYxYzY6Yw==&vl=&vr='
//   }

// ]
export default function FeedVideo () {
  const [videos, setVideos] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    getVideos().then(([error, videos]) => {
      console.log(videos)
      if (error) return setError(error)
      setVideos(videos)
    })
  }, [])

  return (
    <section>
      {
      videos.map((video) => {
        const { user = {} } = video
        const { username, avatar } = user
        return <VideoPlayer {...video} username={username} avatar={avatar} key={video.id} />
      })
    }
    </section>
  )
}
