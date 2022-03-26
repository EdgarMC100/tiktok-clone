import MusicIcon from '../Icons/MusicIcon'
import styles from './styles.modules.css'
import Ticker from 'react-ticker'
export default function SongTicker ({ songTitle, isMoving }) {
  return (
    <div className={styles.song}>
      <MusicIcon />
      <div className={styles.tickerWrapper} style={{ marginLeft: '30px' }}>
        <Ticker mode='await' move={isMoving} speed={15}>
          {
            ({ index }) => (
              <>
                <span>{songTitle}</span>
              </>
            )
          }
        </Ticker>
      </div>
      {/* <marquee style={{ display: 'inline-block', width: '90%', marginLeft: '30px' }}><span>{songTitle}</span></marquee> */}
    </div>
  )
}
