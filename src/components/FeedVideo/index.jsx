import React from 'react'
import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'
const VIDEOS = [
  {
    id: 1,
    liked: true,
    author: 'devguy',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'sonido original',
    albumCover: 'https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/11ed6b9fafb645e09bf938569a329b28~c5_200x200.jpeg',
    description: 'Using React to develop websites versus HTML and CSS 👨🏼‍💻',
    src: 'https://v16-webapp.tiktok.com/a5aa1e279cd4d1d91b1a28dbff49dc5e/623eaff8/video/tos/maliva/tos-maliva-ve-0068c799-us/7be31693b68a43fb960ce97f177953a5/?a=1988&br=1650&bt=825&cd=0|0|1|0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3CMnz7Th-z8JDXq&l=20220326001720010188032056112433A2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amloZTc6ZmQ3OzMzZzczNEApOjQ0ZTc8ODxoN2c1aTQzPGdeXzZncjRvaDNgLS1kMS9zczEzLS0xLTZhLy4xM18uNTA6Yw==&vl=&vr='

  },
  {
    id: 2,
    author: 'devguy',
    liked: true,
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'sonido original',
    albumCover: 'https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/11ed6b9fafb645e09bf938569a329b28~c5_200x200.jpeg',
    description: 'Using React to develop websites versus HTML and CSS 👨🏼‍💻',
    src: 'https://v16-webapp.tiktok.com/a5aa1e279cd4d1d91b1a28dbff49dc5e/623eaff8/video/tos/maliva/tos-maliva-ve-0068c799-us/7be31693b68a43fb960ce97f177953a5/?a=1988&br=1650&bt=825&cd=0|0|1|0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3CMnz7Th-z8JDXq&l=20220326001720010188032056112433A2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amloZTc6ZmQ3OzMzZzczNEApOjQ0ZTc8ODxoN2c1aTQzPGdeXzZncjRvaDNgLS1kMS9zczEzLS0xLTZhLy4xM18uNTA6Yw==&vl=&vr='
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
