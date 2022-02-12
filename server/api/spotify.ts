const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const spotifyGetTokenURL = process.env.ACCOUNT_TOKEN_URL

export default async (req, res) => {
  console.log(clientId)
  console.log(clientSecret)
  console.log(spotifyGetTokenURL)
  return 'Spotify'
}
