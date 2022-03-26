import requestPromise from 'request-promise'

const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const spotifyGetTokenURL = process.env.ACCOUNT_TOKEN_URL

export default async () => {
  const authOptions = {
    url: spotifyGetTokenURL,
    headers: {
      Authorization:
        'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  }

  let token: string
  let returnedError: Error

  await requestPromise.post(authOptions, function (error, response, body) {
    if (error) {
      returnedError = error
    } else {
      token = body.access_token
    }
  })

  return { token, error: returnedError }
}
