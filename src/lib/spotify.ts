import SpotifyWebApi from 'spotify-web-api-node'

const scopes = [
    'user-read-email',
    'playlist-read-private',
    'playlist-read-collaborative',
    'streaming',
    'user-read-private',
    'user-library-read',
    //'user-libraby-modify',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-follow-read'
].join(',')

const params = {
    scope: scopes
}

const queryParamString = new URLSearchParams(params)

export const LOGIN_URL = "https://accounts.spotify/authorize?" + queryParamString.toString()

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET
})

export default spotifyApi
