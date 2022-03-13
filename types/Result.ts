type Artist = {
  name: string
}

type Image = {
  url: string
}

export type ResultType = 'artist' | 'track' | 'album'

export interface Result {
  id: string
  artists: Artist[]
  duration?: number
  images: Image[]
  name: string
  total_tracks?: number
  type: ResultType
  error?: unknown
}
