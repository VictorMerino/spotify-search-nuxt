export const getResultsFromQuery = async (text: string) => {
  let result = {}
  const json = await _requestAccessToken()
  const token = json.token

  const searchUrl = 'https://api.spotify.com/v1/search'
  const searchType = 'album,artist,track'
  const getResultsEndpoint = `${searchUrl}?type=${searchType}&q=${text}`

  try {
    const response = await fetch(getResultsEndpoint, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })

    result = response.ok
      ? await response.json()
      : { error: await response.json() }
  } catch (error) {
    console.log(error)
  }
  return result
}

export const getTrack = async (trackId: string) => {
  let result = {}
  const json = await _requestAccessToken()
  const token = json.token

  const trackUrl = 'https://api.spotify.com/v1/tracks'
  const getResultsEndpoint = `${trackUrl}?ids=${trackId}`

  try {
    const response = await fetch(getResultsEndpoint, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })

    result = response.ok
      ? await response.json()
      : { error: await response.json() }
  } catch (error) {
    console.log(error)
  }
  return result
}

const _requestAccessToken = async () => {
  return await fetch('/api/spotify')
    .then(result => {
      return result.json()
    })
    .catch(error => console.log(error))
}
