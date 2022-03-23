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
    src: 'https://v16-webapp.tiktok.com/cbc5497d3612e2b9a67727d5f267bb76/623ad775/video/tos/useast2a/tos-useast2a-ve-0068c003/cf315099d217445c8f69076c2e7f26e4/?a=1988&br=1876&bt=938&cd=0|0|1|0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3CMnz7ThPALMDXq&l=2022032302163701022311902020967F59&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M29yb2U6Znd1OzMzNzczM0ApNjYzZGk2NTxnNzM4ZDVkZWdyXnJscjRnMG1gLS1kMTZzc2FfMV80YzI0NGA1NC9gNTI6Yw==&vl=&vr='

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
    src: 'https://v16-webapp.tiktok.com/cbc5497d3612e2b9a67727d5f267bb76/623ad775/video/tos/useast2a/tos-useast2a-ve-0068c003/cf315099d217445c8f69076c2e7f26e4/?a=1988&br=1876&bt=938&cd=0|0|1|0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3CMnz7ThPALMDXq&l=2022032302163701022311902020967F59&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M29yb2U6Znd1OzMzNzczM0ApNjYzZGk2NTxnNzM4ZDVkZWdyXnJscjRnMG1gLS1kMTZzc2FfMV80YzI0NGA1NC9gNTI6Yw==&vl=&vr='
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
