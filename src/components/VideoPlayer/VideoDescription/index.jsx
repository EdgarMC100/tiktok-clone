import React from 'react'
import AlbumDisk from './AlbumDisk'
import styles from './styles.module.css'
import SongTicker from '../../SongTicker'

export default function VideDescription ({ album_cover: albumCover, username, description, isRotating, song_title: songTitle }) {
  return (
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <strong className={styles.username}>@ {username}</strong>
        <p>{description}</p>
        <SongTicker songTitle={songTitle} isMoving={isRotating} />
      </div>
      <div>
        <AlbumDisk albumCover={albumCover} isRotating={isRotating} />
      </div>
    </footer>

  )
}
