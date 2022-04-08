import React from 'react'
import Heart from '../Icons/Heart'
import Share from '../Icons/Share'
import Comments from '../Icons/Comments'
import styles from './styles.module.css'
export default function VideoPlayerActions ({ likes = 0, comments = 2020, shares = 12, hearted = false, avatar }) {
  const handleHeartClick = () => window.alert('Heart clicked')
  const handleShareClick = () => window.alert('Heart clicked')
  return (
    <aside className={styles.actions}>
      <a className={styles.avatarContainer}>
        <span className={[styles.tiktokAvatar, styles.tiktokAvatarCircle].join(' ')}>
          <img src='https://i.ibb.co/QdSWMwR/me.jpg' alt='avatar image' />
          <div className={styles.iconPlus}>
            <div className={styles.followPlus}>
              <img src='https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-us/tiktok/web/node/_next/static/images/test-2e6dd40439e72f09a8193e27cb3e0c51.svg' width='24' alt='' />
            </div>
          </div>
        </span>
      </a>
      {/* <a> */}
      {/* <span className={styles.avatar}>
        <img src='https://i.ibb.co/QdSWMwR/me.jpg' alt='avatar image' />
        <img src='https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-us/tiktok/web/node/_next/static/images/test-2e6dd40439e72f09a8193e27cb3e0c51.svg' width='24' alt='' />
      </span> */}
      {/* </a> */}
      <button className={styles.action} onClick={handleHeartClick}>
        <Heart width='45' fill={likes === 0 ? 'white' : '#fe2c55'} />
        <span title='like'>{likes}</span>
      </button>
      <button className={styles.action} onClick={handleShareClick}>
        <Comments width='40' />
        <span title='shares'>{shares}</span>
      </button>
      <button className={styles.action}>
        <Share width='45' />
        <span title='comments'>{comments}</span>
      </button>

    </aside>
  )
}
