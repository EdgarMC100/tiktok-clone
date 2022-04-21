import { supabase } from './supabase'

const prefix = import.meta.env.VITE_SUPABASE_STORAGE_URL

export const postVideo = async ({ videoFile }) => {
  const filename = window.crypto.randomUUID()
  const { data, error } = await supabase.storage
    .from('videos')
    .upload(`uploads/${filename}.mp4`, videoFile)
  console.log(data, error, 'DE')
  const file = data?.Key ? `${prefix}${data.Key}` : ''
  return [error, file]
}

export const getVideos = async () => {
  const { data, error } = await supabase
    .from('videos')
    .select(`*, user:user_id (
      avatar,
      username,
      id
    )`)
    // .select(`*, users (
    //   avatar,
    //   username
    // )`)
    .order(
      'created_at',
      { ascending: false }
    )

  // .order(
  //   'created_at',
  //   { ascending: false }
  // )
  return [error, data]
}
