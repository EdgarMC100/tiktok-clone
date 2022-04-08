export const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}

export const setIntercectionObserverVideo = (entries) => {
  console.log(entries, '-----')
  // entries.forEach((entry) => {
  //   if (entry.isIntersecting) {
  //     console.log(entry.isIntersecting)
  //   }
  //   // console.log(entry.target.current)
  //   // entry.target.isIntersecting ? entry.target.currrent.play() : entry.target.current.pause()
  // })
}

export const setObserver = (callback, options) => {
  const observer = new window.IntersectionObserver(callback, options)
  return observer
}
