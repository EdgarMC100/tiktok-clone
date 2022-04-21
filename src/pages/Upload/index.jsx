import DropZone from '../../components/DropZone'
import styles from './styles.module.css'

export default function Upload () {
  return (
    <div className={styles.upload}>
      <h1>Cargar video</h1>
      <p>Este video se publicara en el perfil de @midudev</p>

      <form className={styles.form}>
        <DropZone />
        {/* <input type='file' name='upload-btn' accept='video/mp4,video/x-m4v,video/*' /> */}
        <label>
          leyenda
          <input type='text' placeholder='' />
        </label>
        <button>
          Publicar
        </button>
      </form>
      Upload
    </div>
  )
}
