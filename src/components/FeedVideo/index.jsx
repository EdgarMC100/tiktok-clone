import React from 'react'
import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'
const VIDEOS = [
  {
    id: 1,
    author: 'devguy',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'sonido original',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/eacc7e37ffee1c3052e0ff793b8e88a5~c5_100x100.jpeg?x-expires=1647374400&x-signature=EUmaT2oTE6gOMjSXd4BWFNVHZpc%3D',
    description: 'Using React to develop websites versus HTML and CSS 👨🏼‍💻',
    src: 'https://v16-webapp.tiktok.com/8941317584f064f2d6364b91873b0265/6233bc73/video/tos/useast2a/tos-useast2a-ve-0068c003/02231ed20d2b4ae3bc3a23591164add3/?a=1988&br=1558&bt=779&cd=0|0|1|0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3CMnz7ThJneiDXq&l=20220317165517010189077068013443E8&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajpvcTk6ZmhqOTMzNzczM0ApZTM2Njk5ZTtkNzNlOzMzOGdgNWBpcjQwbF9gLS1kMTZzczUuLjNhNjJjYy1hYmEzMzA6Yw==&vl=&vr='

  },
  {
    id: 2,
    author: 'devguy',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'sonido original',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/eacc7e37ffee1c3052e0ff793b8e88a5~c5_100x100.jpeg?x-expires=1647374400&x-signature=EUmaT2oTE6gOMjSXd4BWFNVHZpc%3D',
    description: 'Using React to develop websites versus HTML and CSS 👨🏼‍💻',
    src: 'https://v16-webapp.tiktok.com/8941317584f064f2d6364b91873b0265/6233bc73/video/tos/useast2a/tos-useast2a-ve-0068c003/02231ed20d2b4ae3bc3a23591164add3/?a=1988&br=1558&bt=779&cd=0|0|1|0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3CMnz7ThJneiDXq&l=20220317165517010189077068013443E8&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajpvcTk6ZmhqOTMzNzczM0ApZTM2Njk5ZTtkNzNlOzMzOGdgNWBpcjQwbF9gLS1kMTZzczUuLjNhNjJjYy1hYmEzMzA6Yw==&vl=&vr='
  }

]
export default function FeedVideo () {
  return (
    <section className={styles.feed}>
      {
      VIDEOS.map((video) => <VideoPlayer {...video} key={video.id} />)
    }
    </section>
  )
}
