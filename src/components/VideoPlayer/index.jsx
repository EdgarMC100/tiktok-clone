import clsx from 'clsx'
import { useRef } from 'react'
import styles from './styles.module.css'
import VideoPlayerActions from './VideoPlayerActions.jsx'
import VideoDescription from './VideoDescription'
import Header from '../Header'
import useIntersectionVideoPlayer from '../../hooks/useIntersectionVideoPlayer'

export default function VideoPlayer (props) {
  const video = useRef(null)
  const { playing, handlePlay } = useIntersectionVideoPlayer({ video })

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
