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
}

export const setObserver = (callback, options) => {
  const observer = new window.IntersectionObserver(callback, options)
  return observer
}

const observer = setObserver(setIntercectionObserverVideo, options)

export default function useIntersectionVideoPlayer ({ video }) {
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!video.current) return

    observer.observe(video.current)
    video.current._handleIntersect = (isIntersecting) => {
      const { current: videoEl } = video
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
