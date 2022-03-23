import React from 'react'
import Heart from '../Icons/Heart'
import Share from '../Icons/Share'
import Comments from '../Icons/Comments'
import styles from './styles.module.css'
export default function VideoPlayerActions ({ likes = 2304, comments = 2020, shares = 12, hearted = false }) {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart />
        <strong title='like'>{likes}</strong>
      </div>
      <div className={styles.action}>
        <Comments />
        <strong title='shares'>{shares}</strong>
      </div>
      <div className={styles.action}>
        <Share />
        <strong title='comments'>{comments}</strong>
      </div>
    </aside>
  )
}
