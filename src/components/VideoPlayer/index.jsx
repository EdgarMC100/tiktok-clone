import { useRef, useState } from 'react'
import styles from './styles.module.css'
const SRC = 'https://v16-webapp.tiktok.com/54e9c678e11c43ebdffb3b06f365f0a5/622f556e/video/tos/useast2a/tos-useast2a-ve-0068c003/02231ed20d2b4ae3bc3a23591164add3/?a=1988&br=1558&bt=779&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3CMnz7Th3K3vDXq&l=202203140846410102231280871E812B42&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajpvcTk6ZmhqOTMzNzczM0ApZTM2Njk5ZTtkNzNlOzMzOGdgNWBpcjQwbF9gLS1kMTZzczUuLjNhNjJjYy1hYmEzMzA6Yw%3D%3D&vl=&vr='
export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <div>
      <video
        className={styles.video}
        ref={video}
        src={SRC}
        controls={false}
      />
      <button className={styles.player} onClick={handlePlay} />
    </div>
  )
}
