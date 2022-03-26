import clsx from 'clsx'
import { useRef, useState } from 'react'
import styles from './styles.module.css'
import VideoPlayerActions from './VideoPlayerActions.jsx'
import VideoDescription from './VideoDescription'
import Header from '../Header'

export default function VideoPlayer (props) {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
  const handlePlay = () => {
    const { current: videoEl } = video
    playing
      ? videoEl.pause()
      : videoEl.play()
    setPlaying(!playing)
  }

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing
  })

  const { src } = props

  return (
    <div className={styles.wrapper}>
      <Header />
      <video
        className={styles.video}
        controls={false}
        loop
        onClick={handlePlay}
        ref={video}
        src={src}
      />
      <i className={playerClassName} onClick={handlePlay} />
      <VideoPlayerActions {...props} />
      <VideoDescription {...props} isRotating={playing} />
    </div>

  )
}
