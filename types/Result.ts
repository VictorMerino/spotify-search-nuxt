type Artist = {
  name: string
}

type Image = {
  url: string
}

export interface Result {
  id: string
  artists: Artist[]
  duration?: number
  images: Image[]
  name: string
  total_tracks?: number
}
