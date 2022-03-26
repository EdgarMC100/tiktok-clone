import React from 'react'
import styles from './styles.module.css'
export default function Header () {
  return (
    <header className={styles.header}>
      <span className={styles.menu} />
      <nav>
        <ul>
          <li>
            <a style={{ color: 'rgba(255,255,255,0.5)' }} href=''>Following</a>
          </li>
          <li>
            <a href=''>For you</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
