import React from 'react'
import Heart from '../Icons/Heart'
import Share from '../Icons/Share'
import Comments from '../Icons/Comments'
import styles from './styles.module.css'
export default function VideoPlayerActions ({ liked = true, likes = 2304, comments = 2020, shares = 12, hearted = false }) {
  const handleHeartClick = () => window.alert('Heart clicked')
  const handleShareClick = () => window.alert('Heart clicked')
  return (
    <aside className={styles.actions}>
      <button className={styles.action} onClick={handleHeartClick}>
        <Heart width='45' fill={liked && '#fe2c55'} />
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
