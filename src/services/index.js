import { supabase } from './supabase'

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
