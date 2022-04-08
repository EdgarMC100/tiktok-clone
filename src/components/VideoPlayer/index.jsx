import clsx from 'clsx'
import { useRef } from 'react'
import styles from './styles.module.css'
import VideoPlayerActions from './VideoPlayerActions.jsx'
import VideoDescription from './VideoDescription'
import Header from '../Header'
import useIntersectionVideoPlayer from '../../hooks/useIntersectionVideoPlayer'
// options.root = document.querySelector('main')
// console.log(options)
// const observer = setObserver(setIntercectionObserverVideo, options)

// const options = {
//   root: document.querySelector('main'),
//   rootMargin: '0px',
//   threshold: 1.0
// }

// const setIntercectionObserverVideo = (entries) => {
//   entries.forEach((entry) => {
//     const { target, isIntersecting } = entry
//     target._handleIntersect(isIntersecting)
//   })
//   // entries.forEach((entry) => {
//   //   if (entry.isIntersecting) {
//   //     console.log(entry.isIntersecting)
//   //   }
//   //   // console.log(entry.target.current)
//   //   // entry.target.isIntersecting ? entry.target.currrent.play() : entry.target.current.pause()
//   // })
// }

// const setObserver = (callback, options) => {
//   const observer = new window.IntersectionObserver(callback, options)
//   return observer
// }
// const observer = setObserver(setIntercectionObserverVideo, options)
export default function VideoPlayer (props) {
  const video = useRef(null)
  const { playing, handlePlay } = useIntersectionVideoPlayer({ video })

  // useEffect(() => {
  //   observer.observe(video.current)
  //   video.current._handleIntersect = (isIntersecting) => {
  //     const { current: videoEl } = video
  //     console.log(isIntersecting, videoEl, videoEl.paused)
  //     isIntersecting
  //       ? videoEl.play()
  //       : videoEl.pause()
  //     setPlaying(!videoEl.paused)
  //   }
  // }, [])

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
