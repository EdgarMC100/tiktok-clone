import React from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'

export default function AlbumDisk ({ albumCover, isRotating }) {
  const albumClassName = clsx(styles.album, {
    [styles.albumRotating]: isRotating
  })
  return (
    <div className={albumClassName}>
      <img className={styles.albumImage} src={albumCover} alt='Album image' />
    </div>
  )
}
