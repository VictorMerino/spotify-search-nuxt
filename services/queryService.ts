export const getResultsFromQuery = async (text: string) => {
  let resultToSend = {}
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
    const result = await response.json()
    resultToSend = result
    return result
  } catch (error) {
    console.log(error)
  }
  return resultToSend
}

const _requestAccessToken = async () => {
  return await fetch('http://localhost:3030/register-spotify-app')
    .then(result => {
      console.log('line 31', result)
      return result.json()
    })
    .catch(error => console.log(error))
}
