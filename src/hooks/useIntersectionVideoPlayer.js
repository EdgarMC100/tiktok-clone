import { useEffect, useState } from 'react'
export const options = {
  root: document.querySelector('main'),
  rootMargin: '0px',
  threshold: 1.0
}

export const setIntercectionObserverVideo = (entries) => {
  entries.forEach((entry) => {
    const { target, isIntersecting } = entry
    target._handleIntersect(isIntersecting)
  })
  // entries.forEach((entry) => {
  //   if (entry.isIntersecting) {
  //     console.log(entry.isIntersecting)
  //   }
  //   // console.log(entry.target.current)
  //   // entry.target.isIntersecting ? entry.target.currrent.play() : entry.target.current.pause()
  // })
}

export const setObserver = (callback, options) => {
  console.log('OP:', options)
  const observer = new window.IntersectionObserver(callback, options)
  return observer
}

const observer = setObserver(setIntercectionObserverVideo, options)

export default function useIntersectionVideoPlayer ({ video }) {
  const [playing, setPlaying] = useState(false)

  console.log('useIntersectionVideoPlayer')
  useEffect(() => {
    if (!video.current) return

    observer.observe(video.current)
    video.current._handleIntersect = (isIntersecting) => {
      const { current: videoEl } = video
      console.log(isIntersecting, videoEl, videoEl.paused)
      isIntersecting
        ? videoEl.play()
        : videoEl.pause()
      setPlaying(!videoEl.paused)
    }
  }, [])

  const handlePlay = () => {
    const { current: videoEl } = video
    playing
      ? videoEl.pause()
      : videoEl.play()
    setPlaying(!playing)
  }

  return { playing, handlePlay }
}
