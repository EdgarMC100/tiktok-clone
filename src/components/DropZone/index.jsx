import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styles from './styles.module.css'
import clsx from 'clsx'
import { postVideo } from '../../services'

export default function DropZone () {
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(null)
  const onDrop = async (files) => {
    const [file] = files

    console.log('ondrop', file)
    // Do something with the files
    setUploading(true)
    const [error, fileUrl] = await postVideo({ videoFile: file })
    if (error) return console.error(error)
    setUploaded(fileUrl)
    setUploading(false)
  }

  const {
    getRootProps,
    getInputProps,
    isDragReject,
    isDragAccept
  } = useDropzone({
    disabled: uploading || uploaded,
    maxFiles: 1,
    accept: 'video/mp4,video/x-m4v,video/*',
    onDrop
  })

  useEffect(() => {
    if (isDragReject) {
      navigator.vibrate(100)
    }
  }, [isDragReject])

  const renderDndContent = () => {
    if (uploaded) return <h4>¡Archivo cargado con éxito</h4>
    if (uploading) return <h4>Subiendo archivo...</h4>
    if (isDragReject) return <h4>Archivo no soportado</h4>
    if (isDragAccept) return <h4>¡Suelta el archivo para subirlo!</h4>

    return (
      <>
        <h4>Select video to upload</h4>
        <h5>Or drag and drop a file</h5>
        <ul>
          <li>MP4 o WebM</li>
          <li>720x1280 resolution or higher</li>
          <li>Up to 10 minuts</li>
          <li>Less than 2 GB</li>
        </ul>
      </>
    )
  }

  const dndClassNames = clsx(styles.dnd, {
    [styles.uploaded]: uploaded,
    [styles.uploading]: uploading,
    [styles.dndReject]: isDragReject,
    [styles.dndAccept]: isDragAccept
  })
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className={dndClassNames}>
        <img src='https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/cloud_icon-6e07be44878e69ee3f7bff3b78405b76.svg' width='49' />
        {renderDndContent()}
      </div>

    </div>

  )
}
